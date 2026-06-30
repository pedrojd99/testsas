"use server";

import { getSession } from "@/lib/auth";
import { categorias, db, usuarios } from "@/lib/db";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function setOposicionPreferida(formData: FormData) {
  const session = await getSession();
  if (!session) redirect("/login");

  const slug = String(formData.get("categoriaSlug") ?? "");
  const categoria = await db.query.categorias.findFirst({
    where: eq(categorias.slug, slug),
  });

  await db
    .update(usuarios)
    .set({ categoriaPreferidaId: categoria?.id ?? null })
    .where(eq(usuarios.id, session.uid));

  revalidatePath("/dashboard");
}
