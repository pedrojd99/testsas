import { eq } from "drizzle-orm";
import { SEED_APUNTES } from "../lib/content/apuntes-data";
import { apuntes, db, temas } from "../lib/db";

async function main() {
  console.log("Seed apuntes: empezando...");
  let insertados = 0;

  for (const a of SEED_APUNTES) {
    // El slug comun existe solo bajo la categoria 'comun' tras el refactor
    const destinos = await db.query.temas.findMany({ where: eq(temas.slug, a.temaSlug) });
    for (const tema of destinos) {
      const existe = await db.query.apuntes.findFirst({ where: eq(apuntes.temaId, tema.id) });
      if (existe) continue;

      await db.insert(apuntes).values({
        temaId: tema.id,
        titulo: a.titulo,
        resumen: a.resumen,
        contenido: a.contenido,
        puntosClave: a.puntosClave,
        palabras: a.contenido.trim().split(/\s+/).length,
      });
      insertados++;
    }
  }

  console.log(`Seed apuntes: ${insertados} apuntes cargados.`);
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
