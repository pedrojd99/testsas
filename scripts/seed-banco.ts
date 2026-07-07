import { inArray } from "drizzle-orm";
import { SEED_BANCO } from "../lib/content/bancos";
import { db, preguntas, temas } from "../lib/db";

// Carga el banco completo de preguntas por tema. Idempotente: no reinserta
// preguntas cuyo enunciado ya exista. Las generadas entran con revisada=false.
async function main() {
  console.log(`Seed banco: ${SEED_BANCO.length} preguntas en el seed...`);

  // Mapa slug de tema -> {temaId, categoriaId}. Los slugs son unicos por
  // categoria y el comun vive solo bajo la categoria estructural 'comun'.
  const slugs = [...new Set(SEED_BANCO.map((p) => p.temaSlug))];
  const filasTemas = await db
    .select({ id: temas.id, slug: temas.slug, categoriaId: temas.categoriaId })
    .from(temas)
    .where(inArray(temas.slug, slugs));
  const temaPorSlug = new Map(filasTemas.map((t) => [t.slug, t]));

  const sinTema = slugs.filter((s) => !temaPorSlug.has(s));
  if (sinTema.length > 0) {
    console.warn(`  AVISO: ${sinTema.length} slugs sin tema en DB: ${sinTema.join(", ")}`);
  }

  const existentes = await db.select({ enunciado: preguntas.enunciado }).from(preguntas);
  const yaExiste = new Set(existentes.map((p) => p.enunciado));

  const nuevas = SEED_BANCO.filter(
    (p) => !yaExiste.has(p.enunciado) && temaPorSlug.has(p.temaSlug),
  ).map((p) => {
    const tema = temaPorSlug.get(p.temaSlug)!;
    return {
      categoriaId: tema.categoriaId,
      temaId: tema.id,
      enunciado: p.enunciado,
      opciones: p.opciones as string[],
      correctaIndex: p.correctaIndex,
      explicacion: p.explicacion,
      fuente: p.fuente,
      dificultad: p.dificultad,
      oficial: p.oficial ?? false,
      revisada: false,
    };
  });

  // Insercion por lotes
  const LOTE = 100;
  for (let i = 0; i < nuevas.length; i += LOTE) {
    await db.insert(preguntas).values(nuevas.slice(i, i + LOTE));
    console.log(`  ${Math.min(i + LOTE, nuevas.length)}/${nuevas.length}`);
  }

  console.log(`Seed banco: ${nuevas.length} preguntas nuevas insertadas.`);
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
