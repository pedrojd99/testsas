import { Card, CardContent } from "@/components/ui/card";
import { getCategorias } from "@/lib/queries";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "Oposiciones del SAS — TestSAS" };

export default async function CategoriasPage() {
  const categorias = await getCategorias();
  return (
    <div className="container py-12">
      <span className="eyebrow">Catalogo completo</span>
      <h1 className="mt-2 font-display text-4xl font-semibold">Oposiciones del SAS</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Elige la categoria que vas a opositar y empieza a hacer test por tema o simulacros
        completos.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
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
                    {cat.totalPreguntas} preguntas
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
