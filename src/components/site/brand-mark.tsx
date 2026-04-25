import Link from "next/link";
import { cn } from "@/lib/utils";

export function BrandMark({
  inverse = false,
  className,
}: {
  inverse?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="The Courtyard — return to home"
      className={cn(
        "group inline-flex items-center gap-3 focus:outline-none",
        className
      )}
    >
      <Monogram className="h-9 w-9" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-serif text-[20px] tracking-tight",
            inverse ? "text-ivory" : "text-charcoal"
          )}
        >
          The Courtyard
        </span>
        <span
          className={cn(
            "text-[9px] uppercase tracking-[0.4em] mt-1",
            inverse ? "text-ivory/70" : "text-stone-500"
          )}
        >
          Five-Star Hotel
        </span>
      </span>
    </Link>
  );
}

export function Monogram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      role="presentation"
    >
      <circle cx="32" cy="32" r="30" className="fill-none stroke-current" strokeWidth="1.2" />
      <text
        x="32"
        y="42"
        textAnchor="middle"
        className="fill-current font-serif"
        fontSize="24"
        fontWeight="300"
        letterSpacing="-0.5"
      >
        TC
      </text>
    </svg>
  );
}
