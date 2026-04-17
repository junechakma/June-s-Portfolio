"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useSound } from "@/hooks/use-sound";

export function ToggleTheme({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const playClick = useSound("/audio/click.wav");

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-md text-foreground",
          className
        )}
        aria-label="Toggle theme"
      >
        <Moon className="size-4" />
      </button>
    );
  }

  return (
    <button
      onClick={() => {
        playClick();
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-md text-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
        className
      )}
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="size-4" />
      ) : (
        <Moon className="size-4" />
      )}
    </button>
  );
}
