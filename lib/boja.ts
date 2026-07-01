import "server-only";

// Comprobador del BOJA para detectar convocatorias del SAS. Heuristico y
// configurable: BOJA_FEED_URL puede apuntar a un RSS/Atom o a una pagina de
// busqueda del BOJA. Se filtran las entradas por palabras clave.

const FEED = process.env.BOJA_FEED_URL;

const KW_SAS = ["servicio andaluz de salud", "sas", "personal estatutario"];
const KW_CONV = [
  "convocatoria",
  "oferta de empleo",
  "oposicion",
  "proceso selectivo",
  "bolsa de empleo",
  "bases",
];

// Palabras clave para asignar la deteccion a una categoria concreta
const CAT_KW: { slug: string; kws: string[] }[] = [
  { slug: "celador", kws: ["celador"] },
  { slug: "tcae", kws: ["cuidados auxiliares de enfermeria", "auxiliar de enfermeria", "tcae"] },
  { slug: "enfermeria", kws: ["enfermero", "enfermera", "enfermeria"] },
  { slug: "aux-administrativo", kws: ["auxiliar administrativo"] },
];

export interface DeteccionBoja {
  referencia: string;
  titulo: string;
  categoriaSlug: string | null;
}

function normaliza(s: string): string {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

interface Item {
  titulo: string;
  link: string;
}

// Extrae items de un RSS/Atom; si no hay, cae a enlaces HTML.
function parseItems(texto: string): Item[] {
  const items: Item[] = [];

  const rss = [...texto.matchAll(/<item\b[\s\S]*?<\/item>/gi)];
  const atom = [...texto.matchAll(/<entry\b[\s\S]*?<\/entry>/gi)];
  const bloques = rss.length ? rss : atom;

  for (const m of bloques) {
    const bloque = m[0];
    const titulo = (bloque.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "")
      .replace(/<!\[CDATA\[|\]\]>/g, "")
      .trim();
    const link =
      bloque.match(/<link[^>]*>([\s\S]*?)<\/link>/i)?.[1]?.trim() ??
      bloque.match(/<link[^>]*href="([^"]+)"/i)?.[1] ??
      "";
    if (titulo) items.push({ titulo, link: link || titulo });
  }

  if (items.length === 0) {
    // Fallback: anclas HTML
    for (const m of texto.matchAll(/<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)) {
      const link = m[1];
      const titulo = m[2].replace(/<[^>]+>/g, "").trim();
      if (titulo.length > 15) items.push({ titulo, link });
    }
  }

  return items;
}

function esRelevante(titulo: string): boolean {
  const t = normaliza(titulo);
  return KW_SAS.some((k) => t.includes(k)) && KW_CONV.some((k) => t.includes(k));
}

function categoriaDe(titulo: string): string | null {
  const t = normaliza(titulo);
  return CAT_KW.find((c) => c.kws.some((k) => t.includes(k)))?.slug ?? null;
}

export async function comprobarBoja(): Promise<DeteccionBoja[]> {
  if (!FEED) return [];

  const res = await fetch(FEED, {
    headers: { accept: "application/rss+xml, application/xml, text/html;q=0.9" },
  });
  if (!res.ok) throw new Error(`BOJA feed ${res.status}`);
  const texto = await res.text();

  const vistos = new Set<string>();
  const detecciones: DeteccionBoja[] = [];
  for (const item of parseItems(texto)) {
    if (!esRelevante(item.titulo)) continue;
    const ref = item.link || item.titulo;
    if (vistos.has(ref)) continue;
    vistos.add(ref);
    detecciones.push({
      referencia: ref,
      titulo: item.titulo,
      categoriaSlug: categoriaDe(item.titulo),
    });
  }
  return detecciones;
}
