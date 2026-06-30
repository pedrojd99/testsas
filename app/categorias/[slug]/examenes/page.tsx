import { iniciarExamenOficial } from "@/lib/actions/test";
import { getSession } from "@/lib/auth";
import { getExamenesOficiales } from "@/lib/queries";
import { ArrowLeft, Clock, FileText } from "lucide-react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

export const metadata = { title: "Examenes oficiales — TestSAS" };

export default async function ExamenesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getExamenesOficiales(slug);
  if (!data) notFound();

  const session = await getSession();

  async function iniciar(formData: FormData) {
    "use server";
    if (!(await getSession())) redirect("/login");
    await iniciarExamenOficial(formData);
  }

  return (
    <div className="container max-w-3xl py-12">
      <Link
        href={`/categorias/${slug}`}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> {data.categoria.nombre}
      </Link>

      <span className="eyebrow mt-6 block">Examenes oficiales</span>
      <h1 className="mt-2 font-display text-3xl font-semibold">
        Examenes de convocatorias anteriores
      </h1>
      <p className="mt-2 text-muted-foreground">
        Practica con el examen completo de una convocatoria real, en su orden y cronometrado con la
        correccion oficial (penalizacion por error).
      </p>

      <div className="mt-8 space-y-3">
        {data.examenes.length === 0 ? (
          <p className="rounded-lg border border-dashed bg-muted/30 p-6 text-center text-sm text-muted-foreground">
            Aun no hay examenes oficiales cargados para esta categoria.
          </p>
        ) : (
          data.examenes.map((e) => (
            <div
              key={e.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-lg border bg-card p-5 shadow-soft"
            >
              <div className="flex items-start gap-3">
                <span className="numeral text-3xl">{e.anio}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{e.titulo}</h3>
                  {e.descripcion && (
                    <p className="text-sm text-muted-foreground">{e.descripcion}</p>
                  )}
                  <p className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <FileText className="h-3.5 w-3.5" /> {e.totalPreguntas} preguntas
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {e.tiempoMin} min
                    </span>
                  </p>
                </div>
              </div>
              {session ? (
                <form action={iniciar}>
                  <input type="hidden" name="examenId" value={e.id} />
                  <button
                    type="submit"
                    disabled={e.totalPreguntas === 0}
                    className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
                  >
                    Empezar
                  </button>
                </form>
              ) : (
                <Link
                  href="/registro"
                  className="rounded-md border px-4 py-2 text-sm hover:bg-accent"
                >
                  Registrate para hacerlo
                </Link>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
