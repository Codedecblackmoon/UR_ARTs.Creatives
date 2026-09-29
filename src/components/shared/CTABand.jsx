import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTABand({
  title = "Ready to get started?",
  text = "Tell us where you want to be. We'll build the brand, the website and the campaigns to get you there.",
  buttonLabel = "Start a project",
  to = "/contact",
}) {
  return (
    <section className="bg-primary py-20 text-primary-foreground lg:py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.95] sm:text-5xl">
          {title}
        </h2>
        <p className="mt-5 max-w-xl text-white/85">{text}</p>
        <Link
          to={to}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-foreground transition-transform hover:scale-105"
        >
          {buttonLabel} <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}