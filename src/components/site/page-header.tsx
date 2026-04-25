import Image from "next/image";

interface PageHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  image: string;
  alt: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  image,
  alt,
}: PageHeaderProps) {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden bg-charcoal">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        quality={88}
        sizes="100vw"
        className="object-cover animate-ken-burns"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-charcoal/30" />
      <div className="relative h-full container-luxe flex flex-col justify-end pb-20 lg:pb-28">
        <div className="max-w-3xl text-ivory">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-brass" />
            <p className="eyebrow text-ivory/80">{eyebrow}</p>
          </div>
          <h1 className="display-1 mt-6 text-balance">{title}</h1>
          {description && (
            <p className="lede mt-7 text-ivory/80 max-w-2xl">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}
