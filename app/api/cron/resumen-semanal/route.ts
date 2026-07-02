import { getSession } from "@/lib/auth";
import { enviarEmail, plantilla } from "@/lib/email";
import { getResumenSemanal } from "@/lib/queries-cron";
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

  return NextResponse.json({ ok: true, enviados });
}
