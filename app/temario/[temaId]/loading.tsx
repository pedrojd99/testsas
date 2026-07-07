import { Skeleton } from "@/components/ui/skeleton";

export default function TemarioLoading() {
  return (
    <div className="container max-w-3xl py-12">
      <span role="status" className="sr-only">
        Cargando el tema
      </span>
      <Skeleton className="h-3 w-24" />
      <Skeleton className="mt-2 h-9 w-80 max-w-full" />

      <Skeleton className="mt-6 h-12 w-full rounded-md" />

      <div className="mt-8 space-y-3">
        {Array.from({ length: 10 }).map((_, i) => (
          <Skeleton key={i} className={`h-4 ${i % 4 === 3 ? "w-2/3" : "w-full"}`} />
        ))}
      </div>
    </div>
  );
}
