"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { mainNav } from "@/lib/data/navigation";
import { BrandMark } from "./brand-mark";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-700 ease-luxe",
        transparent
          ? "bg-transparent text-ivory"
          : "bg-ivory/85 backdrop-blur-xl text-charcoal border-b border-stone-200/60"
      )}
    >
      <div className="container-luxe flex h-20 items-center justify-between gap-6">
        <BrandMark inverse={transparent} />

        <nav className="hidden lg:flex items-center gap-8">
          {mainNav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[11px] uppercase tracking-[0.25em] font-medium transition-colors hover:opacity-100",
                  transparent ? "text-ivory/85" : "text-charcoal/80",
                  active && "opacity-100",
                  !active && "opacity-80 hover:opacity-100"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+15555550100"
            className={cn(
              "hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] transition-colors",
              transparent ? "text-ivory/80 hover:text-ivory" : "text-stone-600 hover:text-charcoal"
            )}
          >
            <Phone className="h-3.5 w-3.5" />
            +1 555 555 0100
          </a>

          <Button
            asChild
            variant={transparent ? "ghost" : "primary"}
            size="sm"
            className="hidden md:inline-flex"
          >
            <Link href="/reserve">Reserve</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className={cn(
                  "lg:hidden p-2 -mr-2 focus-luxe",
                  transparent ? "text-ivory" : "text-charcoal"
                )}
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-ivory p-8">
              <div className="flex flex-col h-full">
                <BrandMark />
                <nav className="mt-12 flex flex-col gap-1">
                  {mainNav.map((item) => (
                    <SheetClose key={item.href} asChild>
                      <Link
                        href={item.href}
                        className="font-serif text-3xl py-2 text-charcoal hover:text-brass transition-colors"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto pt-8 border-t border-stone-200">
                  <SheetClose asChild>
                    <Button asChild className="w-full">
                      <Link href="/reserve">Reserve a Stay</Link>
                    </Button>
                  </SheetClose>
                  <a
                    href="tel:+15555550100"
                    className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-stone-600"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    +1 555 555 0100
                  </a>
                  <p className="mt-2 text-xs text-stone-500 leading-relaxed">
                    14 Garden Lane, The Old Quarter
                    <br />
                    Open 24 hours · Concierge always available
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
