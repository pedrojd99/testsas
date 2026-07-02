"use client";

import type { BuscadorItem } from "@/lib/queries";
import { BookOpen, Compass, FileText, LayoutDashboard, Search, Volume2 } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface Ctx {
  abrir: () => void;
}
const PaletteContext = createContext<Ctx>({ abrir: () => {} });
export const useCommandPalette = () => useContext(PaletteContext);

// Normaliza para buscar sin distinguir acentos ni mayusculas.
function norm(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

interface Accion {
  tipo: "accion";
  id: string;
  nombre: string;
  sub: string;
  href: string;
  icon: typeof Compass;
}

const ACCIONES: Accion[] = [
  {
    tipo: "accion",
    id: "panel",
    nombre: "Mi panel",
    sub: "Estadísticas, racha y plan",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    tipo: "accion",
    id: "oposiciones",
    nombre: "Oposiciones",
    sub: "Elegir categoría y hacer test",
    href: "/categorias",
    icon: Compass,
  },
  {
    tipo: "accion",
    id: "convocatoria",
    nombre: "Convocatoria",
    sub: "Plazos, baremo y requisitos",
    href: "/convocatoria",
    icon: FileText,
  },
];

export function CommandPaletteProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [abierto, setAbierto] = useState(false);
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const [items, setItems] = useState<BuscadorItem[] | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const abrir = useCallback(() => setAbierto(true), []);
  const cerrar = useCallback(() => {
    setAbierto(false);
    setQ("");
    setSel(0);
  }, []);

  // Carga perezosa del indice la primera vez que se abre.
  useEffect(() => {
    if (!abierto || items !== null) return;
    fetch("/api/buscador")
      .then((r) => r.json())
      .then((d) => setItems(d.items ?? []))
      .catch(() => setItems([]));
  }, [abierto, items]);

  // Atajo global Ctrl/Cmd + K.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setAbierto((v) => !v);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (abierto) setTimeout(() => inputRef.current?.focus(), 40);
  }, [abierto]);

  const resultados = useMemo(() => {
    const nq = norm(q.trim());
    const acciones = nq
      ? ACCIONES.filter((a) => norm(a.nombre).includes(nq) || norm(a.sub).includes(nq))
      : ACCIONES;
    const temas = (items ?? [])
      .filter((t) => (nq ? norm(t.nombre).includes(nq) || norm(t.categoria).includes(nq) : true))
      .slice(0, nq ? 20 : 8);
    return { acciones, temas };
  }, [q, items]);

  const planos = useMemo(
    () => [
      ...resultados.acciones.map((a) => ({ kind: "accion" as const, href: a.href, data: a })),
      ...resultados.temas.map((t) => ({
        kind: "tema" as const,
        href: `/temario/${t.temaId}`,
        data: t,
      })),
    ],
    [resultados],
  );

  // Reinicia la seleccion al cambiar la busqueda.
  // biome-ignore lint/correctness/useExhaustiveDependencies: solo depende de q
  useEffect(() => {
    setSel(0);
  }, [q]);

  const navegar = useCallback(
    (href: string) => {
      cerrar();
      router.push(href);
    },
    [cerrar, router],
  );

  function onInputKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSel((s) => Math.min(planos.length - 1, s + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSel((s) => Math.max(0, s - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = planos[sel];
      if (item) navegar(item.href);
    } else if (e.key === "Escape") {
      cerrar();
    }
  }

  return (
    <PaletteContext.Provider value={{ abrir }}>
      {children}
      {abierto && (
        <div className="fixed inset-0 z-[60] flex flex-col sm:items-center sm:justify-start sm:pt-24">
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: overlay de cierre */}
          <div
            className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
            onClick={cerrar}
            aria-hidden="true"
          />
          <div className="relative z-10 flex h-full w-full flex-col overflow-hidden border-b bg-popover shadow-floating sm:h-auto sm:max-h-[70vh] sm:w-[92vw] sm:max-w-xl sm:rounded-xl sm:border">
            <div className="flex items-center gap-3 border-b px-4">
              <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={onInputKey}
                placeholder="Buscar temas, oposiciones, convocatoria..."
                className="h-14 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
                aria-label="Buscar"
              />
              <button
                type="button"
                onClick={cerrar}
                className="rounded-md px-2 py-1 text-xs text-muted-foreground hover:bg-accent"
              >
                Esc
              </button>
            </div>

            <div className="flex-1 overflow-y-auto overscroll-contain py-2">
              {planos.length === 0 && (
                <p className="px-4 py-8 text-center text-sm text-muted-foreground">
                  {items === null ? "Cargando..." : "Sin resultados"}
                </p>
              )}

              {resultados.acciones.length > 0 && (
                <Grupo titulo="Ir a">
                  {resultados.acciones.map((a) => {
                    const idx = planos.findIndex((p) => p.href === a.href);
                    return (
                      <Fila
                        key={a.id}
                        activo={sel === idx}
                        onClick={() => navegar(a.href)}
                        onHover={() => setSel(idx)}
                        icon={<a.icon className="h-4 w-4 text-primary" />}
                        titulo={a.nombre}
                        sub={a.sub}
                      />
                    );
                  })}
                </Grupo>
              )}

              {resultados.temas.length > 0 && (
                <Grupo titulo="Temario">
                  {resultados.temas.map((t) => {
                    const href = `/temario/${t.temaId}`;
                    const idx = planos.findIndex((p) => p.href === href);
                    return (
                      <Fila
                        key={t.temaId}
                        activo={sel === idx}
                        onClick={() => navegar(href)}
                        onHover={() => setSel(idx)}
                        icon={
                          t.tieneApuntes ? (
                            <Volume2 className="h-4 w-4 text-primary" />
                          ) : (
                            <BookOpen className="h-4 w-4 text-muted-foreground" />
                          )
                        }
                        titulo={t.nombre}
                        sub={`${t.categoria}${t.tieneApuntes ? " · apuntes + audio" : ""}`}
                      />
                    );
                  })}
                </Grupo>
              )}
            </div>
          </div>
        </div>
      )}
    </PaletteContext.Provider>
  );
}

function Grupo({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <div className="mb-1">
      <p className="px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-wide text-muted-foreground">
        {titulo}
      </p>
      {children}
    </div>
  );
}

function Fila({
  activo,
  onClick,
  onHover,
  icon,
  titulo,
  sub,
}: {
  activo: boolean;
  onClick: () => void;
  onHover: () => void;
  icon: React.ReactNode;
  titulo: string;
  sub: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseMove={onHover}
      className={`flex min-h-[52px] w-full items-center gap-3 px-4 py-2 text-left transition-colors ${
        activo ? "bg-accent" : ""
      }`}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border bg-card">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-medium">{titulo}</span>
        <span className="block truncate text-xs text-muted-foreground">{sub}</span>
      </span>
    </button>
  );
}
