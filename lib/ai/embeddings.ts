// Embeddings con Voyage AI (proveedor recomendado por Anthropic).
// Si no hay VOYAGE_API_KEY, devuelve null y el llamante cae al dedup lexico.

const MODELO = process.env.VOYAGE_EMBED_MODEL ?? "voyage-3-lite";
const ENDPOINT = "https://api.voyageai.com/v1/embeddings";

export function embeddingsDisponibles(): boolean {
  return Boolean(process.env.VOYAGE_API_KEY);
}

export async function embedTextos(
  textos: string[],
  inputType: "document" | "query" = "document",
): Promise<number[][] | null> {
  const key = process.env.VOYAGE_API_KEY;
  if (!key || textos.length === 0) return null;

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ input: textos, model: MODELO, input_type: inputType }),
  });

  if (!res.ok) {
    throw new Error(`Voyage embeddings ${res.status}: ${await res.text()}`);
  }

  const json = (await res.json()) as { data: { index: number; embedding: number[] }[] };
  // Ordena por index para alinear con la entrada
  return json.data.sort((a, b) => a.index - b.index).map((d) => d.embedding);
}
