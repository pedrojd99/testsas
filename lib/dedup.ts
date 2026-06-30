// Deteccion de casi-duplicados por similitud lexica (Jaccard de tokens).
// Coste cero (sin embeddings): pensado para filtrar preguntas generadas que
// repiten el mismo enunciado con pequenas variaciones.

const STOP = new Set([
  "el",
  "la",
  "los",
  "las",
  "un",
  "una",
  "unos",
  "unas",
  "de",
  "del",
  "y",
  "o",
  "a",
  "en",
  "que",
  "es",
  "se",
  "por",
  "con",
  "para",
  "su",
  "sus",
  "al",
  "lo",
  "como",
  "mas",
  "segun",
  "cual",
  "cuales",
  "no",
  "ni",
  "le",
  "su",
  "the",
  "of",
]);

export function tokenizar(texto: string): Set<string> {
  const limpio = texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // quita acentos
    .replace(/[^a-z0-9\s]/g, " ");
  const tokens = limpio.split(/\s+/).filter((t) => t.length > 2 && !STOP.has(t));
  return new Set(tokens);
}

export function similitud(a: string, b: string): number {
  const sa = tokenizar(a);
  const sb = tokenizar(b);
  if (sa.size === 0 || sb.size === 0) return 0;
  let inter = 0;
  for (const t of sa) if (sb.has(t)) inter++;
  const union = sa.size + sb.size - inter;
  return inter / union;
}

export function esDuplicado(nuevo: string, existentes: string[], umbral = 0.8): boolean {
  return existentes.some((e) => similitud(nuevo, e) >= umbral);
}

// Filtra un lote: descarta los que sean casi-duplicados de `existentes` o de
// otros ya aceptados del propio lote. Devuelve los aceptados (muta a `existentes`).
export function dedupLote<T extends { enunciado: string }>(
  lote: T[],
  existentes: string[],
  umbral = 0.8,
): T[] {
  const aceptados: T[] = [];
  for (const item of lote) {
    if (esDuplicado(item.enunciado, existentes, umbral)) continue;
    aceptados.push(item);
    existentes.push(item.enunciado);
  }
  return aceptados;
}

// --- Dedup semantico (embeddings) ----------------------------------------

export function cosineSim(a: number[], b: number[]): number {
  let dot = 0;
  let na = 0;
  let nb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }
  if (na === 0 || nb === 0) return 0;
  return dot / (Math.sqrt(na) * Math.sqrt(nb));
}

export function esDuplicadoSemantico(vec: number[], existentes: number[][], umbral = 0.9): boolean {
  return existentes.some((e) => cosineSim(vec, e) >= umbral);
}
