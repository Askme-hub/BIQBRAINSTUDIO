import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import type { ReactNode } from "react";
import { Logo } from "@/components/brand/Logo";
import { AccountMenu } from "@/components/site/AccountMenu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const nav = [
  { to: "/discover", label: "Discover Events" },
  { to: "/voting", label: "Voting & Elections" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                activeProps={{ className: "rounded-md px-3 py-2 text-sm font-medium text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-2 lg:flex">
            <AccountMenu />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="mt-8 flex flex-col gap-1">
                {nav.map((item) => (
                  <Link key={item.to} to={item.to} className="rounded-md px-3 py-3 text-sm hover:bg-muted">
                    {item.label}
                  </Link>
                ))}
                <Link to="/help" className="rounded-md px-3 py-3 text-sm hover:bg-muted">
                  Help Centre
                </Link>
                <div className="mt-4 px-3">
                  <AccountMenu stacked />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

function SiteFooter() {
  const cols = [
    {
      title: "Products",
      links: [
        { to: "/discover", label: "Event Management" },
        { to: "/voting", label: "Voting & Elections" },
        { to: "/pricing", label: "Pricing" },
      ],
    },
    {
      title: "Company",
      links: [
        { to: "/about", label: "About us" },
        { to: "/contact", label: "Contact" },
        { to: "/help", label: "Help Centre" },
      ],
    },
    {
      title: "Account",
      links: [
        { to: "/login", label: "Log in" },
        { to: "/register", label: "Create account" },
        { to: "/app", label: "Workspaces" },
      ],
    },
  ] as const;

  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <Logo inverted />
          <p className="mt-4 max-w-xs text-sm text-navy-foreground/65">
            Event management and online elections for organisations across Ghana. Built in Accra.
          </p>
        </div>
        {cols.map((col) => (
          <div key={col.title}>
            <p className="text-sm font-semibold">{col.title}</p>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-navy-foreground/65 hover:text-navy-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-navy-foreground/55 sm:flex-row sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} BIQ Brain Studios. All rights reserved.</p>
          <p>Prices in Ghanaian Cedi (GHS) · Africa/Accra</p>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="grid-fade absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-sidebar-primary">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-navy-foreground/75">{description}</p>
      </div>
    </section>
  );
}
