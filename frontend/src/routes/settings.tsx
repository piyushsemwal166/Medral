import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/admin-layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings · Medral Health Co." },
      { name: "description", content: "Configure company profile, shipping, tax, notifications and security." },
      { property: "og:title", content: "Settings · Medral Admin" },
      { property: "og:description", content: "System configuration for the Medral admin portal." },
    ],
  }),
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <PageHeader title="Settings" description="Configure your storefront and internal operations." />

      <Tabs defaultValue="company">
        <TabsList className="mb-4">
          <TabsTrigger value="company">Company</TabsTrigger>
          <TabsTrigger value="shipping">Shipping</TabsTrigger>
          <TabsTrigger value="tax">Tax</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="company">
          <Card className="p-6">
            <h3 className="mb-4 text-sm font-semibold">Company Information</h3>
            <form onSubmit={(e) => { e.preventDefault(); toast.success("Saved"); }} className="grid gap-4 max-w-2xl">
              <div className="grid gap-2"><Label>Company Name</Label><Input defaultValue="Medral Health Co." /></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2"><Label>Email</Label><Input type="email" defaultValue="hello@medral.co" /></div>
                <div className="grid gap-2"><Label>Phone</Label><Input defaultValue="+91 80 4567 8900" /></div>
              </div>
              <div className="grid gap-2"><Label>Address</Label><Textarea rows={3} defaultValue="Unit 12, Whitefield Industrial Park, Bengaluru, KA 560066" /></div>
              <div className="grid gap-2"><Label>Website</Label><Input defaultValue="https://medral.co" /></div>
              <div><Button type="submit">Save Changes</Button></div>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="shipping">
          <Card className="p-6 max-w-2xl">
            <h3 className="mb-4 text-sm font-semibold">Shipping Settings</h3>
            <div className="space-y-4">
              <Row title="Free shipping threshold" desc="Orders above this amount qualify for free shipping">
                <Input className="w-32" defaultValue="1499" />
              </Row>
              <Row title="Default courier partner" desc="Used for auto-generated shipping labels">
                <Input className="w-48" defaultValue="Delhivery Express" />
              </Row>
              <Row title="International shipping" desc="Enable global orders and duties calculation">
                <Switch defaultChecked />
              </Row>
              <Row title="Weekend dispatch" desc="Ship orders on Saturdays and Sundays">
                <Switch />
              </Row>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="tax">
          <Card className="p-6 max-w-2xl">
            <h3 className="mb-4 text-sm font-semibold">Tax Settings</h3>
            <div className="space-y-4">
              <Row title="GST Number" desc="Displayed on invoices"><Input className="w-64" defaultValue="29ABCDE1234F1Z5" /></Row>
              <Row title="Default tax rate" desc="Applied when a product has no override"><Input className="w-24" defaultValue="18%" /></Row>
              <Row title="Prices include tax" desc="Product prices already include GST"><Switch defaultChecked /></Row>
              <Row title="Tax-exempt B2B" desc="Skip tax for verified B2B customers"><Switch /></Row>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="p-6 max-w-2xl">
            <h3 className="mb-4 text-sm font-semibold">Notifications</h3>
            <div className="space-y-4">
              <Row title="New order emails" desc="Get notified for every new order"><Switch defaultChecked /></Row>
              <Row title="Low stock alerts" desc="Alert when a product drops below threshold"><Switch defaultChecked /></Row>
              <Row title="B2B inquiry notifications" desc="Instant Slack + email pings"><Switch defaultChecked /></Row>
              <Row title="Weekly digest" desc="Every Monday at 9am"><Switch defaultChecked /></Row>
              <Row title="Marketing insights" desc="Monthly AI-generated recommendations"><Switch /></Row>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card className="p-6 max-w-2xl">
            <h3 className="mb-4 text-sm font-semibold">Security</h3>
            <div className="space-y-4">
              <Row title="Two-factor authentication" desc="Require 2FA for all admin users"><Switch defaultChecked /></Row>
              <Row title="Session timeout" desc="Auto sign-out after inactivity"><Input className="w-24" defaultValue="30 min" /></Row>
              <Row title="Audit log" desc="Track every admin action"><Switch defaultChecked /></Row>
              <Row title="IP allowlist" desc="Restrict admin access by IP"><Switch /></Row>
              <div className="pt-4"><Button variant="destructive">Reset all sessions</Button></div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function Row({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border pb-4 last:border-0 last:pb-0">
      <div className="min-w-0"><div className="text-sm font-medium">{title}</div><div className="text-xs text-muted-foreground">{desc}</div></div>
      <div className="shrink-0">{children}</div>
    </div>
  );
}
