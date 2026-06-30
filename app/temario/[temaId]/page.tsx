import { AudioPlayer } from "@/components/audio-player";
import { getApunteTema } from "@/lib/queries";
import { ArrowLeft, Lightbulb } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata = { title: "Tema — TestSAS" };

export default async function TemaPage({ params }: { params: Promise<{ temaId: string }> }) {
  const { temaId } = await params;
  const data = await getApunteTema(temaId);
  if (!data) notFound();

  const { tema, apunte } = data;

  return (
    <div className="container max-w-3xl py-12">
      <Link
        href={`/categorias/${tema.categoria.slug}/temario`}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Temario de {tema.categoria.nombre}
      </Link>

      <span className="eyebrow mt-6 block">Tema de estudio</span>
      <h1 className="mt-2 font-display text-3xl font-semibold">{tema.nombre}</h1>

      {!apunte ? (
        <div className="mt-8 rounded-lg border bg-muted/40 p-6 text-sm text-muted-foreground">
          Los apuntes de este tema aun no se han generado. Ejecuta{" "}
          <code className="rounded bg-muted px-1.5 py-0.5">pnpm gen-temario</code> para generarlos.
        </div>
      ) : (
        <>
          {apunte.resumen && (
            <p className="mt-3 text-balance text-lg text-muted-foreground">{apunte.resumen}</p>
          )}

          <div className="mt-6">
            <AudioPlayer texto={`${tema.nombre}. ${apunte.contenido}`} />
          </div>

          <article className="mt-8 space-y-4">
            {apunte.contenido.split("\n").map((linea, i) => {
              const t = linea.trim();
              if (!t) return null;
              // Epigrafes en MAYUSCULAS -> subtitulo
              const esEpigrafe = t === t.toUpperCase() && t.length < 70 && /[A-Z]/.test(t);
              return esEpigrafe ? (
                <h2 key={i} className="font-display text-lg font-semibold text-primary">
                  {capitalizar(t)}
                </h2>
              ) : (
                <p key={i} className="leading-relaxed text-foreground/90">
                  {t}
                </p>
              );
            })}
          </article>

          {apunte.puntosClave && apunte.puntosClave.length > 0 && (
            <div className="mt-10 rounded-lg border border-primary/30 bg-primary/5 p-5">
              <h3 className="mb-3 flex items-center gap-2 font-display text-lg font-semibold">
                <Lightbulb className="h-5 w-5 text-primary" /> Puntos clave
              </h3>
              <ul className="space-y-2">
                {apunte.puntosClave.map((p, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <span className="font-semibold text-primary">{i + 1}.</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8">
            <Link
              href={`/categorias/${tema.categoria.slug}`}
              className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
            >
              Hacer test de este tema
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

function capitalizar(s: string) {
  return s.charAt(0) + s.slice(1).toLowerCase();
}
