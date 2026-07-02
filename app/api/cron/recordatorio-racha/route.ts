import { getSession } from "@/lib/auth";
import { enviarPushUsuario } from "@/lib/push";
import { getRachaEnRiesgo } from "@/lib/queries-cron";
import { type NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60;

// Cron diario (tarde): avisa por push a quien tiene la racha en riesgo.
export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET;
  const auth = req.headers.get("authorization");
  const okCron = secret && auth === `Bearer ${secret}`;
  const session = await getSession();
  const okAdmin = session?.rol === "admin";
  if (!okCron && !okAdmin) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const enRiesgo = await getRachaEnRiesgo();
  let enviados = 0;

  for (const { usuarioId, racha } of enRiesgo) {
    const n = await enviarPushUsuario(usuarioId, {
      title: "Tu racha está en juego",
      body: `Llevas ${racha} ${racha === 1 ? "día" : "días"} seguidos. Haz un test rápido para no perderla.`,
      url: "/dashboard",
      tag: "racha",
    });
    if (n > 0) enviados++;
  }

  return NextResponse.json({ ok: true, enRiesgo: enRiesgo.length, enviados });
}
