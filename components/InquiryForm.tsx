"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

type FormKind = "reservation" | "hotel";

export default function InquiryForm({ kind }: { kind: FormKind }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const isHotel = kind === "hotel";

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind, ...values }),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error || "Die Anfrage konnte nicht gesendet werden.");
      setStatus("success");
      form.reset();
    } catch (cause) {
      setStatus("error");
      setError(cause instanceof Error ? cause.message : "Bitte versuchen Sie es erneut oder rufen Sie uns an.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-ember-300/30 bg-ember-300/5 p-8" role="status" aria-live="polite">
        <h2 className="font-display text-2xl text-ember-100">Anfrage übermittelt</h2>
        <p className="mt-3 leading-7 text-ember-50/75">
          Ihre Nachricht wurde an das Hotel-Restaurant gesendet. Es handelt sich um eine Anfrage; wir bestätigen die Reservierung oder Zimmerverfügbarkeit persönlich.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-5 text-sm font-semibold text-ember-200 underline underline-offset-4">
          Weitere Anfrage senden
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Vor- und Nachname" name="name" autoComplete="name" />
        <Field label="E-Mail-Adresse" name="email" type="email" autoComplete="email" />
        <Field label="Telefonnummer" name="phone" type="tel" autoComplete="tel" />

        {isHotel ? (
          <>
            <Field label="Anreise" name="arrival" type="date" />
            <Field label="Abreise" name="departure" type="date" />
            <Field label="Anzahl der Gäste" name="guests" type="number" min="1" />
            <label className="block text-sm font-medium text-ember-50/85" htmlFor="roomPreference">
              Zimmerwunsch
              <select id="roomPreference" name="roomPreference" className="input mt-2" required defaultValue="">
                <option value="" disabled>Bitte auswählen</option>
                <option value="Einzelzimmer">Einzelzimmer</option>
                <option value="Doppelzimmer">Doppelzimmer</option>
                <option value="Offen">Noch offen</option>
              </select>
            </label>
          </>
        ) : (
          <>
            <Field label="Datum" name="date" type="date" />
            <Field label="Uhrzeit" name="time" type="time" />
            <Field label="Anzahl der Gäste" name="guests" type="number" min="1" />
          </>
        )}
      </div>

      <label className="mt-5 block text-sm font-medium text-ember-50/85" htmlFor="message">
        Nachricht <span className="font-normal text-ember-50/50">(optional)</span>
        <textarea id="message" name="message" rows={4} maxLength={2000} className="input mt-2 resize-y" />
      </label>

      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-ember-50/70">
        <input name="privacyConsent" type="checkbox" value="yes" required className="mt-1 accent-ember-400" />
        <span>
          Ich habe die <Link href="/datenschutz/" className="text-ember-200 underline underline-offset-4">Datenschutzhinweise</Link> gelesen und bin mit der Verarbeitung meiner Angaben zur Bearbeitung dieser Anfrage einverstanden.
        </span>
      </label>

      {status === "error" && (
        <p className="mt-5 rounded-lg border border-red-300/30 bg-red-950/30 p-3 text-sm text-red-100" role="alert">
          {error}
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="mt-6 w-full rounded-full bg-ember-500 px-6 py-4 font-semibold text-char-950 transition-colors hover:bg-ember-400 disabled:cursor-wait disabled:opacity-60">
        {status === "sending" ? "Wird gesendet …" : isHotel ? "Zimmer anfragen" : "Tisch anfragen"}
      </button>
      <p className="mt-4 text-center text-xs leading-5 text-ember-50/50">
        {isHotel ? "Ihre Anfrage ist noch keine Buchungsbestätigung." : "Wir melden uns persönlich zur Bestätigung Ihrer Tischanfrage."}
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  min,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  min?: string;
  autoComplete?: string;
}) {
  const today = new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Europe/Berlin",
  }).format(new Date());

  return (
    <label className="block text-sm font-medium text-ember-50/85" htmlFor={name}>
      {label}
      <input id={name} name={name} type={type} min={min ?? (type === "date" ? today : undefined)} autoComplete={autoComplete} required className="input mt-2" />
    </label>
  );
}
