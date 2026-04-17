import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/components/panel";
import { Separator } from "@/components/separator";

export default function Home() {
  return (
    <div className="mx-auto md:max-w-3xl">

      {/* ── Cover Banner ─────────────────────────────────────── */}
      <div
        className={[
          "screen-line-before screen-line-after before:-top-px after:-bottom-px",
          "aspect-[2/1] sm:aspect-[3/1] border-x border-edge",
          "flex items-center justify-center select-none",
          "[--dot-fg:color-mix(in_oklab,oklch(0.141_0.005_285.823)_5%,transparent)]",
          "dark:[--dot-fg:color-mix(in_oklab,white_5%,transparent)]",
          "bg-[radial-gradient(var(--dot-fg)_1px,transparent_0)] bg-[size:10px_10px]",
        ].join(" ")}
      >
        <span className="font-mono text-2xl font-bold tracking-tight text-foreground/20 select-none">
          june.dev
        </span>
      </div>

      {/* ── Profile Header ───────────────────────────────────── */}
      <div className="screen-line-after flex border-x border-edge">
        {/* Avatar column */}
        <div className="shrink-0 border-r border-edge p-3">
          <div className="size-32 sm:size-40 rounded-full bg-accent ring-1 ring-border ring-offset-2 ring-offset-background" />
        </div>

        {/* Name + title column */}
        <div className="flex flex-1 flex-col">
          {/* Diagonal pattern area */}
          <div
            className={[
              "flex grow items-end pb-1 pl-4",
              "[--diag-fg:color-mix(in_oklab,var(--color-edge)_56%,transparent)]",
              "bg-[repeating-linear-gradient(315deg,var(--diag-fg)_0,var(--diag-fg)_1px,transparent_0,transparent_50%)]",
              "bg-[size:10px_10px]",
            ].join(" ")}
          >
            <span className="font-mono text-xs text-edge/50 select-none hidden sm:block">
              text-3xl font-semibold
            </span>
          </div>

          <div className="border-t border-edge">
            <h1 className="pl-4 text-3xl font-semibold">June Chakma</h1>
            <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
              <p className="font-mono text-sm text-muted-foreground">
                Web Developer · App Developer · Vibe Coder
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* ── Overview ─────────────────────────────────────────── */}
      <Panel id="overview">
        <PanelContent className="space-y-2.5">
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {[
              "📍 Dhaka, Bangladesh",
              "✉️ junechakma50@gmail.com",
              "💼 Lab In-Charge · UCSI University",
              "🌐 junechakma.dev",
              "🎓 MSc Educational Technology",
              "🕐 GMT+6",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 font-mono text-sm text-muted-foreground"
              >
                {item}
              </div>
            ))}
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
            {[
              { label: "GitHub", sub: "github.com/junechakma" },
              { label: "LinkedIn", sub: "linkedin.com/in/june-chakma-dev" },
              { label: "Instagram", sub: "@june_chakma" },
              { label: "Email", sub: "junechakma50@gmail.com" },
            ].map(({ label, sub }) => (
              <div
                key={label}
                className="flex items-center gap-3 px-4 py-3 border-b border-edge last:border-b-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:border-edge"
              >
                <div className="size-8 rounded-md bg-accent flex-shrink-0" />
                <div>
                  <p className="font-mono text-sm font-medium text-foreground">{label}</p>
                  <p className="font-mono text-xs text-muted-foreground">{sub}</p>
                </div>
              </div>
            ))}
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
            Frontend-focused full stack developer with hands-on experience in
            AI-driven development. Expertise in building web and mobile
            applications using JavaScript, React, Next.js, and Flutter.
            Educational Technology graduate blending technical and pedagogical
            insight.
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
            {[
              "Next.js", "React", "TypeScript", "Flutter", "Dart",
              "Tailwind CSS", "Firebase", "Framer Motion", "Three.js", "GSAP",
            ].map((tech) => (
              <div
                key={tech}
                className="size-8 rounded-md bg-background/80 border border-edge"
                title={tech}
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
          {[
            { role: "Lab In-Charge & Assistant to Dean", org: "UCSI University Bangladesh", period: "Sep 2025 – Present" },
            { role: "Lecturer (Contractual)", org: "Daffodil International University", period: "Jul 2025 – Sep 2025" },
            { role: "Freelance Developer", org: "Fiverr & Upwork", period: "Jan 2022 – Present" },
            { role: "Jr. Frontend Developer", org: "CompileQ", period: "Aug 2023 – Jun 2024" },
          ].map(({ role, org, period }) => (
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
              (8)
            </sup>
          </PanelTitle>
        </PanelHeader>
        <PanelContent className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            { name: "Mitschke Immo", desc: "Real estate platform" },
            { name: "Qamla Crew", desc: "Business website" },
            { name: "CompileQ", desc: "Corporate website" },
            { name: "GTA VI Fan Site", desc: "High-end UI site" },
            { name: "Fly the Plane", desc: "3D Web Game" },
            { name: "Limoncello London", desc: "Restaurant website" },
          ].map(({ name, desc }) => (
            <div
              key={name}
              className="rounded-md border border-edge bg-accent/30 p-3"
            >
              <p className="font-mono text-sm font-medium text-foreground">{name}</p>
              <p className="font-mono text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
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
              href="mailto:junechakma50@gmail.com"
              className="font-medium text-foreground underline underline-offset-4"
            >
              junechakma50@gmail.com
            </a>
          </p>
        </PanelContent>
      </Panel>

      <Separator />

    </div>
  );
}
