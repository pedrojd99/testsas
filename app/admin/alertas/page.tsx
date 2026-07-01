import { ComprobarBoja } from "@/components/comprobar-boja";
import { enviarAlertaConvocatoria } from "@/lib/actions/alertas";
import { getSession } from "@/lib/auth";
import { getCategoriasParaFiltro, getResumenAlertas } from "@/lib/queries-admin";
import { BellRing, CheckCircle2, Users } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata = { title: "Alertas — Admin TestSAS" };

export default async function AdminAlertasPage({
  searchParams,
}: {
  searchParams: Promise<{ enviados?: string; error?: string }>;
}) {
  const session = await getSession();
  if (!session) redirect("/login");
  if (session.rol !== "admin") redirect("/dashboard");

  const sp = await searchParams;
  const resumen = await getResumenAlertas();
  const categorias = await getCategoriasParaFiltro();

  return (
    <div className="container max-w-2xl py-12">
      <div className="flex items-center justify-between">
        <div>
          <span className="eyebrow">Administracion</span>
          <h1 className="mt-2 font-display text-3xl font-semibold">Alertas de convocatoria</h1>
        </div>
        <Link href="/admin" className="text-sm text-muted-foreground hover:text-foreground">
          Volver
        </Link>
      </div>

      {sp.enviados && (
        <div className="mt-6 flex items-center gap-2 rounded-md border border-success/40 bg-success/5 p-3 text-sm">
          <CheckCircle2 className="h-4 w-4 text-success" /> Aviso enviado a {sp.enviados}{" "}
          suscriptores.
        </div>
      )}

      {/* Suscriptores */}
      <div className="mt-6 rounded-lg border bg-card p-5 shadow-soft">
        <div className="mb-3 flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          <h2 className="font-medium">
            {resumen.total} suscriptores ({resumen.todas} a todas las categorias)
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 text-sm">
          {resumen.porCategoria.map((c) => (
            <span key={c.slug} className="chip">
              {c.categoria}: {Number(c.total)}
            </span>
          ))}
          {resumen.porCategoria.length === 0 && (
            <p className="text-sm text-muted-foreground">Aun no hay suscriptores por categoria.</p>
          )}
        </div>
        <ComprobarBoja />
      </div>

      {/* Enviar aviso */}
      <form action={enviarAlertaConvocatoria} className="mt-8 space-y-4">
        <div className="flex items-center gap-2">
          <BellRing className="h-5 w-5 text-primary" />
          <h2 className="font-display text-xl font-semibold">Enviar aviso</h2>
        </div>
        <div>
          <label htmlFor="cat" className="block text-xs text-muted-foreground">
            Destinatarios
          </label>
          <select
            id="cat"
            name="categoriaSlug"
            defaultValue="todas"
            className="mt-1 rounded-md border bg-background px-2 py-2 text-sm"
          >
            <option value="todas">Todos los suscriptores</option>
            {categorias.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.nombre} (+ los de "todas")
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="asunto" className="block text-xs text-muted-foreground">
            Asunto
          </label>
          <input
            id="asunto"
            name="asunto"
            required
            defaultValue="Ya esta aqui la convocatoria del SAS"
            className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label htmlFor="mensaje" className="block text-xs text-muted-foreground">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            required
            rows={5}
            defaultValue={
              "Se ha publicado la convocatoria en el BOJA. Consulta plazos y requisitos y empieza a preparar el examen con test y simulacros."
            }
            className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm"
          />
        </div>
        {sp.error && <p className="text-sm text-destructive">Faltan datos.</p>}
        <button
          type="submit"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Enviar a los suscriptores
        </button>
        <p className="text-xs text-muted-foreground">
          Requiere RESEND_API_KEY configurada. Sin ella, los envios se registran en consola.
        </p>
      </form>
    </div>
  );
}
