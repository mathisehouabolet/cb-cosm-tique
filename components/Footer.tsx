import Image from "next/image";
import { NewsletterForm } from "./NewsletterForm";

const footerLinks = [
  { href: "/#philosophie", label: "À propos" },
  { href: "/#collection", label: "Produits" },
  { href: "/#journal", label: "Conseils" },
];

export function Footer() {
  return (
    <footer className="bg-[#2c1810] text-[#f7f2ea]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-5 flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="CB COSMÉTIQUE"
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-cover ring-1 ring-[#c9a227]/50"
            />
            <div>
              <p className="font-display text-xl tracking-[0.2em]">CB</p>
              <p className="font-display text-xs tracking-[0.3em] text-[#c9a227] uppercase">
                Cosmétique
              </p>
            </div>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[#f7f2ea]/70">
            Cosmétique naturelle de luxe — beurres purs, huiles ancestrales et
            savons africains pour révéler votre éclat.
          </p>
        </div>

        <div>
          <p className="mb-4 text-[0.65rem] tracking-[0.25em] text-[#c9a227] uppercase">
            Navigation
          </p>
          <ul className="space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-[#f7f2ea]/80 transition hover:text-[#c9a227]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <NewsletterForm />
      </div>

      <div className="border-t border-[#a68129]/25 px-5 py-6 text-center text-xs tracking-wide text-[#f7f2ea]/50 md:px-8">
        © {new Date().getFullYear()} CB COSMÉTIQUE — Tous droits réservés.
      </div>
    </footer>
  );
}
