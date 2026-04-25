"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/site/reveal";

export function SpaFeature() {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={ref}
      className="relative h-[110vh] min-h-[700px] w-full overflow-hidden bg-charcoal"
    >
      <motion.div
        style={reduce ? undefined : { y, scale: 1.1 }}
        className="absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2400&q=80"
          alt="Thermal suite at the spa"
          fill
          quality={88}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/55" />
      </motion.div>

      <div className="relative h-full container-luxe flex items-center">
        <Reveal className="max-w-2xl text-ivory">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-brass" />
            <span className="eyebrow text-ivory/80">The Spa</span>
          </div>
          <h2 className="display-2 text-balance">
            A thermal sanctuary, sculpted in stone and silence.
          </h2>
          <p className="lede mt-8 text-ivory/80 max-w-xl">
            Our subterranean spa unfolds across nine treatment rooms, a hammam,
            a salt-air room, and a moonlit relaxation lounge. Every ritual is
            personally composed by our Spa Director.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/spa" className="btn-luxe-ghost">
              Discover the Spa
            </Link>
            <Link
              href="/offers/spa-sanctuary"
              className="text-[11px] uppercase tracking-[0.25em] text-ivory/85 link-underline"
            >
              The Spa Sanctuary Package
            </Link>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.3} className="absolute bottom-12 right-12 hidden lg:block max-w-xs text-ivory">
        <div className="border-l border-brass pl-6">
          <p className="font-serif italic text-2xl leading-snug text-balance">
            &ldquo;The most considered spa we have ever experienced.&rdquo;
          </p>
          <p className="mt-4 eyebrow text-ivory/70">— Condé Nast Traveler</p>
        </div>
      </Reveal>
    </section>
  );
}
