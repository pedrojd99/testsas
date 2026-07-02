import { getSession } from "@/lib/auth";
import { enviarEmail, plantilla } from "@/lib/email";
import { enviarPushUsuario } from "@/lib/push";
import {
  getRankingSemanaPasada,
  getResumenSemanal,
  getUsuariosPushConPreferida,
} from "@/lib/queries-cron";
import { type NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60;

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

// Cron semanal: envia a cada usuario activo un resumen de su semana.
export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET;
  const auth = req.headers.get("authorization");
  const okCron = secret && auth === `Bearer ${secret}`;
  const session = await getSession();
  const okAdmin = session?.rol === "admin";
  if (!okCron && !okAdmin) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const resumenes = await getResumenSemanal();
  let enviados = 0;

  for (const r of resumenes) {
    const nombre = r.nombre ? `, ${r.nombre}` : "";
    await enviarEmail({
      to: r.email,
      subject: "Tu semana en TestSAS",
      html: plantilla(
        "Tu resumen de la semana",
        `<p>Hola${nombre}, esto es lo que has hecho esta semana:</p>
         <ul>
           <li><strong>${r.tests}</strong> test completados</li>
           <li><strong>${r.preguntas}</strong> preguntas practicadas</li>
           <li><strong>${r.precision}%</strong> de aciertos</li>
         </ul>
         <p>Sigue asi. Tienes tu repaso y tus temas debiles esperando en el panel.</p>
         <p><a href="${APP_URL}/dashboard">Entrar a mi panel</a></p>`,
      ),
    });
    enviados++;
  }

  // Push del ranking: posicion final de la semana pasada en la oposicion preferida.
  const usuariosPush = await getUsuariosPushConPreferida();
  const rankingsPorCat = new Map<string, Awaited<ReturnType<typeof getRankingSemanaPasada>>>();
  let pushEnviados = 0;

  for (const { usuarioId, categoriaId } of usuariosPush) {
    let ranking = rankingsPorCat.get(categoriaId);
    if (!ranking) {
      ranking = await getRankingSemanaPasada(categoriaId);
      rankingsPorCat.set(categoriaId, ranking);
    }
    const pos = ranking.get(usuarioId);
    if (!pos) continue;
    const n = await enviarPushUsuario(usuarioId, {
      title: "Tu ranking de la semana",
      body: `Terminaste en el puesto #${pos.puesto} de ${pos.total}. ¿Subes esta semana?`,
      url: "/ranking",
      tag: "ranking",
    });
    if (n > 0) pushEnviados++;
  }

  return NextResponse.json({ ok: true, enviados, pushEnviados });
}
