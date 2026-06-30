"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Tema {
  id: string;
  nombre: string;
  totalPreguntas: number;
}

export function TemaSelector({
  slug,
  accion,
  comunes,
  especificas,
}: {
  slug: string;
  accion: (formData: FormData) => Promise<void>;
  comunes: Tema[];
  especificas: Tema[];
}) {
  const [seleccion, setSeleccion] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setSeleccion((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  const totalSel = [...comunes, ...especificas]
    .filter((t) => seleccion.has(t.id))
    .reduce((acc, t) => acc + t.totalPreguntas, 0);

  return (
    <form action={accion}>
      <input type="hidden" name="categoriaSlug" value={slug} />
      <input type="hidden" name="modo" value="tema" />
      {[...seleccion].map((id) => (
        <input key={id} type="hidden" name="temaIds" value={id} />
      ))}

      <Bloque titulo="Parte comun" temas={comunes} seleccion={seleccion} onToggle={toggle} />
      {especificas.length > 0 && (
        <Bloque
          titulo="Parte especifica"
          temas={especificas}
          seleccion={seleccion}
          onToggle={toggle}
        />
      )}

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t pt-4">
        <div>
          <label className="flex items-center gap-2 text-sm font-medium">
            <input
              type="checkbox"
              name="feedbackInmediato"
              value="1"
              defaultChecked
              className="h-4 w-4 accent-[hsl(var(--primary))]"
            />
            Modo estudio
          </label>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {seleccion.size} temas · {totalSel} preguntas · ves la solucion tras cada respuesta
          </p>
        </div>
        <Button type="submit" disabled={seleccion.size === 0}>
          Empezar test
        </Button>
      </div>
    </form>
  );
}

function Bloque({
  titulo,
  temas,
  seleccion,
  onToggle,
}: {
  titulo: string;
  temas: Tema[];
  seleccion: Set<string>;
  onToggle: (id: string) => void;
}) {
  return (
    <div className="mb-4">
      <p className="eyebrow mb-2">{titulo}</p>
      <div className="grid gap-2 sm:grid-cols-2">
        {temas.map((t) => {
          const activo = seleccion.has(t.id);
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => onToggle(t.id)}
              className={`flex items-center justify-between rounded-md border px-3 py-2 text-left text-sm transition-colors ${
                activo ? "border-primary bg-primary/5" : "hover:bg-accent"
              }`}
            >
              <span className="flex items-center gap-2">
                <span
                  className={`flex h-4 w-4 items-center justify-center rounded border ${
                    activo ? "border-primary bg-primary text-primary-foreground" : "border-input"
                  }`}
                >
                  {activo && "✓"}
                </span>
                {t.nombre}
              </span>
              <span className="text-xs text-muted-foreground">{t.totalPreguntas}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
