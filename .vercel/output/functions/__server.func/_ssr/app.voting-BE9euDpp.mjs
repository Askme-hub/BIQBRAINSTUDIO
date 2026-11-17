import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-4MCefiQz.mjs";
import { C as Lock, H as BookUser, J as Activity, d as SquareUserRound, p as ShieldCheck, s as Trophy } from "../_libs/lucide-react.mjs";
import { t as WorkspaceShell } from "./WorkspaceShell-CD75Dsx2.mjs";
import { l as votingNav } from "./router-JG6VMa2E.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.voting-BE9euDpp.js
var import_jsx_runtime = require_jsx_runtime();
var capabilities = [
	{
		icon: SquareUserRound,
		title: "Candidate management",
		text: "Positions and candidate profiles."
	},
	{
		icon: BookUser,
		title: "Voter rolls",
		text: "Eligible voters and one-time credentials."
	},
	{
		icon: Lock,
		title: "Secret ballots",
		text: "Choices stored apart from voter identity."
	},
	{
		icon: Activity,
		title: "Live monitoring",
		text: "Turnout without revealing selections."
	},
	{
		icon: Trophy,
		title: "Results",
		text: "Counted on the server, published only when approved."
	},
	{
		icon: ShieldCheck,
		title: "Audit logs",
		text: "Administrative actions kept for review."
	}
];
function VotingWorkspace() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WorkspaceShell, {
		name: "Voting and Elections",
		tag: "Coming soon",
		notice: "Navigation is in place so the voting product has its own home. Ballots cannot be created or counted yet.",
		groups: [{ items: votingNav.map((item, index) => ({
			kind: "static",
			title: item.title,
			icon: item.icon,
			current: index === 0
		})) }],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-2xl bg-navy p-8 text-navy-foreground sm:p-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-fade absolute inset-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-violet-soft px-3 py-1 text-xs font-medium text-violet",
						children: "Coming soon"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-5 text-3xl font-semibold sm:text-4xl",
						children: "Online voting, in its own workspace"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-navy-foreground/75",
						children: "School, church, association and award elections will run here, with roles for election managers and returning officers. This is not a live election system."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-8",
						variant: "secondary",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/app/events",
							children: "Continue with Event Management"
						})
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: capabilities.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border bg-card p-6 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid size-10 place-items-center rounded-lg bg-violet-soft text-violet",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-semibold",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 text-sm text-muted-foreground",
						children: item.text
					})
				]
			}, item.title))
		})]
	});
}
//#endregion
export { VotingWorkspace as component };
