import { createFileRoute, Link } from "@tanstack/react-router";
import { BookUser, Lock, ShieldCheck, UserSquare2 } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/voting")({
  head: () => ({
    meta: [
      { title: "Voting and elections — BIQ Brain Studios" },
      {
        name: "description",
        content:
          "Online voting for school, church, association and award elections. The voting product is not live yet.",
      },
    ],
  }),
  component: VotingPage,
});

const features = [
  { icon: UserSquare2, title: "Candidate management", text: "Positions, profiles and photos." },
  { icon: BookUser, title: "Voter rolls", text: "Eligible voters and issued credentials." },
  { icon: Lock, title: "Secret ballots", text: "Choices stored apart from who voted." },
  { icon: ShieldCheck, title: "Audit logs", text: "Administrative actions recorded for review." },
];

function VotingPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Voting and elections · Coming soon"
        title="Elections your members can follow"
        description="A dedicated workspace for private organisational elections, public polls and award voting. It is not open for ballots yet."
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-xl border bg-card p-6 shadow-card">
              <div className="grid size-10 place-items-center rounded-lg bg-violet-soft text-violet">
                <feature.icon className="size-5" />
              </div>
              <h3 className="mt-5 font-semibold">{feature.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{feature.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-2xl border bg-card p-8 text-center shadow-card">
          <h2 className="text-xl font-semibold">Voting starts after Event Management</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
            The same organisation will carry over. Ballot design keeps voter identity separate from selections.
            Results will be counted on the server, never in the browser.
          </p>
          <Button className="mt-6" asChild>
            <Link to="/app/voting">Preview the voting workspace</Link>
          </Button>
        </div>
      </div>
    </SiteLayout>
  );
}
