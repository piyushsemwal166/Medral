import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { l as ThemeProvider, t as AdminLayout } from "./admin-layout-9pfrpiCw.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DrHSqkFg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Bein8m1P.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$12 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Medral Health Co. · Admin" },
			{
				name: "description",
				content: "Enterprise admin portal for Medral Health Co. — manage products, orders, inventory, customers and B2B pipeline."
			},
			{
				name: "author",
				content: "Medral Health Co."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$12.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) })
	});
}
var $$splitComponentImporter$11 = () => import("./routes-B8afcEqv.mjs");
var Route$11 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Dashboard · Medral Health Co." },
		{
			name: "description",
			content: "Real-time overview of revenue, orders, inventory and B2B pipeline for Medral Health Co."
		},
		{
			property: "og:title",
			content: "Medral Health Admin Dashboard"
		},
		{
			property: "og:description",
			content: "Enterprise admin portal for managing supplements commerce and B2B manufacturing inquiries."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./analytics-DjocqjdZ.mjs");
var Route$10 = createFileRoute("/analytics")({
	head: () => ({ meta: [
		{ title: "Analytics · Medral Health Co." },
		{
			name: "description",
			content: "Deep analytics on revenue, orders, customer growth and category performance."
		},
		{
			property: "og:title",
			content: "Analytics · Medral Admin"
		},
		{
			property: "og:description",
			content: "Business intelligence dashboard for Medral Health Co."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./b2b-JmKuZHlK.mjs");
var Route$9 = createFileRoute("/b2b")({
	head: () => ({ meta: [
		{ title: "B2B Inquiries · Medral Health Co." },
		{
			name: "description",
			content: "Track and qualify B2B manufacturing and private-label inquiries for Medral Health Co."
		},
		{
			property: "og:title",
			content: "B2B Inquiries · Medral Admin"
		},
		{
			property: "og:description",
			content: "Sales pipeline for wholesale, private-label and contract manufacturing leads."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./categories-BsfUpPcB.mjs");
var Route$8 = createFileRoute("/categories")({
	head: () => ({ meta: [
		{ title: "Categories · Medral Health Co." },
		{
			name: "description",
			content: "Organize the Medral catalog into nested product categories."
		},
		{
			property: "og:title",
			content: "Categories · Medral Admin"
		},
		{
			property: "og:description",
			content: "Manage nested product taxonomy for Medral Health Co."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./coupons-BLJnMhtJ.mjs");
var Route$7 = createFileRoute("/coupons")({
	head: () => ({ meta: [
		{ title: "Coupons · Medral Health Co." },
		{
			name: "description",
			content: "Create and manage discount coupons and promotional codes for Medral customers."
		},
		{
			property: "og:title",
			content: "Coupons · Medral Admin"
		},
		{
			property: "og:description",
			content: "Promo code management with usage limits and expiry tracking."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./customers-BcNr1eif.mjs");
var Route$6 = createFileRoute("/customers")({
	head: () => ({ meta: [
		{ title: "Customers · Medral Health Co." },
		{
			name: "description",
			content: "Customer directory with order history, lifetime value and account status."
		},
		{
			property: "og:title",
			content: "Customers · Medral Admin"
		},
		{
			property: "og:description",
			content: "Manage the Medral customer base and view profiles, orders and LTV."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./inventory-atDFq6Vf.mjs");
var Route$5 = createFileRoute("/inventory")({
	head: () => ({ meta: [
		{ title: "Inventory · Medral Health Co." },
		{
			name: "description",
			content: "Track stock levels, adjustments and inventory history for Medral products."
		},
		{
			property: "og:title",
			content: "Inventory · Medral Admin"
		},
		{
			property: "og:description",
			content: "Real-time stock control and adjustment log for the Medral catalog."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./orders-B264wE8r.mjs");
var Route$4 = createFileRoute("/orders")({
	head: () => ({ meta: [
		{ title: "Orders · Medral Health Co." },
		{
			name: "description",
			content: "Review, fulfill and track customer orders across the Medral e-commerce channels."
		},
		{
			property: "og:title",
			content: "Orders · Medral Admin"
		},
		{
			property: "og:description",
			content: "Order management and fulfillment workflow for Medral Health Co."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./products-DLI3q87N.mjs");
var Route$3 = createFileRoute("/products")({
	head: () => ({ meta: [
		{ title: "Products · Medral Health Co." },
		{
			name: "description",
			content: "Manage the Medral supplement product catalog — pricing, stock, categories and imagery."
		},
		{
			property: "og:title",
			content: "Products · Medral Admin"
		},
		{
			property: "og:description",
			content: "Full product catalog management for Medral Health Co."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./reports-Cx50Ve8j.mjs");
var Route$2 = createFileRoute("/reports")({
	head: () => ({ meta: [
		{ title: "Reports · Medral Health Co." },
		{
			name: "description",
			content: "Downloadable financial, inventory, tax and operational reports."
		},
		{
			property: "og:title",
			content: "Reports · Medral Admin"
		},
		{
			property: "og:description",
			content: "Generate and download reports for Medral Health operations."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./settings-CSwGBitf.mjs");
var Route$1 = createFileRoute("/settings")({
	head: () => ({ meta: [
		{ title: "Settings · Medral Health Co." },
		{
			name: "description",
			content: "Configure company profile, shipping, tax, notifications and security."
		},
		{
			property: "og:title",
			content: "Settings · Medral Admin"
		},
		{
			property: "og:description",
			content: "System configuration for the Medral admin portal."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./users-CyHfnBzs.mjs");
var Route = createFileRoute("/users")({
	head: () => ({ meta: [
		{ title: "Users & Roles · Medral Health Co." },
		{
			name: "description",
			content: "Admin team, role assignments and granular permissions for Medral."
		},
		{
			property: "og:title",
			content: "Users & Roles · Medral Admin"
		},
		{
			property: "og:description",
			content: "Manage team members and access controls for the Medral admin portal."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$11.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$12
	}),
	AnalyticsRoute: Route$10.update({
		id: "/analytics",
		path: "/analytics",
		getParentRoute: () => Route$12
	}),
	B2bRoute: Route$9.update({
		id: "/b2b",
		path: "/b2b",
		getParentRoute: () => Route$12
	}),
	CategoriesRoute: Route$8.update({
		id: "/categories",
		path: "/categories",
		getParentRoute: () => Route$12
	}),
	CouponsRoute: Route$7.update({
		id: "/coupons",
		path: "/coupons",
		getParentRoute: () => Route$12
	}),
	CustomersRoute: Route$6.update({
		id: "/customers",
		path: "/customers",
		getParentRoute: () => Route$12
	}),
	InventoryRoute: Route$5.update({
		id: "/inventory",
		path: "/inventory",
		getParentRoute: () => Route$12
	}),
	OrdersRoute: Route$4.update({
		id: "/orders",
		path: "/orders",
		getParentRoute: () => Route$12
	}),
	ProductsRoute: Route$3.update({
		id: "/products",
		path: "/products",
		getParentRoute: () => Route$12
	}),
	ReportsRoute: Route$2.update({
		id: "/reports",
		path: "/reports",
		getParentRoute: () => Route$12
	}),
	SettingsRoute: Route$1.update({
		id: "/settings",
		path: "/settings",
		getParentRoute: () => Route$12
	}),
	UsersRoute: Route.update({
		id: "/users",
		path: "/users",
		getParentRoute: () => Route$12
	})
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
