"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = currentTheme;
    setTheme(currentTheme);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    try {
      window.localStorage.setItem("site-theme", nextTheme);
    } catch {
      // Keep the current page usable when browser storage is unavailable.
    }
    setTheme(nextTheme);
  }

  const switchingTo = theme === "light" ? "dunkle" : "helle";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Zum ${switchingTo} Design wechseln`}
      title={`Zum ${switchingTo} Design wechseln`}
      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/25 text-[#F8F4E9] transition-colors hover:border-accent hover:text-accent-light focus-visible:outline-offset-2"
    >
      {theme === "light" ? (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
          <circle cx="12" cy="12" r="3.7" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
        </svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.2 15.3A8.5 8.5 0 0 1 8.7 3.8 8.5 8.5 0 1 0 20.2 15.3Z" />
        </svg>
      )}
    </button>
  );
}
