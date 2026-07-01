import { darDeBajaAlerta } from "@/lib/actions/alertas";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata = { title: "Baja de alertas — TestSAS" };

export default async function BajaPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string; done?: string }>;
}) {
  const sp = await searchParams;

  async function baja(formData: FormData) {
    "use server";
    const token = String(formData.get("token") ?? "");
    if (token) await darDeBajaAlerta(token);
    redirect("/alertas/baja?done=1");
  }

  return (
    <div className="container flex min-h-[calc(100vh-4rem)] max-w-md flex-col items-center justify-center py-12 text-center">
      {sp.done ? (
        <>
          <h1 className="font-display text-2xl font-semibold">Te has dado de baja</h1>
          <p className="mt-2 text-muted-foreground">
            Ya no recibiras avisos de la convocatoria. Puedes volver a activarlos cuando quieras.
          </p>
          <Link
            href="/"
            className="mt-6 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
          >
            Volver al inicio
          </Link>
        </>
      ) : (
        <>
          <h1 className="font-display text-2xl font-semibold">Darte de baja de las alertas</h1>
          <p className="mt-2 text-muted-foreground">
            Confirma que no quieres recibir el aviso cuando salga la convocatoria.
          </p>
          <form action={baja} className="mt-6">
            <input type="hidden" name="token" value={sp.token ?? ""} />
            <button type="submit" className="rounded-md border px-4 py-2 text-sm hover:bg-accent">
              Confirmar baja
            </button>
          </form>
        </>
      )}
    </div>
  );
}
