"use client";

import * as React from "react";
import Link from "next/link";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { footerNav } from "@/lib/data/navigation";
import { Monogram } from "./brand-mark";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function SiteFooter() {
  const { toast } = useToast();
  const [email, setEmail] = React.useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({
      title: "Subscribed",
      description: "Thank you. You will hear from us soon.",
    });
    setEmail("");
  };

  return (
    <footer className="bg-charcoal text-ivory mt-32">
      <div className="container-luxe py-20 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3 text-ivory">
              <Monogram className="h-12 w-12" />
              <div>
                <p className="font-serif text-2xl">The Courtyard</p>
                <p className="text-[10px] uppercase tracking-[0.4em] text-ivory/60 mt-1">
                  An iconic five-star sanctuary
                </p>
              </div>
            </div>

            <p className="text-sm text-ivory/70 leading-relaxed max-w-sm">
              A garden-anchored urban hotel composed of fifty-six rooms, six
              suites, and the storied Courtyard Residence. Heritage, design, and
              service, in concert.
            </p>

            <form onSubmit={onSubmit} className="space-y-3 max-w-sm">
              <p className="eyebrow text-ivory/70">Letters from The Courtyard</p>
              <div className="flex gap-0">
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="border-ivory/30 text-ivory placeholder:text-ivory/50 focus:border-brass rounded-none"
                />
                <Button type="submit" variant="brass" size="default" className="rounded-none">
                  Subscribe
                </Button>
              </div>
              <p className="text-[10px] text-ivory/50">
                Quietly composed missives. Unsubscribe at any moment.
              </p>
            </form>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 grid grid-cols-2 md:grid-cols-4 gap-10">
            {Object.entries(footerNav).map(([heading, items]) => (
              <div key={heading}>
                <p className="eyebrow text-ivory/70 mb-5">{heading}</p>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-sm text-ivory/85 hover:text-brass transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-ivory/10 grid gap-8 md:grid-cols-3 items-end">
          <div className="text-sm text-ivory/70 space-y-1">
            <p>14 Garden Lane, The Old Quarter</p>
            <p>+1 555 555 0100 · stay@thecourtyard.com</p>
          </div>

          <div className="flex md:justify-center gap-5">
            <a
              href="https://www.instagram.com/thecourtyardhotel"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
              className="text-ivory/70 hover:text-brass transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/thecourtyardhotel"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
              className="text-ivory/70 hover:text-brass transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.youtube.com/@thecourtyardhotel"
              aria-label="YouTube"
              target="_blank"
              rel="noreferrer"
              className="text-ivory/70 hover:text-brass transition-colors"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>

          <div className="text-xs text-ivory/50 md:text-right space-y-1">
            <p>© {new Date().getFullYear()} The Courtyard. All rights reserved.</p>
            <p className="space-x-4">
              <Link href="/privacy" className="hover:text-ivory">Privacy</Link>
              <Link href="/terms" className="hover:text-ivory">Terms</Link>
              <Link href="/accessibility" className="hover:text-ivory">Accessibility</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
