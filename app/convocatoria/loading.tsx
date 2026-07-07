import { Skeleton } from "@/components/ui/skeleton";

export default function ConvocatoriaLoading() {
  return (
    <div>
      <span role="status" className="sr-only">
        Cargando la convocatoria
      </span>
      <div className="border-b">
        <div className="container max-w-4xl py-16">
          <Skeleton className="h-11 w-full max-w-xl" />
          <Skeleton className="mt-4 h-5 w-full max-w-2xl" />
          <Skeleton className="mt-2 h-5 w-2/3" />
        </div>
      </div>
      <div className="container max-w-4xl space-y-14 py-12">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-7 w-56" />
            <Skeleton className="h-40 w-full rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}
