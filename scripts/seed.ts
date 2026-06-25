import { eq } from "drizzle-orm";
import { hashPassword } from "../lib/auth";
import { SEED_CATEGORIAS } from "../lib/content/seed-data";
import { categorias, db, preguntas, temas, usuarios } from "../lib/db";

async function main() {
  console.log("Seed: empezando...");

  for (const [i, cat] of SEED_CATEGORIAS.entries()) {
    // Categoria (idempotente por slug)
    const existing = await db.query.categorias.findFirst({
      where: eq(categorias.slug, cat.slug),
    });

    const [categoria] = existing
      ? [existing]
      : await db
          .insert(categorias)
          .values({
            slug: cat.slug,
            nombre: cat.nombre,
            descripcion: cat.descripcion,
            orden: i,
            activa: cat.activa ?? true,
          })
          .returning();

    console.log(`  Categoria: ${categoria.nombre}`);

    // Temas
    const temaIdBySlug = new Map<string, string>();
    for (const [j, tema] of cat.temas.entries()) {
      const existingTema = await db.query.temas.findFirst({
        where: eq(temas.slug, tema.slug),
      });
      const [t] = existingTema
        ? [existingTema]
        : await db
            .insert(temas)
            .values({
              categoriaId: categoria.id,
              slug: tema.slug,
              nombre: tema.nombre,
              bloque: tema.bloque,
              orden: j,
            })
            .returning();
      temaIdBySlug.set(tema.slug, t.id);
    }

    // Preguntas (evita duplicar por enunciado dentro de la categoria)
    const yaExisten = await db.query.preguntas.findMany({
      where: eq(preguntas.categoriaId, categoria.id),
      columns: { enunciado: true },
    });
    const enunciadosExistentes = new Set(yaExisten.map((p) => p.enunciado));

    const nuevas = cat.preguntas
      .filter((p) => !enunciadosExistentes.has(p.enunciado))
      .map((p) => ({
        categoriaId: categoria.id,
        temaId: temaIdBySlug.get(p.temaSlug) ?? null,
        enunciado: p.enunciado,
        opciones: p.opciones as string[],
        correctaIndex: p.correctaIndex,
        explicacion: p.explicacion,
        fuente: p.fuente,
        dificultad: p.dificultad,
        oficial: p.oficial ?? false,
        revisada: true,
      }));

    if (nuevas.length > 0) {
      await db.insert(preguntas).values(nuevas);
    }
    console.log(`    ${nuevas.length} preguntas nuevas (${cat.preguntas.length} totales en seed)`);
  }

  // Usuario admin demo
  const adminEmail = "admin@testsas.es";
  const adminExists = await db.query.usuarios.findFirst({ where: eq(usuarios.email, adminEmail) });
  if (!adminExists) {
    await db.insert(usuarios).values({
      email: adminEmail,
      passwordHash: await hashPassword("admin1234"),
      nombre: "Admin",
      rol: "admin",
      plan: "premium",
    });
    console.log(`  Usuario admin creado: ${adminEmail} / admin1234`);
  }

  console.log("Seed: completado.");
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
