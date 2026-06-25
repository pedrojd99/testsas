import { getSession } from "@/lib/auth";
import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader" });

export const metadata: Metadata = {
  title: "TestSAS — Simulacros y test para las oposiciones del SAS",
  description:
    "Miles de preguntas tipo test del Servicio Andaluz de Salud: celador, TCAE, enfermeria y auxiliar administrativo. Simulacros cronometrados, estadisticas y tutor IA.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  return (
    <html lang="es" className={`${inter.variable} ${newsreader.variable}`}>
      <body>
        <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-display text-xl font-semibold tracking-tight">TestSAS</span>
              <span className="chip">2027</span>
            </Link>
            <nav className="flex items-center gap-4 text-sm">
              <Link href="/categorias" className="text-muted-foreground hover:text-foreground">
                Oposiciones
              </Link>
              {session ? (
                <>
                  <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">
                    Mi panel
                  </Link>
                  <Link
                    href="/dashboard"
                    className="rounded-md bg-primary px-3 py-1.5 text-primary-foreground"
                  >
                    {session.email.split("@")[0]}
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-muted-foreground hover:text-foreground">
                    Entrar
                  </Link>
                  <Link
                    href="/registro"
                    className="rounded-md bg-primary px-3 py-1.5 text-primary-foreground"
                  >
                    Empezar gratis
                  </Link>
                </>
              )}
            </nav>
          </div>
        </header>
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
        <footer className="border-t py-8">
          <div className="container flex flex-col items-center gap-2 text-center text-sm text-muted-foreground">
            <p>TestSAS — Preparacion para las oposiciones del Servicio Andaluz de Salud.</p>
            <p className="text-xs">
              Proyecto independiente, sin vinculacion oficial con el SAS ni la Junta de Andalucia.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
