import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { D as Eye, F as CircleCheck, _ as Package, i as Truck, j as CreditCard, k as Download, p as Search, y as MapPin } from "../_libs/lucide-react.mjs";
import { c as PageHeader, n as Button, s as Input } from "./admin-layout-9pfrpiCw.mjs";
import { t as Card } from "./card-BA0y8TVq.mjs";
import { o as orders } from "./mock-data-DioO7bFq.mjs";
import { t as StatusBadge } from "./status-badge-C4XCgzKe.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-BGiZt9LE.mjs";
import { a as SheetTrigger, i as SheetTitle, n as SheetContent, r as SheetHeader, t as Sheet } from "./sheet-DmvPtoOT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/orders-B264wE8r.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function OrdersPage() {
	const [query, setQuery] = (0, import_react.useState)("");
	const filtered = orders.filter((o) => !query || `${o.id} ${o.customer} ${o.email}`.toLowerCase().includes(query.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-in fade-in duration-500",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Orders",
			description: "All customer orders across web, mobile and marketplaces.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				size: "sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1.5 h-4 w-4" }), "Export"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "Search order ID, customer, email...",
					value: query,
					onChange: (e) => setQuery(e.target.value),
					className: "pl-9"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-lg border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
					className: "bg-muted/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Order" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Customer" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Date" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Items" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							className: "text-right",
							children: "Amount"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: filtered.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
					className: "hover:bg-muted/30",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "font-mono text-xs font-medium",
							children: o.id
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-medium",
							children: o.customer
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: o.email
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-sm text-muted-foreground",
							children: o.date
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-sm",
							children: o.items
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: o.status }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
							className: "text-right font-medium",
							children: ["$", o.amount.toFixed(2)]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: "h-8 w-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
							className: "w-full sm:max-w-xl overflow-y-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetTitle, { children: ["Order ", o.id] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderDetails, { order: o })]
						})] }) })
					]
				}, o.id)) })] })
			})]
		})]
	});
}
function OrderDetails({ order }) {
	const timeline = [
		{
			icon: CircleCheck,
			label: "Order placed",
			time: order.date,
			done: true
		},
		{
			icon: CreditCard,
			label: "Payment confirmed",
			time: order.date,
			done: order.status !== "pending" && order.status !== "cancelled"
		},
		{
			icon: Package,
			label: "Packed & ready",
			time: "2026-07-22",
			done: ["shipped", "delivered"].includes(order.status)
		},
		{
			icon: Truck,
			label: "Out for delivery",
			time: "2026-07-23",
			done: order.status === "delivered"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: order.status }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1.5 h-4 w-4" }), "Invoice"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] uppercase text-muted-foreground",
							children: "Customer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-sm font-medium",
							children: order.customer
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: order.email
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] uppercase text-muted-foreground",
							children: "Total"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 text-lg font-semibold",
							children: ["$", order.amount.toFixed(2)]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-muted-foreground",
							children: [
								order.items,
								" item",
								order.items > 1 ? "s" : ""
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-border p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center gap-2 text-xs font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }), "Shipping Address"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm",
						children: order.customer
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-muted-foreground",
						children: [
							"402, Harmony Residency, MG Road",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Bengaluru, KA 560001, India"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Tracking:"
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono",
								children: [
									"MDR-",
									order.id.slice(-6),
									"IN"
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-3 text-xs font-semibold uppercase text-muted-foreground",
				children: "Order Timeline"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: timeline.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `grid h-8 w-8 shrink-0 place-items-center rounded-full ${t.done ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1 pt-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-medium",
							children: t.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: t.done ? t.time : "Pending"
						})]
					})]
				}, i))
			})] })
		]
	});
}
//#endregion
export { OrdersPage as component };
