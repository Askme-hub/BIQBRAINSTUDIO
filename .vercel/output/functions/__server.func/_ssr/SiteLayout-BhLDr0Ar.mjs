import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Logo } from "./Logo-G4Ts_zXl.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent, s as DialogTrigger, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as Button } from "./button-4MCefiQz.mjs";
import { b as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteLayout-BhLDr0Ar.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetContent = import_react.forwardRef(({ className, children, side = "right", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-navy/70 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn("fixed z-50 flex h-full w-72 flex-col gap-4 bg-background p-6 shadow-elevated", side === "right" ? "inset-y-0 right-0 border-l" : "inset-y-0 left-0 border-r", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
SheetContent.displayName = "SheetContent";
function SheetTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
		className: cn("font-display text-base font-semibold", className),
		...props
	});
}
var nav = [
	{
		to: "/discover",
		label: "Discover Events"
	},
	{
		to: "/voting",
		label: "Voting & Elections"
	},
	{
		to: "/pricing",
		label: "Pricing"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 border-b bg-background/90 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-1 lg:flex",
							children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: "rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground",
								activeProps: { className: "rounded-md px-3 py-2 text-sm font-medium text-foreground" },
								children: item.label
							}, item.to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden items-center gap-2 lg:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/login",
									children: "Log in"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/register",
									children: "Get started"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: "lg:hidden",
								"aria-label": "Open menu",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
							className: "sr-only",
							children: "Menu"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-1",
							children: [
								nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: item.to,
									className: "rounded-md px-3 py-3 text-sm hover:bg-muted",
									children: item.label
								}, item.to)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/help",
									className: "rounded-md px-3 py-3 text-sm hover:bg-muted",
									children: "Help Centre"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex flex-col gap-2 px-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/login",
											children: "Log in"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/register",
											children: "Get started"
										})
									})]
								})
							]
						})] })] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-navy text-navy-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { inverted: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xs text-sm text-navy-foreground/65",
				children: "Event management and online elections for organisations across Ghana. Built in Accra."
			})] }), [
				{
					title: "Products",
					links: [
						{
							to: "/discover",
							label: "Event Management"
						},
						{
							to: "/voting",
							label: "Voting & Elections"
						},
						{
							to: "/pricing",
							label: "Pricing"
						}
					]
				},
				{
					title: "Company",
					links: [
						{
							to: "/about",
							label: "About us"
						},
						{
							to: "/contact",
							label: "Contact"
						},
						{
							to: "/help",
							label: "Help Centre"
						}
					]
				},
				{
					title: "Account",
					links: [
						{
							to: "/login",
							label: "Log in"
						},
						{
							to: "/register",
							label: "Create account"
						},
						{
							to: "/app",
							label: "Workspaces"
						}
					]
				}
			].map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold",
				children: col.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-2.5",
				children: col.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: link.to,
					className: "text-sm text-navy-foreground/65 hover:text-navy-foreground",
					children: link.label
				}) }, link.to))
			})] }, col.title))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-navy-foreground/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-navy-foreground/55 sm:flex-row sm:justify-between sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" BIQ Brain Studios. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Prices in Ghanaian Cedi (GHS) · Africa/Accra" })]
			})
		})]
	});
}
function PageHero({ eyebrow, title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-navy text-navy-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-fade absolute inset-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-widest text-sidebar-primary",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 max-w-3xl text-4xl font-semibold sm:text-5xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-lg text-navy-foreground/75",
					children: description
				})
			]
		})]
	});
}
//#endregion
export { SiteLayout as n, PageHero as t };
