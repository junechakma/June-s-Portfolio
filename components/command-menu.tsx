"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Command } from "cmdk";
import {
  CornerDownLeftIcon,
  SunIcon,
  MoonStarIcon,
  MonitorIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  TrophyIcon,
  UserIcon,
  MailIcon,
  FolderOpenIcon,
  LayersIcon,
  CodeIcon,
  ArrowUpRightIcon,
} from "lucide-react";
import { SOCIAL_LINKS } from "@/data/social-links";
import { PROJECTS } from "@/data/projects";
import { Icons } from "@/components/icons";

type Item = {
  label: string;
  icon: React.ReactNode;
  onSelect: () => void;
  keywords?: string[];
  kind?: "page" | "link" | "command";
};

type Group = {
  heading: string;
  items: Item[];
};

function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="size-4 shrink-0 text-muted-foreground" aria-hidden>
      <path d="M10.278 11.514a5.824 5.824 0 1 1 1.235-1.235l3.209 3.208A.875.875 0 0 1 14.111 15a.875.875 0 0 1-.624-.278l-3.209-3.208Zm.623-4.69a4.077 4.077 0 1 1-8.154 0 4.077 4.077 0 0 1 8.154 0Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}

export function CommandMenu({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const { setTheme } = useTheme();

  const close = useCallback(() => { onOpenChange(false); setSearch(""); }, [onOpenChange]);

  const go = useCallback((href: string) => { close(); router.push(href); }, [close, router]);
  const open_ = useCallback((href: string) => { close(); window.open(href, "_blank", "noopener"); }, [close]);

  const scrollTo = useCallback((id: string) => {
    close();
    if (window.location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  }, [close, router]);

  const GROUPS: Group[] = [
    {
      heading: "Pages",
      items: [
        { label: "Portfolio", icon: <UserIcon className="size-4" />, onSelect: () => go("/"), kind: "page" },
        { label: "Projects", icon: <FolderOpenIcon className="size-4" />, onSelect: () => go("/projects"), kind: "page" },
      ],
    },
    {
      heading: "Sections",
      items: [
        { label: "About", icon: <UserIcon className="size-4" />, onSelect: () => scrollTo("about"), keywords: ["bio", "intro"], kind: "page" },
        { label: "Stack", icon: <LayersIcon className="size-4" />, onSelect: () => scrollTo("stack"), keywords: ["tech", "tools"], kind: "page" },
        { label: "Experience", icon: <BriefcaseIcon className="size-4" />, onSelect: () => scrollTo("experience"), keywords: ["work", "job"], kind: "page" },
        { label: "Education", icon: <GraduationCapIcon className="size-4" />, onSelect: () => scrollTo("education"), keywords: ["university", "degree"], kind: "page" },
        { label: "Achievements", icon: <TrophyIcon className="size-4" />, onSelect: () => scrollTo("achievements"), keywords: ["awards", "paper"], kind: "page" },
        { label: "Contact", icon: <MailIcon className="size-4" />, onSelect: () => scrollTo("contact"), keywords: ["email", "hire"], kind: "page" },
      ],
    },
    {
      heading: "Projects",
      items: PROJECTS.map((p) => ({
        label: p.name,
        icon: <CodeIcon className="size-4" />,
        onSelect: () => go(`/projects/${p.slug}`),
        keywords: p.tags,
        kind: "page" as const,
      })),
    },
    {
      heading: "Social",
      items: SOCIAL_LINKS.map((s) => {
        const IconComp = Icons[s.icon as keyof typeof Icons];
        return {
          label: s.label,
          icon: IconComp ? <IconComp className="size-4" /> : <ArrowUpRightIcon className="size-4" />,
          onSelect: () => open_(s.href),
          keywords: [s.sub],
          kind: "link" as const,
        };
      }),
    },
    {
      heading: "Theme",
      items: [
        { label: "Light", icon: <SunIcon className="size-4" />, onSelect: () => { close(); setTheme("light"); }, kind: "command" },
        { label: "Dark", icon: <MoonStarIcon className="size-4" />, onSelect: () => { close(); setTheme("dark"); }, kind: "command" },
        { label: "System", icon: <MonitorIcon className="size-4" />, onSelect: () => { close(); setTheme("system"); }, kind: "command" },
      ],
    },
  ];

  if (!open) return null;


  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      onClick={close}
    >
      <div
        className="w-full max-w-lg rounded-xl border border-edge bg-background shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <Command
          className="flex flex-col"
          onKeyDown={(e) => e.key === "Escape" && close()}
          filter={(value, search, keywords) => {
            const haystack = [value, ...(keywords ?? [])].join(" ").toLowerCase();
            return haystack.includes(search.toLowerCase()) ? 1 : 0;
          }}
        >
          {/* Input */}
          <div className="flex items-center gap-3 border-b border-edge px-4 py-3">
            <SearchIcon />
            <Command.Input
              autoFocus
              value={search}
              onValueChange={setSearch}
              placeholder="Search or jump to..."
              className="flex-1 bg-transparent font-mono text-sm text-foreground placeholder:text-muted-foreground outline-none"
            />
            <kbd
              onClick={close}
              className="cursor-pointer font-sans text-xs text-muted-foreground bg-accent border border-edge rounded px-1.5 py-0.5 select-none"
            >
              Esc
            </kbd>
          </div>

          {/* List */}
          <Command.List className="max-h-96 overflow-y-auto overscroll-contain p-2">
            <Command.Empty className="py-10 text-center font-mono text-sm text-muted-foreground">
              No results found.
            </Command.Empty>

            {GROUPS.map((group) => (
              <Command.Group
                key={group.heading}
                heading={group.heading}
                className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:select-none"
              >
                {group.items.map((item) => (
                  <Command.Item
                    key={item.label}
                    value={item.label}
                    keywords={item.keywords}
                    onSelect={item.onSelect}
                    className="flex items-center gap-3 rounded-md px-3 py-2 font-mono text-sm text-foreground cursor-pointer select-none aria-selected:bg-accent data-[selected=true]:bg-accent outline-none"
                  >
                    <span className="text-muted-foreground">{item.icon}</span>
                    {item.label}
                    {item.kind === "link" && (
                      <ArrowUpRightIcon className="ml-auto size-3 text-muted-foreground" />
                    )}
                  </Command.Item>
                ))}
              </Command.Group>
            ))}
          </Command.List>

          {/* Footer */}
          <div className="flex items-center justify-end gap-2 border-t border-edge bg-accent/40 px-4 py-2 text-xs text-muted-foreground">
            <span>Open</span>
            <kbd className="flex items-center gap-0.5 rounded bg-background border border-edge px-1.5 py-0.5">
              <CornerDownLeftIcon className="size-3" />
            </kbd>
            <span className="ml-2 text-muted-foreground/60">·</span>
            <span className="ml-2">Navigate</span>
            <kbd className="rounded bg-background border border-edge px-1.5 py-0.5">↑↓</kbd>
          </div>
        </Command>
      </div>
    </div>
  );
}
