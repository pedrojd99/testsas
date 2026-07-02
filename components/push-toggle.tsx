"use client";

import { Bell, BellOff, BellRing } from "lucide-react";
import { useEffect, useState } from "react";

// Convierte la clave VAPID (base64url) al formato que espera pushManager.
function urlBase64ToUint8Array(base64: string): BufferSource {
  const padding = "=".repeat((4 - (base64.length % 4)) % 4);
  const b64 = (base64 + padding).replace(/-/g, "+").replace(/_/g, "/");
  const raw = atob(b64);
  const buffer = new ArrayBuffer(raw.length);
  const out = new Uint8Array(buffer);
  for (let i = 0; i < raw.length; i++) out[i] = raw.charCodeAt(i);
  return out;
}

type Estado = "cargando" | "no-soportado" | "denegado" | "activo" | "inactivo";

export function PushToggle() {
  const [estado, setEstado] = useState<Estado>("cargando");
  const [ocupado, setOcupado] = useState(false);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !("serviceWorker" in navigator) ||
      !("PushManager" in window) ||
      !("Notification" in window)
    ) {
      setEstado("no-soportado");
      return;
    }
    if (Notification.permission === "denied") {
      setEstado("denegado");
      return;
    }
    navigator.serviceWorker.ready
      .then((reg) => reg.pushManager.getSubscription())
      .then((sub) => setEstado(sub ? "activo" : "inactivo"))
      .catch(() => setEstado("inactivo"));
  }, []);

  async function activar() {
    setOcupado(true);
    try {
      const permiso = await Notification.requestPermission();
      if (permiso !== "granted") {
        setEstado(permiso === "denied" ? "denegado" : "inactivo");
        return;
      }
      const { key } = await fetch("/api/push/vapid").then((r) => r.json());
      if (!key) {
        setEstado("no-soportado");
        return;
      }
      const reg = await navigator.serviceWorker.ready;
      const sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(key),
      });
      const res = await fetch("/api/push/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sub),
      });
      setEstado(res.ok ? "activo" : "inactivo");
    } catch {
      setEstado("inactivo");
    } finally {
      setOcupado(false);
    }
  }

  async function desactivar() {
    setOcupado(true);
    try {
      const reg = await navigator.serviceWorker.ready;
      const sub = await reg.pushManager.getSubscription();
      if (sub) {
        await fetch("/api/push/unsubscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ endpoint: sub.endpoint }),
        });
        await sub.unsubscribe();
      }
      setEstado("inactivo");
    } catch {
      // aunque falle el servidor, dejamos el estado local coherente
      setEstado("inactivo");
    } finally {
      setOcupado(false);
    }
  }

  if (estado === "cargando") return null;

  if (estado === "no-soportado") {
    return (
      <p className="flex items-center gap-2 text-sm text-muted-foreground">
        <BellOff className="h-4 w-4" />
        Este dispositivo no admite notificaciones push.
      </p>
    );
  }

  if (estado === "denegado") {
    return (
      <p className="flex items-center gap-2 text-sm text-muted-foreground">
        <BellOff className="h-4 w-4" />
        Notificaciones bloqueadas. Actívalas en los ajustes del navegador.
      </p>
    );
  }

  const activo = estado === "activo";
  return (
    <button
      type="button"
      onClick={activo ? desactivar : activar}
      disabled={ocupado}
      className={`flex min-h-[44px] items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium transition-colors disabled:opacity-60 ${
        activo ? "border-primary/40 bg-primary/5 text-primary" : "hover:bg-accent"
      }`}
    >
      {activo ? <BellRing className="h-4 w-4" /> : <Bell className="h-4 w-4" />}
      {ocupado
        ? "Un momento..."
        : activo
          ? "Avisos de racha y ranking activados"
          : "Activar avisos de racha y ranking"}
    </button>
  );
}
