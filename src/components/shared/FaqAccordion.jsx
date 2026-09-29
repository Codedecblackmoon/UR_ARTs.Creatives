import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqAccordion({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-display text-lg font-bold">{item.q}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-primary transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <p className="max-w-3xl pb-6 leading-relaxed text-muted-foreground">{item.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}