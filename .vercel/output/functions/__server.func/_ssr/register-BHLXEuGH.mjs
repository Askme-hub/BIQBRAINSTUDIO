import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-4MCefiQz.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as Label, t as Input } from "./label-DPxYHHGY.mjs";
import { n as AuthNotice, t as AuthLayout } from "./AuthLayout--27IFqSB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/register-BHLXEuGH.js
var import_jsx_runtime = require_jsx_runtime();
function RegisterPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthLayout, {
		title: "Create your account",
		description: "Events come first. Voting will use the same account later.",
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Already have an account?",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/login",
				className: "font-medium text-primary",
				children: "Log in"
			})
		] }),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-4",
			onSubmit: (event) => {
				event.preventDefault();
				toast.message("Accounts are not open yet", { description: "This form did not create a user or store a password." });
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "name",
						children: "Full name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "name",
						autoComplete: "name",
						required: true
					})]
				}),
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
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "phone",
						children: "Phone number"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "phone",
						type: "tel",
						placeholder: "024 123 4567",
						autoComplete: "tel",
						pattern: "^(\\\\+233|0)[235][0-9]{8}$",
						title: "Ghanaian number, for example 0241234567 or +233241234567"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "password",
						children: "Password"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "password",
						type: "password",
						autoComplete: "new-password",
						minLength: 8,
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					className: "w-full",
					children: "Create account"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "Terms and a privacy policy will be published before accounts go live."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthNotice, {})]
	});
}
//#endregion
export { RegisterPage as component };
