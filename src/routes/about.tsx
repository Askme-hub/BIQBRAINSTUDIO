import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About us — BIQ Brain Studios" },
      {
        name: "description",
        content: "BIQ Brain Studios builds event and election tools for organisations in Ghana.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About us"
        title="A Ghanaian platform for gatherings and elections"
        description="BIQ Brain Studios is being built so churches, schools, associations, businesses and event teams can run public programmes without mixing those jobs into one crowded dashboard."
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Two products",
              text: "Event management comes first. Online voting is a separate workspace that shares accounts, organisations and billing later.",
            },
            {
              title: "Ghana first",
              text: "Cedi pricing, Mobile Money, Ghanaian phone numbers, Africa/Accra time and WhatsApp sharing are part of the design from the start.",
            },
            {
              title: "Honest about readiness",
              text: "Pages that are not backed by a database say so. We do not show sample attendees, fake payments or invented election results.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
        <Link to="/contact" className="mt-12 inline-flex text-sm font-medium text-primary">
          Get in touch
        </Link>
      </div>
    </SiteLayout>
  );
}
