// import { CONTACT } from "@/lib/siteData";

// export default function WhatsAppButton() {
//   return (
//     <a
//       href={`https://wa.me/${CONTACT.whatsapp}`}
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label="Chat with us on WhatsApp"
//       className="fixed bottom-10 right-10 z-50 grid h-14 w-14 place-items-center rounded-full text-white shadow-lg shadow-black/25 transition-transform hover:scale-110"
//     >
//       <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
//         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
//         <path d="M12.05 2C6.495 2 2 6.495 2 12.05c0 1.774.465 3.44 1.28 4.887L2 22l5.192-1.26a10.02 10.02 0 0 0 4.858 1.26h.004C17.605 22 22 17.505 22 11.95 22 6.495 17.605 2 12.05 2zm0 18.13a8.1 8.1 0 0 1-4.13-1.13l-.296-.176-3.08.748.822-3.005-.193-.308a8.09 8.09 0 0 1-1.24-4.309c0-4.475 3.642-8.117 8.12-8.117 2.169 0 4.207.845 5.74 2.379a8.07 8.07 0 0 1 2.377 5.744c0 4.476-3.642 8.174-8.12 8.174z" />
//       </svg>
//     </a>
//   );
// }

import { useEffect, useState } from "react";
import { CONTACT } from "@/lib/siteData";

// overHero = true on pages that start with a full-bleed hero (button floats transparent on top of it)
export default function WhatsAppButton({ overHero = false }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // The button sits at the bottom of the screen, so it reaches the content below the hero
    // almost as soon as the user starts scrolling (earlier than the header does).
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overHero]);

  // Solid background whenever we're not over a hero, or after scrolling away from it
  const solid = !overHero || scrolled;

  return (
    <a
      href={`https://wa.me/${CONTACT.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`fixed bottom-10 right-10 z-50 grid h-14 w-14 place-items-center rounded-full text-white transition-all duration-300 hover:scale-110 ${
        solid ? "bg-foreground shadow-lg shadow-black/25" : "bg-transparent shadow-none"
      }`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12.05 2C6.495 2 2 6.495 2 12.05c0 1.774.465 3.44 1.28 4.887L2 22l5.192-1.26a10.02 10.02 0 0 0 4.858 1.26h.004C17.605 22 22 17.505 22 11.95 22 6.495 17.605 2 12.05 2zm0 18.13a8.1 8.1 0 0 1-4.13-1.13l-.296-.176-3.08.748.822-3.005-.193-.308a8.09 8.09 0 0 1-1.24-4.309c0-4.475 3.642-8.117 8.12-8.117 2.169 0 4.207.845 5.74 2.379a8.07 8.07 0 0 1 2.377 5.744c0 4.476-3.642 8.174-8.12 8.174z" />
      </svg>
    </a>
  );
}