import { getSession } from "@/lib/auth";
import { db, usuarios } from "@/lib/db";
import { getCategorias, getRankingSemanal } from "@/lib/queries";
import { eq } from "drizzle-orm";
import { Medal, Trophy, Users } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata = { title: "Ranking semanal — TestSAS" };

export default async function RankingPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>;
}) {
  const session = await getSession();
  if (!session) redirect("/login");

  const { cat } = await searchParams;
  const categorias = await getCategorias();
  if (categorias.length === 0) redirect("/dashboard");

  const user = await db.query.usuarios.findFirst({
    where: eq(usuarios.id, session.uid),
    columns: { categoriaPreferidaId: true },
  });
  const preferidaSlug = categorias.find((c) => c.id === user?.categoriaPreferidaId)?.slug;

  const seleccionada =
    categorias.find((c) => c.slug === cat) ??
    categorias.find((c) => c.slug === preferidaSlug) ??
    categorias[0];

  const ranking = await getRankingSemanal(seleccionada.id, session.uid);
  const suficiente = ranking.total >= 3;

  return (
    <div className="container max-w-2xl py-10">
      <span className="eyebrow">Comunidad</span>
      <h1 className="mt-2 font-display text-3xl font-semibold">Ranking semanal</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Clasificación anónima por tu mejor nota de esta semana. Se reinicia cada lunes.
      </p>

      {/* Selector de oposicion */}
      <div className="mt-6 flex flex-wrap gap-2">
        {categorias.map((c) => {
          const activa = c.id === seleccionada.id;
          return (
            <Link
              key={c.id}
              href={`/ranking?cat=${c.slug}`}
              aria-current={activa ? "page" : undefined}
              className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                activa
                  ? "border-primary bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent"
              }`}
            >
              {c.nombre}
            </Link>
          );
        })}
      </div>

      {/* Tu posicion */}
      {ranking.tu ? (
        <div className="mt-6 flex items-center justify-between gap-4 rounded-lg border bg-primary/5 p-5 shadow-soft">
          <div className="flex items-center gap-3">
            <span className="emblema">
              <Trophy className="h-4 w-4" />
            </span>
            <div>
              <p className="eyebrow">Tu posición</p>
              <p className="font-display text-2xl font-semibold">
                #{ranking.tu.puesto}{" "}
                <span className="text-base font-normal text-muted-foreground">
                  de {ranking.total}
                </span>
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Tu mejor nota</p>
            <p className="font-display text-2xl font-semibold text-primary">
              {ranking.tu.nota.toFixed(2)}
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-6 rounded-lg border border-dashed bg-card p-5 text-sm text-muted-foreground">
          Aún no tienes ninguna nota esta semana en {seleccionada.nombre}. Haz un simulacro para
          entrar en la clasificación.
        </div>
      )}

      {/* Tabla top 10 */}
      {suficiente ? (
        <div className="mt-6 overflow-hidden rounded-lg border bg-card shadow-soft">
          {ranking.top.map((e) => (
            <div
              key={e.puesto + (e.esTuyo ? "-tu" : "")}
              className={`flex items-center gap-3 border-b px-4 py-3 last:border-b-0 ${
                e.esTuyo ? "bg-primary/5" : ""
              }`}
            >
              <span
                aria-label={`Puesto ${e.puesto}`}
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                  e.puesto === 1
                    ? "bg-amber-400/20 text-amber-600"
                    : e.puesto === 2
                      ? "bg-slate-300/30 text-slate-500"
                      : e.puesto === 3
                        ? "bg-orange-400/20 text-orange-600"
                        : "bg-muted text-muted-foreground"
                }`}
              >
                {e.puesto <= 3 ? <Medal className="h-4 w-4" aria-hidden /> : e.puesto}
              </span>
              <span className="flex-1 text-sm font-medium">
                {e.esTuyo ? "Tú" : `Opositor #${e.puesto}`}
              </span>
              <span className="font-display text-lg font-semibold tabular-nums">
                {e.nota.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-6 flex items-center gap-3 rounded-lg border bg-card p-5 text-sm text-muted-foreground">
          <Users className="h-5 w-5 shrink-0 text-primary" />
          Todavía no hay suficientes participantes esta semana en {seleccionada.nombre}. Vuelve
          cuando más opositores hayan practicado.
        </div>
      )}

      <p className="mt-4 text-xs text-muted-foreground">
        Clasificación anónima y orientativa. No se muestra ningún dato personal de otros opositores.
      </p>
    </div>
  );
}
