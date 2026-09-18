import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import blog from "@/content/blog";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5}>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function BlogPage() {
  return (
    <>
      <Hero
        variant="secondary"
        eyebrow="Blog"
        title="Blog e approfondimenti legali"
        subtitle="Articoli aggiornati sul gratuito patrocinio e sulle aree di assistenza dello studio."
      />

      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {blog.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="group flex flex-col overflow-hidden rounded-lg border border-line bg-white shadow-sm shadow-navy/5 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="text-xs font-semibold uppercase tracking-wide text-gold">{post.date}</p>
                <h2 className="mt-2 font-heading text-2xl font-bold text-navy">{post.title}</h2>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink/70">{post.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold group-hover:text-gold-dark">
                  Leggi l&apos;articolo
                  <ArrowIcon />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
