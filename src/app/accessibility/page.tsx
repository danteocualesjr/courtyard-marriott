export const metadata = {
  title: "Accessibility",
  description:
    "Accessibility information for The Courtyard website and guest assistance.",
};

const commitments = [
  "Keyboard-visible focus states across navigation, forms, and calls to action.",
  "Readable color contrast, scalable type, and reduced-motion support.",
  "Alternative text for meaningful imagery and semantic page structure.",
  "Concierge assistance for guests who need help completing a reservation.",
];

export default function AccessibilityPage() {
  return (
    <section className="bg-ivory">
      <div className="container-luxe pt-32 pb-24 lg:pb-32">
        <p className="eyebrow text-stone-600">Inclusive Hospitality</p>
        <h1 className="display-2 mt-5 max-w-3xl text-charcoal">Accessibility</h1>
        <p className="lede mt-6 max-w-2xl">
          The Courtyard website is designed to be calm, navigable, and usable
          for as many guests as possible.
        </p>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {commitments.map((commitment) => (
            <div key={commitment} className="flex gap-4 border border-stone-200 bg-sand/30 p-6">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
              <p className="text-sm leading-relaxed text-stone-700">{commitment}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-2xl bg-charcoal p-8 text-ivory">
          <h2 className="font-serif text-2xl">Need assistance?</h2>
          <p className="mt-3 text-sm leading-relaxed text-ivory/75">
            If any part of the site is difficult to use, our concierge team can
            help by phone or email and will use your feedback to improve the
            experience.
          </p>
          <p className="mt-6 text-sm text-ivory/85">
            <a href="tel:+15555550100" className="link-underline">
              +1 555 555 0100
            </a>{" "}
            ·{" "}
            <a href="mailto:stay@thecourtyard.com" className="link-underline">
              stay@thecourtyard.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
