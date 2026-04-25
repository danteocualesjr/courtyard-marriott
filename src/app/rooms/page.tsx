"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { rooms } from "@/lib/data/rooms";
import { PageHeader } from "@/components/site/page-header";
import { Reveal } from "@/components/site/reveal";
import { formatCurrency, cn } from "@/lib/utils";

const filters = ["All", "Room", "Suite", "Residence"] as const;

export default function RoomsPage() {
  const [filter, setFilter] = React.useState<(typeof filters)[number]>("All");

  const filtered = filter === "All" ? rooms : rooms.filter((r) => r.category === filter);

  return (
    <>
      <PageHeader
        eyebrow="Stay With Us"
        title={
          <>
            Rooms, suites,
            <br />
            and one residence.
          </>
        }
        description="Fifty-six rooms and six suites composed to feel like quietly cherished homes — anchored by a single, storied two-bedroom Residence."
        image="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=2400&q=80"
        alt="The Courtyard rooms"
      />

      <section className="container-luxe py-20 lg:py-28">
        <Reveal className="flex items-center gap-3 flex-wrap mb-14 border-b border-stone-200 pb-6">
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
          <span className="ml-auto text-xs text-stone-500">
            {filtered.length} {filtered.length === 1 ? "category" : "categories"}
          </span>
        </Reveal>

        <div className="grid gap-x-8 gap-y-20 lg:grid-cols-2">
          {filtered.map((room, i) => (
            <Reveal key={room.slug} delay={(i % 2) * 0.1}>
              <Link href={`/rooms/${room.slug}`} className="group block focus-luxe">
                <div className="relative aspect-[5/4] overflow-hidden bg-stone-100">
                  <Image
                    src={room.hero}
                    alt={room.name}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-1400 ease-luxe group-hover:scale-[1.04]"
                  />
                  <div className="absolute top-5 left-5 px-3 py-1 bg-ivory/90 backdrop-blur text-[10px] uppercase tracking-[0.2em] text-charcoal">
                    {room.category}
                  </div>
                  <div className="absolute top-5 right-5 h-10 w-10 bg-ivory/90 flex items-center justify-center transition-all group-hover:bg-charcoal group-hover:text-ivory">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-[1fr_auto] gap-6 items-start">
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl text-charcoal leading-tight">
                      {room.name}
                    </h3>
                    <p className="mt-3 text-base text-stone-700 leading-relaxed max-w-md">
                      {room.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-stone-600">
                      {room.features.map((f) => (
                        <span key={f} className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-brass" />
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="eyebrow">From</p>
                    <p className="font-serif text-3xl text-charcoal mt-1">
                      {formatCurrency(room.rate)}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500">
                      / night
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
