import { eq } from "drizzle-orm";
import { SEED_APUNTES } from "../lib/content/apuntes";
import { apuntes, db, temas } from "../lib/db";

// Carga (o actualiza) los apuntes de estudio de todos los temas.
// Upsert por tema: permite regenerar contenido sin duplicar filas.
async function main() {
  console.log("Seed apuntes: empezando...");
  let insertados = 0;
  let actualizados = 0;

  for (const a of SEED_APUNTES) {
    const destinos = await db.query.temas.findMany({ where: eq(temas.slug, a.temaSlug) });
    if (destinos.length === 0) {
      console.warn(`  AVISO: no existe tema con slug "${a.temaSlug}"`);
      continue;
    }
    for (const tema of destinos) {
      const palabras = a.contenido.trim().split(/\s+/).length;
      const existe = await db.query.apuntes.findFirst({ where: eq(apuntes.temaId, tema.id) });

      if (existe) {
        await db
          .update(apuntes)
          .set({
            titulo: a.titulo,
            resumen: a.resumen,
            contenido: a.contenido,
            puntosClave: a.puntosClave,
            palabras,
          })
          .where(eq(apuntes.id, existe.id));
        actualizados++;
      } else {
        await db.insert(apuntes).values({
          temaId: tema.id,
          titulo: a.titulo,
          resumen: a.resumen,
          contenido: a.contenido,
          puntosClave: a.puntosClave,
          palabras,
        });
        insertados++;
      }
    }
  }

  console.log(`Seed apuntes: ${insertados} nuevos, ${actualizados} actualizados.`);
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
