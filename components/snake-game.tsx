"use client";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const CELL = 16;
const TICK_START = 200;
const TICK_MIN = 60;
const TICK_STEP = 8;

type Pt = { x: number; y: number };

function randFood(cols: number, rows: number, snake: Pt[]): Pt {
  let pt: Pt;
  do {
    pt = { x: Math.floor(Math.random() * cols), y: Math.floor(Math.random() * rows) };
  } while (snake.some((s) => s.x === pt.x && s.y === pt.y));
  return pt;
}

const KEY_DIR: Record<string, Pt> = {
  ArrowUp: { x: 0, y: -1 }, w: { x: 0, y: -1 }, W: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 }, s: { x: 0, y: 1 }, S: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 }, a: { x: -1, y: 0 }, A: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }, d: { x: 1, y: 0 }, D: { x: 1, y: 0 },
};

function makeAudio(src: string, volume = 1) {
  if (typeof window === "undefined") return null;
  const a = new Audio(src);
  a.volume = volume;
  return a;
}

function playOnce(audio: HTMLAudioElement | null) {
  if (!audio) return;
  audio.currentTime = 0;
  audio.play().catch(() => {});
}

function playClone(audio: HTMLAudioElement | null) {
  if (!audio) return;
  const clone = audio.cloneNode() as HTMLAudioElement;
  clone.volume = audio.volume;
  clone.play().catch(() => {});
}

