import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-4MCefiQz.mjs";
import { L as Check } from "../_libs/lucide-react.mjs";
import { n as SiteLayout, t as PageHero } from "./SiteLayout-BhLDr0Ar.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pricing-Bmg3e4gP.js
var import_jsx_runtime = require_jsx_runtime();
var plans = [
	{
		name: "Starter",
		detail: "For individuals and small gatherings.",
		price: "Free",
		features: [
			"Free events",
			"Registrations and attendee list",
			"QR check-in"
		],
		highlight: false
	},
	{
		name: "Organisation",
		detail: "For churches, schools and associations.",
		price: "Price to be set",
		features: [
			"Paid ticketing in GHS",
			"Team roles and tasks",
			"Budget, vendors and sponsors",
			"Email and SMS announcements"
		],
		highlight: true
	},
	{
		name: "Enterprise",
		detail: "For large organisations and agencies.",
		price: "Custom",
		features: [
			"Several organisations",
			"Advanced reports",
			"Priority support",
			"Elections, when available"
		],
		highlight: false
	}
];
function PricingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Pricing",
		title: "Plans in Ghanaian Cedi",
		description: "Final prices are not set. The tiers below show what each plan is meant to include. Nothing on this page charges a card or Mobile Money wallet."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 lg:grid-cols-3",
			children: plans.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex flex-col rounded-2xl border bg-card p-8 ${plan.highlight ? "border-primary shadow-elevated" : "shadow-card"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-semibold",
						children: plan.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: plan.detail
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 font-display text-3xl font-semibold",
						children: plan.price
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 flex-1 space-y-2.5 text-sm",
						children: plan.features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-primary" }), feature]
						}, feature))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-8",
						variant: plan.highlight ? "default" : "outline",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: "Talk to us"
						})
					})
				]
			}, plan.name))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-8 text-center text-xs text-muted-foreground",
			children: "Published prices will be in GHS. Payment methods planned: Mobile Money and card, through Paystack or Hubtel."
		})]
	})] });
}
//#endregion
export { PricingPage as component };
