import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  kicker?: string;
  align?: "left" | "center";
  inverse?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function SectionHeading({
  eyebrow,
  title,
  kicker,
  align = "left",
  inverse = false,
  className,
  size = "md",
}: SectionHeadingProps) {
  const sizes = {
    sm: "text-[clamp(1.75rem,3vw,2.5rem)]",
    md: "text-[clamp(2.25rem,4.5vw,3.75rem)]",
    lg: "display-2",
  } as const;

  return (
    <div
      className={cn(
        "flex flex-col gap-5 max-w-3xl",
        align === "center" && "items-center text-center mx-auto",
        className
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-3">
          <span className={cn("h-px w-8", inverse ? "bg-brass" : "bg-brass")} />
          <p
            className={cn(
              "eyebrow",
              inverse ? "text-ivory/80" : "text-stone-600"
            )}
          >
            {eyebrow}
          </p>
        </div>
      )}
      <h2
        className={cn(
          "font-serif font-light leading-[1.05] tracking-tight text-balance",
          sizes[size],
          inverse ? "text-ivory" : "text-charcoal"
        )}
      >
        {title}
      </h2>
      {kicker && (
        <p
          className={cn(
            "lede text-balance max-w-2xl",
            inverse ? "text-ivory/75" : "text-stone-700",
            align === "center" && "mx-auto"
          )}
        >
          {kicker}
        </p>
      )}
    </div>
  );
}
