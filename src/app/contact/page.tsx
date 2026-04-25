"use client";

import * as React from "react";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
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

export default function ContactPage() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = React.useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Thank you for writing.",
        description:
          "We will respond within one business day. (Demo only.)",
      });
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 700);
  };

  return (
    <>
      <PageHeader
        eyebrow="Concierge"
        title={
          <>
            Write to us,
            <br />
            anytime.
          </>
        }
        description="Our concierge team replies personally — usually within a few hours, and always within one business day."
        image="https://images.unsplash.com/photo-1582719478174-83f84cb1ed8c?auto=format&fit=crop&w=2400&q=80"
        alt="Atrium suite"
      />

      <section className="container-luxe py-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4 space-y-10">
            <div>
              <p className="eyebrow text-stone-600 mb-4">Visit</p>
              <p className="flex items-start gap-3 text-stone-700 leading-relaxed">
                <MapPin className="h-4 w-4 text-brass mt-1 shrink-0" />
                <span>
                  14 Garden Lane
                  <br />
                  The Old Quarter
                  <br />
                  09 100 — Open 24 hours
                </span>
              </p>
            </div>
            <div>
              <p className="eyebrow text-stone-600 mb-4">Call</p>
              <a
                href="tel:+15555550100"
                className="flex items-center gap-3 text-stone-700 hover:text-charcoal transition-colors"
              >
                <Phone className="h-4 w-4 text-brass" />
                +1 555 555 0100
              </a>
              <p className="text-xs text-stone-500 mt-2">Concierge available 24 hours</p>
            </div>
            <div>
              <p className="eyebrow text-stone-600 mb-4">Write</p>
              <div className="space-y-2 text-stone-700">
                <a href="mailto:stay@thecourtyard.com" className="flex items-center gap-3 hover:text-charcoal">
                  <Mail className="h-4 w-4 text-brass" />
                  stay@thecourtyard.com
                </a>
                <a href="mailto:events@thecourtyard.com" className="flex items-center gap-3 hover:text-charcoal">
                  <Mail className="h-4 w-4 text-brass" />
                  events@thecourtyard.com
                </a>
                <a href="mailto:spa@thecourtyard.com" className="flex items-center gap-3 hover:text-charcoal">
                  <Mail className="h-4 w-4 text-brass" />
                  spa@thecourtyard.com
                </a>
              </div>
            </div>

            <div className="aspect-[4/3] relative overflow-hidden bg-sand/40">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 35% 60%, rgba(176,141,87,0.18) 0%, transparent 50%), repeating-linear-gradient(45deg, rgba(31,27,22,0.04) 0px, rgba(31,27,22,0.04) 1px, transparent 1px, transparent 18px), repeating-linear-gradient(-45deg, rgba(31,27,22,0.04) 0px, rgba(31,27,22,0.04) 1px, transparent 1px, transparent 18px)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-charcoal text-ivory px-5 py-3 text-center shadow-xl">
                  <p className="font-serif text-lg leading-tight">The Courtyard</p>
                  <p className="eyebrow text-ivory/70 mt-1">14 Garden Lane</p>
                </div>
              </div>
              <div className="absolute bottom-3 right-3 text-[10px] uppercase tracking-[0.2em] text-stone-500">
                Map placeholder
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <p className="eyebrow text-stone-600 mb-3">A Note to the Concierge</p>
            <h2 className="display-3 text-charcoal text-balance mb-10">
              How may we be of service?
            </h2>
            <form onSubmit={onSubmit} className="space-y-6">
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
              <div className="space-y-2">
                <Label>Topic</Label>
                <Select name="topic" defaultValue="reservations">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="reservations">Reservations</SelectItem>
                    <SelectItem value="dining">Dining</SelectItem>
                    <SelectItem value="spa">Spa</SelectItem>
                    <SelectItem value="events">Events</SelectItem>
                    <SelectItem value="press">Press</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={6} required />
              </div>
              <Button type="submit" disabled={submitting} size="lg">
                {submitting ? "Sending…" : "Send Message"}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500">
                Demo form — submissions are not processed.
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
