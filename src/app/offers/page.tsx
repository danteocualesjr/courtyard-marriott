import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { offers } from "@/lib/data/offers";
import { PageHeader } from "@/components/site/page-header";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { formatCurrency, cn } from "@/lib/utils";

export const metadata = {
  title: "Offers",
  description:
    "Considered packages and seasonal offers at The Courtyard — quietly indulgent stays, dining experiences, spa journeys, and more.",
};

export default function OffersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Offers"
        title={
          <>
            Considered packages,
            <br />
            quietly indulgent.
          </>
        }
        description="A small collection of curated stays — composed in collaboration with our chefs, spa director, and concierge."
        image="https://images.unsplash.com/photo-1601565051611-3ddd2b4ee725?auto=format&fit=crop&w=2400&q=80"
        alt="Suite at twilight"
      />

      <section className="container-luxe py-24 lg:py-32">
        <div className="space-y-24">
          {offers.map((offer, i) => (
            <Reveal key={offer.slug}>
              <article
                id={offer.slug}
                className={cn(
                  "grid gap-12 lg:grid-cols-12 items-center scroll-mt-32",
                  i % 2 === 1 && "lg:[&>div:first-child]:order-2"
                )}
              >
                <div className="lg:col-span-7">
                  <div className="relative aspect-[5/4] overflow-hidden bg-stone-100">
                    <Image
                      src={offer.image}
                      alt={offer.title}
                      fill
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <p className="eyebrow text-stone-600">{offer.eyebrow}</p>
                  <h2 className="display-2 mt-5 text-charcoal text-balance">
                    {offer.title}
                  </h2>
                  <p className="lede mt-6 text-stone-700">{offer.description}</p>

                  <ul className="mt-8 space-y-3">
                    {offer.inclusions.map((inc) => (
                      <li
                        key={inc}
                        className="flex items-start gap-3 text-sm text-stone-700"
                      >
                        <span className="mt-1.5 h-1 w-4 bg-brass shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 flex items-end justify-between gap-6 border-t border-stone-200 pt-6">
                    <div>
                      <p className="eyebrow text-stone-500">From</p>
                      <p className="font-serif text-3xl text-charcoal mt-1">
                        {formatCurrency(offer.startingFrom)}
                      </p>
                      <p className="text-xs text-stone-500">{offer.duration}</p>
                    </div>
                    <Button asChild>
                      <Link href={`/reserve?offer=${offer.slug}`}>
                        Reserve
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
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
