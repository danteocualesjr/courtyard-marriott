import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { experiences } from "@/lib/data/experiences";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { cn } from "@/lib/utils";

export function ExperiencesBento() {
  const featured = experiences.slice(0, 4);

  const layouts = [
    "md:col-span-7 md:row-span-2 md:aspect-auto aspect-[4/5]",
    "md:col-span-5 md:row-span-1 aspect-[4/3]",
    "md:col-span-3 md:row-span-1 aspect-square",
    "md:col-span-2 md:row-span-1 aspect-square",
  ];

  return (
    <section className="container-luxe py-32 lg:py-44">
      <Reveal className="mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeading
            eyebrow="Curated Experiences"
            title={
              <>
                Days composed,
                <br />
                hours unhurried.
              </>
            }
          />
          <Link
            href="/experiences"
            className="text-[11px] uppercase tracking-[0.25em] link-underline self-start md:self-end"
          >
            All Experiences
          </Link>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[280px] gap-4">
        {featured.map((exp, i) => (
          <Reveal
            key={exp.slug}
            delay={i * 0.08}
            className={cn("relative", layouts[i])}
          >
            <Link
              href={`/experiences#${exp.slug}`}
              className="group relative block h-full w-full overflow-hidden focus-luxe"
            >
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-1400 ease-luxe group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-ivory">
                <p className="eyebrow text-ivory/75">{exp.category}</p>
                <h3 className="font-serif text-2xl md:text-3xl mt-3 leading-tight text-balance">
                  {exp.title}
                </h3>
                <p className="mt-2 text-xs text-ivory/70 max-w-md line-clamp-2">
                  {exp.description}
                </p>
              </div>
              <div className="absolute top-5 right-5 h-9 w-9 bg-ivory/90 text-charcoal flex items-center justify-center transition-all group-hover:bg-brass group-hover:text-ivory">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
