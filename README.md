# The Courtyard

A premium, fully responsive marketing website for **The Courtyard**, an iconic five-star urban hotel. Built as a UI-only experience — no backend, no booking engine — with a Modern Luxe aesthetic: warm neutrals, brass accents, elegant serif headings, cinematic imagery, and refined micro-interactions.

> Heritage, design, and service, in concert.

## Stack

- **Framework**: [Next.js 15](https://nextjs.org) (App Router) + React 19 + TypeScript
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com) with a custom design-token theme
- **Components**: hand-rolled [shadcn/ui](https://ui.shadcn.com)-style primitives on top of [Radix UI](https://www.radix-ui.com)
- **Motion**: [Framer Motion](https://www.framer.com/motion/) for parallax, scroll reveals, and page transitions
- **Icons**: [Lucide](https://lucide.dev)
- **Fonts**: Cormorant Garamond (display) + Inter (body), via `next/font`
- **Imagery**: curated Unsplash photography, served via `next/image`
- **Calendar**: [react-day-picker](https://react-day-picker.js.org) v9

## Getting started

```bash
npm install
npm run dev
```

The app is available at [http://localhost:3000](http://localhost:3000).

### Scripts

- `npm run dev` — start the dev server (Turbopack)
- `npm run build` — create an optimised production build
- `npm run start` — run the production build
- `npm run lint` — run Next/ESLint

## Project structure

```
src/
  app/                    # App Router routes
    layout.tsx            # root layout, fonts, metadata
    page.tsx              # landing page
    rooms/                # rooms index + [slug] detail
    dining/               # dining index + [slug] detail
    spa/                  # spa & wellness
    experiences/          # curated experiences
    events/               # weddings & private events (RFP form)
    offers/               # packages & seasonal offers
    gallery/              # masonry photo gallery + lightbox
    about/                # story, sustainability, leadership
    contact/              # contact form + map placeholder
    reserve/              # multi-step booking UI (demo only)
    sitemap.ts            # auto-generated sitemap
    robots.ts             # robots.txt
  components/
    site/                 # header, footer, booking bar, brand mark
    marketing/            # landing-page section blocks
    ui/                   # design-system primitives (button, dialog, etc.)
  lib/
    data/                 # typed static data (rooms, dining, offers, etc.)
    utils.ts              # cn() + formatters
public/
  favicon.svg             # custom monogram
```

## Design language — "Modern Luxe"

| Token | Hex |
| --- | --- |
| Ivory | `#F7F3EC` |
| Sand | `#E8DFD0` |
| Stone | `#A89B86` |
| Charcoal | `#1F1B16` |
| Brass | `#B08D57` |
| Forest | `#2E3D33` |

Type pairs an oversized Cormorant serif with a refined Inter sans, and motion follows a slow `cubic-bezier(0.16, 1, 0.3, 1)` easing — closer to film than to UI.

## Pages

| Route | Description |
| --- | --- |
| `/` | Cinematic hero, intro, signature suites, dining, spa feature, experiences bento, offers, awards, testimonials |
| `/rooms` | Filterable rooms & suites grid |
| `/rooms/[slug]` | Room detail with gallery, amenities, rate card |
| `/dining` | Three venues with hours and signature dishes |
| `/dining/[slug]` | Individual venue with chef bio and gallery |
| `/spa` | Treatments, journeys, FAQ |
| `/experiences` | Curated experiences |
| `/events` | Weddings & private events with RFP form (UI only) |
| `/offers` | Seasonal packages |
| `/gallery` | Masonry gallery with keyboard-navigable lightbox |
| `/about` | Heritage, timeline, sustainability, leadership |
| `/contact` | Concierge form, map placeholder, addresses |
| `/reserve` | Four-step booking UI: dates → room → details → review |

## Notes

- All forms are **UI only**: submissions trigger a toast confirmation and reset.
- Imagery is fetched live from Unsplash (`images.unsplash.com`) — whitelisted in `next.config.ts`.
- Every page respects `prefers-reduced-motion` for accessibility.
- Skip-to-content link, semantic landmarks, and brass-tinted focus rings throughout.

## License

This project is a portfolio piece. Imagery is provided by Unsplash photographers under the Unsplash license.
# courtyard-marriott
