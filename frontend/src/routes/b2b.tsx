import { createFileRoute } from "@tanstack/react-router";
import { Building2, Mail, Phone } from "lucide-react";
import { PageHeader } from "@/components/layout/admin-layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { b2bInquiries } from "@/lib/mock-data";

export const Route = createFileRoute("/b2b")({
  head: () => ({
    meta: [
      { title: "B2B Inquiries · Medral Health Co." },
      { name: "description", content: "Track and qualify B2B manufacturing and private-label inquiries for Medral Health Co." },
      { property: "og:title", content: "B2B Inquiries · Medral Admin" },
      { property: "og:description", content: "Sales pipeline for wholesale, private-label and contract manufacturing leads." },
    ],
  }),
  component: B2BPage,
});

function B2BPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <PageHeader title="B2B Inquiries" description="Wholesale, private label and contract manufacturing pipeline." />
      <Card className="p-4">
        <div className="overflow-hidden rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/40">
                <TableHead>Inquiry</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {b2bInquiries.map((i) => (
                <TableRow key={i.id}>
                  <TableCell className="font-mono text-xs">{i.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2.5">
                      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary"><Building2 className="h-4 w-4" /></div>
                      <div className="text-sm font-medium">{i.company}</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">{i.contact}</TableCell>
                  <TableCell className="text-sm">{i.productType}</TableCell>
                  <TableCell className="text-sm font-medium">{i.quantity}</TableCell>
                  <TableCell><StatusBadge status={i.status} /></TableCell>
                  <TableCell>
                    <Sheet>
                      <SheetTrigger asChild><Button variant="ghost" size="sm">Open</Button></SheetTrigger>
                      <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
                        <SheetHeader><SheetTitle>{i.company}</SheetTitle></SheetHeader>
                        <div className="mt-6 space-y-5">
                          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1"><Mail className="h-3 w-3" />{i.contact.toLowerCase().replace(" ", ".")}@{i.company.toLowerCase().replace(/[^a-z]/g, "")}.com</span>
                            <span className="flex items-center gap-1"><Phone className="h-3 w-3" />+91 88123 45678</span>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="rounded-lg border border-border p-3"><div className="text-[11px] text-muted-foreground">Product</div><div className="mt-1 text-sm font-medium">{i.productType}</div></div>
                            <div className="rounded-lg border border-border p-3"><div className="text-[11px] text-muted-foreground">Quantity</div><div className="mt-1 text-sm font-medium">{i.quantity}</div></div>
                            <div className="rounded-lg border border-border p-3"><div className="text-[11px] text-muted-foreground">Status</div><div className="mt-1"><StatusBadge status={i.status} /></div></div>
                            <div className="rounded-lg border border-border p-3"><div className="text-[11px] text-muted-foreground">Received</div><div className="mt-1 text-sm">{i.date}</div></div>
                          </div>
                          <div className="grid gap-2">
                            <Label>Internal Notes</Label>
                            <Textarea rows={4} placeholder="Add pipeline notes, next steps, discussion summaries..." defaultValue="Requesting samples & MOQ. Follow-up call scheduled for Friday." />
                          </div>
                          <div className="flex gap-2"><Button>Save Notes</Button><Button variant="outline">Send Quote</Button></div>
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
