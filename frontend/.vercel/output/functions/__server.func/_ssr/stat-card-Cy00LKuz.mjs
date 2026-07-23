import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { K as ArrowUpRight, Y as ArrowDownRight } from "../_libs/lucide-react.mjs";
import { u as cn } from "./admin-layout-9pfrpiCw.mjs";
import { t as Card } from "./card-BA0y8TVq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stat-card-Cy00LKuz.js
var import_jsx_runtime = require_jsx_runtime();
function StatCard({ label, value, delta, icon: Icon, accent = "primary" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "group relative overflow-hidden p-5 transition-shadow hover:shadow-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-medium text-muted-foreground",
						children: label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 text-2xl font-semibold tracking-tight text-foreground",
						children: value
					}),
					delta && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex items-center gap-1 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: cn("inline-flex items-center gap-0.5 rounded-md px-1.5 py-0.5 font-medium", delta.positive ? "bg-primary/10 text-primary" : "bg-rose-500/10 text-rose-600 dark:text-rose-400"),
							children: [delta.positive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3 w-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, { className: "h-3 w-3" }), delta.value]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "vs last month"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("grid h-10 w-10 shrink-0 place-items-center rounded-xl", {
					primary: "bg-primary/10 text-primary",
					blue: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
					amber: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
					rose: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
					violet: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
					slate: "bg-slate-500/10 text-slate-600 dark:text-slate-400"
				}[accent]),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
			})]
		})
	});
}
//#endregion
export { StatCard as t };
