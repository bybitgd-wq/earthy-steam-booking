import { Link } from "@tanstack/react-router";
import { Leaf, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/booking", label: "Booking" },
  { to: "/store", label: "Store" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
            <Leaf className="h-4 w-4" />
          </span>
          <span className="truncate font-display text-lg leading-none">
            Verdant Steam
            <span className="block text-[0.6rem] tracking-[0.22em] text-muted-foreground uppercase">
              Yoni wellness studio
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-6 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-sm text-foreground font-medium" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
            <Link to="/login">Log in</Link>
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/booking">Book</Link>
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-card px-5 py-3 lg:hidden">
          {[...nav, { to: "/login", label: "Log in" }, { to: "/signup", label: "Sign up" }].map(
            (item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block border-b border-border/60 py-2.5 text-sm last:border-0"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg">Verdant Steam</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Herbal yoni steaming, ritual care and cycle support in a quiet green room.
          </p>
        </div>
        <div className="text-sm">
          <p className="eyebrow">Explore</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="eyebrow">Studio</p>
          <p className="mt-3">14 Willow Court, Lekki, Lagos</p>
          <p>Tue – Sun, 9am – 7pm</p>
          <p className="mt-2">hello@verdantsteam.com</p>
        </div>
      </div>
      <p className="border-t border-border/70 px-5 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Verdant Steam. Wellness services, not medical treatment.
      </p>
    </footer>
  );
}

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-6xl px-5 pt-14">
      <header className="max-w-2xl">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-3 text-4xl sm:text-5xl">{title}</h1>
        {intro && <p className="mt-4 text-muted-foreground">{intro}</p>}
      </header>
      {children}
    </main>
  );
}
