import { db, suscripciones, usuarios } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { eq } from "drizzle-orm";
import { type NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";

// Stripe necesita el body crudo para validar la firma
export const runtime = "nodejs";

function mapEstado(status: Stripe.Subscription.Status) {
  switch (status) {
    case "active":
      return "active" as const;
    case "trialing":
      return "trialing" as const;
    case "past_due":
      return "past_due" as const;
    case "canceled":
    case "unpaid":
    case "incomplete_expired":
      return "canceled" as const;
    default:
      return "incomplete" as const;
  }
}

async function upsertSuscripcion(usuarioId: string, sub: Stripe.Subscription) {
  const estado = mapEstado(sub.status);
  const premium = estado === "active" || estado === "trialing";

  const existing = await db.query.suscripciones.findFirst({
    where: eq(suscripciones.usuarioId, usuarioId),
  });

  const values = {
    usuarioId,
    stripeCustomerId: typeof sub.customer === "string" ? sub.customer : sub.customer.id,
    stripeSubscriptionId: sub.id,
    status: estado,
    currentPeriodEnd: new Date(sub.current_period_end * 1000),
  };

  if (existing) {
    await db.update(suscripciones).set(values).where(eq(suscripciones.id, existing.id));
  } else {
    await db.insert(suscripciones).values(values);
  }

  await db
    .update(usuarios)
    .set({ plan: premium ? "premium" : "free" })
    .where(eq(usuarios.id, usuarioId));
}

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!sig || !secret) return NextResponse.json({ error: "Sin firma" }, { status: 400 });

  const body = await req.text();
  let event: Stripe.Event;
  try {
    event = stripe().webhooks.constructEvent(body, sig, secret);
  } catch {
    return NextResponse.json({ error: "Firma no valida" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const cs = event.data.object as Stripe.Checkout.Session;
      const usuarioId = cs.metadata?.usuarioId ?? cs.client_reference_id;
      if (usuarioId && cs.subscription) {
        const sub = await stripe().subscriptions.retrieve(cs.subscription as string);
        await upsertSuscripcion(usuarioId, sub);
      }
      break;
    }
    case "customer.subscription.updated":
    case "customer.subscription.deleted": {
      const sub = event.data.object as Stripe.Subscription;
      const usuarioId = sub.metadata?.usuarioId;
      if (usuarioId) await upsertSuscripcion(usuarioId, sub);
      break;
    }
  }

  return NextResponse.json({ received: true });
}
