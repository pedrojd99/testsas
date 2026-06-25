import { getSession } from "@/lib/auth";
import { getAdminResumen } from "@/lib/queries-admin";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata = { title: "Admin — TestSAS" };

export default async function AdminPage() {
  const session = await getSession();
  if (!session) redirect("/login");
  if (session.rol !== "admin") redirect("/dashboard");

  const resumen = await getAdminResumen();
  const totalPreguntas = resumen.reduce((a, c) => a + c.total, 0);
  const totalSinRevisar = resumen.reduce((a, c) => a + (c.total - c.revisadas), 0);

  return (
    <div className="container py-12">
      <span className="eyebrow">Administracion</span>
      <h1 className="mt-2 font-display text-3xl font-semibold">Panel de contenido</h1>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <Kpi label="Preguntas totales" value={totalPreguntas} />
        <Kpi label="Sin revisar" value={totalSinRevisar} accent="text-destructive" />
        <Kpi label="Categorias" value={resumen.length} />
      </div>

      <h2 className="mt-10 font-display text-xl font-semibold">Por categoria</h2>
      <div className="mt-4 overflow-hidden rounded-lg border">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-left text-xs uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="px-4 py-2">Categoria</th>
              <th className="px-4 py-2 text-right">Fragmentos</th>
              <th className="px-4 py-2 text-right">Preguntas</th>
              <th className="px-4 py-2 text-right">Revisadas</th>
              <th className="px-4 py-2 text-right">Activas</th>
              <th className="px-4 py-2" />
            </tr>
          </thead>
          <tbody>
            {resumen.map((c) => (
              <tr key={c.id} className="border-t">
                <td className="px-4 py-2 font-medium">
                  {c.nombre}
                  {!c.activa && <span className="ml-2 text-xs text-muted-foreground">(comun)</span>}
                </td>
                <td className="px-4 py-2 text-right text-muted-foreground">{c.fragmentos}</td>
                <td className="px-4 py-2 text-right">{c.total}</td>
                <td className="px-4 py-2 text-right text-success">{c.revisadas}</td>
                <td className="px-4 py-2 text-right">{c.activas}</td>
                <td className="px-4 py-2 text-right">
                  <Link
                    href={`/admin/preguntas?categoria=${c.slug}`}
                    className="text-primary hover:underline"
                  >
                    Ver
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <Link
          href="/admin/preguntas?noRevisadas=1"
          className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
        >
          Revisar pendientes
        </Link>
      </div>
    </div>
  );
}

function Kpi({ label, value, accent }: { label: string; value: number; accent?: string }) {
  return (
    <div className="rounded-lg border bg-card p-5 shadow-soft">
      <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className={`mt-1 font-display text-3xl font-semibold ${accent ?? ""}`}>{value}</p>
    </div>
  );
}
