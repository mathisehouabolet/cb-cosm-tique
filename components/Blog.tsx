"use client";

import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/articles";
import { blogPosts } from "@/lib/catalog";
import { Reveal } from "./Reveal";

export function Blog() {
  return (
    <section id="journal" className="bg-[#f3ebe0] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="section-label mb-4">Conseils beauté</p>
            <h2 className="hook text-4xl text-cocoa md:text-5xl">
              Beauté, nature et savoir-faire.
            </h2>
          </div>
          <p className="max-w-sm text-[#4b2c20]/70">
            Astuces, rituels et histoires autour de nos actifs africains.
          </p>
        </Reveal>

        <div className="grid gap-7 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08} className="h-full">
              <article className="product-card group card flex h-full flex-col overflow-hidden rounded-2xl border border-[#a68129]/15 bg-base-100 shadow-lg">
                <figure className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </figure>
                <div className="card-body flex flex-1 flex-col gap-3 p-6">
                  <p className="text-[0.65rem] tracking-[0.2em] text-[#a68129] uppercase">
                    {post.date}
                  </p>
                  <h3 className="font-display line-clamp-2 text-2xl leading-snug text-[#4b2c20]">
                    {post.title}
                  </h3>
                  <p className="line-clamp-3 text-sm leading-relaxed text-[#4b2c20]/70">
                    {post.excerpt}
                  </p>
                  {articles.some((article) => article.slug === post.slug) ? (
                    <Link
                      href={`/articles/${post.slug}`}
                      className="link mt-auto pt-2 text-sm tracking-wide text-[#4b2c20] no-underline hover:text-[#a68129]"
                    >
                      Lire l&apos;article →
                    </Link>
                  ) : (
                    <span className="mt-auto pt-2 text-sm tracking-wide text-[#4b2c20]/50">
                      Bientôt disponible
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
