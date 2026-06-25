import { Card, CardContent } from "@/components/ui/card";
import { getCategorias } from "@/lib/queries";
import { ArrowRight, BarChart3, BrainCircuit, Clock, FileCheck2 } from "lucide-react";
import Link from "next/link";

export default async function HomePage() {
  const categorias = await getCategorias();

  return (
    <>
      <section className="hero-radial">
        <div className="container py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="chip mb-6">Megaconvocatoria SAS 2027</span>
            <h1 className="text-balance font-display text-4xl font-semibold leading-tight md:text-6xl">
              Prepara las oposiciones del SAS a base de test
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground">
              Miles de preguntas tipo test, simulacros cronometrados con el formato real del
              Servicio Andaluz de Salud, estadisticas de tu progreso y un tutor con IA que te
              explica cada fallo.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/registro"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground shadow-soft hover:bg-primary/90"
              >
                Empezar gratis <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/categorias"
                className="inline-flex items-center gap-2 rounded-md border px-6 py-3 font-medium hover:bg-accent"
              >
                Ver oposiciones
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: FileCheck2,
              t: "Simulacros reales",
              d: "Formato y correccion oficial del SAS, con penalizacion por error.",
            },
            { icon: Clock, t: "Cronometrado", d: "Practica bajo presion como en el examen real." },
            {
              icon: BarChart3,
              t: "Estadisticas",
              d: "Detecta tus temas debiles y enfoca el estudio.",
            },
            {
              icon: BrainCircuit,
              t: "Tutor IA",
              d: "Explicaciones de cada pregunta citando el temario.",
            },
          ].map((f) => (
            <Card key={f.t} className="card-elevated">
              <CardContent className="pt-6">
                <f.icon className="mb-3 h-6 w-6 text-primary" />
                <h3 className="font-medium">{f.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="eyebrow">Catalogo</span>
            <h2 className="mt-2 font-display text-3xl font-semibold">Elige tu oposicion</h2>
          </div>
          <Link href="/categorias" className="text-sm text-primary hover:underline">
            Ver todas
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {categorias.map((cat, i) => (
            <Link key={cat.id} href={`/categorias/${cat.slug}`}>
              <Card className="group h-full transition-shadow hover:shadow-elevated">
                <CardContent className="flex items-start gap-4 pt-6">
                  <span className="numeral">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold group-hover:text-primary">
                      {cat.nombre}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{cat.descripcion}</p>
                    <p className="mt-3 text-xs font-medium text-primary">
                      {cat.totalPreguntas} preguntas disponibles
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </CardContent>
              </Card>
            </Link>
          ))}
          {categorias.length === 0 && (
            <p className="text-muted-foreground">
              No hay categorias todavia. Ejecuta{" "}
              <code className="rounded bg-muted px-1.5 py-0.5">pnpm db:seed</code>.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