export function SnakeGame({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [soundOn, setSoundOn] = useState(true);
  const soundRef = useRef(true);

  useEffect(() => {
    soundRef.current = soundOn;
  }, [soundOn]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const sfxMove = makeAudio("/music/move.mp3", 0.4);
    const sfxEat  = makeAudio("/music/food.mp3", 0.6);
    const sfxOver = makeAudio("/music/gameover.mp3", 0.7);

    let cols = 0, rows = 0;
    let snake: Pt[] = [];
    let dir: Pt = { x: 1, y: 0 };
    let nextDir: Pt = { x: 1, y: 0 };
    let food: Pt = { x: 0, y: 0 };
    let score = 0;
    let tickMs = TICK_START;
    let status: "idle" | "playing" | "over" = "idle";
    let tickId: ReturnType<typeof setInterval> | null = null;
    let rafId: number;
    let W = 0, H = 0;

    const dark = () => document.documentElement.classList.contains("dark");

    const resize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W * devicePixelRatio;
      canvas.height = H * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
      cols = Math.floor(W / CELL);
      rows = Math.floor(H / CELL);
    };

    const restartTick = () => {
      if (tickId) clearInterval(tickId);
      tickId = setInterval(step, tickMs);
    };

    const startGame = () => {
      if (tickId) clearInterval(tickId);
      const mx = Math.floor(cols / 2);
      const my = Math.floor(rows / 2);
      snake = [{ x: mx, y: my }, { x: mx - 1, y: my }, { x: mx - 2, y: my }];
      dir = { x: 1, y: 0 };
      nextDir = { x: 1, y: 0 };
      food = randFood(cols, rows, snake);
      score = 0;
      tickMs = TICK_START;
      status = "playing";
      tickId = setInterval(step, tickMs);
    };

    const trySetDir = (d: Pt) => {
      if (d.x === -dir.x && d.y === -dir.y) return; // no reverse
      nextDir = d;
      if (soundRef.current) playClone(sfxMove);
    };

    const step = () => {
      dir = nextDir;
      const head: Pt = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };

      if (head.x < 0 || head.x >= cols || head.y < 0 || head.y >= rows) {
        status = "over";
        if (tickId) clearInterval(tickId);
        if (soundRef.current) playOnce(sfxOver);
        return;
      }
      if (snake.some((s) => s.x === head.x && s.y === head.y)) {
        status = "over";
        if (tickId) clearInterval(tickId);
        if (soundRef.current) playOnce(sfxOver);
        return;
      }

      snake.unshift(head);
      if (head.x === food.x && head.y === food.y) {
        score++;
        food = randFood(cols, rows, snake);
        tickMs = Math.max(TICK_MIN, tickMs - TICK_STEP);
        restartTick();
        if (soundRef.current) playOnce(sfxEat);
      } else {
        snake.pop();
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const d = dark();

      if (status === "idle") {
        ctx.textAlign = "center";
        ctx.font = "bold 13px monospace";
        ctx.fillStyle = d ? "rgba(228,228,231,0.45)" : "rgba(39,39,42,0.35)";
        ctx.fillText("SNAKE", W / 2, H / 2 - 18);
        ctx.font = "11px monospace";
        ctx.fillStyle = d ? "rgba(161,161,170,0.3)" : "rgba(82,82,91,0.25)";
        ctx.fillText("press any key or tap to start", W / 2, H / 2);
        ctx.fillText("↑ ↓ ← →  ·  W A S D  ·  swipe / click to aim", W / 2, H / 2 + 16);
      }

      if (status === "playing" || status === "over") {
        ctx.beginPath();
        ctx.arc(food.x * CELL + CELL / 2, food.y * CELL + CELL / 2, CELL / 2 - 3, 0, Math.PI * 2);
        ctx.fillStyle = d ? "rgba(244,244,245,0.92)" : "rgba(24,24,27,0.88)";
        ctx.fill();

        snake.forEach((seg, i) => {
          const px = seg.x * CELL + 1;
          const py = seg.y * CELL + 1;
          const sz = CELL - 2;
          const alpha = i === 0
            ? (d ? 0.95 : 0.88)
            : Math.max(0.18, (1 - i / snake.length) * (d ? 0.72 : 0.6));
          ctx.fillStyle = d ? `rgba(228,228,231,${alpha})` : `rgba(39,39,42,${alpha})`;
          ctx.beginPath();
          ctx.roundRect(px, py, sz, sz, i === 0 ? 4 : 2);
          ctx.fill();
        });

        ctx.textAlign = "right";
        ctx.font = "bold 11px monospace";
        ctx.fillStyle = d ? "rgba(161,161,170,0.45)" : "rgba(82,82,91,0.35)";
        ctx.fillText(`${score}`, W - 8, 15);
      }

      if (status === "over") {
        ctx.textAlign = "center";
        ctx.font = "bold 13px monospace";
        ctx.fillStyle = d ? "rgba(228,228,231,0.5)" : "rgba(39,39,42,0.45)";
        ctx.fillText("GAME OVER", W / 2, H / 2 - 12);
        ctx.font = "11px monospace";
        ctx.fillStyle = d ? "rgba(161,161,170,0.3)" : "rgba(82,82,91,0.25)";
        ctx.fillText(`score: ${score}  ·  click here or press enter to restart`, W / 2, H / 2 + 6);
      }

      rafId = requestAnimationFrame(draw);
    };

    const onKey = (e: KeyboardEvent) => {
      if (status === "idle") {
        startGame();
        return;
      }
      if (status === "over") {
        if (e.key === "Enter") startGame();
        return;
      }
      const d = KEY_DIR[e.key];
      if (!d) return;
      trySetDir(d);
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
      }
    };

    const handleAim = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      const mx = ((clientX - rect.left) / rect.width) * cols;
      const my = ((clientY - rect.top) / rect.height) * rows;
      const dx = mx - snake[0].x;
      const dy = my - snake[0].y;
      const d: Pt = Math.abs(dx) > Math.abs(dy)
        ? dx > 0 ? { x: 1, y: 0 } : { x: -1, y: 0 }
        : dy > 0 ? { x: 0, y: 1 } : { x: 0, y: -1 };
      trySetDir(d);
    };

    const onClick = (e: MouseEvent) => {
      if (status === "idle" || status === "over") {
        startGame();
        return;
      }
      handleAim(e.clientX, e.clientY);
    };

    // Touch: swipe to change direction, tap to start/aim
    let touchStartX = 0, touchStartY = 0;

    const onTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      e.preventDefault();
    };

    const onTouchEnd = (e: TouchEvent) => {
      const tx = e.changedTouches[0].clientX;
      const ty = e.changedTouches[0].clientY;
      const dx = tx - touchStartX;
      const dy = ty - touchStartY;

      if (status === "idle" || status === "over") {
        startGame();
        return;
      }

      if (Math.abs(dx) < 10 && Math.abs(dy) < 10) {
        // Short tap — aim toward tap position
        handleAim(tx, ty);
      } else {
        // Swipe — use swipe direction
        const d: Pt = Math.abs(dx) > Math.abs(dy)
          ? dx > 0 ? { x: 1, y: 0 } : { x: -1, y: 0 }
          : dy > 0 ? { x: 0, y: 1 } : { x: 0, y: -1 };
        trySetDir(d);
      }
      e.preventDefault();
    };

    resize();
    draw();
    window.addEventListener("keydown", onKey);
    canvas.addEventListener("click", onClick);
    canvas.addEventListener("touchstart", onTouchStart, { passive: false });
    canvas.addEventListener("touchend", onTouchEnd, { passive: false });
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(rafId);
      if (tickId) clearInterval(tickId);
      window.removeEventListener("keydown", onKey);
      canvas.removeEventListener("click", onClick);
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchend", onTouchEnd);
      ro.disconnect();
    };
  }, []);

  return (
    <div className={`relative ${className ?? ""}`} style={{ isolation: "isolate" }}>
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        style={{ cursor: "crosshair", touchAction: "none" }}
      />
      <button
        onClick={() => setSoundOn((v) => !v)}
        className="absolute top-2 left-2 z-10 flex items-center justify-center size-8 rounded-md bg-black/20 dark:bg-white/10 backdrop-blur-sm text-foreground/60 hover:text-foreground/90 transition-colors"
        aria-label={soundOn ? "Mute sound" : "Unmute sound"}
      >
        {soundOn ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
      </button>
    </div>
  );
}
