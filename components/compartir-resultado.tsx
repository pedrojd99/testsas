"use client";

import { Check, Download, Share2 } from "lucide-react";
import { useState } from "react";

export function CompartirResultado({
  nota,
  categoria,
  aciertos,
  total,
}: {
  nota: number;
  categoria: string;
  aciertos: number;
  total: number;
}) {
  const [copiado, setCopiado] = useState(false);

  const texto = `He sacado un ${nota.toFixed(1)} en el simulacro de ${categoria} en TestSAS.`;
  const url = typeof window !== "undefined" ? window.location.origin : "";
  const imagen = `/api/og/nota?nota=${nota.toFixed(1)}&cat=${encodeURIComponent(
    categoria,
  )}&aciertos=${aciertos}&total=${total}`;

  async function compartir() {
    if (navigator.share) {
      try {
        await navigator.share({ title: "TestSAS", text: texto, url });
        return;
      } catch {}
    }
    try {
      await navigator.clipboard.writeText(`${texto} ${url}`);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {}
  }

  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={compartir}
        className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-sm hover:bg-accent"
      >
        {copiado ? <Check className="h-4 w-4 text-success" /> : <Share2 className="h-4 w-4" />}
        {copiado ? "Copiado" : "Compartir"}
      </button>
      <a
        href={imagen}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-sm hover:bg-accent"
      >
        <Download className="h-4 w-4" /> Imagen
      </a>
    </div>
  );
}
