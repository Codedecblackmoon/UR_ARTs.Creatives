import PageHero from "@/components/shared/PageHero";
import CTABand from "@/components/shared/CTABand";
import { POSTS } from "@/lib/siteData";

export default function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Blog"
        subtitle="Straightforward thinking on branding, web, SEO and marketing — no fluff, no jargon."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-3">
          {POSTS.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col overflow-hidden rounded-2xl border-2 border-foreground bg-card shadow-[6px_6px_0_0_hsl(var(--foreground))]"
            >
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="h-52 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-primary">
                  <span>{post.category}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{post.date}</span>
                </div>
                <h2 className="mt-4 font-display text-xl font-bold leading-tight">{post.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}