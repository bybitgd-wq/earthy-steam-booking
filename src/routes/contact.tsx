import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { PageShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Studio Hours — Verdant Steam" },
      {
        name: "description",
        content:
          "Visit our Lekki studio, call us, or send a question about blends, memberships and postpartum steaming.",
      },
      { property: "og:title", content: "Contact & Studio Hours — Verdant Steam" },
      {
        property: "og:description",
        content: "Reach the Verdant Steam team about sessions, blends and memberships.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell
      eyebrow="Say hello"
      title="Contact the studio"
      intro="Questions about blends, memberships or whether steaming suits you right now? We answer within a day."
    >
      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <form
          className="rounded-3xl border border-border bg-card p-6 sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Message sent", { description: "We'll reply within one working day." });
          }}
        >
          <div className="grid gap-5">
            <div>
              <Label htmlFor="cname">Name</Label>
              <Input id="cname" required className="mt-2" />
            </div>
            <div>
              <Label htmlFor="cemail">Email</Label>
              <Input id="cemail" type="email" required className="mt-2" />
            </div>
            <div>
              <Label htmlFor="cmsg">Message</Label>
              <Textarea id="cmsg" rows={5} required className="mt-2" />
            </div>
          </div>
          <Button type="submit" className="mt-6">
            Send message
          </Button>
        </form>

        <div className="space-y-4">
          {[
            { icon: MapPin, label: "Studio", value: "14 Willow Court, Lekki Phase 1, Lagos" },
            { icon: Clock, label: "Hours", value: "Tue – Sun, 9:00am – 7:00pm (closed Mondays)" },
            { icon: Phone, label: "Phone", value: "+234 800 111 2233" },
            { icon: Mail, label: "Email", value: "hello@verdantsteam.com" },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex gap-4 rounded-3xl border border-border bg-secondary/30 p-6"
            >
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div className="min-w-0">
                <p className="eyebrow">{label}</p>
                <p className="mt-1 text-sm">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
