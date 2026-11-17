import { createFileRoute, Outlet } from "@tanstack/react-router";
import { WorkspaceShell } from "@/components/workspace/WorkspaceShell";
import { eventSections, overviewIcon } from "@/config/navigation";

export const Route = createFileRoute("/app/events")({
  component: EventsLayout,
});

function EventsLayout() {
  const groups = [...new Set(eventSections.map((section) => section.group).filter(Boolean))] as string[];
  return (
    <WorkspaceShell
      name="Event Management"
      tag="Events workspace"
      notice="This workspace is a shell. Lists stay empty until events are stored for a real organisation."
      groups={[
        {
          items: [{ kind: "events-home", title: "Overview", icon: overviewIcon }],
        },
        ...groups.map((label) => ({
          label,
          items: eventSections
            .filter((section) => section.group === label)
            .map((section) => ({
              kind: "event" as const,
              title: section.title,
              icon: section.icon,
              section: section.slug,
            })),
        })),
      ]}
    >
      <Outlet />
    </WorkspaceShell>
  );
}
