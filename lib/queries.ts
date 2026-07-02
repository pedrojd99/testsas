import "server-only";
import {
  apuntes,
  categorias,
  db,
  examenesOficiales,
  preguntas,
  progresoPregunta,
  respuestas,
  sesiones,
  temas,
  usuarios,
} from "@/lib/db";
import { and, count, desc, eq, inArray, isNotNull, isNull, lte, sql } from "drizzle-orm";

// Slug de la categoria estructural que agrupa el temario comun una sola vez.
export const COMUN_SLUG = "comun";

export async function getComunCategoria() {
  return db.query.categorias.findFirst({ where: eq(categorias.slug, COMUN_SLUG) });
}

export async function getCategorias() {
  const cats = await db.query.categorias.findMany({
    where: eq(categorias.activa, true),
    orderBy: (c, { asc }) => asc(c.orden),
  });

  const counts = await db
    .select({ categoriaId: preguntas.categoriaId, total: count() })
    .from(preguntas)
    .where(eq(preguntas.activa, true))
    .groupBy(preguntas.categoriaId);
  const countMap = new Map(counts.map((c) => [c.categoriaId, c.total]));

  // El comun se suma a todas las categorias reales (preguntas compartidas)
  const comun = await getComunCategoria();
  const comunCount = comun ? (countMap.get(comun.id) ?? 0) : 0;

  return cats.map((c) => ({ ...c, totalPreguntas: (countMap.get(c.id) ?? 0) + comunCount }));
}

export async function getCategoriaPorSlug(slug: string) {
  const categoria = await db.query.categorias.findFirst({
    where: eq(categorias.slug, slug),
  });
  if (!categoria) return null;

  const comun = await getComunCategoria();
  const categoriaIds = comun ? [categoria.id, comun.id] : [categoria.id];

  // Temas: comun (compartido) + especifico de la categoria
  const temasCat = await db.query.temas.findMany({
    where: inArray(temas.categoriaId, categoriaIds),
    orderBy: (t, { asc }) => [asc(t.bloque), asc(t.orden)],
  });

  const counts = await db
    .select({ temaId: preguntas.temaId, total: count() })
    .from(preguntas)
    .where(and(inArray(preguntas.categoriaId, categoriaIds), eq(preguntas.activa, true)))
    .groupBy(preguntas.temaId);
  const countMap = new Map(counts.map((c) => [c.temaId, c.total]));

  return {
    ...categoria,
    temas: temasCat.map((t) => ({ ...t, totalPreguntas: countMap.get(t.id) ?? 0 })),
    totalPreguntas: counts.reduce((acc, c) => acc + c.total, 0),
  };
}

// Carga la sesion para el runner SIN revelar la respuesta correcta
export async function getSesionParaRunner(sesionId: string, usuarioId: string) {
  const sesion = await db.query.sesiones.findFirst({ where: eq(sesiones.id, sesionId) });
  if (!sesion || sesion.usuarioId !== usuarioId) return null;

  const filas = await db
    .select({
      preguntaId: preguntas.id,
      enunciado: preguntas.enunciado,
      opciones: preguntas.opciones,
      dificultad: preguntas.dificultad,
    })
    .from(respuestas)
    .innerJoin(preguntas, eq(respuestas.preguntaId, preguntas.id))
    .where(eq(respuestas.sesionId, sesionId))
    .orderBy(respuestas.createdAt);

  return { sesion, preguntas: filas };
}

// Examenes oficiales historicos de una categoria, con su numero de preguntas
export async function getExamenesOficiales(categoriaSlug: string) {
  const categoria = await db.query.categorias.findFirst({
    where: eq(categorias.slug, categoriaSlug),
  });
  if (!categoria) return null;

  const examenes = await db.query.examenesOficiales.findMany({
    where: eq(examenesOficiales.categoriaId, categoria.id),
    orderBy: (e, { desc }) => desc(e.anio),
  });

  const counts = await db
    .select({ examenId: preguntas.examenOficialId, total: count() })
    .from(preguntas)
    .where(eq(preguntas.categoriaId, categoria.id))
    .groupBy(preguntas.examenOficialId);
  const countMap = new Map(counts.map((c) => [c.examenId, c.total]));

  return {
    categoria,
    examenes: examenes.map((e) => ({ ...e, totalPreguntas: countMap.get(e.id) ?? 0 })),
  };
}

