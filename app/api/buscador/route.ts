import { getBuscadorIndice } from "@/lib/queries";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
// Dinamico: la DB no esta disponible en build. El cliente lo pide solo al abrir
// el buscador; se cachea en CDN una hora porque el temario cambia poco.
export const dynamic = "force-dynamic";

export async function GET() {
  const items = await getBuscadorIndice();
  return NextResponse.json(
    { items },
    { headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" } },
  );
}
