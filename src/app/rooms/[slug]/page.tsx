import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Bed, Maximize2, Eye, Users } from "lucide-react";
import { rooms, getRoomBySlug } from "@/lib/data/rooms";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";

export function generateStaticParams() {
  return rooms.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) return {};
  return {
    title: room.name,
    description: room.description,
    openGraph: { title: room.name, description: room.description, images: [room.hero] },
  };
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) notFound();

  const others = rooms.filter((r) => r.slug !== room.slug).slice(0, 3);

  return (
    <>
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden bg-charcoal">
        <Image
          src={room.hero}
          alt={room.name}
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
              <p className="eyebrow text-ivory/80">{room.category}</p>
            </div>
            <h1 className="display-1 max-w-3xl text-balance">{room.name}</h1>
            <p className="lede mt-6 text-ivory/80 max-w-2xl">{room.tagline}</p>
          </Reveal>
        </div>
      </section>

      <section className="container-luxe py-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-stone-600 mb-6">The Room</p>
              <p className="font-serif font-light text-[clamp(1.5rem,2.4vw,2.25rem)] leading-snug text-charcoal text-balance">
                {room.longDescription}
              </p>
            </Reveal>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-stone-200 py-10">
              <Stat icon={<Maximize2 className="h-4 w-4" />} label="Size" value={room.size} />
              <Stat icon={<Eye className="h-4 w-4" />} label="View" value={room.view} />
              <Stat icon={<Bed className="h-4 w-4" />} label="Bed" value={room.bed} />
              <Stat icon={<Users className="h-4 w-4" />} label="Occupancy" value={room.occupancy} />
            </div>

            <div className="mt-16">
              <p className="eyebrow text-stone-600 mb-6">In The Room</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {room.amenities.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-sm text-stone-700">
                    <span className="mt-2 h-1 w-1 rounded-full bg-brass shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-5 lg:col-start-8">
            <div className="lg:sticky lg:top-28 bg-sand/30 p-8 lg:p-10">
              <p className="eyebrow text-stone-600">Rate per night, from</p>
              <p className="font-serif text-5xl text-charcoal mt-2 leading-none">
                {formatCurrency(room.rate)}
              </p>
              <p className="text-xs text-stone-500 mt-2">
                Inclusive of service. Taxes additional.
              </p>

              <div className="mt-8 space-y-3">
                <Button asChild size="lg" className="w-full">
                  <Link href={`/reserve?room=${room.slug}`}>
                    Reserve Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <Link href="/contact">Contact Concierge</Link>
                </Button>
              </div>

              <div className="mt-10 pt-8 border-t border-stone-300/50 space-y-4 text-xs text-stone-700">
                <p className="flex justify-between">
                  <span>Check-in</span>
                  <span>3:00pm</span>
                </p>
                <p className="flex justify-between">
                  <span>Check-out</span>
                  <span>12:00pm</span>
                </p>
                <p className="flex justify-between">
                  <span>Cancellation</span>
                  <span>Free, until 48 hours prior</span>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-sand/40 py-20 lg:py-28">
        <div className="container-luxe">
          <Reveal>
            <p className="eyebrow text-stone-600 mb-6">Gallery</p>
          </Reveal>
          <div className="grid grid-cols-12 gap-3">
            {room.gallery.map((src, i) => (
              <Reveal
                key={src}
                delay={i * 0.05}
                className={
                  i === 0
                    ? "col-span-12 md:col-span-8 aspect-[4/3]"
                    : i === 1
                    ? "col-span-12 md:col-span-4 aspect-[4/3] md:aspect-auto"
                    : "col-span-6 md:col-span-4 aspect-square"
                }
              >
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={src}
                    alt={`${room.name} gallery ${i + 1}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-1400 ease-luxe hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-luxe py-24 lg:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <h2 className="display-3 text-charcoal">You may also consider</h2>
          <Link href="/rooms" className="text-[11px] uppercase tracking-[0.25em] link-underline self-start md:self-end">
            All Rooms
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {others.map((r, i) => (
            <Reveal key={r.slug} delay={i * 0.08}>
              <Link href={`/rooms/${r.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={r.hero}
                    alt={r.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-1400 ease-luxe group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="font-serif text-2xl mt-5">{r.name}</h3>
                <p className="text-sm text-stone-600 mt-1">From {formatCurrency(r.rate)} / night</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-stone-500">
        {icon}
        <span className="eyebrow">{label}</span>
      </div>
      <p className="mt-2 font-serif text-lg text-charcoal">{value}</p>
    </div>
  );
}
