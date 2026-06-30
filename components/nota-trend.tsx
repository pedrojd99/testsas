// Grafica de evolucion de la nota (SVG puro, sin dependencias).
export function NotaTrend({ notas }: { notas: number[] }) {
  if (notas.length < 2) {
    return (
      <p className="text-sm text-muted-foreground">
        Completa al menos dos test para ver tu evolucion.
      </p>
    );
  }

  const W = 320;
  const H = 96;
  const pad = 8;
  const n = notas.length;
  const x = (i: number) => pad + (i / (n - 1)) * (W - 2 * pad);
  const y = (v: number) => H - pad - (Math.max(0, Math.min(10, v)) / 10) * (H - 2 * pad);

  const linea = notas
    .map((v, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)} ${y(v).toFixed(1)}`)
    .join(" ");
  const area = `${linea} L${x(n - 1).toFixed(1)} ${H - pad} L${x(0).toFixed(1)} ${H - pad} Z`;
  const y5 = y(5);
  const ultima = notas[n - 1];

  return (
    <div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        role="img"
        aria-label="Evolucion de la nota"
      >
        <title>Evolucion de la nota</title>
        {/* Linea de aprobado (5) */}
        <line
          x1={pad}
          x2={W - pad}
          y1={y5}
          y2={y5}
          stroke="hsl(var(--border))"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <path d={area} fill="hsl(var(--primary) / 0.1)" />
        <path
          d={linea}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {notas.map((v, i) => (
          <circle key={i} cx={x(i)} cy={y(v)} r="2.5" fill="hsl(var(--primary))" />
        ))}
      </svg>
      <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
        <span>Aprobado en 5,0</span>
        <span>
          Ultima:{" "}
          <strong className={ultima >= 5 ? "text-success" : "text-destructive"}>
            {ultima.toFixed(1)}
          </strong>
        </span>
      </div>
    </div>
  );
}
