import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import CTABand from "@/components/shared/CTABand";
import Process from "@/components/home/Process";
import { SERVICES } from "@/lib/siteData";

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Services"
        subtitle="Six ways we give your brand a fighting chance — take one, or take the lot. Everything is built to work together."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.Icon;
            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group flex flex-col rounded-2xl border-2 border-foreground bg-card p-7 shadow-[6px_6px_0_0_hsl(var(--foreground))] transition-transform hover:-translate-y-1"
              >
                <span className="grid h-14 w-14 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <Icon className="h-7 w-7" />
                </span>
                <h2 className="mt-6 font-display text-xl font-bold leading-tight">
                  {service.name}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.short}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Explore{" "}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <Process />
      <CTABand />
    </>
  );
}