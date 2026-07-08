import { describe, expect, it } from "vitest";
import { SEED_APUNTES } from "./apuntes";
import { SEED_BANCO } from "./bancos";
import { ESPECIFICOS_POR_CATEGORIA, TEMAS_COMUNES, type TemaOficial } from "./temas-oficiales";

// Bloques cuyo contenido (apuntes + banco) se da por COMPLETO: se exige
// cobertura total de sus temas. El bloque "comun" agrupa los 10 temas
// compartidos. El resto se reporta como pendiente sin romper la suite, para
// poder consolidar el contenido por tandas. Se van anadiendo al cerrar cada tanda.
const BLOQUES_COMPLETOS = new Set<string>([
  "comun",
  "celador",
  "tcae",
  "aux-administrativo",
  "enfermeria",
]);

const MIN_PREGUNTAS_POR_TEMA = 8;
const MIN_PALABRAS_APUNTE = 250;

// Todos los temas unicos de la plataforma (comun + 4 especificos)
const TODOS_LOS_TEMAS: TemaOficial[] = [
  ...TEMAS_COMUNES,
  ...Object.values(ESPECIFICOS_POR_CATEGORIA).flat(),
];
const SLUGS_VALIDOS = new Set(TODOS_LOS_TEMAS.map((t) => t.slug));

// Temas exigibles: los de cada bloque marcado como completo.
const TEMAS_EXIGIBLES: TemaOficial[] = [
  ...(BLOQUES_COMPLETOS.has("comun") ? TEMAS_COMUNES : []),
  ...Object.entries(ESPECIFICOS_POR_CATEGORIA)
    .filter(([slug]) => BLOQUES_COMPLETOS.has(slug))
    .flatMap(([, temas]) => temas),
];

describe("cobertura del contenido (modalidades completas)", () => {
  it("hay un apunte por cada tema exigible", () => {
    const conApunte = new Set(SEED_APUNTES.map((a) => a.temaSlug));
    const sinApunte = TEMAS_EXIGIBLES.filter((t) => !conApunte.has(t.slug)).map((t) => t.slug);
    expect(sinApunte, `Temas sin apunte: ${sinApunte.join(", ")}`).toEqual([]);
  });

  it(`hay al menos ${MIN_PREGUNTAS_POR_TEMA} preguntas por tema exigible`, () => {
    const porTema = new Map<string, number>();
    for (const p of SEED_BANCO) porTema.set(p.temaSlug, (porTema.get(p.temaSlug) ?? 0) + 1);
    const cortos = TEMAS_EXIGIBLES.filter(
      (t) => (porTema.get(t.slug) ?? 0) < MIN_PREGUNTAS_POR_TEMA,
    ).map((t) => `${t.slug} (${porTema.get(t.slug) ?? 0})`);
    expect(cortos, `Temas con pocas preguntas: ${cortos.join(", ")}`).toEqual([]);
  });
});

describe("integridad de los apuntes", () => {
  it("cada apunte apunta a un tema valido y es unico por tema", () => {
    const vistos = new Set<string>();
    for (const a of SEED_APUNTES) {
      expect(SLUGS_VALIDOS.has(a.temaSlug), `slug desconocido: ${a.temaSlug}`).toBe(true);
      expect(vistos.has(a.temaSlug), `apunte duplicado para ${a.temaSlug}`).toBe(false);
      vistos.add(a.temaSlug);
    }
  });

  it("cada apunte tiene titulo, resumen, contenido suficiente y puntos clave", () => {
    for (const a of SEED_APUNTES) {
      expect(a.titulo.length, `titulo vacio en ${a.temaSlug}`).toBeGreaterThan(4);
      expect(a.resumen.length, `resumen vacio en ${a.temaSlug}`).toBeGreaterThan(20);
      const palabras = a.contenido.trim().split(/\s+/).length;
      expect(
        palabras,
        `apunte corto en ${a.temaSlug}: ${palabras} palabras`,
      ).toBeGreaterThanOrEqual(MIN_PALABRAS_APUNTE);
      expect(a.puntosClave.length, `sin puntos clave en ${a.temaSlug}`).toBeGreaterThanOrEqual(3);
    }
  });
});

describe("integridad del banco de preguntas", () => {
  it("cada pregunta esta bien formada", () => {
    for (const p of SEED_BANCO) {
      expect(SLUGS_VALIDOS.has(p.temaSlug), `slug desconocido: ${p.temaSlug}`).toBe(true);
      expect(p.enunciado.length, `enunciado corto: "${p.enunciado}"`).toBeGreaterThan(20);
      expect(p.opciones.length, `opciones != 4 en: "${p.enunciado}"`).toBe(4);
      for (const o of p.opciones) {
        expect(o.trim().length, `opcion vacia en: "${p.enunciado}"`).toBeGreaterThan(0);
      }
      expect(new Set(p.opciones).size, `opciones repetidas en: "${p.enunciado}"`).toBe(4);
      expect(
        p.correctaIndex,
        `correctaIndex fuera de rango en: "${p.enunciado}"`,
      ).toBeGreaterThanOrEqual(0);
      expect(
        p.correctaIndex,
        `correctaIndex fuera de rango en: "${p.enunciado}"`,
      ).toBeLessThanOrEqual(3);
      expect(p.explicacion.length, `sin explicacion en: "${p.enunciado}"`).toBeGreaterThan(15);
      expect(p.fuente.length, `sin fuente en: "${p.enunciado}"`).toBeGreaterThan(3);
      expect(["facil", "media", "dificil"]).toContain(p.dificultad);
    }
  });

  it("no hay enunciados duplicados", () => {
    const vistos = new Set<string>();
    const dupes: string[] = [];
    for (const p of SEED_BANCO) {
      const clave = p.enunciado.trim().toLowerCase();
      if (vistos.has(clave)) dupes.push(p.enunciado.slice(0, 60));
      vistos.add(clave);
    }
    expect(dupes, `Enunciados duplicados: ${dupes.join(" | ")}`).toEqual([]);
  });

  it("la respuesta correcta no esta sesgada a una sola posicion", () => {
    if (SEED_BANCO.length < 100) return;
    const conteo = [0, 0, 0, 0];
    for (const p of SEED_BANCO) conteo[p.correctaIndex]++;
    for (const [i, n] of conteo.entries()) {
      const pct = n / SEED_BANCO.length;
      expect(pct, `posicion ${i} concentra ${(pct * 100).toFixed(0)}% de correctas`).toBeLessThan(
        0.45,
      );
    }
  });
});
