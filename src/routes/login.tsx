import { createFileRoute, Link, Navigate, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient, GROK_PROVIDERS, signIn } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log in — BIQ Brain Studios" },
      { name: "description", content: "Log in to your BIQ Brain Studios account." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const { user, isPending } = useCurrentUserState();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  if (isPending) return <div className="min-h-screen bg-background" aria-busy="true" />;
  if (user) return <Navigate to="/app" />;

  return (
    <AuthLayout
      title="Welcome back"
      description="Log in to manage events and, later, elections."
      footer={
        <>
          New to BIQ?{" "}
          <Link to="/register" className="font-medium text-primary">
            Create an account
          </Link>
        </>
      }
    >
      <form
        className="space-y-4"
        onSubmit={(event) => {
          event.preventDefault();
          const form = new FormData(event.currentTarget);
          setPending(true);
          setError(null);
          void authClient.signIn
            .email({
              email: String(form.get("email") ?? ""),
              password: String(form.get("password") ?? ""),
            })
            .then(async (result) => {
              if (result.error) {
                setError(result.error.message ?? "Those details were not accepted.");
                setPending(false);
                return;
              }
              await navigate({ to: "/app" });
            })
            .catch(() => {
              setError("Sign-in could not be completed.");
              setPending(false);
            });
        }}
      >
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link to="/forgot-password" className="text-xs font-medium text-primary">
              Forgot password?
            </Link>
          </div>
          <Input id="password" name="password" type="password" autoComplete="current-password" required />
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "Logging in…" : "Log in"}
        </Button>
      </form>
      <div className="mt-6 space-y-2">
        {GROK_PROVIDERS.map((provider) => (
          <Button
            key={provider.providerId}
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => {
              void signIn(provider.providerId, { callbackURL: "/app" }).catch((reason: unknown) => {
                setError(reason instanceof Error ? reason.message : "Sign-in could not be completed.");
              });
            }}
          >
            Continue with {provider.label}
          </Button>
        ))}
      </div>
    </AuthLayout>
  );
}
