import { createFileRoute, Link } from "@tanstack/react-router";
import { Flower2, HeartHandshake, Leaf, Sparkles } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import { Button } from "@/components/ui/button";
import { services } from "@/data/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Verdant Steam — Herbal Yoni Steaming Studio" },
      {
        name: "description",
        content:
          "A quiet green studio for herbal yoni steaming, cycle support and postpartum restoration. Book a ritual in Lagos.",
      },
      { property: "og:title", content: "Verdant Steam — Herbal Yoni Steaming Studio" },
      {
        property: "og:description",
        content: "Herbal yoni steaming, cycle support and postpartum care in a calm green room.",
      },
    ],
  }),
  component: Home,
});

const heroImages = [
  { src: hero1, alt: "Sage green spa room with folded linen towels and olive branches" },
  { src: hero2, alt: "Steaming herbal infusion in a stoneware bowl with dried flowers" },
  { src: hero3, alt: "Bundles of dried eucalyptus, lavender and herbs on linen" },
];

function Home() {
  return (
    <main>
      <section className="relative isolate overflow-hidden">
        {/* Hero background: 3 proportional, non-distorted images */}
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-1 sm:grid-cols-3"
        >
          {heroImages.map((img, i) => (
            <div
              key={img.src}
              className={
                "relative h-full w-full overflow-hidden " +
                (i > 0 ? "hidden sm:block" : "block")
              }
            >
              <img
                src={img.src}
                alt=""
                width={912}
                height={1200}
                className="h-full w-full object-cover object-center"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-background/25 dark:bg-background/45"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20 sm:to-background/10"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background"
        />

        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <div className="max-w-xl">
            <p className="eyebrow">Herbal yoni steaming · Lagos</p>
            <h1 className="mt-4 text-4xl leading-[1.05] sm:text-6xl">
              Warmth, herbs and a room that lets you exhale.
            </h1>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              Verdant Steam blends traditional yoni steaming with modern hygiene practice —
              cycle-timed sessions, postpartum restoration and rituals built around your body.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/booking">Book a session</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/services">See services</Link>
              </Button>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-border/70 pt-6 text-sm">
              {[
                ["8", "signature steams"],
                ["100%", "organic herbs"],
                ["6", "private rooms"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-display text-2xl text-foreground">{value}</dt>
                  <dd className="text-muted-foreground">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow">Why steam with us</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Leaf,
              title: "Small-batch herbs",
              body: "Blends milled weekly, sourced from organic growers and never pre-bagged.",
            },
            {
              icon: Flower2,
              title: "Cycle-aware timing",
              body: "We schedule around your phase, not just around our calendar.",
            },
            {
              icon: HeartHandshake,
              title: "Consent-first care",
              body: "Full intake, clear contraindications and a practitioner who stays nearby.",
            },
            {
              icon: Sparkles,
              title: "Ritual, not rush",
              body: "Tea, quiet, warm linens. Every booking includes 15 minutes of stillness.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-3xl border border-border bg-card p-6">
              <Icon className="h-5 w-5 text-primary" />
              <h3 className="mt-4 text-lg">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Popular sessions</p>
            <h2 className="mt-3 text-3xl">Start with one of these</h2>
          </div>
          <Button asChild variant="ghost">
            <Link to="/services">All services & memberships</Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.slice(0, 3).map((s) => (
            <article key={s.id} className="rounded-3xl border border-border bg-card p-6">
              <p className="text-xs text-muted-foreground">{s.duration}</p>
              <h3 className="mt-1 text-xl">{s.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.blurb}</p>
              <p className="mt-5 font-display text-2xl">${s.price}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-5">
        <div className="rounded-4xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
          <h2 className="text-3xl sm:text-4xl">Your first steam is 20% off</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm opacity-90">
            Includes a herbal consultation so we can match your blend before you sit down.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8">
            <Link to="/signup">Create an account</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
