import { createFileRoute } from "@tanstack/react-router";
import { Check, Plus } from "lucide-react";
import { PageHeader } from "@/components/layout/admin-layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { adminUsers } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/users")({
  head: () => ({
    meta: [
      { title: "Users & Roles · Medral Health Co." },
      { name: "description", content: "Admin team, role assignments and granular permissions for Medral." },
      { property: "og:title", content: "Users & Roles · Medral Admin" },
      { property: "og:description", content: "Manage team members and access controls for the Medral admin portal." },
    ],
  }),
  component: UsersPage,
});

const roleStyles: Record<string, string> = {
  "Super Admin": "bg-primary/10 text-primary ring-primary/20",
  "Admin": "bg-violet-500/10 text-violet-600 dark:text-violet-400 ring-violet-500/20",
  "Manager": "bg-sky-500/10 text-sky-600 dark:text-sky-400 ring-sky-500/20",
  "Editor": "bg-amber-500/10 text-amber-600 dark:text-amber-400 ring-amber-500/20",
  "Support": "bg-slate-500/10 text-muted-foreground ring-slate-500/20",
};

const permissions = [
  { module: "Products", roles: { "Super Admin": true, "Admin": true, "Manager": true, "Editor": true, "Support": false } },
  { module: "Orders", roles: { "Super Admin": true, "Admin": true, "Manager": true, "Editor": false, "Support": true } },
  { module: "Customers", roles: { "Super Admin": true, "Admin": true, "Manager": true, "Editor": false, "Support": true } },
  { module: "B2B Inquiries", roles: { "Super Admin": true, "Admin": true, "Manager": true, "Editor": false, "Support": false } },
  { module: "Analytics", roles: { "Super Admin": true, "Admin": true, "Manager": true, "Editor": false, "Support": false } },
  { module: "Users & Roles", roles: { "Super Admin": true, "Admin": false, "Manager": false, "Editor": false, "Support": false } },
  { module: "Settings", roles: { "Super Admin": true, "Admin": true, "Manager": false, "Editor": false, "Support": false } },
];

function UsersPage() {
  return (
    <div className="animate-in fade-in duration-500 space-y-6">
      <PageHeader
        title="Users & Roles"
        description="Manage team members and their permissions."
        actions={<Button size="sm"><Plus className="mr-1.5 h-4 w-4" />Invite Admin</Button>}
      />

      <Card className="p-4">
        <h3 className="mb-3 px-1 text-sm font-semibold">Admin Team</h3>
        <div className="overflow-hidden rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/40">
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {adminUsers.map((u) => (
                <TableRow key={u.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/15 text-[11px] font-semibold text-primary">{u.avatar}</div>
                      <div><div className="text-sm font-medium">{u.name}</div><div className="text-xs text-muted-foreground">{u.email}</div></div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ring-1 ring-inset", roleStyles[u.role])}>{u.role}</span>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{u.lastActive}</TableCell>
                  <TableCell><Button variant="ghost" size="sm">Edit</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="mb-3 px-1 text-sm font-semibold">Permissions Matrix</h3>
        <div className="overflow-x-auto rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/40">
                <TableHead>Module</TableHead>
                {Object.keys(permissions[0].roles).map((r) => <TableHead key={r} className="text-center">{r}</TableHead>)}
              </TableRow>
            </TableHeader>
            <TableBody>
              {permissions.map((p) => (
                <TableRow key={p.module}>
                  <TableCell className="text-sm font-medium">{p.module}</TableCell>
                  {Object.entries(p.roles).map(([role, allowed]) => (
                    <TableCell key={role} className="text-center">
                      {allowed ? (
                        <span className="inline-grid h-5 w-5 place-items-center rounded-full bg-primary/15 text-primary"><Check className="h-3 w-3" /></span>
                      ) : (
                        <span className="text-muted-foreground/40">—</span>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
