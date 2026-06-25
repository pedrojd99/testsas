"use server";

import { getSession } from "@/lib/auth";
import { db, preguntas } from "@/lib/db";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

async function requireAdmin() {
  const session = await getSession();
  if (!session) redirect("/login");
  if (session.rol !== "admin") redirect("/dashboard");
  return session;
}

const updateSchema = z.object({
  id: z.string().uuid(),
  enunciado: z.string().min(10),
  opciones: z.array(z.string().min(1)).length(4),
  correctaIndex: z.number().int().min(0).max(3),
  explicacion: z.string().optional(),
  fuente: z.string().optional(),
  dificultad: z.enum(["facil", "media", "dificil"]),
  revisada: z.boolean(),
  activa: z.boolean(),
});

export type UpdatePreguntaInput = z.infer<typeof updateSchema>;

export async function actualizarPregunta(input: UpdatePreguntaInput) {
  await requireAdmin();
  const parsed = updateSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: parsed.error.issues[0]?.message };

  const { id, ...data } = parsed.data;
  await db
    .update(preguntas)
    .set({
      enunciado: data.enunciado,
      opciones: data.opciones,
      correctaIndex: data.correctaIndex,
      explicacion: data.explicacion || null,
      fuente: data.fuente || null,
      dificultad: data.dificultad,
      revisada: data.revisada,
      activa: data.activa,
    })
    .where(eq(preguntas.id, id));

  revalidatePath("/admin/preguntas");
  return { ok: true };
}

export async function borrarPregunta(id: string) {
  await requireAdmin();
  await db.delete(preguntas).where(eq(preguntas.id, id));
  revalidatePath("/admin/preguntas");
  return { ok: true };
}

export async function toggleCampo(id: string, campo: "revisada" | "activa", valor: boolean) {
  await requireAdmin();
  await db
    .update(preguntas)
    .set(campo === "revisada" ? { revisada: valor } : { activa: valor })
    .where(eq(preguntas.id, id));
  revalidatePath("/admin/preguntas");
  return { ok: true };
}
