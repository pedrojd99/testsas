import { Skeleton } from "@/components/ui/skeleton";

export default function CategoriaDetalleLoading() {
  return (
    <div className="container py-12">
      <span role="status" className="sr-only">
        Cargando la oposicion
      </span>
      <Skeleton className="h-3 w-24" />
      <Skeleton className="mt-2 h-10 w-80 max-w-full" />
      <Skeleton className="mt-2 h-4 w-full max-w-2xl" />
      <Skeleton className="mt-1 h-4 w-48" />

      <div className="mt-4 flex flex-wrap gap-2">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-10 w-40" />
      </div>

      <div className="mt-8 space-y-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-14 w-full rounded-md" />
        ))}
      </div>
    </div>
  );
}
