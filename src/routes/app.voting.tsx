import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, BookUser, Lock, ShieldCheck, Trophy, UserSquare2 } from "lucide-react";
import { WorkspaceShell } from "@/components/workspace/WorkspaceShell";
import { Button } from "@/components/ui/button";
import { votingNav } from "@/config/navigation";

export const Route = createFileRoute("/app/voting")({
  head: () => ({
    meta: [
      { title: "Voting workspace — BIQ Brain Studios" },
      { name: "description", content: "Online voting workspace. The product is not live yet." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: VotingWorkspace,
});

const capabilities = [
  { icon: UserSquare2, title: "Candidate management", text: "Positions and candidate profiles." },
  { icon: BookUser, title: "Voter rolls", text: "Eligible voters and one-time credentials." },
  { icon: Lock, title: "Secret ballots", text: "Choices stored apart from voter identity." },
  { icon: Activity, title: "Live monitoring", text: "Turnout without revealing selections." },
  { icon: Trophy, title: "Results", text: "Counted on the server, published only when approved." },
  { icon: ShieldCheck, title: "Audit logs", text: "Administrative actions kept for review." },
];

function VotingWorkspace() {
  return (
    <WorkspaceShell
      name="Voting and Elections"
      tag="Coming soon"
      notice="Navigation is in place so the voting product has its own home. Ballots cannot be created or counted yet."
      groups={[
        {
          items: votingNav.map((item, index) => ({
            kind: "static" as const,
            title: item.title,
            icon: item.icon,
            current: index === 0,
          })),
        },
      ]}
    >
      <div className="relative overflow-hidden rounded-2xl bg-navy p-8 text-navy-foreground sm:p-12">
        <div className="grid-fade absolute inset-0" />
        <div className="relative max-w-2xl">
          <span className="rounded-full bg-violet-soft px-3 py-1 text-xs font-medium text-violet">Coming soon</span>
          <h1 className="mt-5 text-3xl font-semibold sm:text-4xl">Online voting, in its own workspace</h1>
          <p className="mt-4 text-navy-foreground/75">
            School, church, association and award elections will run here, with roles for election managers and
            returning officers. This is not a live election system.
          </p>
          <Button className="mt-8" variant="secondary" asChild>
            <Link to="/app/events">Continue with Event Management</Link>
          </Button>
        </div>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((item) => (
          <div key={item.title} className="rounded-xl border bg-card p-6 shadow-card">
            <div className="grid size-10 place-items-center rounded-lg bg-violet-soft text-violet">
              <item.icon className="size-5" />
            </div>
            <h3 className="mt-4 font-semibold">{item.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
    </WorkspaceShell>
  );
}
