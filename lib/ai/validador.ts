import Anthropic from "@anthropic-ai/sdk";
import { z } from "zod";
import type { PreguntaGenerada } from "./generador";

const MODELO_VAL = process.env.TESTSAS_VAL_MODEL ?? "claude-sonnet-4-6";

let client: Anthropic | null = null;
function anthropic() {
  if (!process.env.ANTHROPIC_API_KEY) throw new Error("ANTHROPIC_API_KEY no definida");
  if (!client) client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  return client;
}

export const VALIDADOR_PROMPT_VERSION = "v1";

export const veredictoSchema = z.object({
  valida: z.boolean(),
  motivo: z.string(),
  // 0-3 si el validador detecta que la correcta deberia ser otra
  correctaReal: z.number().int().min(0).max(3).nullable(),
});

export type Veredicto = z.infer<typeof veredictoSchema>;

const TOOL_INPUT_SCHEMA = {
  type: "object" as const,
  properties: {
    valida: {
      type: "boolean",
      description: "true solo si la pregunta es correcta, univoca y respaldada por el temario",
    },
    motivo: { type: "string", description: "Justificacion breve del veredicto" },
    correctaReal: {
      type: ["integer", "null"],
      description:
        "Indice 0-3 de la opcion realmente correcta si la marcada es erronea; null si es correcta",
    },
  },
  required: ["valida", "motivo", "correctaReal"],
};

const LETRAS = ["A", "B", "C", "D"];

const SYSTEM = `# Rol
Eres un revisor critico de preguntas de oposiciones del SAS. Tu trabajo es DESCARTAR cualquier pregunta dudosa antes de publicarla.

# Tarea
Verifica si la pregunta es valida: respaldada por el temario, con una unica respuesta correcta inequivoca y distractores claramente falsos.

# Criterios para marcar valida=false
- La respuesta marcada como correcta no se deduce del temario, o hay otra igualmente valida.
- El enunciado es ambiguo o tiene mas de una interpretacion.
- Algun distractor tambien podria ser correcto.
- La fuente citada no respalda la respuesta o esta inventada.

# Razonamiento
Comprueba la opcion correcta contra el temario y, una a una, descarta los distractores. Ante la duda, valida=false. Es preferible descartar una buena que publicar una mala.

# Formato de salida
Llama a la herramienta "veredicto". Si la correcta marcada es erronea pero hay una opcion claramente correcta, indica su indice en correctaReal.

# Seguridad
No inventes normas. Si no puedes verificar la respuesta con el temario dado, valida=false.`;

export async function validarPregunta(
  pregunta: PreguntaGenerada,
  temario: string,
): Promise<Veredicto> {
  const opcionesTxt = pregunta.opciones
    .map(
      (o, i) =>
        `${LETRAS[i]}) ${o}${i === pregunta.correctaIndex ? "  <- marcada como correcta" : ""}`,
    )
    .join("\n");

  const userMsg = `FRAGMENTO DE TEMARIO:
"""
${temario}
"""

PREGUNTA A REVISAR:
${pregunta.enunciado}

${opcionesTxt}

FUENTE CITADA: ${pregunta.fuente}

Emite tu veredicto.`;

  const msg = await anthropic().messages.create({
    model: MODELO_VAL,
    max_tokens: 1024,
    system: SYSTEM,
    tools: [
      {
        name: "veredicto",
        description: "Registra el veredicto de validez de la pregunta.",
        input_schema: TOOL_INPUT_SCHEMA,
      },
    ],
    tool_choice: { type: "tool", name: "veredicto" },
    messages: [{ role: "user", content: userMsg }],
  });

  const toolUse = msg.content.find((c) => c.type === "tool_use");
  if (!toolUse || toolUse.type !== "tool_use") {
    return { valida: false, motivo: "Sin veredicto del validador", correctaReal: null };
  }
  const parsed = veredictoSchema.safeParse(toolUse.input);
  return parsed.success
    ? parsed.data
    : { valida: false, motivo: "Veredicto mal formado", correctaReal: null };
}
