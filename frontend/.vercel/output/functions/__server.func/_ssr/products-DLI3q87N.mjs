import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { O as Ellipsis, g as Pencil, k as Download, m as Plus, p as Search, s as Trash2, w as Funnel } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as DropdownMenuItem, c as PageHeader, i as DropdownMenuContent, n as Button, o as DropdownMenuTrigger, r as DropdownMenu, s as Input } from "./admin-layout-9pfrpiCw.mjs";
import { t as Card } from "./card-BA0y8TVq.mjs";
import { s as products } from "./mock-data-DioO7bFq.mjs";
import { t as StatusBadge } from "./status-badge-C4XCgzKe.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-BGiZt9LE.mjs";
import { t as Textarea } from "./textarea-DV2iu4eX.mjs";
import { t as Label } from "./label-CR3uXk5e.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, s as DialogTrigger, t as Dialog } from "./dialog-CwjhkVaF.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-BMzBhXB_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-DLI3q87N.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductsPage() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("all");
	const [open, setOpen] = (0, import_react.useState)(false);
	const filtered = products.filter((p) => {
		if (cat !== "all" && p.category !== cat) return false;
		if (query && !`${p.name} ${p.sku}`.toLowerCase().includes(query.toLowerCase())) return false;
		return true;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-in fade-in duration-500",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Products",
			description: "Manage your product catalog, pricing, and inventory.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				size: "sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1.5 h-4 w-4" }), "Export"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
				open,
				onOpenChange: setOpen,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1.5 h-4 w-4" }), "Add Product"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "New Product" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Add a new item to the Medral catalog." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductForm, { onSubmit: () => {
						setOpen(false);
						toast.success("Product created");
					} })]
				})]
			})] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								placeholder: "Search products or SKU...",
								value: query,
								onChange: (e) => setQuery(e.target.value),
								className: "pl-9"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: cat,
							onValueChange: setCat,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								className: "w-[160px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "all",
									children: "All categories"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "Vitamins",
									children: "Vitamins"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "Proteins",
									children: "Proteins"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "Herbals",
									children: "Herbals"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "Wellness",
									children: "Wellness"
								})
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "icon",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-4 w-4" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-lg border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						className: "bg-muted/40",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Product" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "SKU" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Category" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								className: "text-right",
								children: "Regular"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
								className: "text-right",
								children: "Sale"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Stock" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { className: "w-10" })
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: filtered.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
						className: "hover:bg-muted/30",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-muted text-lg",
									children: p.image
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "min-w-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-medium",
										children: p.name
									})
								})]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
								className: "font-mono text-xs text-muted-foreground",
								children: p.sku
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-md bg-muted px-2 py-0.5 text-xs",
								children: p.category
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
								className: "text-right text-sm text-muted-foreground line-through",
								children: ["$", p.price.toFixed(2)]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
								className: "text-right text-sm font-semibold",
								children: ["$", p.salePrice.toFixed(2)]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: p.stock === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-md bg-rose-500/10 px-1.5 py-0.5 text-[11px] font-semibold text-rose-600 dark:text-rose-400",
								children: "Out"
							}) : p.stock < 20 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-md bg-amber-500/10 px-1.5 py-0.5 text-[11px] font-semibold text-amber-600 dark:text-amber-400",
								children: ["Low · ", p.stock]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm",
								children: p.stock
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: p.status }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									className: "h-8 w-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "h-4 w-4" })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
								align: "end",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "mr-2 h-4 w-4" }), "Edit"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
									className: "text-destructive",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "mr-2 h-4 w-4" }), "Delete"]
								})]
							})] }) })
						]
					}, p.id)) })] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-center justify-between text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						"Showing ",
						filtered.length,
						" of ",
						products.length,
						" products"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							disabled: true,
							children: "Previous"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							children: "Next"
						})]
					})]
				})
			]
		})]
	});
}
function ProductForm({ onSubmit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: (e) => {
			e.preventDefault();
			onSubmit();
		},
		className: "grid gap-4 py-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Product Name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "e.g. Vitamin C 1000mg",
					required: true
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Description" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					rows: 3,
					placeholder: "Short marketing description..."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Category" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "Vitamins",
							children: "Vitamins"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "Proteins",
							children: "Proteins"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "Herbals",
							children: "Herbals"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "Wellness",
							children: "Wellness"
						})
					] })] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "Medral",
						defaultValue: "Medral"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-3 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "SKU" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { placeholder: "MED-XXX-000" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Regular Price" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							step: "0.01",
							placeholder: "0.00"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Sale Price" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							step: "0.01",
							placeholder: "0.00"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Stock Quantity" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						placeholder: "0"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Images" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-10 items-center justify-center rounded-md border border-dashed border-border text-xs text-muted-foreground",
						children: "Drop images or click to upload"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-border bg-muted/30 p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-2 text-xs font-semibold text-foreground",
					children: "SEO"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { placeholder: "Meta title" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						rows: 2,
						placeholder: "Meta description"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				children: "Save Product"
			}) })
		]
	});
}
//#endregion
export { ProductsPage as component };
