import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Logo } from "@/components/brand/Logo";
import { accountSections } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function AccountFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Logo />
          <Link to="/app" className="text-sm font-medium text-primary">
            Workspaces
          </Link>
        </div>
      </header>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[220px_1fr]">
        <nav className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
          {accountSections.map((section) => (
            <Link
              key={section.slug}
              to="/app/account/$section"
              params={{ section: section.slug }}
              className="flex min-h-11 shrink-0 items-center gap-2 rounded-lg px-3 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              activeProps={{
                className: cn(
                  "flex min-h-11 shrink-0 items-center gap-2 rounded-lg bg-accent px-3 text-sm font-medium text-accent-foreground",
                ),
              }}
            >
              <section.icon className="size-4" />
              {section.title}
            </Link>
          ))}
        </nav>
        <div>{children}</div>
      </div>
    </div>
  );
}
