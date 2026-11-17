import { createFileRoute, Link, Navigate, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create account — BIQ Brain Studios" },
      { name: "description", content: "Create a BIQ Brain Studios account." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const { user, isPending } = useCurrentUserState();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  if (isPending) return <div className="min-h-screen bg-background" aria-busy="true" />;
  if (user) return <Navigate to="/app" />;

  return (
    <AuthLayout
      title="Create your account"
      description="Events come first. Voting will use the same account later."
      footer={
        <>
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-primary">
            Log in
          </Link>
        </>
      }
    >
      <form
        className="space-y-4"
        onSubmit={(event) => {
          event.preventDefault();
          const form = new FormData(event.currentTarget);
          const phone = String(form.get("phone") ?? "").replace(/\s/g, "");
          if (phone && !/^(\+233|0)[235]\d{8}$/.test(phone)) {
            setError("Use a Ghanaian number such as 0241234567.");
            return;
          }
          setPending(true);
          setError(null);
          void authClient.signUp
            .email({
              name: String(form.get("name") ?? ""),
              email: String(form.get("email") ?? ""),
              password: String(form.get("password") ?? ""),
            })
            .then(async (result) => {
              if (result.error) {
                setError(result.error.message ?? "The account could not be created.");
                setPending(false);
                return;
              }
              await navigate({ to: "/app" });
            })
            .catch(() => {
              setError("The account could not be created.");
              setPending(false);
            });
        }}
      >
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" autoComplete="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" name="phone" type="tel" placeholder="024 123 4567" autoComplete="tel" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" autoComplete="new-password" minLength={8} required />
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "Creating account…" : "Create account"}
        </Button>
      </form>
    </AuthLayout>
  );
}
