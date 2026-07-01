"use client";

import { suscribirAlerta } from "@/lib/actions/alertas";
import { BellRing, CheckCircle2 } from "lucide-react";
import { useActionState } from "react";

export function AlertaForm({ categorias }: { categorias: { slug: string; nombre: string }[] }) {
  const [state, action, pending] = useActionState(suscribirAlerta, undefined);

  if (state?.ok) {
    return (
      <div className="flex items-center gap-3 rounded-lg border border-success/40 bg-success/5 p-4 text-sm">
        <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
        <p>
          Hecho. Te avisaremos por email en cuanto se publique la convocatoria. Revisa tu bandeja
          para confirmar.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="rounded-lg border bg-card p-5 shadow-soft">
      <div className="mb-3 flex items-center gap-2">
        <BellRing className="h-5 w-5 text-primary" />
        <h3 className="font-display text-lg font-semibold">Avisame cuando salga la convocatoria</h3>
      </div>
      <div className="flex flex-wrap items-end gap-3">
        <div className="flex-1">
          <label htmlFor="alerta-email" className="block text-xs text-muted-foreground">
            Tu email
          </label>
          <input
            id="alerta-email"
            name="email"
            type="email"
            required
            placeholder="tu@email.com"
            className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div>
          <label htmlFor="alerta-cat" className="block text-xs text-muted-foreground">
            Categoria
          </label>
          <select
            id="alerta-cat"
            name="categoriaSlug"
            defaultValue=""
            className="mt-1 rounded-md border bg-background px-2 py-2 text-sm"
          >
            <option value="">Todas</option>
            {categorias.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.nombre}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          disabled={pending}
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
        >
          {pending ? "Guardando..." : "Avisarme"}
        </button>
      </div>
      {state?.error && <p className="mt-2 text-sm text-destructive">{state.error}</p>}
      <p className="mt-2 text-xs text-muted-foreground">
        Solo para avisarte de la convocatoria. Puedes darte de baja cuando quieras.
      </p>
    </form>
  );
}
