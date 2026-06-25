import { explicarPregunta } from "@/lib/ai/tutor";
import { getSession } from "@/lib/auth";
import { categorias, db, preguntas } from "@/lib/db";
import { eq } from "drizzle-orm";
import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  preguntaId: z.string().uuid(),
  opcionElegida: z.number().int().min(0).max(3).nullable(),
});

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "No autenticado" }, { status: 401 });

  // El tutor IA es una funcion premium
  if (session.plan !== "premium") {
    return NextResponse.json(
      { error: "premium", message: "El tutor IA es una funcion premium." },
      { status: 402 },
    );
  }

  const parsed = schema.safeParse(await req.json());
  if (!parsed.success) return NextResponse.json({ error: "Datos no validos" }, { status: 400 });

  const pregunta = await db.query.preguntas.findFirst({
    where: eq(preguntas.id, parsed.data.preguntaId),
  });
  if (!pregunta) return NextResponse.json({ error: "Pregunta no encontrada" }, { status: 404 });

  const categoria = await db.query.categorias.findFirst({
    where: eq(categorias.id, pregunta.categoriaId),
  });

  try {
    const explicacion = await explicarPregunta({
      enunciado: pregunta.enunciado,
      opciones: pregunta.opciones,
      correctaIndex: pregunta.correctaIndex,
      opcionElegida: parsed.data.opcionElegida,
      fuente: pregunta.fuente,
      categoria: categoria?.nombre ?? "SAS",
    });
    return NextResponse.json({ explicacion });
  } catch {
    return NextResponse.json({ error: "Error generando la explicacion" }, { status: 500 });
  }
}
