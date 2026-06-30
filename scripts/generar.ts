import { and, eq, isNotNull, sql } from "drizzle-orm";
import { embedTextos, embeddingsDisponibles } from "../lib/ai/embeddings";
import { generarPreguntas } from "../lib/ai/generador";
import { validarPregunta } from "../lib/ai/validador";
import { categorias, db, preguntas, temario, temas } from "../lib/db";
import { dedupLote, esDuplicadoSemantico } from "../lib/dedup";

const UMBRAL_SEMANTICO = 0.9;

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

  const usaEmbeddings = embeddingsDisponibles();
  console.log(`Dedup semantico (embeddings): ${usaEmbeddings ? "activo" : "no (solo lexico)"}`);

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

  // Embeddings existentes por categoria (para el dedup semantico)
  const embsPorCategoria = new Map<string, number[][]>();
  async function getEmbs(categoriaId: string): Promise<number[][]> {
    const cache = embsPorCategoria.get(categoriaId);
    if (cache) return cache;
    const filas = await db
      .select({ embedding: preguntas.embedding })
      .from(preguntas)
      .where(and(eq(preguntas.categoriaId, categoriaId), isNotNull(preguntas.embedding)));
    const lista = filas.map((p) => p.embedding as number[]);
    embsPorCategoria.set(categoriaId, lista);
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

    // 1) Dedup lexico: descarta casi-duplicados por tokens (barato)
    const vistos = await getVistos(f.categoriaId);
    const antes = aprobadas.length;
    const unicas = dedupLote(aprobadas, vistos, 0.8);
    duplicadas += antes - unicas.length;

    // 2) Dedup semantico: embeddings + coseno (si hay clave de Voyage)
    let finales = unicas;
    let vectores: (number[] | null)[] = unicas.map(() => null);
    if (usaEmbeddings && unicas.length > 0) {
      const vecs = await embedTextos(unicas.map((u) => u.enunciado));
      if (vecs) {
        const existentes = await getEmbs(f.categoriaId);
        const aceptadas: typeof unicas = [];
        const aceptadasVec: number[][] = [];
        for (let i = 0; i < unicas.length; i++) {
          if (esDuplicadoSemantico(vecs[i], existentes, UMBRAL_SEMANTICO)) {
            duplicadas++;
            continue;
          }
          aceptadas.push(unicas[i]);
          aceptadasVec.push(vecs[i]);
          existentes.push(vecs[i]); // dedup tambien dentro del lote
        }
        finales = aceptadas;
        vectores = aceptadasVec;
      }
    }

    if (finales.length > 0) {
      await db.insert(preguntas).values(
        finales.map((p, i) => ({
          categoriaId: f.categoriaId,
          temaId: f.temaId,
          temarioId: f.temarioId,
          enunciado: p.enunciado,
          opciones: p.opciones,
          correctaIndex: p.correctaIndex,
          explicacion: p.explicacion,
          fuente: p.fuente,
          dificultad: p.dificultad,
          embedding: vectores[i],
          oficial: false,
          revisada: true,
        })),
      );
      await db
        .update(temario)
        .set({ preguntasGeneradas: sql`${temario.preguntasGeneradas} + ${finales.length}` })
        .where(eq(temario.id, f.temarioId));
      insertadas += finales.length;
    }

    console.log(
      `  [${f.categoriaSlug}/${f.tema}] generadas ${candidatas.length}, insertadas ${finales.length}`,
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
