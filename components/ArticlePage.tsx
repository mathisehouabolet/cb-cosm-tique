import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/articles";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "./Reveal";

export function ArticlePage({ article }: { article: Article }) {
  return (
    <main className="bg-cream pt-24">
      <section className="border-b border-ochre/15 bg-[#f3ebe0]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-24">
          <Reveal>
            <Link
              href="/#journal"
              className="mb-8 inline-flex items-center gap-2 text-xs tracking-[0.18em] text-ochre uppercase transition hover:text-cocoa"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour
            </Link>
            <p className="section-label mb-4">Conseils beauté · {article.date}</p>
            <h1 className="hook max-w-2xl text-5xl text-cocoa md:text-7xl">
              {article.title}
            </h1>
            <p className="mt-5 max-w-xl font-display text-2xl italic text-ochre md:text-3xl">
              {article.subtitle}
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cocoa/70 md:text-lg">
              {article.excerpt}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </Reveal>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
        <div className="space-y-14">
          {article.sections.map((section, index) => (
            <Reveal key={section.heading} delay={index === 0 ? 0.05 : 0}>
              <section>
                <h2 className="hook mb-5 text-3xl text-cocoa md:text-4xl">
                  {section.heading}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mb-4 text-base leading-8 text-cocoa/80 last:mb-0 md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-5 space-y-3 border-l-2 border-gold/60 pl-6 text-base leading-7 text-cocoa/80 md:text-lg">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
                {section.steps && (
                  <ol className="mt-5 space-y-4 text-base leading-7 text-cocoa/80 md:text-lg">
                    {section.steps.map((step, stepIndex) => (
                      <li key={step} className="flex gap-4">
                        <span className="font-display text-2xl text-ochre">
                          {stepIndex + 1}.
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                )}
                {section.note && (
                  <p className="mt-6 border-t border-ochre/20 pt-5 font-display text-xl italic leading-relaxed text-cocoa md:text-2xl">
                    {section.note}
                  </p>
                )}
              </section>
            </Reveal>
          ))}
        </div>
      </article>
    </main>
  );
}
