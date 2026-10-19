"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { siteConfig } from "@/config/site";

const links = [
  { href: "/restaurant/", label: "Restaurant" },
  { href: "/speisekarte/", label: "Speisekarte" },
  { href: "/mittagskarte/", label: "Mittagskarte" },
  { href: "/hotel/", label: "Hotel" },
  { href: "/kontakt/", label: "Kontakt" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-char-950/95 text-ember-50 backdrop-blur-xl">
      <nav
        aria-label="Hauptnavigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3"
      >
        <Link href="/" aria-label={`${siteConfig.shortName} – Startseite`}>
          <Logo />
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ember-50/75 transition-colors hover:text-ember-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/reservierung/"
            className="hidden rounded-full bg-ember-500 px-5 py-2.5 text-sm font-semibold text-char-950 transition-colors hover:bg-ember-400 sm:inline-flex"
          >
            Tisch anfragen
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 lg:hidden"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-char-950 px-5 pb-6 pt-2 lg:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-white/10 py-4 text-base"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/sonderkarte/"
            onClick={() => setMenuOpen(false)}
            className="block border-b border-white/10 py-4 text-base"
          >
            Sonderkarte
          </Link>
          <Link
            href="/reservierung/"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block rounded-full bg-ember-500 px-5 py-3 text-center text-sm font-semibold text-char-950"
          >
            Tisch anfragen
          </Link>
        </div>
      )}
    </header>
  );
}
