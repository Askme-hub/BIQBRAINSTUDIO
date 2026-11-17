import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useCurrentUserState } from "@/lib/auth/use-current-user";

export function AccountMenu({ stacked = false }: { stacked?: boolean }) {
  const { user, isPending } = useCurrentUserState();
  if (isPending) {
    return <div className={stacked ? "h-11 w-full animate-pulse rounded-lg bg-muted" : "h-11 w-28 animate-pulse rounded-lg bg-muted"} />;
  }
  if (user) {
    return (
      <Button asChild className={stacked ? "w-full" : undefined}>
        <Link to="/app">Workspaces</Link>
      </Button>
    );
  }
  return (
    <div className={stacked ? "flex flex-col gap-2" : "flex items-center gap-2"}>
      <Button variant="ghost" asChild className={stacked ? "w-full" : undefined}>
        <Link to="/login">Log in</Link>
      </Button>
      <Button asChild className={stacked ? "w-full" : undefined}>
        <Link to="/register">Get started</Link>
      </Button>
    </div>
  );
}
