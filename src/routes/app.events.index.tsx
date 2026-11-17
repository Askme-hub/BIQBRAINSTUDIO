import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, ClipboardList, Plus, QrCode, Ticket } from "lucide-react";
import { EmptyState } from "@/components/common/EmptyState";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/app/events/")({
  head: () => ({
    meta: [
      { title: "Event overview — BIQ Brain Studios" },
      { name: "description", content: "Overview of an organisation's events. No live data yet." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: EventsOverview,
});

const kpis = [
  { label: "Upcoming events", icon: CalendarDays },
  { label: "Registrations", icon: ClipboardList },
  { label: "Tickets sold (GHS)", icon: Ticket },
  { label: "Checked in", icon: QrCode },
];

function EventsOverview() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Overview"
        description="A summary across this organisation's events. Figures stay blank until there is real activity."
        actions={
          <Button asChild>
            <Link to="/app/events/$section" params={{ section: "create" }}>
              <Plus /> Create event
            </Link>
          </Button>
        }
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((item) => (
          <div key={item.label} className="rounded-xl border bg-card p-5 shadow-card">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <item.icon className="size-4 text-muted-foreground" />
            </div>
            <p className="mt-3 font-display text-2xl font-semibold text-muted-foreground">—</p>
            <p className="mt-1 text-xs text-muted-foreground">No data yet</p>
          </div>
        ))}
      </div>
      <EmptyState
        icon={CalendarDays}
        title="No events to summarise"
        description="Create an event once storage is connected. This overview will not invent counts."
        action={
          <Button variant="outline" asChild>
            <Link to="/app/events/$section" params={{ section: "my-events" }}>
              Go to My Events
            </Link>
          </Button>
        }
      />
    </div>
  );
}
