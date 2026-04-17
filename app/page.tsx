import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/components/panel";
import { Separator } from "@/components/separator";
import { ProfileAvatar } from "@/components/profile-avatar";
import { FlipSentences } from "@/components/flip-sentences";
import { IntroItem, IntroItemIcon, IntroItemContent, IntroItemLink } from "@/components/overview/intro-item";
import { LocalTimeItem } from "@/components/overview/local-time-item";
import {
  BriefcaseBusinessIcon, LightbulbIcon, MapPinIcon,
  MailIcon, PhoneIcon, MarsIcon, ArrowUpRightIcon,
} from "lucide-react";
import { Icons } from "@/components/icons";
// import { AsciiRain } from "@/components/ascii-rain";
// import { ScrambleText } from "@/components/scramble-text";
import { SnakeGame } from "@/components/snake-game";
import { USER } from "@/data/user";
import { SOCIAL_LINKS } from "@/data/social-links";
import { EXPERIENCES } from "@/data/experiences";
import { PROJECTS } from "@/data/projects";
import { TECH_STACK } from "@/data/tech-stack";

const JOB_ICONS: Record<string, React.ReactNode> = {
  "Co-founder": <LightbulbIcon />,
  "Lab In-Charge": <BriefcaseBusinessIcon />,
};

