import { getSession } from "@/lib/auth";
import { db, pushSubscriptions } from "@/lib/db";
import { type NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const body = await req.json().catch(() => null);
  const endpoint: string | undefined = body?.endpoint;
  const p256dh: string | undefined = body?.keys?.p256dh;
  const auth: string | undefined = body?.keys?.auth;
  if (!endpoint || !p256dh || !auth) {
    return NextResponse.json({ error: "Suscripcion incompleta" }, { status: 400 });
  }

  // Upsert por endpoint: reasigna al usuario actual y refresca las claves.
  await db
    .insert(pushSubscriptions)
    .values({ usuarioId: session.uid, endpoint, p256dh, auth })
    .onConflictDoUpdate({
      target: pushSubscriptions.endpoint,
      set: { usuarioId: session.uid, p256dh, auth },
    });

  return NextResponse.json({ ok: true });
}
