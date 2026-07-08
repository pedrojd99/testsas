import { writeFileSync } from "node:fs";
import type { PreguntaGenerada } from "../lib/ai/generador";
import { validarPregunta } from "../lib/ai/validador";
import { SEED_APUNTES } from "../lib/content/apuntes";
import { SEED_BANCO } from "../lib/content/bancos";
import type { SeedPregunta } from "../lib/content/tipos";

// Pase del validador IA (adversarial) sobre el banco de preguntas semilla.
// Cada pregunta se contrasta contra el apunte de su tema como temario de
// referencia. El validador esta disenado para DESCARTAR ante la duda, asi que
// las marcadas como no validas son candidatas a revision, no errores seguros.
//
// Uso:
//   pnpm validar-banco                 -> valida TODO el banco (1314 llamadas)
//   pnpm validar-banco -- --limit 40   -> muestra de 40 (para probar)
//   pnpm validar-banco -- --tema prl    -> solo un tema
//   pnpm validar-banco -- --conc 8      -> concurrencia (por defecto 6)

const args = process.argv.slice(2);
function arg(nombre: string): string | undefined {
  const i = args.indexOf(`--${nombre}`);
  return i >= 0 ? args[i + 1] : undefined;
}

const LIMITE = arg("limit") ? Number(arg("limit")) : undefined;
const TEMA = arg("tema");
const CONC = arg("conc") ? Number(arg("conc")) : 6;

// Referencia por tema: contenido del apunte + puntos clave.
const refPorTema = new Map<string, string>();
for (const a of SEED_APUNTES) {
  const clave = a.puntosClave.length ? `\n\nPUNTOS CLAVE:\n- ${a.puntosClave.join("\n- ")}` : "";
  refPorTema.set(a.temaSlug, `${a.contenido}${clave}`);
}

interface Fallo {
  temaSlug: string;
  enunciado: string;
  motivo: string;
  correctaReal: number | null;
  correctaActual: number;
}

async function poolMap<T, R>(items: T[], n: number, fn: (t: T, i: number) => Promise<R>) {
  const out: R[] = new Array(items.length);
  let idx = 0;
  async function worker() {
    while (idx < items.length) {
      const i = idx++;
      out[i] = await fn(items[i], i);
    }
  }
  await Promise.all(Array.from({ length: Math.min(n, items.length) }, worker));
  return out;
}

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error(
      "ANTHROPIC_API_KEY no definida. Ejecuta con: pnpm exec tsx --env-file=.env.local scripts/validar-banco.ts",
    );
    process.exit(1);
  }

  let preguntas: SeedPregunta[] = SEED_BANCO;
  if (TEMA) preguntas = preguntas.filter((p) => p.temaSlug === TEMA);
  if (LIMITE) preguntas = preguntas.slice(0, LIMITE);

  const sinRef = preguntas.filter((p) => !refPorTema.has(p.temaSlug)).length;
  console.log(
    `Validando ${preguntas.length} preguntas (conc=${CONC})${sinRef ? ` — ${sinRef} sin apunte de referencia` : ""}...`,
  );

  let validas = 0;
  let ok = 0;
  const fallos: Fallo[] = [];
  let hechas = 0;

  await poolMap(preguntas, CONC, async (p) => {
    const ref = refPorTema.get(p.temaSlug) ?? "";
    try {
      const v = await validarPregunta(p as unknown as PreguntaGenerada, ref);
      if (v.valida) validas++;
      else
        fallos.push({
          temaSlug: p.temaSlug,
          enunciado: p.enunciado,
          motivo: v.motivo,
          correctaReal: v.correctaReal,
          correctaActual: p.correctaIndex,
        });
      ok++;
    } catch (e) {
      fallos.push({
        temaSlug: p.temaSlug,
        enunciado: p.enunciado,
        motivo: `ERROR: ${(e as Error).message}`,
        correctaReal: null,
        correctaActual: p.correctaIndex,
      });
    }
    hechas++;
    if (hechas % 25 === 0) console.log(`  ${hechas}/${preguntas.length}`);
  });

  // Preguntas donde el validador propone otra respuesta correcta (mas grave)
  const cambioCorrecta = fallos.filter((f) => f.correctaReal !== null);

  const reporte = {
    fecha: new Date().toISOString(),
    total: preguntas.length,
    validas,
    noValidas: fallos.length,
    conCorrectaDistinta: cambioCorrecta.length,
    tasaValidez: ok > 0 ? Math.round((validas / ok) * 100) : 0,
    fallos: fallos.sort((a, b) => a.temaSlug.localeCompare(b.temaSlug)),
  };

  const salida = "validacion-banco.json";
  writeFileSync(salida, JSON.stringify(reporte, null, 2), "utf-8");

  console.log("\n===== RESUMEN =====");
  console.log(`Validas:            ${validas}/${preguntas.length} (${reporte.tasaValidez}%)`);
  console.log(`No validas:         ${fallos.length}`);
  console.log(`Correcta distinta:  ${cambioCorrecta.length}`);
  console.log(`Reporte detallado:  ${salida}`);
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
