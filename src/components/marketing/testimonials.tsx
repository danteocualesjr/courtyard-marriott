"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/site/reveal";

const quotes = [
  {
    quote:
      "There are hotels you stay in, and there are hotels that stay with you. The Courtyard is the rarest kind: a place that quietly rearranges your idea of what hospitality can be.",
    author: "Aria Chen",
    title: "Travel + Leisure",
  },
  {
    quote:
      "From the wisteria-laced courtyard to the moonlit thermal spa, every moment is composed with the precision of a piece of music. The most beautiful five-star hotel I have visited this year.",
    author: "Henrik Vallée",
    title: "Condé Nast Traveler",
  },
  {
    quote:
      "An exquisite kind of stillness lives at The Courtyard — a century of restraint, kept perfectly. We did not want to leave.",
    author: "Maya Olafsson",
    title: "The World of Interiors",
  },
];

export function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const next = () => setIndex((i) => (i + 1) % quotes.length);
  const prev = () => setIndex((i) => (i - 1 + quotes.length) % quotes.length);

  React.useEffect(() => {
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-ivory py-32 lg:py-44">
      <div className="container-luxe">
        <Reveal className="text-center max-w-4xl mx-auto">
          <p className="eyebrow text-stone-600 mb-10">In Their Words</p>
          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-10"
              >
                <blockquote className="font-serif font-light leading-[1.2] text-balance text-[clamp(1.75rem,3.5vw,2.75rem)]">
                  &ldquo;{quotes[index].quote}&rdquo;
                </blockquote>
                <figcaption>
                  <p className="font-serif text-xl text-charcoal">
                    {quotes[index].author}
                  </p>
                  <p className="eyebrow text-stone-500 mt-2">
                    {quotes[index].title}
                  </p>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8">
            <button
              onClick={prev}
              aria-label="Previous quote"
              className="h-10 w-10 border border-stone-300 flex items-center justify-center hover:bg-charcoal hover:text-ivory hover:border-charcoal transition-colors focus-luxe"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2">
              {quotes.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to quote ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 transition-all ${
                    i === index ? "w-10 bg-brass" : "w-2 bg-stone-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next quote"
              className="h-10 w-10 border border-stone-300 flex items-center justify-center hover:bg-charcoal hover:text-ivory hover:border-charcoal transition-colors focus-luxe"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
