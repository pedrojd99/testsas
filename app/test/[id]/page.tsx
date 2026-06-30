import { TestRunner } from "@/components/test-runner";
import { getSession } from "@/lib/auth";
import type { SesionConfig } from "@/lib/db";
import { getSesionParaRunner, getSesionParaRunnerEstudio } from "@/lib/queries";
import { redirect } from "next/navigation";

export const metadata = { title: "Test en curso — TestSAS" };

export default async function TestPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await getSession();
  if (!session) redirect("/login");

  // Necesitamos la config para saber si es modo estudio (feedback inmediato)
  const sin = await getSesionParaRunner(id, session.uid);
  if (!sin) redirect("/dashboard");
  if (sin.sesion.finishedAt) redirect(`/test/${id}/resultado`);

  const config = (sin.sesion.config ?? {}) as SesionConfig;
  const estudio = config.feedbackInmediato === true;

  // En modo estudio cargamos la solucion (seguro: no es examen real)
  const data = estudio ? await getSesionParaRunnerEstudio(id, session.uid) : sin;
  if (!data) redirect("/dashboard");

  return (
    <TestRunner
      sesionId={id}
      preguntas={data.preguntas}
      modo={sin.sesion.modo}
      tiempoLimiteSeg={config.tiempoLimiteSeg}
      startedAt={sin.sesion.startedAt.toISOString()}
      feedbackInmediato={estudio}
    />
  );
}
