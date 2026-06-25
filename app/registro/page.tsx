import { AuthForm } from "@/components/auth-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { registrar } from "@/lib/actions/auth";

export const metadata = { title: "Crear cuenta — TestSAS" };

export default function RegistroPage() {
  return (
    <div className="container flex min-h-[calc(100vh-4rem)] items-center justify-center py-12">
      <Card className="w-full max-w-md card-elevated">
        <CardHeader>
          <CardTitle className="font-display text-2xl">Empieza gratis</CardTitle>
          <CardDescription>Crea tu cuenta y haz tus primeros test en minutos.</CardDescription>
        </CardHeader>
        <CardContent>
          <AuthForm mode="registro" action={registrar} />
        </CardContent>
      </Card>
    </div>
  );
}
