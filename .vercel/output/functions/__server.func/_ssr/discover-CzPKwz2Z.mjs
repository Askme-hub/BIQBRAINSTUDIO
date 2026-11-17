import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-4MCefiQz.mjs";
import { z as CalendarSearch } from "../_libs/lucide-react.mjs";
import { n as SiteLayout, t as PageHero } from "./SiteLayout-BhLDr0Ar.mjs";
import { t as EmptyState } from "./EmptyState-BvjjbyAv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/discover-CzPKwz2Z.js
var import_jsx_runtime = require_jsx_runtime();
function DiscoverPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Discover",
		title: "Events happening across Ghana",
		description: "Public events will be listed here with dates, venues and ticket prices in Ghanaian Cedi. Nothing is published yet."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			icon: CalendarSearch,
			title: "No public events published yet",
			description: "When an organisation publishes an event, it will show up here. This page does not use sample events.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/app/events",
					children: "Open the events workspace"
				})
			})
		})
	})] });
}
//#endregion
export { DiscoverPage as component };
