import { enviarAvisoConvocatoria } from "@/lib/alertas-envio";
import { getSession } from "@/lib/auth";
import { comprobarBoja } from "@/lib/boja";
import { categorias, db, deteccionesBoja } from "@/lib/db";
import { eq } from "drizzle-orm";
import { type NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60;

// Cron (Vercel) que vigila el BOJA y avisa a los suscriptores de nuevas
// convocatorias. Protegido por CRON_SECRET; un admin tambien puede dispararlo.
export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET;
  const auth = req.headers.get("authorization");
  const okCron = secret && auth === `Bearer ${secret}`;
  const session = await getSession();
  const okAdmin = session?.rol === "admin";
  if (!okCron && !okAdmin) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  let detecciones: Awaited<ReturnType<typeof comprobarBoja>>;
  try {
    detecciones = await comprobarBoja();
  } catch (e) {
    return NextResponse.json({ error: `Fallo al leer el BOJA: ${String(e)}` }, { status: 502 });
  }

  const nuevas: { titulo: string; avisados: number }[] = [];

  for (const d of detecciones) {
    const yaVisto = await db.query.deteccionesBoja.findFirst({
      where: eq(deteccionesBoja.referencia, d.referencia),
    });
    if (yaVisto) continue;

    let categoriaId: string | null = null;
    if (d.categoriaSlug) {
      const c = await db.query.categorias.findFirst({
        where: eq(categorias.slug, d.categoriaSlug),
        columns: { id: true },
      });
      categoriaId = c?.id ?? null;
    }

    const avisados = await enviarAvisoConvocatoria({
      categoriaId,
      asunto: "Novedad en el BOJA sobre las oposiciones del SAS",
      mensaje: d.titulo,
      extraHtml: `<p><a href="${d.referencia}">Ver la publicacion en el BOJA</a></p>`,
    });

    await db.insert(deteccionesBoja).values({
      referencia: d.referencia,
      titulo: d.titulo,
      categoriaSlug: d.categoriaSlug,
      notificados: avisados,
    });

    nuevas.push({ titulo: d.titulo, avisados });
  }

  return NextResponse.json({
    ok: true,
    revisadas: detecciones.length,
    nuevas: nuevas.length,
    detalle: nuevas,
  });
}
