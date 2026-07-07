import { Skeleton } from "@/components/ui/skeleton";

export default function ResultadoLoading() {
  return (
    <div className="container max-w-3xl py-12">
      <span role="status" className="sr-only">
        Corrigiendo tu test
      </span>
      <Skeleton className="h-3 w-20" />
      <Skeleton className="mt-2 h-9 w-64" />

      <div className="mt-6 flex flex-col items-center gap-6 rounded-lg border bg-card p-6 shadow-soft sm:flex-row">
        <Skeleton className="h-40 w-40 shrink-0 rounded-full" />
        <div className="flex-1 space-y-3">
          <Skeleton className="h-12 w-40" />
          <Skeleton className="h-4 w-56" />
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-9 w-40 rounded-md" />
        </div>
      </div>

      <Skeleton className="mt-12 h-8 w-40" />
      <div className="mt-4 space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-44 w-full rounded-lg" />
        ))}
      </div>
    </div>
  );
}
