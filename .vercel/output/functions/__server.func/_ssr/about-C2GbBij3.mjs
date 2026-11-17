import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as SiteLayout, t as PageHero } from "./SiteLayout-BhLDr0Ar.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-C2GbBij3.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "About us",
		title: "A Ghanaian platform for gatherings and elections",
		description: "BIQ Brain Studios is being built so churches, schools, associations, businesses and event teams can run public programmes without mixing those jobs into one crowded dashboard."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-10 md:grid-cols-3",
			children: [
				{
					title: "Two products",
					text: "Event management comes first. Online voting is a separate workspace that shares accounts, organisations and billing later."
				},
				{
					title: "Ghana first",
					text: "Cedi pricing, Mobile Money, Ghanaian phone numbers, Africa/Accra time and WhatsApp sharing are part of the design from the start."
				},
				{
					title: "Honest about readiness",
					text: "Pages that are not backed by a database say so. We do not show sample attendees, fake payments or invented election results."
				}
			].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-lg font-semibold",
				children: item.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: item.text
			})] }, item.title))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/contact",
			className: "mt-12 inline-flex text-sm font-medium text-primary",
			children: "Get in touch"
		})]
	})] });
}
//#endregion
export { AboutPage as component };
