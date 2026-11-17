import { createFileRoute, notFound } from "@tanstack/react-router";
import { EmptyState } from "@/components/common/EmptyState";
import { PageHeader } from "@/components/common/PageHeader";
import { adminSections } from "@/config/navigation";

export const Route = createFileRoute("/admin/$section")({
  loader: ({ params }) => {
    const section = adminSections.find((item) => item.slug === params.section);
    if (!section) throw notFound();
    return { slug: section.slug };
  },
  head: ({ loaderData }) => {
    const section = adminSections.find((item) => item.slug === loaderData?.slug);
    return {
      meta: [
        { title: `${section?.title ?? "Super Admin"} — BIQ Brain Studios` },
        { name: "description", content: section?.description ?? "Platform administration." },
        { name: "robots", content: "noindex" },
      ],
    };
  },
  component: AdminSectionPage,
});

function AdminSectionPage() {
  const { slug } = Route.useLoaderData();
  const section = adminSections.find((item) => item.slug === slug)!;
  return (
    <div className="space-y-8">
      <PageHeader title={section.title} description={section.description} />
      <EmptyState icon={section.icon} title={section.emptyTitle} description={section.emptyDescription} />
    </div>
  );
}