// Igual que el runner pero CON la solucion (solo modo estudio / feedback inmediato)
export async function getSesionParaRunnerEstudio(sesionId: string, usuarioId: string) {
  const sesion = await db.query.sesiones.findFirst({ where: eq(sesiones.id, sesionId) });
  if (!sesion || sesion.usuarioId !== usuarioId) return null;

  const filas = await db
    .select({
      preguntaId: preguntas.id,
      enunciado: preguntas.enunciado,
      opciones: preguntas.opciones,
      dificultad: preguntas.dificultad,
      correctaIndex: preguntas.correctaIndex,
      explicacion: preguntas.explicacion,
      fuente: preguntas.fuente,
    })
    .from(respuestas)
    .innerJoin(preguntas, eq(respuestas.preguntaId, preguntas.id))
    .where(eq(respuestas.sesionId, sesionId))
    .orderBy(respuestas.createdAt);

  return { sesion, preguntas: filas };
}

// Resultado completo con correcta, explicacion y fuente para la revision
export async function getSesionResultado(sesionId: string, usuarioId: string) {
  const sesion = await db.query.sesiones.findFirst({
    where: eq(sesiones.id, sesionId),
    with: { categoria: true },
  });
  if (!sesion || sesion.usuarioId !== usuarioId) return null;

  const filas = await db
    .select({
      preguntaId: preguntas.id,
      enunciado: preguntas.enunciado,
      opciones: preguntas.opciones,
      correctaIndex: preguntas.correctaIndex,
      explicacion: preguntas.explicacion,
      fuente: preguntas.fuente,
      temaId: preguntas.temaId,
      opcionElegida: respuestas.opcionElegida,
      esCorrecta: respuestas.esCorrecta,
    })
    .from(respuestas)
    .innerJoin(preguntas, eq(respuestas.preguntaId, preguntas.id))
    .where(eq(respuestas.sesionId, sesionId))
    .orderBy(respuestas.createdAt);

  // Nota del intento anterior de la misma categoria y modo (comparativa)
  const anterior = await db.query.sesiones.findFirst({
    where: and(
      eq(sesiones.usuarioId, usuarioId),
      eq(sesiones.categoriaId, sesion.categoriaId),
      eq(sesiones.modo, sesion.modo),
      isNotNull(sesiones.finishedAt),
      sql`${sesiones.startedAt} < ${sesion.startedAt}`,
    ),
    orderBy: (s, { desc }) => desc(s.startedAt),
    columns: { nota: true },
  });

  const percentil = await getPercentil(sesion.categoriaId, sesion.modo, sesion.nota);

  return { sesion, preguntas: filas, notaAnterior: anterior?.nota ?? null, percentil };
}

// Percentil anonimo entre todos los intentos de la misma oposicion y modo.
// Solo significativo con muestra suficiente; devuelve null si no hay bastantes.
const PERCENTIL_MIN_MUESTRA = 10;

export async function getPercentil(
  categoriaId: string,
  modo: (typeof sesiones.$inferSelect)["modo"],
  nota: number | null,
): Promise<{ valor: number; muestra: number } | null> {
  if (nota === null) return null;
  const [row] = await db
    .select({
      total: count(),
      debajo: sql<number>`sum(case when ${sesiones.nota} <= ${nota} then 1 else 0 end)`,
    })
    .from(sesiones)
    .where(
      and(
        eq(sesiones.categoriaId, categoriaId),
        eq(sesiones.modo, modo),
        isNotNull(sesiones.finishedAt),
        isNotNull(sesiones.nota),
      ),
    );

  const total = Number(row?.total ?? 0);
  if (total < PERCENTIL_MIN_MUESTRA) return null;
  const valor = Math.round((Number(row?.debajo ?? 0) / total) * 100);
  return { valor, muestra: total };
}

