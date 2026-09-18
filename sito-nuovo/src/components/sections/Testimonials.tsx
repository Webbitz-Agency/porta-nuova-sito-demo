interface Testimonial {
  title: string;
  quote: string;
  author: string;
  rating: number;
}

interface TestimonialsProps {
  eyebrow: string;
  heading: string;
  items: Testimonial[];
}

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={`h-4 w-4 ${i < rating ? "fill-gold" : "fill-line"}`}>
          <path d="M10 1.5l2.6 5.4 5.9.7-4.3 4.1 1 5.9L10 14.9l-5.2 2.7 1-5.9L1.5 7.6l5.9-.7L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="flex h-full w-80 shrink-0 flex-col rounded-lg border border-line bg-white p-7 shadow-sm shadow-navy/5">
      <StarRow rating={item.rating} />
      <p className="mt-3 font-heading text-lg font-bold text-navy">{item.title}</p>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/80">&ldquo;{item.quote}&rdquo;</p>
      <p className="mt-5 text-sm font-semibold text-ink/60">{item.author}</p>
    </div>
  );
}

export function Testimonials({ eyebrow, heading, items }: TestimonialsProps) {
  // Duplicated once so the CSS animation can loop seamlessly from 0 to -50%.
  const track = [...items, ...items];

  return (
    <div>
      <div className="mx-auto max-w-xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">{eyebrow}</p>
        <h2 className="mt-3 font-heading text-5xl font-semibold text-navy md:text-6xl">{heading}</h2>
      </div>

      {/* Full-bleed: breaks out of the page's centered max-width to reach the viewport edges */}
      <div className="relative mt-14 w-full overflow-hidden">
        <div className="animate-marquee flex w-max gap-6 pl-6">
          {track.map((item, i) => (
            <TestimonialCard key={`${item.author}-${i}`} item={item} />
          ))}
        </div>

        {/* Edge vignettes: cards read blurred as they enter/exit, sharp once centered */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-28 lg:w-40"
          style={{
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            maskImage: "linear-gradient(to right, black, transparent)",
            WebkitMaskImage: "linear-gradient(to right, black, transparent)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-28 lg:w-40"
          style={{
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            maskImage: "linear-gradient(to left, black, transparent)",
            WebkitMaskImage: "linear-gradient(to left, black, transparent)",
          }}
        />
      </div>
    </div>
  );
}
