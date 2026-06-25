import { salir } from "@/lib/actions/auth";
import { getSession } from "@/lib/auth";
import { getDashboard } from "@/lib/queries";
import { RotateCcw, TrendingDown } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata = { title: "Mi panel — TestSAS" };

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const { recientes, totales, porTema, repasoPendiente } = await getDashboard(session.uid);
  const totalRespondidas = Number(totales.aciertos) + Number(totales.fallos);
  const precisionGlobal =
    totalRespondidas > 0 ? Math.round((Number(totales.aciertos) / totalRespondidas) * 100) : 0;

  return (
    <div className="container py-12">
      <div className="flex items-center justify-between">
        <div>
          <span className="eyebrow">Mi panel</span>
          <h1 className="mt-2 font-display text-3xl font-semibold">
            Hola, {session.email.split("@")[0]}
          </h1>
        </div>
        <form action={salir}>
          <button type="submit" className="text-sm text-muted-foreground hover:text-foreground">
            Salir
          </button>
        </form>
      </div>

      {/* KPIs */}
      <div className="mt-8 grid gap-4 sm:grid-cols-4">
        <Kpi label="Test completados" value={Number(totales.sesiones)} />
        <Kpi label="Precision global" value={`${precisionGlobal}%`} />
        <Kpi label="Aciertos" value={Number(totales.aciertos)} className="text-success" />
        <Kpi label="Fallos" value={Number(totales.fallos)} className="text-destructive" />
      </div>

      {/* Repaso pendiente */}
      {repasoPendiente > 0 && (
        <div className="mt-6 flex items-center justify-between rounded-lg border border-primary/30 bg-primary/5 p-4">
          <div className="flex items-center gap-3">
            <RotateCcw className="h-5 w-5 text-primary" />
            <p className="text-sm">
              Tienes <strong>{repasoPendiente}</strong> preguntas listas para repasar (repaso
              espaciado).
            </p>
          </div>
        </div>
      )}

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {/* Temas debiles */}
        <section>
          <div className="mb-4 flex items-center gap-2">
            <TrendingDown className="h-5 w-5 text-destructive" />
            <h2 className="font-display text-xl font-semibold">Tus temas mas debiles</h2>
          </div>
          {porTema.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              Aun no hay datos. Haz tu primer test para ver tus estadisticas por tema.
            </p>
          ) : (
            <div className="space-y-2">
              {porTema.map((t) => (
                <div key={t.tema} className="rounded-md border bg-card p-3 shadow-soft">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{t.tema}</span>
                    <span
                      className={
                        t.precision >= 70
                          ? "text-success"
                          : t.precision >= 50
                            ? "text-foreground"
                            : "text-destructive"
                      }
                    >
                      {t.precision}%
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className={`h-full rounded-full ${
                        t.precision >= 70
                          ? "bg-success"
                          : t.precision >= 50
                            ? "bg-primary"
                            : "bg-destructive"
                      }`}
                      style={{ width: `${t.precision}%` }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {t.categoria} · {t.total} preguntas respondidas
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Sesiones recientes */}
        <section>
          <h2 className="mb-4 font-display text-xl font-semibold">Test recientes</h2>
          {recientes.length === 0 ? (
            <div className="rounded-md border bg-card p-6 text-center text-sm text-muted-foreground">
              Todavia no has hecho ningun test.{" "}
              <Link href="/categorias" className="text-primary hover:underline">
                Empieza ahora
              </Link>
              .
            </div>
          ) : (
            <div className="space-y-2">
              {recientes.map((s) => (
                <Link
                  key={s.id}
                  href={`/test/${s.id}/resultado`}
                  className="flex items-center justify-between rounded-md border bg-card p-3 shadow-soft transition-colors hover:bg-accent"
                >
                  <div>
                    <p className="text-sm font-medium">{s.categoria.nombre}</p>
                    <p className="text-xs text-muted-foreground">
                      {s.modo} · {s.aciertos}/{s.totalPreguntas} aciertos
                    </p>
                  </div>
                  <span
                    className={`font-display text-xl font-semibold ${
                      (s.nota ?? 0) >= 5 ? "text-success" : "text-destructive"
                    }`}
                  >
                    {(s.nota ?? 0).toFixed(1)}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function Kpi({
  label,
  value,
  className,
}: { label: string; value: string | number; className?: string }) {
  return (
    <div className="rounded-lg border bg-card p-5 shadow-soft">
      <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className={`mt-1 font-display text-3xl font-semibold ${className ?? ""}`}>{value}</p>
    </div>
  );
}
