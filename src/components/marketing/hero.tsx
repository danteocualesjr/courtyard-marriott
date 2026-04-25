"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BookingBar } from "@/components/site/booking-bar";

export function Hero() {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.6, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-charcoal"
    >
      <motion.div
        style={reduce ? undefined : { y, scale: 1.04 }}
        className="absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2400&q=80"
          alt="The Courtyard hotel facade at golden hour"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        style={reduce ? undefined : { opacity }}
        className="relative z-10 h-full container-luxe flex flex-col justify-end pb-44 md:pb-56"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 text-ivory/80">
            <span className="h-px w-10 bg-brass" />
            <span className="eyebrow text-ivory/80">Established 1924 · An Iconic Sanctuary</span>
          </div>
          <h1 className="display-1 mt-7 text-ivory text-balance">
            Where time
            <br />
            <em className="not-italic font-serif text-brass-300">slows.</em>
          </h1>
          <p className="lede text-ivory/75 max-w-xl mt-8">
            Hidden behind a quiet garden wall, The Courtyard is a sanctuary of
            heritage and light — fifty-six rooms, six suites, and a century of
            quiet hospitality.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link href="/rooms" className="btn-luxe-ghost">
              Explore Rooms
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/about"
              className="text-[11px] uppercase tracking-[0.25em] text-ivory/85 link-underline"
            >
              Our Story
            </Link>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
        className="absolute bottom-8 inset-x-0 z-20"
      >
        <div className="container-luxe">
          <BookingBar variant="floating" />
        </div>
      </motion.div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-ivory/50 pointer-events-none">
        <div className="h-10 w-px bg-ivory/30" />
        <span className="text-[9px] uppercase tracking-[0.4em]">Scroll</span>
      </div>
    </section>
  );
}
