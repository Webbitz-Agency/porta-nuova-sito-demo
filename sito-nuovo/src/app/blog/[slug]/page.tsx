import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { AnimatedLine } from "@/components/motion/AnimatedLine";
import { CtaBlock } from "@/components/sections/CtaBlock";
import blog from "@/content/blog";

export function generateStaticParams() {
  return blog.map((post) => ({ slug: post.slug }));
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blog.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Hero variant="secondary" eyebrow="Blog" title={post.title} subtitle={post.excerpt} />

      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link href="/blog/" className="text-sm font-semibold text-gold hover:text-gold-dark">
          ← Tutti gli articoli
        </Link>

        <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-ink/50">Pubblicato il {post.date}</p>

        <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-lg">
          <Image src={post.image.src} alt={post.image.alt} fill className="object-cover" />
        </div>

        <div className="mt-12">
          {post.sections.map((section, i) => (
            <div key={section.heading}>
              {i > 0 && <AnimatedLine className="my-10" />}
              <h2 className="font-heading text-2xl font-semibold text-navy">{section.heading}</h2>
              {section.body && <p className="mt-3 text-ink/80">{section.body}</p>}
              {section.items && (
                <ul className="mt-3 space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-ink/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14">
          <CtaBlock
            variant="link"
            tone="gold"
            title="Hai bisogno di parlare con un avvocato?"
            description="Raccontaci la tua situazione, ti rispondiamo rapidamente."
            label="Contattaci"
            href="/contatti/"
          />
        </div>
      </div>
    </>
  );
}
