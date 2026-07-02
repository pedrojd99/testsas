import { Onboarding } from "@/components/onboarding";
import { getSession } from "@/lib/auth";
import { db, usuarios } from "@/lib/db";
import { getCategorias } from "@/lib/queries";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export const metadata = { title: "Bienvenido — TestSAS" };

export default async function OnboardingPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const user = await db.query.usuarios.findFirst({
    where: eq(usuarios.id, session.uid),
    columns: { onboardingCompletado: true },
  });
  if (user?.onboardingCompletado) redirect("/dashboard");

  const categorias = await getCategorias();
  return (
    <Onboarding
      categorias={categorias.map((c) => ({
        slug: c.slug,
        nombre: c.nombre,
        descripcion: c.descripcion,
      }))}
    />
  );
}
