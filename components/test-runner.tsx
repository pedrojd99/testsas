"use client";

import { Button } from "@/components/ui/button";
import { type RespuestaEnviada, finalizarSesion } from "@/lib/actions/test";
import {
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Flag,
  LayoutGrid,
  X,
  XCircle,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface PreguntaRunner {
  preguntaId: string;
  enunciado: string;
  opciones: string[];
  dificultad: string;
  correctaIndex?: number;
  explicacion?: string | null;
  fuente?: string | null;
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
  feedbackInmediato = false,
}: {
  sesionId: string;
  preguntas: PreguntaRunner[];
  modo: string;
  tiempoLimiteSeg?: number | null;
  startedAt?: string;
  feedbackInmediato?: boolean;
}) {
  const [actual, setActual] = useState(0);
  const [respuestas, setRespuestas] = useState<Record<string, number | null>>({});
  const [marcadas, setMarcadas] = useState<Set<string>>(new Set());
  const [enviando, setEnviando] = useState(false);
  const [listo, setListo] = useState(false);
  const [indiceAbierto, setIndiceAbierto] = useState(false);
  const enviadoRef = useRef(false);
  const lsKey = `testsas:sesion:${sesionId}`;

  const pregunta = preguntas[actual];
  const respondidas = Object.values(respuestas).filter((v) => v !== null && v !== undefined).length;

  const irA = useCallback(
    (i: number) => setActual(Math.max(0, Math.min(preguntas.length - 1, i))),
    [preguntas.length],
  );

  const enviar = useCallback(async () => {
    if (enviadoRef.current) return;
    enviadoRef.current = true;
    setEnviando(true);
    try {
      localStorage.removeItem(lsKey);
    } catch {}
    const payload: RespuestaEnviada[] = preguntas.map((p) => ({
      preguntaId: p.preguntaId,
      opcion: respuestas[p.preguntaId] ?? null,
    }));
    await finalizarSesion(sesionId, payload);
  }, [preguntas, respuestas, sesionId, lsKey]);

  // Reanudar: carga respuestas guardadas y luego persiste los cambios
  useEffect(() => {
    try {
      const raw = localStorage.getItem(lsKey);
      if (raw) {
        const guardado = JSON.parse(raw);
        if (guardado && typeof guardado === "object") setRespuestas(guardado);
      }
    } catch {}
    setListo(true);
  }, [lsKey]);

  useEffect(() => {
    if (!listo) return;
    try {
      localStorage.setItem(lsKey, JSON.stringify(respuestas));
    } catch {}
  }, [respuestas, listo, lsKey]);

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

  // En modo estudio, una vez respondida se revela la solucion y se bloquea
  const elegida = respuestas[pregunta.preguntaId];
  const revelada = feedbackInmediato && elegida !== undefined && elegida !== null;

  const elegir = useCallback(
    (opcion: number) => {
      if (revelada) return;
      setRespuestas((prev) => ({ ...prev, [pregunta.preguntaId]: opcion }));
    },
    [revelada, pregunta.preguntaId],
  );

  const alternarMarca = useCallback(() => {
    setMarcadas((prev) => {
      const next = new Set(prev);
      next.has(pregunta.preguntaId)
        ? next.delete(pregunta.preguntaId)
        : next.add(pregunta.preguntaId);
      return next;
    });
  }, [pregunta.preguntaId]);

  // Atajos de teclado: 1-4 responder, flechas navegar, F marcar
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const el = e.target as HTMLElement | null;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA")) return;
      if (e.key >= "1" && e.key <= "4") {
        const idx = Number(e.key) - 1;
        if (idx < pregunta.opciones.length) elegir(idx);
      } else if (e.key === "ArrowRight") {
        irA(actual + 1);
      } else if (e.key === "ArrowLeft") {
        irA(actual - 1);
      } else if (e.key.toLowerCase() === "f") {
        alternarMarca();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [actual, irA, elegir, alternarMarca, pregunta.opciones.length]);

  // Gestos: deslizar horizontalmente cambia de pregunta (sin estorbar el scroll)
  const touch = useRef<{ x: number; y: number } | null>(null);
  function onTouchStart(e: React.TouchEvent) {
    const t = e.changedTouches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (!touch.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x;
    const dy = t.clientY - touch.current.y;
    touch.current = null;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx < 0) irA(actual + 1);
      else irA(actual - 1);
    }
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

  const restanteUrgente = restante !== null && restante <= 60;
  const esUltima = actual === preguntas.length - 1;
  const progreso = ((actual + 1) / preguntas.length) * 100;

  return (
    <div className="fixed inset-0 z-30 flex flex-col bg-background">
      {/* Barra superior: progreso + tiempo + salir */}
      <div className="border-b bg-background/95 backdrop-blur">
        <div className="mx-auto w-full max-w-3xl px-4 pt-[env(safe-area-inset-top)]">
          <div className="flex h-14 items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setIndiceAbierto((v) => !v)}
              className="flex items-center gap-2 rounded-md border px-2.5 py-1.5 text-sm hover:bg-accent"
              aria-label="Ver indice de preguntas"
            >
              <LayoutGrid className="h-4 w-4" />
              <span className="tabular-nums">
                {actual + 1}/{preguntas.length}
              </span>
            </button>

            <div className="flex items-center gap-2">
              {restante !== null && (
                <span
                  role="timer"
                  aria-live={restanteUrgente ? "assertive" : "off"}
                  aria-label={`Tiempo restante ${mmss(restante)}`}
                  className={`flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-sm font-medium tabular-nums ${
                    restanteUrgente
                      ? "border-destructive/40 bg-destructive/5 text-destructive"
                      : "bg-card"
                  }`}
                >
                  <Clock className="h-4 w-4" /> {mmss(restante)}
                </span>
              )}
              <Button onClick={enviar} disabled={enviando} size="sm">
                {enviando ? "..." : "Finalizar"}
              </Button>
            </div>
          </div>
          {/* Barra de progreso continua */}
          <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all duration-300"
              style={{ width: `${progreso}%` }}
            />
          </div>
          <p className="py-1.5 text-xs text-muted-foreground">
            {respondidas} respondidas
            {marcadas.size > 0 && ` · ${marcadas.size} marcadas`}
          </p>
        </div>
      </div>

      {/* Indice desplegable de preguntas */}
      {indiceAbierto && (
        <div className="border-b bg-card">
          <div className="mx-auto max-h-[40vh] w-full max-w-3xl overflow-y-auto px-4 py-3">
            <div className="grid grid-cols-6 gap-2 sm:grid-cols-10">
              {navegacion.map((n) => (
                <button
                  key={n.i}
                  type="button"
                  onClick={() => {
                    irA(n.i);
                    setIndiceAbierto(false);
                  }}
                  aria-label={`Ir a la pregunta ${n.i + 1}${n.respondida ? ", respondida" : ""}${n.marcada ? ", marcada" : ""}`}
                  aria-current={n.i === actual ? "true" : undefined}
                  className={`relative flex h-11 items-center justify-center rounded-md text-sm font-medium transition-colors ${
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
          </div>
        </div>
      )}

      {/* Area de la pregunta (scroll + gestos) */}
      <div
        className="flex-1 overflow-y-auto overscroll-contain"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="mx-auto w-full max-w-3xl px-4 py-6">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Dificultad: {pregunta.dificultad}
            </p>
            <button
              type="button"
              onClick={alternarMarca}
              aria-pressed={marcadas.has(pregunta.preguntaId)}
              className={`-mr-2 flex min-h-[44px] touch-manipulation items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium ${
                marcadas.has(pregunta.preguntaId)
                  ? "text-amber-600"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Flag className="h-3.5 w-3.5" />
              {marcadas.has(pregunta.preguntaId) ? "Marcada" : "Marcar"}
            </button>
          </div>

          <h2 className="text-lg font-medium leading-relaxed sm:text-xl">{pregunta.enunciado}</h2>

          <div className="mt-6 space-y-2.5">
            {pregunta.opciones.map((opcion, idx) => {
              const esElegida = elegida === idx;
              const esCorrecta = revelada && idx === pregunta.correctaIndex;
              const esFalloElegido = revelada && esElegida && idx !== pregunta.correctaIndex;
              const cls = esCorrecta
                ? "border-success/50 bg-success/10"
                : esFalloElegido
                  ? "border-destructive/50 bg-destructive/10"
                  : esElegida
                    ? "border-primary bg-primary/5"
                    : revelada
                      ? "border-border opacity-70"
                      : "active:scale-[0.99] hover:bg-accent";
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => elegir(idx)}
                  disabled={revelada}
                  aria-pressed={esElegida}
                  className={`flex min-h-[56px] w-full touch-manipulation items-center gap-3 rounded-xl border p-3.5 text-left text-sm transition-all ${cls}`}
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-semibold ${
                      esElegida && !revelada
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-input"
                    }`}
                  >
                    {LETRAS[idx]}
                  </span>
                  <span className="flex-1">{opcion}</span>
                  {esCorrecta && <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />}
                  {esFalloElegido && <XCircle className="h-5 w-5 shrink-0 text-destructive" />}
                </button>
              );
            })}
          </div>

          {/* Modo estudio: explicacion tras responder */}
          {revelada && pregunta.explicacion && (
            <div className="mt-4 rounded-md bg-muted/50 p-3 text-sm">
              <p className="text-muted-foreground">{pregunta.explicacion}</p>
              {pregunta.fuente && (
                <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-primary">
                  <BookOpen className="h-3.5 w-3.5" /> {pregunta.fuente}
                </p>
              )}
            </div>
          )}

          {!feedbackInmediato && elegida !== undefined && elegida !== null && (
            <button
              type="button"
              onClick={() => setRespuestas((p) => ({ ...p, [pregunta.preguntaId]: null }))}
              className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" /> Dejar en blanco
            </button>
          )}
        </div>
      </div>

      {/* Barra de acciones inferior (al alcance del pulgar) */}
      <div className="border-t bg-background/95 backdrop-blur">
        <div
          className="mx-auto flex w-full max-w-3xl items-center gap-3 px-4 py-3"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
        >
          <Button
            variant="outline"
            className="h-12 flex-1"
            onClick={() => irA(actual - 1)}
            disabled={actual === 0}
          >
            <ChevronLeft className="mr-1 h-5 w-5" /> Anterior
          </Button>
          {esUltima ? (
            <Button className="h-12 flex-1" onClick={enviar} disabled={enviando}>
              {enviando ? "Corrigiendo..." : "Finalizar"}
            </Button>
          ) : (
            <Button className="h-12 flex-1" onClick={() => irA(actual + 1)}>
              Siguiente <ChevronRight className="ml-1 h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
