"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#philosophie", label: "À propos" },
  { href: "/#collection", label: "Produits" },
  { href: "/#journal", label: "Conseils" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const solid = !isHome || scrolled;

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-[#fbf7f0]/90 shadow-[0_8px_30px_rgba(75,44,32,0.08)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/#accueil" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="CB COSMÉTIQUE"
            width={52}
            height={52}
            className="h-12 w-12 rounded-full object-cover shadow-md ring-1 ring-[#c9a227]/40"
            priority
          />
          <div className="leading-none">
            <p
              className={`font-display text-lg tracking-[0.2em] transition-colors ${
                solid ? "text-[#4b2c20]" : "text-[#f7f2ea]"
              }`}
            >
              CB
            </p>
            <p
              className={`font-display text-[0.65rem] tracking-[0.35em] uppercase transition-colors ${
                solid ? "text-[#a68129]" : "text-[#f7f2ea]/80"
              }`}
            >
              Cosmétique
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[0.7rem] tracking-[0.22em] uppercase transition-colors hover:text-[#c9a227] ${
                solid ? "text-[#4b2c20]/85" : "text-[#f7f2ea]/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className={`btn btn-square btn-ghost lg:hidden ${
              solid ? "text-[#4b2c20]" : "text-[#f7f2ea]"
            }`}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#a68129]/20 bg-[#fbf7f0]/98 px-5 py-6 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-2xl text-[#4b2c20]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
