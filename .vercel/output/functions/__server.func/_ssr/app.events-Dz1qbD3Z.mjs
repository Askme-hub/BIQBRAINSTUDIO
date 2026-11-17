import { h as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as WorkspaceShell } from "./WorkspaceShell-CD75Dsx2.mjs";
import { c as overviewIcon, s as eventSections } from "./router-JG6VMa2E.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.events-Dz1qbD3Z.js
var import_jsx_runtime = require_jsx_runtime();
function EventsLayout() {
	const groups = [...new Set(eventSections.map((section) => section.group).filter(Boolean))];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceShell, {
		name: "Event Management",
		tag: "Events workspace",
		notice: "This workspace is a shell. Lists stay empty until events are stored for a real organisation.",
		groups: [{ items: [{
			kind: "events-home",
			title: "Overview",
			icon: overviewIcon
		}] }, ...groups.map((label) => ({
			label,
			items: eventSections.filter((section) => section.group === label).map((section) => ({
				kind: "event",
				title: section.title,
				icon: section.icon,
				section: section.slug
			}))
		}))],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
//#endregion
export { EventsLayout as component };
