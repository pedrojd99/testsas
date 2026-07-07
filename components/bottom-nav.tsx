"use client";

import { useCommandPalette } from "@/components/command-palette";
import { Compass, FileText, LayoutDashboard, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Barra de navegacion inferior estilo app, solo en movil/tablet (< sm).
// Respeta el area segura de iOS con env(safe-area-inset-bottom).
export function BottomNav({ autenticado }: { autenticado: boolean }) {
  const pathname = usePathname();
  const { abrir } = useCommandPalette();

  // Se oculta durante un test para no estorbar al responder.
  if (pathname.startsWith("/test/") && !pathname.endsWith("/resultado")) return null;
  if (pathname.startsWith("/onboarding")) return null;

  const activo = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 backdrop-blur sm:hidden">
      <div className="grid grid-cols-4" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        <Item
          href={autenticado ? "/dashboard" : "/"}
          activo={activo(autenticado ? "/dashboard" : "/")}
          icon={<LayoutDashboard className="h-5 w-5" />}
          label={autenticado ? "Panel" : "Inicio"}
        />
        <Item
          href="/categorias"
          activo={activo("/categorias")}
          icon={<Compass className="h-5 w-5" />}
          label="Oposiciones"
        />
        <button
          type="button"
          onClick={abrir}
          className="flex min-h-[56px] flex-col items-center justify-center gap-0.5 text-muted-foreground"
        >
          <Search className="h-5 w-5" />
          <span className="text-[0.65rem] font-medium">Buscar</span>
        </button>
        <Item
          href="/convocatoria"
          activo={activo("/convocatoria")}
          icon={<FileText className="h-5 w-5" />}
          label="Convocatoria"
        />
      </div>
    </nav>
  );
}

function Item({
  href,
  activo,
  icon,
  label,
}: {
  href: string;
  activo: boolean;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      aria-current={activo ? "page" : undefined}
      className={`relative flex min-h-[56px] touch-manipulation flex-col items-center justify-center gap-0.5 ${
        activo ? "font-semibold text-primary" : "text-muted-foreground"
      }`}
    >
      {activo && (
        <span className="absolute inset-x-5 top-0 h-0.5 rounded-full bg-primary" aria-hidden />
      )}
      {icon}
      <span className="text-[0.65rem] font-medium">{label}</span>
    </Link>
  );
}
