"use server";

import { getSession } from "@/lib/auth";
import {
  type SesionConfig,
  categorias,
  db,
  preguntas,
  progresoPregunta,
  respuestas,
  sesiones,
  temas,
} from "@/lib/db";
import { corregir } from "@/lib/scoring";
import { and, eq, inArray, sql } from "drizzle-orm";
import { redirect } from "next/navigation";

const COMUN_SLUG = "comun";

type Modo = "tema" | "simulacro" | "falladas" | "rapido";

const LIMITES: Record<Modo, number> = {
  tema: 20,
  simulacro: 100,
  falladas: 30,
  rapido: 10,
};

// IDs de temas de la categoria = especifico + comun (compartido)
async function temaIdsDeCategoria(categoriaId: string): Promise<string[]> {
  const comun = await db.query.categorias.findFirst({
    where: eq(categorias.slug, COMUN_SLUG),
  });
  const ids = comun ? [categoriaId, comun.id] : [categoriaId];
  const rows = await db.select({ id: temas.id }).from(temas).where(inArray(temas.categoriaId, ids));
  return rows.map((r) => r.id);
}

async function seleccionarPreguntaIds(
  usuarioId: string,
  categoriaId: string,
  modo: Modo,
  config: SesionConfig,
): Promise<string[]> {
  const limite = LIMITES[modo];

  // En modo tema el usuario ya elige temas concretos (comun o especifico);
  // en el resto, el pool es comun + especifico de la categoria.
  const temaIds =
    modo === "tema" && config.temaIds?.length
      ? config.temaIds
      : await temaIdsDeCategoria(categoriaId);
  if (temaIds.length === 0) return [];

  const base = and(inArray(preguntas.temaId, temaIds), eq(preguntas.activa, true));

  if (modo === "falladas") {
    const rows = await db
      .select({ id: preguntas.id })
      .from(preguntas)
      .innerJoin(progresoPregunta, eq(progresoPregunta.preguntaId, preguntas.id))
      .where(
        and(base, eq(progresoPregunta.usuarioId, usuarioId), sql`${progresoPregunta.nFallos} > 0`),
      )
      .orderBy(sql`random()`)
      .limit(LIMITES.falladas);
    return rows.map((r) => r.id);
  }

  const rows = await db
    .select({ id: preguntas.id })
    .from(preguntas)
    .where(base)
    .orderBy(sql`random()`)
    .limit(limite);
  return rows.map((r) => r.id);
}

export async function iniciarSesion(formData: FormData) {
  const session = await getSession();
  if (!session) redirect("/login");

  const categoriaSlug = String(formData.get("categoriaSlug"));
  const modo = String(formData.get("modo")) as Modo;
  const temaIds = formData.getAll("temaIds").map(String).filter(Boolean);

  const categoria = await db.query.categorias.findFirst({
    where: eq(categorias.slug, categoriaSlug),
  });
  if (!categoria) redirect("/categorias");

  const config: SesionConfig = {
    temaIds: temaIds.length ? temaIds : undefined,
    conPenalizacion: true,
    penalizacionDivisor: 3,
    tiempoLimiteSeg: modo === "simulacro" ? 100 * 60 : undefined,
  };

  const ids = await seleccionarPreguntaIds(session.uid, categoria.id, modo, config);
  if (ids.length === 0) {
    redirect(`/categorias/${categoriaSlug}?error=sin-preguntas`);
  }

  const [sesion] = await db
    .insert(sesiones)
    .values({
      usuarioId: session.uid,
      categoriaId: categoria.id,
      modo,
      config,
      totalPreguntas: ids.length,
    })
    .returning();

  // Una fila por pregunta (en blanco hasta responder); fija el set y el orden
  await db
    .insert(respuestas)
    .values(ids.map((preguntaId) => ({ sesionId: sesion.id, preguntaId })));

  redirect(`/test/${sesion.id}`);
}

export interface RespuestaEnviada {
  preguntaId: string;
  opcion: number | null;
  tiempoMs?: number;
}

