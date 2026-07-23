import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime, r as Slot } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { B as ChartColumn, C as LayoutDashboard, E as FileText, H as Building2, L as ChevronRight, N as Circle, P as CircleQuestionMark, S as Leaf, T as FolderTree, U as Boxes, W as Bell, _ as Package, c as TicketPercent, d as Shield, f as Settings, l as Sun, n as Users, p as Search, r as User, u as ShoppingCart, v as Moon, x as LogOut, z as Check } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DropdownMenuItemIndicator, c as DropdownMenuRadioItem$1, d as DropdownMenuSubTrigger$1, f as DropdownMenuTrigger$1, i as DropdownMenuItem$1, l as DropdownMenuSeparator$1, n as DropdownMenuCheckboxItem$1, o as DropdownMenuLabel$1, r as DropdownMenuContent$1, s as DropdownMenuPortal, t as DropdownMenu$1, u as DropdownMenuSubContent$1 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-layout-9pfrpiCw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ThemeContext = (0, import_react.createContext)({
	theme: "light",
	toggle: () => {}
});
function ThemeProvider({ children }) {
	const [theme, setTheme] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		const initial = localStorage.getItem("medral-theme") ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
		setTheme(initial);
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		localStorage.setItem("medral-theme", theme);
	}, [theme]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value: {
			theme,
			toggle: () => setTheme((t) => t === "dark" ? "light" : "dark")
		},
		children
	});
}
var useTheme = () => (0, import_react.useContext)(ThemeContext);
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var nav = [
	{
		section: "Overview",
		items: [
			{
				to: "/",
				label: "Dashboard",
				icon: LayoutDashboard
			},
			{
				to: "/analytics",
				label: "Analytics",
				icon: ChartColumn
			},
			{
				to: "/reports",
				label: "Reports",
				icon: FileText
			}
		]
	},
	{
		section: "Catalog",
		items: [
			{
				to: "/products",
				label: "Products",
				icon: Package
			},
			{
				to: "/categories",
				label: "Categories",
				icon: FolderTree
			},
			{
				to: "/inventory",
				label: "Inventory",
				icon: Boxes
			}
		]
	},
	{
		section: "Sales",
		items: [
			{
				to: "/orders",
				label: "Orders",
				icon: ShoppingCart
			},
			{
				to: "/customers",
				label: "Customers",
				icon: Users
			},
			{
				to: "/b2b",
				label: "B2B Inquiries",
				icon: Building2
			},
			{
				to: "/coupons",
				label: "Coupons",
				icon: TicketPercent
			}
		]
	},
	{
		section: "System",
		items: [{
			to: "/users",
			label: "Users & Roles",
			icon: Shield
		}, {
			to: "/settings",
			label: "Settings",
			icon: Settings
		}]
	}
];
function AppSidebar() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-sidebar-border bg-sidebar lg:flex",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-16 shrink-0 items-center gap-2.5 border-b border-sidebar-border px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, {
						className: "h-5 w-5",
						strokeWidth: 2.4
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "truncate text-sm font-semibold tracking-tight text-sidebar-foreground",
						children: "Medral Health"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "truncate text-[11px] text-muted-foreground",
						children: "Admin Portal"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex-1 overflow-y-auto px-3 py-4",
				children: nav.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-1.5 px-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
						children: group.section
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-0.5",
						children: group.items.map((item) => {
							const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								className: cn("group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all", active ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm" : "text-sidebar-foreground/75 hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: cn("h-4 w-4 shrink-0", active ? "text-primary" : "text-muted-foreground group-hover:text-foreground") }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate",
										children: item.label
									}),
									active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-auto h-1.5 w-1.5 rounded-full bg-primary" })
								]
							}) }, item.to);
						})
					})]
				}, group.section))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-sidebar-border p-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 rounded-lg bg-sidebar-accent/50 p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/15 text-xs font-semibold text-primary",
						children: "ER"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate text-xs font-semibold",
							children: "Elena Rodriguez"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate text-[11px] text-muted-foreground",
							children: "Super Admin"
						})]
					})]
				})
			})
		]
	});
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var DropdownMenu = DropdownMenu$1;
var DropdownMenuTrigger = DropdownMenuTrigger$1;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSubTrigger$1, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto" })]
}));
DropdownMenuSubTrigger.displayName = DropdownMenuSubTrigger$1.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSubContent$1, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}));
DropdownMenuSubContent.displayName = DropdownMenuSubContent$1.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent$1, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}) }));
DropdownMenuContent.displayName = DropdownMenuContent$1.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem$1, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = DropdownMenuItem$1.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuCheckboxItem$1, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	checked,
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = DropdownMenuCheckboxItem$1.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuRadioItem$1, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-2 w-2 fill-current" }) })
	}), children]
}));
DropdownMenuRadioItem.displayName = DropdownMenuRadioItem$1.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}));
DropdownMenuLabel.displayName = DropdownMenuLabel$1.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
DropdownMenuSeparator.displayName = DropdownMenuSeparator$1.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	});
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var labels = {
	"": "Dashboard",
	products: "Products",
	categories: "Categories",
	inventory: "Inventory",
	orders: "Orders",
	customers: "Customers",
	b2b: "B2B Inquiries",
	coupons: "Coupons",
	analytics: "Analytics",
	reports: "Reports",
	users: "Users & Roles",
	settings: "Settings"
};
function TopNavbar() {
	const { theme, toggle } = useTheme();
	const segments = useRouterState({ select: (s) => s.location.pathname }).split("/").filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur-xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-16 items-center gap-4 px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex items-center gap-1.5 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "text-muted-foreground hover:text-foreground",
					children: "Medral"
				}), segments.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5 text-muted-foreground/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium text-foreground",
					children: "Dashboard"
				})] }) : segments.map((seg, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5 text-muted-foreground/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: i === segments.length - 1 ? "font-medium text-foreground" : "text-muted-foreground",
						children: labels[seg] ?? seg
					})]
				}, seg))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ml-auto flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative hidden md:block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								placeholder: "Search orders, products, customers...",
								className: "h-9 w-72 rounded-lg border-border bg-muted/40 pl-9 text-sm focus-visible:bg-background"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
								className: "pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 select-none items-center gap-1 rounded border border-border bg-background px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground lg:inline-flex",
								children: "⌘K"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: toggle,
						className: "h-9 w-9 rounded-lg",
						children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "icon",
							className: "relative h-9 w-9 rounded-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary ring-2 ring-background" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
						align: "end",
						className: "w-80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuLabel, {
								className: "flex items-center justify-between",
								children: ["Notifications ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "secondary",
									className: "rounded-full",
									children: "4 new"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
							[
								{
									t: "New B2B inquiry",
									d: "PharmaMart Chain requested a quote",
									time: "2m"
								},
								{
									t: "Low stock alert",
									d: "Vitamin D3 + K2 Drops (3 left)",
									time: "18m"
								},
								{
									t: "Order MED-10284 paid",
									d: "$249.50 · Aarav Sharma",
									time: "1h"
								},
								{
									t: "Weekly report ready",
									d: "Revenue +18% vs last week",
									time: "3h"
								}
							].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
								className: "flex flex-col items-start gap-0.5 py-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex w-full items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium",
										children: n.t
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] text-muted-foreground",
										children: n.time
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: n.d
								})]
							}, n.t))
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "flex items-center gap-2 rounded-lg p-1 pr-2.5 transition-colors hover:bg-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-7 w-7 place-items-center rounded-md bg-primary/15 text-[11px] font-semibold text-primary",
								children: "ER"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden text-left sm:block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-semibold leading-none",
									children: "Elena R."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-0.5 text-[10px] text-muted-foreground",
									children: "Super Admin"
								})]
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
						align: "end",
						className: "w-56",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "My Account" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "mr-2 h-4 w-4" }), "Profile"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "mr-2 h-4 w-4" }), "Settings"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "mr-2 h-4 w-4" }), "Help & Support"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
								className: "text-destructive",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "mr-2 h-4 w-4" }), "Sign out"]
							})
						]
					})] })
				]
			})]
		})
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function AdminLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-muted/30",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppSidebar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:pl-64",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopNavbar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8",
					children
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
				position: "top-right",
				richColors: true
			})
		]
	});
}
function PageHeader({ title, description, actions }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold tracking-tight text-foreground",
				children: title
			}), description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: description
			})]
		}), actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: actions
		})]
	});
}
//#endregion
export { DropdownMenuItem as a, PageHeader as c, DropdownMenuContent as i, ThemeProvider as l, Button as n, DropdownMenuTrigger as o, DropdownMenu as r, Input as s, AdminLayout as t, cn as u };
