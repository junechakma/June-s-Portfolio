"use client";
import { useEffect, useState } from "react";

const GLYPHS = "!@#$%^&*{}[]<>/\\|~+=0123456789ABCDEF".split("");

function rGlyph() {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
}

function scramble(text: string, revealUpTo: number) {
  return text
    .split("")
    .map((ch, i) => {
      if (ch === "." || ch === "/" || ch === " ") return ch;
      if (i < revealUpTo) return ch;
      return rGlyph();
    })
    .join("");
}

export function ScrambleText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [out, setOut] = useState(() => scramble(text, 0));

  useEffect(() => {
    let step = 0;
    const STEPS = 22;

    const run = () => {
      step = 0;
      const id = setInterval(() => {
        const reveal = Math.floor((step / STEPS) * text.length);
        setOut(scramble(text, reveal));
        step++;
        if (step > STEPS + text.length) {
          setOut(text);
          clearInterval(id);
        }
      }, 55);
      return id;
    };

    const id = run();
    // re-scramble every 12 seconds to keep it alive
    const loop = setInterval(run, 12000);

    return () => {
      clearInterval(id);
      clearInterval(loop);
    };
  }, [text]);

  return <span className={className}>{out}</span>;
}
