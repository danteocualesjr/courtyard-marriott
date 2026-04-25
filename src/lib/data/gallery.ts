export type GalleryImage = {
  src: string;
  alt: string;
  category: "Hotel" | "Rooms" | "Dining" | "Spa" | "Grounds";
  aspect: "portrait" | "landscape" | "square";
};

export const gallery: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1800&q=80",
    alt: "Lobby with marble floor and brass details",
    category: "Hotel",
    aspect: "landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=80",
    alt: "Courtyard King bedroom",
    category: "Rooms",
    aspect: "portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=80",
    alt: "Spa thermal suite",
    category: "Spa",
    aspect: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1800&q=80",
    alt: "Atelier dining room at evening",
    category: "Dining",
    aspect: "landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    alt: "Suite living room",
    category: "Rooms",
    aspect: "portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80",
    alt: "Greenhouse conservatory dining",
    category: "Dining",
    aspect: "landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1551776235-dde6d482cb39?auto=format&fit=crop&w=1400&q=80",
    alt: "Marble bath",
    category: "Rooms",
    aspect: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?auto=format&fit=crop&w=1400&q=80",
    alt: "Garden courtyard at golden hour",
    category: "Grounds",
    aspect: "portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1800&q=80",
    alt: "Library bar",
    category: "Dining",
    aspect: "landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1582719478174-83f84cb1ed8c?auto=format&fit=crop&w=1400&q=80",
    alt: "Atrium duplex suite",
    category: "Rooms",
    aspect: "portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80",
    alt: "Penthouse residence terrace",
    category: "Rooms",
    aspect: "landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=80",
    alt: "Spa relaxation lounge",
    category: "Spa",
    aspect: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1601565051611-3ddd2b4ee725?auto=format&fit=crop&w=1400&q=80",
    alt: "Bedroom at twilight",
    category: "Rooms",
    aspect: "portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=80",
    alt: "Tasting menu plating",
    category: "Dining",
    aspect: "landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&w=1400&q=80",
    alt: "Hotel art collection",
    category: "Hotel",
    aspect: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1519214605650-76a613ee3245?auto=format&fit=crop&w=1400&q=80",
    alt: "Pool and lounging deck",
    category: "Spa",
    aspect: "portrait",
  },
];
