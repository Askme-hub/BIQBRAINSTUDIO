import { createFileRoute, notFound } from "@tanstack/react-router";
import { AccountFrame } from "@/components/account/AccountFrame";
import { EmptyState } from "@/components/common/EmptyState";
import { PageHeader } from "@/components/common/PageHeader";
import { accountSections } from "@/config/navigation";

export const Route = createFileRoute("/app/account/$section")({
  loader: ({ params }) => {
    const section = accountSections.find((item) => item.slug === params.section);
    if (!section) throw notFound();
    return { slug: section.slug };
  },
  head: ({ loaderData }) => {
    const section = accountSections.find((item) => item.slug === loaderData?.slug);
    return {
      meta: [
        { title: `${section?.title ?? "Account"} — BIQ Brain Studios` },
        { name: "description", content: section?.description ?? "Account area." },
        { name: "robots", content: "noindex" },
      ],
    };
  },
  component: AccountSectionPage,
});

function AccountSectionPage() {
  const { slug } = Route.useLoaderData();
  const section = accountSections.find((item) => item.slug === slug)!;
  return (
    <AccountFrame>
      <div className="space-y-8">
        <PageHeader title={section.title} description={section.description} />
        <EmptyState icon={section.icon} title={section.emptyTitle} description={section.emptyDescription} />
      </div>
    </AccountFrame>
  );
}
