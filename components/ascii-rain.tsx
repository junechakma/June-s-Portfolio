"use client";
import { useEffect, useRef } from "react";

const SYMBOLS = "01{}[]()<>/\\|~@#$%^&*;:=+-_?!".split("");
const COL_W = 14;
const TRAIL = 15;
const BASE_SPD = 0.2;

function rChar() {
  return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
}

type Drop = { y: number; spd: number; chars: string[] };

export function AsciiRain({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;
    let frame = 0;
    let drops: Drop[] = [];
    let W = 0, H = 0;

    const init = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W * devicePixelRatio;
      canvas.height = H * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
      const n = Math.floor(W / COL_W);
      drops = Array.from({ length: n }, () => ({
        y: -(Math.random() * (H / COL_W + TRAIL)),
        spd: BASE_SPD + Math.random() * 0.28,
        chars: Array.from({ length: TRAIL }, rChar),
      }));
    };

    const isDark = () => document.documentElement.classList.contains("dark");

    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.font = `${COL_W - 2}px monospace`;
      const dark = isDark();

      drops.forEach((drop, i) => {
        if (frame % 6 === 0) drop.chars[0] = rChar();

        const head = Math.floor(drop.y);
        for (let t = 0; t < TRAIL; t++) {
          const row = head - t;
          const py = row * COL_W;
          if (py < -COL_W || py > H) continue;
          const alpha = ((1 - t / TRAIL) * (dark ? 0.48 : 0.2)).toFixed(2);
          ctx.fillStyle = dark
            ? `rgba(161,161,170,${alpha})`
            : `rgba(82,82,91,${alpha})`;
          ctx.fillText(drop.chars[t % drop.chars.length], i * COL_W, py);
        }

        drop.y += drop.spd;
        if (drop.y * COL_W > H + TRAIL * COL_W) {
          drop.y = -(TRAIL + Math.random() * 22);
          drop.spd = BASE_SPD + Math.random() * 0.28;
          drop.chars = Array.from({ length: TRAIL }, rChar);
        }
      });

      frame++;
      raf = requestAnimationFrame(tick);
    };

    init();
    tick();

    const ro = new ResizeObserver(init);
    ro.observe(canvas);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={ref} className={className} />;
}
