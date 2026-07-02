import { BottomNav } from "@/components/bottom-nav";
import { CommandPaletteProvider } from "@/components/command-palette";
import { PwaRegister } from "@/components/pwa-register";
import { SiteHeader } from "@/components/site-header";
import { getSession } from "@/lib/auth";
import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader" });

export const metadata: Metadata = {
  title: "TestSAS — Simulacros y test para las oposiciones del SAS",
  description:
    "Banco de preguntas del temario oficial del Servicio Andaluz de Salud: celador, TCAE, enfermeria y auxiliar administrativo. Simulacros cronometrados, estadisticas y tutor IA.",
  applicationName: "TestSAS",
  appleWebApp: { capable: true, statusBarStyle: "default", title: "TestSAS" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0b6b5e",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  return (
    <html lang="es" className={`${inter.variable} ${newsreader.variable}`} suppressHydrationWarning>
      <head>
        <script
          // Aplica el tema antes de pintar para evitar parpadeo
          // biome-ignore lint/security/noDangerouslySetInnerHtml: script de tema pre-hidratacion
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dark')}catch(e){}",
          }}
        />
      </head>
      <body>
        <CommandPaletteProvider>
          <SiteHeader session={session ? { email: session.email, rol: session.rol } : null} />
          <PwaRegister />
          <main className="min-h-[calc(100vh-4rem)] pb-16 sm:pb-0">{children}</main>
          <footer className="border-t py-8 pb-24 sm:pb-8">
            <div className="container flex flex-col items-center gap-2 text-center text-sm text-muted-foreground">
              <p>TestSAS — Preparacion para las oposiciones del Servicio Andaluz de Salud.</p>
              <p className="text-xs">
                Proyecto independiente, sin vinculacion oficial con el SAS ni la Junta de Andalucia.
              </p>
            </div>
          </footer>
          <BottomNav autenticado={!!session} />
        </CommandPaletteProvider>
      </body>
    </html>
  );
}
