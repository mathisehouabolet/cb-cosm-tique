"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-[100svh] items-end overflow-hidden noise-texture"
    >
      <Image
        src="/img/hero.png"
        alt="Soins naturels CB COSMÉTIQUE"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2c1810]/85 via-transparent to-[#4b2c20]/35" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-8 flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Sceau CB COSMÉTIQUE"
              width={88}
              height={88}
              className="float-soft h-20 w-20 rounded-full object-cover shadow-2xl ring-2 ring-[#c9a227]/50 md:h-24 md:w-24"
              priority
            />
            <div>
              <p className="section-label !text-[#c9a227]">Cosmétique naturelle de luxe</p>
              <h1 className="font-display text-4xl tracking-[0.18em] text-[#f7f2ea] sm:text-5xl md:text-6xl">
                CB COSMÉTIQUE
              </h1>
            </div>
          </div>

          <p className="hook mb-6 max-w-2xl text-4xl text-[#f7f2ea] sm:text-5xl md:text-6xl lg:text-7xl">
            Révélez votre beauté naturelle.
          </p>

          <p className="mb-10 max-w-xl text-base leading-relaxed text-[#f7f2ea]/85 md:text-lg">
            Beurres purs, huiles ancestrales et savons africains — des soins
            artisanaux pour une peau et des cheveux d&apos;exception.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#collection" className="btn btn-lg btn-brand px-8">
              Explorer nos soins
            </a>
            <a href="#philosophie" className="btn btn-lg btn-brand-outline px-8">
              Notre philosophie
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
