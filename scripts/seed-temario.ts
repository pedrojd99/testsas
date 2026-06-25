import { eq } from "drizzle-orm";
import { SEED_TEMARIO } from "../lib/content/temario-data";
import { db, temario, temas } from "../lib/db";

async function main() {
  console.log("Seed temario: empezando...");
  let insertados = 0;

  for (const frag of SEED_TEMARIO) {
    // Un mismo slug puede existir en varias categorias (el comun esta en las 4).
    // Cargamos el fragmento en todas para que el banco sea jugable en cada una.
    const destinos = await db.query.temas.findMany({ where: eq(temas.slug, frag.temaSlug) });
    if (destinos.length === 0) {
      console.log(`  Aviso: tema '${frag.temaSlug}' no existe (ejecuta antes pnpm db:seed)`);
      continue;
    }

    for (const tema of destinos) {
      const existentes = await db.query.temario.findMany({
        where: eq(temario.temaId, tema.id),
        columns: { contenido: true },
      });
      const yaCargado = existentes.some((t) => t.contenido === frag.contenido);
      if (yaCargado) continue;

      await db.insert(temario).values({
        temaId: tema.id,
        titulo: frag.titulo,
        contenido: frag.contenido,
        fuente: frag.fuente,
      });
      insertados++;
    }
  }

  console.log(`Seed temario: ${insertados} fragmentos cargados.`);
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
