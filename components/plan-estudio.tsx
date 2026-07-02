import { setPlanEstudio } from "@/lib/actions/user";
import { CalendarClock, Target } from "lucide-react";

interface Plan {
  fechaExamen: string | null;
  objetivoDiario: number;
  respondidasHoy: number;
  diasRestantes: number | null;
}

export function PlanEstudio({ plan }: { plan: Plan | null }) {
  const objetivo = plan?.objetivoDiario ?? 20;
  const hoy = plan?.respondidasHoy ?? 0;
  const pct = Math.min(100, Math.round((hoy / objetivo) * 100));
  const tienePlan = Boolean(plan?.fechaExamen);

  return (
    <section className="mt-6 rounded-lg border bg-card p-5 shadow-soft">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Anillo pct={pct} />
          <div>
            <p className="eyebrow">Plan de estudio</p>
            <p className="font-display text-lg font-semibold">
              {hoy}/{objetivo} preguntas hoy
            </p>
            {tienePlan && plan?.diasRestantes != null && (
              <p className="mt-0.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                <CalendarClock className="h-3.5 w-3.5" />
                {plan.diasRestantes === 0
                  ? "El examen es hoy"
                  : `Faltan ${plan.diasRestantes} dias para el examen`}
              </p>
            )}
          </div>
        </div>

        <details className="text-sm">
          <summary className="cursor-pointer list-none text-primary hover:underline">
            {tienePlan ? "Editar plan" : "Configurar plan"}
          </summary>
          <form action={setPlanEstudio} className="mt-3 flex flex-wrap items-end gap-3">
            <div>
              <label htmlFor="fechaExamen" className="block text-xs text-muted-foreground">
                Fecha del examen
              </label>
              <input
                id="fechaExamen"
                name="fechaExamen"
                type="date"
                defaultValue={plan?.fechaExamen ?? ""}
                className="mt-1 rounded-md border bg-background px-2 py-1.5 text-sm"
              />
            </div>
            <div>
              <label htmlFor="objetivoDiario" className="block text-xs text-muted-foreground">
                Preguntas/dia
              </label>
              <input
                id="objetivoDiario"
                name="objetivoDiario"
                type="number"
                min={5}
                max={200}
                defaultValue={objetivo}
                className="mt-1 w-24 rounded-md border bg-background px-2 py-1.5 text-sm"
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Guardar
            </button>
          </form>
        </details>
      </div>
      {!tienePlan && (
        <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Target className="h-3.5 w-3.5" /> Fija la fecha de tu examen y una meta diaria para
          seguir tu ritmo.
        </p>
      )}
    </section>
  );
}

function Anillo({ pct }: { pct: number }) {
  const R = 26;
  const C = 2 * Math.PI * R;
  const off = C - (pct / 100) * C;
  return (
    <div className="relative h-16 w-16 shrink-0">
      <svg viewBox="0 0 64 64" className="h-full w-full -rotate-90">
        <circle cx="32" cy="32" r={R} fill="none" stroke="hsl(var(--muted))" strokeWidth="7" />
        <circle
          cx="32"
          cy="32"
          r={R}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="7"
          strokeDasharray={C}
          strokeDashoffset={off}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold">
        {pct}%
      </span>
    </div>
  );
}
