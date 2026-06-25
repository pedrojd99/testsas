import { PreguntaEditor } from "@/components/admin/pregunta-editor";
import { getSession } from "@/lib/auth";
import { getCategoriasParaFiltro, getPreguntasAdmin } from "@/lib/queries-admin";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata = { title: "Preguntas — Admin TestSAS" };

interface SearchParams {
  categoria?: string;
  q?: string;
  noRevisadas?: string;
  page?: string;
}

export default async function AdminPreguntasPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const session = await getSession();
  if (!session) redirect("/login");
  if (session.rol !== "admin") redirect("/dashboard");

  const sp = await searchParams;
  const page = Number(sp.page) || 1;
  const categorias = await getCategoriasParaFiltro();
  const { preguntas, hayMas } = await getPreguntasAdmin({
    categoriaSlug: sp.categoria,
    q: sp.q,
    soloNoRevisadas: sp.noRevisadas === "1",
    page,
  });

  const qs = (extra: Record<string, string | number | undefined>) => {
    const params = new URLSearchParams();
    if (sp.categoria) params.set("categoria", sp.categoria);
    if (sp.q) params.set("q", sp.q);
    if (sp.noRevisadas) params.set("noRevisadas", sp.noRevisadas);
    for (const [k, v] of Object.entries(extra)) {
      if (v === undefined) params.delete(k);
      else params.set(k, String(v));
    }
    return `?${params.toString()}`;
  };

  return (
    <div className="container py-12">
      <div className="flex items-center justify-between">
        <div>
          <span className="eyebrow">Administracion</span>
          <h1 className="mt-2 font-display text-3xl font-semibold">Preguntas</h1>
        </div>
        <Link href="/admin" className="text-sm text-muted-foreground hover:text-foreground">
          Volver
        </Link>
      </div>

      {/* Filtros */}
      <form className="mt-6 flex flex-wrap items-end gap-3" action="/admin/preguntas">
        <div>
          <label htmlFor="categoria" className="block text-xs text-muted-foreground">
            Categoria
          </label>
          <select
            id="categoria"
            name="categoria"
            defaultValue={sp.categoria ?? ""}
            className="mt-1 rounded-md border bg-background px-2 py-1.5 text-sm"
          >
            <option value="">Todas</option>
            {categorias.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label htmlFor="q" className="block text-xs text-muted-foreground">
            Buscar en enunciado
          </label>
          <input
            id="q"
            name="q"
            defaultValue={sp.q ?? ""}
            className="mt-1 w-full rounded-md border bg-background px-2 py-1.5 text-sm"
            placeholder="texto..."
          />
        </div>
        <label className="flex items-center gap-1.5 pb-2 text-sm">
          <input
            type="checkbox"
            name="noRevisadas"
            value="1"
            defaultChecked={sp.noRevisadas === "1"}
          />
          Solo sin revisar
        </label>
        <button
          type="submit"
          className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
        >
          Filtrar
        </button>
      </form>

      {/* Listado */}
      <div className="mt-6 space-y-3">
        {preguntas.length === 0 ? (
          <p className="text-muted-foreground">No hay preguntas con esos filtros.</p>
        ) : (
          preguntas.map((p) => <PreguntaEditor key={p.id} pregunta={p} />)
        )}
      </div>

      {/* Paginacion */}
      <div className="mt-6 flex items-center justify-between">
        {page > 1 ? (
          <Link href={qs({ page: page - 1 })} className="text-sm text-primary hover:underline">
            Anterior
          </Link>
        ) : (
          <span />
        )}
        <span className="text-sm text-muted-foreground">Pagina {page}</span>
        {hayMas ? (
          <Link href={qs({ page: page + 1 })} className="text-sm text-primary hover:underline">
            Siguiente
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
