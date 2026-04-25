export type Room = {
  slug: string;
  name: string;
  category: "Room" | "Suite" | "Residence";
  tagline: string;
  description: string;
  longDescription: string;
  size: string;
  view: string;
  bed: string;
  occupancy: string;
  rate: number;
  hero: string;
  gallery: string[];
  amenities: string[];
  features: string[];
};

export const rooms: Room[] = [
  {
    slug: "courtyard-king",
    name: "Courtyard King",
    category: "Room",
    tagline: "An intimate retreat with garden vistas.",
    description:
      "A serene 45 sq m room overlooking our private courtyard, designed with hand-tufted linens and travertine baths.",
    longDescription:
      "Anchored by a custom-carved oak headboard and bathed in soft natural light, the Courtyard King offers a quietly indulgent retreat. Hand-tufted linens, a deep travertine soaking tub, and a writing desk overlooking our private central garden invite you to slow down and savour the city beyond.",
    size: "45 m² / 484 sq ft",
    view: "Courtyard garden",
    bed: "King",
    occupancy: "2 adults",
    rate: 685,
    hero: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=2000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=2000&q=80",
    ],
    amenities: [
      "King bed with hand-tufted linens",
      "Travertine soaking tub",
      "Smart climate & lighting",
      "Espresso bar",
      "Curated minibar",
      "Bose sound system",
    ],
    features: ["Garden view", "Walk-in shower", "45 m²", "King bed"],
  },
  {
    slug: "deluxe-skyline",
    name: "Deluxe Skyline",
    category: "Room",
    tagline: "Floor-to-ceiling skyline at golden hour.",
    description:
      "55 sq m of refined comfort framed by full-height windows and an in-room rainfall shower.",
    longDescription:
      "The Deluxe Skyline pairs panoramic city views with a softly tactile palette of bouclé, brushed brass, and warm walnut. A bespoke chaise invites quiet hours; a frameless rainfall shower and dual marble vanities bring spa-level calm to the everyday.",
    size: "55 m² / 592 sq ft",
    view: "Skyline",
    bed: "King or Twin",
    occupancy: "2 adults",
    rate: 845,
    hero: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=2000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1601565051611-3ddd2b4ee725?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1564540583246-934409427776?auto=format&fit=crop&w=2000&q=80",
    ],
    amenities: [
      "Floor-to-ceiling windows",
      "Rainfall shower",
      "Walk-in dressing area",
      "Marble dual vanity",
      "Pillow menu",
      "Daily turndown",
    ],
    features: ["Skyline view", "55 m²", "King or Twin", "Walk-in closet"],
  },
  {
    slug: "junior-suite",
    name: "Junior Suite",
    category: "Suite",
    tagline: "A drawing-room lounge for slow afternoons.",
    description:
      "Generous 75 sq m with separate living area, dining nook, and full-height skyline windows.",
    longDescription:
      "Designed for unhurried stays, the Junior Suite is anchored by a sculptural marble fireplace and a velvet daybed. The dining nook seats four; the bedroom is veiled by a sheer linen partition, balancing intimacy with openness.",
    size: "75 m² / 807 sq ft",
    view: "Skyline & city",
    bed: "King",
    occupancy: "2 adults + 1 child",
    rate: 1290,
    hero: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?auto=format&fit=crop&w=2000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=2000&q=80",
    ],
    amenities: [
      "Separate living room",
      "Marble fireplace",
      "Dining for four",
      "Soaking tub & rain shower",
      "Espresso & tea ritual",
      "Pre-arrival concierge",
    ],
    features: ["75 m²", "Living room", "King bed", "Soaking tub"],
  },
  {
    slug: "courtyard-suite",
    name: "Courtyard Suite",
    category: "Suite",
    tagline: "Two-room sanctuary above the gardens.",
    description:
      "100 sq m with private terrace, library lounge, and a bespoke amenity bar.",
    longDescription:
      "Our signature Courtyard Suite occupies a corner of the historic wing, with French doors opening onto a private terrace overlooking the central gardens. A library lounge with curated reads, a sculptural soaking tub, and a king bed dressed in heirloom linens complete the retreat.",
    size: "100 m² / 1,076 sq ft",
    view: "Garden & courtyard",
    bed: "King",
    occupancy: "3 adults",
    rate: 1850,
    hero: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1551776235-dde6d482cb39?auto=format&fit=crop&w=2000&q=80",
    ],
    amenities: [
      "Private terrace",
      "Library lounge",
      "Bespoke amenity bar",
      "Sculptural soaking tub",
      "Heirloom linens",
      "24-hour butler",
    ],
    features: ["Terrace", "100 m²", "King bed", "Library"],
  },
  {
    slug: "atrium-suite",
    name: "Atrium Suite",
    category: "Suite",
    tagline: "Light-filled, double-height duplex.",
    description:
      "A 130 sq m duplex with double-height windows, mezzanine study, and private dining.",
    longDescription:
      "The Atrium Suite is a vertical sanctuary, with double-height windows pouring light across the lower lounge and a mezzanine study floating above. A private dining table seats six; the master bath is wrapped in book-matched onyx.",
    size: "130 m² / 1,399 sq ft",
    view: "Atrium & city",
    bed: "King",
    occupancy: "4 adults",
    rate: 2750,
    hero: "https://images.unsplash.com/photo-1582719478174-83f84cb1ed8c?auto=format&fit=crop&w=2000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582719478174-83f84cb1ed8c?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1551776235-dde6d482cb39?auto=format&fit=crop&w=2000&q=80",
    ],
    amenities: [
      "Double-height living",
      "Mezzanine study",
      "Onyx master bath",
      "Private dining for six",
      "Steinway piano",
      "Personal butler",
    ],
    features: ["Duplex", "130 m²", "King bed", "Private dining"],
  },
  {
    slug: "the-courtyard-residence",
    name: "The Courtyard Residence",
    category: "Residence",
    tagline: "The hotel's most storied address.",
    description:
      "An iconic 220 sq m residence with two bedrooms, art-filled salon, and wraparound terrace.",
    longDescription:
      "The Courtyard Residence is the hotel's most storied address: a two-bedroom penthouse with a wraparound terrace, an art-filled salon, and a private gym. A hand-laid travertine plunge pool and an open-air dining loggia crown the experience.",
    size: "220 m² / 2,368 sq ft",
    view: "Panoramic city",
    bed: "King × 2",
    occupancy: "4 adults",
    rate: 5800,
    hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80",
    ],
    amenities: [
      "Wraparound terrace",
      "Travertine plunge pool",
      "Open-air loggia",
      "Private gym",
      "Curated art collection",
      "Dedicated butler & chef",
    ],
    features: ["Penthouse", "220 m²", "2 bedrooms", "Plunge pool"],
  },
];

export function getRoomBySlug(slug: string) {
  return rooms.find((r) => r.slug === slug);
}
