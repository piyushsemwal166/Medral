import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { m as Plus, z as Check } from "../_libs/lucide-react.mjs";
import { c as PageHeader, n as Button, u as cn } from "./admin-layout-9pfrpiCw.mjs";
import { t as Card } from "./card-BA0y8TVq.mjs";
import { t as adminUsers } from "./mock-data-DioO7bFq.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-BGiZt9LE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/users-CyHfnBzs.js
var import_jsx_runtime = require_jsx_runtime();
var roleStyles = {
	"Super Admin": "bg-primary/10 text-primary ring-primary/20",
	"Admin": "bg-violet-500/10 text-violet-600 dark:text-violet-400 ring-violet-500/20",
	"Manager": "bg-sky-500/10 text-sky-600 dark:text-sky-400 ring-sky-500/20",
	"Editor": "bg-amber-500/10 text-amber-600 dark:text-amber-400 ring-amber-500/20",
	"Support": "bg-slate-500/10 text-muted-foreground ring-slate-500/20"
};
var permissions = [
	{
		module: "Products",
		roles: {
			"Super Admin": true,
			"Admin": true,
			"Manager": true,
			"Editor": true,
			"Support": false
		}
	},
	{
		module: "Orders",
		roles: {
			"Super Admin": true,
			"Admin": true,
			"Manager": true,
			"Editor": false,
			"Support": true
		}
	},
	{
		module: "Customers",
		roles: {
			"Super Admin": true,
			"Admin": true,
			"Manager": true,
			"Editor": false,
			"Support": true
		}
	},
	{
		module: "B2B Inquiries",
		roles: {
			"Super Admin": true,
			"Admin": true,
			"Manager": true,
			"Editor": false,
			"Support": false
		}
	},
	{
		module: "Analytics",
		roles: {
			"Super Admin": true,
			"Admin": true,
			"Manager": true,
			"Editor": false,
			"Support": false
		}
	},
	{
		module: "Users & Roles",
		roles: {
			"Super Admin": true,
			"Admin": false,
			"Manager": false,
			"Editor": false,
			"Support": false
		}
	},
	{
		module: "Settings",
		roles: {
			"Super Admin": true,
			"Admin": true,
			"Manager": false,
			"Editor": false,
			"Support": false
		}
	}
];
function UsersPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-in fade-in duration-500 space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Users & Roles",
				description: "Manage team members and their permissions.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1.5 h-4 w-4" }), "Invite Admin"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-3 px-1 text-sm font-semibold",
					children: "Admin Team"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-lg border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						className: "bg-muted/40",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "User" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Role" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Last Active" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: adminUsers.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/15 text-[11px] font-semibold text-primary",
								children: u.avatar
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-medium",
								children: u.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground",
								children: u.email
							})] })]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ring-1 ring-inset", roleStyles[u.role]),
							children: u.role
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-sm text-muted-foreground",
							children: u.lastActive
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							children: "Edit"
						}) })
					] }, u.id)) })] })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-3 px-1 text-sm font-semibold",
					children: "Permissions Matrix"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto rounded-lg border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						className: "bg-muted/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Module" }), Object.keys(permissions[0].roles).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							className: "text-center",
							children: r
						}, r))]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: permissions.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-sm font-medium",
						children: p.module
					}), Object.entries(p.roles).map(([role, allowed]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-center",
						children: allowed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-grid h-5 w-5 place-items-center rounded-full bg-primary/15 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" })
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground/40",
							children: "—"
						})
					}, role))] }, p.module)) })] })
				})]
			})
		]
	});
}
//#endregion
export { UsersPage as component };
