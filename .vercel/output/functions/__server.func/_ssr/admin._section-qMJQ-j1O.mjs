import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as Route$6, o as adminSections } from "./router-JG6VMa2E.mjs";
import { t as EmptyState } from "./EmptyState-BvjjbyAv.mjs";
import { t as PageHeader } from "./PageHeader-eE-RKOIR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin._section-qMJQ-j1O.js
var import_jsx_runtime = require_jsx_runtime();
function AdminSectionPage() {
	const { slug } = Route$6.useLoaderData();
	const section = adminSections.find((item) => item.slug === slug);
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
export { AdminSectionPage as component };
