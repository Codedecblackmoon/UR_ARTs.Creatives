import { useParams, Link } from "react-router-dom";
import { Check, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import CTABand from "@/components/shared/CTABand";
import FaqAccordion from "@/components/shared/FaqAccordion";
import { SERVICES, WORK } from "@/lib/siteData";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-32 text-center">
        <h1 className="font-display text-4xl font-extrabold uppercase">Service not found</h1>
        <Link to="/services" className="mt-6 inline-block font-semibold text-primary underline">
          Back to all services
        </Link>
      </div>
    );
  }

  const Icon = service.Icon;
  const related = WORK.slice(0, 3);

  return (
    <>
      <PageHero eyebrow="Service" title={service.name} subtitle={service.pitch} />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-3xl font-extrabold uppercase">What's included</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.included.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-foreground bg-card p-8 shadow-[6px_6px_0_0_hsl(var(--foreground))]">
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-primary text-primary-foreground">
              <Icon className="h-8 w-8" />
            </span>
            <p className="mt-6 text-lg leading-relaxed">{service.short}</p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-foreground py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-extrabold uppercase">Our approach</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.approach.map((step, i) => (
              <div key={step.title} className="border-t-2 border-white/15 pt-6">
                <span className="font-display text-5xl font-extrabold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold uppercase">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <h2 className="font-display text-3xl font-extrabold uppercase">Related work</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {related.map((project) => (
            <Link
              key={project.slug}
              to={`/work/${project.slug}`}
              className="group block overflow-hidden rounded-2xl border-2 border-foreground bg-card"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-5">
                <h3 className="font-display text-lg font-bold">{project.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{project.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-background pb-20 lg:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-extrabold uppercase">Frequently asked</h2>
          <div className="mt-8">
            <FaqAccordion items={service.faqs} />
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}