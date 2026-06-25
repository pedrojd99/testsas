// Trocea un texto largo de temario/norma en fragmentos aptos para la tabla
// `temario`. Prioriza cortar por articulos; si no los hay, agrupa parrafos
// hasta un tamano objetivo. Cada fragmento puede afinar su `fuente`.

export interface Chunk {
  titulo?: string;
  contenido: string;
  fuenteSufijo?: string; // p.ej. "art. 8" para anadir a la fuente base
}

interface Opts {
  maxChars?: number; // tamano objetivo por fragmento
  minChars?: number; // por debajo, se fusiona con el siguiente
}

const ART_RE = /\bart[ií]culo\s+(\d+[\w.\-]*)/i;

function normalizar(texto: string): string {
  return texto
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function trocearTemario(texto: string, opts: Opts = {}): Chunk[] {
  const maxChars = opts.maxChars ?? 1400;
  const minChars = opts.minChars ?? 250;
  const limpio = normalizar(texto);
  if (!limpio) return [];

  // 1) Si hay articulos, corta antes de cada "Articulo N"
  const tieneArticulos = /\n\s*art[ií]culo\s+\d+/i.test(`\n${limpio}`);
  const bloques = tieneArticulos
    ? limpio.split(/\n(?=\s*art[ií]culo\s+\d+)/i)
    : limpio.split(/\n{2,}/);

  // 2) Agrupa bloques pequenos hasta alcanzar maxChars
  const chunks: Chunk[] = [];
  let buffer = "";

  const push = (contenido: string) => {
    const c = contenido.trim();
    if (!c) return;
    const m = c.match(ART_RE);
    chunks.push({
      contenido: c,
      titulo: m ? `Articulo ${m[1]}` : c.split("\n")[0]?.slice(0, 80),
      fuenteSufijo: m ? `art. ${m[1]}` : undefined,
    });
  };

  for (const bloque of bloques) {
    const b = bloque.trim();
    if (!b) continue;

    if (b.length >= maxChars) {
      // Bloque grande: vuelca el buffer y trocea el bloque por frases
      if (buffer) {
        push(buffer);
        buffer = "";
      }
      for (const trozo of partirLargo(b, maxChars)) push(trozo);
      continue;
    }

    if (buffer.length + b.length + 1 > maxChars && buffer.length >= minChars) {
      push(buffer);
      buffer = b;
    } else {
      buffer = buffer ? `${buffer}\n${b}` : b;
    }
  }
  if (buffer) push(buffer);

  return chunks;
}

// Parte un bloque muy largo por frases respetando el maximo
function partirLargo(texto: string, maxChars: number): string[] {
  const frases = texto.split(/(?<=[.;:])\s+/);
  const out: string[] = [];
  let buf = "";
  for (const f of frases) {
    if (buf.length + f.length + 1 > maxChars && buf) {
      out.push(buf);
      buf = f;
    } else {
      buf = buf ? `${buf} ${f}` : f;
    }
  }
  if (buf) out.push(buf);
  return out;
}
