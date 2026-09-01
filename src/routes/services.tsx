import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageShell } from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { memberships, services } from "@/data/catalog";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Memberships — Verdant Steam" },
      {
        name: "description",
        content:
          "Classic, cycle reset, postpartum and ritual yoni steam sessions, plus monthly membership plans.",
      },
      { property: "og:title", content: "Services & Memberships — Verdant Steam" },
      {
        property: "og:description",
        content: "Explore our yoni steam menu and monthly membership plans.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell
      eyebrow="The menu"
      title="Services & memberships"
      intro="Every session begins with a short intake and a blend chosen for where your body is today."
    >
      <Tabs defaultValue="services" className="mt-10">
        <TabsList>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="memberships">Memberships</TabsTrigger>
        </TabsList>

        <TabsContent value="services" className="mt-8">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <article
                key={s.id}
                className="flex flex-col rounded-3xl border border-border bg-card p-6"
              >
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                  <div className="min-w-0">
                    <h2 className="text-xl">{s.name}</h2>
                    <p className="mt-1 text-xs text-muted-foreground">{s.duration}</p>
                  </div>
                  <p className="shrink-0 font-display text-2xl">${s.price}</p>
                </div>
                {s.tag && (
                  <Badge variant="secondary" className="mt-3 w-fit">
                    {s.tag}
                  </Badge>
                )}
                <p className="mt-4 text-sm text-muted-foreground">{s.blurb}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.herbs.map((h) => (
                    <li
                      key={h}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="mt-6 w-fit">
                  <Link to="/booking" search={{ service: s.id }}>
                    Book this
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="memberships" className="mt-8">
          <div className="grid gap-6 md:grid-cols-3">
            {memberships.map((m) => (
              <article
                key={m.id}
                className={
                  "flex flex-col rounded-3xl border p-6 " +
                  (m.featured
                    ? "border-primary bg-primary/5 shadow-sm"
                    : "border-border bg-card")
                }
              >
                {m.featured && (
                  <Badge className="mb-3 w-fit">Most popular</Badge>
                )}
                <h2 className="text-2xl">{m.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{m.summary}</p>
                <p className="mt-5 font-display text-4xl">
                  ${m.price}
                  <span className="ml-1 font-sans text-xs text-muted-foreground">
                    {m.cadence}
                  </span>
                </p>
                <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                  {m.perks.map((p) => (
                    <li key={p} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{p}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant={m.featured ? "default" : "outline"} className="mt-8">
                  <Link to="/signup">Join {m.name}</Link>
                </Button>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Memberships are month-to-month and can be paused once per year. Unused credits roll
            over for 60 days.
          </p>
        </TabsContent>
      </Tabs>
    </PageShell>
  );
}
