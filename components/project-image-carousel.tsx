"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

// Spread hues evenly across the wheel using 15 distinct stops
const HUE_STOPS = [0, 24, 48, 72, 96, 120, 150, 180, 210, 240, 265, 290, 315, 335, 355];

function getBgColor(name: string): { light: string; dark: string } {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  const hue = HUE_STOPS[h % HUE_STOPS.length];
  return {
    light: `hsl(${hue}, 65%, 91%)`,
    dark: `hsl(${hue}, 22%, 20%)`,
  };
}

type Props = {
  images?: string[];
  name: string;
  href?: string;
  priority?: boolean;
  variant?: "card" | "detail";
};

export function ProjectImageCarousel({ images, name, href, priority, variant = "card" }: Props) {
  const bgColor = getBgColor(name);
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);
  const bg = isDark ? bgColor.dark : bgColor.light;
  const hasImages = images && images.length > 0;
  const multi = hasImages && images.length > 1;
  const isDetail = variant === "detail";

  // Slides array: [clone_of_last, ...originals, clone_of_first]
  // Real slides sit at indices 1..n, so we start at index 1
  const slides = multi ? [images[images.length - 1], ...images, images[0]] : images ?? [];
  const [pos, setPos] = useState(multi ? 1 : 0);
  const [animated, setAnimated] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // After a transition ends, silently snap from clone to real slide
  const onTransitionEnd = useCallback(() => {
    if (!multi) return;
    const last = slides.length - 1;
    if (pos === 0) {
      setAnimated(false);
      setPos(last - 1);
    } else if (pos === last) {
      setAnimated(false);
      setPos(1);
    }
  }, [multi, pos, slides.length]);

  // Re-enable animation after a silent snap (needs one frame gap)
  const onTransitionStart = useCallback(() => {
    if (!animated) setAnimated(true);
  }, [animated]);

  const advance = useCallback(() => {
    setAnimated(true);
    setPos((p) => p + 1);
  }, []);

  const startAutoPlay = useCallback(() => {
    if (!multi) return;
    intervalRef.current = setInterval(advance, 900);
  }, [multi, advance]);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAnimated(true);
    setPos((p) => p - 1);
  };

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAnimated(true);
    setPos((p) => p + 1);
  };

  // Real index (0-based) for dot indicators
  const realIndex = multi ? (pos - 1 + images.length) % images.length : pos;

  return (
    <div
      className="relative select-none overflow-hidden rounded-xl"
      onMouseEnter={isDetail ? undefined : startAutoPlay}
      onMouseLeave={isDetail ? undefined : stopAutoPlay}
    >
      {/* Pastel bg */}
      <div className="absolute inset-0" style={{ backgroundColor: bg }} />

      {hasImages ? (
        <div
          className={`relative flex ${animated ? "transition-transform duration-500 ease-in-out" : ""}`}
          style={{ transform: `translateX(-${pos * 100}%)` }}
          onTransitionEnd={onTransitionEnd}
          onTransitionStart={onTransitionStart}
        >
          {slides.map((src, i) => (
            <div
              key={i}
              className={`relative w-full shrink-0 flex items-center justify-center ${isDetail ? "aspect-[16/9]" : "aspect-[1200/630]"}`}
            >
              <Image
                src={src}
                alt={`${name} screenshot ${i}`}
                width={1200}
                height={630}
                quality={100}
                priority={priority && i === 1}
                unoptimized
                className="h-full w-full object-contain p-3 rounded-[24px]"
              />
            </div>
          ))}
        </div>
      ) : (
        <div
          className={`relative w-full flex items-end p-4 ${isDetail ? "aspect-[16/9]" : "aspect-[1200/630]"}`}
        >
          <span className="font-mono text-xs text-muted-foreground/60 truncate">
            {href?.replace(/^https?:\/\//, "") ?? name}
          </span>
        </div>
      )}

      {/* Ring overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />

      {/* Prev / Next — detail only */}
      {multi && isDetail && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 flex size-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/60"
            aria-label="Previous image"
          >
            <ChevronLeftIcon className="size-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 flex size-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/60"
            aria-label="Next image"
          >
            <ChevronRightIcon className="size-5" />
          </button>
        </>
      )}

      {/* Dots */}
      {multi && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setAnimated(true);
                setPos(i + 1);
              }}
              aria-label={`Go to image ${i + 1}`}
              className={`rounded-full transition-all duration-200 ${i === realIndex ? "w-4 h-1.5 bg-white" : "size-1.5 bg-white/50 hover:bg-white/80"
                }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
