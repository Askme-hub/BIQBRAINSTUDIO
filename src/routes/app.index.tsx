import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bell, Building2, CalendarDays, CreditCard, Plus, UserRound, Vote } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/app/")({
  head: () => ({
    meta: [
      { title: "Workspaces — BIQ Brain Studios" },
      { name: "description", content: "Choose the Event Management or Voting workspace." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: WorkspaceSelector,
});

function WorkspaceSelector() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Logo />
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/app/account/$section" params={{ section: "notifications" }} aria-label="Notifications">
                <Bell className="size-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/app/account/$section" params={{ section: "profile" }} aria-label="Account">
                <UserRound className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="text-sm text-muted-foreground">Account area</p>
        <h1 className="mt-1 text-3xl font-semibold">Choose a workspace</h1>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground">
          Events and voting stay separate. You are not signed in yet, so this page is a layout preview.
        </p>

        <section className="mt-10 rounded-2xl border bg-card p-6 shadow-card">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-secondary-foreground">
                <Building2 className="size-5" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Organisation</p>
                <p className="font-semibold">No organisation yet</p>
                <p className="text-sm text-muted-foreground">
                  An organisation holds the team, events and elections. A person can belong to more than one.
                </p>
              </div>
            </div>
            <Button variant="outline" disabled>
              <Plus /> Create organisation
            </Button>
          </div>
        </section>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Link
            to="/app/events"
            className="group rounded-2xl border bg-card p-8 shadow-card transition-colors hover:border-primary"
          >
            <div className="flex items-center justify-between">
              <div className="grid size-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                <CalendarDays className="size-6" />
              </div>
              <Badge variant="secondary">Layout ready</Badge>
            </div>
            <h2 className="mt-6 text-xl font-semibold">Event Management</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Events, registrations, tickets, check-in, planning and finances.
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
              Open workspace <ArrowRight className="size-4" />
            </span>
          </Link>
          <Link
            to="/app/voting"
            className="group rounded-2xl border bg-card p-8 shadow-card transition-colors hover:border-violet"
          >
            <div className="flex items-center justify-between">
              <div className="grid size-12 place-items-center rounded-xl bg-violet text-primary-foreground">
                <Vote className="size-6" />
              </div>
              <Badge className="border-transparent bg-violet-soft text-violet">Coming soon</Badge>
            </div>
            <h2 className="mt-6 text-xl font-semibold">Voting and Elections</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Candidates, voter rolls, secret ballots, results and audits.
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-violet">
              Preview workspace <ArrowRight className="size-4" />
            </span>
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { icon: UserRound, title: "Profile and account", section: "profile" as const },
            { icon: Bell, title: "Notifications", section: "notifications" as const },
            { icon: CreditCard, title: "Subscription", section: "subscription" as const },
          ].map((item) => (
            <Link
              key={item.section}
              to="/app/account/$section"
              params={{ section: item.section }}
              className="flex min-h-16 items-center gap-3 rounded-xl border bg-card p-4 hover:border-primary"
            >
              <item.icon className="size-4 text-muted-foreground" />
              <span className="text-sm font-medium">{item.title}</span>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-xs text-muted-foreground">
          Platform administration shell:{" "}
          <Link to="/admin" className="font-medium text-primary">
            Super Admin
          </Link>
          . It is not access-protected yet.
        </p>
      </main>
    </div>
  );
}
