import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { venues } from "@/lib/data/dining";
import { PageHeader } from "@/components/site/page-header";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Dining",
  description:
    "Three storied dining rooms at The Courtyard — Atelier, The Greenhouse, and Library Bar.",
};

export default function DiningPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Table"
        title={
          <>
            Three rooms, three rhythms,
            <br />
            one unhurried table.
          </>
        }
        description="From a nine-course tasting in Atelier to a candlelit conservatory at The Greenhouse and a slow late-night Old-Fashioned at the Library Bar — every plate, every pour, composed with care."
        image="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2400&q=80"
        alt="Atelier dining room"
      />

      <section className="container-luxe py-24 lg:py-32">
        <div className="space-y-32 lg:space-y-44">
          {venues.map((venue, i) => (
            <Reveal key={venue.slug}>
              <article
                className={cn(
                  "grid gap-12 lg:grid-cols-12 items-center",
                  i % 2 === 1 && "lg:[&>div:first-child]:order-2"
                )}
              >
                <div className="lg:col-span-7">
                  <div className="relative aspect-[5/4] overflow-hidden bg-stone-100">
                    <Image
                      src={venue.hero}
                      alt={venue.name}
                      fill
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <p className="eyebrow text-stone-600">{venue.cuisine}</p>
                  <h2 className="display-2 mt-5 text-charcoal text-balance">
                    {venue.name}
                  </h2>
                  <p className="lede mt-6 text-stone-700">{venue.description}</p>
                  <div className="mt-8 space-y-2 text-sm text-stone-700">
                    {venue.hours.map((h) => (
                      <div key={h.label} className="flex justify-between border-b border-stone-200/70 pb-2">
                        <span className="eyebrow text-stone-500">{h.label}</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10">
                    <Link
                      href={`/dining/${venue.slug}`}
                      className="inline-flex items-center gap-2 btn-luxe-outline"
                    >
                      Explore {venue.name}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
