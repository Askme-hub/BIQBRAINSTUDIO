import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { K as notFound, _ as createFileRoute, b as useRouter, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRoute, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as FileCheck2, B as CalendarDays, C as Lock, E as LayoutDashboard, G as Banknote, H as BookUser, J as Activity, M as Clock, N as ClipboardList, O as Handshake, P as CirclePlus, R as ChartColumn, T as LifeBuoy, V as Building2, W as Bell, _ as QrCode, a as UsersRound, c as TriangleAlert, d as SquareUserRound, g as Receipt, h as Settings, i as Users, j as CreditCard, l as Ticket, n as Wallet, o as UserRound, p as ShieldCheck, r as Vote, s as Trophy, u as Store, w as ListChecks, x as Megaphone } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/navigation-Y8VihOO5.js
var eventSections = [
	{
		slug: "my-events",
		title: "My Events",
		icon: CalendarDays,
		group: "Events",
		description: "All events owned by this organisation.",
		emptyTitle: "No events yet",
		emptyDescription: "Events you create will appear here with status, dates and registration counts."
	},
	{
		slug: "create",
		title: "Create Event",
		icon: CirclePlus,
		group: "Events",
		description: "Set up a new event with details, venue and ticketing.",
		emptyTitle: "Event builder arrives next",
		emptyDescription: "Title, date, venue, cover and ticket types will be saved here once event storage is live."
	},
	{
		slug: "registrations",
		title: "Registrations",
		icon: ClipboardList,
		group: "Events",
		description: "Review and manage registration submissions.",
		emptyTitle: "No registrations",
		emptyDescription: "Submissions and custom answers will be listed here when people register."
	},
	{
		slug: "attendees",
		title: "Attendees",
		icon: Users,
		group: "Events",
		description: "Everyone confirmed to attend your events.",
		emptyTitle: "No attendees yet",
		emptyDescription: "Confirmed attendees will be searchable by name, phone number or ticket."
	},
	{
		slug: "tickets",
		title: "Tickets",
		icon: Ticket,
		group: "Ticketing",
		description: "Ticket types, pricing in GHS and sales.",
		emptyTitle: "No ticket types",
		emptyDescription: "Free and paid tickets, including Mobile Money and card, are created with an event."
	},
	{
		slug: "check-in",
		title: "QR Check-in",
		icon: QrCode,
		group: "Ticketing",
		description: "Scan QR tickets at the entrance.",
		emptyTitle: "Nothing to scan yet",
		emptyDescription: "Check-in staff will scan attendee QR codes here on event day."
	},
	{
		slug: "schedule",
		title: "Schedule",
		icon: Clock,
		group: "Planning",
		description: "Programme, sessions and speakers.",
		emptyTitle: "No schedule items",
		emptyDescription: "Build the programme with sessions, times in Africa/Accra and speakers."
	},
	{
		slug: "tasks",
		title: "Tasks",
		icon: ListChecks,
		group: "Planning",
		description: "Assign and track planning tasks.",
		emptyTitle: "No tasks",
		emptyDescription: "Break planning into tasks and assign them with due dates."
	},
	{
		slug: "budget",
		title: "Budget",
		icon: Wallet,
		group: "Finance",
		description: "Plan your event budget in GHS.",
		emptyTitle: "No budget set",
		emptyDescription: "Set budget lines and compare planned spending against actual expenses."
	},
	{
		slug: "expenses",
		title: "Expenses",
		icon: Receipt,
		group: "Finance",
		description: "Record and track event spending.",
		emptyTitle: "No expenses recorded",
		emptyDescription: "Log expenses with receipts so finance managers can reconcile them."
	},
	{
		slug: "vendors",
		title: "Vendors",
		icon: Store,
		group: "Partners",
		description: "Caterers, decorators, AV and other suppliers.",
		emptyTitle: "No vendors",
		emptyDescription: "Keep vendor contacts, agreements and payment status in one place."
	},
	{
		slug: "sponsors",
		title: "Sponsors",
		icon: Handshake,
		group: "Partners",
		description: "Sponsorship packages and commitments.",
		emptyTitle: "No sponsors",
		emptyDescription: "Track sponsor tiers, pledges and deliverables for each event."
	},
	{
		slug: "marketing",
		title: "Marketing",
		icon: Megaphone,
		group: "Engagement",
		description: "Announcements via email, SMS and WhatsApp.",
		emptyTitle: "No campaigns",
		emptyDescription: "Send announcements to registrants and share event pages on WhatsApp."
	},
	{
		slug: "reports",
		title: "Reports",
		icon: ChartColumn,
		group: "Engagement",
		description: "Attendance, sales and financial reports.",
		emptyTitle: "No data to report",
		emptyDescription: "Reports are generated from real registrations, tickets and expenses."
	},
	{
		slug: "team",
		title: "Team",
		icon: UsersRound,
		group: "Organisation",
		description: "Invite collaborators and assign roles.",
		emptyTitle: "Just you for now",
		emptyDescription: "Invite event managers, finance managers and check-in staff with specific permissions."
	},
	{
		slug: "settings",
		title: "Settings",
		icon: Settings,
		group: "Organisation",
		description: "Workspace preferences and defaults.",
		emptyTitle: "Settings not connected yet",
		emptyDescription: "Currency defaults to GHS and the timezone defaults to Africa/Accra."
	}
];
var votingNav = [
	{
		title: "Overview",
		icon: LayoutDashboard
	},
	{
		title: "My Elections",
		icon: Vote
	},
	{
		title: "Candidates",
		icon: SquareUserRound
	},
	{
		title: "Voters",
		icon: BookUser
	},
	{
		title: "Ballots",
		icon: FileCheck2
	},
	{
		title: "Voting Monitor",
		icon: Activity
	},
	{
		title: "Results",
		icon: Trophy
	},
	{
		title: "Audit Reports",
		icon: ShieldCheck
	},
	{
		title: "Election Settings",
		icon: Settings
	}
];
var adminSections = [
	{
		slug: "users",
		title: "Users",
		icon: Users,
		description: "All platform user accounts.",
		emptyTitle: "No users loaded",
		emptyDescription: "Accounts will be listed here once authentication is connected."
	},
	{
		slug: "organisations",
		title: "Organisations",
		icon: Building2,
		description: "Tenants using the platform.",
		emptyTitle: "No organisations",
		emptyDescription: "Churches, schools, associations and businesses will appear here."
	},
	{
		slug: "events",
		title: "Events",
		icon: CalendarDays,
		description: "Events across all organisations.",
		emptyTitle: "No events",
		emptyDescription: "A platform-wide view for moderation and support."
	},
	{
		slug: "elections",
		title: "Elections",
		icon: Vote,
		description: "Elections across all organisations.",
		emptyTitle: "No elections",
		emptyDescription: "Election oversight opens with the voting product."
	},
	{
		slug: "subscriptions",
		title: "Subscriptions",
		icon: CreditCard,
		description: "Plans and active subscriptions.",
		emptyTitle: "No subscriptions",
		emptyDescription: "Plan status will be managed here. Prices are not final."
	},
	{
		slug: "payments",
		title: "Payments",
		icon: Banknote,
		description: "Transactions, refunds and payouts.",
		emptyTitle: "No transactions",
		emptyDescription: "Paystack and Hubtel payments will be recorded only after server-side verification."
	},
	{
		slug: "reports",
		title: "Reports",
		icon: ChartColumn,
		description: "Platform-wide analytics.",
		emptyTitle: "No reports yet",
		emptyDescription: "Growth, revenue and usage reports come from live platform data."
	},
	{
		slug: "support",
		title: "Support",
		icon: LifeBuoy,
		description: "Customer support tickets.",
		emptyTitle: "No support tickets",
		emptyDescription: "Tickets raised by organisations will be triaged here."
	},
	{
		slug: "security",
		title: "Security",
		icon: Lock,
		description: "Security events and admin activity.",
		emptyTitle: "No security events",
		emptyDescription: "Sign-in anomalies and admin activity will be logged here."
	},
	{
		slug: "settings",
		title: "Platform Settings",
		icon: Settings,
		description: "Feature flags and system settings.",
		emptyTitle: "Settings not connected yet",
		emptyDescription: "Feature flags, notification templates and system settings live here."
	}
];
var accountSections = [
	{
		slug: "profile",
		title: "Profile",
		icon: UserRound,
		description: "Your name, phone number and public profile.",
		emptyTitle: "Profile is not saved yet",
		emptyDescription: "Name, Ghanaian phone number and email will be stored with your account."
	},
	{
		slug: "organisation",
		title: "Organisation",
		icon: Building2,
		description: "Create or switch the organisation you are working in.",
		emptyTitle: "No organisation yet",
		emptyDescription: "An organisation holds the team, events and elections. You can belong to more than one."
	},
	{
		slug: "notifications",
		title: "Notifications",
		icon: Bell,
		description: "Email, SMS and in-app notices.",
		emptyTitle: "No notifications",
		emptyDescription: "Announcements and account notices will appear here."
	},
	{
		slug: "subscription",
		title: "Subscription",
		icon: CreditCard,
		description: "Your plan, billed in Ghanaian Cedi.",
		emptyTitle: "No subscription",
		emptyDescription: "Plans are still being priced. Nothing is billed from this page."
	},
	{
		slug: "settings",
		title: "Account settings",
		icon: Settings,
		description: "Sign-in, recovery and security preferences.",
		emptyTitle: "Account security is next",
		emptyDescription: "Email verification, password recovery and MFA for privileged roles are planned, not active."
	}
];
var overviewIcon = LayoutDashboard;
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-JG6VMa2E.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 bg-background px-6 text-center text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-destructive",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-muted-foreground",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function Toaster$1(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		theme: "light",
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast border border-border bg-card text-card-foreground shadow-elevated",
			description: "text-muted-foreground"
		} },
		...props
	});
}
var styles_default = "/assets/styles-BCVSqav4.css";
var APP_NAME = "BIQ Brain Studios";
var Route$19 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Event management and online elections for organisations in Ghana."
			},
			{
				name: "theme-color",
				content: "#12203A"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Sora:wght@500;600;700&display=swap"
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: RootComponent,
	notFoundComponent: NotFound
});
function RootComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium text-primary",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-3xl font-semibold",
				children: "This page is not on the map"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-sm text-sm text-muted-foreground",
				children: "The address does not match a public page or a workspace section."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-6 inline-flex h-11 items-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground",
				children: "Back to home"
			})
		]
	});
}
var $$splitComponentImporter$18 = () => import("./routes-BB4jQgQJ.mjs");
var Route$18 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "BIQ Brain Studios — Events and elections in Ghana" }, {
		name: "description",
		content: "Plan events, sell tickets in GHS, check in guests by QR code and prepare for online elections. Built for churches, schools, associations and businesses in Ghana."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./about-C2GbBij3.mjs");
var Route$17 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About us — BIQ Brain Studios" }, {
		name: "description",
		content: "BIQ Brain Studios builds event and election tools for organisations in Ghana."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./admin-BlIR5bU9.mjs");
var Route$16 = createFileRoute("/admin")({ component: lazyRouteComponent($$splitComponentImporter$16, "component") });
var $$splitComponentImporter$15 = () => import("./contact-CsrFGFTz.mjs");
var Route$15 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact — BIQ Brain Studios" }, {
		name: "description",
		content: "Contact BIQ Brain Studios in Accra about events, ticketing or elections."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./discover-CzPKwz2Z.mjs");
var Route$14 = createFileRoute("/discover")({
	head: () => ({ meta: [{ title: "Discover events — BIQ Brain Studios" }, {
		name: "description",
		content: "Public events from churches, schools, associations and businesses across Ghana."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./forgot-password-Dd0mJRPu.mjs");
var Route$13 = createFileRoute("/forgot-password")({
	head: () => ({ meta: [{ title: "Reset password — BIQ Brain Studios" }, {
		name: "description",
		content: "Password recovery design. Recovery emails are not sent yet."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./help-DYDuLeTz.mjs");
var Route$12 = createFileRoute("/help")({
	head: () => ({ meta: [{ title: "Help Centre — BIQ Brain Studios" }, {
		name: "description",
		content: "Help topics for organisers and attendees. Guides are not published yet."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./login-CtcKkayZ.mjs");
var Route$11 = createFileRoute("/login")({
	head: () => ({ meta: [{ title: "Log in — BIQ Brain Studios" }, {
		name: "description",
		content: "Log in design for BIQ Brain Studios. Accounts are not active yet."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./pricing-Bmg3e4gP.mjs");
var Route$10 = createFileRoute("/pricing")({
	head: () => ({ meta: [{ title: "Pricing — BIQ Brain Studios" }, {
		name: "description",
		content: "Planned plans in Ghanaian Cedi. Final prices are not published yet."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./register-BHLXEuGH.mjs");
var Route$9 = createFileRoute("/register")({
	head: () => ({ meta: [{ title: "Create account — BIQ Brain Studios" }, {
		name: "description",
		content: "Account creation design for BIQ Brain Studios. Registration is not active yet."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./voting-rany8Jh1.mjs");
var Route$8 = createFileRoute("/voting")({
	head: () => ({ meta: [{ title: "Voting and elections — BIQ Brain Studios" }, {
		name: "description",
		content: "Online voting for school, church, association and award elections. The voting product is not live yet."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./admin.index-BP4YwhfR.mjs");
var Route$7 = createFileRoute("/admin/")({
	head: () => ({ meta: [
		{ title: "Super Admin — BIQ Brain Studios" },
		{
			name: "description",
			content: "Platform administration shell. Access control is not active."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./admin._section-qMJQ-j1O.mjs");
var Route$6 = createFileRoute("/admin/$section")({
	loader: ({ params }) => {
		const section = adminSections.find((item) => item.slug === params.section);
		if (!section) throw notFound();
		return { slug: section.slug };
	},
	head: ({ loaderData }) => {
		const section = adminSections.find((item) => item.slug === loaderData?.slug);
		return { meta: [
			{ title: `${section?.title ?? "Super Admin"} — BIQ Brain Studios` },
			{
				name: "description",
				content: section?.description ?? "Platform administration."
			},
			{
				name: "robots",
				content: "noindex"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./app.index-hGI4xhE9.mjs");
var Route$5 = createFileRoute("/app/")({
	head: () => ({ meta: [
		{ title: "Workspaces — BIQ Brain Studios" },
		{
			name: "description",
			content: "Choose the Event Management or Voting workspace."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./app.events-Dz1qbD3Z.mjs");
var Route$4 = createFileRoute("/app/events")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./app.voting-BE9euDpp.mjs");
var Route$3 = createFileRoute("/app/voting")({
	head: () => ({ meta: [
		{ title: "Voting workspace — BIQ Brain Studios" },
		{
			name: "description",
			content: "Online voting workspace. The product is not live yet."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./app.account._section-ZZWIYsTP.mjs");
var Route$2 = createFileRoute("/app/account/$section")({
	loader: ({ params }) => {
		const section = accountSections.find((item) => item.slug === params.section);
		if (!section) throw notFound();
		return { slug: section.slug };
	},
	head: ({ loaderData }) => {
		const section = accountSections.find((item) => item.slug === loaderData?.slug);
		return { meta: [
			{ title: `${section?.title ?? "Account"} — BIQ Brain Studios` },
			{
				name: "description",
				content: section?.description ?? "Account area."
			},
			{
				name: "robots",
				content: "noindex"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./app.events.index-FdJYyYtf.mjs");
var Route$1 = createFileRoute("/app/events/")({
	head: () => ({ meta: [
		{ title: "Event overview — BIQ Brain Studios" },
		{
			name: "description",
			content: "Overview of an organisation's events. No live data yet."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./app.events._section-DP-MseLW.mjs");
var Route = createFileRoute("/app/events/$section")({
	loader: ({ params }) => {
		const section = eventSections.find((item) => item.slug === params.section);
		if (!section) throw notFound();
		return { slug: section.slug };
	},
	head: ({ loaderData }) => {
		const section = eventSections.find((item) => item.slug === loaderData?.slug);
		return { meta: [
			{ title: `${section?.title ?? "Events"} — BIQ Brain Studios` },
			{
				name: "description",
				content: section?.description ?? "Event Management workspace."
			},
			{
				name: "robots",
				content: "noindex"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$18.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$19
});
var AboutRoute = Route$17.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$19
});
var AdminRoute = Route$16.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$19
});
var ContactRoute = Route$15.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$19
});
var DiscoverRoute = Route$14.update({
	id: "/discover",
	path: "/discover",
	getParentRoute: () => Route$19
});
var ForgotPasswordRoute = Route$13.update({
	id: "/forgot-password",
	path: "/forgot-password",
	getParentRoute: () => Route$19
});
var HelpRoute = Route$12.update({
	id: "/help",
	path: "/help",
	getParentRoute: () => Route$19
});
var LoginRoute = Route$11.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$19
});
var PricingRoute = Route$10.update({
	id: "/pricing",
	path: "/pricing",
	getParentRoute: () => Route$19
});
var RegisterRoute = Route$9.update({
	id: "/register",
	path: "/register",
	getParentRoute: () => Route$19
});
var VotingRoute = Route$8.update({
	id: "/voting",
	path: "/voting",
	getParentRoute: () => Route$19
});
var AdminIndexRoute = Route$7.update({
	id: "/",
	path: "/",
	getParentRoute: () => AdminRoute
});
var AdminSectionRoute = Route$6.update({
	id: "/$section",
	path: "/$section",
	getParentRoute: () => AdminRoute
});
var AppIndexRoute = Route$5.update({
	id: "/app/",
	path: "/app/",
	getParentRoute: () => Route$19
});
var AppEventsRoute = Route$4.update({
	id: "/app/events",
	path: "/app/events",
	getParentRoute: () => Route$19
});
var AppVotingRoute = Route$3.update({
	id: "/app/voting",
	path: "/app/voting",
	getParentRoute: () => Route$19
});
var AppAccountSectionRoute = Route$2.update({
	id: "/app/account/$section",
	path: "/app/account/$section",
	getParentRoute: () => Route$19
});
var AppEventsIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppEventsRoute
});
var AppEventsSectionRoute = Route.update({
	id: "/$section",
	path: "/$section",
	getParentRoute: () => AppEventsRoute
});
var AdminRouteChildren = {
	AdminSectionRoute,
	AdminIndexRoute
};
var AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren);
var AppEventsRouteChildren = {
	AppEventsSectionRoute,
	AppEventsIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AdminRoute: AdminRouteWithChildren,
	ContactRoute,
	DiscoverRoute,
	ForgotPasswordRoute,
	HelpRoute,
	LoginRoute,
	PricingRoute,
	RegisterRoute,
	VotingRoute,
	AppEventsRoute: AppEventsRoute._addFileChildren(AppEventsRouteChildren),
	AppVotingRoute,
	AppIndexRoute,
	AppAccountSectionRoute
};
var routeTree = Route$19._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { accountSections as a, overviewIcon as c, Route$6 as i, votingNav as l, Route as n, adminSections as o, Route$2 as r, eventSections as s, router_exports as t };
