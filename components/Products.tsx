"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { categories, products, type Product, type ProductCategory } from "@/lib/catalog";
import { Reveal } from "./Reveal";

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card card flex h-full flex-col overflow-hidden rounded-2xl border border-[#a68129]/15 bg-base-100 shadow-lg">
      <Link href={`/produits/${product.id}`} className="contents">
        <figure className="relative aspect-[4/5] overflow-hidden bg-[#e6d9c8]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute left-4 top-4">
            <span className="badge border-none bg-[#4b2c20]/90 text-[0.65rem] tracking-[0.15em] text-[#f7f2ea] uppercase">
              {product.category}
            </span>
          </div>
        </figure>
      </Link>
      <div className="card-body flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display line-clamp-2 text-2xl leading-tight text-[#4b2c20]">
          {product.name}
        </h3>
        <p className="line-clamp-2 text-sm italic text-[#a68129]">{product.tagline}</p>
        <p className="line-clamp-3 text-sm leading-relaxed text-[#4b2c20]/70">
          {product.description}
        </p>
        <div className="mt-2 flex min-h-[2.25rem] flex-wrap gap-2">
          {product.benefits.slice(0, 2).map((b) => (
            <span
              key={b}
              className="badge badge-outline border-[#a68129]/40 text-[0.65rem] text-[#4b2c20]"
            >
              {b}
            </span>
          ))}
        </div>
        <div className="card-actions mt-auto pt-3">
          <Link
            href={`/produits/${product.id}`}
            className="btn btn-brand btn-sm w-full"
          >
            Détails
          </Link>
        </div>
      </div>
    </article>
  );
}

export function Products() {
  const [active, setActive] = useState<ProductCategory | "Tous">("Tous");

  const filtered = useMemo(() => {
    if (active === "Tous") return products;
    return products.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="collection" className="bg-[#f3ebe0] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <p className="section-label mb-4">Nos produits</p>
          <h2 className="hook mb-5 text-4xl text-[#4b2c20] md:text-5xl lg:text-6xl">
            Découvrez la puissance des actifs naturels.
          </h2>
          <p className="text-base text-[#4b2c20]/70 md:text-lg">
            Huit soins;exception pour la peau et les cheveux — purs,
            sensoriels, irrésistibles.
          </p>
        </Reveal>

        <Reveal>
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => setActive("Tous")}
              className={`btn btn-sm ${
                active === "Tous"
                  ? "btn-brand"
                  : "btn-ghost border border-[#a68129]/25 text-[#4b2c20]"
              }`}
            >
              Tous
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`btn btn-sm ${
                  active === cat
                    ? "btn-brand"
                    : "btn-ghost border border-[#a68129]/25 text-[#4b2c20]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {filtered.map((product, i) => (
            <Reveal key={product.id} delay={i * 0.05} className="h-full">
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
