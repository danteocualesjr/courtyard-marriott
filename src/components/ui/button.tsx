"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-[11px] uppercase tracking-[0.25em] font-medium transition-all duration-500 ease-luxe disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-ivory",
  {
    variants: {
      variant: {
        primary:
          "bg-charcoal text-ivory border border-charcoal hover:bg-brass hover:border-brass",
        outline:
          "bg-transparent text-charcoal border border-charcoal/80 hover:bg-charcoal hover:text-ivory",
        ghost:
          "bg-transparent text-ivory border border-ivory/40 hover:bg-ivory hover:text-charcoal",
        link: "bg-transparent text-charcoal border-0 underline-offset-4 hover:underline px-0",
        brass:
          "bg-brass text-ivory border border-brass hover:bg-brass-500 hover:border-brass-500",
      },
      size: {
        default: "px-7 py-3.5",
        sm: "px-5 py-2.5 text-[10px]",
        lg: "px-9 py-4 text-xs",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
