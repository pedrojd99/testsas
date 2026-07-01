"use server";

import { enviarAvisoConvocatoria } from "@/lib/alertas-envio";
import { getSession } from "@/lib/auth";
import { alertas, categorias, db } from "@/lib/db";
import { enviarEmail, plantilla } from "@/lib/email";
import { and, eq, isNull } from "drizzle-orm";
import { redirect } from "next/navigation";
import { z } from "zod";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

const suscribirSchema = z.object({
  email: z.string().email("Email no valido"),
  categoriaSlug: z.string().optional(),
});

export async function suscribirAlerta(
  _prev: { ok?: boolean; error?: string } | undefined,
  formData: FormData,
) {
  const parsed = suscribirSchema.safeParse({
    email: formData.get("email"),
    categoriaSlug: formData.get("categoriaSlug") || undefined,
  });
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? "Datos no validos" };

  const email = parsed.data.email.toLowerCase();
  let categoria: { id: string; nombre: string } | undefined;
  if (parsed.data.categoriaSlug) {
    categoria = await db.query.categorias.findFirst({
      where: eq(categorias.slug, parsed.data.categoriaSlug),
      columns: { id: true, nombre: true },
    });
  }
  const categoriaId = categoria?.id ?? null;

  const existe = await db.query.alertas.findFirst({
    where: and(
      eq(alertas.email, email),
      categoriaId ? eq(alertas.categoriaId, categoriaId) : isNull(alertas.categoriaId),
    ),
  });

  const token = existe?.token ?? crypto.randomUUID();
  if (!existe) {
    await db.insert(alertas).values({ email, categoriaId, token });
  }

  const ambito = categoria ? categoria.nombre : "cualquier categoria del SAS";
  await enviarEmail({
    to: email,
    subject: "Te avisaremos cuando salga la convocatoria del SAS",
    html: plantilla(
      "Aviso activado",
      `<p>Te avisaremos por email en cuanto se publique la convocatoria de <strong>${ambito}</strong> en el BOJA.</p>
       <p>Mientras tanto, ya puedes practicar con test y simulacros en <a href="${APP_URL}">TestSAS</a>.</p>
       <p style="font-size:12px;color:#889">Si no quieres recibir estos avisos, <a href="${APP_URL}/alertas/baja?token=${token}">date de baja aqui</a>.</p>`,
    ),
  });

  return { ok: true };
}

export async function darDeBajaAlerta(token: string) {
  await db.delete(alertas).where(eq(alertas.token, token));
}

// --- Admin: enviar el aviso de convocatoria a los suscriptores ------------

export async function enviarAlertaConvocatoria(formData: FormData) {
  const session = await getSession();
  if (!session) redirect("/login");
  if (session.rol !== "admin") redirect("/dashboard");

  const categoriaSlug = String(formData.get("categoriaSlug") ?? "");
  const asunto = String(formData.get("asunto") ?? "").trim();
  const mensaje = String(formData.get("mensaje") ?? "").trim();
  if (!asunto || !mensaje) redirect("/admin/alertas?error=faltan-datos");

  let categoriaId: string | null = null;
  if (categoriaSlug && categoriaSlug !== "todas") {
    const c = await db.query.categorias.findFirst({
      where: eq(categorias.slug, categoriaSlug),
      columns: { id: true },
    });
    categoriaId = c?.id ?? null;
  }

  const enviados = await enviarAvisoConvocatoria({ categoriaId, asunto, mensaje });
  redirect(`/admin/alertas?enviados=${enviados}`);
}
