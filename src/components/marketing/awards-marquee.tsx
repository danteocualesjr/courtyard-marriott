import { Reveal } from "@/components/site/reveal";

const accolades = [
  "Forbes Five-Star · 2024",
  "Condé Nast Gold List",
  "Michelin Key · 2025",
  "Travel + Leisure World's Best",
  "AAA Five Diamond",
  "World of Hyatt Inspirato",
  "Tatler Best Hotel · 2024",
  "Robb Report 100",
];

export function AwardsMarquee() {
  return (
    <section className="bg-charcoal text-ivory py-16 overflow-hidden">
      <Reveal>
        <p className="eyebrow text-ivory/60 text-center mb-8">In Good Company</p>
      </Reveal>
      <div className="relative mask-fade-r">
        <div className="flex w-max animate-marquee gap-16 px-8">
          {[...accolades, ...accolades].map((a, i) => (
            <div
              key={i}
              className="flex items-center gap-6 shrink-0 text-ivory/70"
            >
              <span className="font-serif text-2xl md:text-3xl tracking-tight whitespace-nowrap">
                {a}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-brass" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
