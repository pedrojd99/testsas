import { asc, eq } from "drizzle-orm";
import { generarApunte } from "../lib/ai/temario-generador";
import { apuntes, categorias, db, temario, temas } from "../lib/db";

// Uso:
//   pnpm gen-temario              -> genera apuntes de TODOS los temas sin apuntes
//   pnpm gen-temario celador      -> solo una categoria
//   pnpm gen-temario comun        -> solo el temario comun
const [categoriaSlug] = process.argv.slice(2);

async function main() {
  console.log(`Generador de temario: ${categoriaSlug ?? "todas las categorias"}`);

  // Temas ordenados: por categoria, comun antes que especifica, y orden interno
  const filas = await db
    .select({
      temaId: temas.id,
      tema: temas.nombre,
      bloque: temas.bloque,
      categoria: categorias.nombre,
      categoriaSlug: categorias.slug,
    })
    .from(temas)
    .innerJoin(categorias, eq(temas.categoriaId, categorias.id))
    .where(categoriaSlug ? eq(categorias.slug, categoriaSlug) : undefined)
    .orderBy(asc(categorias.orden), asc(temas.bloque), asc(temas.orden));

  let generados = 0;
  let saltados = 0;

  for (const f of filas) {
    const yaTiene = await db.query.apuntes.findFirst({ where: eq(apuntes.temaId, f.temaId) });
    if (yaTiene) {
      saltados++;
      continue;
    }

    // Fragmentos-fuente del tema (para anclar y citar temas juridicos)
    const fuentes = await db
      .select({ fuente: temario.fuente, contenido: temario.contenido })
      .from(temario)
      .where(eq(temario.temaId, f.temaId));

    const apunte = await generarApunte({
      tema: f.tema,
      categoria: f.categoria,
      bloque: f.bloque,
      fuentes,
    });

    if (!apunte) {
      console.log(`  [${f.categoriaSlug}] ${f.tema}: sin resultado`);
      continue;
    }

    const palabras = apunte.contenido.trim().split(/\s+/).length;
    await db.insert(apuntes).values({
      temaId: f.temaId,
      titulo: f.tema,
      resumen: apunte.resumen,
      contenido: apunte.contenido,
      puntosClave: apunte.puntosClave,
      palabras,
    });
    generados++;
    console.log(`  [${f.categoriaSlug}] ${f.tema} (${palabras} palabras)`);
  }

  console.log(`\nTemario: ${generados} apuntes generados, ${saltados} ya existian.`);
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
