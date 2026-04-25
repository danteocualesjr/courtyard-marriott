import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-ivory pt-32">
      <div className="container-luxe text-center max-w-2xl">
        <p className="eyebrow text-stone-500 mb-6">404 · Quietly mislaid</p>
        <h1 className="display-1 text-charcoal text-balance">
          A page kept,
          <br />
          but not found.
        </h1>
        <p className="lede text-stone-700 mt-8">
          The corridor you were following has come to a quiet end. May we offer
          you the way back to our doorstep?
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/">Return Home</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Speak with Concierge</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
