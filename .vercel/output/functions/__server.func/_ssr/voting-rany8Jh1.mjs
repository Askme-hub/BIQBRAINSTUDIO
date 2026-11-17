import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-4MCefiQz.mjs";
import { C as Lock, H as BookUser, d as SquareUserRound, p as ShieldCheck } from "../_libs/lucide-react.mjs";
import { n as SiteLayout, t as PageHero } from "./SiteLayout-BhLDr0Ar.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/voting-rany8Jh1.js
var import_jsx_runtime = require_jsx_runtime();
var features = [
	{
		icon: SquareUserRound,
		title: "Candidate management",
		text: "Positions, profiles and photos."
	},
	{
		icon: BookUser,
		title: "Voter rolls",
		text: "Eligible voters and issued credentials."
	},
	{
		icon: Lock,
		title: "Secret ballots",
		text: "Choices stored apart from who voted."
	},
	{
		icon: ShieldCheck,
		title: "Audit logs",
		text: "Administrative actions recorded for review."
	}
];
function VotingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Voting and elections · Coming soon",
		title: "Elections your members can follow",
		description: "A dedicated workspace for private organisational elections, public polls and award voting. It is not open for ballots yet."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
			children: features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border bg-card p-6 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid size-10 place-items-center rounded-lg bg-violet-soft text-violet",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(feature.icon, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 font-semibold",
						children: feature.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 text-sm text-muted-foreground",
						children: feature.text
					})
				]
			}, feature.title))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 rounded-2xl border bg-card p-8 text-center shadow-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-semibold",
					children: "Voting starts after Event Management"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-2 max-w-lg text-sm text-muted-foreground",
					children: "The same organisation will carry over. Ballot design keeps voter identity separate from selections. Results will be counted on the server, never in the browser."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-6",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/app/voting",
						children: "Preview the voting workspace"
					})
				})
			]
		})]
	})] });
}
//#endregion
export { VotingPage as component };
