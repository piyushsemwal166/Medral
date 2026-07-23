import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { u as cn } from "./admin-layout-9pfrpiCw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/status-badge-C4XCgzKe.js
var import_jsx_runtime = require_jsx_runtime();
var styles = {
	paid: "bg-primary/10 text-primary ring-primary/20",
	active: "bg-primary/10 text-primary ring-primary/20",
	delivered: "bg-primary/10 text-primary ring-primary/20",
	won: "bg-primary/10 text-primary ring-primary/20",
	shipped: "bg-sky-500/10 text-sky-600 dark:text-sky-400 ring-sky-500/20",
	pending: "bg-amber-500/10 text-amber-600 dark:text-amber-400 ring-amber-500/20",
	new: "bg-sky-500/10 text-sky-600 dark:text-sky-400 ring-sky-500/20",
	negotiation: "bg-violet-500/10 text-violet-600 dark:text-violet-400 ring-violet-500/20",
	quoted: "bg-amber-500/10 text-amber-600 dark:text-amber-400 ring-amber-500/20",
	cancelled: "bg-rose-500/10 text-rose-600 dark:text-rose-400 ring-rose-500/20",
	lost: "bg-rose-500/10 text-rose-600 dark:text-rose-400 ring-rose-500/20",
	expired: "bg-slate-500/10 text-muted-foreground ring-slate-500/20",
	inactive: "bg-slate-500/10 text-muted-foreground ring-slate-500/20",
	draft: "bg-slate-500/10 text-muted-foreground ring-slate-500/20",
	archived: "bg-slate-500/10 text-muted-foreground ring-slate-500/20",
	vip: "bg-violet-500/10 text-violet-600 dark:text-violet-400 ring-violet-500/20"
};
function StatusBadge({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium capitalize ring-1 ring-inset", styles[status.toLowerCase()] ?? "bg-muted text-muted-foreground ring-border"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-current opacity-70" }), status]
	});
}
//#endregion
export { StatusBadge as t };
