import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { offers } from "@/lib/data/offers";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { formatCurrency } from "@/lib/utils";

export function OffersPreview() {
  const featured = offers.slice(0, 3);

  return (
    <section className="bg-sand/30 py-32 lg:py-44">
      <div className="container-luxe">
        <Reveal className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <SectionHeading
              eyebrow="Offers"
              title={
                <>
                  Considered packages,
                  <br />
                  quietly indulgent.
                </>
              }
            />
            <Link
              href="/offers"
              className="text-[11px] uppercase tracking-[0.25em] link-underline self-start md:self-end"
            >
              All Offers
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {featured.map((offer, i) => (
            <Reveal key={offer.slug} delay={i * 0.08}>
              <article className="bg-ivory group h-full flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-1400 ease-luxe group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <p className="eyebrow text-stone-600">{offer.eyebrow}</p>
                  <h3 className="font-serif text-2xl md:text-3xl mt-3 leading-tight text-charcoal">
                    {offer.title}
                  </h3>
                  <p className="mt-3 text-sm text-stone-700 leading-relaxed flex-1">
                    {offer.description}
                  </p>
                  <div className="mt-6 pt-6 border-t border-stone-200 flex items-end justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500">
                        From
                      </p>
                      <p className="font-serif text-2xl text-charcoal mt-0.5">
                        {formatCurrency(offer.startingFrom)}
                      </p>
                    </div>
                    <Link
                      href={`/offers#${offer.slug}`}
                      className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-charcoal link-underline"
                    >
                      Discover
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
