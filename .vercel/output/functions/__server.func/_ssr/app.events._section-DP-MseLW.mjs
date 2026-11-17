import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as Route, s as eventSections } from "./router-JG6VMa2E.mjs";
import { t as EmptyState } from "./EmptyState-BvjjbyAv.mjs";
import { t as PageHeader } from "./PageHeader-eE-RKOIR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.events._section-DP-MseLW.js
var import_jsx_runtime = require_jsx_runtime();
function EventSectionPage() {
	const { slug } = Route.useLoaderData();
	const section = eventSections.find((item) => item.slug === slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: section.title,
			description: section.description
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			icon: section.icon,
			title: section.emptyTitle,
			description: section.emptyDescription
		})]
	});
}
//#endregion
export { EventSectionPage as component };