export interface RankingEntrada {
  puesto: number;
  nota: number;
  esTuyo: boolean;
}
export interface RankingSemanal {
  total: number;
  top: RankingEntrada[];
  tu: { puesto: number; nota: number } | null;
}

// Ranking semanal anonimo por oposicion: mejor nota de cada opositor en la
// semana ISO actual. Se reinicia solo cada lunes (date_trunc 'week').
const RANKING_MIN_PARTICIPANTES = 3;

export async function getRankingSemanal(
  categoriaId: string,
  usuarioId: string,
): Promise<RankingSemanal> {
  const filas = await db
    .select({
      usuarioId: sesiones.usuarioId,
      mejor: sql<number>`max(${sesiones.nota})`,
    })
    .from(sesiones)
    .where(
      and(
        eq(sesiones.categoriaId, categoriaId),
        isNotNull(sesiones.finishedAt),
        isNotNull(sesiones.nota),
        sql`date_trunc('week', ${sesiones.finishedAt}) = date_trunc('week', now())`,
      ),
    )
    .groupBy(sesiones.usuarioId)
    .orderBy(sql`max(${sesiones.nota}) desc`);

  // Ranking de competicion (empates comparten puesto): 1, 2, 2, 4...
  let puesto = 0;
  let prev: number | null = null;
  const ranked = filas.map((f, i) => {
    const nota = Number(f.mejor);
    if (prev === null || nota < prev) puesto = i + 1;
    prev = nota;
    return { usuarioId: f.usuarioId, nota, puesto };
  });

  const tuEntrada = ranked.find((r) => r.usuarioId === usuarioId) ?? null;

  return {
    total: ranked.length,
    top: ranked.slice(0, 10).map((r) => ({
      puesto: r.puesto,
      nota: r.nota,
      esTuyo: r.usuarioId === usuarioId,
    })),
    tu: tuEntrada ? { puesto: tuEntrada.puesto, nota: tuEntrada.nota } : null,
  };
}

// Resumen compacto para el panel: solo el puesto del usuario si hay muestra.
export async function getRankingResumen(
  categoriaId: string,
  usuarioId: string,
): Promise<{ puesto: number; total: number; nota: number } | null> {
  const r = await getRankingSemanal(categoriaId, usuarioId);
  if (r.total < RANKING_MIN_PARTICIPANTES || !r.tu) return null;
  return { puesto: r.tu.puesto, total: r.total, nota: r.tu.nota };
}

export interface BuscadorItem {
  temaId: string;
  nombre: string;
  categoria: string;
  bloque: "comun" | "especifica";
  tieneApuntes: boolean;
}

// Indice ligero para el buscador global (temas de todas las oposiciones).
export async function getBuscadorIndice(): Promise<BuscadorItem[]> {
  const filas = await db
    .select({
      temaId: temas.id,
      nombre: temas.nombre,
      categoria: categorias.nombre,
      bloque: temas.bloque,
      tieneApuntes: sql<boolean>`${apuntes.id} is not null`,
    })
    .from(temas)
    .innerJoin(categorias, eq(temas.categoriaId, categorias.id))
    .leftJoin(apuntes, eq(apuntes.temaId, temas.id))
    .orderBy(categorias.orden, temas.bloque, temas.orden);

  return filas.map((f) => ({ ...f, bloque: f.bloque as "comun" | "especifica" }));
}

