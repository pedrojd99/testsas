"use client";

import { Button } from "@/components/ui/button";
import { actualizarPregunta, borrarPregunta, toggleCampo } from "@/lib/actions/admin";
import { Check, Loader2, Trash2 } from "lucide-react";
import { useState, useTransition } from "react";

interface PreguntaAdmin {
  id: string;
  enunciado: string;
  opciones: string[];
  correctaIndex: number;
  explicacion: string | null;
  fuente: string | null;
  dificultad: "facil" | "media" | "dificil";
  revisada: boolean;
  activa: boolean;
  categoria: string;
  tema: string | null;
}

const LETRAS = ["A", "B", "C", "D"];

export function PreguntaEditor({ pregunta }: { pregunta: PreguntaAdmin }) {
  const [p, setP] = useState(pregunta);
  const [abierto, setAbierto] = useState(false);
  const [guardado, setGuardado] = useState(false);
  const [pending, startTransition] = useTransition();

  function set<K extends keyof PreguntaAdmin>(k: K, v: PreguntaAdmin[K]) {
    setP((prev) => ({ ...prev, [k]: v }));
    setGuardado(false);
  }

  function setOpcion(i: number, v: string) {
    setP((prev) => ({ ...prev, opciones: prev.opciones.map((o, j) => (j === i ? v : o)) }));
    setGuardado(false);
  }

  function guardar() {
    startTransition(async () => {
      await actualizarPregunta({
        id: p.id,
        enunciado: p.enunciado,
        opciones: p.opciones,
        correctaIndex: p.correctaIndex,
        explicacion: p.explicacion ?? undefined,
        fuente: p.fuente ?? undefined,
        dificultad: p.dificultad,
        revisada: p.revisada,
        activa: p.activa,
      });
      setGuardado(true);
    });
  }

  function aprobar() {
    set("revisada", true);
    startTransition(async () => {
      await toggleCampo(p.id, "revisada", true);
    });
  }

  function borrar() {
    if (!confirm("Borrar esta pregunta de forma permanente?")) return;
    startTransition(async () => {
      await borrarPregunta(p.id);
    });
  }

  return (
    <div className={`rounded-lg border bg-card p-4 shadow-soft ${!p.activa ? "opacity-60" : ""}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="chip">{p.categoria}</span>
          {p.tema && <span className="text-muted-foreground">{p.tema}</span>}
          <span className="rounded bg-muted px-1.5 py-0.5 text-muted-foreground">
            {p.dificultad}
          </span>
          {p.revisada ? (
            <span className="rounded bg-success/10 px-1.5 py-0.5 text-success">revisada</span>
          ) : (
            <span className="rounded bg-destructive/10 px-1.5 py-0.5 text-destructive">
              sin revisar
            </span>
          )}
          {!p.activa && <span className="rounded bg-muted px-1.5 py-0.5">inactiva</span>}
        </div>
        <button
          type="button"
          onClick={() => setAbierto((a) => !a)}
          className="text-xs text-primary hover:underline"
        >
          {abierto ? "Cerrar" : "Editar"}
        </button>
      </div>

      <p className="mt-2 text-sm font-medium">{p.enunciado}</p>

      {!abierto && (
        <div className="mt-2 space-y-1 text-sm">
          {p.opciones.map((o, i) => (
            <p key={i} className={i === p.correctaIndex ? "text-success" : "text-muted-foreground"}>
              {LETRAS[i]}. {o} {i === p.correctaIndex && "✓"}
            </p>
          ))}
          <div className="mt-3 flex gap-2">
            {!p.revisada && (
              <Button size="sm" onClick={aprobar} disabled={pending}>
                <Check className="mr-1 h-4 w-4" /> Aprobar
              </Button>
            )}
            <Button size="sm" variant="ghost" onClick={borrar} disabled={pending}>
              <Trash2 className="h-4 w-4 text-destructive" />
            </Button>
          </div>
        </div>
      )}

      {abierto && (
        <div className="mt-3 space-y-3">
          <textarea
            value={p.enunciado}
            onChange={(e) => set("enunciado", e.target.value)}
            className="w-full rounded-md border bg-background p-2 text-sm"
            rows={2}
          />
          {p.opciones.map((o, i) => (
            <div key={i} className="flex items-center gap-2">
              <input
                type="radio"
                name={`correcta-${p.id}`}
                checked={i === p.correctaIndex}
                onChange={() => set("correctaIndex", i)}
                title="Marcar como correcta"
              />
              <span className="w-4 text-xs font-semibold">{LETRAS[i]}</span>
              <input
                value={o}
                onChange={(e) => setOpcion(i, e.target.value)}
                className="flex-1 rounded-md border bg-background px-2 py-1 text-sm"
              />
            </div>
          ))}
          <textarea
            value={p.explicacion ?? ""}
            onChange={(e) => set("explicacion", e.target.value)}
            placeholder="Explicacion"
            className="w-full rounded-md border bg-background p-2 text-sm"
            rows={2}
          />
          <input
            value={p.fuente ?? ""}
            onChange={(e) => set("fuente", e.target.value)}
            placeholder="Fuente (cita legal)"
            className="w-full rounded-md border bg-background px-2 py-1 text-sm"
          />
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <select
              value={p.dificultad}
              onChange={(e) => set("dificultad", e.target.value as PreguntaAdmin["dificultad"])}
              className="rounded-md border bg-background px-2 py-1"
            >
              <option value="facil">facil</option>
              <option value="media">media</option>
              <option value="dificil">dificil</option>
            </select>
            <label className="flex items-center gap-1.5">
              <input
                type="checkbox"
                checked={p.revisada}
                onChange={(e) => set("revisada", e.target.checked)}
              />
              Revisada
            </label>
            <label className="flex items-center gap-1.5">
              <input
                type="checkbox"
                checked={p.activa}
                onChange={(e) => set("activa", e.target.checked)}
              />
              Activa
            </label>
          </div>
          <div className="flex gap-2">
            <Button size="sm" onClick={guardar} disabled={pending}>
              {pending ? <Loader2 className="mr-1 h-4 w-4 animate-spin" /> : null}
              {guardado ? "Guardado" : "Guardar"}
            </Button>
            <Button size="sm" variant="ghost" onClick={borrar} disabled={pending}>
              <Trash2 className="mr-1 h-4 w-4 text-destructive" /> Borrar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
