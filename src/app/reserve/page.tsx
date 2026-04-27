"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { addDays, format, differenceInCalendarDays, isValid, parseISO } from "date-fns";
import type { DateRange } from "react-day-picker";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, ChevronLeft } from "lucide-react";
import { rooms } from "@/lib/data/rooms";
import { offers } from "@/lib/data/offers";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { formatCurrency, cn } from "@/lib/utils";

type Step = 0 | 1 | 2 | 3;

const stepLabels = ["Dates", "Room", "Details", "Review"];

function parseDateParam(value: string | null) {
  if (!value) return undefined;
  const date = parseISO(value);
  return isValid(date) ? date : undefined;
}

function selectParam(
  value: string | null,
  fallback: string,
  { min, max }: { min: number; max: number }
) {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed >= min && parsed <= max
    ? String(parsed)
    : fallback;
}

function roomParam(value: string | null) {
  return rooms.some((room) => room.slug === value) ? value : null;
}

function offerParam(value: string | null) {
  return offers.find((offer) => offer.slug === value);
}

export default function ReservePage() {
  return (
    <React.Suspense
      fallback={
        <section className="bg-ivory">
          <div className="container-luxe pt-32 pb-24">
            <p className="eyebrow text-stone-500">Preparing reservation</p>
          </div>
        </section>
      }
    >
      <ReserveExperience />
    </React.Suspense>
  );
}

