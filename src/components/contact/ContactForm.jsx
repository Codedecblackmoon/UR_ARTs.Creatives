import { useState } from "react";
// import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check } from "lucide-react";
import { SERVICES, BUDGETS } from "@/lib/siteData";

const EMPTY = { name: "", email: "", phone: "", service: "", budget: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      await base44.entities.ContactSubmission.create(form);
      setForm(EMPTY);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError("Something went wrong. Please try again, or reach us on WhatsApp.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border-2 border-foreground bg-card p-10 text-center shadow-[6px_6px_0_0_hsl(var(--foreground))]">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground">
          <Check className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold uppercase">Message sent</h3>
        <p className="mt-3 text-muted-foreground">
          Thanks — we've got your enquiry and we'll be in touch shortly.
        </p>
        <Button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full bg-foreground text-white hover:bg-foreground/90"
        >
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border-2 border-foreground bg-card p-6 shadow-[6px_6px_0_0_hsl(var(--foreground))] sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <Label htmlFor="name">Name</Label>
          <Input id="name" required value={form.name} onChange={update("name")} className="mt-2" />
        </div>
        <div className="sm:col-span-1">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            className="mt-2"
          />
        </div>
        <div className="sm:col-span-1">
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input id="phone" value={form.phone} onChange={update("phone")} className="mt-2" />
        </div>
        <div className="sm:col-span-1">
          <Label htmlFor="service">Service you're interested in</Label>
          <select
            id="service"
            value={form.service}
            onChange={update("service")}
            className="mt-2 h-10 w-full rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="budget">Budget range</Label>
          <select
            id="budget"
            value={form.budget}
            onChange={update("budget")}
            className="mt-2 h-10 w-full rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="">Select a range</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            required
            rows={5}
            value={form.message}
            onChange={update("message")}
            className="mt-2"
          />
        </div>
      </div>

      {error && <p className="mt-4 text-sm font-medium text-primary">{error}</p>}

      <Button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 w-full rounded-full bg-primary py-6 text-base font-semibold text-primary-foreground hover:bg-primary/90"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}