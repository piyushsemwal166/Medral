import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as PageHeader, n as Button, s as Input, u as cn } from "./admin-layout-9pfrpiCw.mjs";
import { t as Card } from "./card-BA0y8TVq.mjs";
import { t as Textarea } from "./textarea-DV2iu4eX.mjs";
import { t as Label } from "./label-CR3uXk5e.mjs";
import { t as Switch } from "./switch-xFwU7Pyo.mjs";
import { i as TabsTrigger$1, n as TabsContent$1, r as TabsList$1, t as Tabs$1 } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-CSwGBitf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Tabs = Tabs$1;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList$1, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = TabsList$1.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger$1, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = TabsTrigger$1.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent$1, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = TabsContent$1.displayName;
function SettingsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-in fade-in duration-500",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Settings",
			description: "Configure your storefront and internal operations."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
			defaultValue: "company",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
					className: "mb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "company",
							children: "Company"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "shipping",
							children: "Shipping"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "tax",
							children: "Tax"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "notifications",
							children: "Notifications"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "security",
							children: "Security"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "company",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-4 text-sm font-semibold",
							children: "Company Information"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								toast.success("Saved");
							},
							className: "grid gap-4 max-w-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Company Name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { defaultValue: "Medral Health Co." })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Email" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "email",
											defaultValue: "hello@medral.co"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Phone" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { defaultValue: "+91 80 4567 8900" })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Address" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										rows: 3,
										defaultValue: "Unit 12, Whitefield Industrial Park, Bengaluru, KA 560066"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Website" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { defaultValue: "https://medral.co" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									children: "Save Changes"
								}) })
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "shipping",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6 max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-4 text-sm font-semibold",
							children: "Shipping Settings"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									title: "Free shipping threshold",
									desc: "Orders above this amount qualify for free shipping",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										className: "w-32",
										defaultValue: "1499"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									title: "Default courier partner",
									desc: "Used for auto-generated shipping labels",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										className: "w-48",
										defaultValue: "Delhivery Express"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									title: "International shipping",
									desc: "Enable global orders and duties calculation",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, { defaultChecked: true })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									title: "Weekend dispatch",
									desc: "Ship orders on Saturdays and Sundays",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {})
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "tax",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6 max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-4 text-sm font-semibold",
							children: "Tax Settings"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									title: "GST Number",
									desc: "Displayed on invoices",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										className: "w-64",
										defaultValue: "29ABCDE1234F1Z5"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									title: "Default tax rate",
									desc: "Applied when a product has no override",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										className: "w-24",
										defaultValue: "18%"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									title: "Prices include tax",
									desc: "Product prices already include GST",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, { defaultChecked: true })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									title: "Tax-exempt B2B",
									desc: "Skip tax for verified B2B customers",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {})
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "notifications",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6 max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-4 text-sm font-semibold",
							children: "Notifications"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									title: "New order emails",
									desc: "Get notified for every new order",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, { defaultChecked: true })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									title: "Low stock alerts",
									desc: "Alert when a product drops below threshold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, { defaultChecked: true })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									title: "B2B inquiry notifications",
									desc: "Instant Slack + email pings",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, { defaultChecked: true })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									title: "Weekly digest",
									desc: "Every Monday at 9am",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, { defaultChecked: true })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									title: "Marketing insights",
									desc: "Monthly AI-generated recommendations",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {})
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "security",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6 max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-4 text-sm font-semibold",
							children: "Security"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									title: "Two-factor authentication",
									desc: "Require 2FA for all admin users",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, { defaultChecked: true })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									title: "Session timeout",
									desc: "Auto sign-out after inactivity",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										className: "w-24",
										defaultValue: "30 min"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									title: "Audit log",
									desc: "Track every admin action",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, { defaultChecked: true })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									title: "IP allowlist",
									desc: "Restrict admin access by IP",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pt-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "destructive",
										children: "Reset all sessions"
									})
								})
							]
						})]
					})
				})
			]
		})]
	});
}
function Row({ title, desc, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-4 border-b border-border pb-4 last:border-0 last:pb-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm font-medium",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs text-muted-foreground",
				children: desc
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "shrink-0",
			children
		})]
	});
}
//#endregion
export { SettingsPage as component };
