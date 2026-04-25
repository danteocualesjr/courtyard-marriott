"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-6",
        month: "space-y-4",
        month_caption: "flex justify-center pt-1 relative items-center pb-2",
        caption_label: "font-serif text-lg",
        nav: "flex items-center justify-between absolute inset-x-0 top-1 px-1",
        button_previous:
          "h-7 w-7 bg-transparent p-0 opacity-60 hover:opacity-100 focus:outline-none flex items-center justify-center",
        button_next:
          "h-7 w-7 bg-transparent p-0 opacity-60 hover:opacity-100 focus:outline-none flex items-center justify-center",
        month_grid: "w-full border-collapse",
        weekdays: "flex",
        weekday:
          "text-stone-500 w-9 font-normal text-[10px] uppercase tracking-widest",
        week: "flex w-full mt-2",
        day: "h-9 w-9 text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
        day_button:
          "h-9 w-9 p-0 font-normal hover:bg-stone-100 transition-colors aria-selected:opacity-100",
        range_end: "day-range-end",
        selected:
          "[&_button]:bg-charcoal [&_button]:text-ivory [&_button]:hover:bg-charcoal [&_button]:hover:text-ivory",
        today: "[&_button]:border [&_button]:border-brass",
        outside: "text-stone-400 opacity-50",
        disabled: "text-stone-400 opacity-50 pointer-events-none",
        range_middle: "[&_button]:bg-stone-100 [&_button]:text-charcoal",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, ...rest }) =>
          orientation === "left" ? (
            <ChevronLeft className="h-4 w-4" {...(rest as React.SVGProps<SVGSVGElement>)} />
          ) : (
            <ChevronRight className="h-4 w-4" {...(rest as React.SVGProps<SVGSVGElement>)} />
          ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
