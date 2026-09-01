import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { PageShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/data/catalog";

const searchSchema = z.object({ service: z.string().optional() });

export const Route = createFileRoute("/booking")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Book a Steam Session — Zenshe Spa" },
      {
        name: "description",
        content:
          "Choose your yoni steam service, date and time, and tell us about your cycle before you arrive.",
      },
      { property: "og:title", content: "Book a Steam Session — Zenshe Spa" },
      {
        property: "og:description",
        content: "Reserve a private herbal steam room at Zenshe Spa.",
      },
    ],
  }),
  component: BookingPage,
});

const times = ["9:00 am", "10:30 am", "12:00 pm", "1:30 pm", "3:00 pm", "4:30 pm", "6:00 pm"];

function BookingPage() {
  const { service } = Route.useSearch();
  const [selected, setSelected] = useState(service ?? services[0]!.id);
  const [time, setTime] = useState(times[2]!);
  const current = services.find((s) => s.id === selected) ?? services[0]!;

  return (
    <PageShell
      eyebrow="Reservations"
      title="Book your session"
      intro="Sessions are private and one-at-a-time. We hold your slot for 15 minutes past the hour."
    >
      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <form
          className="rounded-3xl border border-border bg-card p-6 sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Request received", {
              description: `We'll confirm your ${current.name} by email shortly.`,
            });
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <Label htmlFor="service">Service</Label>
              <Select value={selected} onValueChange={setSelected}>
                <SelectTrigger id="service" className="mt-2 w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {services.map((s) => (
                    <SelectItem key={s.id} value={s.id}>
                      {s.name} — ${s.price}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="name">Full name</Label>
              <Input id="name" required className="mt-2" placeholder="Ada Nwosu" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required className="mt-2" placeholder="you@email.com" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" className="mt-2" placeholder="+234 800 000 0000" />
            </div>
            <div>
              <Label htmlFor="date">Preferred date</Label>
              <Input id="date" type="date" required className="mt-2" />
            </div>
            <div className="sm:col-span-2">
              <Label>Preferred time</Label>
              <div className="mt-2 flex flex-wrap gap-2">
                {times.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTime(t)}
                    className={
                      "rounded-full border px-4 py-2 text-sm transition-colors " +
                      (time === t
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:bg-secondary")
                    }
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="notes">Anything we should know?</Label>
              <Textarea
                id="notes"
                className="mt-2"
                rows={4}
                placeholder="Cycle day, pregnancy, IUD, recent surgery, herb sensitivities…"
              />
            </div>
          </div>
          <Button type="submit" size="lg" className="mt-8 w-full sm:w-auto">
            Request booking
          </Button>
        </form>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-border bg-secondary/40 p-6">
            <p className="eyebrow">Your selection</p>
            <h2 className="mt-3 text-xl">{current.name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{current.duration}</p>
            <p className="mt-4 text-sm text-muted-foreground">{current.blurb}</p>
            <div className="mt-5 flex items-baseline justify-between border-t border-border pt-4">
              <span className="text-sm text-muted-foreground">{time}</span>
              <span className="font-display text-3xl">${current.price}</span>
            </div>
          </div>
          <div className="rounded-3xl border border-border p-6 text-sm text-muted-foreground">
            <p className="eyebrow">Before you come</p>
            <ul className="mt-3 space-y-2">
              <li>Arrive 10 minutes early for intake and tea.</li>
              <li>Do not steam while pregnant, bleeding, or with an active infection.</li>
              <li>Wear something loose; we provide a wrap and warm linens.</li>
              <li>Free rescheduling up to 24 hours before your slot.</li>
            </ul>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
