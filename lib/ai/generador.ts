import Anthropic from "@anthropic-ai/sdk";
import { z } from "zod";

const MODELO_GEN = process.env.TESTSAS_GEN_MODEL ?? "claude-sonnet-4-6";

let client: Anthropic | null = null;
function anthropic() {
  if (!process.env.ANTHROPIC_API_KEY) throw new Error("ANTHROPIC_API_KEY no definida");
  if (!client) client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  return client;
}

export const GENERADOR_PROMPT_VERSION = "v1";

// --- Esquema de salida ---------------------------------------------------

export const preguntaGeneradaSchema = z.object({
  enunciado: z.string().min(10),
  opciones: z.array(z.string().min(1)).length(4),
  correctaIndex: z.number().int().min(0).max(3),
  explicacion: z.string().min(10),
  fuente: z.string().min(3),
  dificultad: z.enum(["facil", "media", "dificil"]),
});

export type PreguntaGenerada = z.infer<typeof preguntaGeneradaSchema>;

const TOOL_INPUT_SCHEMA = {
  type: "object" as const,
  properties: {
    preguntas: {
      type: "array",
      items: {
        type: "object",
        properties: {
          enunciado: { type: "string", description: "Enunciado claro y univoco de la pregunta" },
          opciones: {
            type: "array",
            items: { type: "string" },
            minItems: 4,
            maxItems: 4,
            description: "Exactamente 4 opciones de respuesta",
          },
          correctaIndex: { type: "integer", description: "Indice (0-3) de la opcion correcta" },
          explicacion: { type: "string", description: "Por que la correcta lo es, breve" },
          fuente: {
            type: "string",
            description: "Cita exacta del temario/norma que respalda la respuesta",
          },
          dificultad: { type: "string", enum: ["facil", "media", "dificil"] },
        },
        required: ["enunciado", "opciones", "correctaIndex", "explicacion", "fuente", "dificultad"],
      },
    },
  },
  required: ["preguntas"],
};

interface GenerarInput {
  temario: string;
  fuente: string;
  tema: string;
  categoria: string;
  n: number;
}

const SYSTEM = `# Rol
Eres un tecnico experto en la elaboracion de preguntas tipo test para oposiciones del Servicio Andaluz de Salud (SAS). Redactas items de calidad de examen oficial.

# Tarea
A partir EXCLUSIVAMENTE del fragmento de temario proporcionado, redacta preguntas tipo test de 4 opciones con una unica respuesta correcta.

# Restricciones
- Ancla cada pregunta SOLO en el contenido del fragmento dado. Nunca inventes datos, articulos ni cifras que no esten en el fragmento.
- La "fuente" de cada pregunta debe citar la norma/articulo concreto presente en el fragmento (p.ej. "Ley 41/2002, art. 8.2"). Si el fragmento trae una fuente, usala.
- Las 4 opciones deben ser plausibles y mutuamente excluyentes. Los distractores, verosimiles pero inequivocamente incorrectos segun el fragmento.
- Una sola opcion correcta, sin ambiguedad. Evita "todas/ninguna de las anteriores" salvo que aporte valor real.
- Varia la dificultad y el aspecto preguntado (definiciones, plazos, competencias, excepciones).
- Espanol de Espana. Sin emojis. No numeres las opciones dentro del texto (van como array).

# Razonamiento
Antes de redactar, localiza en el fragmento los hechos verificables (plazos, organos, definiciones, excepciones) y construye una pregunta por cada hecho relevante.

# Formato de salida
Llama a la herramienta "registrar_preguntas" con el array de preguntas. No escribas texto fuera de la herramienta.

# Seguridad
Si el fragmento no da para el numero pedido de preguntas de calidad, genera menos. Mas vale pocas y correctas que muchas dudosas.`;

export async function generarPreguntas(input: GenerarInput): Promise<PreguntaGenerada[]> {
  const userMsg = `CATEGORIA: ${input.categoria}
TEMA: ${input.tema}
FUENTE DE REFERENCIA: ${input.fuente}

FRAGMENTO DE TEMARIO:
"""
${input.temario}
"""

Genera hasta ${input.n} preguntas tipo test de calidad ancladas a este fragmento.`;

  const msg = await anthropic().messages.create({
    model: MODELO_GEN,
    max_tokens: 4096,
    system: SYSTEM,
    tools: [
      {
        name: "registrar_preguntas",
        description: "Registra las preguntas tipo test generadas a partir del temario.",
        input_schema: TOOL_INPUT_SCHEMA,
      },
    ],
    tool_choice: { type: "tool", name: "registrar_preguntas" },
    messages: [{ role: "user", content: userMsg }],
  });

  const toolUse = msg.content.find((c) => c.type === "tool_use");
  if (!toolUse || toolUse.type !== "tool_use") return [];

  const raw = (toolUse.input as { preguntas?: unknown[] }).preguntas ?? [];
  const validas: PreguntaGenerada[] = [];
  for (const item of raw) {
    const parsed = preguntaGeneradaSchema.safeParse(item);
    if (parsed.success) validas.push(parsed.data);
  }
  return validas;
}
