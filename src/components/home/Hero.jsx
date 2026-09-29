import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mouse } from "lucide-react";
import { Image } from "@/components/ui/image";
import { SERVICES, LOGO_URL } from "@/lib/siteData";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % SERVICES.length), 3500);
    return () => clearInterval(timer);
  }, [paused]);

  const active = SERVICES[index];
  const ActiveIcon = active.Icon;

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const delta = touchStart - e.changedTouches[0].clientY;
    if (Math.abs(delta) > 40) {
      setIndex((i) => (i + (delta > 0 ? 1 : -1) + SERVICES.length) % SERVICES.length);
    }
    setTouchStart(null);
  };

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-primary text-primary-foreground">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />

      <span className="absolute left-6 top-1/2 hidden -translate-y-1/2 rotate-180 font-display text-sm font-bold uppercase tracking-[0.6em] [writing-mode:vertical-rl] lg:block">
        UR Arts
      </span>

      <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
        {SERVICES.map((s, i) => (
          <button
            key={s.slug}
            type="button"
            aria-label={s.name}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full border-2 border-white transition ${
              i === index ? "bg-white" : "bg-transparent"
            }`}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-28 text-center">
        <Image
          src={LOGO_URL}
          alt="UR Arts"
          className="h-24 w-24 rounded-2xl drop-shadow-lg lg:h-32 lg:w-32"
          fittingType="fit"
        />

        <p className="mt-8 text-[0.7rem] font-semibold uppercase tracking-[0.4em]">
          Design agency — {""}
          <span className="text-white/80">Johannesburg</span>
        </p>

        <h1 className="mt-4 font-display text-[2.6rem] font-extrabold uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
          Giving you a<br /> fighting chance
        </h1>

        <div
          className="mt-10 h-28 w-full max-w-xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={(e) => setTouchStart(e.touches[0].clientY)}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.slug}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -28 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Link
                to={`/services/${active.slug}`}
                className="flex items-center justify-center gap-4 rounded-2xl border border-white/25 bg-white/10 px-6 py-4 backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white/20">
                  <ActiveIcon className="h-7 w-7" />
                </span>
                <span className="text-left">
                  <span className="block font-display text-lg font-bold uppercase leading-tight sm:text-xl">
                    {active.name}
                  </span>
                  <span className="mt-1 block text-sm text-white/80">{active.short}</span>
                </span>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-foreground transition-transform hover:scale-105"
        >
          Start a project <ArrowRight className="h-5 w-5" />
        </Link>
      </div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/80">
        <Mouse className="h-5 w-5 animate-bounce" />
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em]">Scroll</span>
      </div>
    </section>
  );
}