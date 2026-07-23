import { createFileRoute } from "@tanstack/react-router";
import { FileText, Download } from "lucide-react";
import { PageHeader } from "@/components/layout/admin-layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/reports")({
  head: () => ({
    meta: [
      { title: "Reports · Medral Health Co." },
      { name: "description", content: "Downloadable financial, inventory, tax and operational reports." },
      { property: "og:title", content: "Reports · Medral Admin" },
      { property: "og:description", content: "Generate and download reports for Medral Health operations." },
    ],
  }),
  component: ReportsPage,
});

const reports = [
  { name: "Monthly Sales Report", desc: "Complete sales breakdown by product, channel and region.", freq: "Monthly" },
  { name: "Inventory Valuation", desc: "Current stock value across warehouses.", freq: "Weekly" },
  { name: "Tax Summary (GST)", desc: "GST filings, input credits and liabilities.", freq: "Monthly" },
  { name: "Customer Cohort Analysis", desc: "Retention and LTV by acquisition cohort.", freq: "Quarterly" },
  { name: "B2B Pipeline Report", desc: "Wholesale funnel conversion and forecasts.", freq: "Monthly" },
  { name: "Shipping & Fulfillment", desc: "Carrier performance, delays, cost per shipment.", freq: "Weekly" },
];

function ReportsPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <PageHeader title="Reports" description="Scheduled and on-demand business reports." />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {reports.map((r) => (
          <Card key={r.name} className="p-5 transition-shadow hover:shadow-md">
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><FileText className="h-5 w-5" /></div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold">{r.name}</div>
                <div className="mt-1 text-xs text-muted-foreground">{r.desc}</div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="rounded-md bg-muted px-2 py-0.5 text-[11px]">{r.freq}</span>
                  <Button size="sm" variant="outline"><Download className="mr-1.5 h-3.5 w-3.5" />Download</Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
