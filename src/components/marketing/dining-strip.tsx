import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { venues } from "@/lib/data/dining";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

export function DiningStrip() {
  return (
    <section className="container-luxe py-32 lg:py-44">
      <Reveal className="mb-16">
        <SectionHeading
          eyebrow="The Table"
          title={
            <>
              Three rooms, three rhythms,
              <br />
              one unhurried table.
            </>
          }
          kicker="From a nine-course tasting in Atelier to a midnight Old-Fashioned in the Library Bar — three storied venues, each composed with care."
        />
      </Reveal>

      <div className="grid gap-10 md:grid-cols-3">
        {venues.map((venue, i) => (
          <Reveal key={venue.slug} delay={i * 0.1}>
            <Link
              href={`/dining/${venue.slug}`}
              className="group block focus-luxe"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
                <Image
                  src={venue.hero}
                  alt={venue.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-1400 ease-luxe group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-ivory">
                  <p className="eyebrow text-ivory/80">{venue.cuisine}</p>
                  <h3 className="font-serif text-3xl md:text-4xl mt-3 leading-tight">
                    {venue.name}
                  </h3>
                  <p className="mt-4 inline-flex bg-ivory/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ivory/80 backdrop-blur">
                    {venue.hours[0].time}
                  </p>
                </div>
                <div className="absolute top-5 right-5 h-10 w-10 bg-ivory/90 text-charcoal flex items-center justify-center transition-all group-hover:bg-brass group-hover:text-ivory">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
              <p className="mt-6 text-sm text-stone-700 leading-relaxed max-w-sm">
                {venue.tagline}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
