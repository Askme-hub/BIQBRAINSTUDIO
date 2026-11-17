import { createFileRoute, notFound } from "@tanstack/react-router";
import { EmptyState } from "@/components/common/EmptyState";
import { PageHeader } from "@/components/common/PageHeader";
import { eventSections } from "@/config/navigation";

export const Route = createFileRoute("/app/events/$section")({
  loader: ({ params }) => {
    const section = eventSections.find((item) => item.slug === params.section);
    if (!section) throw notFound();
    return { slug: section.slug };
  },
  head: ({ loaderData }) => {
    const section = eventSections.find((item) => item.slug === loaderData?.slug);
    return {
      meta: [
        { title: `${section?.title ?? "Events"} — BIQ Brain Studios` },
        { name: "description", content: section?.description ?? "Event Management workspace." },
        { name: "robots", content: "noindex" },
      ],
    };
  },
  component: EventSectionPage,
});

function EventSectionPage() {
  const { slug } = Route.useLoaderData();
  const section = eventSections.find((item) => item.slug === slug)!;
  return (
    <div className="space-y-8">
      <PageHeader title={section.title} description={section.description} />
      <EmptyState icon={section.icon} title={section.emptyTitle} description={section.emptyDescription} />
    </div>
  );
}
