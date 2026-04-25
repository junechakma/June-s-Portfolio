# june-chakma.vercel.app

A minimal, fast portfolio built with Next.js — showcasing the work of June Chakma, a fullstack & mobile developer from Dhaka, Bangladesh.

## Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Deployment:** Vercel

## Features

- Playable Snake game embedded in the cover banner (arrow keys or WASD)
- GitHub contribution graph
- Project showcase with image carousels and filtering
- Command menu search (`⌘K`)
- Dark / light theme toggle
- LLM-friendly routes: `/llms.txt` and `/llms-full.txt`
- Fully responsive and mobile-first

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## Project Structure

```
app/          # Next.js App Router pages and API routes
components/   # UI components (snake game, project cards, panels, etc.)
data/         # Content — projects, experiences, education, achievements
public/       # Static assets and project images
```

## LLM Text

The portfolio exposes machine-readable content for AI assistants:

- `/llms.txt` — quick overview
- `/llms-full.txt` — full profile including experience, education, projects, training, and achievements

## License

MIT © [June Chakma](https://june-chakma.vercel.app)

Inspired by [abdulrehmanwaseem/My-Portfolio](https://github.com/abdulrehmanwaseem/My-Portfolio).
