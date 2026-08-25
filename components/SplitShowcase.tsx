"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/catalog";
import { Reveal } from "./Reveal";

const spotlight = products.find((p) => p.id === "huile-chebe")!;
const secondary = products.find((p) => p.id === "savon-noir")!;

export function SplitShowcase() {
  return (
    <section className="bg-[#fbf7f0]">
      <div className="grid lg:grid-cols-2">
        <Reveal className="relative min-h-[28rem] lg:min-h-[36rem]">
          <Image
            src={spotlight.image}
            alt={spotlight.name}
            fill
            className="object-cover"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2c1810]/80 via-[#2c1810]/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
            <p className="section-label mb-3 !text-[#c9a227]">
              Soin capillaire d&apos;exception
            </p>
            <h3 className="hook mb-3 text-3xl text-[#f7f2ea] md:text-4xl">
              {spotlight.name}
            </h3>
            <p className="mb-6 max-w-md text-[#f7f2ea]/80">{spotlight.tagline}</p>
            <Link
              href={`/produits/${spotlight.id}`}
              className="btn btn-brand-outline btn-sm"
            >
              Détails
            </Link>
          </div>
        </Reveal>

        <Reveal
          delay={0.1}
          className="flex flex-col justify-center gap-8 bg-[#4b2c20] px-8 py-16 text-[#f7f2ea] md:px-14"
        >
          <div>
            <p className="section-label mb-4 !text-[#c9a227]">Soin du corps</p>
            <h3 className="hook mb-4 text-3xl md:text-5xl">{secondary.name}</h3>
            <p className="mb-6 max-w-md leading-relaxed text-[#f7f2ea]/80">
              {secondary.description}
            </p>
            <ul className="mb-8 space-y-2 text-sm text-[#f7f2ea]/75">
              {secondary.benefits.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[#c9a227]" />
                  {b}
                </li>
              ))}
            </ul>
            <Link
              href={`/produits/${secondary.id}`}
              className="btn btn-brand !bg-[#a68129] hover:!bg-[#c9a227]"
            >
              Détails
            </Link>
          </div>

          <div className="relative mt-4 overflow-hidden rounded-2xl">
            <Image
              src={secondary.image}
              alt={secondary.name}
              width={800}
              height={500}
              className="h-52 w-full object-cover opacity-90 md:h-64"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
