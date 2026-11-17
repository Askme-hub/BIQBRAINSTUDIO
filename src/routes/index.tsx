import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CalendarDays,
  Church,
  GraduationCap,
  Landmark,
  Lock,
  Megaphone,
  MessageCircle,
  QrCode,
  ShieldCheck,
  Smartphone,
  Ticket,
  UserRound,
  Users,
  Vote,
  Wallet,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/common/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BIQ Brain Studios — Events and elections in Ghana" },
      {
        name: "description",
        content:
          "Plan events, sell tickets in GHS, check in guests by QR code and prepare for online elections. Built for churches, schools, associations and businesses in Ghana.",
      },
    ],
  }),
  component: Home,
});

const eventFeatures = [
  { icon: CalendarDays, title: "Event pages", text: "Publish a page for every event and share it on WhatsApp." },
  { icon: Ticket, title: "Tickets in GHS", text: "Offer free or paid tickets with Mobile Money and card payments." },
  { icon: QrCode, title: "QR check-in", text: "Scan tickets at the gate from a phone. No extra hardware." },
  { icon: Wallet, title: "Budgets and expenses", text: "Plan the budget and record every cedi spent." },
  { icon: Users, title: "Teams and tasks", text: "Invite the committee, assign work and keep the date." },
  { icon: Megaphone, title: "Announcements", text: "Reach attendees by email and SMS before and after the day." },
];

const audiences = [
  { icon: UserRound, title: "Individuals", text: "Weddings, birthdays, funerals and private gatherings." },
  { icon: Church, title: "Churches", text: "Conventions, harvests, retreats and leadership elections." },
  { icon: GraduationCap, title: "Schools", text: "Speech days, reunions and SRC elections." },
  { icon: Landmark, title: "Associations", text: "AGMs, member elections and award nights." },
  { icon: Building2, title: "Businesses", text: "Conferences, launches and staff awards." },
];

