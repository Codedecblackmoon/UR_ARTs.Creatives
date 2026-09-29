import PageHero from "@/components/shared/PageHero";
import CTABand from "@/components/shared/CTABand";
import FaqAccordion from "@/components/shared/FaqAccordion";
import { FAQS } from "@/lib/siteData";

export default function FAQ() {
  return (
    <>
      <PageHero
        eyebrow="Questions"
        title="Frequently asked"
        subtitle="Everything you might want to know before we start working together. Still curious? Just ask."
      />

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <FaqAccordion items={FAQS} />
      </section>

      <CTABand
        title="Still have a question?"
        text="Send it our way — we'll get back to you with a straight answer."
        buttonLabel="Get in touch"
      />
    </>
  );
}