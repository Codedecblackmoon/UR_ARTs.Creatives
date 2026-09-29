import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/siteData";

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Kind words
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-none lg:text-5xl">
            What clients say
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border-2 border-foreground bg-card p-7 shadow-[6px_6px_0_0_hsl(var(--foreground))]"
            >
              <Quote className="h-8 w-8 text-primary" />
              <blockquote className="mt-5 flex-1 text-base leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <span className="block font-display font-bold">{t.name}</span>
                <span className="block text-sm text-muted-foreground">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
