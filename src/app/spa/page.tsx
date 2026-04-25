import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const metadata = {
  title: "The Spa",
  description:
    "A subterranean sanctuary at The Courtyard — nine treatment rooms, a hammam, a salt-air room, and a moonlit relaxation lounge.",
};

const journeys = [
  {
    name: "The Courtyard Ritual",
    duration: "120 min",
    price: "$420",
    description:
      "A signature full-body ritual: hand-blended botanical oil, sound-led massage, and a moonlit thermal bath.",
  },
  {
    name: "Hammam & Gommage",
    duration: "90 min",
    price: "$320",
    description:
      "Steam, scrub, and silk in our marble hammam — a centuries-old practice, quietly reimagined.",
  },
  {
    name: "Restorative Facial",
    duration: "75 min",
    price: "$290",
    description:
      "A deeply restorative facial with Swiss biodynamic actives and lymphatic drainage massage.",
  },
  {
    name: "The Long Sleep",
    duration: "150 min",
    price: "$540",
    description:
      "A true reset: sound therapy, weighted compresses, hot stone massage, and a guided rest.",
  },
];

const journals = [
  {
    q: "What is included with treatments?",
    a: "All treatments include unlimited day-access to our thermal suite (hammam, sauna, salt room, vitality pool, and relaxation lounge). Plan to arrive 60 minutes prior to your service.",
  },
  {
    q: "Are the spa & pool open to non-residents?",
    a: "Yes, with a treatment booking. The pool, fitness studio, and thermal suite are reserved for in-residence guests in the morning and open to spa guests after 1pm daily.",
  },
  {
    q: "Do you accommodate couples or private bookings?",
    a: "Two of our treatment rooms are designed for couples, and the entire spa floor may be reserved for private celebrations. Please reach our concierge for arrangements.",
  },
  {
    q: "Can therapies be brought to the room?",
    a: "Most of our journeys are available in-suite, with our portable spa kit. Book at least 24 hours in advance.",
  },
];

export default function SpaPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Spa"
        title={
          <>
            A subterranean sanctuary,
            <br />
            sculpted in stone and silence.
          </>
        }
        description="Two floors below the courtyard garden, our spa unfolds across nine treatment rooms, a marble hammam, a salt-air room, and a moonlit relaxation lounge."
        image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2400&q=80"
        alt="Spa thermal suite"
      />

      <section className="container-luxe py-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12 items-start">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-stone-600 mb-6">Our Approach</p>
            <h2 className="display-2 text-charcoal text-balance">
              Composed by hand, kept by silence.
            </h2>
            <p className="lede text-stone-700 mt-7">
              Every ritual at The Courtyard begins with a pause — a private
              consultation with our Spa Director — and unfolds at the rhythm of
              your body. We blend our own botanical oils, draw still water from
              the courtyard well, and never schedule a treatment back to back.
            </p>
            <Button asChild variant="outline" className="mt-10">
              <Link href="/contact">Speak to a Spa Concierge</Link>
            </Button>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-7 aspect-[3/4] relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=80"
                  alt="Spa lounge"
                  fill
                  sizes="(min-width: 1024px) 30vw, 60vw"
                  className="object-cover"
                />
              </div>
              <div className="col-span-5 mt-12 aspect-[3/4] relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1519214605650-76a613ee3245?auto=format&fit=crop&w=1200&q=80"
                  alt="Pool deck"
                  fill
                  sizes="(min-width: 1024px) 22vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal text-ivory py-24 lg:py-32">
        <div className="container-luxe">
          <Reveal className="mb-16 max-w-3xl">
            <p className="eyebrow text-ivory/70 mb-3">Signature Journeys</p>
            <h2 className="display-2 text-balance">
              A roster of slow, considered rituals.
            </h2>
          </Reveal>

          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {journeys.map((j, i) => (
              <Reveal key={j.name} delay={i * 0.05}>
                <div className="border-b border-ivory/15 pb-8">
                  <div className="flex justify-between items-baseline gap-6">
                    <h3 className="font-serif text-2xl md:text-3xl">{j.name}</h3>
                    <div className="text-right shrink-0">
                      <p className="font-serif text-xl">{j.price}</p>
                      <p className="eyebrow text-ivory/60">{j.duration}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-ivory/75 leading-relaxed max-w-md">
                    {j.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap gap-4">
            <Button asChild variant="brass" size="lg">
              <Link href="/contact">
                Book a Treatment
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/offers/spa-sanctuary">View Spa Package</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container-luxe py-24 lg:py-32">
        <Reveal className="max-w-3xl mb-12">
          <p className="eyebrow text-stone-600 mb-3">The Quiet Details</p>
          <h2 className="display-3 text-charcoal text-balance">
            Frequently kept questions.
          </h2>
        </Reveal>
        <Reveal>
          <Accordion type="single" collapsible className="max-w-3xl">
            {journals.map((j, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{j.q}</AccordionTrigger>
                <AccordionContent>{j.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>
    </>
  );
}
