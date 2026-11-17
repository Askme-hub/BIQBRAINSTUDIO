import { h as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as WorkspaceShell } from "./WorkspaceShell-CD75Dsx2.mjs";
import { c as overviewIcon, o as adminSections } from "./router-JG6VMa2E.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-BlIR5bU9.js
var import_jsx_runtime = require_jsx_runtime();
function AdminLayout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceShell, {
		name: "Super Admin",
		tag: "Platform administration",
		notice: "This shell is not protected. Before launch it must be limited to platform administrators, checked on the server, with MFA for privileged accounts.",
		groups: [{ items: [{
			kind: "admin-home",
			title: "Overview",
			icon: overviewIcon
		}] }, {
			label: "Platform",
			items: adminSections.map((section) => ({
				kind: "admin",
				title: section.title,
				icon: section.icon,
				section: section.slug
			}))
		}],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
//#endregion
export { AdminLayout as component };
