"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const venues = [
  {
    name: "The Walled Garden",
    capacity: "Up to 180 standing · 120 seated",
    description: "Wisteria, lanterns, and the city far away.",
    image:
      "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "The Atrium",
    capacity: "Up to 240 standing · 160 seated",
    description: "A double-height glass conservatory at the heart of the hotel.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "The Oak Library",
    capacity: "Up to 36 seated · 60 standing",
    description: "Hand-carved oak, candlelight, and an intimate hush.",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function EventsPage() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = React.useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Thank you — we'll be in touch.",
        description:
          "Our events concierge will respond within one business day. (Demo only.)",
      });
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 800);
  };

  return (
    <>
      <PageHeader
        eyebrow="Celebrate With Us"
        title={
          <>
            Weddings, gatherings,
            <br />
            and considered occasions.
          </>
        }
        description="Three private venues, a kitchen helmed by Chef Camille Devereaux, and a dedicated event concierge composed of equal parts taste and discretion."
        image="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2400&q=80"
        alt="Wedding setting"
      />

      <section className="container-luxe py-24 lg:py-32">
        <Reveal className="max-w-3xl mb-16">
          <p className="eyebrow text-stone-600 mb-3">Three Private Venues</p>
          <h2 className="display-2 text-charcoal text-balance">
            Spaces composed for celebration.
          </h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {venues.map((v, i) => (
            <Reveal key={v.name} delay={i * 0.08}>
              <article>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={v.image}
                    alt={v.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl mt-6 text-charcoal">
                  {v.name}
                </h3>
                <p className="eyebrow text-brass-500 mt-2">{v.capacity}</p>
                <p className="mt-3 text-sm text-stone-700 leading-relaxed">
                  {v.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-charcoal text-ivory py-24 lg:py-32">
        <div className="container-luxe grid gap-16 lg:grid-cols-12 items-start">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-ivory/70 mb-3">Request a Proposal</p>
            <h2 className="display-2 text-balance">
              Tell us a little about your day.
            </h2>
            <p className="lede mt-7 text-ivory/75">
              Share a few quiet details below, and our events concierge will
              reach out personally — usually within one business day.
            </p>
            <div className="mt-10 space-y-2 text-sm text-ivory/75">
              <p>events@thecourtyard.com</p>
              <p>+1 555 555 0102</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <form
              onSubmit={onSubmit}
              className="bg-ivory text-charcoal p-8 lg:p-12 space-y-6"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" name="firstName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" name="lastName" required />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Event type</Label>
                  <Select name="type" defaultValue="wedding">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="meeting">Meeting</SelectItem>
                      <SelectItem value="private">Private celebration</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Approximate guests</Label>
                  <Input id="guests" name="guests" type="number" min={2} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Date in mind</Label>
                <Input id="date" name="date" type="date" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">A few words</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your day…"
                />
              </div>

              <Button type="submit" disabled={submitting} size="lg" className="w-full">
                {submitting ? "Sending…" : "Send Enquiry"}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 text-center">
                Demo form — submissions are not processed.
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
