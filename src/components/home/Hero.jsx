// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight, Mouse } from "lucide-react";
// import { Image } from "@/components/ui/image";
// import { SERVICES } from "@/lib/siteData";

// export default function Hero() {
//   const [index, setIndex] = useState(0);
//   const [paused, setPaused] = useState(false);
//   const [touchStart, setTouchStart] = useState(null);

//   useEffect(() => {
//     if (paused) return;
//     const timer = setInterval(() => setIndex((i) => (i + 1) % SERVICES.length), 3500);
//     return () => clearInterval(timer);
//   }, [paused]);

//   const active = SERVICES[index];
//   const ActiveIcon = active.Icon;

//   const handleTouchEnd = (e) => {
//     if (touchStart === null) return;
//     const delta = touchStart - e.changedTouches[0].clientY;
//     if (Math.abs(delta) > 40) {
//       setIndex((i) => (i + (delta > 0 ? 1 : -1) + SERVICES.length) % SERVICES.length);
//     }
//     setTouchStart(null);
//   };

//   return (
//     <section className="clip_path relative flex min-h-[100svh] items-center overflow-hidden bg-primary text-primary-foreground rounded-b-lg">
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.14]"
//         style={{
//           backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
//           backgroundSize: "26px 26px",
//         }}
//       />

//       <span className="absolute left-10 top-1/2 hidden -translate-y-1/2 rotate-180 font-display text-sm font-bold uppercase tracking-[0.6em] [writing-mode:vertical-rl] lg:block">
//         UR Arts
//       </span>

//       <div className="absolute right-10 top-1/2 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
//         {SERVICES.map((s, i) => (
//           <button
//             key={s.slug}
//             type="button"
//             aria-label={s.name}
//             onClick={() => setIndex(i)}
//             className={`h-3 w-3 rounded-full border-2 border-white transition ${
//               i === index ? "bg-white" : "bg-transparent"
//             }`}
//           />
//         ))}
//       </div>

//       <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-28 text-center">

//         {/* <p className="mt-8 text-[0.7rem] font-semibold uppercase tracking-[0.4em]">
//           Design agency — {""}
//           <span className="text-white/80">Johannesburg</span>
//         </p> */}

//         {/* <h1 className="mt-4 font-display text-[2.6rem] font-extrabold uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
//           Giving you a<br /> fighting chance
//         </h1> */}

//         <div
//           className="mt-5 h-28 w-full max-w-xl"
//           onMouseEnter={() => setPaused(true)}
//           onMouseLeave={() => setPaused(false)}
//           onTouchStart={(e) => setTouchStart(e.touches[0].clientY)}
//           onTouchEnd={handleTouchEnd}
//         >
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={active.slug}
//               initial={{ opacity: 0, y: 28 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -28 }}
//               transition={{ duration: 0.4, ease: "easeOut" }}
//             >
//               <Link
//                 to={`/services/${active.slug}`}
//                 className="flex flex-col items-center justify-center gap-4 py-4 backdrop-blur-sm transition-colors "
//               >
//                 <span className="grid h-42 w-42 shrink-0 place-items-center ">
//                   <ActiveIcon className="h-21 w-21" />
//                 </span>
//                 <span className="text-center">
//                   <span className="block font-display text-lg font-bold uppercase leading-tight sm:text-xl">
//                     {active.name}
//                   </span>
//                   <span className="mt-1 block text-sm">{active.short}</span>
//                 </span>
//               </Link>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         <Link
//           to="/contact"
//           className="mt-30 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-foreground transition-transform hover:scale-105"
//         >
//           Start a project <ArrowRight className="h-5 w-5" />
//         </Link>
//       </div>

//       <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/80">
//         <Mouse className="h-5 w-5 animate-bounce" />
//         <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em]">Scroll</span>
//       </div>
//     </section>
//   );
// }


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mouse } from "lucide-react";
import { Image } from "@/components/ui/image";
import { SERVICES } from "@/lib/siteData";
import circle from "@/assets/circle.svg"; // <-- change to your circle SVG file name

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
    <section className="clip_path relative flex min-h-[100svh] items-center overflow-hidden bg-primary text-primary-foreground rounded-b-lg">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* Circle image: centered on the page, everything else sits above it */}
      <img
        src={circle}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[min(92vw,12rem)] max-w-none -translate-x-1/2 -translate-y-1/2 select-none object-contain"
      />

      <span className="absolute left-10 top-1/2 hidden -translate-y-1/2 rotate-180 font-display text-sm font-bold uppercase tracking-[0.6em] [writing-mode:vertical-rl] lg:block">
        UR Arts
      </span>

      <div className="absolute right-10 top-1/2 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
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

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 pb-20 pt-24 text-center">

        {/* <p className="mt-8 text-[0.7rem] font-semibold uppercase tracking-[0.4em]">
          Design agency — {""}
          <span className="text-white/80">Johannesburg</span>
        </p> */}

        {/* <h1 className="mt-4 font-display text-[2.6rem] font-extrabold uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
          Giving you a<br /> fighting chance
        </h1> */}

        <div
          className="mt-2 h-[min(60svh,38rem)] w-full max-w-xl"
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
                className="flex flex-col items-center justify-center gap-6 py-1 transition-colors"
              >
                {/* Name + short text sit ABOVE the image */}
                <span className="text-center">
                  <span className="block font-display text-2xl font-extrabold uppercase leading-tight sm:text-3xl">
                    {active.name}
                  </span>
                  <span className="mx-auto mt-2 block max-w-md text-sm sm:text-base">
                    {active.short}
                  </span>
                </span>

                {/* Bigger service image */}
                <span className="grid shrink-0 place-items-center">
                  <ActiveIcon className="h-[min(38svh,28rem,80vw)] w-[min(38svh,28rem,80vw)] object-contain" />
                </span>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-foreground transition-transform hover:scale-105"
        >
          Start a project <ArrowRight className="h-5 w-5" />
        </Link> */}
      </div>

      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/80">
        <Mouse className="h-5 w-5 animate-bounce" />
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em]">Scroll</span>
      </div>
    </section>
  );
}