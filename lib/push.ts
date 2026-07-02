import "server-only";
import { db, pushSubscriptions } from "@/lib/db";
import { eq } from "drizzle-orm";
import webpush from "web-push";

let configurado = false;
function configurar(): boolean {
  if (configurado) return true;
  const pub = process.env.VAPID_PUBLIC_KEY;
  const priv = process.env.VAPID_PRIVATE_KEY;
  if (!pub || !priv) return false;
  const subject = process.env.VAPID_SUBJECT ?? "mailto:avisos@testsas.app";
  webpush.setVapidDetails(subject, pub, priv);
  configurado = true;
  return true;
}

export function pushDisponible(): boolean {
  return !!(process.env.VAPID_PUBLIC_KEY && process.env.VAPID_PRIVATE_KEY);
}

export interface PushPayload {
  title: string;
  body: string;
  url?: string;
  tag?: string;
}

// Envia a todas las suscripciones de un usuario; limpia las caducadas (404/410).
export async function enviarPushUsuario(usuarioId: string, payload: PushPayload): Promise<number> {
  if (!configurar()) {
    console.log(`[push] sin claves VAPID, no se envia: "${payload.title}" -> ${usuarioId}`);
    return 0;
  }

  const subs = await db.query.pushSubscriptions.findMany({
    where: eq(pushSubscriptions.usuarioId, usuarioId),
  });

  let enviados = 0;
  const cuerpo = JSON.stringify(payload);
  for (const s of subs) {
    try {
      await webpush.sendNotification(
        { endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } },
        cuerpo,
      );
      enviados++;
    } catch (err) {
      const code = (err as { statusCode?: number }).statusCode;
      // Suscripcion caducada o revocada: se elimina para no reintentar.
      if (code === 404 || code === 410) {
        await db.delete(pushSubscriptions).where(eq(pushSubscriptions.id, s.id));
      }
    }
  }
  return enviados;
}
