import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUp, ArrowDown, Package, AlertTriangle } from "lucide-react";
import { PageHeader } from "@/components/layout/admin-layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { StatCard } from "@/components/dashboard/stat-card";
import { products } from "@/lib/mock-data";
import { toast } from "sonner";

export const Route = createFileRoute("/inventory")({
  head: () => ({
    meta: [
      { title: "Inventory · Medral Health Co." },
      { name: "description", content: "Track stock levels, adjustments and inventory history for Medral products." },
      { property: "og:title", content: "Inventory · Medral Admin" },
      { property: "og:description", content: "Real-time stock control and adjustment log for the Medral catalog." },
    ],
  }),
  component: InventoryPage,
});

const history = [
  { date: "2026-07-22", product: "Omega-3 Fish Oil 1000mg", change: 200, reason: "Restock — Supplier A", user: "Elena" },
  { date: "2026-07-21", product: "Whey Protein Isolate 2kg", change: -42, reason: "Order fulfillment", user: "System" },
  { date: "2026-07-20", product: "Vitamin D3 + K2 Drops", change: -15, reason: "Order fulfillment", user: "System" },
  { date: "2026-07-19", product: "Magnesium Glycinate", change: 100, reason: "Restock — Supplier B", user: "Marcus" },
  { date: "2026-07-18", product: "Turmeric Curcumin", change: -8, reason: "Damaged units", user: "Elena" },
];

function InventoryPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="animate-in fade-in duration-500 space-y-6">
      <PageHeader title="Inventory" description="Monitor stock levels and record adjustments." />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Total SKUs" value="342" icon={Package} accent="primary" />
        <StatCard label="Low Stock" value="14" icon={AlertTriangle} accent="amber" />
        <StatCard label="Out of Stock" value="3" icon={AlertTriangle} accent="rose" />
      </div>

      <Card className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold">Current Stock</h3>
            <p className="text-xs text-muted-foreground">Live inventory snapshot</p>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild><Button size="sm">Adjust Stock</Button></DialogTrigger>
            <DialogContent>
              <DialogHeader><DialogTitle>Stock Adjustment</DialogTitle></DialogHeader>
              <form onSubmit={(e) => { e.preventDefault(); setOpen(false); toast.success("Stock adjusted"); }} className="grid gap-4 py-2">
                <div className="grid gap-2"><Label>Product</Label><Input placeholder="Search product..." /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2"><Label>Type</Label>
                    <div className="flex gap-2">
                      <Button type="button" variant="outline" className="flex-1"><ArrowUp className="mr-1 h-4 w-4" />Increase</Button>
                      <Button type="button" variant="outline" className="flex-1"><ArrowDown className="mr-1 h-4 w-4" />Decrease</Button>
                    </div>
                  </div>
                  <div className="grid gap-2"><Label>Quantity</Label><Input type="number" placeholder="0" /></div>
                </div>
                <div className="grid gap-2"><Label>Reason</Label><Textarea rows={3} placeholder="Restock, damage, correction..." /></div>
                <DialogFooter><Button type="submit">Save Adjustment</Button></DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <div className="overflow-hidden rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/40">
                <TableHead>Product</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead className="text-right">In Stock</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((p) => (
                <TableRow key={p.id}>
                  <TableCell className="text-sm font-medium">{p.name}</TableCell>
                  <TableCell className="font-mono text-xs text-muted-foreground">{p.sku}</TableCell>
                  <TableCell className="text-right font-semibold">{p.stock}</TableCell>
                  <TableCell>
                    {p.stock === 0 ? (
                      <span className="rounded-md bg-rose-500/10 px-1.5 py-0.5 text-[11px] font-semibold text-rose-600 dark:text-rose-400">Out of Stock</span>
                    ) : p.stock < 20 ? (
                      <span className="rounded-md bg-amber-500/10 px-1.5 py-0.5 text-[11px] font-semibold text-amber-600 dark:text-amber-400">Low Stock</span>
                    ) : (
                      <span className="rounded-md bg-primary/10 px-1.5 py-0.5 text-[11px] font-semibold text-primary">Healthy</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      <Card className="p-5">
        <h3 className="mb-4 text-sm font-semibold">Stock History</h3>
        <div className="space-y-2">
          {history.map((h, i) => (
            <div key={i} className="flex items-center gap-3 rounded-lg border border-border/60 p-3">
              <div className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${h.change > 0 ? "bg-primary/10 text-primary" : "bg-rose-500/10 text-rose-600 dark:text-rose-400"}`}>
                {h.change > 0 ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium">{h.product}</div>
                <div className="text-xs text-muted-foreground">{h.reason} · by {h.user}</div>
              </div>
              <div className="text-right">
                <div className={`text-sm font-semibold ${h.change > 0 ? "text-primary" : "text-rose-600 dark:text-rose-400"}`}>{h.change > 0 ? "+" : ""}{h.change}</div>
                <div className="text-[11px] text-muted-foreground">{h.date}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
