"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery, type GalleryImage } from "@/lib/data/gallery";
import { PageHeader } from "@/components/site/page-header";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

const filters = ["All", "Hotel", "Rooms", "Dining", "Spa", "Grounds"] as const;

export default function GalleryPage() {
  const [filter, setFilter] = React.useState<(typeof filters)[number]>("All");
  const [active, setActive] = React.useState<number | null>(null);

  const filtered = React.useMemo<GalleryImage[]>(
    () =>
      filter === "All" ? gallery : gallery.filter((g) => g.category === filter),
    [filter]
  );

  const onClose = React.useCallback(() => setActive(null), []);
  const onPrev = React.useCallback(
    () =>
      setActive((i) =>
        i === null ? null : (i - 1 + filtered.length) % filtered.length
      ),
    [filtered.length]
  );
  const onNext = React.useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % filtered.length)),
    [filtered.length]
  );

  React.useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, onClose, onPrev, onNext]);

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title={
          <>
            A century of light,
            <br />
            stone, and stillness.
          </>
        }
        description="A photographic visit through the rooms, gardens, dining venues, and quieter corners of The Courtyard."
        image="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2400&q=80"
        alt="Lobby"
      />

      <section className="container-luxe py-20 lg:py-28">
        <Reveal className="flex items-center gap-3 flex-wrap mb-10 border-b border-stone-200 pb-6">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] transition-all",
                filter === f
                  ? "bg-charcoal text-ivory"
                  : "text-stone-600 hover:text-charcoal"
              )}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
          {filtered.map((g, i) => (
            <Reveal key={g.src} delay={(i % 6) * 0.04}>
              <button
                onClick={() => setActive(i)}
                className="group block w-full break-inside-avoid focus-luxe overflow-hidden"
                aria-label={`Open ${g.alt}`}
              >
                <div
                  className={cn(
                    "relative w-full overflow-hidden bg-stone-100",
                    g.aspect === "portrait" && "aspect-[3/4]",
                    g.aspect === "landscape" && "aspect-[4/3]",
                    g.aspect === "square" && "aspect-square"
                  )}
                >
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-1400 ease-luxe group-hover:scale-[1.04]"
                  />
                  <span className="absolute bottom-4 left-4 bg-ivory/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-charcoal opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    {g.category}
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {active !== null && (
        <div className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-md flex items-center justify-center">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-6 right-6 h-10 w-10 flex items-center justify-center text-ivory/80 hover:text-ivory border border-ivory/20 hover:border-ivory/60 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={onPrev}
            aria-label="Previous"
            className="absolute left-4 md:left-10 h-12 w-12 flex items-center justify-center text-ivory/80 hover:text-ivory border border-ivory/20 hover:border-ivory/60 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={onNext}
            aria-label="Next"
            className="absolute right-4 md:right-10 h-12 w-12 flex items-center justify-center text-ivory/80 hover:text-ivory border border-ivory/20 hover:border-ivory/60 transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <figure className="relative w-[92vw] h-[80vh] max-w-6xl">
            <Image
              key={filtered[active].src}
              src={filtered[active].src}
              alt={filtered[active].alt}
              fill
              sizes="92vw"
              className="object-contain animate-fade-up"
              priority
            />
            <figcaption className="absolute bottom-[-3.75rem] left-0 right-0 text-center text-xs text-ivory/70">
              <span className="block text-[10px] uppercase tracking-[0.25em] text-brass">
                {filtered[active].category}
              </span>
              <span>
                {filtered[active].alt} · {active + 1} / {filtered.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
