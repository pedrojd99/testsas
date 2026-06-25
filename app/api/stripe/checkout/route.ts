import { getSession } from "@/lib/auth";
import { db, suscripciones } from "@/lib/db";
import { APP_URL, PRECIO_PREMIUM, stripe } from "@/lib/stripe";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  if (!PRECIO_PREMIUM) {
    return NextResponse.json({ error: "Precio no configurado" }, { status: 500 });
  }

  // Reutiliza customer si ya existe
  const sub = await db.query.suscripciones.findFirst({
    where: eq(suscripciones.usuarioId, session.uid),
  });

  const checkout = await stripe().checkout.sessions.create({
    mode: "subscription",
    line_items: [{ price: PRECIO_PREMIUM, quantity: 1 }],
    customer: sub?.stripeCustomerId ?? undefined,
    customer_email: sub?.stripeCustomerId ? undefined : session.email,
    client_reference_id: session.uid,
    metadata: { usuarioId: session.uid },
    success_url: `${APP_URL}/dashboard?premium=ok`,
    cancel_url: `${APP_URL}/premium?cancelado=1`,
    allow_promotion_codes: true,
  });

  return NextResponse.json({ url: checkout.url });
}
