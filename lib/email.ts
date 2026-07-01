import "server-only";

// Envio de email transaccional con Resend (free tier). Si no hay RESEND_API_KEY
// no se envia (se registra en consola), para no bloquear el flujo en desarrollo.
const FROM = process.env.EMAIL_FROM ?? "TestSAS <onboarding@resend.dev>";

export async function enviarEmail(opts: {
  to: string | string[];
  subject: string;
  html: string;
}): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.log(`[email] sin RESEND_API_KEY, no se envia: "${opts.subject}" -> ${opts.to}`);
    return false;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from: FROM, to: opts.to, subject: opts.subject, html: opts.html }),
  });

  if (!res.ok) {
    console.error(`[email] error ${res.status}: ${await res.text()}`);
    return false;
  }
  return true;
}

// Plantilla base sobria y con la marca
export function plantilla(titulo: string, cuerpoHtml: string): string {
  return `<!doctype html><html lang="es"><body style="margin:0;background:#f6faf9;font-family:-apple-system,system-ui,sans-serif;color:#0b2b26">
    <div style="max-width:560px;margin:0 auto;padding:24px">
      <div style="display:inline-block;background:#0b6b5e;color:#fff;font-weight:700;border-radius:8px;padding:8px 12px">TestSAS</div>
      <h1 style="font-size:22px;margin:20px 0 12px">${titulo}</h1>
      <div style="font-size:15px;line-height:1.6;color:#334">${cuerpoHtml}</div>
      <hr style="border:none;border-top:1px solid #dde;margin:24px 0"/>
      <p style="font-size:12px;color:#889">TestSAS · Preparacion para las oposiciones del SAS. Proyecto independiente, sin vinculacion oficial con el SAS ni la Junta de Andalucia.</p>
    </div></body></html>`;
}
