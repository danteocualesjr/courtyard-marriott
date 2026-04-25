"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { rooms } from "@/lib/data/rooms";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { formatCurrency } from "@/lib/utils";

export function SignatureSuites() {
  const featured = rooms.filter((r) =>
    [
      "courtyard-suite",
      "atrium-suite",
      "the-courtyard-residence",
      "junior-suite",
    ].includes(r.slug)
  );

  return (
    <section className="bg-sand/40 py-32 lg:py-44">
      <div className="container-luxe">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <SectionHeading
              eyebrow="Signature Suites"
              title={
                <>
                  Six suites, each a quietly
                  <br />
                  distinct point of view.
                </>
              }
            />
            <Link
              href="/rooms"
              className="text-[11px] uppercase tracking-[0.25em] link-underline self-start md:self-end"
            >
              View all rooms & suites
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="container-luxe">
        <div className="overflow-x-auto -mx-6 md:-mx-10 lg:-mx-16 px-6 md:px-10 lg:px-16 pb-4 [scrollbar-width:thin]">
          <div className="flex gap-8 md:gap-10 min-w-max">
            {featured.map((room, i) => (
              <Reveal
                key={room.slug}
                delay={i * 0.1}
                className="w-[78vw] md:w-[420px] lg:w-[460px] shrink-0"
              >
                <Link
                  href={`/rooms/${room.slug}`}
                  className="group block focus-luxe"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                    <Image
                      src={room.hero}
                      alt={room.name}
                      fill
                      sizes="(min-width: 1024px) 460px, 78vw"
                      className="object-cover transition-transform duration-1400 ease-luxe group-hover:scale-[1.05]"
                    />
                    <div className="absolute top-5 left-5 px-3 py-1 bg-ivory/90 backdrop-blur text-[10px] uppercase tracking-[0.2em] text-charcoal">
                      {room.category}
                    </div>
                    <div className="absolute top-5 right-5 h-10 w-10 bg-ivory/90 flex items-center justify-center transition-all group-hover:bg-charcoal group-hover:text-ivory">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="mt-7 flex items-start justify-between gap-6">
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl text-charcoal leading-tight">
                        {room.name}
                      </h3>
                      <p className="mt-2 text-sm text-stone-600 max-w-xs leading-relaxed">
                        {room.tagline}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="eyebrow">From</p>
                      <p className="font-serif text-2xl text-charcoal mt-1">
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
        </div>
      </div>
    </section>
  );
}
