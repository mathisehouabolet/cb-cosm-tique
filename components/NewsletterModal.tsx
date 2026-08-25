"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Check, Mail, X } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";
const newsletterSubscribedKey = "newsletter-subscribed";

export function NewsletterModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (window.localStorage.getItem(newsletterSubscribedKey)) return;
    if (window.sessionStorage.getItem("newsletter-popup-dismissed")) return;

    const timer = window.setTimeout(() => {
      if (document.visibilityState !== "visible" || dialogRef.current?.open) return;
      dialogRef.current?.showModal();
      closeButtonRef.current?.focus();
    }, 8000);

    return () => window.clearTimeout(timer);
  }, []);

  function closeModal() {
    window.sessionStorage.setItem("newsletter-popup-dismissed", "true");
    dialogRef.current?.close();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent, website }),
      });

      if (!response.ok) throw new Error("Newsletter subscription failed");

      setStatus("success");
      setEmail("");
      setConsent(false);
      window.localStorage.setItem(newsletterSubscribedKey, "true");
      window.sessionStorage.setItem("newsletter-popup-dismissed", "true");
    } catch {
      setStatus("error");
    }
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="newsletter-popup-title"
      aria-describedby="newsletter-popup-description"
      onCancel={closeModal}
      onClick={(event) => {
        if (event.target === dialogRef.current) closeModal();
      }}
      className="m-auto w-[calc(100%-2rem)] max-w-lg border-0 bg-transparent p-0 shadow-2xl backdrop:bg-espresso/70"
    >
      <div className="relative overflow-hidden rounded-2xl border border-gold/35 bg-ivory p-7 text-cocoa md:p-10">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={closeModal}
          className="btn btn-circle btn-sm absolute top-4 right-4 bg-transparent text-cocoa/60 shadow-none hover:bg-cocoa/10 hover:text-cocoa"
          aria-label="Fermer la fenêtre d'inscription"
          title="Fermer"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="pr-7">
          <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-cocoa text-gold">
            <Mail className="h-5 w-5" />
          </div>
          <p className="section-label mb-3">La lettre CB</p>
          <h2 id="newsletter-popup-title" className="hook mb-3 text-4xl md:text-5xl">
            Prenez soin de votre peau naturellement 🌿
          </h2>
          <p id="newsletter-popup-description" className="mb-7 text-sm leading-relaxed text-cocoa/70">
            Recevez nos conseils beauté, nos nouveautés et nos offres exclusives.
          </p>
        </div>

        {status === "success" ? (
          <div className="border-t border-cocoa/10 pt-5 text-sm font-medium" role="status">
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-ochre" />
              Merci, votre inscription est confirmée.
            </div>
            <button type="button" onClick={closeModal} className="btn btn-brand btn-sm mt-5">
              Fermer
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="sr-only" htmlFor="newsletter-popup-email">
              Votre adresse e-mail
            </label>
            <input
              id="newsletter-popup-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="votre@email.com"
              required
              autoComplete="email"
              className="input input-lg w-full border-cocoa/20 bg-white text-cocoa placeholder:text-cocoa/40"
            />
            <label className="flex items-start gap-2 text-xs leading-relaxed text-cocoa/65">
              <input
                type="checkbox"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
                className="checkbox checkbox-xs mt-0.5 border-ochre"
              />
              <span>J&apos;accepte de recevoir la newsletter de CB COSMÉTIQUE.</span>
            </label>
            <input
              type="text"
              value={website}
              onChange={(event) => setWebsite(event.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />
            <button type="submit" className="btn btn-brand w-full" disabled={status === "loading" || !consent}>
              {status === "loading" ? "Inscription..." : "Je m'inscris"}
            </button>
            {status === "error" && (
              <p className="text-center text-xs font-medium text-error" role="alert">
                Impossible de vous inscrire pour le moment. Réessayez plus tard.
              </p>
            )}
          </form>
        )}
      </div>
    </dialog>
  );
}