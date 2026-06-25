import { readFileSync } from "node:fs";
import { and, eq } from "drizzle-orm";
import { categorias, db, temario, temas } from "../lib/db";
import { trocearTemario } from "../lib/ingest/trocear";

// Uso:
//   pnpm ingest <temaSlug> <archivo.txt> "<fuente base>" [categoriaSlug]
// Sin categoriaSlug, carga el fragmento en TODAS las categorias que tengan ese
// tema (util para el temario comun, compartido por todas).
const [temaSlug, archivo, fuenteBase, categoriaSlug] = process.argv.slice(2);

async function main() {
  if (!temaSlug || !archivo || !fuenteBase) {
    console.log('Uso: pnpm ingest <temaSlug> <archivo.txt> "<fuente base>" [categoriaSlug]');
    process.exit(1);
  }

  const texto = readFileSync(archivo, "utf8");
  const chunks = trocearTemario(texto);
  if (chunks.length === 0) {
    console.log("El archivo no contiene texto util.");
    process.exit(0);
  }

  // Temas destino: por slug, opcionalmente acotado a una categoria
  const filas = await db
    .select({ temaId: temas.id, categoria: categorias.nombre, categoriaSlug: categorias.slug })
    .from(temas)
    .innerJoin(categorias, eq(temas.categoriaId, categorias.id))
    .where(
      categoriaSlug
        ? and(eq(temas.slug, temaSlug), eq(categorias.slug, categoriaSlug))
        : eq(temas.slug, temaSlug),
    );

  if (filas.length === 0) {
    console.log(`No existe el tema '${temaSlug}'${categoriaSlug ? ` en '${categoriaSlug}'` : ""}.`);
    process.exit(1);
  }

  let insertados = 0;
  for (const fila of filas) {
    // Evita recargar el mismo contenido en ese tema
    const existentes = await db.query.temario.findMany({
      where: eq(temario.temaId, fila.temaId),
      columns: { contenido: true },
    });
    const yaCargado = new Set(existentes.map((e) => e.contenido));

    const nuevos = chunks
      .filter((c) => !yaCargado.has(c.contenido))
      .map((c, i) => ({
        temaId: fila.temaId,
        titulo: c.titulo,
        contenido: c.contenido,
        fuente: c.fuenteSufijo ? `${fuenteBase}, ${c.fuenteSufijo}` : fuenteBase,
        orden: i,
      }));

    if (nuevos.length > 0) {
      await db.insert(temario).values(nuevos);
      insertados += nuevos.length;
    }
    console.log(`  [${fila.categoriaSlug}/${temaSlug}] ${nuevos.length} fragmentos`);
  }

  console.log(`\nIngesta completada: ${insertados} fragmentos en ${filas.length} tema(s).`);
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
