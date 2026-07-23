import { Link, useRouterState } from "@tanstack/react-router";
import { Bell, Moon, Search, Sun, ChevronRight, LogOut, User, Settings, HelpCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const labels: Record<string, string> = {
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
  settings: "Settings",
};

export function TopNavbar() {
  const { theme, toggle } = useTheme();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const segments = pathname.split("/").filter(Boolean);

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="flex h-16 items-center gap-4 px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-1.5 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-foreground">Medral</Link>
          {segments.length === 0 ? (
            <>
              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
              <span className="font-medium text-foreground">Dashboard</span>
            </>
          ) : (
            segments.map((seg, i) => (
              <span key={seg} className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
                <span className={i === segments.length - 1 ? "font-medium text-foreground" : "text-muted-foreground"}>
                  {labels[seg] ?? seg}
                </span>
              </span>
            ))
          )}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <div className="relative hidden md:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search orders, products, customers..."
              className="h-9 w-72 rounded-lg border-border bg-muted/40 pl-9 text-sm focus-visible:bg-background"
            />
            <kbd className="pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 select-none items-center gap-1 rounded border border-border bg-background px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground lg:inline-flex">
              ⌘K
            </kbd>
          </div>

          <Button variant="ghost" size="icon" onClick={toggle} className="h-9 w-9 rounded-lg">
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative h-9 w-9 rounded-lg">
                <Bell className="h-4 w-4" />
                <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary ring-2 ring-background" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel className="flex items-center justify-between">
                Notifications <Badge variant="secondary" className="rounded-full">4 new</Badge>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {[
                { t: "New B2B inquiry", d: "PharmaMart Chain requested a quote", time: "2m" },
                { t: "Low stock alert", d: "Vitamin D3 + K2 Drops (3 left)", time: "18m" },
                { t: "Order MED-10284 paid", d: "$249.50 · Aarav Sharma", time: "1h" },
                { t: "Weekly report ready", d: "Revenue +18% vs last week", time: "3h" },
              ].map((n) => (
                <DropdownMenuItem key={n.t} className="flex flex-col items-start gap-0.5 py-2.5">
                  <div className="flex w-full items-center justify-between">
                    <span className="text-sm font-medium">{n.t}</span>
                    <span className="text-[11px] text-muted-foreground">{n.time}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{n.d}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 rounded-lg p-1 pr-2.5 transition-colors hover:bg-muted">
                <div className="grid h-7 w-7 place-items-center rounded-md bg-primary/15 text-[11px] font-semibold text-primary">
                  ER
                </div>
                <div className="hidden text-left sm:block">
                  <div className="text-xs font-semibold leading-none">Elena R.</div>
                  <div className="mt-0.5 text-[10px] text-muted-foreground">Super Admin</div>
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem><User className="mr-2 h-4 w-4" />Profile</DropdownMenuItem>
              <DropdownMenuItem><Settings className="mr-2 h-4 w-4" />Settings</DropdownMenuItem>
              <DropdownMenuItem><HelpCircle className="mr-2 h-4 w-4" />Help & Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive"><LogOut className="mr-2 h-4 w-4" />Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
