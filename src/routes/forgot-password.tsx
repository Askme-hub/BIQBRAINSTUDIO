import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { AuthLayout, AuthNotice } from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Reset password — BIQ Brain Studios" },
      { name: "description", content: "Password recovery design. Recovery emails are not sent yet." },
    ],
  }),
  component: ForgotPage,
});

function ForgotPage() {
  return (
    <AuthLayout
      title="Reset your password"
      description="When recovery is live, a link will be emailed. Nothing is sent from this page today."
      footer={
        <Link to="/login" className="font-medium text-primary">
          Back to log in
        </Link>
      }
    >
      <form
        className="space-y-4"
        onSubmit={(event) => {
          event.preventDefault();
          toast.message("No reset email was sent", {
            description: "Password recovery is part of the authentication phase.",
          });
        }}
      >
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" autoComplete="email" required />
        </div>
        <Button type="submit" className="w-full">
          Send reset link
        </Button>
      </form>
      <AuthNotice />
    </AuthLayout>
  );
}
