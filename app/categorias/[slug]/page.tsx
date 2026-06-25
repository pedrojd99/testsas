import { TemaSelector } from "@/components/tema-selector";
import { Card, CardContent } from "@/components/ui/card";
import { iniciarSesion } from "@/lib/actions/test";
import { getSession } from "@/lib/auth";
import { getCategoriaPorSlug } from "@/lib/queries";
import { Clock, Layers, RotateCcw, Zap } from "lucide-react";
import { notFound, redirect } from "next/navigation";

export default async function CategoriaDetallePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const categoria = await getCategoriaPorSlug(slug);
  if (!categoria) notFound();

  const session = await getSession();

  const comunes = categoria.temas.filter((t) => t.bloque === "comun");
  const especificas = categoria.temas.filter((t) => t.bloque === "especifica");

  async function iniciar(formData: FormData) {
    "use server";
    if (!(await getSession())) redirect("/login");
    await iniciarSesion(formData);
  }

  return (
    <div className="container py-12">
      <span className="eyebrow">Oposicion SAS</span>
      <h1 className="mt-2 font-display text-4xl font-semibold">{categoria.nombre}</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">{categoria.descripcion}</p>
      <p className="mt-1 text-sm font-medium text-primary">
        {categoria.totalPreguntas} preguntas en el banco
      </p>

      {!session && (
        <div className="mt-6 rounded-md border border-primary/30 bg-primary/5 p-4 text-sm">
          Necesitas una cuenta para hacer test.{" "}
          <a href="/registro" className="font-medium text-primary hover:underline">
            Registrate gratis
          </a>
          .
        </div>
      )}

      {/* Modos rapidos */}
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <ModoRapido
          slug={slug}
          modo="simulacro"
          accion={iniciar}
          icon={<Clock className="h-5 w-5" />}
          titulo="Simulacro oficial"
          desc="100 preguntas cronometradas, con penalizacion."
        />
        <ModoRapido
          slug={slug}
          modo="rapido"
          accion={iniciar}
          icon={<Zap className="h-5 w-5" />}
          titulo="Test rapido"
          desc="10 preguntas aleatorias para calentar."
        />
        <ModoRapido
          slug={slug}
          modo="falladas"
          accion={iniciar}
          icon={<RotateCcw className="h-5 w-5" />}
          titulo="Repaso de falladas"
          desc="Repite lo que mas te cuesta."
        />
      </div>

      {/* Test por tema */}
      <div className="mt-12">
        <div className="mb-4 flex items-center gap-2">
          <Layers className="h-5 w-5 text-primary" />
          <h2 className="font-display text-2xl font-semibold">Test por tema</h2>
        </div>
        <Card>
          <CardContent className="pt-6">
            <TemaSelector
              slug={slug}
              accion={iniciar}
              comunes={comunes}
              especificas={especificas}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function ModoRapido({
  slug,
  modo,
  accion,
  icon,
  titulo,
  desc,
}: {
  slug: string;
  modo: string;
  accion: (formData: FormData) => Promise<void>;
  icon: React.ReactNode;
  titulo: string;
  desc: string;
}) {
  return (
    <form action={accion}>
      <input type="hidden" name="categoriaSlug" value={slug} />
      <input type="hidden" name="modo" value={modo} />
      <button type="submit" className="w-full text-left">
        <Card className="h-full transition-shadow hover:shadow-elevated">
          <CardContent className="pt-6">
            <span className="text-primary">{icon}</span>
            <h3 className="mt-3 font-medium">{titulo}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
          </CardContent>
        </Card>
      </button>
    </form>
  );
}
