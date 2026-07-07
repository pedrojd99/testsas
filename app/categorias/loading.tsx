import { Skeleton } from "@/components/ui/skeleton";

export default function CategoriasLoading() {
  return (
    <div className="container py-12">
      <span role="status" className="sr-only">
        Cargando oposiciones
      </span>
      <Skeleton className="h-3 w-28" />
      <Skeleton className="mt-2 h-10 w-72 max-w-full" />
      <Skeleton className="mt-2 h-4 w-full max-w-2xl" />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-28 rounded-lg" />
        ))}
      </div>
    </div>
  );
}
