import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/site/reveal";

export function Intro() {
  return (
    <section className="container-luxe py-32 lg:py-44">
      <div className="grid gap-16 lg:grid-cols-12 items-center">
        <Reveal className="lg:col-span-5 lg:col-start-1">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-brass" />
            <span className="eyebrow">An Urban Sanctuary</span>
          </div>
          <h2 className="display-2 text-charcoal mb-8 text-balance">
            A century of quiet, kept perfectly.
          </h2>
          <div className="space-y-5 text-stone-700 leading-relaxed">
            <p className="lede">
              Tucked behind a wisteria-laden wall in the Old Quarter, The
              Courtyard has welcomed travellers since 1924. What began as a
              private merchant's residence has grown gracefully into one of the
              most storied addresses in the city.
            </p>
            <p>
              Every detail — from the hand-laid travertine of the lobby to the
              Egyptian cotton on each bed — reflects our quiet pursuit of beauty
              and a century-old promise: to make every guest feel completely,
              unhurriedly at home.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/about" className="btn-luxe-outline">
              Our Story
            </Link>
            <Link href="/gallery" className="btn-luxe-outline">
              The Hotel
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-6 lg:col-start-7">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-7 aspect-[3/4] relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=80"
                alt="Lobby with marble and brass"
                fill
                sizes="(min-width: 1024px) 36vw, 60vw"
                className="object-cover"
              />
            </div>
            <div className="col-span-5 col-start-8 mt-16 aspect-[3/4] relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571508601891-ca5e7a713859?auto=format&fit=crop&w=1200&q=80"
                alt="Garden courtyard"
                fill
                sizes="(min-width: 1024px) 26vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
