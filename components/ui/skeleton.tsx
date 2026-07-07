import { cn } from "@/lib/utils";

// Placeholder de carga. El pulso se detiene con prefers-reduced-motion
// gracias a la regla global en globals.css.
export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}
