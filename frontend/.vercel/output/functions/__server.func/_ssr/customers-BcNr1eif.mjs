import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { V as Calendar, b as Mail, h as Phone, p as Search } from "../_libs/lucide-react.mjs";
import { c as PageHeader, n as Button, s as Input } from "./admin-layout-9pfrpiCw.mjs";
import { t as Card } from "./card-BA0y8TVq.mjs";
import { a as customers, o as orders } from "./mock-data-DioO7bFq.mjs";
import { t as StatusBadge } from "./status-badge-C4XCgzKe.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-BGiZt9LE.mjs";
import { a as SheetTrigger, i as SheetTitle, n as SheetContent, r as SheetHeader, t as Sheet } from "./sheet-DmvPtoOT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/customers-BcNr1eif.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CustomersPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const filtered = customers.filter((c) => !q || `${c.name} ${c.email}`.toLowerCase().includes(q.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-in fade-in duration-500",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Customers",
			description: "Everyone who has shopped with Medral."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "Search customers...",
					value: q,
					onChange: (e) => setQ(e.target.value),
					className: "pl-9"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-lg border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
					className: "bg-muted/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Customer" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Joined" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							className: "text-right",
							children: "Orders"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							className: "text-right",
							children: "Lifetime Value"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: filtered.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/15 text-[11px] font-semibold text-primary",
							children: c.name.split(" ").map((n) => n[0]).slice(0, 2).join("")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-medium",
							children: c.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: c.email
						})] })]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-sm text-muted-foreground",
						children: c.joined
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-right text-sm",
						children: c.orders
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
						className: "text-right text-sm font-semibold",
						children: ["$", c.ltv.toFixed(2)]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: c.status }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							children: "View"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
						className: "w-full sm:max-w-xl overflow-y-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: "Customer Profile" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-16 w-16 place-items-center rounded-full bg-primary/15 text-lg font-semibold text-primary",
										children: c.name.split(" ").map((n) => n[0]).slice(0, 2).join("")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-lg font-semibold",
										children: c.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-1 flex flex-wrap gap-3 text-xs text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3 w-3" }), c.email]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3 w-3" }), "+91 98765 43210"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3 w-3" }), c.joined]
											})
										]
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-3 gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-lg border border-border p-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[11px] text-muted-foreground",
												children: "Orders"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-lg font-semibold",
												children: c.orders
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-lg border border-border p-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[11px] text-muted-foreground",
												children: "LTV"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-lg font-semibold",
												children: ["$", c.ltv.toFixed(0)]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-lg border border-border p-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[11px] text-muted-foreground",
												children: "Status"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-1",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: c.status })
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-3 text-xs font-semibold uppercase text-muted-foreground",
									children: "Recent Orders"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-2",
									children: orders.slice(0, 4).map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between rounded-lg border border-border p-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono text-xs",
											children: o.id
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] text-muted-foreground",
											children: o.date
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: o.status }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-sm font-semibold",
												children: ["$", o.amount.toFixed(2)]
											})]
										})]
									}, o.id))
								})] })
							]
						})]
					})] }) })
				] }, c.id)) })] })
			})]
		})]
	});
}
//#endregion
export { CustomersPage as component };
