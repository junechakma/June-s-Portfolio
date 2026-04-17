"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ProfileAvatar() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const src = !mounted || resolvedTheme === "dark"
    ? "/images/me-black.png"
    : "/images/me-white.png";

  return (
    <Image
      src={src}
      alt="June Chakma"
      width={160}
      height={160}
      priority
      className="size-32 sm:size-40 rounded-full object-cover object-top ring-1 ring-border ring-offset-2 ring-offset-background select-none"
    />
  );
}
