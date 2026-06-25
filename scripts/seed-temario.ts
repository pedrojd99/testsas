import { eq } from "drizzle-orm";
import { SEED_TEMARIO } from "../lib/content/temario-data";
import { db, temario, temas } from "../lib/db";

async function main() {
  console.log("Seed temario: empezando...");
  let insertados = 0;

  for (const [i, frag] of SEED_TEMARIO.entries()) {
    const tema = await db.query.temas.findFirst({ where: eq(temas.slug, frag.temaSlug) });
    if (!tema) {
      console.log(`  Aviso: tema '${frag.temaSlug}' no existe (ejecuta antes pnpm db:seed)`);
      continue;
    }

    // Evita duplicar por (tema, fuente)
    const existe = await db.query.temario.findFirst({
      where: eq(temario.temaId, tema.id),
    });
    const yaCargado =
      existe &&
      (
        await db.query.temario.findMany({
          where: eq(temario.temaId, tema.id),
          columns: { fuente: true },
        })
      ).some((t) => t.fuente === frag.fuente);

    if (yaCargado) continue;

    await db.insert(temario).values({
      temaId: tema.id,
      titulo: frag.titulo,
      contenido: frag.contenido,
      fuente: frag.fuente,
      orden: i,
    });
    insertados++;
  }

  console.log(`Seed temario: ${insertados} fragmentos nuevos cargados.`);
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
