import { AuthForm } from "@/components/auth-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { entrar } from "@/lib/actions/auth";

export const metadata = { title: "Entrar — TestSAS" };

export default function LoginPage() {
  return (
    <div className="container flex min-h-[calc(100vh-4rem)] items-center justify-center py-12">
      <Card className="w-full max-w-md card-elevated">
        <CardHeader>
          <CardTitle className="font-display text-2xl">Bienvenido de nuevo</CardTitle>
          <CardDescription>Entra para seguir con tu preparacion.</CardDescription>
        </CardHeader>
        <CardContent>
          <AuthForm mode="login" action={entrar} />
        </CardContent>
      </Card>
    </div>
  );
}
