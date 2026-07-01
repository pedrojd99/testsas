import "server-only";
import { alertas, db } from "@/lib/db";
import { enviarEmail, plantilla } from "@/lib/email";
import { eq, isNull, or } from "drizzle-orm";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

// Envia el aviso a los suscriptores de una categoria (+ los de "todas").
// categoriaId null = a todos los suscriptores. Devuelve cuantos se avisaron.
export async function enviarAvisoConvocatoria(opts: {
  categoriaId: string | null;
  asunto: string;
  mensaje: string;
  extraHtml?: string;
}): Promise<number> {
  const destinatarios = await db.query.alertas.findMany({
    where: opts.categoriaId
      ? or(eq(alertas.categoriaId, opts.categoriaId), isNull(alertas.categoriaId))
      : undefined,
  });

  for (const d of destinatarios) {
    await enviarEmail({
      to: d.email,
      subject: opts.asunto,
      html: plantilla(
        opts.asunto,
        `<p>${opts.mensaje.replace(/\n/g, "<br/>")}</p>
         ${opts.extraHtml ?? ""}
         <p><a href="${APP_URL}/convocatoria">Ver la guia de la convocatoria</a></p>
         <p style="font-size:12px;color:#889"><a href="${APP_URL}/alertas/baja?token=${d.token}">Darse de baja</a></p>`,
      ),
    });
    await db.update(alertas).set({ notificadoEn: new Date() }).where(eq(alertas.id, d.id));
  }

  return destinatarios.length;
}
