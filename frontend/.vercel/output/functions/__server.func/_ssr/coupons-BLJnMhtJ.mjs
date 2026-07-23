import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { M as Copy, m as Plus } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as PageHeader, n as Button, s as Input } from "./admin-layout-9pfrpiCw.mjs";
import { t as Card } from "./card-BA0y8TVq.mjs";
import { i as coupons } from "./mock-data-DioO7bFq.mjs";
import { t as StatusBadge } from "./status-badge-C4XCgzKe.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-BGiZt9LE.mjs";
import { t as Label } from "./label-CR3uXk5e.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, s as DialogTrigger, t as Dialog } from "./dialog-CwjhkVaF.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-BMzBhXB_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/coupons-BLJnMhtJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CouponsPage() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-in fade-in duration-500",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Coupons",
			description: "Discount codes and promotional offers.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
				open,
				onOpenChange: setOpen,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1.5 h-4 w-4" }), "Create Coupon"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "New Coupon" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						setOpen(false);
						toast.success("Coupon created");
					},
					className: "grid gap-4 py-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Code" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								placeholder: "MEDRAL20",
								className: "font-mono uppercase"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Discount Type" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									defaultValue: "percentage",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "percentage",
										children: "Percentage"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "fixed",
										children: "Fixed Amount"
									})] })]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Value" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "number",
									placeholder: "20"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Usage Limit" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "number",
									placeholder: "Unlimited"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Expiry Date" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { type: "date" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							children: "Create Coupon"
						}) })
					]
				})] })]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "p-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-lg border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
					className: "bg-muted/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Code" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Discount" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Usage" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Expiry" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: coupons.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary",
							children: c.code
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "h-6 w-6",
							onClick: () => {
								navigator.clipboard.writeText(c.code);
								toast.success("Copied");
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3 w-3" })
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-sm font-medium",
						children: c.type === "percentage" ? `${c.value}%` : `$${c.value}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
						className: "text-sm",
						children: [c.used, c.limit ? ` / ${c.limit}` : " / ∞"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-sm text-muted-foreground",
						children: c.expiry ?? "No expiry"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: c.status }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						children: "Edit"
					}) })
				] }, c.code)) })] })
			})
		})]
	});
}
//#endregion
export { CouponsPage as component };
