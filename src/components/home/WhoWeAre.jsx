import { Sparkles } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex items-center gap-5">
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-foreground text-primary lg:h-20 lg:w-20">
            <Sparkles className="h-8 w-8 lg:h-10 lg:w-10" />
          </span>
          <h2 className="font-marker text-4xl leading-none text-primary sm:text-5xl lg:text-6xl">
            Who are we
          </h2>
        </div>
        <p className="text-lg leading-relaxed text-muted-foreground lg:text-xl">
          We're a dedicated, detail-obsessed design studio with a creative approach to every brief.
          From brand identity to websites, SEO and campaigns, we build work that's efficient,
          scalable and impossible to ignore — always with your audience and your bottom line in
          mind.
        </p>
      </div>
    </section>
  );
}