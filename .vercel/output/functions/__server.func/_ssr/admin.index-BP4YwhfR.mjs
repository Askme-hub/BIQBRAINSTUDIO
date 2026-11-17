import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { m as ShieldAlert } from "../_libs/lucide-react.mjs";
import { o as adminSections } from "./router-JG6VMa2E.mjs";
import { t as PageHeader } from "./PageHeader-eE-RKOIR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.index-BP4YwhfR.js
var import_jsx_runtime = require_jsx_runtime();
function AdminOverview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Platform overview",
				description: "Tenants, payments and support will be monitored here. Every figure is blank because no platform data is connected."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3 rounded-xl border border-destructive/30 bg-card p-4 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-5 shrink-0 text-destructive" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Anyone who can open this URL can see the shell. That is temporary. Production must reject visitors who are not platform administrators." })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: adminSections.slice(0, 8).map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border bg-card p-5 shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: section.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(section.icon, { className: "size-4 text-muted-foreground" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-display text-2xl font-semibold text-muted-foreground",
						children: "—"
					})]
				}, section.slug))
			})
		]
	});
}
//#endregion
export { AdminOverview as component };
