import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
          Ready to get started?
        </h2>
        <p className="mt-5 max-w-xl text-white/85">
          Tell us where you want to be. We'll build the brand, the website and the campaigns to get
          you there.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-foreground transition-transform hover:scale-105"
        >
          Start a project <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}