import { PROCESS } from "@/lib/siteData";

export default function Process() {
  return (
    <section className="bg-foreground py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            How we work
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-none lg:text-5xl">
            Our process
          </h2>
          <p className="mt-4 text-white/70">
            Four clear steps from first conversation to measurable growth.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((item) => (
            <div key={item.step} className="border-t-2 border-white/15 pt-6">
              <span className="font-display text-5xl font-extrabold text-primary">
                {item.step}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold uppercase">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}