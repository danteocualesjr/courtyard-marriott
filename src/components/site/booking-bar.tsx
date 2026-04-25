"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { addDays, format } from "date-fns";
import type { DateRange } from "react-day-picker";
import { CalendarDays, Users, ArrowRight } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BookingBarProps {
  variant?: "floating" | "inline" | "dark";
  className?: string;
}

export function BookingBar({ variant = "floating", className }: BookingBarProps) {
  const router = useRouter();
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: addDays(new Date(), 14),
    to: addDays(new Date(), 17),
  });
  const [adults, setAdults] = React.useState("2");
  const [rooms, setRooms] = React.useState("1");

  const onReserve = () => {
    router.push("/reserve");
  };

  const surface =
    variant === "dark"
      ? "bg-charcoal text-ivory border-charcoal"
      : variant === "inline"
      ? "bg-ivory border border-stone-200"
      : "bg-ivory/95 backdrop-blur-xl border border-ivory/40 shadow-[0_30px_60px_-30px_rgba(31,27,22,0.5)]";

  const labelClr = variant === "dark" ? "text-ivory/70" : "text-stone-500";
  const valueClr = variant === "dark" ? "text-ivory" : "text-charcoal";

  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_auto] divide-y md:divide-y-0 md:divide-x divide-stone-200/80",
        surface,
        className
      )}
    >
      <Popover>
        <PopoverTrigger asChild>
          <button
            className={cn(
              "flex items-center gap-3 px-6 py-4 text-left hover:bg-stone-50/50 transition-colors focus-luxe",
              variant === "dark" && "hover:bg-ivory/5"
            )}
          >
            <CalendarDays className={cn("h-4 w-4 shrink-0", labelClr)} />
            <div className="flex flex-col">
              <span className={cn("text-[10px] uppercase tracking-[0.2em]", labelClr)}>
                Arrive — Depart
              </span>
              <span className={cn("text-sm font-medium", valueClr)}>
                {range?.from ? format(range.from, "MMM d") : "Select"} —{" "}
                {range?.to ? format(range.to, "MMM d, yyyy") : "Select"}
              </span>
            </div>
          </button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-auto p-0">
          <Calendar
            mode="range"
            selected={range}
            onSelect={setRange}
            numberOfMonths={2}
            disabled={{ before: new Date() }}
          />
        </PopoverContent>
      </Popover>

      <div className="flex items-center gap-3 px-6 py-3">
        <Users className={cn("h-4 w-4 shrink-0", labelClr)} />
        <div className="flex flex-col flex-1">
          <span className={cn("text-[10px] uppercase tracking-[0.2em]", labelClr)}>
            Guests
          </span>
          <Select value={adults} onValueChange={setAdults}>
            <SelectTrigger
              className={cn(
                "h-8 border-0 px-0 text-sm font-medium focus:ring-0",
                valueClr
              )}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 6 }).map((_, i) => (
                <SelectItem key={i} value={String(i + 1)}>
                  {i + 1} {i === 0 ? "Adult" : "Adults"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center gap-3 px-6 py-3">
        <span
          className={cn(
            "h-4 w-4 shrink-0 rounded-sm border",
            variant === "dark" ? "border-ivory/60" : "border-stone-400"
          )}
        />
        <div className="flex flex-col flex-1">
          <span className={cn("text-[10px] uppercase tracking-[0.2em]", labelClr)}>
            Rooms
          </span>
          <Select value={rooms} onValueChange={setRooms}>
            <SelectTrigger
              className={cn(
                "h-8 border-0 px-0 text-sm font-medium focus:ring-0",
                valueClr
              )}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 4 }).map((_, i) => (
                <SelectItem key={i} value={String(i + 1)}>
                  {i + 1} {i === 0 ? "Room" : "Rooms"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button
        onClick={onReserve}
        variant={variant === "dark" ? "brass" : "primary"}
        size="lg"
        className="md:rounded-none gap-3 px-10"
      >
        Check Availability
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
