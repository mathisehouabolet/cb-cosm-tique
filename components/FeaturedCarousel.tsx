"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/lib/catalog";
import { Reveal } from "./Reveal";

const featured = products.filter((p) => p.featured);

export function FeaturedCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (featured.length <= 1) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % featured.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  if (featured.length === 0) {
    return null;
  }

  const product = featured[index % featured.length];

  const prev = () => setIndex((i) => (i - 1 + featured.length) % featured.length);
  const next = () => setIndex((i) => (i + 1) % featured.length);

  return (
    <section className="relative overflow-hidden bg-[#4b2c20] py-24 md:py-28">
      <div className="absolute inset-0 opacity-30">
        <Image
          src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=1800&q=70"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#4b2c20] via-[#4b2c20]/85 to-[#4b2c20]/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <p className="section-label !text-[#c9a227] mb-4">Sélection phare</p>
          <h2 className="hook text-4xl text-[#f7f2ea] md:text-5xl lg:text-6xl">
            Parce que votre peau mérite le meilleur.
          </h2>
        </Reveal>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] shadow-2xl">
              <Image
                key={product.id}
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-opacity duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>

          <Reveal delay={0.12} className="text-[#f7f2ea]">
            <span className="badge mb-4 border-none bg-[#a68129] text-[#fbf7f0]">
              {product.category}
            </span>
            <h3
              id={`produit-${product.id}`}
              className="font-display mb-4 text-3xl md:text-5xl"
            >
              {product.name}
            </h3>
            <p className="mb-4 text-lg italic text-[#c9a227]">{product.tagline}</p>
            <p className="mb-8 max-w-lg leading-relaxed text-[#f7f2ea]/80">
              {product.description}
            </p>

            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <div className="glass-panel rounded-xl p-4 !bg-[#f7f2ea]/10">
                <p className="mb-2 text-[0.65rem] tracking-[0.2em] text-[#c9a227] uppercase">
                  Ingrédients
                </p>
                <ul className="space-y-1 text-sm text-[#f7f2ea]/85">
                  {product.ingredients.map((ing) => (
                    <li key={ing}>· {ing}</li>
                  ))}
                </ul>
              </div>
              <div className="glass-panel rounded-xl p-4 !bg-[#f7f2ea]/10">
                <p className="mb-2 text-[0.65rem] tracking-[0.2em] text-[#c9a227] uppercase">
                  Bienfaits
                </p>
                <ul className="space-y-1 text-sm text-[#f7f2ea]/85">
                  {product.benefits.map((b) => (
                    <li key={b}>· {b}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={`/produits/${product.id}`}
                className="btn btn-brand"
              >
                Détails
              </Link>
              <button
                type="button"
                onClick={prev}
                className="btn btn-circle btn-ghost border border-[#c9a227]/40 text-[#f7f2ea]"
                aria-label="Produit précédent"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                className="btn btn-circle btn-ghost border border-[#c9a227]/40 text-[#f7f2ea]"
                aria-label="Produit suivant"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <div className="ml-2 flex gap-2">
                {featured.map((p, i) => (
                  <button
                    key={p.id}
                    type="button"
                    aria-label={`Voir ${p.shortName}`}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-8 bg-[#c9a227]" : "w-3 bg-[#f7f2ea]/35"
                    }`}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
