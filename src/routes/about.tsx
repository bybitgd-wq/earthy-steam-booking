import { createFileRoute } from "@tanstack/react-router";
import hero3 from "@/assets/hero-3.jpg";
import { PageShell } from "@/components/site-shell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Studio — Verdant Steam" },
      {
        name: "description",
        content:
          "Verdant Steam is a herbalist-led yoni steaming studio built on traditional practice and careful modern hygiene.",
      },
      { property: "og:title", content: "About the Studio — Verdant Steam" },
      {
        property: "og:description",
        content: "Meet the herbalists behind Verdant Steam and how we practise.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell
      eyebrow="Our story"
      title="A practice rooted in old knowledge"
      intro="Yoni steaming is generations old. Our job is to hold it carefully — clean rooms, honest herbs, and no promises we can't keep."
    >
      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <img
          src={hero3}
          alt="Dried herb bundles laid out on linen in the studio apothecary"
          loading="lazy"
          width={912}
          height={1200}
          className="h-80 w-full rounded-3xl object-cover lg:h-full"
        />
        <div className="space-y-6 text-muted-foreground">
          <p>
            Verdant Steam began in a back room with one steam seat, a pot of mugwort and a
            waiting list of friends. Six years later we run six private rooms and mill our own
            blends, but the format hasn't changed: sit down, breathe out, be looked after.
          </p>
          <p>
            Every practitioner is trained in intake screening and contraindications. We will
            happily turn a session away if steaming isn't right for you that week — and we'll
            tell you why.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              ["2020", "Studio founded in a single back room"],
              ["6", "Private steam rooms today"],
              ["11", "House blends milled in-house"],
              ["4,000+", "Sessions held and counting"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-2xl border border-border p-5">
                <p className="font-display text-2xl text-foreground">{k}</p>
                <p className="mt-1 text-sm">{v}</p>
              </div>
            ))}
          </div>
          <p className="text-xs">
            Verdant Steam offers wellness services. Nothing here is medical advice or a
            substitute for care from your doctor or midwife.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
