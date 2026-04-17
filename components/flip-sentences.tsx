"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function FlipSentences({
  className,
  sentences,
}: {
  className?: string;
  sentences: string[];
}) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAnimation = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sentences.length);
    }, 4000);
  };

  useEffect(() => {
    startAnimation();

    const controller = new AbortController();
    document.addEventListener(
      "visibilitychange",
      () => {
        if (document.visibilityState !== "visible" && intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        } else if (document.visibilityState === "visible") {
          setCurrent((prev) => (prev + 1) % sentences.length);
          startAnimation();
        }
      },
      { signal: controller.signal }
    );

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sentences]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.p
        key={current}
        className={cn(
          "font-mono text-sm text-muted-foreground select-none",
          className
        )}
        initial={{ y: 8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -8, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {sentences[current]}
      </motion.p>
    </AnimatePresence>
  );
}
