import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-4MCefiQz.mjs";
import { B as CalendarDays, N as ClipboardList, _ as QrCode, l as Ticket, v as Plus } from "../_libs/lucide-react.mjs";
import { t as EmptyState } from "./EmptyState-BvjjbyAv.mjs";
import { t as PageHeader } from "./PageHeader-eE-RKOIR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.events.index-FdJYyYtf.js
var import_jsx_runtime = require_jsx_runtime();
var kpis = [
	{
		label: "Upcoming events",
		icon: CalendarDays
	},
	{
		label: "Registrations",
		icon: ClipboardList
	},
	{
		label: "Tickets sold (GHS)",
		icon: Ticket
	},
	{
		label: "Checked in",
		icon: QrCode
	}
];
function EventsOverview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Overview",
				description: "A summary across this organisation's events. Figures stay blank until there is real activity.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/app/events/$section",
						params: { section: "create" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), " Create event"]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: kpis.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border bg-card p-5 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: item.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-4 text-muted-foreground" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-2xl font-semibold text-muted-foreground",
							children: "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "No data yet"
						})
					]
				}, item.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				icon: CalendarDays,
				title: "No events to summarise",
				description: "Create an event once storage is connected. This overview will not invent counts.",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/app/events/$section",
						params: { section: "my-events" },
						children: "Go to My Events"
					})
				})
			})
		]
	});
}
//#endregion
export { EventsOverview as component };
