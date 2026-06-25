import "server-only";
import { categorias, db, preguntas, temario, temas } from "@/lib/db";
import { and, count, desc, eq, ilike, sql } from "drizzle-orm";

export interface PreguntasFiltro {
  categoriaSlug?: string;
  temaId?: string;
  soloNoRevisadas?: boolean;
  q?: string;
  page?: number;
}

const POR_PAGINA = 40;

export async function getAdminResumen() {
  const cats = await db.query.categorias.findMany({
    orderBy: (c, { asc }) => asc(c.orden),
  });

  const counts = await db
    .select({
      categoriaId: preguntas.categoriaId,
      total: count(),
      revisadas: sql<number>`sum(case when ${preguntas.revisada} then 1 else 0 end)`,
      activas: sql<number>`sum(case when ${preguntas.activa} then 1 else 0 end)`,
    })
    .from(preguntas)
    .groupBy(preguntas.categoriaId);
  const countMap = new Map(counts.map((c) => [c.categoriaId, c]));

  const fragmentos = await db
    .select({ categoriaId: temas.categoriaId, total: count() })
    .from(temario)
    .innerJoin(temas, eq(temario.temaId, temas.id))
    .groupBy(temas.categoriaId);
  const fragMap = new Map(fragmentos.map((f) => [f.categoriaId, f.total]));

  return cats.map((c) => {
    const k = countMap.get(c.id);
    return {
      id: c.id,
      slug: c.slug,
      nombre: c.nombre,
      activa: c.activa,
      total: Number(k?.total ?? 0),
      revisadas: Number(k?.revisadas ?? 0),
      activas: Number(k?.activas ?? 0),
      fragmentos: fragMap.get(c.id) ?? 0,
    };
  });
}

export async function getPreguntasAdmin(filtro: PreguntasFiltro) {
  const page = Math.max(1, filtro.page ?? 1);

  const condiciones = [];
  if (filtro.categoriaSlug) condiciones.push(eq(categorias.slug, filtro.categoriaSlug));
  if (filtro.temaId) condiciones.push(eq(preguntas.temaId, filtro.temaId));
  if (filtro.soloNoRevisadas) condiciones.push(eq(preguntas.revisada, false));
  if (filtro.q) condiciones.push(ilike(preguntas.enunciado, `%${filtro.q}%`));
  const where = condiciones.length ? and(...condiciones) : undefined;

  const filas = await db
    .select({
      id: preguntas.id,
      enunciado: preguntas.enunciado,
      opciones: preguntas.opciones,
      correctaIndex: preguntas.correctaIndex,
      explicacion: preguntas.explicacion,
      fuente: preguntas.fuente,
      dificultad: preguntas.dificultad,
      revisada: preguntas.revisada,
      activa: preguntas.activa,
      categoria: categorias.nombre,
      categoriaSlug: categorias.slug,
      tema: temas.nombre,
    })
    .from(preguntas)
    .innerJoin(categorias, eq(preguntas.categoriaId, categorias.id))
    .leftJoin(temas, eq(preguntas.temaId, temas.id))
    .where(where)
    .orderBy(desc(preguntas.createdAt))
    .limit(POR_PAGINA + 1)
    .offset((page - 1) * POR_PAGINA);

  const hayMas = filas.length > POR_PAGINA;
  return { preguntas: filas.slice(0, POR_PAGINA), page, hayMas };
}

export async function getCategoriasParaFiltro() {
  return db.query.categorias.findMany({
    columns: { slug: true, nombre: true },
    orderBy: (c, { asc }) => asc(c.orden),
  });
}