// Indice del temario de una categoria (comun + especifico), en orden,
// con marca de si cada tema ya tiene apuntes para estudiar/escuchar.
export async function getTemarioIndice(categoriaSlug: string) {
  const categoria = await db.query.categorias.findFirst({
    where: eq(categorias.slug, categoriaSlug),
  });
  if (!categoria) return null;

  const comun = await getComunCategoria();
  const categoriaIds = comun ? [categoria.id, comun.id] : [categoria.id];

  const filas = await db
    .select({
      id: temas.id,
      nombre: temas.nombre,
      bloque: temas.bloque,
      orden: temas.orden,
      tieneApuntes: sql<boolean>`${apuntes.id} is not null`,
      palabras: apuntes.palabras,
    })
    .from(temas)
    .leftJoin(apuntes, eq(apuntes.temaId, temas.id))
    .where(inArray(temas.categoriaId, categoriaIds))
    .orderBy(temas.bloque, temas.orden);

  return { categoria, temas: filas };
}

export async function getApunteTema(temaId: string) {
  const tema = await db.query.temas.findFirst({
    where: eq(temas.id, temaId),
    with: { categoria: { columns: { nombre: true, slug: true } } },
  });
  if (!tema) return null;
  const apunte = await db.query.apuntes.findFirst({ where: eq(apuntes.temaId, temaId) });
  return { tema, apunte };
}