function Home() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <div className="grid-fade absolute inset-0" />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-2 lg:pt-24">
          <div>
            <Badge variant="outline" className="border-navy-foreground/20 bg-transparent text-navy-foreground">
              Made for Ghana · Prices in GHS
            </Badge>
            <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">
              Run events and elections your members can trust.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-navy-foreground/75">
              BIQ Brain Studios keeps event planning and online voting in two separate workspaces, under one
              organisation account.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link to="/register">
                  Create a free account <ArrowRight />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-navy-foreground/25 bg-transparent text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground"
                asChild
              >
                <Link to="/discover">Discover events</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-navy-foreground/65">
              <span className="flex items-center gap-2">
                <Smartphone className="size-4" /> Mobile Money and card
              </span>
              <span className="flex items-center gap-2">
                <MessageCircle className="size-4" /> WhatsApp sharing
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="size-4" /> Role-based access
              </span>
            </div>
          </div>
          <HeroPreview />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          center
          eyebrow="Two products, one platform"
          title="Separate workspaces, built for the job"
          description="The events team and the electoral committee each get their own dashboard, navigation and permissions."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <ProductCard
            icon={CalendarDays}
            tone="primary"
            label="First product"
            title="Event Management"
            text="From the first planning meeting to the post-event report."
            points={[
              "Registrations and attendee lists",
              "Ticket sales and QR check-in",
              "Schedule, tasks, vendors and sponsors",
              "Budget and expense tracking",
            ]}
            to="/discover"
            cta="Explore events"
          />
          <ProductCard
            icon={Vote}
            tone="violet"
            label="Coming soon"
            title="Online Voting and Elections"
            text="Private elections, public polls and award voting with an audit trail."
            points={[
              "Candidate and voter roll management",
              "Secret ballots kept apart from voter identity",
              "Live turnout monitoring",
              "Results and audit reports",
            ]}
            to="/voting"
            cta="Learn about voting"
          />
        </div>
      </section>

      <section className="border-y bg-card">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="Event Management" title="What the events workspace will cover" />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {eventFeatures.map((feature) => (
              <div key={feature.title} className="bg-card p-7">
                <feature.icon className="size-5 text-primary" />
                <h3 className="mt-5 font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="Who it is for" title="For the gatherings Ghana actually holds" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {audiences.map((audience) => (
            <div key={audience.title} className="rounded-xl border bg-card p-6 shadow-card">
              <div className="grid size-10 place-items-center rounded-lg bg-accent text-accent-foreground">
                <audience.icon className="size-5" />
              </div>
              <h3 className="mt-5 font-semibold">{audience.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{audience.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grid gap-10 rounded-3xl bg-navy p-8 text-navy-foreground sm:p-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sidebar-primary">Security by design</p>
            <h2 className="mt-3 text-3xl font-semibold">Each organisation only sees its own records</h2>
            <p className="mt-4 text-navy-foreground/75">
              Access rules will be enforced on the server, not only hidden in the menu. A ticket is issued only
              after a payment provider confirms the payment. The platform is not a certified election system and
              does not claim to be fraud-proof.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Lock, title: "Organisation isolation", text: "Private records stay inside their organisation." },
              { icon: ShieldCheck, title: "Role-based access", text: "Owners, finance, check-in staff and more." },
              { icon: Vote, title: "Ballot secrecy", text: "Voter identity is stored apart from choices." },
              { icon: BarChart3, title: "Audit trails", text: "Sensitive actions are logged for review." },
            ].map((item) => (
              <li key={item.title} className="rounded-xl border border-navy-foreground/10 bg-navy-foreground/5 p-5">
                <item.icon className="size-5 text-sidebar-primary" />
                <p className="mt-3 font-medium">{item.title}</p>
                <p className="mt-1 text-sm text-navy-foreground/65">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold">Planning something soon?</h2>
            <p className="mt-2 text-muted-foreground">
              Look through the workspaces. Accounts and live events come in the next phase.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link to="/app">Open workspaces</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/pricing">See pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ProductCard({
  icon: Icon,
  tone,
  label,
  title,
  text,
  points,
  to,
  cta,
}: {
  icon: typeof Vote;
  tone: "primary" | "violet";
  label: string;
  title: string;
  text: string;
  points: string[];
  to: "/discover" | "/voting";
  cta: string;
}) {
  return (
    <div className="flex flex-col rounded-2xl border bg-card p-8 shadow-card">
      <div className="flex items-center justify-between gap-3">
        <div
          className={`grid size-11 place-items-center rounded-xl text-primary-foreground ${tone === "primary" ? "bg-primary" : "bg-violet"}`}
        >
          <Icon className="size-5" />
        </div>
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${tone === "primary" ? "bg-accent text-accent-foreground" : "bg-violet-soft text-violet"}`}
        >
          {label}
        </span>
      </div>
      <h3 className="mt-6 text-2xl font-semibold">{title}</h3>
      <p className="mt-2 text-muted-foreground">{text}</p>
      <ul className="mt-6 space-y-2.5 text-sm">
        {points.map((point) => (
          <li key={point} className="flex gap-2.5">
            <span className={`mt-2 size-1.5 shrink-0 rounded-full ${tone === "primary" ? "bg-primary" : "bg-violet"}`} />
            {point}
          </li>
        ))}
      </ul>
      <Link to={to} className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
        {cta} <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}

function HeroPreview() {
  return (
    <div className="relative hidden lg:block" aria-hidden>
      <div className="rounded-2xl border border-navy-foreground/10 bg-navy-soft p-5 shadow-elevated">
        <div className="flex items-center justify-between border-b border-navy-foreground/10 pb-4">
          <p className="font-display text-sm font-semibold">Event workspace</p>
          <span className="rounded-full bg-primary/20 px-2.5 py-0.5 text-xs">Overview</span>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { label: "Registrations", icon: Users },
            { label: "Tickets sold", icon: Ticket },
            { label: "Checked in", icon: QrCode },
          ].map((item) => (
            <div key={item.label} className="rounded-xl bg-navy-foreground/5 p-4">
              <item.icon className="size-4 text-sidebar-primary" />
              <p className="mt-3 text-xs text-navy-foreground/65">{item.label}</p>
              <p className="mt-2 font-display text-lg text-navy-foreground/40">—</p>
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-3 rounded-xl bg-navy-foreground/5 p-4">
          {["Schedule", "Tasks", "Budget (GHS)", "Sponsors"].map((row) => (
            <div key={row} className="flex items-center justify-between text-xs">
              <span className="text-navy-foreground/75">{row}</span>
              <span className="text-navy-foreground/45">Empty</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-6 -left-6 w-56 rounded-xl border border-navy-foreground/10 bg-navy-soft p-4 shadow-elevated">
        <div className="flex items-center gap-2">
          <Vote className="size-4 text-violet" />
          <p className="text-xs font-medium">Voting workspace</p>
        </div>
        <p className="mt-2 text-xs text-navy-foreground/65">Coming soon · Separate dashboard</p>
      </div>
    </div>
  );
}
