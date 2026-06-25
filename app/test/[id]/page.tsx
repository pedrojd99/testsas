import { TestRunner } from "@/components/test-runner";
import { getSession } from "@/lib/auth";
import type { SesionConfig } from "@/lib/db";
import { getSesionParaRunner } from "@/lib/queries";
import { redirect } from "next/navigation";

export const metadata = { title: "Test en curso — TestSAS" };

export default async function TestPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await getSession();
  if (!session) redirect("/login");

  const data = await getSesionParaRunner(id, session.uid);
  if (!data) redirect("/dashboard");
  if (data.sesion.finishedAt) redirect(`/test/${id}/resultado`);

  const config = (data.sesion.config ?? {}) as SesionConfig;

  return (
    <TestRunner
      sesionId={id}
      preguntas={data.preguntas}
      modo={data.sesion.modo}
      tiempoLimiteSeg={config.tiempoLimiteSeg}
    />
  );
}
