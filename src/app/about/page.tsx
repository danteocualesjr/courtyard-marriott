import Image from "next/image";
import { PageHeader } from "@/components/site/page-header";
import { Reveal } from "@/components/site/reveal";

export const metadata = {
  title: "Our Story",
  description:
    "Heritage, design, and service — the story of The Courtyard, a five-star hotel composed across a century.",
};

const milestones = [
  {
    year: "1924",
    title: "A Merchant's Residence",
    body: "Built as a private residence for the Tessier family, anchored around a wisteria-laden central garden.",
  },
  {
    year: "1957",
    title: "The First Guests",
    body: "After a decade of careful renovation, opens its doors as a fourteen-room private hotel.",
  },
  {
    year: "1989",
    title: "Atelier Begins",
    body: "Chef Jean-Marie Devereaux brings two-star French cooking to The Courtyard, beginning a culinary tradition.",
  },
  {
    year: "2019",
    title: "Quiet Renovation",
    body: "A two-year restoration adds nine treatment rooms underground, the Atrium suite, and the rooftop residence.",
  },
  {
    year: "Today",
    title: "A Century, Kept",
    body: "Fifty-six rooms, six suites, three dining rooms, a spa, and a quiet hundred-year promise to be kept.",
  },
];

const leadership = [
  {
    name: "Hélène Tessier",
    title: "Managing Director",
    bio: "Fourth-generation custodian, returned home after a decade leading hotels across Asia.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Camille Devereaux",
    title: "Executive Chef",
    bio: "Two-star Michelin alum of Maison Pic and Le Calandre. Heads Atelier and our culinary team.",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Iris Tan",
    title: "Head Chef, The Greenhouse",
    bio: "Champion of zero-waste, garden-first cooking. Previously of Spring at Somerset.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Hugo Marchetti",
    title: "Master Bartender",
    bio: "Trained at the American Bar at the Savoy. Curates our cocktails and rare-spirit programme.",
    image:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=600&q=80",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Since 1924"
        title={
          <>
            A century, kept
            <br />
            quietly perfectly.
          </>
        }
        description="The Courtyard is, and always has been, a private place. Our pursuit is the slow, steady cultivation of an experience that feels — quite simply — like coming home."
        image="https://images.unsplash.com/photo-1571508601891-ca5e7a713859?auto=format&fit=crop&w=2400&q=80"
        alt="The Courtyard garden"
      />

      <section className="container-luxe py-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12 items-center">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-stone-600 mb-6">Our Story</p>
            <h2 className="display-2 text-charcoal text-balance">
              Built around a garden, kept around a promise.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7 space-y-5 text-stone-700 leading-relaxed">
            <p className="lede">
              The Courtyard began in 1924 as a private home — three storeys
              of stucco and stone, anchored around a small inner garden that
              caught the morning sun. The Tessier family lived, entertained,
              and welcomed friends here for thirty years before deciding,
              quietly, to share it.
            </p>
            <p>
              Over the decades that followed, the hotel has grown gracefully
              outward — never up, never out — adding rooms, dining venues, and
              a subterranean spa, but always around the same central garden.
              Today, the courtyard is still our heart.
            </p>
            <p>
              Our promise has not changed in a hundred years: to keep a quiet
              place, kept perfectly, for those who choose to stay with us.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="timeline" className="bg-sand/40 py-24 lg:py-32">
        <div className="container-luxe">
          <Reveal className="mb-14 max-w-2xl">
            <p className="eyebrow text-stone-600 mb-3">A Brief Chronology</p>
            <h2 className="display-3 text-charcoal text-balance">
              A hundred years, in a few quiet moments.
            </h2>
          </Reveal>
          <div className="space-y-12">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.05}>
                <div className="grid gap-6 md:grid-cols-12 items-baseline border-b border-stone-300/60 pb-12">
                  <p className="md:col-span-2 font-serif text-3xl md:text-4xl text-brass-500">
                    {m.year}
                  </p>
                  <h3 className="md:col-span-4 font-serif text-2xl md:text-3xl text-charcoal">
                    {m.title}
                  </h3>
                  <p className="md:col-span-6 text-stone-700 leading-relaxed">
                    {m.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="sustainability" className="container-luxe py-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12 items-center">
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1400&q=80"
                alt="Walled kitchen garden"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow text-stone-600 mb-3">Sustainability</p>
            <h2 className="display-3 text-charcoal text-balance">
              The slow practice of staying still.
            </h2>
            <p className="lede mt-7 text-stone-700">
              Our walled kitchen garden supplies The Greenhouse year-round.
              Linens are washed in our own water-recovery laundry; herbs are
              dried in the attic; the courtyard well, a hundred years old,
              still runs.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-stone-700">
              {[
                "100% renewable energy across the property",
                "Walled garden supplies 60% of restaurant produce",
                "Carbon-neutral certified since 2021",
                "Single-use plastics eliminated property-wide",
                "Local-artisan sourcing for all amenities",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1 w-4 bg-brass shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="leadership" className="bg-charcoal text-ivory py-24 lg:py-32">
        <div className="container-luxe">
          <Reveal className="mb-16 max-w-2xl">
            <p className="eyebrow text-ivory/70 mb-3">The People</p>
            <h2 className="display-2 text-balance">
              Quiet, considered, exacting.
            </h2>
          </Reveal>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {leadership.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06}>
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-2xl">{p.name}</h3>
                <p className="eyebrow text-brass-300 mt-2">{p.title}</p>
                <p className="mt-4 text-sm text-ivory/75 leading-relaxed">
                  {p.bio}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="press" className="container-luxe py-20 lg:py-28">
        <Reveal className="text-center max-w-3xl mx-auto">
          <p className="eyebrow text-stone-600 mb-3">Press</p>
          <p className="font-serif font-light text-2xl md:text-3xl text-charcoal text-balance">
            Press enquiries are warmly received at <a className="link-underline" href="mailto:press@thecourtyard.com">press@thecourtyard.com</a>.
          </p>
        </Reveal>
      </section>

      <section id="careers" className="bg-sand/30 py-20 lg:py-28">
        <div className="container-luxe text-center max-w-3xl mx-auto">
          <Reveal>
            <p className="eyebrow text-stone-600 mb-3">Careers</p>
            <h2 className="display-3 text-charcoal text-balance">
              Quietly, we are always looking.
            </h2>
            <p className="lede text-stone-700 mt-7">
              For people of taste, of patience, and of deep care. We welcome
              letters of introduction at <a className="link-underline" href="mailto:careers@thecourtyard.com">careers@thecourtyard.com</a>.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
