import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Copy } from "lucide-react";
import { PageHeader } from "@/components/layout/admin-layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StatusBadge } from "@/components/ui/status-badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { coupons } from "@/lib/mock-data";
import { toast } from "sonner";

export const Route = createFileRoute("/coupons")({
  head: () => ({
    meta: [
      { title: "Coupons · Medral Health Co." },
      { name: "description", content: "Create and manage discount coupons and promotional codes for Medral customers." },
      { property: "og:title", content: "Coupons · Medral Admin" },
      { property: "og:description", content: "Promo code management with usage limits and expiry tracking." },
    ],
  }),
  component: CouponsPage,
});

function CouponsPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="animate-in fade-in duration-500">
      <PageHeader
        title="Coupons"
        description="Discount codes and promotional offers."
        actions={
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild><Button size="sm"><Plus className="mr-1.5 h-4 w-4" />Create Coupon</Button></DialogTrigger>
            <DialogContent>
              <DialogHeader><DialogTitle>New Coupon</DialogTitle></DialogHeader>
              <form onSubmit={(e) => { e.preventDefault(); setOpen(false); toast.success("Coupon created"); }} className="grid gap-4 py-2">
                <div className="grid gap-2"><Label>Code</Label><Input placeholder="MEDRAL20" className="font-mono uppercase" /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2"><Label>Discount Type</Label>
                    <Select defaultValue="percentage"><SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent><SelectItem value="percentage">Percentage</SelectItem><SelectItem value="fixed">Fixed Amount</SelectItem></SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2"><Label>Value</Label><Input type="number" placeholder="20" /></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2"><Label>Usage Limit</Label><Input type="number" placeholder="Unlimited" /></div>
                  <div className="grid gap-2"><Label>Expiry Date</Label><Input type="date" /></div>
                </div>
                <DialogFooter><Button type="submit">Create Coupon</Button></DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        }
      />
      <Card className="p-4">
        <div className="overflow-hidden rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/40">
                <TableHead>Code</TableHead>
                <TableHead>Discount</TableHead>
                <TableHead>Usage</TableHead>
                <TableHead>Expiry</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {coupons.map((c) => (
                <TableRow key={c.code}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">{c.code}</span>
                      <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => { navigator.clipboard.writeText(c.code); toast.success("Copied"); }}><Copy className="h-3 w-3" /></Button>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm font-medium">{c.type === "percentage" ? `${c.value}%` : `$${c.value}`}</TableCell>
                  <TableCell className="text-sm">{c.used}{c.limit ? ` / ${c.limit}` : " / ∞"}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{c.expiry ?? "No expiry"}</TableCell>
                  <TableCell><StatusBadge status={c.status} /></TableCell>
                  <TableCell><Button variant="ghost" size="sm">Edit</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
