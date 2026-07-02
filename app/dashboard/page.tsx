import { Logros } from "@/components/logros";
import { NotaTrend } from "@/components/nota-trend";
import { PlanEstudio } from "@/components/plan-estudio";
import { salir } from "@/lib/actions/auth";
import { iniciarSesion } from "@/lib/actions/test";
import { setOposicionPreferida, setResumenEmail } from "@/lib/actions/user";
import { getSession } from "@/lib/auth";
import { getCategorias, getDashboard } from "@/lib/queries";
import {
  Clock,
  Flame,
  GraduationCap,
  PlayCircle,
  RotateCcw,
  TrendingDown,
  Trophy,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata = { title: "Mi panel — TestSAS" };

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const {
    recientes,
    totales,
    porTema,
    repasoPendiente,
    racha,
    tendencia,
    preferida,
    enCurso,
    plan,
    mejorNota,
    recibirResumen,
    rankingResumen,
  } = await getDashboard(session.uid);
  const totalRespondidas = Number(totales.aciertos) + Number(totales.fallos);
  const precisionGlobal =
    totalRespondidas > 0 ? Math.round((Number(totales.aciertos) / totalRespondidas) * 100) : 0;
  const slugRepaso = recientes[0]?.categoria.slug;
  const categorias = await getCategorias();

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

      {/* Test sin terminar */}
      {enCurso && (
        <Link
          href={`/test/${enCurso.id}`}
          className="mt-6 flex items-center justify-between gap-3 rounded-lg border border-amber-500/40 bg-amber-500/5 p-4 transition-colors hover:bg-amber-500/10"
        >
          <div className="flex items-center gap-3">
            <PlayCircle className="h-5 w-5 text-amber-600" />
            <p className="text-sm">
              Tienes un test sin terminar de <strong>{enCurso.categoria}</strong> ({enCurso.total}{" "}
              preguntas).
            </p>
          </div>
          <span className="rounded-md bg-amber-600 px-3 py-1.5 text-sm font-medium text-white">
            Continuar
          </span>
        </Link>
      )}

      {/* Mi oposicion (inicio rapido) */}
      {preferida ? (
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-lg border bg-card p-5 shadow-soft">
          <div className="flex items-center gap-3">
            <span className="emblema">
              <GraduationCap className="h-4 w-4" />
            </span>
            <div>
              <p className="eyebrow">Mi oposicion</p>
              <p className="font-display text-lg font-semibold">{preferida.nombre}</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <QuickStart
              slug={preferida.slug}
              modo="simulacro"
              label="Simulacro"
              icon={<Clock className="h-4 w-4" />}
            />
            <QuickStart
              slug={preferida.slug}
              modo="rapido"
              label="Test rapido"
              icon={<Zap className="h-4 w-4" />}
            />
            <Link
              href={`/categorias/${preferida.slug}`}
              className="rounded-md border px-3 py-2 text-sm hover:bg-accent"
            >
              Por tema
            </Link>
            <Link
              href={`/categorias/${preferida.slug}/temario`}
              className="rounded-md border px-3 py-2 text-sm hover:bg-accent"
            >
              Temario
            </Link>
          </div>
        </div>
      ) : (
        <form
          action={setOposicionPreferida}
          className="mt-6 flex flex-wrap items-center gap-3 rounded-lg border border-dashed bg-card p-5"
        >
          <GraduationCap className="h-5 w-5 text-primary" />
          <p className="text-sm">Elige tu oposicion para tener acceso rapido:</p>
          <select
            name="categoriaSlug"
            className="rounded-md border bg-background px-2 py-1.5 text-sm"
            defaultValue=""
          >
            <option value="" disabled>
              Selecciona...
            </option>
            {categorias.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.nombre}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Guardar
          </button>
        </form>
      )}

      {/* Plan de estudio */}
      <PlanEstudio plan={plan} />

      {/* KPIs */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <Kpi label="Test completados" value={Number(totales.sesiones)} />
        <Kpi label="Precision global" value={`${precisionGlobal}%`} />
        <Kpi label="Aciertos" value={Number(totales.aciertos)} className="text-success" />
        <Kpi label="Fallos" value={Number(totales.fallos)} className="text-destructive" />
        <div className="rounded-lg border bg-card p-5 shadow-soft">
          <p className="flex items-center gap-1.5 text-xs uppercase tracking-wide text-muted-foreground">
            <Flame className="h-3.5 w-3.5 text-amber-500" /> Racha
          </p>
          <p className="mt-1 font-display text-3xl font-semibold">
            {racha} <span className="text-base font-normal text-muted-foreground">dias</span>
          </p>
        </div>
      </div>

      {/* Ranking semanal */}
      <Link
        href="/ranking"
        className="mt-6 flex items-center justify-between gap-3 rounded-lg border bg-card p-4 shadow-soft transition-colors hover:bg-accent"
      >
        <div className="flex items-center gap-3">
          <span className="emblema">
            <Trophy className="h-4 w-4" />
          </span>
          <div>
            <p className="eyebrow">Ranking semanal</p>
            {rankingResumen ? (
              <p className="text-sm">
                Vas <strong>#{rankingResumen.puesto}</strong> de {rankingResumen.total} esta semana
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">
                Compite de forma anónima con otros opositores
              </p>
            )}
          </div>
        </div>
        <span className="text-sm font-medium text-primary">Ver</span>
      </Link>

      {/* Repaso de hoy (espaciado) */}
      {repasoPendiente > 0 && slugRepaso && (
        <form
          action={iniciarSesion}
          className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-primary/30 bg-primary/5 p-4"
        >
          <input type="hidden" name="categoriaSlug" value={slugRepaso} />
          <input type="hidden" name="modo" value="repaso" />
          <div className="flex items-center gap-3">
            <RotateCcw className="h-5 w-5 text-primary" />
            <p className="text-sm">
              Tienes <strong>{repasoPendiente}</strong> preguntas listas para repasar hoy (repaso
              espaciado).
            </p>
          </div>
          <button
            type="submit"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Repasar ahora
          </button>
        </form>
      )}

      {/* Logros */}
      <Logros
        datos={{
          sesiones: Number(totales.sesiones),
          respondidas: totalRespondidas + Number(totales.enBlanco),
          precision: precisionGlobal,
          racha,
          mejorNota,
        }}
      />

      {/* Evolucion de la nota */}
      <section className="mt-10 rounded-lg border bg-card p-5 shadow-soft">
        <h2 className="mb-4 font-display text-xl font-semibold">Evolucion de tu nota</h2>
        <NotaTrend notas={tendencia} />
      </section>

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

      {/* Ajustes de email */}
      <form
        action={setResumenEmail}
        className="mt-10 flex flex-wrap items-center gap-3 border-t pt-6 text-sm text-muted-foreground"
      >
        <label className="flex items-center gap-2">
          <input type="checkbox" name="recibirResumen" value="1" defaultChecked={recibirResumen} />
          Recibir el resumen semanal por email
        </label>
        <button type="submit" className="rounded-md border px-3 py-1.5 hover:bg-accent">
          Guardar
        </button>
      </form>
    </div>
  );
}

function QuickStart({
  slug,
  modo,
  label,
  icon,
}: {
  slug: string;
  modo: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <form action={iniciarSesion}>
      <input type="hidden" name="categoriaSlug" value={slug} />
      <input type="hidden" name="modo" value={modo} />
      <button
        type="submit"
        className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        {icon}
        {label}
      </button>
    </form>
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
