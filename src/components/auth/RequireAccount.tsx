import { Outlet } from "@tanstack/react-router";
import { RedirectToSignIn } from "@/lib/auth/gates";
import { useCurrentUserState } from "@/lib/auth/use-current-user";

export function RequireAccount() {
  const { user, isPending } = useCurrentUserState();
  if (isPending) {
    return <div className="min-h-screen bg-background" aria-busy="true" />;
  }
  if (!user) return <RedirectToSignIn />;
  return <Outlet />;
}
