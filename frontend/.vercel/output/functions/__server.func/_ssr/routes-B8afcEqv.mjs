import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { A as DollarSign, H as Building2, _ as Package, a as TriangleAlert, n as Users, q as ArrowRight, u as ShoppingCart } from "../_libs/lucide-react.mjs";
import { c as PageHeader, n as Button } from "./admin-layout-9pfrpiCw.mjs";
import { t as Card } from "./card-BA0y8TVq.mjs";
import { t as StatCard } from "./stat-card-Cy00LKuz.mjs";
import { a as customers, c as revenueData, l as salesByCategory, o as orders, s as products, u as weeklyOrders } from "./mock-data-DioO7bFq.mjs";
import { a as YAxis, c as Line, d as Pie, f as Cell, i as LineChart, l as CartesianGrid, m as Tooltip, n as PieChart, o as XAxis, p as ResponsiveContainer, r as BarChart, u as Bar } from "../_libs/recharts+[...].mjs";
import { t as StatusBadge } from "./status-badge-C4XCgzKe.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-BGiZt9LE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B8afcEqv.js
var import_jsx_runtime = require_jsx_runtime();
function ChartCard({ title, subtitle, action, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex items-start justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-sm font-semibold text-foreground",
				children: title
			}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-xs text-muted-foreground",
				children: subtitle
			})] }), action]
		}), children]
	});
}
function Dashboard() {
	const lowStock = products.filter((p) => p.stock > 0 && p.stock < 20).slice(0, 5);
	const recentOrders = orders.slice(0, 5);
	const latestCustomers = customers.slice(0, 5);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-in fade-in duration-500",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Welcome back, Elena",
				description: "Here's what's happening with Medral Health Co. today.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "sm",
					children: "Export"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					children: "+ New Product"
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Total Revenue",
						value: "$1.09M",
						delta: {
							value: "12.4%",
							positive: true
						},
						icon: DollarSign,
						accent: "primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Total Orders",
						value: "8,246",
						delta: {
							value: "8.1%",
							positive: true
						},
						icon: ShoppingCart,
						accent: "blue"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Products",
						value: "342",
						delta: {
							value: "2.3%",
							positive: true
						},
						icon: Package,
						accent: "violet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Customers",
						value: "12,890",
						delta: {
							value: "18.2%",
							positive: true
						},
						icon: Users,
						accent: "primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Low Stock",
						value: "14",
						delta: {
							value: "3",
							positive: false
						},
						icon: TriangleAlert,
						accent: "amber"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Active B2B Leads",
						value: "27",
						delta: {
							value: "5.6%",
							positive: true
						},
						icon: Building2,
						accent: "rose"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
						title: "Monthly Revenue",
						subtitle: "Total earnings over the last 12 months",
						action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							className: "text-xs",
							children: "This year"
						}),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: 280,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
								data: revenueData,
								margin: {
									top: 5,
									right: 10,
									left: -10,
									bottom: 0
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
										id: "revGrad",
										x1: "0",
										y1: "0",
										x2: "0",
										y2: "1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "0%",
											stopColor: "var(--primary)",
											stopOpacity: .3
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
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
										contentStyle: {
											background: "var(--popover)",
											border: "1px solid var(--border)",
											borderRadius: 8,
											fontSize: 12
										},
										formatter: (v) => [`$${v.toLocaleString()}`, "Revenue"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
										type: "monotone",
										dataKey: "revenue",
										stroke: "var(--primary)",
										strokeWidth: 2.5,
										dot: {
											r: 3,
											fill: "var(--primary)"
										},
										activeDot: { r: 5 },
										fill: "url(#revGrad)"
									})
								]
							})
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ChartCard, {
					title: "Sales by Category",
					subtitle: "Distribution this month",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: 220,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
							data: salesByCategory,
							dataKey: "value",
							nameKey: "name",
							cx: "50%",
							cy: "50%",
							innerRadius: 55,
							outerRadius: 85,
							paddingAngle: 2,
							children: salesByCategory.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: e.color }, i))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
							contentStyle: {
								background: "var(--popover)",
								border: "1px solid var(--border)",
								borderRadius: 8,
								fontSize: 12
							},
							formatter: (v) => `${v}%`
						})] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 space-y-1.5",
						children: salesByCategory.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-2 w-2 rounded-full",
									style: { background: c.color }
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground",
									children: c.name
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-medium text-muted-foreground",
								children: [c.value, "%"]
							})]
						}, c.name))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
					title: "Weekly Orders",
					subtitle: "Orders placed in the last 7 days",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: 220,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: weeklyOrders,
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
									dataKey: "day",
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
									dataKey: "orders",
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
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid grid-cols-1 gap-4 xl:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5 xl:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold",
							children: "Recent Orders"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Latest transactions across all channels"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ghost",
							size: "sm",
							className: "text-xs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/orders",
								children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-3 w-3" })]
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Order" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Customer" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							className: "text-right",
							children: "Amount"
						})
					] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: recentOrders.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "font-mono text-xs",
							children: o.id
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-medium",
							children: o.customer
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: o.email
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: o.status }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
							className: "text-right font-medium",
							children: ["$", o.amount.toFixed(2)]
						})
					] }, o.id)) })] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-semibold",
								children: "Low Stock"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "ghost",
								size: "sm",
								className: "text-xs",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/inventory",
									children: "All"
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: lowStock.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-muted text-lg",
										children: p.image
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "truncate text-xs font-medium",
											children: p.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] text-muted-foreground",
											children: p.sku
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "rounded-md bg-amber-500/10 px-1.5 py-0.5 text-[11px] font-semibold text-amber-600 dark:text-amber-400",
										children: [p.stock, " left"]
									})
								]
							}, p.id))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-semibold",
								children: "Latest Customers"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "ghost",
								size: "sm",
								className: "text-xs",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/customers",
									children: "All"
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: latestCustomers.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/15 text-[11px] font-semibold text-primary",
										children: c.name.split(" ").map((n) => n[0]).slice(0, 2).join("")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "truncate text-xs font-medium",
											children: c.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "truncate text-[11px] text-muted-foreground",
											children: c.email
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: c.status })
								]
							}, c.id))
						})]
					})]
				})]
			})
		]
	});
}
//#endregion
export { Dashboard as component };
