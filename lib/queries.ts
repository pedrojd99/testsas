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
import { and, count, desc, eq, inArray, isNotNull, lte, sql } from "drizzle-orm";

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
      opcionElegida: respuestas.opcionElegida,
      esCorrecta: respuestas.esCorrecta,
    })
    .from(respuestas)
    .innerJoin(preguntas, eq(respuestas.preguntaId, preguntas.id))
    .where(eq(respuestas.sesionId, sesionId))
    .orderBy(respuestas.createdAt);

  return { sesion, preguntas: filas };
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

  // Oposicion preferida (inicio rapido)
  const user = await db.query.usuarios.findFirst({
    where: eq(usuarios.id, usuarioId),
    columns: { categoriaPreferidaId: true },
  });
  const preferida = user?.categoriaPreferidaId
    ? await db.query.categorias.findFirst({
        where: eq(categorias.id, user.categoriaPreferidaId),
        columns: { slug: true, nombre: true },
      })
    : null;

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
