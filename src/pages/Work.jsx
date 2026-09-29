import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import CTABand from "@/components/shared/CTABand";
import { WORK } from "@/lib/siteData";

const CATEGORIES = ["All", ...Array.from(new Set(WORK.map((w) => w.category)))];

export default function Work() {
  const [filter, setFilter] = useState("All");
  const items = filter === "All" ? WORK : WORK.filter((w) => w.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Work"
        subtitle="A look at the brands, websites and campaigns we've built — and the results they delivered."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`rounded-full border-2 border-foreground px-5 py-2 text-sm font-semibold transition-colors ${
                filter === cat
                  ? "bg-foreground text-white"
                  : "bg-transparent text-foreground hover:bg-foreground/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {items.map((project) => (
            <Link
              key={project.slug}
              to={`/work/${project.slug}`}
              className="group block overflow-hidden rounded-2xl border-2 border-foreground bg-card"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:h-80"
              />
              <div className="flex items-center justify-between gap-4 p-5">
                <div>
                  <h2 className="font-display text-xl font-bold leading-tight">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">{project.category}</p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}