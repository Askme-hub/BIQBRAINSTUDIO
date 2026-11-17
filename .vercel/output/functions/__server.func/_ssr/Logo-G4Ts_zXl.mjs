import { t as cn } from "./utils-C_uf36nf.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Logo-G4Ts_zXl.js
var import_jsx_runtime = require_jsx_runtime();
function LogoMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("grid size-8 shrink-0 place-items-center rounded-lg bg-primary font-display text-sm font-bold text-primary-foreground", className),
		"aria-hidden": true,
		children: "B"
	});
}
function Logo({ inverted = false, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: cn("flex items-center gap-2.5", className),
		"aria-label": "BIQ Brain Studios home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: cn("font-display text-sm font-semibold tracking-tight", inverted ? "text-navy-foreground" : "text-foreground"),
			children: [
				"BIQ",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: inverted ? "text-navy-foreground/65" : "text-muted-foreground",
					children: "Brain Studios"
				})
			]
		})]
	});
}
//#endregion
export { LogoMark as n, Logo as t };
