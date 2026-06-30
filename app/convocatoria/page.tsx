import { GUIA_CONVOCATORIA as G } from "@/lib/content/convocatoria";
import {
  BookOpen,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  FileText,
  Layers,
  ScrollText,
  ShieldCheck,
  Users,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Guia de la convocatoria del SAS — TestSAS",
  description:
    "Requisitos, sistema de seleccion, baremo de meritos, plazos, modalidades y normativa de las oposiciones del Servicio Andaluz de Salud.",
};

const AMBITO: Record<string, string> = {
  estatal: "Estatal",
  andalucia: "Andalucia",
  bases: "Bases",
};

export default function ConvocatoriaPage() {
  return (
    <div className="pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="cross-grid bg-grid-fade absolute inset-0 opacity-70" />
        <div className="hero-radial absolute inset-0" />
        <div className="container relative max-w-4xl py-16">
          <span className="badge-oficial mb-5">
            <ShieldCheck className="h-3.5 w-3.5" /> Guia del opositor
          </span>
          <h1 className="text-balance font-display text-4xl font-semibold leading-tight md:text-5xl">
            La convocatoria del SAS, paso a paso
          </h1>
          <p className="mt-4 max-w-2xl text-balance text-lg text-muted-foreground">{G.resumen}</p>
        </div>
      </section>

      <div className="container max-w-4xl space-y-14 py-12">
        {/* Modalidades */}
        <Section icon={<Users className="h-5 w-5" />} titulo="Modalidades de acceso">
          <div className="grid gap-4 sm:grid-cols-2">
            {G.modalidades.map((m) => (
              <div key={m.nombre} className="rounded-lg border bg-card p-4 shadow-soft">
                <h3 className="font-medium">{m.nombre}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.descripcion}</p>
                {m.cupo && <p className="mt-2 text-xs font-medium text-primary">Cupo: {m.cupo}</p>}
              </div>
            ))}
          </div>
        </Section>

        {/* Sistema de seleccion */}
        <Section
          icon={<Layers className="h-5 w-5" />}
          titulo={`Sistema de seleccion: ${G.sistema.tipo}`}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {G.sistema.fases.map((f, i) => (
              <div key={f.nombre} className="rounded-lg border bg-card p-5 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="numeral text-3xl">{i + 1}</span>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{f.nombre}</h3>
                    <p className="text-xs font-medium text-primary">Peso: {f.peso}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{f.descripcion}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Examen por categoria */}
        <Section icon={<FileText className="h-5 w-5" />} titulo="El examen por categoria">
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-left text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="px-4 py-2">Categoria</th>
                  <th className="px-4 py-2">Titulacion</th>
                  <th className="px-4 py-2 text-center">Preguntas</th>
                  <th className="px-4 py-2 text-center">Reserva</th>
                  <th className="px-4 py-2 text-center">Tiempo</th>
                  <th className="px-4 py-2" />
                </tr>
              </thead>
              <tbody>
                {G.categorias.map((c) => (
                  <tr key={c.slug} className="border-t align-top">
                    <td className="px-4 py-3 font-medium">{c.nombre}</td>
                    <td className="px-4 py-3 text-muted-foreground">{c.titulacion}</td>
                    <td className="px-4 py-3 text-center">{c.examen.preguntas}</td>
                    <td className="px-4 py-3 text-center">+{c.examen.reserva}</td>
                    <td className="px-4 py-3 text-center">{c.examen.tiempoMin} min</td>
                    <td className="px-4 py-3 text-right">
                      <Link href={`/categorias/${c.slug}`} className="text-primary hover:underline">
                        Practicar
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            En todas, <strong>las respuestas erroneas penalizan</strong> y las preguntas de reserva
            solo cuentan si se anula alguna. Practica con la correccion real en{" "}
            <Link href="/categorias" className="text-primary hover:underline">
              los simulacros
            </Link>
            .
          </p>
        </Section>

        {/* Baremo de meritos */}
        <Section
          icon={<ClipboardList className="h-5 w-5" />}
          titulo="Baremo de meritos (fase de concurso)"
        >
          <div className="space-y-3">
            {G.baremo.map((b) => (
              <div key={b.bloque} className="rounded-lg border bg-card p-4 shadow-soft">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-medium">{b.bloque}</h3>
                  {b.pesoOrientativo && (
                    <span className="text-xs font-medium text-primary">{b.pesoOrientativo}</span>
                  )}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{b.detalle}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Requisitos */}
        <Section icon={<CheckCircle2 className="h-5 w-5" />} titulo="Requisitos generales">
          <ul className="space-y-2">
            {G.requisitosGenerales.map((r) => (
              <li key={r} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Plazos (timeline) */}
        <Section icon={<CalendarClock className="h-5 w-5" />} titulo="El proceso, fase a fase">
          <ol className="relative space-y-5 border-l pl-6">
            {G.plazos.map((h, i) => (
              <li key={h.fase} className="relative">
                <span className="absolute -left-[1.95rem] flex h-6 w-6 items-center justify-center rounded-full border bg-card text-xs font-semibold text-primary">
                  {i + 1}
                </span>
                <h3 className="font-medium">{h.fase}</h3>
                <p className="mt-0.5 text-sm text-muted-foreground">{h.descripcion}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Normativa */}
        <Section icon={<ScrollText className="h-5 w-5" />} titulo="Normativa aplicable">
          <div className="space-y-2">
            {G.normativa.map((n) => (
              <div
                key={n.referencia}
                className="flex flex-wrap items-center justify-between gap-2 rounded-md border bg-card p-3 text-sm shadow-soft"
              >
                <div>
                  <p className="font-medium">{n.titulo}</p>
                  <p className="text-xs text-muted-foreground">{n.referencia}</p>
                </div>
                <span className="chip">{AMBITO[n.ambito]}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* FAQ */}
        <Section icon={<BookOpen className="h-5 w-5" />} titulo="Preguntas frecuentes">
          <div className="space-y-2">
            {G.faq.map((f) => (
              <details key={f.pregunta} className="group rounded-lg border bg-card p-4 shadow-soft">
                <summary className="cursor-pointer list-none font-medium marker:hidden">
                  <span className="flex items-center justify-between gap-3">
                    {f.pregunta}
                    <span className="text-muted-foreground transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-2 text-sm text-muted-foreground">{f.respuesta}</p>
              </details>
            ))}
          </div>
        </Section>

        <p className="rounded-lg border border-dashed bg-muted/30 p-4 text-center text-sm text-muted-foreground">
          Guia orientativa. Las cifras, fechas y baremos exactos se publican en las{" "}
          <strong>bases oficiales (BOJA)</strong> de cada convocatoria; ante cualquier discrepancia,
          prevalecen estas.
        </p>
      </div>
    </div>
  );
}

function Section({
  icon,
  titulo,
  children,
}: {
  icon: React.ReactNode;
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="mb-4 flex items-center gap-2">
        <span className="text-primary">{icon}</span>
        <h2 className="font-display text-2xl font-semibold">{titulo}</h2>
      </div>
      {children}
    </section>
  );
}
