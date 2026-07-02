import { Award, Flame, GraduationCap, Sparkles, Target, Trophy } from "lucide-react";

interface Datos {
  sesiones: number;
  respondidas: number;
  precision: number;
  racha: number;
  mejorNota: number;
}

export function Logros({ datos }: { datos: Datos }) {
  const logros = [
    { icon: GraduationCap, nombre: "Primer test", desbloqueado: datos.sesiones >= 1 },
    { icon: Sparkles, nombre: "100 preguntas", desbloqueado: datos.respondidas >= 100 },
    { icon: Trophy, nombre: "Aprobado", desbloqueado: datos.mejorNota >= 5 },
    { icon: Flame, nombre: "Racha de 7 dias", desbloqueado: datos.racha >= 7 },
    { icon: Target, nombre: "Punteria 80%", desbloqueado: datos.precision >= 80 },
    { icon: Award, nombre: "25 test", desbloqueado: datos.sesiones >= 25 },
  ];

  return (
    <section className="mt-10">
      <h2 className="mb-4 font-display text-xl font-semibold">Logros</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {logros.map((l) => (
          <div
            key={l.nombre}
            className={`flex flex-col items-center gap-2 rounded-lg border p-4 text-center ${
              l.desbloqueado ? "bg-primary/5 shadow-soft" : "bg-muted/30 opacity-50"
            }`}
          >
            <l.icon
              className={`h-6 w-6 ${l.desbloqueado ? "text-primary" : "text-muted-foreground"}`}
            />
            <span className="text-xs font-medium">{l.nombre}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
