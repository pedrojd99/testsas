import { eq, isNull } from "drizzle-orm";
import { embedTextos, embeddingsDisponibles } from "../lib/ai/embeddings";
import { db, preguntas } from "../lib/db";

// Calcula y guarda el embedding de las preguntas que aun no lo tienen.
// Necesario para que el dedup semantico compare contra el banco existente.
const LOTE = 100;

async function main() {
  if (!embeddingsDisponibles()) {
    console.log("Falta VOYAGE_API_KEY. No se pueden calcular embeddings.");
    process.exit(1);
  }

  let total = 0;
  while (true) {
    const pendientes = await db
      .select({ id: preguntas.id, enunciado: preguntas.enunciado })
      .from(preguntas)
      .where(isNull(preguntas.embedding))
      .limit(LOTE);
    if (pendientes.length === 0) break;

    const vecs = await embedTextos(pendientes.map((p) => p.enunciado));
    if (!vecs) break;

    for (let i = 0; i < pendientes.length; i++) {
      await db
        .update(preguntas)
        .set({ embedding: vecs[i] })
        .where(eq(preguntas.id, pendientes[i].id));
    }
    total += pendientes.length;
    console.log(`  embebidas ${total}...`);
  }

  console.log(`Embeddings: ${total} preguntas actualizadas.`);
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
