import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { E as FileText, k as Download } from "../_libs/lucide-react.mjs";
import { c as PageHeader, n as Button } from "./admin-layout-9pfrpiCw.mjs";
import { t as Card } from "./card-BA0y8TVq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reports-Cx50Ve8j.js
var import_jsx_runtime = require_jsx_runtime();
var reports = [
	{
		name: "Monthly Sales Report",
		desc: "Complete sales breakdown by product, channel and region.",
		freq: "Monthly"
	},
	{
		name: "Inventory Valuation",
		desc: "Current stock value across warehouses.",
		freq: "Weekly"
	},
	{
		name: "Tax Summary (GST)",
		desc: "GST filings, input credits and liabilities.",
		freq: "Monthly"
	},
	{
		name: "Customer Cohort Analysis",
		desc: "Retention and LTV by acquisition cohort.",
		freq: "Quarterly"
	},
	{
		name: "B2B Pipeline Report",
		desc: "Wholesale funnel conversion and forecasts.",
		freq: "Monthly"
	},
	{
		name: "Shipping & Fulfillment",
		desc: "Carrier performance, delays, cost per shipment.",
		freq: "Weekly"
	}
];
function ReportsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-in fade-in duration-500",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Reports",
			description: "Scheduled and on-demand business reports."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3",
			children: reports.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "p-5 transition-shadow hover:shadow-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold",
								children: r.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-xs text-muted-foreground",
								children: r.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-md bg-muted px-2 py-0.5 text-[11px]",
									children: r.freq
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: "outline",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1.5 h-3.5 w-3.5" }), "Download"]
								})]
							})
						]
					})]
				})
			}, r.name))
		})]
	});
}
//#endregion
export { ReportsPage as component };
