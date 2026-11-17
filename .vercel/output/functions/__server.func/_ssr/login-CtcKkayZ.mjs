import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-4MCefiQz.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as Label, t as Input } from "./label-DPxYHHGY.mjs";
import { n as AuthNotice, t as AuthLayout } from "./AuthLayout--27IFqSB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-CtcKkayZ.js
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthLayout, {
		title: "Welcome back",
		description: "Log in to manage events and, later, elections.",
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"New to BIQ?",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/register",
				className: "font-medium text-primary",
				children: "Create an account"
			})
		] }),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-4",
			onSubmit: (event) => {
				event.preventDefault();
				toast.message("Sign-in is not active", { description: "No password was checked and no session was created." });
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "email",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "email",
						type: "email",
						autoComplete: "email",
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "password",
							children: "Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/forgot-password",
							className: "text-xs font-medium text-primary",
							children: "Forgot password?"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "password",
						type: "password",
						autoComplete: "current-password",
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					className: "w-full",
					children: "Log in"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthNotice, {})]
	});
}
//#endregion
export { LoginPage as component };
