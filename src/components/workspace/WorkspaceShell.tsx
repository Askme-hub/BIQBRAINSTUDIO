import { Link } from "@tanstack/react-router";
import { ArrowLeftRight, Bell, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { LogoMark } from "@/components/brand/Logo";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export type ShellItem =
  | { kind: "events-home"; title: string; icon: LucideIcon }
  | { kind: "event"; title: string; icon: LucideIcon; section: string }
  | { kind: "admin-home"; title: string; icon: LucideIcon }
  | { kind: "admin"; title: string; icon: LucideIcon; section: string }
  | { kind: "static"; title: string; icon: LucideIcon; current?: boolean };

const itemClass =
  "flex min-h-11 w-full items-center gap-2.5 rounded-lg px-3 text-left text-sm text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground";
const activeClass = "bg-sidebar-accent font-medium text-sidebar-accent-foreground";

function ShellLink({ item, onNavigate }: { item: ShellItem; onNavigate: () => void }) {
  if (item.kind === "static") {
    return (
      <span className={cn(itemClass, item.current ? activeClass : "opacity-60")} aria-current={item.current ? "page" : undefined}>
        <item.icon className="size-4 shrink-0" />
        <span className="truncate">{item.title}</span>
      </span>
    );
  }

  if (item.kind === "events-home") {
    return (
      <Link
        to="/app/events"
        activeOptions={{ exact: true }}
        onClick={onNavigate}
        className={itemClass}
        activeProps={{ className: cn(itemClass, activeClass) }}
      >
        <item.icon className="size-4 shrink-0" />
        <span className="truncate">{item.title}</span>
      </Link>
    );
  }

  if (item.kind === "event") {
    return (
      <Link
        to="/app/events/$section"
        params={{ section: item.section }}
        onClick={onNavigate}
        className={itemClass}
        activeProps={{ className: cn(itemClass, activeClass) }}
      >
        <item.icon className="size-4 shrink-0" />
        <span className="truncate">{item.title}</span>
      </Link>
    );
  }

  if (item.kind === "admin-home") {
    return (
      <Link
        to="/admin"
        activeOptions={{ exact: true }}
        onClick={onNavigate}
        className={itemClass}
        activeProps={{ className: cn(itemClass, activeClass) }}
      >
        <item.icon className="size-4 shrink-0" />
        <span className="truncate">{item.title}</span>
      </Link>
    );
  }

  return (
    <Link
      to="/admin/$section"
      params={{ section: item.section }}
      onClick={onNavigate}
      className={itemClass}
      activeProps={{ className: cn(itemClass, activeClass) }}
    >
      <item.icon className="size-4 shrink-0" />
      <span className="truncate">{item.title}</span>
    </Link>
  );
}

function SidebarBody({
  name,
  tag,
  groups,
  onNavigate,
}: {
  name: string;
  tag: string;
  groups: { label?: string; items: ShellItem[] }[];
  onNavigate: () => void;
}) {
  return (
    <>
      <div className="flex items-center gap-2.5 border-b border-sidebar-border px-4 py-4">
        <LogoMark />
        <div className="min-w-0">
          <p className="truncate font-display text-sm font-semibold text-sidebar-accent-foreground">{name}</p>
          <p className="text-xs text-sidebar-foreground/60">{tag}</p>
        </div>
      </div>
      <nav className="flex-1 space-y-5 overflow-y-auto px-3 py-4">
        {groups.map((group) => (
          <div key={group.label ?? "root"}>
            {group.label && (
              <p className="px-3 pb-2 text-xs font-medium uppercase tracking-widest text-sidebar-foreground/45">
                {group.label}
              </p>
            )}
            <div className="space-y-0.5">
              {group.items.map((item) => (
                <ShellLink
                  key={`${item.kind}-${item.title}`}
                  item={item}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          </div>
        ))}
      </nav>
      <div className="border-t border-sidebar-border p-3">
        <Link
          to="/app"
          onClick={onNavigate}
          className="flex min-h-11 items-center gap-2.5 rounded-lg px-3 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        >
          <ArrowLeftRight className="size-4 shrink-0" />
          Switch workspace
        </Link>
      </div>
    </>
  );
}

export function WorkspaceShell({
  name,
  tag,
  groups,
  children,
  notice,
  organisationLabel = "No organisation selected",
}: {
  name: string;
  tag: string;
  groups: { label?: string; items: ShellItem[] }[];
  children: ReactNode;
  notice?: string;
  organisationLabel?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col bg-sidebar text-sidebar-foreground lg:flex">
        <SidebarBody name={name} tag={tag} groups={groups} onNavigate={() => undefined} />
      </aside>
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-navy/70"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <aside className="relative flex h-full w-72 flex-col bg-sidebar text-sidebar-foreground">
            <button
              type="button"
              className="absolute right-3 top-3 z-10 rounded-md p-2 text-sidebar-foreground"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X className="size-4" />
            </button>
            <SidebarBody name={name} tag={tag} groups={groups} onNavigate={() => setOpen(false)} />
          </aside>
        </div>
      )}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b bg-background/90 px-4 backdrop-blur">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="grid size-11 place-items-center rounded-lg hover:bg-muted lg:hidden"
              aria-label="Open workspace menu"
              onClick={() => setOpen(true)}
            >
              <Menu className="size-4" />
            </button>
            <Badge variant="secondary" className="hidden sm:inline-flex">
              {organisationLabel}
            </Badge>
          </div>
          <Link
            to="/app/account/$section"
            params={{ section: "notifications" }}
            className="grid size-11 place-items-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
            aria-label="Notifications"
          >
            <Bell className="size-4" />
          </Link>
        </header>
        <div className="mx-auto w-full max-w-6xl flex-1 p-4 sm:p-8">
          {notice && (
            <p className="mb-6 rounded-lg border bg-muted px-4 py-3 text-sm text-muted-foreground">{notice}</p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
