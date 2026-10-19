"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const photos = [
  { src: "/hotel-room-2.webp", alt: "Doppelzimmer mit zwei Betten und Sitzbereich" },
  { src: "/hotel-room-4.webp", alt: "Blick auf das Doppelbett und die Fenster im Hotelzimmer" },
  { src: "/hotel-room-3.webp", alt: "Hotelzimmer mit Sitzgruppe, Schreibtisch und Kleiderschrank" },
  { src: "/hotel-room-1.webp", alt: "Dusche im Badezimmer des Hotelzimmers" },
  { src: "/hotel-room-5.webp", alt: "Waschbecken und Spiegel im Badezimmer" },
];

export default function HotelGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % photos.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [paused]);

  function showPhoto(index: number) {
    setActiveIndex((index + photos.length) % photos.length);
  }

  return (
    <div
      className="group relative aspect-[4/3] overflow-hidden rounded-sm border border-border bg-char-900"
      role="region"
      aria-roledescription="Karussell"
      aria-label="Bildergalerie der Hotelzimmer"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
      }}
      onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null; }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null) return;
        const distance = event.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(distance) > 45) showPhoto(activeIndex + (distance < 0 ? 1 : -1));
        touchStartX.current = null;
      }}
    >
      {photos.map((photo, index) => (
        <Image
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          fill
          priority={index === 0}
          sizes="(min-width: 1024px) 55vw, 100vw"
          className={`object-cover transition-opacity duration-700 ${index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"}`}
          aria-hidden={index !== activeIndex}
        />
      ))}

      <button
        type="button"
        onClick={() => showPhoto(activeIndex - 1)}
        aria-label="Vorheriges Bild"
        className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/70 focus-visible:outline-white"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
      </button>
      <button
        type="button"
        onClick={() => showPhoto(activeIndex + 1)}
        aria-label="Nächstes Bild"
        className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/70 focus-visible:outline-white"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
      </button>

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/65 to-transparent px-4 pb-4 pt-8 text-white">
        <div className="flex items-center gap-2" role="group" aria-label="Galerie-Bilder auswählen">
          {photos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => showPhoto(index)}
              aria-label={`Prikaži sliku ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className={`h-2 rounded-full transition-all ${index === activeIndex ? "w-6 bg-white" : "w-2 bg-white/60 hover:bg-white"}`}
            />
          ))}
        </div>
        <span className="text-xs font-medium tabular-nums">{String(activeIndex + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}</span>
      </div>
    </div>
  );
}
