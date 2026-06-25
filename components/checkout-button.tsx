"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export function CheckoutButton({ autenticado }: { autenticado: boolean }) {
  const [cargando, setCargando] = useState(false);

  async function ir() {
    if (!autenticado) {
      window.location.href = "/registro";
      return;
    }
    setCargando(true);
    const res = await fetch("/api/stripe/checkout", { method: "POST" });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
    else setCargando(false);
  }

  return (
    <Button size="lg" className="w-full" onClick={ir} disabled={cargando}>
      {cargando ? "Redirigiendo..." : autenticado ? "Hazte Premium" : "Empezar gratis"}
    </Button>
  );
}
