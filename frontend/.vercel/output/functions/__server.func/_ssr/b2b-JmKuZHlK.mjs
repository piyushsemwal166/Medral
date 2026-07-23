import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { H as Building2, b as Mail, h as Phone } from "../_libs/lucide-react.mjs";
import { c as PageHeader, n as Button } from "./admin-layout-9pfrpiCw.mjs";
import { t as Card } from "./card-BA0y8TVq.mjs";
import { n as b2bInquiries } from "./mock-data-DioO7bFq.mjs";
import { t as StatusBadge } from "./status-badge-C4XCgzKe.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-BGiZt9LE.mjs";
import { a as SheetTrigger, i as SheetTitle, n as SheetContent, r as SheetHeader, t as Sheet } from "./sheet-DmvPtoOT.mjs";
import { t as Textarea } from "./textarea-DV2iu4eX.mjs";
import { t as Label } from "./label-CR3uXk5e.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/b2b-JmKuZHlK.js
var import_jsx_runtime = require_jsx_runtime();
function B2BPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-in fade-in duration-500",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "B2B Inquiries",
			description: "Wholesale, private label and contract manufacturing pipeline."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "p-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-lg border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
					className: "bg-muted/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Inquiry" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Company" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Contact" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Product" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Quantity" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: b2bInquiries.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "font-mono text-xs",
						children: i.id
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-medium",
							children: i.company
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-sm",
						children: i.contact
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-sm",
						children: i.productType
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-sm font-medium",
						children: i.quantity
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: i.status }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							children: "Open"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
						className: "w-full sm:max-w-xl overflow-y-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: i.company }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-3 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3 w-3" }),
											i.contact.toLowerCase().replace(" ", "."),
											"@",
											i.company.toLowerCase().replace(/[^a-z]/g, ""),
											".com"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3 w-3" }), "+91 88123 45678"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-lg border border-border p-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[11px] text-muted-foreground",
												children: "Product"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-1 text-sm font-medium",
												children: i.productType
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-lg border border-border p-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[11px] text-muted-foreground",
												children: "Quantity"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-1 text-sm font-medium",
												children: i.quantity
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-lg border border-border p-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[11px] text-muted-foreground",
												children: "Status"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-1",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: i.status })
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-lg border border-border p-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[11px] text-muted-foreground",
												children: "Received"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-1 text-sm",
												children: i.date
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Internal Notes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										rows: 4,
										placeholder: "Add pipeline notes, next steps, discussion summaries...",
										defaultValue: "Requesting samples & MOQ. Follow-up call scheduled for Friday."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Save Notes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										children: "Send Quote"
									})]
								})
							]
						})]
					})] }) })
				] }, i.id)) })] })
			})
		})]
	});
}
//#endregion
export { B2BPage as component };
