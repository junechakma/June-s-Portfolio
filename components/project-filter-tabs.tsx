"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

type Props = { total: number; apps: number; websites: number };

export function ProjectFilterTabs({ total, apps, websites }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = searchParams.get("category") ?? "all";

  const tabs = [
    { label: "All", value: "all", count: total },
    { label: "Apps", value: "app", count: apps },
    { label: "Websites", value: "website", count: websites },
  ];

  function setFilter(value: string) {
    const params = new URLSearchParams(searchParams);
    if (value === "all") {
      params.delete("category");
    } else {
      params.set("category", value);
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex gap-1 px-4 py-3 screen-line-after">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => setFilter(tab.value)}
          className={`flex items-center gap-1.5 rounded-md border px-3 py-1 font-mono text-xs transition-colors ${
            active === tab.value
              ? "border-foreground bg-foreground text-background"
              : "border-edge text-muted-foreground hover:text-foreground hover:border-foreground/40"
          }`}
        >
          {tab.label}
          <span className={`rounded px-1 py-0.5 text-[10px] leading-none ${
            active === tab.value
              ? "bg-background/20 text-background"
              : "bg-accent text-muted-foreground"
          }`}>
            {tab.count}
          </span>
        </button>
      ))}
    </div>
  );
}
