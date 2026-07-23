import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { A as DollarSign, n as Users, o as TrendingUp, u as ShoppingCart } from "../_libs/lucide-react.mjs";
import { c as PageHeader } from "./admin-layout-9pfrpiCw.mjs";
import { t as Card } from "./card-BA0y8TVq.mjs";
import { t as StatCard } from "./stat-card-Cy00LKuz.mjs";
import { c as revenueData, l as salesByCategory, r as bestSellers } from "./mock-data-DioO7bFq.mjs";
import { a as YAxis, c as Line, i as LineChart, l as CartesianGrid, m as Tooltip, o as XAxis, p as ResponsiveContainer, r as BarChart, s as Area, t as AreaChart, u as Bar } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/analytics-DjocqjdZ.js
var import_jsx_runtime = require_jsx_runtime();
function AnalyticsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-in fade-in duration-500 space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Analytics",
				description: "Business performance across every channel."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-4 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Revenue (YTD)",
						value: "$1.09M",
						delta: {
							value: "24.6%",
							positive: true
						},
						icon: DollarSign,
						accent: "primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Orders (YTD)",
						value: "8,246",
						delta: {
							value: "18.1%",
							positive: true
						},
						icon: ShoppingCart,
						accent: "blue"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Avg Order Value",
						value: "$132.40",
						delta: {
							value: "5.8%",
							positive: true
						},
						icon: TrendingUp,
						accent: "violet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "New Customers",
						value: "1,847",
						delta: {
							value: "12.3%",
							positive: true
						},
						icon: Users,
						accent: "rose"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-4 text-sm font-semibold",
					children: "Revenue Growth"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
					width: "100%",
					height: 300,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
						data: revenueData,
						margin: {
							top: 5,
							right: 10,
							left: -10,
							bottom: 0
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
								id: "rev2",
								x1: "0",
								y1: "0",
								x2: "0",
								y2: "1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0%",
									stopColor: "var(--primary)",
									stopOpacity: .4
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "100%",
									stopColor: "var(--primary)",
									stopOpacity: 0
								})]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								strokeDasharray: "3 3",
								stroke: "var(--border)",
								vertical: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "month",
								stroke: "var(--muted-foreground)",
								fontSize: 11,
								tickLine: false,
								axisLine: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								stroke: "var(--muted-foreground)",
								fontSize: 11,
								tickLine: false,
								axisLine: false,
								tickFormatter: (v) => `$${v / 1e3}k`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
								background: "var(--popover)",
								border: "1px solid var(--border)",
								borderRadius: 8,
								fontSize: 12
							} }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
								type: "monotone",
								dataKey: "revenue",
								stroke: "var(--primary)",
								strokeWidth: 2.5,
								fill: "url(#rev2)"
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-4 text-sm font-semibold",
						children: "Customer Growth"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: 240,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
							data: revenueData,
							margin: {
								top: 5,
								right: 10,
								left: -10,
								bottom: 0
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									strokeDasharray: "3 3",
									stroke: "var(--border)",
									vertical: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "month",
									stroke: "var(--muted-foreground)",
									fontSize: 11,
									tickLine: false,
									axisLine: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									stroke: "var(--muted-foreground)",
									fontSize: 11,
									tickLine: false,
									axisLine: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
									background: "var(--popover)",
									border: "1px solid var(--border)",
									borderRadius: 8,
									fontSize: 12
								} }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
									type: "monotone",
									dataKey: "orders",
									stroke: "var(--chart-2)",
									strokeWidth: 2.5,
									dot: { r: 3 }
								})
							]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-4 text-sm font-semibold",
						children: "Revenue by Category"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: 240,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: salesByCategory,
							margin: {
								top: 5,
								right: 10,
								left: -10,
								bottom: 0
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									strokeDasharray: "3 3",
									stroke: "var(--border)",
									vertical: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "name",
									stroke: "var(--muted-foreground)",
									fontSize: 11,
									tickLine: false,
									axisLine: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									stroke: "var(--muted-foreground)",
									fontSize: 11,
									tickLine: false,
									axisLine: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
									background: "var(--popover)",
									border: "1px solid var(--border)",
									borderRadius: 8,
									fontSize: 12
								} }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "value",
									fill: "var(--primary)",
									radius: [
										6,
										6,
										0,
										0
									]
								})
							]
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-4 text-sm font-semibold",
					children: "Best Selling Products"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: bestSellers.map((p, i) => {
						const max = bestSellers[0].sold;
						const pct = p.sold / max * 100;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-1 flex items-center justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mr-2 inline-grid h-5 w-5 place-items-center rounded-md bg-muted text-[10px] font-bold text-muted-foreground",
									children: i + 1
								}), p.name]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted-foreground",
								children: [
									p.sold,
									" sold · ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-semibold text-foreground",
										children: ["$", p.revenue.toLocaleString()]
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-2 overflow-hidden rounded-full bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-primary transition-all",
								style: { width: `${pct}%` }
							})
						})] }, p.name);
					})
				})]
			})
		]
	});
}
//#endregion
export { AnalyticsPage as component };
