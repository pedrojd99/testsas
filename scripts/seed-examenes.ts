import { and, eq } from "drizzle-orm";
import { SEED_EXAMENES } from "../lib/content/examenes-data";
import { categorias, db, examenesOficiales, preguntas, temas } from "../lib/db";

async function main() {
  console.log("Seed examenes oficiales: empezando...");
  let creados = 0;
  let preguntasInsertadas = 0;

  for (const ex of SEED_EXAMENES) {
    const categoria = await db.query.categorias.findFirst({
      where: eq(categorias.slug, ex.categoriaSlug),
    });
    if (!categoria) {
      console.log(
        `  Aviso: categoria '${ex.categoriaSlug}' no existe (ejecuta antes pnpm db:seed)`,
      );
      continue;
    }

    // Idempotente por (categoria, anio, titulo)
    const existe = await db.query.examenesOficiales.findFirst({
      where: and(
        eq(examenesOficiales.categoriaId, categoria.id),
        eq(examenesOficiales.anio, ex.anio),
        eq(examenesOficiales.titulo, ex.titulo),
      ),
    });
    if (existe) {
      console.log(`  Ya existe: ${ex.titulo}`);
      continue;
    }

    const [examen] = await db
      .insert(examenesOficiales)
      .values({
        categoriaId: categoria.id,
        anio: ex.anio,
        titulo: ex.titulo,
        descripcion: ex.descripcion,
        tiempoMin: ex.tiempoMin,
      })
      .returning();
    creados++;

    const filas = [];
    for (const [i, p] of ex.preguntas.entries()) {
      const tema = await db.query.temas.findFirst({ where: eq(temas.slug, p.temaSlug) });
      filas.push({
        categoriaId: categoria.id,
        temaId: tema?.id ?? null,
        examenOficialId: examen.id,
        posicion: i,
        enunciado: p.enunciado,
        opciones: p.opciones as string[],
        correctaIndex: p.correctaIndex,
        explicacion: p.explicacion,
        fuente: p.fuente,
        dificultad: "media" as const,
        oficial: true,
        revisada: true,
      });
    }
    await db.insert(preguntas).values(filas);
    preguntasInsertadas += filas.length;
    console.log(`  ${ex.titulo}: ${filas.length} preguntas`);
  }

  console.log(`Seed examenes: ${creados} examenes, ${preguntasInsertadas} preguntas.`);
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
