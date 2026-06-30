import { eq, sql } from "drizzle-orm";
import { generarPreguntas } from "../lib/ai/generador";
import { validarPregunta } from "../lib/ai/validador";
import { categorias, db, preguntas, temario, temas } from "../lib/db";
import { dedupLote } from "../lib/dedup";

// Uso:
//   pnpm gen                      -> genera para todo el temario
//   pnpm gen celador             -> solo categoria celador
//   pnpm gen celador 8           -> 8 preguntas por fragmento
const [categoriaSlug, nArg] = process.argv.slice(2);
const N_POR_FRAGMENTO = Number(nArg) || 6;

async function main() {
  console.log(
    `Generador: ${categoriaSlug ?? "todas las categorias"}, ${N_POR_FRAGMENTO}/fragmento`,
  );

  const fragmentos = await db
    .select({
      temarioId: temario.id,
      contenido: temario.contenido,
      fuente: temario.fuente,
      temaId: temas.id,
      tema: temas.nombre,
      categoriaId: categorias.id,
      categoria: categorias.nombre,
      categoriaSlug: categorias.slug,
    })
    .from(temario)
    .innerJoin(temas, eq(temario.temaId, temas.id))
    .innerJoin(categorias, eq(temas.categoriaId, categorias.id))
    .where(categoriaSlug ? eq(categorias.slug, categoriaSlug) : undefined)
    .orderBy(temario.orden);

  if (fragmentos.length === 0) {
    console.log("No hay temario cargado. Ejecuta primero el seed de temario.");
    process.exit(0);
  }

  let generadas = 0;
  let insertadas = 0;
  let descartadas = 0;
  let duplicadas = 0;

  // Enunciados ya existentes por categoria (para evitar casi-duplicados)
  const vistosPorCategoria = new Map<string, string[]>();
  async function getVistos(categoriaId: string): Promise<string[]> {
    const cache = vistosPorCategoria.get(categoriaId);
    if (cache) return cache;
    const filas = await db
      .select({ enunciado: preguntas.enunciado })
      .from(preguntas)
      .where(eq(preguntas.categoriaId, categoriaId));
    const lista = filas.map((p) => p.enunciado);
    vistosPorCategoria.set(categoriaId, lista);
    return lista;
  }

  for (const f of fragmentos) {
    const candidatas = await generarPreguntas({
      temario: f.contenido,
      fuente: f.fuente,
      tema: f.tema,
      categoria: f.categoria,
      n: N_POR_FRAGMENTO,
    });
    generadas += candidatas.length;

    const aprobadas: typeof candidatas = [];
    for (const c of candidatas) {
      const v = await validarPregunta(c, f.contenido);
      if (v.valida) {
        aprobadas.push(c);
      } else if (v.correctaReal !== null && v.correctaReal !== c.correctaIndex) {
        // El validador corrige la opcion correcta -> reaprovecha la pregunta
        aprobadas.push({ ...c, correctaIndex: v.correctaReal });
      } else {
        descartadas++;
      }
    }

    // Dedup: descarta casi-duplicados de lo ya existente y dentro del lote
    const vistos = await getVistos(f.categoriaId);
    const antes = aprobadas.length;
    const unicas = dedupLote(aprobadas, vistos, 0.8);
    duplicadas += antes - unicas.length;

    if (unicas.length > 0) {
      await db.insert(preguntas).values(
        unicas.map((p) => ({
          categoriaId: f.categoriaId,
          temaId: f.temaId,
          temarioId: f.temarioId,
          enunciado: p.enunciado,
          opciones: p.opciones,
          correctaIndex: p.correctaIndex,
          explicacion: p.explicacion,
          fuente: p.fuente,
          dificultad: p.dificultad,
          oficial: false,
          revisada: true,
        })),
      );
      await db
        .update(temario)
        .set({ preguntasGeneradas: sql`${temario.preguntasGeneradas} + ${unicas.length}` })
        .where(eq(temario.id, f.temarioId));
      insertadas += unicas.length;
    }

    console.log(
      `  [${f.categoriaSlug}/${f.tema}] generadas ${candidatas.length}, insertadas ${unicas.length}`,
    );
  }

  console.log(
    `\nResumen: ${generadas} generadas · ${insertadas} insertadas · ${descartadas} descartadas (validador) · ${duplicadas} casi-duplicadas.`,
  );
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
