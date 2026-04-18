# Project Filesystem

## Directory Structure

```
junes-portfolio/
├── app/                         # Next.js App Router pages & routes
│   ├── layout.tsx               # Root layout — header, footer, providers
│   ├── page.tsx                 # Home page (all portfolio sections)
│   ├── not-found.tsx            # Custom 404 page
│   ├── globals.css              # Tailwind v4 theme, custom utilities & keyframes
│   ├── icon.png                 # Favicon (auto-detected by Next.js)
│   ├── projects/
│   │   ├── page.tsx             # /projects — all projects grid
│   │   └── [slug]/page.tsx      # /projects/[slug] — project detail page
│   ├── llms.txt/route.ts        # GET /llms.txt — quick LLM overview
│   └── llms-full.txt/route.ts   # GET /llms-full.txt — full profile for LLMs
│
├── components/                  # All UI components
│   ├── site-header.tsx          # Sticky navbar — logo, nav, search, theme
│   ├── site-footer.tsx          # Footer — spinning verb shimmer, Claude logo, llms.txt
│   ├── nav.tsx                  # Nav links with IntersectionObserver active state
│   ├── search-button.tsx        # ⌘K trigger that mounts CommandMenu
│   ├── command-menu.tsx         # Full command palette (cmdk) — pages, sections, projects, social, theme
│   ├── panel.tsx                # Section layout primitives — Panel, PanelHeader, PanelTitle, PanelContent
│   ├── separator.tsx            # Full-width section divider
│   ├── panel.tsx                # Layout section wrapper
│   ├── icons.tsx                # Custom SVG icons (GitHub, LinkedIn, X, Upwork, Fiverr, Mail)
│   ├── toggle-theme.tsx         # Light/dark mode toggle
│   ├── providers.tsx            # next-themes ThemeProvider
│   ├── profile-avatar.tsx       # Avatar with dark/light image swap
│   ├── flip-sentences.tsx       # Animated rotating job titles
│   ├── snake-game.tsx           # Playable snake game in the cover banner
│   ├── github-contributions.tsx # GitHub heatmap (scroll to latest month)
│   ├── experience-item.tsx      # Collapsible experience/education/training card
│   ├── achievement-item.tsx     # Collapsible achievement card with trophy icon
│   ├── project-card.tsx         # Project card — carousel, expand/collapse, tags
│   ├── project-image-carousel.tsx # Reusable image carousel (card + detail variants)
│   ├── command-menu.tsx         # Command palette with section navigation
│   ├── ascii-rain.tsx           # Unused ASCII rain animation (commented out in page.tsx)
│   ├── scramble-text.tsx        # Unused scramble text animation (commented out in page.tsx)
│   ├── contribution-graph/
│   │   └── index.tsx            # Low-level ContributionGraph primitives (kibo-ui port)
│   ├── overview/
│   │   ├── intro-item.tsx       # Icon + text row for the overview section
│   │   └── local-time-item.tsx  # Live local time display (Dhaka)
│   └── ui/
│       └── tooltip.tsx          # SimpleTooltip wrapper (Radix)
│
├── data/                        # All static content — edit here to update the portfolio
│   ├── user.ts                  # Name, bio, jobs, about text, flip sentences, contact
│   ├── experiences.ts           # Work experience entries (UCSI, Freelance, Daffodil, CompileQ)
│   ├── education.ts             # Education entries (University of Frontier Technology, schools)
│   ├── training.ts              # Training entries (B-JET, Grameenphone)
│   ├── achievements.ts          # Achievements (published paper, book)
│   ├── projects.ts              # Projects with slugs, images, tags, content
│   ├── tech-stack.ts            # Tech stack icons (devicons CDN + simpleicons CDN)
│   ├── social-links.ts          # Social profile links
│   └── github-contributions.ts  # Fetches GitHub contribution data (revalidates daily)
│
├── hooks/
│   └── use-sound.ts             # Web Audio API hook (unused — snake game uses HTMLAudio directly)
│
├── lib/
│   └── utils.ts                 # cn() — clsx + tailwind-merge
│
├── public/
│   ├── images/
│   │   ├── logo-balck.png       # JC logo (used in navbar + favicon source)
│   │   ├── logo-white.png       # Unused (dark mode handled via dark:invert)
│   │   ├── me-black.png         # Avatar for light mode
│   │   ├── me-white.png         # Avatar for dark mode
│   │   ├── ucsi-logo.jpg        # UCSI University logo (experience section)
│   │   ├── compileq-logo.jpg    # CompileQ logo (experience section)
│   │   └── claude-logo.svg      # Anthropic Claude mark (footer animation)
│   ├── project/
│   │   ├── *.png / *.jpg        # Project cover images (wired to data/projects.ts)
│   │   └── app-images/          # App screenshot galleries (multi-image carousels)
│   ├── music/
│   │   ├── move.mp3             # Snake game move SFX
│   │   ├── food.mp3             # Snake game eat SFX
│   │   └── gameover.mp3         # Snake game over SFX
│   └── audio/
│       └── click.wav            # UI click sound (loaded by use-sound hook)
│
├── inspiration/                 # Reference codebase — DO NOT import from here
├── src/                         # ⚠️ Leftover inspiration copy — safe to delete
├── cv.text                      # Raw CV text — reference only, not imported
├── FILESYSTEM.md                # This file
└── PORTFOLIO_DETAILS.md         # Additional portfolio notes
```

## Data Layer

All content lives in `data/`. To update the portfolio, edit the relevant file:

| What to update | File |
|---|---|
| Name, bio, jobs, about | `data/user.ts` |
| Work experience | `data/experiences.ts` |
| Education | `data/education.ts` |
| Training | `data/training.ts` |
| Achievements / papers | `data/achievements.ts` |
| Projects + images | `data/projects.ts` |
| Tech stack icons | `data/tech-stack.ts` |
| Social links | `data/social-links.ts` |

## Adding Project Images

Place images in `public/project/` and reference them in `data/projects.ts`:

```ts
{
  slug: "my-project",
  images: [
    "/project/my-project-cover.png",      // shown in card + detail hero
    "/project/app-images/my-project2.png", // carousel slide 2
    "/project/app-images/my-project3.png", // carousel slide 3
  ],
}
```

## API-Driven Data (Future Path)

The current setup uses static TypeScript files rebuilt on each deploy. To make data updatable without code changes:

**Option A — JSON files + revalidation (simplest)**
Move data to `public/data/*.json`. Server components fetch them with `next: { revalidate: 3600 }`. Edit JSON to update content without touching code.

**Option B — Supabase (recommended for dynamic updates)**
Create tables: `projects`, `experiences`, `achievements`. Server components query via `@supabase/supabase-js`. Enables live editing via Supabase Studio dashboard or a future admin panel.

**Option C — Notion as CMS**
Use Notion API to read structured database pages. Each project/experience is a Notion page. Revalidate on demand via webhook.

The component interface stays identical — only the data-fetching function in each `data/*.ts` file changes.

## Directories to Clean Up

| Directory | Status | Action |
|---|---|---|
| `src/` | Leftover inspiration copy, ~80 files, not imported anywhere | **Safe to delete** |
| `inspiration/` | Reference only, never imported | Keep or delete after project is complete |
| `hooks/use-sound.ts` | Not used (snake game uses HTMLAudio directly) | Keep or delete |
| `components/ascii-rain.tsx` | Commented out in page.tsx | Keep or delete |
| `components/scramble-text.tsx` | Commented out in page.tsx | Keep or delete |
| `public/images/logo-white.png` | Unused — dark mode uses `dark:invert` on logo-balck.png | Safe to delete |
