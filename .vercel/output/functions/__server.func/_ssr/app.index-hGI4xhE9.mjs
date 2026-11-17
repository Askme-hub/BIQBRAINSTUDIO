import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Logo } from "./Logo-G4Ts_zXl.mjs";
import { t as Button } from "./button-4MCefiQz.mjs";
import { B as CalendarDays, K as ArrowRight, V as Building2, W as Bell, j as CreditCard, o as UserRound, r as Vote, v as Plus } from "../_libs/lucide-react.mjs";
import { t as Badge } from "./badge-CA11Hgkd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.index-hGI4xhE9.js
var import_jsx_runtime = require_jsx_runtime();
function WorkspaceSelector() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/app/account/$section",
							params: { section: "notifications" },
							"aria-label": "Notifications",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-4" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/app/account/$section",
							params: { section: "profile" },
							"aria-label": "Account",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "size-4" })
						})
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Account area"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 text-3xl font-semibold",
					children: "Choose a workspace"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xl text-sm text-muted-foreground",
					children: "Events and voting stay separate. You are not signed in yet, so this page is a layout preview."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "mt-10 rounded-2xl border bg-card p-6 shadow-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-secondary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium uppercase tracking-widest text-muted-foreground",
									children: "Organisation"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: "No organisation yet"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "An organisation holds the team, events and elections. A person can belong to more than one."
								})
							] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							disabled: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), " Create organisation"]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-6 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/app/events",
						className: "group rounded-2xl border bg-card p-8 shadow-card transition-colors hover:border-primary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-12 place-items-center rounded-xl bg-primary text-primary-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-6" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "secondary",
									children: "Layout ready"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-6 text-xl font-semibold",
								children: "Event Management"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Events, registrations, tickets, check-in, planning and finances."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary",
								children: ["Open workspace ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/app/voting",
						className: "group rounded-2xl border bg-card p-8 shadow-card transition-colors hover:border-violet",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-12 place-items-center rounded-xl bg-violet text-primary-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Vote, { className: "size-6" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									className: "border-transparent bg-violet-soft text-violet",
									children: "Coming soon"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-6 text-xl font-semibold",
								children: "Voting and Elections"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Candidates, voter rolls, secret ballots, results and audits."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-violet",
								children: ["Preview workspace ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-3",
					children: [
						{
							icon: UserRound,
							title: "Profile and account",
							section: "profile"
						},
						{
							icon: Bell,
							title: "Notifications",
							section: "notifications"
						},
						{
							icon: CreditCard,
							title: "Subscription",
							section: "subscription"
						}
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/app/account/$section",
						params: { section: item.section },
						className: "flex min-h-16 items-center gap-3 rounded-xl border bg-card p-4 hover:border-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: item.title
						})]
					}, item.section))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-10 text-xs text-muted-foreground",
					children: [
						"Platform administration shell:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin",
							className: "font-medium text-primary",
							children: "Super Admin"
						}),
						". It is not access-protected yet."
					]
				})
			]
		})]
	});
}
//#endregion
export { WorkspaceSelector as component };
