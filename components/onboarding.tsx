"use client";

import { iniciarSesion } from "@/lib/actions/test";
import { completarOnboarding } from "@/lib/actions/user";
import { ArrowLeft, ArrowRight, Check, GraduationCap, PlayCircle, Target } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

interface CategoriaOpt {
  slug: string;
  nombre: string;
  descripcion: string | null;
}

const OBJETIVOS = [10, 20, 30, 50];

export function Onboarding({ categorias }: { categorias: CategoriaOpt[] }) {
  const router = useRouter();
  const [paso, setPaso] = useState(1);
  const [slug, setSlug] = useState<string>("");
  const [fecha, setFecha] = useState<string>("");
  const [objetivo, setObjetivo] = useState<number>(20);
  const [cargando, startTransition] = useTransition();

  const total = 3;
  const puedeAvanzar = paso === 1 ? slug !== "" : true;

  function persistir() {
    return completarOnboarding({
      categoriaSlug: slug || undefined,
      fechaExamen: fecha || undefined,
      objetivoDiario: objetivo,
    });
  }

  function irAlPanel() {
    startTransition(async () => {
      await persistir();
      router.push("/dashboard");
    });
  }

  function empezarTest() {
    startTransition(async () => {
      await persistir();
      const fd = new FormData();
      fd.set("categoriaSlug", slug);
      fd.set("modo", "rapido");
      await iniciarSesion(fd);
    });
  }

  return (
    <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-lg flex-col px-5 py-8">
      {/* Progreso */}
      <div className="flex items-center gap-2">
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i < paso ? "bg-primary" : "bg-muted"
            }`}
          />
        ))}
      </div>
      <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        Paso {paso} de {total}
      </p>

      <div className="mt-6 flex-1">
        {paso === 1 && (
          <div>
            <div className="emblema mb-4">
              <GraduationCap className="h-4 w-4" />
            </div>
            <h1 className="font-display text-2xl font-semibold">¿Qué oposición preparas?</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Personalizaremos tus test, simulacros y estadísticas para tu categoría.
            </p>
            <div className="mt-6 grid gap-3">
              {categorias.map((c) => {
                const sel = c.slug === slug;
                return (
                  <button
                    key={c.slug}
                    type="button"
                    onClick={() => setSlug(c.slug)}
                    className={`flex min-h-[64px] items-center gap-3 rounded-xl border p-4 text-left transition-colors ${
                      sel ? "border-primary bg-primary/5 shadow-soft" : "hover:bg-accent"
                    }`}
                  >
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                        sel ? "border-primary bg-primary text-primary-foreground" : "border-input"
                      }`}
                    >
                      {sel && <Check className="h-4 w-4" />}
                    </span>
                    <span className="flex-1">
                      <span className="block font-medium">{c.nombre}</span>
                      {c.descripcion && (
                        <span className="mt-0.5 block text-xs text-muted-foreground">
                          {c.descripcion}
                        </span>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {paso === 2 && (
          <div>
            <div className="emblema mb-4">
              <Target className="h-4 w-4" />
            </div>
            <h1 className="font-display text-2xl font-semibold">Tu plan de estudio</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Fija una meta y te ayudaremos a mantener el ritmo. Puedes cambiarlo cuando quieras.
            </p>

            <label htmlFor="onb-fecha" className="mt-6 block text-sm font-medium">
              ¿Cuándo es tu examen?
            </label>
            <input
              id="onb-fecha"
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="mt-2 h-12 w-full rounded-lg border bg-background px-3 text-base"
            />
            <p className="mt-1 text-xs text-muted-foreground">
              Aún no hay fecha oficial de la convocatoria 2027. Pon una estimada y la ajustas luego.
            </p>

            <p className="mt-6 text-sm font-medium">Meta diaria de preguntas</p>
            <div className="mt-2 grid grid-cols-4 gap-2">
              {OBJETIVOS.map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setObjetivo(n)}
                  className={`h-14 rounded-lg border text-center font-display text-lg font-semibold transition-colors ${
                    objetivo === n ? "border-primary bg-primary/5 text-primary" : "hover:bg-accent"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        )}

        {paso === 3 && (
          <div>
            <div className="emblema mb-4">
              <PlayCircle className="h-4 w-4" />
            </div>
            <h1 className="font-display text-2xl font-semibold">¡Todo listo!</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Empieza con un test rápido de 10 preguntas para probar, o entra directo a tu panel.
            </p>
            <div className="mt-6 space-y-3">
              <button
                type="button"
                onClick={empezarTest}
                disabled={cargando}
                className="flex min-h-[64px] w-full items-center gap-3 rounded-xl bg-primary p-4 text-left text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
              >
                <PlayCircle className="h-6 w-6 shrink-0" />
                <span className="flex-1">
                  <span className="block font-medium">
                    {cargando ? "Preparando..." : "Empezar test rápido"}
                  </span>
                  <span className="mt-0.5 block text-xs opacity-85">
                    10 preguntas de tu oposición
                  </span>
                </span>
                <ArrowRight className="h-5 w-5 shrink-0" />
              </button>
              <button
                type="button"
                onClick={irAlPanel}
                disabled={cargando}
                className="flex min-h-[56px] w-full items-center justify-center rounded-xl border p-4 font-medium transition-colors hover:bg-accent disabled:opacity-60"
              >
                Ir a mi panel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Navegacion inferior (pasos 1-2) */}
      {paso < 3 && (
        <div className="mt-8 flex items-center gap-3">
          {paso > 1 ? (
            <button
              type="button"
              onClick={() => setPaso((p) => p - 1)}
              className="flex h-12 items-center gap-1.5 rounded-lg border px-4 text-sm font-medium hover:bg-accent"
            >
              <ArrowLeft className="h-4 w-4" /> Atrás
            </button>
          ) : (
            <button
              type="button"
              onClick={irAlPanel}
              disabled={cargando}
              className="flex h-12 items-center px-2 text-sm text-muted-foreground hover:text-foreground disabled:opacity-60"
            >
              Omitir
            </button>
          )}
          <button
            type="button"
            onClick={() => setPaso((p) => p + 1)}
            disabled={!puedeAvanzar}
            className="flex h-12 flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-4 font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
          >
            Continuar <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
