"use client";

import { RefreshCw } from "lucide-react";
import { useState } from "react";

export function ComprobarBoja() {
  const [estado, setEstado] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function comprobar() {
    setEstado("loading");
    try {
      const res = await fetch("/api/cron/boja");
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "error");
      setMsg(
        `Revisadas ${data.revisadas} entradas · ${data.nuevas} nuevas convocatorias` +
          (data.nuevas > 0 ? ` (avisos enviados)` : ""),
      );
      setEstado("done");
    } catch (e) {
      setMsg(String(e));
      setEstado("error");
    }
  }

  return (
    <div className="mt-3">
      <button
        type="button"
        onClick={comprobar}
        disabled={estado === "loading"}
        className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-sm hover:bg-accent disabled:opacity-60"
      >
        <RefreshCw className={`h-4 w-4 ${estado === "loading" ? "animate-spin" : ""}`} />
        {estado === "loading" ? "Comprobando el BOJA..." : "Comprobar el BOJA ahora"}
      </button>
      {estado === "done" && <p className="mt-2 text-sm text-muted-foreground">{msg}</p>}
      {estado === "error" && <p className="mt-2 text-sm text-destructive">{msg}</p>}
    </div>
  );
}
