import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, ChevronRight, Pencil, Trash2 } from "lucide-react";
import { PageHeader } from "@/components/layout/admin-layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Categories · Medral Health Co." },
      { name: "description", content: "Organize the Medral catalog into nested product categories." },
      { property: "og:title", content: "Categories · Medral Admin" },
      { property: "og:description", content: "Manage nested product taxonomy for Medral Health Co." },
    ],
  }),
  component: CategoriesPage,
});

type Cat = { id: string; name: string; count: number; active: boolean; children?: Cat[] };

const initial: Cat[] = [
  {
    id: "1", name: "Vitamins & Minerals", count: 84, active: true,
    children: [
      { id: "1a", name: "Multivitamins", count: 28, active: true },
      { id: "1b", name: "Vitamin D", count: 19, active: true },
      { id: "1c", name: "Magnesium", count: 12, active: true },
    ],
  },
  {
    id: "2", name: "Proteins & Fitness", count: 56, active: true,
    children: [
      { id: "2a", name: "Whey Protein", count: 22, active: true },
      { id: "2b", name: "Plant-Based Protein", count: 14, active: true },
      { id: "2c", name: "Creatine", count: 8, active: false },
    ],
  },
  { id: "3", name: "Herbal Supplements", count: 42, active: true },
  { id: "4", name: "Wellness & Beauty", count: 38, active: true },
  { id: "5", name: "Digestive Health", count: 24, active: false },
];

function Row({ c, level = 0 }: { c: Cat; level?: number }) {
  const [open, setOpen] = useState(true);
  const [on, setOn] = useState(c.active);
  return (
    <>
      <div className="group flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-muted/60" style={{ paddingLeft: 12 + level * 24 }}>
        {c.children ? (
          <button onClick={() => setOpen((o) => !o)} className="grid h-5 w-5 place-items-center rounded hover:bg-muted">
            <ChevronRight className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-90" : ""}`} />
          </button>
        ) : <span className="w-5" />}
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium">{c.name}</div>
          <div className="text-[11px] text-muted-foreground">{c.count} products</div>
        </div>
        <Switch checked={on} onCheckedChange={setOn} />
        <div className="flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
          <Button variant="ghost" size="icon" className="h-8 w-8"><Pencil className="h-3.5 w-3.5" /></Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive"><Trash2 className="h-3.5 w-3.5" /></Button>
        </div>
      </div>
      {open && c.children?.map((child) => <Row key={child.id} c={child} level={level + 1} />)}
    </>
  );
}

function CategoriesPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <PageHeader
        title="Categories"
        description="Organize your catalog into a nested taxonomy."
        actions={<Button size="sm"><Plus className="mr-1.5 h-4 w-4" />New Category</Button>}
      />
      <Card className="p-2">
        {initial.map((c) => <Row key={c.id} c={c} />)}
      </Card>
    </div>
  );
}
