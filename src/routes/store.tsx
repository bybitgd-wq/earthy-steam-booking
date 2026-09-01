import { createFileRoute } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { PageShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { products } from "@/data/catalog";

export const Route = createFileRoute("/store")({
  head: () => ({
    meta: [
      { title: "Herbal Store — Verdant Steam" },
      {
        name: "description",
        content:
          "Small-batch steam blends, foldable steam seats, womb massage oil and at-home ritual kits.",
      },
      { property: "og:title", content: "Herbal Store — Verdant Steam" },
      {
        property: "og:description",
        content: "Shop steam blends, tools and at-home ritual kits from Verdant Steam.",
      },
    ],
  }),
  component: StorePage,
});

const categories = ["All", "Blends", "Tools", "Body", "Kits"] as const;

function StorePage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [cart, setCart] = useState<string[]>([]);

  const visible = useMemo(
    () => (filter === "All" ? products : products.filter((p) => p.category === filter)),
    [filter],
  );
  const total = cart.reduce(
    (sum, id) => sum + (products.find((p) => p.id === id)?.price ?? 0),
    0,
  );

  return (
    <PageShell
      eyebrow="Retail"
      title="The herbal store"
      intro="Take the ritual home. Blends are milled weekly and shipped within two days."
    >
      <div className="mt-8 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <div className="flex min-w-0 flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={
                "rounded-full border px-4 py-1.5 text-sm transition-colors " +
                (filter === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:bg-secondary")
              }
            >
              {c}
            </button>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm">
          <ShoppingBag className="h-4 w-4 text-primary" />
          {cart.length} · ${total}
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <article
            key={p.id}
            className="flex flex-col rounded-3xl border border-border bg-card p-6"
          >
            <span className="eyebrow">{p.category}</span>
            <h2 className="mt-3 text-lg">{p.name}</h2>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.blurb}</p>
            <div className="mt-5 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
              <p className="font-display text-2xl">${p.price}</p>
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setCart((c) => [...c, p.id]);
                  toast.success(`${p.name} added to bag`);
                }}
              >
                Add to bag
              </Button>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
