export type Venue = {
  slug: string;
  name: string;
  cuisine: string;
  tagline: string;
  description: string;
  longDescription: string;
  hours: { label: string; time: string }[];
  dressCode: string;
  hero: string;
  gallery: string[];
  signature: { name: string; description: string; price: string }[];
  chef: { name: string; title: string; bio: string };
};

export const venues: Venue[] = [
  {
    slug: "atelier",
    name: "Atelier",
    cuisine: "Modern French · Tasting menu",
    tagline: "A nine-course conversation with the seasons.",
    description:
      "Chef Camille Devereaux's tasting room reimagines French haute cuisine with rare native produce.",
    longDescription:
      "Behind a hand-carved oak door, Atelier reveals an intimate twenty-eight-seat dining room. Chef Camille Devereaux composes a nine-course tasting that follows the rhythm of the seasons — heirloom carrots roasted over juniper, line-caught turbot in shellfish bisque, a final note of brown-butter madeleines served with cellared armagnac.",
    hours: [
      { label: "Dinner", time: "Tue–Sat · 6:30pm – 10:30pm" },
      { label: "Bar", time: "Tue–Sat · 5:30pm – Late" },
    ],
    dressCode: "Smart attire requested",
    hero: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80",
    ],
    signature: [
      {
        name: "Heirloom Carrot, Juniper",
        description: "Slow-roasted with sea buckthorn and goat curd.",
        price: "Course I",
      },
      {
        name: "Line-Caught Turbot",
        description: "Shellfish bisque, sea fennel, lemon verbena.",
        price: "Course IV",
      },
      {
        name: "Aged Saddle of Lamb",
        description: "Embered shallot, fermented black garlic, watercress.",
        price: "Course VI",
      },
      {
        name: "Brown-Butter Madeleine",
        description: "Cellared armagnac, vanilla bean from Madagascar.",
        price: "Finale",
      },
    ],
    chef: {
      name: "Camille Devereaux",
      title: "Executive Chef",
      bio: "A two-star Michelin alum of Maison Pic and Le Calandre, Camille trained across Provence and Lombardy before returning to head Atelier.",
    },
  },
  {
    slug: "the-greenhouse",
    name: "The Greenhouse",
    cuisine: "Garden-driven · All day",
    tagline: "Sun-washed conservatory dining.",
    description:
      "An all-day glasshouse at the heart of the courtyard, where every plate begins in our walled garden.",
    longDescription:
      "Glass-vaulted and sun-washed, The Greenhouse opens onto our walled kitchen garden. Mornings begin with house-cultured yoghurt, stone-baked sourdough, and golden olive oil; lunch turns toward bright crudo and wood-fired flatbreads; evenings become a candlelit affair of sharing plates and natural wines.",
    hours: [
      { label: "Breakfast", time: "Daily · 6:30am – 10:30am" },
      { label: "Lunch", time: "Daily · 12:00pm – 3:00pm" },
      { label: "Dinner", time: "Daily · 6:00pm – 10:30pm" },
    ],
    dressCode: "Smart casual",
    hero: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=2000&q=80",
    ],
    signature: [
      {
        name: "Garden Crudités",
        description: "Heirloom vegetables, anchovy bagna cauda.",
        price: "$28",
      },
      {
        name: "Ember-Roasted Beetroot",
        description: "Whipped feta, walnut, pomegranate molasses.",
        price: "$24",
      },
      {
        name: "Wood-Fired Lamb Flatbread",
        description: "Yoghurt, sumac, mint, pickled chilli.",
        price: "$32",
      },
      {
        name: "Stone Fruit Pavlova",
        description: "Crème fraîche, vanilla, basil oil.",
        price: "$18",
      },
    ],
    chef: {
      name: "Iris Tan",
      title: "Head Chef",
      bio: "Iris led the kitchen at Spring at Somerset before joining The Courtyard, championing zero-waste, garden-first cooking.",
    },
  },
  {
    slug: "library-bar",
    name: "Library Bar",
    cuisine: "Cocktails · Late night",
    tagline: "Leather-bound stories, gold-rimmed glassware.",
    description:
      "A whisper-quiet salon of vintage spirits, rare digestifs, and a master bartender's instinct.",
    longDescription:
      "The Library Bar is a hush of green leather and old paper, lit by amber sconces and a slow turntable. Master bartender Hugo Marchetti curates a roster of vintage spirits and obscure aperitifs; the Old-Fashioned cart rolls between tables nightly, the night tilts gently toward the small hours.",
    hours: [
      { label: "Daily", time: "5:00pm – 1:00am" },
      { label: "Live music", time: "Thu–Sat · 9:00pm" },
    ],
    dressCode: "Smart attire after 7pm",
    hero: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=2000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=2000&q=80",
    ],
    signature: [
      {
        name: "Tableside Old Fashioned",
        description: "Choice of rare bourbons, aged in French oak.",
        price: "$28",
      },
      {
        name: "Gold-Leaf Negroni",
        description: "Cocchi, Tanqueray Ten, 24k garnish.",
        price: "$26",
      },
      {
        name: "Smoked Pear Martini",
        description: "Williams pear eau-de-vie, applewood smoke.",
        price: "$24",
      },
      {
        name: "Caviar & Crème Fraîche",
        description: "Buckwheat blini, chive, soft-boiled quail.",
        price: "$48",
      },
    ],
    chef: {
      name: "Hugo Marchetti",
      title: "Master Bartender",
      bio: "Hugo trained at the American Bar at the Savoy before opening cocktail rooms in Tokyo and Buenos Aires.",
    },
  },
];

export function getVenueBySlug(slug: string) {
  return venues.find((v) => v.slug === slug);
}
