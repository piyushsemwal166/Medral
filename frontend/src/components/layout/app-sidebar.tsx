import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Package,
  FolderTree,
  Boxes,
  ShoppingCart,
  Users,
  Building2,
  TicketPercent,
  BarChart3,
  FileText,
  Shield,
  Settings,
  Leaf,
} from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { section: "Overview", items: [
    { to: "/", label: "Dashboard", icon: LayoutDashboard },
    { to: "/analytics", label: "Analytics", icon: BarChart3 },
    { to: "/reports", label: "Reports", icon: FileText },
  ]},
  { section: "Catalog", items: [
    { to: "/products", label: "Products", icon: Package },
    { to: "/categories", label: "Categories", icon: FolderTree },
    { to: "/inventory", label: "Inventory", icon: Boxes },
  ]},
  { section: "Sales", items: [
    { to: "/orders", label: "Orders", icon: ShoppingCart },
    { to: "/customers", label: "Customers", icon: Users },
    { to: "/b2b", label: "B2B Inquiries", icon: Building2 },
    { to: "/coupons", label: "Coupons", icon: TicketPercent },
  ]},
  { section: "System", items: [
    { to: "/users", label: "Users & Roles", icon: Shield },
    { to: "/settings", label: "Settings", icon: Settings },
  ]},
];

export function AppSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-sidebar-border bg-sidebar lg:flex">
      <div className="flex h-16 shrink-0 items-center gap-2.5 border-b border-sidebar-border px-6">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm">
          <Leaf className="h-5 w-5" strokeWidth={2.4} />
        </div>
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold tracking-tight text-sidebar-foreground">Medral Health</div>
          <div className="truncate text-[11px] text-muted-foreground">Admin Portal</div>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {nav.map((group) => (
          <div key={group.section} className="mb-5">
            <div className="mb-1.5 px-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              {group.section}
            </div>
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className={cn(
                        "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all",
                        active
                          ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
                          : "text-sidebar-foreground/75 hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground",
                      )}
                    >
                      <item.icon className={cn("h-4 w-4 shrink-0", active ? "text-primary" : "text-muted-foreground group-hover:text-foreground")} />
                      <span className="truncate">{item.label}</span>
                      {active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
      <div className="border-t border-sidebar-border p-3">
        <div className="flex items-center gap-3 rounded-lg bg-sidebar-accent/50 p-3">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/15 text-xs font-semibold text-primary">ER</div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-xs font-semibold">Elena Rodriguez</div>
            <div className="truncate text-[11px] text-muted-foreground">Super Admin</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
