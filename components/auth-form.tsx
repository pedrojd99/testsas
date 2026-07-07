"use client";

import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useActionState, useState } from "react";

interface Props {
  mode: "login" | "registro";
  action: (prev: { error?: string } | undefined, formData: FormData) => Promise<{ error?: string }>;
}

const inputCls =
  "mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

export function AuthForm({ mode, action }: Props) {
  const [state, formAction, pending] = useActionState(action, undefined);
  const [verClave, setVerClave] = useState(false);
  const esRegistro = mode === "registro";

  return (
    <form action={formAction} className="space-y-4">
      {esRegistro && (
        <div>
          <label htmlFor="nombre" className="text-sm font-medium">
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            autoComplete="name"
            className={inputCls}
            placeholder="Tu nombre"
          />
        </div>
      )}
      <div>
        <label htmlFor="email" className="text-sm font-medium">
          Email <span className="text-destructive">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          autoCapitalize="none"
          autoFocus={!esRegistro}
          className={inputCls}
          placeholder="tu@email.com"
        />
      </div>
      <div>
        <label htmlFor="password" className="text-sm font-medium">
          Contrasena <span className="text-destructive">*</span>
        </label>
        <div className="relative mt-1">
          <input
            id="password"
            name="password"
            type={verClave ? "text" : "password"}
            required
            minLength={esRegistro ? 8 : undefined}
            autoComplete={esRegistro ? "new-password" : "current-password"}
            aria-describedby={esRegistro ? "password-ayuda" : undefined}
            className={`${inputCls} mt-0 pr-11`}
            placeholder={esRegistro ? "Minimo 8 caracteres" : "Tu contrasena"}
          />
          <button
            type="button"
            onClick={() => setVerClave((v) => !v)}
            aria-label={verClave ? "Ocultar contrasena" : "Mostrar contrasena"}
            aria-pressed={verClave}
            className="absolute inset-y-0 right-0 flex h-full min-h-[44px] w-11 items-center justify-center text-muted-foreground hover:text-foreground"
          >
            {verClave ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        {esRegistro && (
          <p id="password-ayuda" className="mt-1 text-xs text-muted-foreground">
            Minimo 8 caracteres.
          </p>
        )}
      </div>

      {state?.error && (
        <p role="alert" className="text-sm text-destructive">
          {state.error}
        </p>
      )}

      <Button type="submit" className="w-full" disabled={pending}>
        {pending ? "Procesando..." : esRegistro ? "Crear cuenta" : "Entrar"}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        {esRegistro ? (
          <>
            Ya tienes cuenta?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Entra
            </Link>
          </>
        ) : (
          <>
            No tienes cuenta?{" "}
            <Link href="/registro" className="text-primary hover:underline">
              Registrate gratis
            </Link>
          </>
        )}
      </p>
    </form>
  );
}
