import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHeader-eE-RKOIR.js
var import_jsx_runtime = require_jsx_runtime();
function PageHeader({ title, description, actions }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-end sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-semibold",
			children: title
		}), description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 max-w-2xl text-sm text-muted-foreground",
			children: description
		})] }), actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-2",
			children: actions
		})]
	});
}
function SectionHeading({ eyebrow, title, description, center = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: center ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-widest text-primary",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-3xl font-semibold sm:text-4xl",
				children: title
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base text-muted-foreground",
				children: description
			})
		]
	});
}
//#endregion
export { SectionHeading as n, PageHeader as t };
