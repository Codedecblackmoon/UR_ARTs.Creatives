// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { Image } from "@/components/ui/image";
// import { NAV_LINKS, LOGO_URL } from "@/lib/siteData";

// export default function SiteHeader() {
//   const [open, setOpen] = useState(false);
//   const { pathname } = useLocation();

//   return (
//     <header className="fixed top-0 z-50 text-white ">
//       <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
//         <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
//           <Image
//             src={LOGO_URL}
//             alt="UR Arts logo"
//             className="h-10 w-10 rounded-lg lg:h-12 lg:w-12"
//             fittingType="fit"
//           />
//           <span className="font-display text-lg font-extrabold uppercase leading-none tracking-tight lg:text-xl">
//             UR Arts
//           </span>
//         </Link>

//         <nav className="hidden items-center gap-8 lg:flex">
//           {NAV_LINKS.map((link) => (
//             <Link
//               key={link.to}
//               to={link.to}
//               className={`text-sm font-medium transition-colors hover:text-primary ${
//                 pathname === link.to ? "text-primary" : "text-white/85"
//               }`}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </nav>

//         <div className="flex items-center gap-3">
//           <Link
//             to="/contact"
//             className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 sm:inline-flex"
//           >
//             Start a project
//           </Link>
//           <button
//             type="button"
//             aria-label={open ? "Close menu" : "Open menu"}
//             onClick={() => setOpen((v) => !v)}
//             className="grid h-10 w-10 place-items-center rounded-lg text-white lg:hidden"
//           >
//             {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </div>

//       {open && (
//         <nav className="border-t border-white/10 bg-foreground px-4 pb-6 pt-2 lg:hidden">
//           {NAV_LINKS.map((link) => (
//             <Link
//               key={link.to}
//               to={link.to}
//               onClick={() => setOpen(false)}
//               className="block border-b border-white/5 py-3 font-display text-lg font-bold uppercase text-white/90 hover:text-primary"
//             >
//               {link.label}
//             </Link>
//           ))}
//           <Link
//             to="/contact"
//             onClick={() => setOpen(false)}
//             className="mt-4 block rounded-full bg-primary px-5 py-3 text-center font-semibold text-primary-foreground"
//           >
//             Start a project
//           </Link>
//         </nav>
//       )}
//     </header>
//   );
// }

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Image } from "@/components/ui/image";
import { NAV_LINKS } from "@/lib/siteData";
import LOGO_URL from "@/assets/URARTs.svg";

// overHero = true on pages that start with a full-bleed hero (header floats transparent on top of it)
export default function SiteHeader({ overHero = false }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      // On hero pages: turn solid once the hero has scrolled out of view.
      // (80px = header height, so it switches just before the hero ends)
      const threshold = overHero ? window.innerHeight - 80 : 10;
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [overHero, pathname]);

  // Solid background whenever we're not over a hero, after scrolling, or when the mobile menu is open
  const solid = !overHero || scrolled || open;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 text-white transition-colors duration-300 backdrop-blur-sm ${
        solid ? "bg-foreground/70 backdrop-blur-md shadow-lg" : "bg-transparent "
      }`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
          <Image
            src={LOGO_URL}
            alt="UR Arts logo"
            className="h-10 w-10 rounded-lg lg:h-12 lg:w-12"
            fittingType="fit"
          />
          {/* <span className="font-display text-lg font-extrabold uppercase leading-none tracking-tight lg:text-xl">
            UR Arts
          </span> */}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors ${
                solid
                  ? `hover:text-primary ${pathname === link.to ? "text-primary" : "text-white/85"}`
                  : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className={`hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:scale-105 sm:inline-flex ${
              solid ? "bg-primary text-primary-foreground" : "bg-white text-foreground"
            }`}
          >
            Start a project
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg text-white lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-foreground px-4 pb-6 pt-2 lg:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-3 font-display text-lg font-bold uppercase text-white/90 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-primary px-5 py-3 text-center font-semibold text-primary-foreground"
          >
            Start a project
          </Link>
        </nav>
      )}
    </header>
  );
}