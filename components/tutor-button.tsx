"use client";

import { Sparkles } from "lucide-react";
import { useState } from "react";

export function TutorButton({
  preguntaId,
  opcionElegida,
}: {
  preguntaId: string;
  opcionElegida: number | null;
}) {
  const [estado, setEstado] = useState<"idle" | "loading" | "done" | "premium" | "error">("idle");
  const [texto, setTexto] = useState("");

  async function pedir() {
    setEstado("loading");
    const res = await fetch("/api/tutor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ preguntaId, opcionElegida }),
    });
    if (res.status === 402) {
      setEstado("premium");
      return;
    }
    if (!res.ok) {
      setEstado("error");
      return;
    }
    const data = await res.json();
    setTexto(data.explicacion);
    setEstado("done");
  }

  if (estado === "done") {
    return (
      <div className="mt-3 rounded-md border border-primary/30 bg-primary/5 p-3 text-sm">
        <p className="mb-1 flex items-center gap-1.5 text-xs font-medium text-primary">
          <Sparkles className="h-3.5 w-3.5" /> Tutor IA
        </p>
        <p className="text-foreground/90">{texto}</p>
      </div>
    );
  }

  if (estado === "premium") {
    return (
      <a
        href="/premium"
        className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
      >
        <Sparkles className="h-3.5 w-3.5" /> Desbloquea el tutor IA con Premium
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={pedir}
      disabled={estado === "loading"}
      className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline disabled:opacity-60"
    >
      <Sparkles className="h-3.5 w-3.5" />
      {estado === "loading" ? "Generando explicacion..." : "Explicamelo con IA"}
      {estado === "error" && <span className="text-destructive"> · error, reintenta</span>}
    </button>
  );
}
