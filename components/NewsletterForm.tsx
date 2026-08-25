"use client";

import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";
const newsletterSubscribedKey = "newsletter-subscribed";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");

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

      setEmail("");
      setConsent(false);
      setStatus("success");
      window.localStorage.setItem(newsletterSubscribedKey, "true");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <p className="mb-4 text-[0.65rem] tracking-[0.25em] text-gold uppercase">
        La lettre CB
      </p>
      <p className="mb-4 max-w-sm text-sm leading-relaxed text-ivory/70">
        Recevez nos conseils beauté, nouveautés et offres confidentielles.
      </p>
      <form onSubmit={handleSubmit} className="max-w-sm space-y-3">
        <label className="sr-only" htmlFor="newsletter-email">
          Votre adresse e-mail
        </label>
        <div className="flex gap-2">
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="votre@email.com"
            required
            autoComplete="email"
            className="input min-w-0 flex-1 border-gold/40 bg-ivory text-cocoa placeholder:text-cocoa/40"
          />
          <button
            type="submit"
            className="btn btn-brand shrink-0"
            disabled={status === "loading" || !consent}
            title="S'inscrire à la newsletter"
          >
            <Mail className="h-4 w-4" />
            <span className="sr-only">S&apos;inscrire</span>
          </button>
        </div>
        <label className="flex items-start gap-2 text-xs leading-relaxed text-ivory/55">
          <input
            type="checkbox"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            className="checkbox checkbox-xs mt-0.5 border-gold"
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
        {status === "success" && (
          <p className="text-xs font-medium text-gold">
            Merci, votre inscription est confirmée.
          </p>
        )}
        {status === "error" && (
          <p className="text-xs font-medium text-red-300">
            Impossible de vous inscrire pour le moment. Réessayez plus tard.
          </p>
        )}
      </form>
    </div>
  );
}