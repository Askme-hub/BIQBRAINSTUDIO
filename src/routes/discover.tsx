import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarSearch } from "lucide-react";
import { EmptyState } from "@/components/common/EmptyState";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/discover")({
  head: () => ({
    meta: [
      { title: "Discover events — BIQ Brain Studios" },
      {
        name: "description",
        content: "Public events from churches, schools, associations and businesses across Ghana.",
      },
    ],
  }),
  component: DiscoverPage,
});

function DiscoverPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Discover"
        title="Events happening across Ghana"
        description="Public events will be listed here with dates, venues and ticket prices in Ghanaian Cedi. Nothing is published yet."
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <EmptyState
          icon={CalendarSearch}
          title="No public events published yet"
          description="When an organisation publishes an event, it will show up here. This page does not use sample events."
          action={
            <Button asChild>
              <Link to="/app/events">Open the events workspace</Link>
            </Button>
          }
        />
      </div>
    </SiteLayout>
  );
}
