"use client";

import Image from "next/image";
import { Leaf, Droplets, Sparkles, Heart } from "lucide-react";
import { Reveal } from "./Reveal";

const pillars = [
  {
    icon: Leaf,
    title: "Ingrédients purs",
    text: "Karité, cacao, chébé et plantes africaines sélectionnés avec exigence.",
  },
  {
    icon: Droplets,
    title: "Formules sensorielles",
    text: "Des textures généreuses qui fondent, nourrissent et subliment la peau.",
  },
  {
    icon: Sparkles,
    title: "Éclat naturel",
    text: "Une beauté qui respire l'authenticité, sans artifices inutiles.",
  },
  {
    icon: Heart,
    title: "Fait avec soin",
    text: "Chaque produit est pensé comme un rituel, du lot artisanal à votre peau.",
  },
];

export function Philosophy() {
  return (
    <section id="philosophie" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=1800&q=70"
          alt=""
          fill
          className="object-cover opacity-25 blur-[2px]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-overlay-soft" />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="section-label mb-4">Notre histoire</p>
            <h2 className="hook mb-6 text-4xl text-[#4b2c20] md:text-5xl lg:text-6xl">
              Façonné avec soin pour votre peau.
            </h2>
            <div className="gold-line mb-8" />
            <p className="mb-6 text-lg leading-relaxed text-[#4b2c20]/80">
              CB COSMÉTIQUE célèbre la richesse des actifs africains : beurre de
              karité, beurre de cacao, huile de chébé et savon noir. Une
              cosmétique naturelle, luxueuse et profondément enracinée dans le
              savoir-faire artisanal.
            </p>
            <p className="text-base leading-relaxed text-[#4b2c20]/70">
              Chaque formule est pensée pour nourrir, protéger et révéler —
              parce que votre peau mérite le meilleur de la nature.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#a68129]/30 to-[#4b2c20]/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <Image
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80"
                  alt="Rituel de beauté naturelle"
                  width={900}
                  height={1100}
                  className="h-[28rem] w-full object-cover md:h-[34rem]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4b2c20]/50 to-transparent" />
                <p className="absolute bottom-6 left-6 right-6 font-display text-2xl text-[#f7f2ea] md:text-3xl">
                  Une peau saine commence par la nature.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="glass-panel h-full rounded-2xl p-6 transition duration-400 hover:-translate-y-1 hover:shadow-xl">
                <item.icon className="mb-4 h-7 w-7 text-[#a68129]" strokeWidth={1.4} />
                <h3 className="font-display mb-2 text-xl text-[#4b2c20]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#4b2c20]/70">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
