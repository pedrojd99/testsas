import { CheckoutButton } from "@/components/checkout-button";
import { Card, CardContent } from "@/components/ui/card";
import { getSession } from "@/lib/auth";
import { Check } from "lucide-react";

export const metadata = { title: "Premium — TestSAS" };

const FREE = [
  "Test por tema ilimitados",
  "Simulacros cronometrados",
  "Estadisticas basicas de progreso",
];

const PREMIUM = [
  "Todo lo del plan gratuito",
  "Tutor IA: explicacion de cada fallo citando el temario",
  "Repaso espaciado inteligente de tus falladas",
  "Banco completo de preguntas oficiales",
  "Estadisticas avanzadas por tema y bloque",
];

export default async function PremiumPage() {
  const session = await getSession();

  return (
    <div className="container max-w-4xl py-16">
      <div className="text-center">
        <span className="eyebrow">Planes</span>
        <h1 className="mt-2 font-display text-4xl font-semibold">Aprueba antes con Premium</h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Empieza gratis y pasa a Premium cuando quieras desbloquear el tutor IA y el repaso
          inteligente.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="pt-6">
            <h2 className="font-display text-2xl font-semibold">Gratis</h2>
            <p className="mt-1 text-3xl font-semibold">0 €</p>
            <ul className="mt-6 space-y-2 text-sm">
              {FREE.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {f}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="card-elevated border-primary/40">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl font-semibold">Premium</h2>
              <span className="chip">Recomendado</span>
            </div>
            <p className="mt-1 text-3xl font-semibold">
              9,99 € <span className="text-base font-normal text-muted-foreground">/mes</span>
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {PREMIUM.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {f}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <CheckoutButton autenticado={!!session} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
