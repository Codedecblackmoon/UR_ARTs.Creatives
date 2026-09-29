import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { WORK } from "@/lib/siteData";

export default function FeaturedWork() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              Selected work
            </p>
            <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-none lg:text-5xl">
              Featured work
            </h2>
          </div>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 rounded-full border-2 border-foreground px-6 py-3 text-sm font-semibold transition-colors hover:bg-foreground hover:text-white"
          >
            View all work <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {WORK.map((project) => (
            <Link
              key={project.slug}
              to={`/work/${project.slug}`}
              className="group relative block overflow-hidden rounded-2xl border-2 border-foreground bg-card"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:h-80"
              />
              <div className="flex items-center justify-between gap-4 p-5">
                <div>
                  <h3 className="font-display text-xl font-bold leading-tight">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{project.category}</p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}