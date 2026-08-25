"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";

export function IngredientsBanner() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden parallax-bg">
      <Image
        src="https://images.unsplash.com/photo-1471943311424-646960669fbc?w=2000&q=80"
        alt="Ingrédients botaniques"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#2c1810]/55 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#4b2c20]/40 via-transparent to-[#2c1810]/70" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 py-24 text-center md:px-8">
        <Reveal>
          <p className="section-label mb-6 !text-[#c9a227]">La nature comme standard</p>
          <h2 className="hook mb-8 text-4xl text-[#f7f2ea] sm:text-5xl md:text-6xl lg:text-7xl">
            La nature est le plus bel des luxes.
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#f7f2ea]/85 md:text-xl">
            Du savon noir d&apos;Afrique à l&apos;huile de chébé, chaque actif
            raconte une histoire de terre, de tradition et de transmission.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
