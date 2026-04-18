"use client";

import { useState } from "react";
import { Collapsible } from "radix-ui";
import { TrophyIcon, ChevronDownIcon, ExternalLinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Achievement } from "@/data/achievements";

function renderText(text: string) {
  return text.split("\n\n").map((para, i) => {
    const parts = para.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} className="text-sm text-muted-foreground leading-relaxed">
        {parts.map((p, j) =>
          p.startsWith("**") && p.endsWith("**") ? (
            <strong key={j} className="text-foreground font-medium">{p.slice(2, -2)}</strong>
          ) : p
        )}
      </p>
    );
  });
}

export function AchievementItem({ achievement }: { achievement: Achievement }) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible.Root
      open={open}
      onOpenChange={setOpen}
      className="screen-line-after group/collapsible"
    >
      <div className="flex items-stretch">
        {/* Icon column */}
        <div className="flex w-14 shrink-0 items-start justify-center pt-4">
          <div
            className={cn(
              "flex size-6 items-center justify-center rounded-lg",
              "bg-accent text-muted-foreground",
              "border border-muted-foreground/15 ring-1 ring-edge ring-offset-1 ring-offset-background",
              "group-hover/collapsible:ring-offset-accent transition-colors"
            )}
          >
            <TrophyIcon className="size-3.5" />
          </div>
        </div>

        {/* Content column */}
        <div className="flex-1 border-l border-dashed border-edge">
          <Collapsible.Trigger
            className={cn(
              "flex w-full cursor-pointer items-center gap-4 p-4 pr-3 text-left select-none",
              "relative before:absolute before:-top-px before:-right-1 before:-bottom-px before:left-0",
              "before:-z-10 before:rounded-r-lg before:transition-colors hover:before:bg-accent"
            )}
          >
            <div className="relative z-10 flex-1">
              <h3 className="mb-1 text-sm font-medium leading-snug">{achievement.title}</h3>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-muted-foreground">
                <span>{achievement.subtitle}</span>
                <span className="h-3 w-px bg-border" />
                <span>{achievement.date}</span>
              </div>
            </div>
            <ChevronDownIcon
              className="relative z-10 size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180"
            />
          </Collapsible.Trigger>

          <Collapsible.Content className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
            <div className="space-y-3 border-t border-edge px-4 py-3">
              {renderText(achievement.description)}
              {achievement.link && (
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground underline underline-offset-4"
                >
                  {achievement.linkLabel ?? achievement.link}
                  <ExternalLinkIcon className="size-3" />
                </a>
              )}
            </div>
          </Collapsible.Content>
        </div>
      </div>
    </Collapsible.Root>
  );
}