export async function finalizarSesion(sesionId: string, enviadas: RespuestaEnviada[]) {
  const session = await getSession();
  if (!session) redirect("/login");

  const sesion = await db.query.sesiones.findFirst({ where: eq(sesiones.id, sesionId) });
  if (!sesion || sesion.usuarioId !== session.uid) redirect("/dashboard");
  if (sesion.finishedAt) redirect(`/test/${sesionId}/resultado`);

  const preguntaIds = enviadas.map((e) => e.preguntaId);
  const preguntasMap = new Map(
    (
      await db
        .select({ id: preguntas.id, correctaIndex: preguntas.correctaIndex })
        .from(preguntas)
        .where(inArray(preguntas.id, preguntaIds))
    ).map((p) => [p.id, p.correctaIndex]),
  );

  let aciertos = 0;
  let fallos = 0;
  let enBlanco = 0;

  for (const e of enviadas) {
    const correcta = preguntasMap.get(e.preguntaId);
    if (correcta === undefined) continue;
    const esBlanco = e.opcion === null || e.opcion === undefined;
    const esCorrecta = !esBlanco && e.opcion === correcta;

    if (esBlanco) enBlanco++;
    else if (esCorrecta) aciertos++;
    else fallos++;

    await db
      .update(respuestas)
      .set({ opcionElegida: esBlanco ? null : e.opcion, esCorrecta, tiempoMs: e.tiempoMs })
      .where(and(eq(respuestas.sesionId, sesionId), eq(respuestas.preguntaId, e.preguntaId)));

    // Progreso para repaso espaciado (SM-2 simplificado)
    await actualizarProgreso(session.uid, e.preguntaId, esCorrecta, esBlanco);
  }

  const conf = (sesion.config ?? {}) as SesionConfig;
  const res = corregir({
    aciertos,
    fallos,
    enBlanco,
    total: sesion.totalPreguntas,
    conPenalizacion: conf.conPenalizacion,
    penalizacionDivisor: conf.penalizacionDivisor,
  });

  await db
    .update(sesiones)
    .set({ aciertos, fallos, enBlanco, nota: res.nota, finishedAt: sql`now()` })
    .where(eq(sesiones.id, sesionId));

  redirect(`/test/${sesionId}/resultado`);
}

async function actualizarProgreso(
  usuarioId: string,
  preguntaId: string,
  esCorrecta: boolean,
  esBlanco: boolean,
) {
  if (esBlanco) return;

  const existing = await db.query.progresoPregunta.findFirst({
    where: and(
      eq(progresoPregunta.usuarioId, usuarioId),
      eq(progresoPregunta.preguntaId, preguntaId),
    ),
  });

  // Calidad binaria simple: acierto=5, fallo=2 -> ajusta facilidad e intervalo
  const facilidadPrev = existing?.facilidad ?? 2.5;
  const facilidad = Math.max(1.3, facilidadPrev + (esCorrecta ? 0.1 : -0.2));
  const intervaloPrev = existing?.intervaloDias ?? 0;
  const intervalo = esCorrecta ? Math.max(1, Math.round((intervaloPrev || 1) * facilidad)) : 1;

  const proxima = sql`now() + (${intervalo} * interval '1 day')`;

  if (existing) {
    await db
      .update(progresoPregunta)
      .set({
        nAciertos: existing.nAciertos + (esCorrecta ? 1 : 0),
        nFallos: existing.nFallos + (esCorrecta ? 0 : 1),
        facilidad,
        intervaloDias: intervalo,
        ultimaVista: sql`now()`,
        proximaRevision: proxima,
      })
      .where(eq(progresoPregunta.id, existing.id));
  } else {
    await db.insert(progresoPregunta).values({
      usuarioId,
      preguntaId,
      nAciertos: esCorrecta ? 1 : 0,
      nFallos: esCorrecta ? 0 : 1,
      facilidad,
      intervaloDias: intervalo,
      ultimaVista: sql`now()`,
      proximaRevision: proxima,
    });
  }
}
