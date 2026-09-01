import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log In — Verdant Steam" },
      {
        name: "description",
        content: "Sign in to manage your steam bookings, membership credits and store orders.",
      },
      { property: "og:title", content: "Log In — Verdant Steam" },
      {
        property: "og:description",
        content: "Access your Verdant Steam bookings and membership.",
      },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <main className="mx-auto flex max-w-md flex-col px-5 py-20">
      <p className="eyebrow">Members</p>
      <h1 className="mt-3 text-4xl">Welcome back</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Sign in to see your credits, upcoming sessions and saved blends.
      </p>
      <form
        className="mt-8 space-y-5 rounded-3xl border border-border bg-card p-6"
        onSubmit={(e) => {
          e.preventDefault();
          toast.info("Accounts are coming soon", {
            description: "Connect a backend to enable real sign-in.",
          });
        }}
      >
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required className="mt-2" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required className="mt-2" />
        </div>
        <Button type="submit" className="w-full">
          Log in
        </Button>
      </form>
      <p className="mt-6 text-sm text-muted-foreground">
        New here?{" "}
        <Link to="/signup" className="text-foreground underline underline-offset-4">
          Create an account
        </Link>
      </p>
    </main>
  );
}
