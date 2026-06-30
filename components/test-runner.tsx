"use client";

import { Button } from "@/components/ui/button";
import { type RespuestaEnviada, finalizarSesion } from "@/lib/actions/test";
import { ChevronLeft, ChevronRight, Clock, Flag } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface PreguntaRunner {
  preguntaId: string;
  enunciado: string;
  opciones: string[];
  dificultad: string;
}

const LETRAS = ["A", "B", "C", "D"];

function mmss(seg: number) {
  const m = Math.floor(seg / 60);
  const s = seg % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

export function TestRunner({
  sesionId,
  preguntas,
  modo,
  tiempoLimiteSeg,
  startedAt,
}: {
  sesionId: string;
  preguntas: PreguntaRunner[];
  modo: string;
  tiempoLimiteSeg?: number | null;
  startedAt?: string;
}) {
  const [actual, setActual] = useState(0);
  const [respuestas, setRespuestas] = useState<Record<string, number | null>>({});
  const [marcadas, setMarcadas] = useState<Set<string>>(new Set());
  const [enviando, setEnviando] = useState(false);
  const enviadoRef = useRef(false);

  const pregunta = preguntas[actual];
  const respondidas = Object.values(respuestas).filter((v) => v !== null && v !== undefined).length;

  const enviar = useCallback(async () => {
    if (enviadoRef.current) return;
    enviadoRef.current = true;
    setEnviando(true);
    const payload: RespuestaEnviada[] = preguntas.map((p) => ({
      preguntaId: p.preguntaId,
      opcion: respuestas[p.preguntaId] ?? null,
    }));
    await finalizarSesion(sesionId, payload);
  }, [preguntas, respuestas, sesionId]);

  // Cronometro del simulacro: el fin se calcula desde startedAt, asi que
  // sobrevive a recargas. Al llegar a 0 se autocorrige.
  const finMs = useMemo(() => {
    if (!tiempoLimiteSeg || !startedAt) return null;
    return new Date(startedAt).getTime() + tiempoLimiteSeg * 1000;
  }, [tiempoLimiteSeg, startedAt]);

  const [restante, setRestante] = useState<number | null>(() =>
    finMs ? Math.max(0, Math.round((finMs - Date.now()) / 1000)) : null,
  );

  useEffect(() => {
    if (!finMs) return;
    const tick = () => {
      const s = Math.max(0, Math.round((finMs - Date.now()) / 1000));
      setRestante(s);
      if (s <= 0) enviar();
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [finMs, enviar]);

  function elegir(opcion: number) {
    setRespuestas((prev) => ({ ...prev, [pregunta.preguntaId]: opcion }));
  }

  function alternarMarca() {
    setMarcadas((prev) => {
      const next = new Set(prev);
      next.has(pregunta.preguntaId)
        ? next.delete(pregunta.preguntaId)
        : next.add(pregunta.preguntaId);
      return next;
    });
  }

  const navegacion = useMemo(
    () =>
      preguntas.map((p, i) => ({
        i,
        respondida: respuestas[p.preguntaId] !== null && respuestas[p.preguntaId] !== undefined,
        marcada: marcadas.has(p.preguntaId),
      })),
    [preguntas, respuestas, marcadas],
  );

  const urgente = restante !== null && restante <= 60;

  return (
    <div className="container max-w-3xl py-8">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <span className="eyebrow">{modo === "simulacro" ? "Simulacro" : "Test"}</span>
          <p className="text-sm text-muted-foreground">
            Pregunta {actual + 1} de {preguntas.length} · {respondidas} respondidas
            {marcadas.size > 0 && ` · ${marcadas.size} marcadas`}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {restante !== null && (
            <span
              className={`flex items-center gap-1.5 rounded-md border px-3 py-1.5 font-medium tabular-nums ${
                urgente ? "border-destructive/40 bg-destructive/5 text-destructive" : "bg-card"
              }`}
            >
              <Clock className="h-4 w-4" /> {mmss(restante)}
            </span>
          )}
          <Button onClick={enviar} disabled={enviando} variant="default" size="sm">
            {enviando ? "Corrigiendo..." : "Finalizar"}
          </Button>
        </div>
      </div>

      {/* Barra de progreso por preguntas */}
      <div className="mb-6 flex flex-wrap gap-1.5">
        {navegacion.map((n) => (
          <button
            key={n.i}
            type="button"
            onClick={() => setActual(n.i)}
            className={`relative h-7 w-7 rounded text-xs font-medium transition-colors ${
              n.i === actual
                ? "bg-primary text-primary-foreground"
                : n.respondida
                  ? "bg-primary/20 text-primary"
                  : "bg-muted text-muted-foreground hover:bg-accent"
            }`}
          >
            {n.i + 1}
            {n.marcada && (
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-amber-500" />
            )}
          </button>
        ))}
      </div>

      <div className="rounded-lg border bg-card p-6 shadow-soft">
        <div className="mb-1 flex items-center justify-between">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Dificultad: {pregunta.dificultad}
          </p>
          <button
            type="button"
            onClick={alternarMarca}
            className={`flex items-center gap-1.5 text-xs font-medium ${
              marcadas.has(pregunta.preguntaId)
                ? "text-amber-600"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Flag className="h-3.5 w-3.5" />
            {marcadas.has(pregunta.preguntaId) ? "Marcada" : "Marcar"}
          </button>
        </div>
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
