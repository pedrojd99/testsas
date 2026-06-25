"use client";

import { Button } from "@/components/ui/button";
import { type RespuestaEnviada, finalizarSesion } from "@/lib/actions/test";
import { ChevronLeft, ChevronRight, Flag } from "lucide-react";
import { useMemo, useState } from "react";

interface PreguntaRunner {
  preguntaId: string;
  enunciado: string;
  opciones: string[];
  dificultad: string;
}

const LETRAS = ["A", "B", "C", "D"];

export function TestRunner({
  sesionId,
  preguntas,
  modo,
  tiempoLimiteSeg,
}: {
  sesionId: string;
  preguntas: PreguntaRunner[];
  modo: string;
  tiempoLimiteSeg?: number | null;
}) {
  const [actual, setActual] = useState(0);
  const [respuestas, setRespuestas] = useState<Record<string, number | null>>({});
  const [enviando, setEnviando] = useState(false);

  const pregunta = preguntas[actual];
  const respondidas = Object.values(respuestas).filter((v) => v !== null && v !== undefined).length;

  function elegir(opcion: number) {
    setRespuestas((prev) => ({ ...prev, [pregunta.preguntaId]: opcion }));
  }

  async function enviar() {
    setEnviando(true);
    const payload: RespuestaEnviada[] = preguntas.map((p) => ({
      preguntaId: p.preguntaId,
      opcion: respuestas[p.preguntaId] ?? null,
    }));
    await finalizarSesion(sesionId, payload);
  }

  const navegacion = useMemo(
    () =>
      preguntas.map((p, i) => ({
        i,
        respondida: respuestas[p.preguntaId] !== null && respuestas[p.preguntaId] !== undefined,
      })),
    [preguntas, respuestas],
  );

  return (
    <div className="container max-w-3xl py-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <span className="eyebrow">{modo === "simulacro" ? "Simulacro" : "Test"}</span>
          <p className="text-sm text-muted-foreground">
            Pregunta {actual + 1} de {preguntas.length} · {respondidas} respondidas
          </p>
        </div>
        <Button onClick={enviar} disabled={enviando} variant="default" size="sm">
          <Flag className="mr-1 h-4 w-4" />
          {enviando ? "Corrigiendo..." : "Finalizar"}
        </Button>
      </div>

      {/* Barra de progreso por preguntas */}
      <div className="mb-6 flex flex-wrap gap-1.5">
        {navegacion.map((n) => (
          <button
            key={n.i}
            type="button"
            onClick={() => setActual(n.i)}
            className={`h-7 w-7 rounded text-xs font-medium transition-colors ${
              n.i === actual
                ? "bg-primary text-primary-foreground"
                : n.respondida
                  ? "bg-primary/20 text-primary"
                  : "bg-muted text-muted-foreground hover:bg-accent"
            }`}
          >
            {n.i + 1}
          </button>
        ))}
      </div>

      <div className="rounded-lg border bg-card p-6 shadow-soft">
        <p className="mb-1 text-xs uppercase tracking-wide text-muted-foreground">
          Dificultad: {pregunta.dificultad}
        </p>
        <h2 className="text-lg font-medium leading-relaxed">{pregunta.enunciado}</h2>

        <div className="mt-6 space-y-2">
          {pregunta.opciones.map((opcion, idx) => {
            const elegida = respuestas[pregunta.preguntaId] === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => elegir(idx)}
                className={`flex w-full items-start gap-3 rounded-md border p-3 text-left text-sm transition-colors ${
                  elegida ? "border-primary bg-primary/5" : "hover:bg-accent"
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold ${
                    elegida ? "border-primary bg-primary text-primary-foreground" : "border-input"
                  }`}
                >
                  {LETRAS[idx]}
                </span>
                <span className="pt-0.5">{opcion}</span>
              </button>
            );
          })}
        </div>

        {respuestas[pregunta.preguntaId] !== undefined && (
          <button
            type="button"
            onClick={() => setRespuestas((p) => ({ ...p, [pregunta.preguntaId]: null }))}
            className="mt-3 text-xs text-muted-foreground hover:text-foreground"
          >
            Dejar en blanco
          </button>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setActual((a) => Math.max(0, a - 1))}
          disabled={actual === 0}
        >
          <ChevronLeft className="mr-1 h-4 w-4" /> Anterior
        </Button>
        {actual < preguntas.length - 1 ? (
          <Button variant="outline" onClick={() => setActual((a) => a + 1)}>
            Siguiente <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        ) : (
          <Button onClick={enviar} disabled={enviando}>
            {enviando ? "Corrigiendo..." : "Finalizar test"}
          </Button>
        )}
      </div>
    </div>
  );
}