function ReserveExperience() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const initialFrom = parseDateParam(searchParams.get("from"));
  const initialTo = parseDateParam(searchParams.get("to"));
  const [step, setStep] = React.useState<Step>(0);
  const [range, setRange] = React.useState<DateRange | undefined>(() => ({
    from: initialFrom ?? addDays(new Date(), 14),
    to: initialTo ?? addDays(new Date(), 17),
  }));
  const [adults, setAdults] = React.useState(() =>
    selectParam(searchParams.get("adults"), "2", { min: 1, max: 6 })
  );
  const [roomsCount, setRoomsCount] = React.useState(() =>
    selectParam(searchParams.get("rooms"), "1", { min: 1, max: 4 })
  );
  const [selectedRoom, setSelectedRoom] = React.useState<string | null>(() =>
    roomParam(searchParams.get("room"))
  );
  const selectedOffer = offerParam(searchParams.get("offer"));
  const [details, setDetails] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  });

  const nights =
    range?.from && range?.to
      ? Math.max(1, differenceInCalendarDays(range.to, range.from))
      : 0;

  const room = rooms.find((r) => r.slug === selectedRoom);
  const subtotal = room ? room.rate * nights : 0;
  const taxes = Math.round(subtotal * 0.12);
  const total = subtotal + taxes;

  const canProceed = (s: Step): boolean => {
    if (s === 0) return !!range?.from && !!range?.to && nights > 0;
    if (s === 1) return !!selectedRoom;
    if (s === 2)
      return !!details.firstName && !!details.lastName && !!details.email;
    return true;
  };

  const onConfirm = () => {
    toast({
      title: "Reservation received (demo)",
      description: `${selectedOffer ? `${selectedOffer.title} · ` : ""}${room?.name} · ${nights} night${
        nights === 1 ? "" : "s"
      } · ${formatCurrency(total)}`,
    });
  };

  return (
    <section className="bg-ivory">
      <div className="container-luxe pt-32 pb-24">
        <div className="mb-10 flex items-center justify-between gap-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-stone-600 hover:text-charcoal transition-colors"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            Return Home
          </Link>
          <p className="eyebrow text-stone-500">Reservation · Demo</p>
        </div>

        <div className="mb-12">
          <h1 className="display-2 text-charcoal text-balance">
            Reserve your stay
          </h1>
          <p className="lede text-stone-700 mt-5 max-w-xl">
            A few quiet steps. You may review and revise at every stage.
          </p>
          {selectedOffer && (
            <div className="mt-8 max-w-xl border border-brass/30 bg-sand/40 p-5">
              <p className="eyebrow text-stone-600">Selected offer</p>
              <p className="mt-2 font-serif text-2xl text-charcoal">
                {selectedOffer.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-stone-700">
                We will attach this package request for the concierge to confirm
                with your stay.
              </p>
            </div>
          )}
        </div>

        <Stepper step={step} />

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {step === 0 && (
                  <StepDates
                    range={range}
                    setRange={setRange}
                    adults={adults}
                    setAdults={setAdults}
                    rooms={roomsCount}
                    setRooms={setRoomsCount}
                  />
                )}
                {step === 1 && (
                  <StepRooms
                    selected={selectedRoom}
                    onSelect={setSelectedRoom}
                    nights={nights}
                  />
                )}
                {step === 2 && (
                  <StepDetails details={details} setDetails={setDetails} />
                )}
                {step === 3 && (
                  <StepReview
                    range={range}
                    adults={adults}
                    rooms={roomsCount}
                    nights={nights}
                    room={room}
                    offer={selectedOffer}
                    details={details}
                    subtotal={subtotal}
                    taxes={taxes}
                    total={total}
                    onEdit={(s) => setStep(s as Step)}
                  />
                )}
              </motion.div>
            </AnimatePresence>

            <div className="mt-12 flex items-center justify-between border-t border-stone-200 pt-8">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setStep((s) => (s > 0 ? ((s - 1) as Step) : s))}
                disabled={step === 0}
                className="disabled:opacity-30"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              {step < 3 ? (
                <Button
                  size="lg"
                  disabled={!canProceed(step)}
                  onClick={() => setStep((s) => Math.min(3, s + 1) as Step)}
                >
                  Continue
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button size="lg" variant="brass" onClick={onConfirm}>
                  Confirm Reservation
                  <Check className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>

          <aside className="lg:col-span-4">
            <Summary
              range={range}
              nights={nights}
              adults={adults}
              rooms={roomsCount}
              room={room}
              offer={selectedOffer}
              subtotal={subtotal}
              taxes={taxes}
              total={total}
            />
          </aside>
        </div>
      </div>
    </section>
  );
}

function Stepper({ step }: { step: Step }) {
  return (
    <ol className="flex items-center gap-3 md:gap-6 flex-wrap">
      {stepLabels.map((label, i) => (
        <li key={label} className="flex items-center gap-3 md:gap-4">
          <div
            className={cn(
              "h-8 w-8 flex items-center justify-center text-[11px] tracking-widest border transition-all",
              i < step && "bg-brass border-brass text-ivory",
              i === step && "bg-charcoal border-charcoal text-ivory",
              i > step && "border-stone-300 text-stone-500"
            )}
          >
            {i < step ? <Check className="h-3.5 w-3.5" /> : i + 1}
          </div>
          <span
            className={cn(
              "text-[11px] uppercase tracking-[0.25em]",
              i <= step ? "text-charcoal" : "text-stone-500"
            )}
          >
            {label}
          </span>
          {i < stepLabels.length - 1 && (
            <span className="hidden md:block h-px w-8 bg-stone-300" />
          )}
        </li>
      ))}
    </ol>
  );
}

function StepDates({
  range,
  setRange,
  adults,
  setAdults,
  rooms,
  setRooms,
}: {
  range: DateRange | undefined;
  setRange: (r: DateRange | undefined) => void;
  adults: string;
  setAdults: (v: string) => void;
  rooms: string;
  setRooms: (v: string) => void;
}) {
  return (
    <div>
      <h2 className="font-serif text-3xl text-charcoal mb-2">Choose your dates</h2>
      <p className="text-stone-600 mb-8">
        Select your arrival and departure. Rates and availability adjust live.
      </p>

      <div className="grid gap-8 md:grid-cols-[auto_1fr] items-start">
        <div className="bg-ivory border border-stone-200 p-2">
          <Calendar
            mode="range"
            selected={range}
            onSelect={setRange}
            numberOfMonths={2}
            disabled={{ before: new Date() }}
          />
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Arrive</Label>
              <p className="font-serif text-2xl text-charcoal">
                {range?.from ? format(range.from, "MMM d, yyyy") : "—"}
              </p>
            </div>
            <div className="space-y-2">
              <Label>Depart</Label>
              <p className="font-serif text-2xl text-charcoal">
                {range?.to ? format(range.to, "MMM d, yyyy") : "—"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Guests</Label>
              <Select value={adults} onValueChange={setAdults}>
                <SelectTrigger>
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
            <div className="space-y-2">
              <Label>Rooms</Label>
              <Select value={rooms} onValueChange={setRooms}>
                <SelectTrigger>
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
        </div>
      </div>
    </div>
  );
}

function StepRooms({
  selected,
  onSelect,
  nights,
}: {
  selected: string | null;
  onSelect: (slug: string) => void;
  nights: number;
}) {
  return (
    <div>
      <h2 className="font-serif text-3xl text-charcoal mb-2">Choose your room</h2>
      <p className="text-stone-600 mb-8">
        {nights} {nights === 1 ? "night" : "nights"} · all rates include
        complimentary breakfast and access to thermal suite.
      </p>
      <div className="space-y-5">
        {rooms.map((r) => {
          const isSelected = selected === r.slug;
          return (
            <button
              key={r.slug}
              type="button"
              onClick={() => onSelect(r.slug)}
              className={cn(
                "group w-full grid grid-cols-1 md:grid-cols-[200px_1fr_auto] items-stretch gap-6 text-left bg-ivory border transition-all p-3 focus-luxe",
                isSelected
                  ? "border-charcoal shadow-[0_20px_40px_-25px_rgba(31,27,22,0.4)]"
                  : "border-stone-200 hover:border-stone-400"
              )}
            >
              <div className="relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
                <Image
                  src={r.hero}
                  alt={r.name}
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
              <div className="py-2 md:py-4">
                <p className="eyebrow text-stone-500">{r.category}</p>
                <h3 className="font-serif text-2xl text-charcoal mt-2">{r.name}</h3>
                <p className="mt-2 text-sm text-stone-700 leading-relaxed max-w-md">
                  {r.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-stone-600">
                  {r.features.map((f) => (
                    <span key={f}>{f}</span>
                  ))}
                </div>
              </div>
              <div className="md:py-4 md:pr-6 md:text-right flex md:flex-col items-end justify-between gap-2">
                <div>
                  <p className="eyebrow text-stone-500">From</p>
                  <p className="font-serif text-2xl text-charcoal">
                    {formatCurrency(r.rate)}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500">
                    / night
                  </p>
                </div>
                <span
                  className={cn(
                    "inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 transition-colors",
                    isSelected
                      ? "bg-charcoal text-ivory"
                      : "border border-stone-300 text-stone-600 group-hover:border-charcoal group-hover:text-charcoal"
                  )}
                >
                  {isSelected ? (
                    <>
                      <Check className="h-3 w-3" /> Selected
                    </>
                  ) : (
                    "Select"
                  )}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepDetails({
  details,
  setDetails,
}: {
  details: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    notes: string;
  };
  setDetails: React.Dispatch<
    React.SetStateAction<{
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      notes: string;
    }>
  >;
}) {
  const upd =
    (k: keyof typeof details) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setDetails((d) => ({ ...d, [k]: e.target.value }));

  return (
    <div>
      <h2 className="font-serif text-3xl text-charcoal mb-2">Guest details</h2>
      <p className="text-stone-600 mb-8">
        Reservation made under the primary guest&apos;s name.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First name</Label>
          <Input
            id="firstName"
            value={details.firstName}
            onChange={upd("firstName")}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last name</Label>
          <Input
            id="lastName"
            value={details.lastName}
            onChange={upd("lastName")}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={details.email}
            onChange={upd("email")}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            value={details.phone}
            onChange={upd("phone")}
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="notes">Special requests</Label>
          <Textarea
            id="notes"
            placeholder="A quiet floor, a particular pillow, an early arrival…"
            value={details.notes}
            onChange={upd("notes")}
          />
        </div>
      </div>
    </div>
  );
}

function StepReview({
  range,
  adults,
  rooms: roomsCount,
  nights,
  room,
  offer,
  details,
  subtotal,
  taxes,
  total,
  onEdit,
}: {
  range: DateRange | undefined;
  adults: string;
  rooms: string;
  nights: number;
  room?: (typeof rooms)[number];
  offer?: (typeof offers)[number];
  details: { firstName: string; lastName: string; email: string; phone: string; notes: string };
  subtotal: number;
  taxes: number;
  total: number;
  onEdit: (s: number) => void;
}) {
  return (
    <div>
      <h2 className="font-serif text-3xl text-charcoal mb-2">Review your reservation</h2>
      <p className="text-stone-600 mb-8">
        A final glance before we confirm. You may edit any line.
      </p>

      <div className="space-y-6">
        <ReviewBlock title="Stay" onEdit={() => onEdit(0)}>
          <p className="font-serif text-xl text-charcoal">
            {range?.from && format(range.from, "MMM d")} —{" "}
            {range?.to && format(range.to, "MMM d, yyyy")}
          </p>
          <p className="text-sm text-stone-700">
            {nights} {nights === 1 ? "night" : "nights"} · {adults}{" "}
            {Number(adults) === 1 ? "Adult" : "Adults"} · {roomsCount}{" "}
            {Number(roomsCount) === 1 ? "Room" : "Rooms"}
          </p>
        </ReviewBlock>

        <ReviewBlock title="Room" onEdit={() => onEdit(1)}>
          {room ? (
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-28 overflow-hidden bg-stone-100">
                <Image src={room.hero} alt={room.name} fill sizes="120px" className="object-cover" />
              </div>
              <div>
                <p className="font-serif text-xl text-charcoal">{room.name}</p>
                <p className="text-sm text-stone-700">
                  {formatCurrency(room.rate)} / night
                </p>
              </div>
            </div>
          ) : (
            <p className="text-stone-500">No room selected.</p>
          )}
        </ReviewBlock>

        {offer && (
          <ReviewBlock title="Offer" onEdit={() => onEdit(0)}>
            <p className="font-serif text-xl text-charcoal">{offer.title}</p>
            <p className="text-sm text-stone-700">
              {offer.duration} · from {formatCurrency(offer.startingFrom)}
            </p>
          </ReviewBlock>
        )}

        <ReviewBlock title="Guest" onEdit={() => onEdit(2)}>
          <p className="font-serif text-xl text-charcoal">
            {details.firstName} {details.lastName}
          </p>
          <p className="text-sm text-stone-700">
            {details.email}
            {details.phone && ` · ${details.phone}`}
          </p>
          {details.notes && (
            <p className="mt-2 text-xs text-stone-600 italic">
              &ldquo;{details.notes}&rdquo;
            </p>
          )}
        </ReviewBlock>

        <div className="bg-charcoal text-ivory p-8 mt-8">
          <p className="eyebrow text-ivory/70">Estimated total</p>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-ivory/80">
                {nights} {nights === 1 ? "night" : "nights"} × {formatCurrency(room?.rate ?? 0)}
              </span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-ivory/80">Taxes & service</span>
              <span>{formatCurrency(taxes)}</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-ivory/20 flex justify-between items-baseline">
            <span className="font-serif text-2xl">Total</span>
            <span className="font-serif text-3xl">{formatCurrency(total)}</span>
          </div>
        </div>

        <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 text-center">
          This is a demonstration interface — no charges will be processed.
        </p>
      </div>
    </div>
  );
}

function ReviewBlock({
  title,
  children,
  onEdit,
}: {
  title: string;
  children: React.ReactNode;
  onEdit: () => void;
}) {
  return (
    <div className="bg-sand/30 p-6 flex items-start justify-between gap-4">
      <div>
        <p className="eyebrow text-stone-600 mb-3">{title}</p>
        {children}
      </div>
      <button
        onClick={onEdit}
        className="text-[11px] uppercase tracking-[0.25em] link-underline text-stone-700 hover:text-charcoal"
      >
        Edit
      </button>
    </div>
  );
}

function Summary({
  range,
  nights,
  adults,
  rooms: roomsCount,
  room,
  offer,
  subtotal,
  taxes,
  total,
}: {
  range: DateRange | undefined;
  nights: number;
  adults: string;
  rooms: string;
  room?: (typeof rooms)[number];
  offer?: (typeof offers)[number];
  subtotal: number;
  taxes: number;
  total: number;
}) {
  return (
    <div className="lg:sticky lg:top-28 bg-sand/30 p-8 lg:p-10">
      <p className="eyebrow text-stone-600">Reservation Summary</p>
      <div className="mt-6 space-y-5 text-sm">
        <Line label="Arrive" value={range?.from ? format(range.from, "MMM d, yyyy") : "—"} />
        <Line label="Depart" value={range?.to ? format(range.to, "MMM d, yyyy") : "—"} />
        <Line label="Nights" value={String(nights || "—")} />
        <Line
          label="Guests"
          value={`${adults} adult${Number(adults) === 1 ? "" : "s"} · ${roomsCount} room${
            Number(roomsCount) === 1 ? "" : "s"
          }`}
        />
        <Line label="Room" value={room?.name ?? "Not selected"} />
        {offer && <Line label="Offer" value={offer.title} />}
      </div>
      <div className="mt-6 pt-6 border-t border-stone-300/50 space-y-2 text-sm">
        <Line label="Subtotal" value={formatCurrency(subtotal)} />
        <Line label="Taxes & service" value={formatCurrency(taxes)} />
      </div>
      <div className="mt-4 pt-4 border-t border-stone-300/50 flex justify-between items-baseline">
        <span className="font-serif text-xl text-charcoal">Total</span>
        <span className="font-serif text-2xl text-charcoal">
          {formatCurrency(total)}
        </span>
      </div>

      <p className="mt-8 text-xs text-stone-600 leading-relaxed">
        Free cancellation until 48 hours prior to arrival. Concierge available
        24 hours at <a href="tel:+15555550100" className="link-underline">+1 555 555 0100</a>.
      </p>
    </div>
  );
}

function Line({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-stone-600">{label}</span>
      <span className="text-charcoal text-right">{value}</span>
    </div>
  );
}
