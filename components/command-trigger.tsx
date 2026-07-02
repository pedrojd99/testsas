"use client";

import { useCommandPalette } from "@/components/command-palette";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

// Disparador del buscador para la cabecera (desktop): pastilla con pista de atajo.
export function CommandTrigger() {
  const { abrir } = useCommandPalette();
  const [mac, setMac] = useState(false);
  useEffect(() => {
    setMac(/Mac|iPhone|iPad/.test(navigator.platform));
  }, []);

  return (
    <button
      type="button"
      onClick={abrir}
      aria-label="Buscar"
      className="flex items-center gap-2 rounded-md border px-2.5 py-1.5 text-muted-foreground hover:bg-accent hover:text-foreground"
    >
      <Search className="h-4 w-4" />
      <span className="hidden text-sm md:inline">Buscar</span>
      <kbd className="hidden rounded border bg-muted px-1.5 text-[0.7rem] font-medium md:inline">
        {mac ? "⌘" : "Ctrl"} K
      </kbd>
    </button>
  );
}
