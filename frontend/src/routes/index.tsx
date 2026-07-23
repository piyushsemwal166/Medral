import { createFileRoute } from "@tanstack/react-router";
import {
  DollarSign,
  ShoppingCart,
  Package,
  Users,
  AlertTriangle,
  Building2,
  ArrowRight,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { PageHeader } from "@/components/layout/admin-layout";
import { StatCard } from "@/components/dashboard/stat-card";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { Link } from "@tanstack/react-router";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  revenueData,
  weeklyOrders,
  salesByCategory,
  orders,
  products,
  customers,
} from "@/lib/mock-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard · Medral Health Co." },
      { name: "description", content: "Real-time overview of revenue, orders, inventory and B2B pipeline for Medral Health Co." },
      { property: "og:title", content: "Medral Health Admin Dashboard" },
      { property: "og:description", content: "Enterprise admin portal for managing supplements commerce and B2B manufacturing inquiries." },
    ],
  }),
  component: Dashboard,
});

function ChartCard({ title, subtitle, action, children }: { title: string; subtitle?: string; action?: React.ReactNode; children: React.ReactNode }) {
  return (
    <Card className="p-5">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-sm font-semibold text-foreground">{title}</h3>
          {subtitle && <p className="mt-0.5 text-xs text-muted-foreground">{subtitle}</p>}
        </div>
        {action}
      </div>
      {children}
    </Card>
  );
}

function Dashboard() {
  const lowStock = products.filter((p) => p.stock > 0 && p.stock < 20).slice(0, 5);
  const recentOrders = orders.slice(0, 5);
  const latestCustomers = customers.slice(0, 5);

  return (
    <div className="animate-in fade-in duration-500">
      <PageHeader
        title="Welcome back, Elena"
        description="Here's what's happening with Medral Health Co. today."
        actions={
          <>
            <Button variant="outline" size="sm">Export</Button>
            <Button size="sm">+ New Product</Button>
          </>
        }
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        <StatCard label="Total Revenue" value="$1.09M" delta={{ value: "12.4%", positive: true }} icon={DollarSign} accent="primary" />
        <StatCard label="Total Orders" value="8,246" delta={{ value: "8.1%", positive: true }} icon={ShoppingCart} accent="blue" />
        <StatCard label="Products" value="342" delta={{ value: "2.3%", positive: true }} icon={Package} accent="violet" />
        <StatCard label="Customers" value="12,890" delta={{ value: "18.2%", positive: true }} icon={Users} accent="primary" />
        <StatCard label="Low Stock" value="14" delta={{ value: "3", positive: false }} icon={AlertTriangle} accent="amber" />
        <StatCard label="Active B2B Leads" value="27" delta={{ value: "5.6%", positive: true }} icon={Building2} accent="rose" />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ChartCard title="Monthly Revenue" subtitle="Total earnings over the last 12 months" action={<Button variant="ghost" size="sm" className="text-xs">This year</Button>}>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={revenueData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
                <Tooltip
                  contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 12 }}
                  formatter={(v: number) => [`$${v.toLocaleString()}`, "Revenue"]}
                />
                <Line type="monotone" dataKey="revenue" stroke="var(--primary)" strokeWidth={2.5} dot={{ r: 3, fill: "var(--primary)" }} activeDot={{ r: 5 }} fill="url(#revGrad)" />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        <ChartCard title="Sales by Category" subtitle="Distribution this month">
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={salesByCategory} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={55} outerRadius={85} paddingAngle={2}>
                {salesByCategory.map((e, i) => <Cell key={i} fill={e.color} />)}
              </Pie>
              <Tooltip contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 12 }} formatter={(v: number) => `${v}%`} />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-2 space-y-1.5">
            {salesByCategory.map((c) => (
              <div key={c.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: c.color }} />
                  <span className="text-foreground">{c.name}</span>
                </div>
                <span className="font-medium text-muted-foreground">{c.value}%</span>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>

      <div className="mt-4">
        <ChartCard title="Weekly Orders" subtitle="Orders placed in the last 7 days">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={weeklyOrders} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis dataKey="day" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 12 }} />
              <Bar dataKey="orders" fill="var(--primary)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-3">
        <Card className="p-5 xl:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold">Recent Orders</h3>
              <p className="text-xs text-muted-foreground">Latest transactions across all channels</p>
            </div>
            <Button asChild variant="ghost" size="sm" className="text-xs"><Link to="/orders">View all <ArrowRight className="ml-1 h-3 w-3" /></Link></Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentOrders.map((o) => (
                <TableRow key={o.id}>
                  <TableCell className="font-mono text-xs">{o.id}</TableCell>
                  <TableCell>
                    <div className="text-sm font-medium">{o.customer}</div>
                    <div className="text-xs text-muted-foreground">{o.email}</div>
                  </TableCell>
                  <TableCell><StatusBadge status={o.status} /></TableCell>
                  <TableCell className="text-right font-medium">${o.amount.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        <div className="space-y-4">
          <Card className="p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold">Low Stock</h3>
              <Button asChild variant="ghost" size="sm" className="text-xs"><Link to="/inventory">All</Link></Button>
            </div>
            <div className="space-y-3">
              {lowStock.map((p) => (
                <div key={p.id} className="flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-muted text-lg">{p.image}</div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-xs font-medium">{p.name}</div>
                    <div className="text-[11px] text-muted-foreground">{p.sku}</div>
                  </div>
                  <span className="rounded-md bg-amber-500/10 px-1.5 py-0.5 text-[11px] font-semibold text-amber-600 dark:text-amber-400">{p.stock} left</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold">Latest Customers</h3>
              <Button asChild variant="ghost" size="sm" className="text-xs"><Link to="/customers">All</Link></Button>
            </div>
            <div className="space-y-3">
              {latestCustomers.map((c) => (
                <div key={c.id} className="flex items-center gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/15 text-[11px] font-semibold text-primary">
                    {c.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-xs font-medium">{c.name}</div>
                    <div className="truncate text-[11px] text-muted-foreground">{c.email}</div>
                  </div>
                  <StatusBadge status={c.status} />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
