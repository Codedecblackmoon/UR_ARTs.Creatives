import { Link } from "react-router-dom";
import { MessageCircle, Phone, Mail, Shield, MapPin } from 'lucide-react';
import { Image } from "@/components/ui/image";
import { LOGO_URL, NAV_LINKS, SERVICES, CONTACT } from "@/lib/siteData";

const socials = [
  { Icon: MessageCircle, label: "heart" },
  { Icon: Shield, label: "link" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-foreground text-white/75">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src={LOGO_URL}
                alt="UR Arts logo"
                className="h-12 w-12 rounded-lg"
                fittingType="fit"
              />
              <span className="font-display text-xl font-extrabold uppercase text-white">
                UR Arts
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Giving you a fighting chance. A bold design agency for brands that refuse to blend in.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-primary hover:bg-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="transition-colors hover:text-primary">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/blog" className="transition-colors hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 hover:text-primary">
                  <Mail className="h-4 w-4 text-primary" /> {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-primary">
                  <Phone className="h-4 w-4 text-primary" /> {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" /> {CONTACT.location}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} UR Arts. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-primary">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}