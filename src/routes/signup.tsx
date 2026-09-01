import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create an Account — Verdant Steam" },
      {
        name: "description",
        content:
          "Create a Verdant Steam account to book sessions, join a membership and get 20% off your first steam.",
      },
      { property: "og:title", content: "Create an Account — Verdant Steam" },
      {
        property: "og:description",
        content: "Join Verdant Steam and get 20% off your first herbal steam session.",
      },
    ],
  }),
  component: SignupPage,
});

function SignupPage() {
  return (
    <main className="mx-auto flex max-w-md flex-col px-5 py-20">
      <p className="eyebrow">Join us</p>
      <h1 className="mt-3 text-4xl">Create your account</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        First steam is 20% off, herbal consultation included.
      </p>
      <form
        className="mt-8 space-y-5 rounded-3xl border border-border bg-card p-6"
        onSubmit={(e) => {
          e.preventDefault();
          toast.info("Accounts are coming soon", {
            description: "Connect a backend to store real member profiles.",
          });
        }}
      >
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" required className="mt-2" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required className="mt-2" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required className="mt-2" />
        </div>
        <Button type="submit" className="w-full">
          Sign up
        </Button>
      </form>
      <p className="mt-6 text-sm text-muted-foreground">
        Already a member?{" "}
        <Link to="/login" className="text-foreground underline underline-offset-4">
          Log in
        </Link>
      </p>
    </main>
  );
}
