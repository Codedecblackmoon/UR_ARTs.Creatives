import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import CTABand from "@/components/shared/CTABand";
import { WORK } from "@/lib/siteData";

export default function CaseStudy() {
  const { slug } = useParams();
  const project = WORK.find((w) => w.slug === slug);

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-32 text-center">
        <h1 className="font-display text-4xl font-extrabold uppercase">Project not found</h1>
        <Link to="/work" className="mt-6 inline-block font-semibold text-primary underline">
          Back to all work
        </Link>
      </div>
    );
  }

  return (
    <>
      <PageHero eyebrow={project.category} title={project.title} subtitle={project.solution} />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> All work
        </Link>

        <img
          src={project.image}
          alt={project.title}
          className="mt-8 w-full rounded-2xl border-2 border-foreground object-cover"
        />

        <div className="mt-10 grid gap-4 border-y border-border py-6 sm:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Client
            </p>
            <p className="mt-1 font-display font-bold">{project.client}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Year
            </p>
            <p className="mt-1 font-display font-bold">{project.year}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Services
            </p>
            <p className="mt-1 font-display font-bold">{project.services.join(", ")}</p>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-extrabold uppercase">The challenge</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{project.challenge}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-extrabold uppercase">Our solution</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{project.solution}</p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {project.results.map((r) => (
            <div
              key={r.label}
              className="rounded-2xl border-2 border-foreground bg-card p-6 text-center shadow-[6px_6px_0_0_hsl(var(--foreground))]"
            >
              <p className="font-display text-4xl font-extrabold text-primary">{r.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{r.label}</p>
            </div>
          ))}
        </div>

        {project.gallery?.length > 0 && (
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {project.gallery.map((img) => (
              <img
                key={img}
                src={img}
                alt={`${project.title} detail`}
                loading="lazy"
                className="w-full rounded-2xl border-2 border-foreground object-cover"
              />
            ))}
          </div>
        )}
      </section>

      <CTABand />
    </>
  );
}
