import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Expone la clave publica VAPID para que el cliente pueda suscribirse.
export function GET() {
  const key = process.env.VAPID_PUBLIC_KEY ?? "";
  return NextResponse.json({ key });
}
