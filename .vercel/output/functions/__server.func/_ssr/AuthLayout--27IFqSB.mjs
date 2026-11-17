import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Logo } from "./Logo-G4Ts_zXl.mjs";
import { F as CircleCheck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AuthLayout--27IFqSB.js
var import_jsx_runtime = require_jsx_runtime();
function AuthLayout({ title, description, children, footer }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-screen lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col px-6 py-8 sm:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex w-full max-w-sm flex-1 flex-col justify-center py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-semibold",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children
					}),
					footer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 text-center text-sm text-muted-foreground",
						children: footer
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative hidden overflow-hidden bg-navy text-navy-foreground lg:flex lg:flex-col lg:justify-end lg:p-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-fade absolute inset-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-md font-display text-3xl font-semibold leading-tight",
					children: "One account for your events and your elections."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-3 text-sm text-navy-foreground/75",
					children: [
						"Separate workspaces for events and voting",
						"Mobile Money and card payments in GHS",
						"Built for churches, schools, associations and businesses"
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-sidebar-primary" }), item]
					}, item))
				})]
			})]
		})]
	});
}
function AuthNotice() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-4 rounded-lg border bg-muted px-3 py-3 text-xs leading-relaxed text-muted-foreground",
		children: "Sign-in is not connected yet. These forms are the design for email and password accounts. They do not create a session or store a password."
	});
}
//#endregion
export { AuthNotice as n, AuthLayout as t };
