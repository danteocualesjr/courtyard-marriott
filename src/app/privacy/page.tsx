export const metadata = {
  title: "Privacy",
  description:
    "How The Courtyard handles guest information for reservations, concierge requests, and website communications.",
};

const sections = [
  {
    title: "Information we collect",
    body: "We collect the details you choose to share when making a reservation, contacting the concierge, or subscribing to hotel communications. This may include your name, contact details, stay preferences, and special requests.",
  },
  {
    title: "How we use it",
    body: "Guest information is used to prepare your stay, respond to requests, personalize hospitality, and send communications you have requested. Demo forms on this website do not process real submissions.",
  },
  {
    title: "Your choices",
    body: "You may ask to update, export, or remove your information by contacting our concierge team. Marketing messages can be unsubscribed from at any time.",
  },
];

export default function PrivacyPage() {
  return (
    <section className="bg-ivory">
      <div className="container-luxe pt-32 pb-24 lg:pb-32">
        <p className="eyebrow text-stone-600">Guest Information</p>
        <h1 className="display-2 mt-5 max-w-3xl text-charcoal">Privacy at The Courtyard</h1>
        <p className="lede mt-6 max-w-2xl">
          We treat guest information with the same discretion that shapes every
          stay at the hotel.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {sections.map((section) => (
            <article key={section.title} className="border border-stone-200 bg-sand/30 p-8">
              <h2 className="font-serif text-2xl text-charcoal">{section.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-stone-700">{section.body}</p>
            </article>
          ))}
        </div>

        <p className="mt-12 max-w-2xl text-sm leading-relaxed text-stone-600">
          Questions about privacy may be sent to{" "}
          <a href="mailto:stay@thecourtyard.com" className="link-underline text-charcoal">
            stay@thecourtyard.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
