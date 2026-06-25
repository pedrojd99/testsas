import { eq, sql } from "drizzle-orm";
import { generarPreguntas } from "../lib/ai/generador";
import { validarPregunta } from "../lib/ai/validador";
import { categorias, db, preguntas, temario, temas } from "../lib/db";

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

    if (aprobadas.length > 0) {
      await db.insert(preguntas).values(
        aprobadas.map((p) => ({
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
        .set({ preguntasGeneradas: sql`${temario.preguntasGeneradas} + ${aprobadas.length}` })
        .where(eq(temario.id, f.temarioId));
      insertadas += aprobadas.length;
    }

    console.log(
      `  [${f.categoriaSlug}/${f.tema}] generadas ${candidatas.length}, aprobadas ${aprobadas.length}`,
    );
  }

  console.log(
    `\nResumen: ${generadas} generadas · ${insertadas} insertadas · ${descartadas} descartadas por el validador.`,
  );
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
