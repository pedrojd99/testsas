// Donut de resultados (SVG puro): aciertos / fallos / en blanco.
export function Donut({
  aciertos,
  fallos,
  enBlanco,
}: {
  aciertos: number;
  fallos: number;
  enBlanco: number;
}) {
  const total = Math.max(1, aciertos + fallos + enBlanco);
  const R = 54;
  const C = 2 * Math.PI * R;
  const pct = Math.round((aciertos / total) * 100);

  const seg = (v: number) => (v / total) * C;
  const segAciertos = seg(aciertos);
  const segFallos = seg(fallos);

  return (
    <div className="relative h-40 w-40">
      <svg
        viewBox="0 0 128 128"
        className="h-full w-full -rotate-90"
        role="img"
        aria-label={`${pct}% de aciertos: ${aciertos} aciertos, ${fallos} fallos, ${enBlanco} en blanco`}
      >
        <circle cx="64" cy="64" r={R} fill="none" stroke="hsl(var(--muted))" strokeWidth="14" />
        {/* aciertos */}
        <circle
          cx="64"
          cy="64"
          r={R}
          fill="none"
          stroke="hsl(var(--success))"
          strokeWidth="14"
          strokeDasharray={`${segAciertos} ${C - segAciertos}`}
          strokeDashoffset="0"
          strokeLinecap="butt"
        />
        {/* fallos, a continuacion de aciertos */}
        <circle
          cx="64"
          cy="64"
          r={R}
          fill="none"
          stroke="hsl(var(--destructive))"
          strokeWidth="14"
          strokeDasharray={`${segFallos} ${C - segFallos}`}
          strokeDashoffset={-segAciertos}
          strokeLinecap="butt"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-3xl font-semibold">{pct}%</span>
        <span className="text-xs text-muted-foreground">aciertos</span>
      </div>
    </div>
  );
}
