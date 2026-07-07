import { Skeleton } from "@/components/ui/skeleton";

export default function RankingLoading() {
  return (
    <div className="container max-w-2xl py-10">
      <span role="status" className="sr-only">
        Cargando el ranking
      </span>
      <Skeleton className="h-3 w-24" />
      <Skeleton className="mt-2 h-9 w-56" />
      <Skeleton className="mt-2 h-4 w-80 max-w-full" />

      <div className="mt-6 flex flex-wrap gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-9 w-28 rounded-full" />
        ))}
      </div>

      <Skeleton className="mt-6 h-20 w-full rounded-lg" />

      <div className="mt-6 space-y-px overflow-hidden rounded-lg border">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="h-14 w-full rounded-none" />
        ))}
      </div>
    </div>
  );
}
