import { createFileRoute, Outlet } from "@tanstack/react-router";
import { WorkspaceShell } from "@/components/workspace/WorkspaceShell";
import { adminSections, overviewIcon } from "@/config/navigation";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

function AdminLayout() {
  return (
    <WorkspaceShell
      name="Super Admin"
      tag="Platform administration"
      notice="This shell is not protected. Before launch it must be limited to platform administrators, checked on the server, with MFA for privileged accounts."
      groups={[
        { items: [{ kind: "admin-home", title: "Overview", icon: overviewIcon }] },
        {
          label: "Platform",
          items: adminSections.map((section) => ({
            kind: "admin" as const,
            title: section.title,
            icon: section.icon,
            section: section.slug,
          })),
        },
      ]}
    >
      <Outlet />
    </WorkspaceShell>
  );
}
