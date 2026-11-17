import { t as cn } from "./utils-C_uf36nf.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Logo } from "./Logo-G4Ts_zXl.mjs";
import { a as accountSections, r as Route$2 } from "./router-JG6VMa2E.mjs";
import { t as EmptyState } from "./EmptyState-BvjjbyAv.mjs";
import { t as PageHeader } from "./PageHeader-eE-RKOIR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.account._section-ZZWIYsTP.js
var import_jsx_runtime = require_jsx_runtime();
function AccountFrame({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/app",
					className: "text-sm font-medium text-primary",
					children: "Workspaces"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[220px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible",
				children: accountSections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/app/account/$section",
					params: { section: section.slug },
					className: "flex min-h-11 shrink-0 items-center gap-2 rounded-lg px-3 text-sm text-muted-foreground hover:bg-muted hover:text-foreground",
					activeProps: { className: cn("flex min-h-11 shrink-0 items-center gap-2 rounded-lg bg-accent px-3 text-sm font-medium text-accent-foreground") },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(section.icon, { className: "size-4" }), section.title]
				}, section.slug))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children })]
		})]
	});
}
function AccountSectionPage() {
	const { slug } = Route$2.useLoaderData();
	const section = accountSections.find((item) => item.slug === slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: section.title,
			description: section.description
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			icon: section.icon,
			title: section.emptyTitle,
			description: section.emptyDescription
		})]
	}) });
}
//#endregion
export { AccountSectionPage as component };
