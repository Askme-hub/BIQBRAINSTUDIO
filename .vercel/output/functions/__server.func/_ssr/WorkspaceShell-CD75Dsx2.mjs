import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as LogoMark } from "./Logo-G4Ts_zXl.mjs";
import { W as Bell, b as Menu, q as ArrowLeftRight, t as X } from "../_libs/lucide-react.mjs";
import { t as Badge } from "./badge-CA11Hgkd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/WorkspaceShell-CD75Dsx2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var itemClass = "flex min-h-11 w-full items-center gap-2.5 rounded-lg px-3 text-left text-sm text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground";
var activeClass = "bg-sidebar-accent font-medium text-sidebar-accent-foreground";
function ShellLink({ item, onNavigate }) {
	if (item.kind === "static") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn(itemClass, item.current ? activeClass : "opacity-60"),
		"aria-current": item.current ? "page" : void 0,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "truncate",
			children: item.title
		})]
	});
	if (item.kind === "events-home") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/app/events",
		activeOptions: { exact: true },
		onClick: onNavigate,
		className: itemClass,
		activeProps: { className: cn(itemClass, activeClass) },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "truncate",
			children: item.title
		})]
	});
	if (item.kind === "event") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/app/events/$section",
		params: { section: item.section },
		onClick: onNavigate,
		className: itemClass,
		activeProps: { className: cn(itemClass, activeClass) },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "truncate",
			children: item.title
		})]
	});
	if (item.kind === "admin-home") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/admin",
		activeOptions: { exact: true },
		onClick: onNavigate,
		className: itemClass,
		activeProps: { className: cn(itemClass, activeClass) },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "truncate",
			children: item.title
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/admin/$section",
		params: { section: item.section },
		onClick: onNavigate,
		className: itemClass,
		activeProps: { className: cn(itemClass, activeClass) },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "truncate",
			children: item.title
		})]
	});
}
function SidebarBody({ name, tag, groups, onNavigate }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2.5 border-b border-sidebar-border px-4 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate font-display text-sm font-semibold text-sidebar-accent-foreground",
					children: name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-sidebar-foreground/60",
					children: tag
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "flex-1 space-y-5 overflow-y-auto px-3 py-4",
			children: groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [group.label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-3 pb-2 text-xs font-medium uppercase tracking-widest text-sidebar-foreground/45",
				children: group.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-0.5",
				children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShellLink, {
					item,
					onNavigate
				}, `${item.kind}-${item.title}`))
			})] }, group.label ?? "root"))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-sidebar-border p-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/app",
				onClick: onNavigate,
				className: "flex min-h-11 items-center gap-2.5 rounded-lg px-3 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeftRight, { className: "size-4 shrink-0" }), "Switch workspace"]
			})
		})
	] });
}
function WorkspaceShell({ name, tag, groups, children, notice }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "sticky top-0 hidden h-screen w-64 shrink-0 flex-col bg-sidebar text-sidebar-foreground lg:flex",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarBody, {
					name,
					tag,
					groups,
					onNavigate: () => void 0
				})
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-40 lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute inset-0 bg-navy/70",
					"aria-label": "Close menu",
					onClick: () => setOpen(false)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "relative flex h-full w-72 flex-col bg-sidebar text-sidebar-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "absolute right-3 top-3 z-10 rounded-md p-2 text-sidebar-foreground",
						"aria-label": "Close menu",
						onClick: () => setOpen(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarBody, {
						name,
						tag,
						groups,
						onNavigate: () => setOpen(false)
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "sticky top-0 z-20 flex h-14 items-center justify-between border-b bg-background/90 px-4 backdrop-blur",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-11 place-items-center rounded-lg hover:bg-muted lg:hidden",
							"aria-label": "Open workspace menu",
							onClick: () => setOpen(true),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							className: "hidden sm:inline-flex",
							children: "No organisation selected"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/app/account/$section",
						params: { section: "notifications" },
						className: "grid size-11 place-items-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground",
						"aria-label": "Notifications",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-4" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-full max-w-6xl flex-1 p-4 sm:p-8",
					children: [notice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-6 rounded-lg border bg-muted px-4 py-3 text-sm text-muted-foreground",
						children: notice
					}), children]
				})]
			})
		]
	});
}
//#endregion
export { WorkspaceShell as t };
