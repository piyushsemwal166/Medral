import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { L as ChevronRight, g as Pencil, m as Plus, s as Trash2 } from "../_libs/lucide-react.mjs";
import { c as PageHeader, n as Button } from "./admin-layout-9pfrpiCw.mjs";
import { t as Card } from "./card-BA0y8TVq.mjs";
import { t as Switch } from "./switch-xFwU7Pyo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/categories-BsfUpPcB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var initial = [
	{
		id: "1",
		name: "Vitamins & Minerals",
		count: 84,
		active: true,
		children: [
			{
				id: "1a",
				name: "Multivitamins",
				count: 28,
				active: true
			},
			{
				id: "1b",
				name: "Vitamin D",
				count: 19,
				active: true
			},
			{
				id: "1c",
				name: "Magnesium",
				count: 12,
				active: true
			}
		]
	},
	{
		id: "2",
		name: "Proteins & Fitness",
		count: 56,
		active: true,
		children: [
			{
				id: "2a",
				name: "Whey Protein",
				count: 22,
				active: true
			},
			{
				id: "2b",
				name: "Plant-Based Protein",
				count: 14,
				active: true
			},
			{
				id: "2c",
				name: "Creatine",
				count: 8,
				active: false
			}
		]
	},
	{
		id: "3",
		name: "Herbal Supplements",
		count: 42,
		active: true
	},
	{
		id: "4",
		name: "Wellness & Beauty",
		count: 38,
		active: true
	},
	{
		id: "5",
		name: "Digestive Health",
		count: 24,
		active: false
	}
];
function Row({ c, level = 0 }) {
	const [open, setOpen] = (0, import_react.useState)(true);
	const [on, setOn] = (0, import_react.useState)(c.active);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-muted/60",
		style: { paddingLeft: 12 + level * 24 },
		children: [
			c.children ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setOpen((o) => !o),
				className: "grid h-5 w-5 place-items-center rounded hover:bg-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: `h-3.5 w-3.5 transition-transform ${open ? "rotate-90" : ""}` })
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-5" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-medium",
					children: c.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-[11px] text-muted-foreground",
					children: [c.count, " products"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
				checked: on,
				onCheckedChange: setOn
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-1 opacity-0 transition-opacity group-hover:opacity-100",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "h-8 w-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-3.5 w-3.5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "h-8 w-8 text-destructive",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
				})]
			})
		]
	}), open && c.children?.map((child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
		c: child,
		level: level + 1
	}, child.id))] });
}
function CategoriesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-in fade-in duration-500",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Categories",
			description: "Organize your catalog into a nested taxonomy.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				size: "sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1.5 h-4 w-4" }), "New Category"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "p-2",
			children: initial.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, { c }, c.id))
		})]
	});
}
//#endregion
export { CategoriesPage as component };