export async function getDashboard(usuarioId: string) {
  const recientes = await db.query.sesiones.findMany({
    where: and(eq(sesiones.usuarioId, usuarioId), isNotNull(sesiones.finishedAt)),
    with: { categoria: { columns: { nombre: true, slug: true } } },
    orderBy: (s, { desc }) => desc(s.finishedAt),
    limit: 8,
  });

  const [totales] = await db
    .select({
      sesiones: count(),
      aciertos: sql<number>`coalesce(sum(${sesiones.aciertos}), 0)`,
      fallos: sql<number>`coalesce(sum(${sesiones.fallos}), 0)`,
      enBlanco: sql<number>`coalesce(sum(${sesiones.enBlanco}), 0)`,
    })
    .from(sesiones)
    .where(and(eq(sesiones.usuarioId, usuarioId), isNotNull(sesiones.finishedAt)));

  // Precision por tema (de las respuestas del usuario)
  const porTema = await db
    .select({
      tema: temas.nombre,
      categoria: categorias.nombre,
      total: count(),
      aciertos: sql<number>`sum(case when ${respuestas.esCorrecta} then 1 else 0 end)`,
    })
    .from(respuestas)
    .innerJoin(sesiones, eq(respuestas.sesionId, sesiones.id))
    .innerJoin(preguntas, eq(respuestas.preguntaId, preguntas.id))
    .innerJoin(temas, eq(preguntas.temaId, temas.id))
    .innerJoin(categorias, eq(temas.categoriaId, categorias.id))
    .where(and(eq(sesiones.usuarioId, usuarioId), isNotNull(respuestas.opcionElegida)))
    .groupBy(temas.nombre, categorias.nombre)
    .orderBy(sql`sum(case when ${respuestas.esCorrecta} then 1 else 0 end)::float / count(*)`)
    .limit(10);

  // Preguntas pendientes de repaso (espaciado)
  const [pendientes] = await db
    .select({ total: count() })
    .from(progresoPregunta)
    .where(
      and(
        eq(progresoPregunta.usuarioId, usuarioId),
        lte(progresoPregunta.proximaRevision, sql`now()`),
      ),
    );

  const racha = await getRacha(usuarioId);

  const [mejor] = await db
    .select({ nota: sql<number>`coalesce(max(${sesiones.nota}), 0)` })
    .from(sesiones)
    .where(and(eq(sesiones.usuarioId, usuarioId), isNotNull(sesiones.finishedAt)));
  const mejorNota = Number(mejor?.nota ?? 0);

  // Sesion sin terminar (para reanudar)
  const sesionEnCurso = await db.query.sesiones.findFirst({
    where: and(eq(sesiones.usuarioId, usuarioId), isNull(sesiones.finishedAt)),
    with: { categoria: { columns: { nombre: true } } },
    orderBy: (s, { desc }) => desc(s.startedAt),
  });
  const enCurso = sesionEnCurso
    ? {
        id: sesionEnCurso.id,
        categoria: sesionEnCurso.categoria.nombre,
        total: sesionEnCurso.totalPreguntas,
      }
    : null;

  // Tendencia: nota de las ultimas sesiones, en orden cronologico
  const tendenciaRows = await db
    .select({ nota: sesiones.nota, finishedAt: sesiones.finishedAt })
    .from(sesiones)
    .where(
      and(
        eq(sesiones.usuarioId, usuarioId),
        isNotNull(sesiones.finishedAt),
        isNotNull(sesiones.nota),
      ),
    )
    .orderBy(desc(sesiones.finishedAt))
    .limit(15);
  const tendencia = tendenciaRows.reverse().map((r) => Number(r.nota));

  // Oposicion preferida + plan de estudio
  const user = await db.query.usuarios.findFirst({
    where: eq(usuarios.id, usuarioId),
    columns: {
      categoriaPreferidaId: true,
      fechaExamen: true,
      objetivoDiario: true,
      recibirResumen: true,
    },
  });
  const preferida = user?.categoriaPreferidaId
    ? await db.query.categorias.findFirst({
        where: eq(categorias.id, user.categoriaPreferidaId),
        columns: { slug: true, nombre: true },
      })
    : null;

  const rankingResumen = user?.categoriaPreferidaId
    ? await getRankingResumen(user.categoriaPreferidaId, usuarioId)
    : null;

  // Preguntas respondidas hoy (sesiones finalizadas hoy)
  const [hoy] = await db
    .select({ total: sql<number>`coalesce(sum(${sesiones.totalPreguntas}), 0)` })
    .from(sesiones)
    .where(
      and(
        eq(sesiones.usuarioId, usuarioId),
        isNotNull(sesiones.finishedAt),
        sql`(${sesiones.finishedAt} at time zone 'UTC')::date = (now() at time zone 'UTC')::date`,
      ),
    );
  const respondidasHoy = Number(hoy?.total ?? 0);

  const objetivoDiario = user?.objetivoDiario ?? 20;
  let plan: {
    fechaExamen: string | null;
    objetivoDiario: number;
    respondidasHoy: number;
    diasRestantes: number | null;
  } | null = null;
  if (user?.fechaExamen || respondidasHoy > 0) {
    const diasRestantes = user?.fechaExamen
      ? Math.max(0, Math.ceil((user.fechaExamen.getTime() - Date.now()) / (24 * 60 * 60 * 1000)))
      : null;
    plan = {
      fechaExamen: user?.fechaExamen ? user.fechaExamen.toISOString().slice(0, 10) : null,
      objetivoDiario,
      respondidasHoy,
      diasRestantes,
    };
  }

  return {
    recientes,
    totales,
    porTema: porTema.map((t) => ({
      ...t,
      precision: t.total > 0 ? Math.round((Number(t.aciertos) / t.total) * 100) : 0,
    })),
    repasoPendiente: pendientes?.total ?? 0,
    racha,
    tendencia,
    preferida,
    enCurso,
    plan,
    mejorNota,
    recibirResumen: user?.recibirResumen ?? true,
    rankingResumen,
  };
}

// Racha de dias consecutivos con al menos un test completado.
export async function getRacha(usuarioId: string): Promise<number> {
  const rows = await db
    .select({ dia: sql<string>`(${sesiones.finishedAt} at time zone 'UTC')::date::text` })
    .from(sesiones)
    .where(and(eq(sesiones.usuarioId, usuarioId), isNotNull(sesiones.finishedAt)))
    .groupBy(sql`(${sesiones.finishedAt} at time zone 'UTC')::date`);

  const dias = new Set(rows.map((r) => r.dia));
  const fmt = (d: Date) => d.toISOString().slice(0, 10);

  const cursor = new Date();
  // Si hoy aun no hay actividad, la racha puede venir desde ayer.
  if (!dias.has(fmt(cursor))) cursor.setUTCDate(cursor.getUTCDate() - 1);

  let racha = 0;
  while (dias.has(fmt(cursor))) {
    racha++;
    cursor.setUTCDate(cursor.getUTCDate() - 1);
  }
  return racha;
}
