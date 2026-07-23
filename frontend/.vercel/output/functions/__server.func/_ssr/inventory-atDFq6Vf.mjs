import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { G as ArrowUp, J as ArrowDown, _ as Package, a as TriangleAlert } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as PageHeader, n as Button, s as Input } from "./admin-layout-9pfrpiCw.mjs";
import { t as Card } from "./card-BA0y8TVq.mjs";
import { t as StatCard } from "./stat-card-Cy00LKuz.mjs";
import { s as products } from "./mock-data-DioO7bFq.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-BGiZt9LE.mjs";
import { t as Textarea } from "./textarea-DV2iu4eX.mjs";
import { t as Label } from "./label-CR3uXk5e.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, s as DialogTrigger, t as Dialog } from "./dialog-CwjhkVaF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/inventory-atDFq6Vf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var history = [
	{
		date: "2026-07-22",
		product: "Omega-3 Fish Oil 1000mg",
		change: 200,
		reason: "Restock — Supplier A",
		user: "Elena"
	},
	{
		date: "2026-07-21",
		product: "Whey Protein Isolate 2kg",
		change: -42,
		reason: "Order fulfillment",
		user: "System"
	},
	{
		date: "2026-07-20",
		product: "Vitamin D3 + K2 Drops",
		change: -15,
		reason: "Order fulfillment",
		user: "System"
	},
	{
		date: "2026-07-19",
		product: "Magnesium Glycinate",
		change: 100,
		reason: "Restock — Supplier B",
		user: "Marcus"
	},
	{
		date: "2026-07-18",
		product: "Turmeric Curcumin",
		change: -8,
		reason: "Damaged units",
		user: "Elena"
	}
];
function InventoryPage() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-in fade-in duration-500 space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Inventory",
				description: "Monitor stock levels and record adjustments."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Total SKUs",
						value: "342",
						icon: Package,
						accent: "primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Low Stock",
						value: "14",
						icon: TriangleAlert,
						accent: "amber"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Out of Stock",
						value: "3",
						icon: TriangleAlert,
						accent: "rose"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold",
						children: "Current Stock"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Live inventory snapshot"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
						open,
						onOpenChange: setOpen,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								children: "Adjust Stock"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Stock Adjustment" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								setOpen(false);
								toast.success("Stock adjusted");
							},
							className: "grid gap-4 py-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Product" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { placeholder: "Search product..." })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Type" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												type: "button",
												variant: "outline",
												className: "flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "mr-1 h-4 w-4" }), "Increase"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												type: "button",
												variant: "outline",
												className: "flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "mr-1 h-4 w-4" }), "Decrease"]
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Quantity" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "number",
											placeholder: "0"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Reason" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										rows: 3,
										placeholder: "Restock, damage, correction..."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									children: "Save Adjustment"
								}) })
							]
						})] })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-lg border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						className: "bg-muted/40",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Product" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "SKU" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								className: "text-right",
								children: "In Stock"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" })
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-sm font-medium",
							children: p.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "font-mono text-xs text-muted-foreground",
							children: p.sku
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-right font-semibold",
							children: p.stock
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: p.stock === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-md bg-rose-500/10 px-1.5 py-0.5 text-[11px] font-semibold text-rose-600 dark:text-rose-400",
							children: "Out of Stock"
						}) : p.stock < 20 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-md bg-amber-500/10 px-1.5 py-0.5 text-[11px] font-semibold text-amber-600 dark:text-amber-400",
							children: "Low Stock"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-md bg-primary/10 px-1.5 py-0.5 text-[11px] font-semibold text-primary",
							children: "Healthy"
						}) })
					] }, p.id)) })] })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-4 text-sm font-semibold",
					children: "Stock History"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: history.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-lg border border-border/60 p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `grid h-9 w-9 shrink-0 place-items-center rounded-lg ${h.change > 0 ? "bg-primary/10 text-primary" : "bg-rose-500/10 text-rose-600 dark:text-rose-400"}`,
								children: h.change > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-medium",
									children: h.product
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-muted-foreground",
									children: [
										h.reason,
										" · by ",
										h.user
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `text-sm font-semibold ${h.change > 0 ? "text-primary" : "text-rose-600 dark:text-rose-400"}`,
									children: [h.change > 0 ? "+" : "", h.change]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] text-muted-foreground",
									children: h.date
								})]
							})
						]
					}, i))
				})]
			})
		]
	});
}
//#endregion
export { InventoryPage as component };
