import { createFileRoute } from "@tanstack/react-router";
import { DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LineChart, Line } from "recharts";
import { PageHeader } from "@/components/layout/admin-layout";
import { StatCard } from "@/components/dashboard/stat-card";
import { Card } from "@/components/ui/card";
import { revenueData, salesByCategory, bestSellers } from "@/lib/mock-data";

export const Route = createFileRoute("/analytics")({
  head: () => ({
    meta: [
      { title: "Analytics · Medral Health Co." },
      { name: "description", content: "Deep analytics on revenue, orders, customer growth and category performance." },
      { property: "og:title", content: "Analytics · Medral Admin" },
      { property: "og:description", content: "Business intelligence dashboard for Medral Health Co." },
    ],
  }),
  component: AnalyticsPage,
});

function AnalyticsPage() {
  return (
    <div className="animate-in fade-in duration-500 space-y-6">
      <PageHeader title="Analytics" description="Business performance across every channel." />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Revenue (YTD)" value="$1.09M" delta={{ value: "24.6%", positive: true }} icon={DollarSign} accent="primary" />
        <StatCard label="Orders (YTD)" value="8,246" delta={{ value: "18.1%", positive: true }} icon={ShoppingCart} accent="blue" />
        <StatCard label="Avg Order Value" value="$132.40" delta={{ value: "5.8%", positive: true }} icon={TrendingUp} accent="violet" />
        <StatCard label="New Customers" value="1,847" delta={{ value: "12.3%", positive: true }} icon={Users} accent="rose" />
      </div>

      <Card className="p-5">
        <h3 className="mb-4 text-sm font-semibold">Revenue Growth</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={revenueData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="rev2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.4} />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
            <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
            <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v/1000}k`} />
            <Tooltip contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 12 }} />
            <Area type="monotone" dataKey="revenue" stroke="var(--primary)" strokeWidth={2.5} fill="url(#rev2)" />
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="p-5">
          <h3 className="mb-4 text-sm font-semibold">Customer Growth</h3>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={revenueData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 12 }} />
              <Line type="monotone" dataKey="orders" stroke="var(--chart-2)" strokeWidth={2.5} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-5">
          <h3 className="mb-4 text-sm font-semibold">Revenue by Category</h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={salesByCategory} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis dataKey="name" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 12 }} />
              <Bar dataKey="value" fill="var(--primary)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card className="p-5">
        <h3 className="mb-4 text-sm font-semibold">Best Selling Products</h3>
        <div className="space-y-3">
          {bestSellers.map((p, i) => {
            const max = bestSellers[0].sold;
            const pct = (p.sold / max) * 100;
            return (
              <div key={p.name}>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="font-medium"><span className="mr-2 inline-grid h-5 w-5 place-items-center rounded-md bg-muted text-[10px] font-bold text-muted-foreground">{i + 1}</span>{p.name}</span>
                  <span className="text-muted-foreground">{p.sold} sold · <span className="font-semibold text-foreground">${p.revenue.toLocaleString()}</span></span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
