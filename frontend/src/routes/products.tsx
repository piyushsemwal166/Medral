import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Search, Filter, Pencil, Trash2, MoreHorizontal, Download } from "lucide-react";
import { PageHeader } from "@/components/layout/admin-layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StatusBadge } from "@/components/ui/status-badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { products } from "@/lib/mock-data";
import { toast } from "sonner";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products · Medral Health Co." },
      { name: "description", content: "Manage the Medral supplement product catalog — pricing, stock, categories and imagery." },
      { property: "og:title", content: "Products · Medral Admin" },
      { property: "og:description", content: "Full product catalog management for Medral Health Co." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("all");
  const [open, setOpen] = useState(false);

  const filtered = products.filter((p) => {
    if (cat !== "all" && p.category !== cat) return false;
    if (query && !`${p.name} ${p.sku}`.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="animate-in fade-in duration-500">
      <PageHeader
        title="Products"
        description="Manage your product catalog, pricing, and inventory."
        actions={
          <>
            <Button variant="outline" size="sm"><Download className="mr-1.5 h-4 w-4" />Export</Button>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button size="sm"><Plus className="mr-1.5 h-4 w-4" />Add Product</Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>New Product</DialogTitle>
                  <DialogDescription>Add a new item to the Medral catalog.</DialogDescription>
                </DialogHeader>
                <ProductForm onSubmit={() => { setOpen(false); toast.success("Product created"); }} />
              </DialogContent>
            </Dialog>
          </>
        }
      />

      <Card className="p-4">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <div className="relative min-w-0 flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search products or SKU..." value={query} onChange={(e) => setQuery(e.target.value)} className="pl-9" />
          </div>
          <Select value={cat} onValueChange={setCat}>
            <SelectTrigger className="w-[160px]"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All categories</SelectItem>
              <SelectItem value="Vitamins">Vitamins</SelectItem>
              <SelectItem value="Proteins">Proteins</SelectItem>
              <SelectItem value="Herbals">Herbals</SelectItem>
              <SelectItem value="Wellness">Wellness</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon"><Filter className="h-4 w-4" /></Button>
        </div>

        <div className="overflow-hidden rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/40">
                <TableHead>Product</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Regular</TableHead>
                <TableHead className="text-right">Sale</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-10"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((p) => (
                <TableRow key={p.id} className="hover:bg-muted/30">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-muted text-lg">{p.image}</div>
                      <div className="min-w-0"><div className="text-sm font-medium">{p.name}</div></div>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-xs text-muted-foreground">{p.sku}</TableCell>
                  <TableCell><span className="rounded-md bg-muted px-2 py-0.5 text-xs">{p.category}</span></TableCell>
                  <TableCell className="text-right text-sm text-muted-foreground line-through">${p.price.toFixed(2)}</TableCell>
                  <TableCell className="text-right text-sm font-semibold">${p.salePrice.toFixed(2)}</TableCell>
                  <TableCell>
                    {p.stock === 0 ? (
                      <span className="rounded-md bg-rose-500/10 px-1.5 py-0.5 text-[11px] font-semibold text-rose-600 dark:text-rose-400">Out</span>
                    ) : p.stock < 20 ? (
                      <span className="rounded-md bg-amber-500/10 px-1.5 py-0.5 text-[11px] font-semibold text-amber-600 dark:text-amber-400">Low · {p.stock}</span>
                    ) : (
                      <span className="text-sm">{p.stock}</span>
                    )}
                  </TableCell>
                  <TableCell><StatusBadge status={p.status} /></TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="h-4 w-4" /></Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem><Pencil className="mr-2 h-4 w-4" />Edit</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive"><Trash2 className="mr-2 h-4 w-4" />Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
          <div>Showing {filtered.length} of {products.length} products</div>
          <div className="flex gap-1">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

function ProductForm({ onSubmit }: { onSubmit: () => void }) {
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); onSubmit(); }}
      className="grid gap-4 py-2"
    >
      <div className="grid gap-2">
        <Label>Product Name</Label>
        <Input placeholder="e.g. Vitamin C 1000mg" required />
      </div>
      <div className="grid gap-2">
        <Label>Description</Label>
        <Textarea rows={3} placeholder="Short marketing description..." />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label>Category</Label>
          <Select><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Vitamins">Vitamins</SelectItem>
              <SelectItem value="Proteins">Proteins</SelectItem>
              <SelectItem value="Herbals">Herbals</SelectItem>
              <SelectItem value="Wellness">Wellness</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label>Brand</Label>
          <Input placeholder="Medral" defaultValue="Medral" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="grid gap-2"><Label>SKU</Label><Input placeholder="MED-XXX-000" /></div>
        <div className="grid gap-2"><Label>Regular Price</Label><Input type="number" step="0.01" placeholder="0.00" /></div>
        <div className="grid gap-2"><Label>Sale Price</Label><Input type="number" step="0.01" placeholder="0.00" /></div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2"><Label>Stock Quantity</Label><Input type="number" placeholder="0" /></div>
        <div className="grid gap-2"><Label>Images</Label>
          <div className="flex h-10 items-center justify-center rounded-md border border-dashed border-border text-xs text-muted-foreground">Drop images or click to upload</div>
        </div>
      </div>
      <div className="rounded-lg border border-border bg-muted/30 p-3">
        <div className="mb-2 text-xs font-semibold text-foreground">SEO</div>
        <div className="grid gap-2"><Input placeholder="Meta title" /><Textarea rows={2} placeholder="Meta description" /></div>
      </div>
      <DialogFooter>
        <Button type="submit">Save Product</Button>
      </DialogFooter>
    </form>
  );
}
