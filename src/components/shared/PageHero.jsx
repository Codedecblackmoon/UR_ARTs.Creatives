export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-foreground py-20 text-white lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && <p className="mt-5 max-w-2xl leading-relaxed text-white/75">{subtitle}</p>}
      </div>
    </section>
  );
}