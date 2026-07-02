import { CompartirResultado } from "@/components/compartir-resultado";
import { Donut } from "@/components/donut";
import { TutorButton } from "@/components/tutor-button";
import { getSession } from "@/lib/auth";
import type { SesionConfig } from "@/lib/db";
import { getSesionResultado } from "@/lib/queries";
import { corregir } from "@/lib/scoring";
import { BookOpen, CheckCircle2, Circle, GraduationCap, XCircle } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const LETRAS = ["A", "B", "C", "D"];

export const metadata = { title: "Resultado del test — TestSAS" };

export default async function ResultadoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await getSession();
  if (!session) redirect("/login");

  const data = await getSesionResultado(id, session.uid);
  if (!data) redirect("/dashboard");

  const { sesion } = data;
  const config = (sesion.config ?? {}) as SesionConfig;
  const res = corregir({
    aciertos: sesion.aciertos,
    fallos: sesion.fallos,
    enBlanco: sesion.enBlanco,
    total: sesion.totalPreguntas,
    conPenalizacion: config.conPenalizacion,
    penalizacionDivisor: config.penalizacionDivisor,
  });

  const aprobado = res.nota >= 5;

  return (
    <div className="container max-w-3xl py-12">
      <span className="eyebrow">Resultado</span>
      <h1 className="mt-2 font-display text-3xl font-semibold">{data.sesion.categoria.nombre}</h1>

      {/* Resumen */}
      <div className="mt-6 flex flex-col items-center gap-6 rounded-lg border bg-card p-6 shadow-soft sm:flex-row sm:items-center">
        <Donut aciertos={sesion.aciertos} fallos={sesion.fallos} enBlanco={sesion.enBlanco} />
        <div className="flex-1">
          <div className="flex items-end gap-3">
            <span
              className={`font-display text-5xl font-semibold ${aprobado ? "text-success" : "text-destructive"}`}
            >
              {res.nota.toFixed(2)}
            </span>
            <span className="pb-1 text-sm text-muted-foreground">/ 10</span>
            {data.notaAnterior != null && (
              <span
                className={`pb-1 text-sm font-medium ${
                  res.nota >= data.notaAnterior ? "text-success" : "text-destructive"
                }`}
              >
                {res.nota >= data.notaAnterior ? "▲" : "▼"}{" "}
                {Math.abs(res.nota - data.notaAnterior).toFixed(2)} vs anterior
              </span>
            )}
          </div>
          <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <span className="text-success">{sesion.aciertos} aciertos</span>
            <span className="text-destructive">{sesion.fallos} fallos</span>
            <span className="text-muted-foreground">{sesion.enBlanco} en blanco</span>
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Neto tras penalizacion: {res.puntosNetos.toFixed(2)} / {sesion.totalPreguntas}
            {config.conPenalizacion && ` · cada fallo resta 1/${config.penalizacionDivisor ?? 3}`}
          </p>
          <div className="mt-4">
            <CompartirResultado
              nota={res.nota}
              categoria={data.sesion.categoria.nombre}
              aciertos={sesion.aciertos}
              total={sesion.totalPreguntas}
            />
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-3">
        <Link
          href={`/categorias/${data.sesion.categoria.slug}`}
          className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
        >
          Hacer otro test
        </Link>
        <Link href="/dashboard" className="rounded-md border px-4 py-2 text-sm hover:bg-accent">
          Ir a mi panel
        </Link>
      </div>

      {/* Revision */}
      <h2 className="mt-12 font-display text-2xl font-semibold">Revision</h2>
      <div className="mt-4 space-y-4">
        {data.preguntas.map((p, i) => {
          const enBlanco = p.opcionElegida === null;
          return (
            <div key={p.preguntaId} className="rounded-lg border bg-card p-5 shadow-soft">
              <div className="flex items-start gap-3">
                {enBlanco ? (
                  <Circle className="mt-1 h-5 w-5 shrink-0 text-muted-foreground" />
                ) : p.esCorrecta ? (
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-success" />
                ) : (
                  <XCircle className="mt-1 h-5 w-5 shrink-0 text-destructive" />
                )}
                <div className="flex-1">
                  <p className="font-medium">
                    {i + 1}. {p.enunciado}
                  </p>
                  <div className="mt-3 space-y-1.5">
                    {p.opciones.map((opcion, idx) => {
                      const esCorrecta = idx === p.correctaIndex;
                      const esElegida = idx === p.opcionElegida;
                      return (
                        <div
                          key={idx}
                          className={`flex items-start gap-2 rounded-md border px-3 py-2 text-sm ${
                            esCorrecta
                              ? "border-success/40 bg-success/5"
                              : esElegida
                                ? "border-destructive/40 bg-destructive/5"
                                : "border-transparent"
                          }`}
                        >
                          <span className="font-semibold">{LETRAS[idx]}</span>
                          <span>{opcion}</span>
                          {esCorrecta && (
                            <span className="ml-auto text-xs font-medium text-success">
                              Correcta
                            </span>
                          )}
                          {esElegida && !esCorrecta && (
                            <span className="ml-auto text-xs font-medium text-destructive">
                              Tu respuesta
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {p.explicacion && (
                    <div className="mt-3 rounded-md bg-muted/50 p-3 text-sm">
                      <p className="text-muted-foreground">{p.explicacion}</p>
                      {p.fuente && (
                        <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-primary">
                          <BookOpen className="h-3.5 w-3.5" /> {p.fuente}
                        </p>
                      )}
                    </div>
                  )}
                  {!p.esCorrecta && (
                    <div className="mt-3 flex flex-wrap items-center gap-4">
                      <TutorButton preguntaId={p.preguntaId} opcionElegida={p.opcionElegida} />
                      {p.temaId && (
                        <Link
                          href={`/temario/${p.temaId}`}
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                        >
                          <GraduationCap className="h-3.5 w-3.5" /> Estudiar este tema
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
