import "server-only";
import { categorias, db, preguntas, progresoPregunta, respuestas, sesiones, temas } from "@/lib/db";
import { and, count, eq, isNotNull, lte, sql } from "drizzle-orm";

export async function getCategorias() {
  const cats = await db.query.categorias.findMany({
    where: eq(categorias.activa, true),
    orderBy: (c, { asc }) => asc(c.orden),
  });

  // Conteo de preguntas activas por categoria
  const counts = await db
    .select({ categoriaId: preguntas.categoriaId, total: count() })
    .from(preguntas)
    .where(eq(preguntas.activa, true))
    .groupBy(preguntas.categoriaId);

  const countMap = new Map(counts.map((c) => [c.categoriaId, c.total]));
  return cats.map((c) => ({ ...c, totalPreguntas: countMap.get(c.id) ?? 0 }));
}

export async function getCategoriaPorSlug(slug: string) {
  const categoria = await db.query.categorias.findFirst({
    where: eq(categorias.slug, slug),
  });
  if (!categoria) return null;

  const temasCat = await db.query.temas.findMany({
    where: eq(temas.categoriaId, categoria.id),
    orderBy: (t, { asc }) => [asc(t.bloque), asc(t.orden)],
  });

  const counts = await db
    .select({ temaId: preguntas.temaId, total: count() })
    .from(preguntas)
    .where(and(eq(preguntas.categoriaId, categoria.id), eq(preguntas.activa, true)))
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

  return {
    recientes,
    totales,
    porTema: porTema.map((t) => ({
      ...t,
      precision: t.total > 0 ? Math.round((Number(t.aciertos) / t.total) * 100) : 0,
    })),
    repasoPendiente: pendientes?.total ?? 0,
  };
}
