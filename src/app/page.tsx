import { Hero } from "@/components/marketing/hero";
import { Intro } from "@/components/marketing/intro";
import { SignatureSuites } from "@/components/marketing/signature-suites";
import { DiningStrip } from "@/components/marketing/dining-strip";
import { SpaFeature } from "@/components/marketing/spa-feature";
import { ExperiencesBento } from "@/components/marketing/experiences-bento";
import { OffersPreview } from "@/components/marketing/offers-preview";
import { AwardsMarquee } from "@/components/marketing/awards-marquee";
import { Testimonials } from "@/components/marketing/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <SignatureSuites />
      <DiningStrip />
      <SpaFeature />
      <ExperiencesBento />
      <OffersPreview />
      <AwardsMarquee />
      <Testimonials />
    </>
  );
}
