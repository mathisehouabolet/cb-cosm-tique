"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, ShoppingBag, MessageCircle } from "lucide-react";
import {
  CONTACT,
  getRelatedProducts,
  type Product,
} from "@/lib/catalog";
import { Reveal } from "./Reveal";

export function ProductDetail({ product }: { product: Product }) {
  const related = getRelatedProducts(product.id, 3);

  const orderMessage = [
    `Bonjour CB COSMÉTIQUE,`,
    ``,
    `Je souhaite commander : ${product.name}.`,
    ``,
    `Pouvez-vous me confirmer la disponibilité et les modalités ?`,
  ].join("\n");

  const whatsappHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(orderMessage)}`;

  return (
    <main className="flex-1 bg-[#fbf7f0] pt-24">
      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
        <Reveal>
          <Link
            href="/#collection"
            className="mb-8 inline-flex items-center gap-2 text-sm tracking-wide text-[#4b2c20]/70 transition hover:text-[#a68129]"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux produits
          </Link>
        </Reveal>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-[1.5rem] bg-[#e6d9c8] shadow-2xl">
              <div className="relative aspect-[4/5]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute left-5 top-5">
                <span className="badge border-none bg-[#4b2c20]/90 text-[0.65rem] tracking-[0.15em] text-[#f7f2ea] uppercase">
                  {product.category}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col">
            <p className="section-label mb-3">Fiche produit</p>
            <h1 className="font-display mb-4 text-4xl leading-tight text-[#4b2c20] md:text-5xl lg:text-6xl">
              {product.name}
            </h1>
            <p className="mb-6 text-xl italic text-[#a68129] md:text-2xl">
              {product.tagline}
            </p>
            <div className="gold-line mb-8" />
            <p className="mb-10 text-base leading-relaxed text-[#4b2c20]/80 md:text-lg">
              {product.description}
            </p>

            <div className="mb-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#a68129]/20 bg-white/70 p-5 shadow-sm">
                <p className="mb-3 text-[0.65rem] tracking-[0.2em] text-[#a68129] uppercase">
                  Ingrédients
                </p>
                <ul className="space-y-2">
                  {product.ingredients.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-[#4b2c20]/85"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#a68129]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-[#a68129]/20 bg-white/70 p-5 shadow-sm">
                <p className="mb-3 text-[0.65rem] tracking-[0.2em] text-[#a68129] uppercase">
                  Bienfaits
                </p>
                <ul className="space-y-2">
                  {product.benefits.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-[#4b2c20]/85"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#c9a227]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-[#c9a227]/30 bg-[#4b2c20] p-6 text-[#f7f2ea] shadow-xl md:p-8">
              <p className="section-label mb-3 !text-[#c9a227]">Commander ce soin</p>
              <h2 className="font-display mb-3 text-2xl md:text-3xl">
                Votre peau mérite le meilleur.
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-[#f7f2ea]/75 md:text-base">
                Appelez-nous ou passez commande via WhatsApp. Nous vous
                accompagnons pour finaliser votre demande.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg flex-1 border-none bg-[#25D366] text-white hover:bg-[#1ebe57]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Commander
                </a>
              </div>
              <p className="mt-4 text-xs text-[#f7f2ea]/50">
                Commande et renseignements via WhatsApp : {CONTACT.whatsappDisplay}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[#a68129]/15 bg-[#f3ebe0] py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mb-10">
            <p className="section-label mb-3">À découvrir aussi</p>
            <h2 className="hook text-3xl text-[#4b2c20] md:text-4xl">
              D&apos;autres soins pour votre rituel.
            </h2>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.06} className="h-full">
                <article className="product-card card flex h-full flex-col overflow-hidden rounded-2xl border border-[#a68129]/15 bg-base-100 shadow-lg">
                  <figure className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </figure>
                  <div className="card-body flex flex-1 flex-col gap-3 p-5">
                    <h3 className="font-display line-clamp-2 text-xl text-[#4b2c20]">
                      {item.shortName}
                    </h3>
                    <p className="line-clamp-2 text-sm text-[#4b2c20]/70">
                      {item.tagline}
                    </p>
                    <Link
                      href={`/produits/${item.id}`}
                      className="btn btn-brand btn-sm mt-auto pt-2"
                    >
                      <ShoppingBag className="h-3.5 w-3.5" />
                      Détails
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
