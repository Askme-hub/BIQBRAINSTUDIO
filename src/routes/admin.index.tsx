import { createFileRoute } from "@tanstack/react-router";
import { ShieldAlert } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { adminSections } from "@/config/navigation";

export const Route = createFileRoute("/admin/")({
  head: () => ({
    meta: [
      { title: "Super Admin — BIQ Brain Studios" },
      { name: "description", content: "Platform administration shell. Access control is not active." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminOverview,
});

function AdminOverview() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Platform overview"
        description="Tenants, payments and support will be monitored here. Every figure is blank because no platform data is connected."
      />
      <div className="flex gap-3 rounded-xl border border-destructive/30 bg-card p-4 text-sm">
        <ShieldAlert className="size-5 shrink-0 text-destructive" />
        <p>
          Anyone who can open this URL can see the shell. That is temporary. Production must reject visitors who
          are not platform administrators.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {adminSections.slice(0, 8).map((section) => (
          <div key={section.slug} className="rounded-xl border bg-card p-5 shadow-card">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{section.title}</p>
              <section.icon className="size-4 text-muted-foreground" />
            </div>
            <p className="mt-3 font-display text-2xl font-semibold text-muted-foreground">—</p>
          </div>
        ))}
      </div>
    </div>
  );
}
