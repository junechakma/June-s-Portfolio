"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { CommandMenu } from "@/components/command-menu";

export function SearchButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    document.addEventListener(
      "keydown",
      (e) => {
        if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
          if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
          e.preventDefault();
          setOpen((o) => !o);
        }
      },
      { signal: controller.signal }
    );
    return () => controller.abort();
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={cn(
          "flex h-8 items-center gap-1.5 rounded-full border border-border bg-accent px-3 text-muted-foreground select-none transition-colors hover:text-foreground",
          className
        )}
        aria-label="Search"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 16"
          className="size-3.5"
          aria-hidden
        >
          <path
            d="M10.278 11.514a5.824 5.824 0 1 1 1.235-1.235l3.209 3.208A.875.875 0 0 1 14.111 15a.875.875 0 0 1-.624-.278l-3.209-3.208Zm.623-4.69a4.077 4.077 0 1 1-8.154 0 4.077 4.077 0 0 1 8.154 0Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
        <kbd className="hidden items-center gap-0.5 font-sans text-xs sm:flex">
          <span className="text-sm">⌘</span>K
        </kbd>
      </button>

      <CommandMenu open={open} onOpenChange={setOpen} />
    </>
  );
}
