import Anthropic from "@anthropic-ai/sdk";
import { z } from "zod";

const MODELO = process.env.TESTSAS_TEMARIO_MODEL ?? "claude-sonnet-4-6";

let client: Anthropic | null = null;
function anthropic() {
  if (!process.env.ANTHROPIC_API_KEY) throw new Error("ANTHROPIC_API_KEY no definida");
  if (!client) client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  return client;
}

export const TEMARIO_GEN_PROMPT_VERSION = "v1";

export const apunteSchema = z.object({
  resumen: z.string().min(20),
  contenido: z.string().min(200),
  puntosClave: z.array(z.string().min(3)).min(3).max(8),
});

export type ApunteGenerado = z.infer<typeof apunteSchema>;

const TOOL_INPUT_SCHEMA = {
  type: "object" as const,
  properties: {
    resumen: { type: "string", description: "Resumen de 1-2 frases del tema" },
    contenido: {
      type: "string",
      description:
        "Apuntes de estudio en texto plano, en parrafos. Apto para leer y escuchar (sin tablas ni markdown). Cada epigrafe en una linea propia en MAYUSCULAS seguido del desarrollo.",
    },
    puntosClave: {
      type: "array",
      items: { type: "string" },
      description: "Entre 3 y 8 ideas clave memorizables del tema",
    },
  },
  required: ["resumen", "contenido", "puntosClave"],
};

interface GenerarApunteInput {
  tema: string;
  categoria: string;
  bloque: "comun" | "especifica";
  // Fragmentos-fuente del temario (si existen) para anclar temas juridicos
  fuentes?: { fuente: string; contenido: string }[];
}

const SYSTEM = `# Rol
Eres un preparador experto de oposiciones del Servicio Andaluz de Salud (SAS) que redacta apuntes de estudio claros y memorizables.

# Tarea
Redacta los apuntes de estudio de un tema del temario, pensados tanto para leer como para ESCUCHAR en audio.

# Restricciones
- Texto plano, en parrafos. Sin markdown, sin tablas, sin vinetas con simbolos: el texto se va a locutar.
- Estructura con epigrafes: cada epigrafe en una linea propia en MAYUSCULAS, seguido de su desarrollo en parrafos.
- Extension util: entre 500 y 900 palabras. Lenguaje claro, didactico y preciso.
- Si es un tema juridico y se aportan fuentes, cite las normas y articulos concretos (Ley, articulo) de forma natural en el texto. No inventes articulos.
- Si es un tema clinico o procedimental, explica conceptos, valores de referencia y actuaciones con rigor.
- Espanol de Espana. Sin emojis.

# Razonamiento
Empieza por una introduccion breve que situe el tema, desarrolla los epigrafes principales y cierra reforzando lo esencial.

# Formato de salida
Llama a la herramienta "registrar_apuntes" con resumen, contenido y puntosClave. No escribas nada fuera de la herramienta.

# Seguridad
No inventes datos legales ni clinicos. Ante la duda, manten el contenido general y correcto.`;

export async function generarApunte(input: GenerarApunteInput): Promise<ApunteGenerado | null> {
  const fuentesTxt =
    input.fuentes && input.fuentes.length > 0
      ? `\n\nFUENTES DEL TEMARIO (uselas y citelas):\n${input.fuentes
          .map((f) => `[${f.fuente}]\n${f.contenido}`)
          .join("\n\n")}`
      : "";

  const userMsg = `CATEGORIA: ${input.categoria}
BLOQUE: ${input.bloque === "comun" ? "Temario comun" : "Temario especifico"}
TEMA: ${input.tema}${fuentesTxt}

Redacta los apuntes de estudio de este tema.`;

  const msg = await anthropic().messages.create({
    model: MODELO,
    max_tokens: 3072,
    system: SYSTEM,
    tools: [
      {
        name: "registrar_apuntes",
        description: "Registra los apuntes de estudio generados.",
        input_schema: TOOL_INPUT_SCHEMA,
      },
    ],
    tool_choice: { type: "tool", name: "registrar_apuntes" },
    messages: [{ role: "user", content: userMsg }],
  });

  const toolUse = msg.content.find((c) => c.type === "tool_use");
  if (!toolUse || toolUse.type !== "tool_use") return null;
  const parsed = apunteSchema.safeParse(toolUse.input);
  return parsed.success ? parsed.data : null;
}
