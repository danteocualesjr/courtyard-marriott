export type Experience = {
  slug: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  image: string;
  span?: "tall" | "wide" | "square";
};

export const experiences: Experience[] = [
  {
    slug: "private-vineyard",
    title: "A Private Vineyard Lunch",
    category: "Culinary",
    description:
      "A guided drive into the surrounding hills for a long, slow lunch among the rows.",
    duration: "Half day",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1800&q=80",
    span: "tall",
  },
  {
    slug: "morning-market",
    title: "Dawn at the Market",
    category: "Discovery",
    description:
      "A walk through the dawn market with our executive chef, ending in a private kitchen masterclass.",
    duration: "3 hours",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1800&q=80",
    span: "square",
  },
  {
    slug: "perfume-studio",
    title: "An Atelier of Scent",
    category: "Craft",
    description:
      "A bespoke fragrance, blended with a master perfumer in our private studio.",
    duration: "2 hours",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1800&q=80",
    span: "wide",
  },
  {
    slug: "river-twilight",
    title: "Twilight on the River",
    category: "Escape",
    description:
      "A private wooden boat at golden hour, champagne and small plates on board.",
    duration: "Evening",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1800&q=80",
    span: "square",
  },
  {
    slug: "art-walk",
    title: "Curator-Led Art Walk",
    category: "Culture",
    description:
      "An after-hours tour of the city's most storied galleries with our curator-in-residence.",
    duration: "Half day",
    image:
      "https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&w=1800&q=80",
    span: "wide",
  },
  {
    slug: "stargazing",
    title: "Rooftop Stargazing",
    category: "Wonder",
    description:
      "A private astronomer, an antique telescope, and a small flask of cellared cognac.",
    duration: "Evening",
    image:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1800&q=80",
    span: "tall",
  },
];
