import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-4MCefiQz.mjs";
import { M as Clock, S as MapPin, y as MessageCircle } from "../_libs/lucide-react.mjs";
import { n as SiteLayout, t as PageHero } from "./SiteLayout-BhLDr0Ar.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as Label, t as Input } from "./label-DPxYHHGY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CsrFGFTz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
	className: cn("flex min-h-28 w-full rounded-lg border border-input bg-card px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
	ref,
	...props
}));
Textarea.displayName = "Textarea";
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Contact",
		title: "Talk to us about your next gathering",
		description: "Tell us whether you are planning an event, a conference or an election. Message delivery is not connected yet."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-6",
			children: [
				{
					icon: MapPin,
					title: "Location",
					text: "Accra, Ghana"
				},
				{
					icon: Clock,
					title: "Hours",
					text: "Monday to Friday, 9:00–17:00 (Africa/Accra)"
				},
				{
					icon: MessageCircle,
					title: "WhatsApp and phone",
					text: "A public number will be published at launch."
				}
			].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid size-11 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: item.text
				})] })]
			}, item.title))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-5 rounded-2xl border bg-card p-6 shadow-card sm:p-8",
			onSubmit: (event) => {
				event.preventDefault();
				toast.message("This form is not sending yet", { description: "There is no inbox connected. Your message was not stored." });
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "name",
							children: "Full name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "name",
							name: "name",
							autoComplete: "name",
							required: true
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "phone",
							children: "Phone number"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "phone",
							name: "phone",
							type: "tel",
							placeholder: "024 123 4567",
							autoComplete: "tel"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "email",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "email",
						name: "email",
						type: "email",
						autoComplete: "email",
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "msg",
						children: "How can we help?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "msg",
						name: "message",
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					children: "Send message"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "Submitting shows a notice only. Nothing is emailed or saved."
				})
			]
		})]
	})] });
}
//#endregion
export { ContactPage as component };
