import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { venues, getVenueBySlug } from "@/lib/data/dining";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return venues.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const venue = getVenueBySlug(slug);
  if (!venue) return {};
  return {
    title: venue.name,
    description: venue.description,
    openGraph: { title: venue.name, description: venue.description, images: [venue.hero] },
  };
}

export default async function VenuePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const venue = getVenueBySlug(slug);
  if (!venue) notFound();

  return (
    <>
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden bg-charcoal">
        <Image
          src={venue.hero}
          alt={venue.name}
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-charcoal/40" />
        <div className="relative h-full container-luxe flex flex-col justify-end pb-16 lg:pb-24 text-ivory">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-brass" />
              <p className="eyebrow text-ivory/80">{venue.cuisine}</p>
            </div>
            <h1 className="display-1 max-w-3xl text-balance">{venue.name}</h1>
            <p className="lede mt-6 text-ivory/80 max-w-2xl">{venue.tagline}</p>
          </Reveal>
        </div>
      </section>

      <section className="container-luxe py-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-stone-600 mb-6">The Room</p>
            <p className="font-serif font-light text-[clamp(1.5rem,2.4vw,2.25rem)] leading-snug text-charcoal text-balance">
              {venue.longDescription}
            </p>
          </Reveal>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="bg-sand/30 p-8 space-y-6">
              <div>
                <p className="eyebrow text-stone-600">Hours</p>
                <ul className="mt-3 space-y-2 text-sm text-stone-700">
                  {venue.hours.map((h) => (
                    <li key={h.label}>
                      <span className="font-medium text-charcoal">{h.label}</span>
                      <br />
                      {h.time}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow text-stone-600">Dress code</p>
                <p className="text-sm text-stone-700 mt-3">{venue.dressCode}</p>
              </div>
              <Button asChild className="w-full">
                <Link href="/contact">
                  Reserve a Table
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-sand/40 py-20 lg:py-28">
        <div className="container-luxe">
          <Reveal className="mb-12">
            <p className="eyebrow text-stone-600 mb-3">Signatures</p>
            <h2 className="display-3 text-charcoal text-balance">
              Selected dishes
            </h2>
          </Reveal>
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {venue.signature.map((dish, i) => (
              <Reveal key={dish.name} delay={i * 0.06}>
                <div className="flex justify-between items-baseline gap-6 border-b border-stone-300/60 pb-4">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl text-charcoal">
                      {dish.name}
                    </h3>
                    <p className="text-sm text-stone-600 mt-1.5 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                  <span className="font-serif text-lg text-charcoal whitespace-nowrap">
                    {dish.price}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-luxe py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-stone-600 mb-3">Behind the Pass</p>
            <h2 className="display-3 text-charcoal text-balance">
              {venue.chef.name}
            </h2>
            <p className="eyebrow text-brass-500 mt-3">{venue.chef.title}</p>
            <p className="lede text-stone-700 mt-7">{venue.chef.bio}</p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <div className="grid grid-cols-2 gap-3">
              {venue.gallery.slice(0, 4).map((src, i) => (
                <div key={src} className={`relative aspect-[3/4] overflow-hidden ${i % 3 === 0 ? "translate-y-6" : ""}`}>
                  <Image
                    src={src}
                    alt={`${venue.name} ${i + 1}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
