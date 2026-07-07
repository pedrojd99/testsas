import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
  return (
    <div className="container py-12">
      <span role="status" className="sr-only">
        Cargando tu panel
      </span>
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-9 w-56" />
        </div>
        <Skeleton className="h-6 w-12" />
      </div>

      <Skeleton className="mt-6 h-20 w-full rounded-lg" />

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-24 rounded-lg" />
        ))}
      </div>

      <Skeleton className="mt-6 h-16 w-full rounded-lg" />
      <Skeleton className="mt-10 h-40 w-full rounded-lg" />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="space-y-2">
          <Skeleton className="mb-4 h-6 w-48" />
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-20 rounded-md" />
          ))}
        </div>
        <div className="space-y-2">
          <Skeleton className="mb-4 h-6 w-40" />
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-16 rounded-md" />
          ))}
        </div>
      </div>
    </div>
  );
}
