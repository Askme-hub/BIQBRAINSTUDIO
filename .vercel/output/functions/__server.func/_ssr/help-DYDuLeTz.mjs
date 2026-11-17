import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { U as BookOpen } from "../_libs/lucide-react.mjs";
import { n as SiteLayout, t as PageHero } from "./SiteLayout-BhLDr0Ar.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/help-DYDuLeTz.js
var import_jsx_runtime = require_jsx_runtime();
var topics = [
	{
		title: "Getting started",
		text: "Creating an organisation and your first event."
	},
	{
		title: "Tickets and payments",
		text: "GHS prices, Mobile Money and when a ticket is issued."
	},
	{
		title: "Check-in on the day",
		text: "Scanning QR tickets at the entrance."
	}
];
function HelpPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Help Centre",
		title: "Guides will follow the product",
		description: "Articles are not written yet. The topics below are the ones we will cover first."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-3",
			children: topics.map((topic) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border bg-card p-6 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-5 text-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-semibold",
						children: topic.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: topic.text
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs font-medium text-muted-foreground",
						children: "No articles yet"
					})
				]
			}, topic.title))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-10 text-sm text-muted-foreground",
			children: [
				"Need a person?",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "font-medium text-primary",
					children: "Contact us"
				}),
				"."
			]
		})]
	})] });
}
//#endregion
export { HelpPage as component };
