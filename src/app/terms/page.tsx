export const metadata = {
  title: "Terms",
  description:
    "Reservation, website, and guest communication terms for The Courtyard.",
};

const terms = [
  {
    title: "Reservations",
    body: "Rates, packages, and availability shown on this demonstration website are illustrative. Confirmed bookings would be governed by the rate details shared at the time of reservation.",
  },
  {
    title: "Cancellations",
    body: "Unless otherwise noted, stays may be cancelled without charge until 48 hours before arrival. Some seasonal offers and private events may carry separate terms.",
  },
  {
    title: "Website use",
    body: "The website content, photography, and hotel descriptions are provided to help guests explore The Courtyard. Please contact the concierge for the most current details.",
  },
];

export default function TermsPage() {
  return (
    <section className="bg-ivory">
      <div className="container-luxe pt-32 pb-24 lg:pb-32">
        <p className="eyebrow text-stone-600">Hotel Policies</p>
        <h1 className="display-2 mt-5 max-w-3xl text-charcoal">Terms of use</h1>
        <p className="lede mt-6 max-w-2xl">
          Clear expectations for browsing the site, requesting a stay, and
          confirming details with our concierge team.
        </p>

        <div className="mt-16 space-y-6">
          {terms.map((term) => (
            <article key={term.title} className="border-b border-stone-200 pb-6">
              <h2 className="font-serif text-2xl text-charcoal">{term.title}</h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-stone-700">
                {term.body}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-12 max-w-2xl text-sm leading-relaxed text-stone-600">
          For rate-specific questions, call{" "}
          <a href="tel:+15555550100" className="link-underline text-charcoal">
            +1 555 555 0100
          </a>
          .
        </p>
      </div>
    </section>
  );
}
