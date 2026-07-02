"use server";

import { createSession, destroySession, hashPassword, verifyPassword } from "@/lib/auth";
import { db, usuarios } from "@/lib/db";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { z } from "zod";

const registroSchema = z.object({
  email: z.string().email("Email no valido"),
  password: z.string().min(8, "Minimo 8 caracteres"),
  nombre: z.string().min(1, "Indica tu nombre").optional(),
});

export async function registrar(_prev: { error?: string } | undefined, formData: FormData) {
  const parsed = registroSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    nombre: formData.get("nombre") || undefined,
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Datos no validos" };
  }

  const existing = await db.query.usuarios.findFirst({
    where: eq(usuarios.email, parsed.data.email.toLowerCase()),
  });
  if (existing) return { error: "Ya existe una cuenta con ese email" };

  const [user] = await db
    .insert(usuarios)
    .values({
      email: parsed.data.email.toLowerCase(),
      passwordHash: await hashPassword(parsed.data.password),
      nombre: parsed.data.nombre,
    })
    .returning();

  await createSession({ uid: user.id, email: user.email, rol: user.rol, plan: user.plan });
  redirect("/onboarding");
}

export async function entrar(_prev: { error?: string } | undefined, formData: FormData) {
  const email = String(formData.get("email") ?? "").toLowerCase();
  const password = String(formData.get("password") ?? "");

  const user = await db.query.usuarios.findFirst({ where: eq(usuarios.email, email) });
  if (!user || !(await verifyPassword(password, user.passwordHash))) {
    return { error: "Email o contrasena incorrectos" };
  }

  await createSession({ uid: user.id, email: user.email, rol: user.rol, plan: user.plan });
  redirect("/dashboard");
}

export async function salir() {
  await destroySession();
  redirect("/");
}
