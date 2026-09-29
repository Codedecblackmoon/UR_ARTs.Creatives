import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import { CONTACT } from "@/lib/siteData";

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's start something"
        subtitle="Tell us about your project. We'll come back with honest advice and a clear plan — no obligation."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-2xl font-extrabold uppercase">Get in touch</h2>
            <ul className="mt-8 space-y-6">
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Email
                  </p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="font-display font-bold hover:text-primary"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Phone
                  </p>
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                    className="font-display font-bold hover:text-primary"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Based in
                  </p>
                  <p className="font-display font-bold">{CONTACT.location}</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 rounded-2xl border-2 border-foreground bg-card p-6">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <p className="font-display font-bold uppercase">Free consultation</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Prefer to talk it through? Book a free 30-minute consultation and we'll map out your
                options together.
              </p>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                Book via WhatsApp
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}