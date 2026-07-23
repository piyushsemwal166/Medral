import { cn } from "@/lib/utils";

const styles: Record<string, string> = {
  paid: "bg-primary/10 text-primary ring-primary/20",
  active: "bg-primary/10 text-primary ring-primary/20",
  delivered: "bg-primary/10 text-primary ring-primary/20",
  won: "bg-primary/10 text-primary ring-primary/20",
  shipped: "bg-sky-500/10 text-sky-600 dark:text-sky-400 ring-sky-500/20",
  pending: "bg-amber-500/10 text-amber-600 dark:text-amber-400 ring-amber-500/20",
  new: "bg-sky-500/10 text-sky-600 dark:text-sky-400 ring-sky-500/20",
  negotiation: "bg-violet-500/10 text-violet-600 dark:text-violet-400 ring-violet-500/20",
  quoted: "bg-amber-500/10 text-amber-600 dark:text-amber-400 ring-amber-500/20",
  cancelled: "bg-rose-500/10 text-rose-600 dark:text-rose-400 ring-rose-500/20",
  lost: "bg-rose-500/10 text-rose-600 dark:text-rose-400 ring-rose-500/20",
  expired: "bg-slate-500/10 text-muted-foreground ring-slate-500/20",
  inactive: "bg-slate-500/10 text-muted-foreground ring-slate-500/20",
  draft: "bg-slate-500/10 text-muted-foreground ring-slate-500/20",
  archived: "bg-slate-500/10 text-muted-foreground ring-slate-500/20",
  vip: "bg-violet-500/10 text-violet-600 dark:text-violet-400 ring-violet-500/20",
};

export function StatusBadge({ status }: { status: string }) {
  const style = styles[status.toLowerCase()] ?? "bg-muted text-muted-foreground ring-border";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium capitalize ring-1 ring-inset",
        style,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      {status}
    </span>
  );
}
