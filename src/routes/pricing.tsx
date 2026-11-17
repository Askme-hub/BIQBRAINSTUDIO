import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    detail: "For individuals and small gatherings.",
    price: "Free",
    features: ["Free events", "Registrations and attendee list", "QR check-in"],
    highlight: false,
  },
  {
    name: "Organisation",
    detail: "For churches, schools and associations.",
    price: "Price to be set",
    features: ["Paid ticketing in GHS", "Team roles and tasks", "Budget, vendors and sponsors", "Email and SMS announcements"],
    highlight: true,
  },
  {
    name: "Enterprise",
    detail: "For large organisations and agencies.",
    price: "Custom",
    features: ["Several organisations", "Advanced reports", "Priority support", "Elections, when available"],
    highlight: false,
  },
];

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — BIQ Brain Studios" },
      {
        name: "description",
        content: "Planned plans in Ghanaian Cedi. Final prices are not published yet.",
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Pricing"
        title="Plans in Ghanaian Cedi"
        description="Final prices are not set. The tiers below show what each plan is meant to include. Nothing on this page charges a card or Mobile Money wallet."
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl border bg-card p-8 ${plan.highlight ? "border-primary shadow-elevated" : "shadow-card"}`}
            >
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.detail}</p>
              <p className="mt-6 font-display text-3xl font-semibold">{plan.price}</p>
              <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="mt-8" variant={plan.highlight ? "default" : "outline"} asChild>
                <Link to="/contact">Talk to us</Link>
              </Button>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Published prices will be in GHS. Payment methods planned: Mobile Money and card, through Paystack or Hubtel.
        </p>
      </div>
    </SiteLayout>
  );
}
