import { createFileRoute } from "@tanstack/react-router";
import { Search, Mail, Phone, Calendar } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "@/components/layout/admin-layout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { StatusBadge } from "@/components/ui/status-badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { customers, orders } from "@/lib/mock-data";

export const Route = createFileRoute("/customers")({
  head: () => ({
    meta: [
      { title: "Customers · Medral Health Co." },
      { name: "description", content: "Customer directory with order history, lifetime value and account status." },
      { property: "og:title", content: "Customers · Medral Admin" },
      { property: "og:description", content: "Manage the Medral customer base and view profiles, orders and LTV." },
    ],
  }),
  component: CustomersPage,
});

function CustomersPage() {
  const [q, setQ] = useState("");
  const filtered = customers.filter((c) => !q || `${c.name} ${c.email}`.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="animate-in fade-in duration-500">
      <PageHeader title="Customers" description="Everyone who has shopped with Medral." />
      <Card className="p-4">
        <div className="relative mb-4">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search customers..." value={q} onChange={(e) => setQ(e.target.value)} className="pl-9" />
        </div>
        <div className="overflow-hidden rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/40">
                <TableHead>Customer</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead className="text-right">Orders</TableHead>
                <TableHead className="text-right">Lifetime Value</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((c) => (
                <TableRow key={c.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/15 text-[11px] font-semibold text-primary">
                        {c.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                      </div>
                      <div><div className="text-sm font-medium">{c.name}</div><div className="text-xs text-muted-foreground">{c.email}</div></div>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{c.joined}</TableCell>
                  <TableCell className="text-right text-sm">{c.orders}</TableCell>
                  <TableCell className="text-right text-sm font-semibold">${c.ltv.toFixed(2)}</TableCell>
                  <TableCell><StatusBadge status={c.status} /></TableCell>
                  <TableCell>
                    <Sheet>
                      <SheetTrigger asChild><Button variant="ghost" size="sm">View</Button></SheetTrigger>
                      <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
                        <SheetHeader><SheetTitle>Customer Profile</SheetTitle></SheetHeader>
                        <div className="mt-6 space-y-6">
                          <div className="flex items-center gap-4">
                            <div className="grid h-16 w-16 place-items-center rounded-full bg-primary/15 text-lg font-semibold text-primary">
                              {c.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                            </div>
                            <div>
                              <div className="text-lg font-semibold">{c.name}</div>
                              <div className="mt-1 flex flex-wrap gap-3 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1"><Mail className="h-3 w-3" />{c.email}</span>
                                <span className="flex items-center gap-1"><Phone className="h-3 w-3" />+91 98765 43210</span>
                                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{c.joined}</span>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-3">
                            <div className="rounded-lg border border-border p-3"><div className="text-[11px] text-muted-foreground">Orders</div><div className="text-lg font-semibold">{c.orders}</div></div>
                            <div className="rounded-lg border border-border p-3"><div className="text-[11px] text-muted-foreground">LTV</div><div className="text-lg font-semibold">${c.ltv.toFixed(0)}</div></div>
                            <div className="rounded-lg border border-border p-3"><div className="text-[11px] text-muted-foreground">Status</div><div className="mt-1"><StatusBadge status={c.status} /></div></div>
                          </div>
                          <div>
                            <div className="mb-3 text-xs font-semibold uppercase text-muted-foreground">Recent Orders</div>
                            <div className="space-y-2">
                              {orders.slice(0, 4).map((o) => (
                                <div key={o.id} className="flex items-center justify-between rounded-lg border border-border p-3">
                                  <div><div className="font-mono text-xs">{o.id}</div><div className="text-[11px] text-muted-foreground">{o.date}</div></div>
                                  <div className="flex items-center gap-3"><StatusBadge status={o.status} /><span className="text-sm font-semibold">${o.amount.toFixed(2)}</span></div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
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
