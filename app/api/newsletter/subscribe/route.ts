import { NextResponse } from "next/server";

export const runtime = "nodejs";

const brevoApiKey = process.env.BREVO_API_KEY;
const brevoListId = Number(process.env.BREVO_LIST_ID);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const consent = body.consent === true;
    const website = typeof body.website === "string" ? body.website.trim() : "";

    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!email || !consent) {
      return NextResponse.json(
        { error: "L'email et le consentement sont obligatoires." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "L'adresse email n'est pas valide." },
        { status: 400 },
      );
    }

    if (!brevoApiKey || !Number.isInteger(brevoListId) || brevoListId < 1) {
      return NextResponse.json(
        { error: "La configuration de la newsletter n'est pas active." },
        { status: 500 },
      );
    }

    const brevoResponse = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": brevoApiKey,
      },
      body: JSON.stringify({
        email,
        listIds: [brevoListId],
        updateEnabled: true,
      }),
      cache: "no-store",
    });

    if (!brevoResponse.ok) {
      const brevoError = await brevoResponse.text();
      console.error("Brevo newsletter error:", {
        status: brevoResponse.status,
        response: brevoError,
      });
      return NextResponse.json(
        {
          error:
            brevoResponse.status === 400
              ? "La configuration de la newsletter est incorrecte."
              : "Impossible de finaliser l'inscription pour le moment.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'inscription. Veuillez réessayer." },
      { status: 500 },
    );
  }
}