import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const recipient = "hotelzumneuenrathaus@gmail.com";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Inquiry = {
  kind: "reservation" | "hotel";
  name: string;
  email: string;
  phone: string;
  guests: number;
  message: string;
  date?: string;
  time?: string;
  arrival?: string;
  departure?: string;
  roomPreference?: string;
};

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).host !== new URL(request.url).host) {
        return json({ error: "Die Anfrage konnte nicht verarbeitet werden." }, 403);
      }
    } catch {
      return json({ error: "Die Anfrage konnte nicht verarbeitet werden." }, 403);
    }
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return json({ error: "Ungültiges Anfrageformat." }, 415);
  }

  const raw = await request.text();
  if (raw.length > 10_000) return json({ error: "Die Nachricht ist zu lang." }, 413);

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw) as Record<string, unknown>;
  } catch {
    return json({ error: "Die Anfrage enthält ungültige Daten." }, 400);
  }

  if (text(body.website, 200)) {
    return json({ error: "Die Anfrage konnte nicht verarbeitet werden." }, 400);
  }

  const kind = body.kind;
  if (kind !== "reservation" && kind !== "hotel") {
    return json({ error: "Bitte wählen Sie ein gültiges Anfrageformular." }, 400);
  }

  const name = text(body.name, 120);
  const email = text(body.email, 254).toLowerCase();
  const phone = text(body.phone, 60);
  const message = text(body.message, 2000);
  const guests = Number(body.guests);

  if (!name || !emailPattern.test(email) || !phone || !Number.isInteger(guests) || guests < 1 || guests > 99) {
    return json({ error: "Bitte prüfen Sie Name, E-Mail-Adresse, Telefonnummer und Gästezahl." }, 400);
  }
  if (body.privacyConsent !== "yes") {
    return json({ error: "Bitte stimmen Sie der Verarbeitung Ihrer Anfrage zu." }, 400);
  }

  const inquiry: Inquiry = { kind, name, email, phone, guests, message };

  if (kind === "reservation") {
    const date = text(body.date, 10);
    const time = text(body.time, 5);
    if (!validDate(date) || date < berlinToday() || !/^([01]\d|2[0-3]):[0-5]\d$/.test(time)) {
      return json({ error: "Bitte wählen Sie ein gültiges, heutiges oder zukünftiges Datum und eine Uhrzeit." }, 400);
    }
    inquiry.date = date;
    inquiry.time = time;
  } else {
    const arrival = text(body.arrival, 10);
    const departure = text(body.departure, 10);
    const roomPreference = text(body.roomPreference, 40);
    if (
      !validDate(arrival) ||
      !validDate(departure) ||
      arrival < berlinToday() ||
      departure <= arrival ||
      !["Einzelzimmer", "Doppelzimmer", "Offen"].includes(roomPreference)
    ) {
      return json({ error: "Bitte prüfen Sie An- und Abreise sowie den Zimmerwunsch." }, 400);
    }
    inquiry.arrival = arrival;
    inquiry.departure = departure;
    inquiry.roomPreference = roomPreference;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  if (!apiKey || !from) {
    return json({ error: "Das Anfrageformular ist noch nicht für den E-Mail-Versand eingerichtet. Bitte rufen Sie uns an." }, 503);
  }

  const subject = kind === "hotel" ? `Zimmeranfrage: ${name}` : `Tischanfrage: ${name}`;
  const details = kind === "hotel"
    ? [
        ["Anreise", inquiry.arrival ?? ""],
        ["Abreise", inquiry.departure ?? ""],
        ["Gäste", String(guests)],
        ["Zimmerwunsch", inquiry.roomPreference ?? ""],
      ]
    : [
        ["Datum", inquiry.date ?? ""],
        ["Uhrzeit", inquiry.time ?? ""],
        ["Gäste", String(guests)],
      ];
  const rows = [
    ["Name", name],
    ["E-Mail", email],
    ["Telefon", phone],
    ...details,
    ["Nachricht", message || "–"],
  ] as const;
  const html = `<h1>${escapeHtml(subject)}</h1><table>${rows.map(([label, value]) => `<tr><th align="left" valign="top">${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`).join("")}</table>`;
  const plainText = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email,
        subject,
        html,
        text: plainText,
      }),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Resend konnte eine Anfrage nicht annehmen. HTTP-Status:", response.status);
      return json({ error: "Der E-Mail-Versand ist fehlgeschlagen. Bitte versuchen Sie es später erneut oder rufen Sie uns an." }, 502);
    }

    const result = (await response.json()) as { id?: string };
    if (!result.id) {
      return json({ error: "Der E-Mail-Versand konnte nicht bestätigt werden. Bitte rufen Sie uns an." }, 502);
    }
    return json({ ok: true }, 200);
  } catch {
    return json({ error: "Der E-Mail-Dienst ist momentan nicht erreichbar. Bitte versuchen Sie es später erneut oder rufen Sie uns an." }, 502);
  }
}

function text(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, maxLength);
}

function validDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(date.valueOf()) && date.toISOString().slice(0, 10) === value;
}

function berlinToday(): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Berlin",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character] ?? character);
}

function json(body: object, status: number) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}
