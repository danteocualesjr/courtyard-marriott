import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { experiences } from "@/lib/data/experiences";
import { PageHeader } from "@/components/site/page-header";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Experiences",
  description:
    "Curated experiences at The Courtyard — from a private vineyard lunch to a moonlit telescope on the rooftop.",
};

export default function ExperiencesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Curated by The Courtyard"
        title={
          <>
            Days composed,
            <br />
            hours unhurried.
          </>
        }
        description="A roster of considered, often-private experiences — composed by our Concierge from a deep little black book of the city's most quietly remarkable people."
        image="https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=2400&q=80"
        alt="Dawn market"
      />

      <section className="container-luxe py-24 lg:py-32">
        <div className="space-y-32 lg:space-y-44">
          {experiences.map((exp, i) => (
            <Reveal key={exp.slug}>
              <article
                id={exp.slug}
                className={cn(
                  "grid gap-12 lg:grid-cols-12 items-center scroll-mt-32",
                  i % 2 === 1 && "lg:[&>div:first-child]:order-2"
                )}
              >
                <div className="lg:col-span-7">
                  <div className="relative aspect-[5/4] overflow-hidden bg-stone-100">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <p className="eyebrow text-stone-600">{exp.category}</p>
                  <h2 className="display-2 mt-5 text-charcoal text-balance">
                    {exp.title}
                  </h2>
                  <p className="lede mt-6 text-stone-700">{exp.description}</p>
                  <div className="mt-8 flex items-center gap-3 text-sm text-stone-600">
                    <Clock className="h-4 w-4 text-brass" />
                    <span>{exp.duration}</span>
                  </div>
                  <Button asChild variant="outline" className="mt-10">
                    <Link href="/contact">
                      Arrange this experience
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
