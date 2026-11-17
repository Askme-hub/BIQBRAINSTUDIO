import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-4MCefiQz.mjs";
import { B as CalendarDays, C as Lock, D as Landmark, I as Church, K as ArrowRight, R as ChartColumn, V as Building2, _ as QrCode, f as Smartphone, i as Users, k as GraduationCap, l as Ticket, n as Wallet, o as UserRound, p as ShieldCheck, r as Vote, x as Megaphone, y as MessageCircle } from "../_libs/lucide-react.mjs";
import { n as SiteLayout } from "./SiteLayout-BhLDr0Ar.mjs";
import { t as Badge } from "./badge-CA11Hgkd.mjs";
import { n as SectionHeading } from "./PageHeader-eE-RKOIR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BB4jQgQJ.js
var import_jsx_runtime = require_jsx_runtime();
var eventFeatures = [
	{
		icon: CalendarDays,
		title: "Event pages",
		text: "Publish a page for every event and share it on WhatsApp."
	},
	{
		icon: Ticket,
		title: "Tickets in GHS",
		text: "Offer free or paid tickets with Mobile Money and card payments."
	},
	{
		icon: QrCode,
		title: "QR check-in",
		text: "Scan tickets at the gate from a phone. No extra hardware."
	},
	{
		icon: Wallet,
		title: "Budgets and expenses",
		text: "Plan the budget and record every cedi spent."
	},
	{
		icon: Users,
		title: "Teams and tasks",
		text: "Invite the committee, assign work and keep the date."
	},
	{
		icon: Megaphone,
		title: "Announcements",
		text: "Reach attendees by email and SMS before and after the day."
	}
];
var audiences = [
	{
		icon: UserRound,
		title: "Individuals",
		text: "Weddings, birthdays, funerals and private gatherings."
	},
	{
		icon: Church,
		title: "Churches",
		text: "Conventions, harvests, retreats and leadership elections."
	},
	{
		icon: GraduationCap,
		title: "Schools",
		text: "Speech days, reunions and SRC elections."
	},
	{
		icon: Landmark,
		title: "Associations",
		text: "AGMs, member elections and award nights."
	},
	{
		icon: Building2,
		title: "Businesses",
		text: "Conferences, launches and staff awards."
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-navy text-navy-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-fade absolute inset-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-6xl gap-14 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-2 lg:pt-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						className: "border-navy-foreground/20 bg-transparent text-navy-foreground",
						children: "Made for Ghana · Prices in GHS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-6 text-4xl font-semibold sm:text-5xl",
						children: "Run events and elections your members can trust."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-lg text-navy-foreground/75",
						children: "BIQ Brain Studios keeps event planning and online voting in two separate workspaces, under one organisation account."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/register",
								children: ["Create a free account ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							variant: "outline",
							className: "border-navy-foreground/25 bg-transparent text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/discover",
								children: "Discover events"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-navy-foreground/65",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "size-4" }), " Mobile Money and card"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }), " WhatsApp sharing"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4" }), " Role-based access"]
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroPreview, {})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				center: true,
				eyebrow: "Two products, one platform",
				title: "Separate workspaces, built for the job",
				description: "The events team and the electoral committee each get their own dashboard, navigation and permissions."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					icon: CalendarDays,
					tone: "primary",
					label: "First product",
					title: "Event Management",
					text: "From the first planning meeting to the post-event report.",
					points: [
						"Registrations and attendee lists",
						"Ticket sales and QR check-in",
						"Schedule, tasks, vendors and sponsors",
						"Budget and expense tracking"
					],
					to: "/discover",
					cta: "Explore events"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					icon: Vote,
					tone: "violet",
					label: "Coming soon",
					title: "Online Voting and Elections",
					text: "Private elections, public polls and award voting with an audit trail.",
					points: [
						"Candidate and voter roll management",
						"Secret ballots kept apart from voter identity",
						"Live turnout monitoring",
						"Results and audit reports"
					],
					to: "/voting",
					cta: "Learn about voting"
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Event Management",
					title: "What the events workspace will cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2 lg:grid-cols-3",
					children: eventFeatures.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(feature.icon, { className: "size-5 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-semibold",
								children: feature.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: feature.text
							})
						]
					}, feature.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Who it is for",
				title: "For the gatherings Ghana actually holds"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5",
				children: audiences.map((audience) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border bg-card p-6 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-10 place-items-center rounded-lg bg-accent text-accent-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(audience.icon, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 font-semibold",
							children: audience.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-sm text-muted-foreground",
							children: audience.text
						})
					]
				}, audience.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4 pb-20 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 rounded-3xl bg-navy p-8 text-navy-foreground sm:p-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-widest text-sidebar-primary",
						children: "Security by design"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl font-semibold",
						children: "Each organisation only sees its own records"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-navy-foreground/75",
						children: "Access rules will be enforced on the server, not only hidden in the menu. A ticket is issued only after a payment provider confirms the payment. The platform is not a certified election system and does not claim to be fraud-proof."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [
						{
							icon: Lock,
							title: "Organisation isolation",
							text: "Private records stay inside their organisation."
						},
						{
							icon: ShieldCheck,
							title: "Role-based access",
							text: "Owners, finance, check-in staff and more."
						},
						{
							icon: Vote,
							title: "Ballot secrecy",
							text: "Voter identity is stored apart from choices."
						},
						{
							icon: ChartColumn,
							title: "Audit trails",
							text: "Sensitive actions are logged for review."
						}
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl border border-navy-foreground/10 bg-navy-foreground/5 p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-5 text-sidebar-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-medium",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-navy-foreground/65",
								children: item.text
							})
						]
					}, item.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-semibold",
					children: "Planning something soon?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground",
					children: "Look through the workspaces. Accounts and live events come in the next phase."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/app",
							children: "Open workspaces"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						variant: "outline",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/pricing",
							children: "See pricing"
						})
					})]
				})]
			})
		})
	] });
}
function ProductCard({ icon: Icon, tone, label, title, text, points, to, cta }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col rounded-2xl border bg-card p-8 shadow-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `grid size-11 place-items-center rounded-xl text-primary-foreground ${tone === "primary" ? "bg-primary" : "bg-violet"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `rounded-full px-3 py-1 text-xs font-medium ${tone === "primary" ? "bg-accent text-accent-foreground" : "bg-violet-soft text-violet"}`,
					children: label
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-6 text-2xl font-semibold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: text
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-2.5 text-sm",
				children: points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `mt-2 size-1.5 shrink-0 rounded-full ${tone === "primary" ? "bg-primary" : "bg-violet"}` }), point]
				}, point))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to,
				className: "mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary",
				children: [
					cta,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
				]
			})
		]
	});
}
function HeroPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative hidden lg:block",
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-navy-foreground/10 bg-navy-soft p-5 shadow-elevated",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-navy-foreground/10 pb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm font-semibold",
						children: "Event workspace"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-primary/20 px-2.5 py-0.5 text-xs",
						children: "Overview"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid grid-cols-3 gap-3",
					children: [
						{
							label: "Registrations",
							icon: Users
						},
						{
							label: "Tickets sold",
							icon: Ticket
						},
						{
							label: "Checked in",
							icon: QrCode
						}
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-navy-foreground/5 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-4 text-sidebar-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs text-navy-foreground/65",
								children: item.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-lg text-navy-foreground/40",
								children: "—"
							})
						]
					}, item.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 space-y-3 rounded-xl bg-navy-foreground/5 p-4",
					children: [
						"Schedule",
						"Tasks",
						"Budget (GHS)",
						"Sponsors"
					].map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-navy-foreground/75",
							children: row
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-navy-foreground/45",
							children: "Empty"
						})]
					}, row))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute -bottom-6 -left-6 w-56 rounded-xl border border-navy-foreground/10 bg-navy-soft p-4 shadow-elevated",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Vote, { className: "size-4 text-violet" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium",
					children: "Voting workspace"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-navy-foreground/65",
				children: "Coming soon · Separate dashboard"
			})]
		})]
	});
}
//#endregion
export { Home as component };
