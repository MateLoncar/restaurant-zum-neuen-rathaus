"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import { siteConfig } from "@/config/site";

const links = [
  { href: "/restaurant/", label: "Restaurant" },
  { href: "/speisekarte/", label: "Speisekarte" },
  { href: "/mittagskarte/", label: "Mittagskarte" },
  { href: "/sonderkarte/", label: "Sonderkarte" },
  { href: "/hotel/", label: "Hotel" },
  { href: "/kontakt/", label: "Kontakt" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href.replace(/\/$/, "");

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-[#202020] text-[#F8F4E9]">
      <nav
        aria-label="Hauptnavigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-6 lg:py-4"
      >
        <Link href="/" aria-label={`${siteConfig.shortName} – Startseite`}>
          <Logo />
        </Link>

        <div className="hidden shrink-0 items-center gap-3 lg:flex xl:gap-4 2xl:gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`whitespace-nowrap border-b py-2 text-sm font-medium transition-colors hover:text-white ${isActive(link.href) ? "border-accent text-white" : "border-transparent text-[#C5C5C5] hover:border-accent-light"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Link
            href="/reservierung/"
            className="hidden whitespace-nowrap rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-char-950 transition-colors hover:bg-accent-light lg:inline-flex"
          >
            Tisch anfragen
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-[#F8F4E9] transition-colors hover:border-accent lg:hidden"
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
          className="border-t border-white/15 bg-[#202020] px-5 pb-6 pt-2 lg:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`block border-b border-white/15 py-4 text-base ${isActive(link.href) ? "font-semibold text-accent-light" : "text-[#F8F4E9]"}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/reservierung/"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-char-950 transition-colors hover:bg-accent-light"
          >
            Tisch anfragen
          </Link>
        </div>
      )}
    </header>
  );
}
