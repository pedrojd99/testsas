"use client";

import { Pause, Play, Square } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Reproductor que locuta el texto con la voz del navegador (Web Speech API).
// Gratis y sin servicio externo; la calidad depende de las voces del sistema.
export function AudioPlayer({ texto }: { texto: string }) {
  const [soportado, setSoportado] = useState(true);
  const [estado, setEstado] = useState<"idle" | "playing" | "paused">("idle");
  const [velocidad, setVelocidad] = useState(1);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setSoportado(false);
    }
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  function elegirVoz(): SpeechSynthesisVoice | null {
    const voces = window.speechSynthesis.getVoices();
    return (
      voces.find((v) => v.lang === "es-ES") ?? voces.find((v) => v.lang.startsWith("es")) ?? null
    );
  }

  function reproducir() {
    if (!soportado) return;
    window.speechSynthesis.cancel();

    const u = new SpeechSynthesisUtterance(texto);
    u.lang = "es-ES";
    u.rate = velocidad;
    const voz = elegirVoz();
    if (voz) u.voice = voz;
    u.onend = () => setEstado("idle");
    u.onerror = () => setEstado("idle");
    utterRef.current = u;
    window.speechSynthesis.speak(u);
    setEstado("playing");
  }

  function alternar() {
    if (estado === "playing") {
      window.speechSynthesis.pause();
      setEstado("paused");
    } else if (estado === "paused") {
      window.speechSynthesis.resume();
      setEstado("playing");
    } else {
      reproducir();
    }
  }

  function parar() {
    window.speechSynthesis.cancel();
    setEstado("idle");
  }

  function cambiarVelocidad(v: number) {
    setVelocidad(v);
    if (estado !== "idle") {
      // Reinicia con la nueva velocidad
      const seguir = estado === "playing";
      window.speechSynthesis.cancel();
      if (seguir) {
        setTimeout(reproducir, 50);
      } else {
        setEstado("idle");
      }
    }
  }

  if (!soportado) {
    return (
      <div className="rounded-lg border bg-muted/40 p-4 text-sm text-muted-foreground">
        Tu navegador no soporta la lectura por voz. Prueba en Chrome o en la app movil.
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 rounded-lg border bg-card p-3 shadow-soft">
      <button
        type="button"
        onClick={alternar}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
        aria-label={estado === "playing" ? "Pausar" : "Reproducir"}
      >
        {estado === "playing" ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 pl-0.5" />}
      </button>
      <button
        type="button"
        onClick={parar}
        disabled={estado === "idle"}
        className="flex h-9 w-9 items-center justify-center rounded-full border hover:bg-accent disabled:opacity-40"
        aria-label="Detener"
      >
        <Square className="h-4 w-4" />
      </button>

      <div className="flex-1">
        <p className="text-sm font-medium">
          {estado === "playing"
            ? "Reproduciendo..."
            : estado === "paused"
              ? "En pausa"
              : "Escuchar el tema"}
        </p>
        <p className="text-xs text-muted-foreground">Voz del dispositivo (es-ES)</p>
      </div>

      <div className="flex items-center gap-1 text-xs">
        {[0.75, 1, 1.25, 1.5].map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => cambiarVelocidad(v)}
            className={`rounded px-2 py-1 ${velocidad === v ? "bg-primary text-primary-foreground" : "hover:bg-accent"}`}
          >
            {v}x
          </button>
        ))}
      </div>
    </div>
  );
}