export default function Home() {
  return (
    <div className="mx-auto md:max-w-3xl">

      {/* ── Cover Banner ─────────────────────────────────────── */}
      <div
        className={[
          "relative overflow-hidden",
          "screen-line-before screen-line-after before:-top-px after:-bottom-px",
          "aspect-[2/1] sm:aspect-[3/1] border-x border-edge",
          "flex items-center justify-center select-none",
          "[--dot-fg:color-mix(in_oklab,oklch(0.141_0.005_285.823)_5%,transparent)]",
          "dark:[--dot-fg:color-mix(in_oklab,white_5%,transparent)]",
          "bg-[radial-gradient(var(--dot-fg)_1px,transparent_0)] bg-[size:10px_10px]",
        ].join(" ")}
      >
        {/* <AsciiRain className="absolute inset-0 w-full h-full pointer-events-none" /> */}
        {/* <div className="relative z-10 flex flex-col items-center gap-2">
          <span className="font-mono text-[11px] text-muted-foreground/40 tracking-widest uppercase">
            ~/june.dev $
          </span>
          <ScrambleText
            text="june.dev"
            className="font-mono text-3xl font-bold tracking-tight text-foreground/30"
          />
        </div> */}
        <SnakeGame className="absolute inset-0 w-full h-full" />
      </div>

      {/* ── Profile Header ───────────────────────────────────── */}
      <div className="screen-line-after flex border-x border-edge">
        {/* Avatar column */}
        <div className="shrink-0 border-r border-edge p-3">
          <ProfileAvatar />
        </div>

        {/* Name + title column */}
        <div className="flex flex-1 flex-col">
          {/* Diagonal pattern area */}
          <div
            className={[
              "flex grow items-end pb-1 pl-4",
              "[--pattern-fg:color-mix(in_oklab,var(--color-edge)_45%,transparent)]",
              "bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]",
              "bg-[size:10px_10px]",
            ].join(" ")}
          >
            <span className="line-clamp-1 font-mono text-xs text-zinc-300 dark:text-zinc-800 select-none hidden sm:block">
              {"text-3xl "}
              <span className="inline dark:hidden">text-zinc-950</span>
              <span className="hidden dark:inline">text-zinc-50</span>
              {" font-semibold"}
            </span>
          </div>

          <div className="border-t border-edge">
            <h1 className="flex items-center gap-2 pl-4 text-3xl font-semibold">
              {USER.name}
              <span className="text-2xl" title="Bangladesh">🇧🇩</span>
            </h1>
            <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
              <FlipSentences sentences={USER.flipSentences} />
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* ── Overview ─────────────────────────────────────────── */}
      <Panel id="overview">
        <PanelContent className="space-y-2.5">

          {USER.jobs.map((job) => (
            <IntroItem key={job.title}>
              <IntroItemIcon>{JOB_ICONS[job.title] ?? <BriefcaseBusinessIcon />}</IntroItemIcon>
              <IntroItemContent>
                {job.title} @{" "}
                <IntroItemLink href={job.website} className="ml-0.5 font-medium">
                  {job.company}
                </IntroItemLink>
              </IntroItemContent>
            </IntroItem>
          ))}

          <div className="grid gap-x-12 gap-y-2.5 sm:grid-cols-2">

            {/* Location — left */}
            <IntroItem>
              <IntroItemIcon><MapPinIcon /></IntroItemIcon>
              <IntroItemContent>
                <IntroItemLink href={USER.locationMapUrl}>
                  {USER.location}
                </IntroItemLink>
              </IntroItemContent>
            </IntroItem>

            {/* Pronouns — right */}
            <IntroItem>
              <IntroItemIcon><MarsIcon /></IntroItemIcon>
              <IntroItemContent aria-label={`Pronouns: ${USER.pronouns}`}>{USER.pronouns}</IntroItemContent>
            </IntroItem>

            {/* Email — left */}
            <IntroItem>
              <IntroItemIcon><MailIcon /></IntroItemIcon>
              <IntroItemContent>
                <IntroItemLink href={`mailto:${USER.email}`}>
                  {USER.email}
                </IntroItemLink>
              </IntroItemContent>
            </IntroItem>

            {/* Local time — right */}
            <LocalTimeItem />

            {/* Phone — left */}
            <IntroItem>
              <IntroItemIcon><PhoneIcon /></IntroItemIcon>
              <IntroItemContent>
                <IntroItemLink href={`tel:${USER.phone}`}>
                  {USER.phoneDisplay}
                </IntroItemLink>
              </IntroItemContent>
            </IntroItem>

          </div>
        </PanelContent>
      </Panel>

      <Separator />

      {/* ── Social Links ─────────────────────────────────────── */}
      <Panel>
        <h2 className="sr-only">Social Links</h2>
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 hidden sm:grid sm:grid-cols-2">
            <div className="border-r border-edge" />
            <div />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {SOCIAL_LINKS.map(({ icon, label, sub, href, iconSize }) => {
              const IconComponent = Icons[icon as keyof typeof Icons];
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex cursor-pointer items-center gap-4 p-4 pr-2 transition-colors select-none max-sm:screen-line-before max-sm:screen-line-after odd:sm:screen-line-before odd:sm:screen-line-after"
                >
                  <div className="relative flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent">
                    <IconComponent className={iconSize ?? "size-6"} />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium underline-offset-4 group-hover/link:underline">{label}</p>
                    <p className="text-sm text-muted-foreground">{sub}</p>
                  </div>
                  <ArrowUpRightIcon className="size-4 text-muted-foreground" />
                </a>
              );
            })}
          </div>
        </div>
      </Panel>

      <Separator />

      {/* ── About ────────────────────────────────────────────── */}
      <Panel id="about">
        <PanelHeader>
          <PanelTitle>About</PanelTitle>
        </PanelHeader>
        <PanelContent>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-prose">
            {USER.about}
          </p>
        </PanelContent>
      </Panel>

      <Separator />

      {/* ── Tech Stack ───────────────────────────────────────── */}
      <Panel id="stack">
        <PanelHeader>
          <PanelTitle>Stack</PanelTitle>
        </PanelHeader>
        <PanelContent
          className={[
            "[--dot-fg:color-mix(in_oklab,oklch(0.141_0.005_285.823)_5%,transparent)]",
            "dark:[--dot-fg:color-mix(in_oklab,white_5%,transparent)]",
            "bg-[radial-gradient(var(--dot-fg)_1px,transparent_0)] bg-[size:10px_10px]",
          ].join(" ")}
        >
          <div className="flex flex-wrap gap-3">
            {TECH_STACK.map(({ name }) => (
              <div
                key={name}
                className="size-8 rounded-md bg-background/80 border border-edge"
                title={name}
              />
            ))}
          </div>
        </PanelContent>
      </Panel>

      <Separator />

      {/* ── Experience ───────────────────────────────────────── */}
      <Panel id="experience">
        <PanelHeader>
          <PanelTitle>Experience</PanelTitle>
        </PanelHeader>
        <PanelContent className="space-y-6">
          {EXPERIENCES.map(({ role, org, period }) => (
            <div key={role} className="flex gap-4">
              <div className="mt-1 size-2 rounded-full bg-muted-foreground/40 flex-shrink-0" />
              <div>
                <p className="font-mono text-sm font-medium text-foreground">{role}</p>
                <p className="font-mono text-xs text-muted-foreground">{org}</p>
                <p className="font-mono text-xs text-muted-foreground">{period}</p>
              </div>
            </div>
          ))}
        </PanelContent>
      </Panel>

      <Separator />

      {/* ── Projects ─────────────────────────────────────────── */}
      <Panel id="projects">
        <PanelHeader>
          <PanelTitle>
            Projects
            <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
              ({PROJECTS.length})
            </sup>
          </PanelTitle>
        </PanelHeader>
        <PanelContent className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {PROJECTS.map(({ name, desc, href }) => {
            const Wrapper = href ? "a" : "div";
            const props = href
              ? { href, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <Wrapper
                key={name}
                {...props}
                className="rounded-md border border-edge bg-accent/30 p-3 block"
              >
                <p className="font-mono text-sm font-medium text-foreground">{name}</p>
                <p className="font-mono text-xs text-muted-foreground">{desc}</p>
              </Wrapper>
            );
          })}
        </PanelContent>
      </Panel>

      <Separator />

      {/* ── Contact ──────────────────────────────────────────── */}
      <Panel id="contact">
        <PanelHeader>
          <PanelTitle>Contact</PanelTitle>
        </PanelHeader>
        <PanelContent>
          <p className="font-mono text-sm text-muted-foreground">
            Open to freelance work, collaborations, and full-time opportunities.
            Reach out at{" "}
            <a
              href={`mailto:${USER.email}`}
              className="font-medium text-foreground underline underline-offset-4"
            >
              {USER.email}
            </a>
          </p>
        </PanelContent>
      </Panel>

      <Separator />

    </div>
  );
}
