import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, Download, Eye, Truck, CreditCard, MapPin, Package, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/layout/admin-layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StatusBadge } from "@/components/ui/status-badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { orders } from "@/lib/mock-data";

export const Route = createFileRoute("/orders")({
  head: () => ({
    meta: [
      { title: "Orders · Medral Health Co." },
      { name: "description", content: "Review, fulfill and track customer orders across the Medral e-commerce channels." },
      { property: "og:title", content: "Orders · Medral Admin" },
      { property: "og:description", content: "Order management and fulfillment workflow for Medral Health Co." },
    ],
  }),
  component: OrdersPage,
});

function OrdersPage() {
  const [query, setQuery] = useState("");
  const filtered = orders.filter((o) =>
    !query || `${o.id} ${o.customer} ${o.email}`.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="animate-in fade-in duration-500">
      <PageHeader
        title="Orders"
        description="All customer orders across web, mobile and marketplaces."
        actions={<Button variant="outline" size="sm"><Download className="mr-1.5 h-4 w-4" />Export</Button>}
      />
      <Card className="p-4">
        <div className="mb-4 relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search order ID, customer, email..." value={query} onChange={(e) => setQuery(e.target.value)} className="pl-9" />
        </div>
        <div className="overflow-hidden rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/40">
                <TableHead>Order</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((o) => (
                <TableRow key={o.id} className="hover:bg-muted/30">
                  <TableCell className="font-mono text-xs font-medium">{o.id}</TableCell>
                  <TableCell>
                    <div className="text-sm font-medium">{o.customer}</div>
                    <div className="text-xs text-muted-foreground">{o.email}</div>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{o.date}</TableCell>
                  <TableCell className="text-sm">{o.items}</TableCell>
                  <TableCell><StatusBadge status={o.status} /></TableCell>
                  <TableCell className="text-right font-medium">${o.amount.toFixed(2)}</TableCell>
                  <TableCell>
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8"><Eye className="h-4 w-4" /></Button>
                      </SheetTrigger>
                      <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
                        <SheetHeader><SheetTitle>Order {o.id}</SheetTitle></SheetHeader>
                        <OrderDetails order={o} />
                      </SheetContent>
                    </Sheet>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}

function OrderDetails({ order }: { order: typeof orders[number] }) {
  const timeline = [
    { icon: CheckCircle2, label: "Order placed", time: order.date, done: true },
    { icon: CreditCard, label: "Payment confirmed", time: order.date, done: order.status !== "pending" && order.status !== "cancelled" },
    { icon: Package, label: "Packed & ready", time: "2026-07-22", done: ["shipped", "delivered"].includes(order.status) },
    { icon: Truck, label: "Out for delivery", time: "2026-07-23", done: order.status === "delivered" },
  ];
  return (
    <div className="mt-6 space-y-6">
      <div className="flex items-center justify-between">
        <StatusBadge status={order.status} />
        <Button variant="outline" size="sm"><Download className="mr-1.5 h-4 w-4" />Invoice</Button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-border p-3">
          <div className="text-[11px] uppercase text-muted-foreground">Customer</div>
          <div className="mt-1 text-sm font-medium">{order.customer}</div>
          <div className="text-xs text-muted-foreground">{order.email}</div>
        </div>
        <div className="rounded-lg border border-border p-3">
          <div className="text-[11px] uppercase text-muted-foreground">Total</div>
          <div className="mt-1 text-lg font-semibold">${order.amount.toFixed(2)}</div>
          <div className="text-xs text-muted-foreground">{order.items} item{order.items > 1 ? "s" : ""}</div>
        </div>
      </div>

      <div className="rounded-lg border border-border p-4">
        <div className="mb-2 flex items-center gap-2 text-xs font-semibold"><MapPin className="h-3.5 w-3.5" />Shipping Address</div>
        <div className="text-sm">{order.customer}</div>
        <div className="text-xs text-muted-foreground">402, Harmony Residency, MG Road<br />Bengaluru, KA 560001, India</div>
        <div className="mt-3 text-xs"><span className="text-muted-foreground">Tracking:</span> <span className="font-mono">MDR-{order.id.slice(-6)}IN</span></div>
      </div>

      <div>
        <div className="mb-3 text-xs font-semibold uppercase text-muted-foreground">Order Timeline</div>
        <div className="space-y-3">
          {timeline.map((t, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${t.done ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"}`}>
                <t.icon className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1 pt-1">
                <div className="text-sm font-medium">{t.label}</div>
                <div className="text-xs text-muted-foreground">{t.done ? t.time : "Pending"}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
