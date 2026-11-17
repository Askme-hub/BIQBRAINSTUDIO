import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-4MCefiQz.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as Label, t as Input } from "./label-DPxYHHGY.mjs";
import { n as AuthNotice, t as AuthLayout } from "./AuthLayout--27IFqSB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/forgot-password-Dd0mJRPu.js
var import_jsx_runtime = require_jsx_runtime();
function ForgotPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthLayout, {
		title: "Reset your password",
		description: "When recovery is live, a link will be emailed. Nothing is sent from this page today.",
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/login",
			className: "font-medium text-primary",
			children: "Back to log in"
		}),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-4",
			onSubmit: (event) => {
				event.preventDefault();
				toast.message("No reset email was sent", { description: "Password recovery is part of the authentication phase." });
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				className: "w-full",
				children: "Send reset link"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthNotice, {})]
	});
}
//#endregion
export { ForgotPage as component };
