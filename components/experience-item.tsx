"use client";

import Image from "next/image";
import { useState } from "react";
import { Collapsible } from "radix-ui";
import { ChevronDownIcon, InfinityIcon,
  CodeXmlIcon, DraftingCompassIcon, GraduationCapIcon,
  BriefcaseBusinessIcon, LightbulbIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Experience, ExperiencePositionIcon } from "@/data/experiences";

const iconMap: Record<ExperiencePositionIcon, React.ComponentType<{ className?: string }>> = {
  code: CodeXmlIcon,
  design: DraftingCompassIcon,
  education: GraduationCapIcon,
  business: BriefcaseBusinessIcon,
  idea: LightbulbIcon,
};

function PositionIcon({ icon, className }: { icon?: ExperiencePositionIcon; className?: string }) {
  const Icon = icon ? iconMap[icon] : BriefcaseBusinessIcon;
  return <Icon className={className} />;
}

function renderDescription(text: string) {
  return text
    .split("\n")
    .filter((l) => l.trim().startsWith("-"))
    .map((line, i) => {
      const content = line.replace(/^-\s*/, "");
      const parts = content.split(/(\*\*[^*]+\*\*)/g);
      return (
        <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
          <span className="mt-2 size-1 rounded-full bg-muted-foreground/40 shrink-0" />
          <span>
            {parts.map((p, j) =>
              p.startsWith("**") && p.endsWith("**") ? (
                <strong key={j} className="text-foreground font-medium">{p.slice(2, -2)}</strong>
              ) : p
            )}
          </span>
        </li>
      );
    });
}

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div className="screen-line-after space-y-4 py-4">
      {/* Company header */}
      <div className="flex items-center gap-3">
        <div className="flex size-7 shrink-0 items-center justify-center select-none">
          {experience.companyLogo ? (
            <Image
              src={experience.companyLogo}
              alt={experience.companyName}
              width={28}
              height={28}
              unoptimized
              className={cn("rounded-full", experience.theme && "dark:invert")}
              aria-hidden
            />
          ) : (
            <span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
          )}
        </div>

        <h3 className="text-base font-medium leading-snug">{experience.companyName}</h3>

        {experience.isCurrentEmployer && (
          <span className="relative flex items-center justify-center" title="Current">
            <span className="absolute inline-flex size-3 animate-ping rounded-full bg-emerald-400 opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            <span className="sr-only">Current</span>
          </span>
        )}
      </div>

      {/* Positions */}
      <div className="relative space-y-3 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        {experience.positions.map((position) => {
          const { start, end } = position.employmentPeriod;
          const isOngoing = !end;

          return (
            <PositionCollapsible
              key={position.id}
              defaultOpen={!!position.isExpanded}
              trigger={
                <div className="relative z-10 mb-1 flex items-center gap-3">
                  <div className={cn(
                    "flex size-6 shrink-0 items-center justify-center rounded-lg",
                    "bg-accent text-muted-foreground",
                    "border border-muted-foreground/15 ring-1 ring-edge ring-offset-1 ring-offset-background",
                    "group-hover/collapsible:ring-offset-accent"
                  )}>
                    <PositionIcon icon={position.icon} className="size-3.5" />
                  </div>
                  <h4 className="flex-1 text-sm font-medium">{position.title}</h4>
                  <ChevronDownIcon className="size-4 text-muted-foreground transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                </div>
              }
              meta={
                <div className="relative z-10 flex items-center gap-2 pl-9 text-xs text-muted-foreground">
                  {position.employmentType && (
                    <>
                      <span>{position.employmentType}</span>
                      <span className="h-3 w-px bg-border" />
                    </>
                  )}
                  <span className="flex items-center gap-0.5">
                    <span>{start}</span>
                    <span className="font-mono mx-0.5">—</span>
                    {isOngoing ? (
                      <InfinityIcon className="size-3.5 translate-y-px" aria-hidden />
                    ) : (
                      <span>{end}</span>
                    )}
                  </span>
                </div>
              }
            >
              {position.description && (
                <ul className="space-y-1 pt-2 pl-9">
                  {renderDescription(position.description)}
                </ul>
              )}
              {position.skills && position.skills.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-3 pl-9">
                  {position.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-edge bg-accent/60 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </PositionCollapsible>
          );
        })}
      </div>
    </div>
  );
}

function PositionCollapsible({
  defaultOpen,
  trigger,
  meta,
  children,
}: {
  defaultOpen: boolean;
  trigger: React.ReactNode;
  meta: React.ReactNode;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Collapsible.Root
      open={open}
      onOpenChange={setOpen}
      className="group/collapsible relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background"
    >
      <Collapsible.Trigger className={cn(
        "block w-full cursor-pointer text-left select-none",
        "relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7",
        "before:-z-10 before:rounded-lg before:transition-colors hover:before:bg-accent"
      )}>
        {trigger}
        {meta}
      </Collapsible.Trigger>
      <Collapsible.Content className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
        <div className="pb-1">{children}</div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
