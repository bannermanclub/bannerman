"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "newsletter",
  "content engine",
  "growth engine",
  "sales engine",
  "own community",
];

const ROTATE_MS = 2800;

export function HeroRotatingPhrase() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % PHRASES.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="inline-block perspective-[800px] overflow-visible">
      <span
        key={index}
        className="inline-block animate-hero-flip bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent"
      >
        {PHRASES[index]}.
      </span>
    </span>
  );
}
