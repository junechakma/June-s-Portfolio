const content = `# june-chakma.vercel.app

> A minimal portfolio showcasing the work of June Chakma — fullstack & mobile developer from Dhaka, Bangladesh.

- [About](https://june-chakma.vercel.app/llms-full.txt): Full profile including experience, education, projects, training, and achievements.

## Quick Overview

- Name: June Chakma
- Location: Dhaka, Bangladesh
- Email: junechakma50@gmail.com
- GitHub: https://github.com/junechakma

## Sections

- About: Frontend-focused fullstack developer specializing in React, Next.js, Flutter, and AI-powered tooling. Co-founder of Wydiz. 25+ international freelance clients. Lab In-Charge at UCSI University BD. B-JET program Web Developer.
- Experience: UCSI University Bangladesh, Freelance (Fiverr/Upwork), Daffodil International University, CompileQ.
- Education: M.Sc. & B.Sc. in Educational Technology and Engineering — University of Frontier Technology, Bangladesh.
- Tech Stack: Next.js, React, TypeScript, Flutter, Dart, Tailwind CSS, Firebase, Framer Motion, Three.js, GSAP, Supabase, PostgreSQL, Blender, Claude, Gemini.
- Projects: Receipt Scanner, Qamla Crew, Class Response System, The Social Meet, ChangmaBhach, Buddhimotta, and more.
- Training: B-JET (Bangladesh-Japan ICT Engineers' Training), Grameenphone Entrepreneur Program.
- Achievements: Published research paper in Elsevier SSHO, Co-authored book at Amar Ekushey Book Fair 2024.
- Easter Egg: A fully playable Snake game is embedded in the portfolio cover banner — controllable via arrow keys or WASD, with sound effects and increasing speed.
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
