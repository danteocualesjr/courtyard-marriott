export type Offer = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  inclusions: string[];
  duration: string;
  startingFrom: number;
  image: string;
};

export const offers: Offer[] = [
  {
    slug: "stay-longer",
    title: "Stay Longer, Linger Slower",
    eyebrow: "Suite Package",
    description:
      "Reserve four nights in any suite and enjoy the fifth as our guest, with bespoke amenities at every door.",
    inclusions: [
      "Fifth night complimentary",
      "Daily breakfast at The Greenhouse",
      "Welcome botanical amenity",
      "Late check-out until 4pm",
    ],
    duration: "Five nights",
    startingFrom: 1290,
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1800&q=80",
  },
  {
    slug: "spa-sanctuary",
    title: "The Spa Sanctuary",
    eyebrow: "Wellness",
    description:
      "A two-night reset crafted with our spa director, beginning with a 90-minute signature ritual.",
    inclusions: [
      "90-minute signature ritual per person",
      "Unlimited access to thermal suite",
      "Daily wellness breakfast",
      "Bespoke pillow & tea menu",
    ],
    duration: "Two nights",
    startingFrom: 1490,
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=80",
  },
  {
    slug: "atelier-overnight",
    title: "Atelier, Overnight",
    eyebrow: "Culinary",
    description:
      "An evening at our chef's table at Atelier, paired with a lavish overnight in a Junior Suite.",
    inclusions: [
      "Nine-course tasting for two at Atelier",
      "Wine pairing curated by sommelier",
      "Junior Suite accommodation",
      "Continental breakfast in suite",
    ],
    duration: "One night",
    startingFrom: 1850,
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1800&q=80",
  },
  {
    slug: "honeymoon",
    title: "The Honeymoon",
    eyebrow: "Romance",
    description:
      "A celebration of the threshold — three nights of pre-arrival pampering, in-suite indulgences, and a private dinner under the stars.",
    inclusions: [
      "Private rooftop dinner for two",
      "Bath ritual on arrival",
      "Custom honeymoon amenity",
      "Late check-out & airport transfer",
    ],
    duration: "Three nights",
    startingFrom: 2750,
    image:
      "https://images.unsplash.com/photo-1601565051611-3ddd2b4ee725?auto=format&fit=crop&w=1800&q=80",
  },
];
