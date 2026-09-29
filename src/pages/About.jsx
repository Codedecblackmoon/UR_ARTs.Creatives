import PageHero from "@/components/shared/PageHero";
import CTABand from "@/components/shared/CTABand";
import Process from "@/components/home/Process";
import { ABOUT } from "@/lib/siteData";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="We give brands a fighting chance"
        subtitle="A small, senior studio obsessed with work that performs — not just work that looks good."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="font-display text-3xl font-extrabold uppercase">Our story</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
              {ABOUT.story.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border-2 border-foreground bg-primary p-8 text-primary-foreground shadow-[6px_6px_0_0_hsl(var(--foreground))]">
            <h3 className="font-display text-2xl font-extrabold uppercase">The short version</h3>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed">
              <li>Small, senior team — no hand-offs.</li>
              <li>Design and marketing under one roof.</li>
              <li>Honest advice and clear pricing.</li>
              <li>Built for measurable results.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-foreground py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-extrabold uppercase">What we stand for</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT.values.map((value) => (
              <div key={value.title} className="border-t-2 border-white/15 pt-6">
                <h3 className="font-display text-xl font-bold uppercase">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <h2 className="font-display text-3xl font-extrabold uppercase">Meet the team</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT.team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border-2 border-foreground bg-card p-6 text-center shadow-[6px_6px_0_0_hsl(var(--foreground))]"
            >
              <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-primary font-display text-2xl font-extrabold text-primary-foreground">
                {member.initials}
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">{member.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <Process />
      <CTABand />
    </>
  );
}