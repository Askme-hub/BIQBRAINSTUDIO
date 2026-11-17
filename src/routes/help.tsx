import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Help Centre — BIQ Brain Studios" },
      { name: "description", content: "Help topics for organisers and attendees. Guides are not published yet." },
    ],
  }),
  component: HelpPage,
});

const topics = [
  { title: "Getting started", text: "Creating an organisation and your first event." },
  { title: "Tickets and payments", text: "GHS prices, Mobile Money and when a ticket is issued." },
  { title: "Check-in on the day", text: "Scanning QR tickets at the entrance." },
];

function HelpPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Help Centre"
        title="Guides will follow the product"
        description="Articles are not written yet. The topics below are the ones we will cover first."
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {topics.map((topic) => (
            <div key={topic.title} className="rounded-xl border bg-card p-6 shadow-card">
              <BookOpen className="size-5 text-primary" />
              <h3 className="mt-4 font-semibold">{topic.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{topic.text}</p>
              <p className="mt-4 text-xs font-medium text-muted-foreground">No articles yet</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted-foreground">
          Need a person?{" "}
          <Link to="/contact" className="font-medium text-primary">
            Contact us
          </Link>
          .
        </p>
      </div>
    </SiteLayout>
  );
}
