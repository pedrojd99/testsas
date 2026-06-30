import { getTemarioIndice } from "@/lib/queries";
import { BookOpen, Headphones } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata = { title: "Temario — TestSAS" };

export default async function TemarioIndicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getTemarioIndice(slug);
  if (!data) notFound();

  const comunes = data.temas.filter((t) => t.bloque === "comun");
  const especificas = data.temas.filter((t) => t.bloque === "especifica");

  return (
    <div className="container py-12">
      <span className="eyebrow">Temario</span>
      <h1 className="mt-2 font-display text-4xl font-semibold">{data.categoria.nombre}</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Estudia cada tema y escuchalo en audio. Empieza por la parte comun, valida en las cuatro
        categorias.
      </p>
      <div className="mt-4">
        <Link href={`/categorias/${slug}`} className="text-sm text-primary hover:underline">
          Hacer test de esta categoria
        </Link>
      </div>

      <Bloque titulo="Parte comun" temas={comunes} numeroBase={1} />
      {especificas.length > 0 && (
        <Bloque titulo="Parte especifica" temas={especificas} numeroBase={comunes.length + 1} />
      )}
    </div>
  );
}

function Bloque({
  titulo,
  temas,
  numeroBase,
}: {
  titulo: string;
  temas: { id: string; nombre: string; tieneApuntes: boolean; palabras: number | null }[];
  numeroBase: number;
}) {
  return (
    <section className="mt-10">
      <h2 className="eyebrow mb-3">{titulo}</h2>
      <div className="overflow-hidden rounded-lg border">
        {temas.map((t, i) => (
          <Link
            key={t.id}
            href={`/temario/${t.id}`}
            className="flex items-center gap-4 border-b px-4 py-3 transition-colors last:border-b-0 hover:bg-accent"
          >
            <span className="numeral text-2xl">{String(numeroBase + i).padStart(2, "0")}</span>
            <div className="flex-1">
              <p className="text-sm font-medium">{t.nombre}</p>
              {t.tieneApuntes && t.palabras ? (
                <p className="text-xs text-muted-foreground">{t.palabras} palabras</p>
              ) : (
                <p className="text-xs text-muted-foreground">Apuntes pendientes de generar</p>
              )}
            </div>
            {t.tieneApuntes ? (
              <span className="flex items-center gap-1 text-xs font-medium text-primary">
                <Headphones className="h-3.5 w-3.5" /> Audio
              </span>
            ) : (
              <BookOpen className="h-4 w-4 text-muted-foreground/40" />
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
