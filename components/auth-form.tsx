"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useActionState } from "react";

interface Props {
  mode: "login" | "registro";
  action: (prev: { error?: string } | undefined, formData: FormData) => Promise<{ error?: string }>;
}

export function AuthForm({ mode, action }: Props) {
  const [state, formAction, pending] = useActionState(action, undefined);
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
            className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Tu nombre"
          />
        </div>
      )}
      <div>
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="tu@email.com"
        />
      </div>
      <div>
        <label htmlFor="password" className="text-sm font-medium">
          Contrasena
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          minLength={esRegistro ? 8 : undefined}
          className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder={esRegistro ? "Minimo 8 caracteres" : "Tu contrasena"}
        />
      </div>

      {state?.error && <p className="text-sm text-destructive">{state.error}</p>}

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
