"use client";

import { CommandTrigger } from "@/components/command-trigger";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Info {
  email: string;
  rol: "learner" | "admin";
}

// Cabecera del sitio. Se oculta durante un test en curso para dar una
// experiencia inmersiva a pantalla completa (no en la pantalla de resultado).
export function SiteHeader({ session }: { session: Info | null }) {
  const pathname = usePathname();
  const enTest = pathname.startsWith("/test/") && !pathname.endsWith("/resultado");
  if (enTest || pathname.startsWith("/onboarding")) return null;

  return (
    <>
      <div className="h-1 w-full bg-primary" />
      <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="emblema font-display text-lg font-semibold leading-none">+</span>
            <span className="flex items-center gap-2">
              <span className="font-display text-xl font-semibold tracking-tight">TestSAS</span>
              <span className="chip">SAS 2027</span>
            </span>
          </Link>
          <nav className="flex items-center gap-3 text-sm sm:gap-4">
            <Link
              href="/categorias"
              className="hidden text-muted-foreground hover:text-foreground sm:inline"
            >
              Oposiciones
            </Link>
            <Link
              href="/convocatoria"
              className="hidden text-muted-foreground hover:text-foreground sm:inline"
            >
              Convocatoria
            </Link>
            <CommandTrigger />
            <ThemeToggle />
            {session ? (
              <>
                {session.rol === "admin" && (
                  <Link
                    href="/admin"
                    className="hidden text-muted-foreground hover:text-foreground sm:inline"
                  >
                    Admin
                  </Link>
                )}
                <Link
                  href="/dashboard"
                  className="hidden text-muted-foreground hover:text-foreground sm:inline"
                >
                  Mi panel
                </Link>
                <Link
                  href="/dashboard"
                  className="max-w-[8rem] truncate rounded-md bg-primary px-3 py-1.5 text-primary-foreground"
                >
                  {session.email.split("@")[0]}
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="hidden text-muted-foreground hover:text-foreground sm:inline"
                >
                  Entrar
                </Link>
                <Link
                  href="/registro"
                  className="rounded-md bg-primary px-3 py-1.5 text-primary-foreground"
                >
                  Empezar
                </Link>
              </>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}
