"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const PLACEHOLDER_GRADIENTS = [
  "from-violet-500/20 to-indigo-500/20",
  "from-cyan-500/20 to-blue-500/20",
  "from-emerald-500/20 to-teal-500/20",
  "from-orange-500/20 to-amber-500/20",
  "from-rose-500/20 to-pink-500/20",
  "from-purple-500/20 to-violet-500/20",
];

function hashIndex(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) & 0xff;
  return h % PLACEHOLDER_GRADIENTS.length;
}

type Props = {
  images?: string[];
  name: string;
  href?: string;
  priority?: boolean;
  variant?: "card" | "detail";
};

export function ProjectImageCarousel({
  images,
  name,
  href,
  priority,
  variant = "card",
}: Props) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const gradient = PLACEHOLDER_GRADIENTS[hashIndex(name)];
  const hasImages = images && images.length > 0;
  const multi = hasImages && images.length > 1;
  const isDetail = variant === "detail";

  const advance = useCallback(() => {
    setIndex((i) => (i + 1) % images!.length);
  }, [images]);

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
    setIndex((i) => (i - 1 + images!.length) % images!.length);
  };

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex((i) => (i + 1) % images!.length);
  };

  return (
    <div
      className="relative select-none overflow-hidden rounded-xl"
      onMouseEnter={isDetail ? undefined : startAutoPlay}
      onMouseLeave={isDetail ? undefined : stopAutoPlay}
    >
      {/* Slides */}
      {hasImages ? (
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <div key={i} className="relative w-full shrink-0">
              <Image
                src={src}
                alt={`${name} screenshot ${i + 1}`}
                width={1200}
                height={630}
                quality={100}
                priority={priority && i === 0}
                unoptimized
                className={`w-full object-cover ${isDetail ? "aspect-[16/9]" : "aspect-[1200/630]"}`}
              />
            </div>
          ))}
        </div>
      ) : (
        <div
          className={`w-full bg-gradient-to-br ${gradient} flex items-end p-4 border border-edge ${isDetail ? "aspect-[16/9]" : "aspect-[1200/630]"}`}
        >
          <span className="font-mono text-xs text-muted-foreground/60 truncate">
            {href?.replace(/^https?:\/\//, "") ?? name}
          </span>
        </div>
      )}

      {/* Ring overlay */}
      {hasImages && (
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />
      )}

      {/* Prev / Next buttons — detail only */}
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

      {/* Dot indicators */}
      {multi && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIndex(i);
              }}
              aria-label={`Go to image ${i + 1}`}
              className={`rounded-full transition-all duration-200 ${
                i === index ? "w-4 h-1.5 bg-white" : "size-1.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
