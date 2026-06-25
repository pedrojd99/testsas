import "server-only";
import Anthropic from "@anthropic-ai/sdk";

// Modelo barato y rapido: suficiente para explicar preguntas tipo test.
const MODEL = "claude-haiku-4-5-20251001";

let client: Anthropic | null = null;
function anthropic() {
  if (!process.env.ANTHROPIC_API_KEY) throw new Error("ANTHROPIC_API_KEY no definida");
  if (!client) client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  return client;
}

export interface TutorInput {
  enunciado: string;
  opciones: string[];
  correctaIndex: number;
  opcionElegida: number | null;
  fuente?: string | null;
  categoria: string;
}

const LETRAS = ["A", "B", "C", "D"];

// Prompt versionado (framework 8 piezas). Bump a v2 ante cambios mayores.
export const TUTOR_PROMPT_VERSION = "v1";

function buildPrompt(input: TutorInput): string {
  const opcionesTxt = input.opciones
    .map((o, i) => `${LETRAS[i]}) ${o}${i === input.correctaIndex ? "  [CORRECTA]" : ""}`)
    .join("\n");
  const eleccion =
    input.opcionElegida === null
      ? "el alumno la dejo en blanco"
      : `el alumno eligio la ${LETRAS[input.opcionElegida]}`;

  return `PREGUNTA (oposicion ${input.categoria} del SAS):
${input.enunciado}

OPCIONES:
${opcionesTxt}

CONTEXTO: ${eleccion}.
${input.fuente ? `FUENTE OFICIAL: ${input.fuente}` : ""}

Explica de forma breve por que la respuesta correcta es la ${LETRAS[input.correctaIndex]}.`;
}

const SYSTEM = `# Rol
Eres un preparador experto de oposiciones del Servicio Andaluz de Salud (SAS). Tu alumno acaba de hacer un test y necesita entender una pregunta.

# Tarea
Explica por que la opcion correcta lo es, de forma clara y memorizable, ayudando al alumno a no volver a fallar.

# Restricciones
- Maximo 4-5 frases. Directo, sin rodeos.
- Cita SIEMPRE la norma o el temario que respalda la respuesta (articulo, ley o fuente dada). La citacion es obligatoria.
- Si la fuente esta en el contexto, usala literalmente; no inventes articulos ni numeros de ley.
- Si procede, da una regla mnemotecnica o un truco para recordarlo.
- Espanol de Espana, registro cercano pero profesional. Sin emojis.

# Formato de salida
Texto plano en 1-2 parrafos cortos. Termina con la cita entre parentesis, p.ej. "(Ley 41/2002, art. 8)".

# Seguridad
Cinete al contenido de oposiciones. No des consejo medico real ni inventes datos legales que no conozcas.`;

export async function explicarPregunta(input: TutorInput): Promise<string> {
  const msg = await anthropic().messages.create({
    model: MODEL,
    max_tokens: 400,
    system: SYSTEM,
    messages: [{ role: "user", content: buildPrompt(input) }],
  });

  const bloque = msg.content.find((c) => c.type === "text");
  return bloque && bloque.type === "text" ? bloque.text : "No se pudo generar la explicacion.";
}
