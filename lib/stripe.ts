import "server-only";
import Stripe from "stripe";

let _stripe: Stripe | null = null;

export function stripe() {
  if (!process.env.STRIPE_SECRET_KEY) throw new Error("STRIPE_SECRET_KEY no definida");
  if (!_stripe) _stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  return _stripe;
}

export const PRECIO_PREMIUM = process.env.STRIPE_PRICE_PREMIUM_MENSUAL;
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
