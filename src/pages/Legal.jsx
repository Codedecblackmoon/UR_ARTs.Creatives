import PageHero from "@/components/shared/PageHero";
import { LEGAL } from "@/lib/siteData";

export default function Legal({ doc }) {
  const data = LEGAL[doc] || LEGAL.privacy;

  return (
    <>
      <PageHero eyebrow="Legal" title={data.title} subtitle={`Last updated ${data.updated}`} />
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        {data.sections.map((section) => (
          <div key={section.h} className="mt-10 first:mt-0">
            <h2 className="font-display text-xl font-bold uppercase">{section.h}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{section.p}</p>
          </div>
        ))}
      </section>
    </>
  );
}
