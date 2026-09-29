import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Image } from "@/components/ui/image";
import { NAV_LINKS, LOGO_URL } from "@/lib/siteData";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-foreground text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
          <Image
            src={LOGO_URL}
            alt="UR Arts logo"
            className="h-10 w-10 rounded-lg lg:h-12 lg:w-12"
            fittingType="fit"
          />
          <span className="font-display text-lg font-extrabold uppercase leading-none tracking-tight lg:text-xl">
            UR Arts
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.to ? "text-primary" : "text-white/85"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 sm:inline-flex"
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
