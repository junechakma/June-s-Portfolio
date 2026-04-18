import { EXPERIENCES } from "@/data/experiences";
import { EDUCATION } from "@/data/education";
import { TRAINING } from "@/data/training";
import { ACHIEVEMENTS } from "@/data/achievements";
import { PROJECTS } from "@/data/projects";
import { TECH_STACK } from "@/data/tech-stack";

function getContent() {
  const aboutText = `## About

June Chakma is a frontend-focused fullstack developer with expertise in React.js, Next.js, Flutter, and JavaScript — building web and mobile applications with a focus on clean architecture and attention to detail.

Co-founder of Wydiz — a results-driven web studio delivering premium websites in a 7–10 day sprint.

Delivered projects for 25+ international clients on Fiverr and Upwork. Currently serving as Lab In-Charge & Assistant to the Dean at UCSI University Bangladesh, and working contractually as a Web Developer for the B-JET program.

### Personal Information

- Name: June Chakma
- Birth Date: January 1st, 2000
- Location: West Kazipara, Mirpur, Dhaka, Bangladesh
- Email: junechakma50@gmail.com
- Phone: +8801533552438
- Portfolio: https://june-chakma.vercel.app
- GitHub: https://github.com/junechakma
`;

  const techStackText = `## Tech Stack

${TECH_STACK.map((t) => `- [${t.name}](${t.href})`).join("\n")}
`;

  const experienceText = `## Work Experience

${EXPERIENCES.map((company) =>
    company.positions.map((pos) => {
      const period = `${pos.employmentPeriod.start} – ${pos.employmentPeriod.end ?? "Present"}`;
      const skills = pos.skills?.join(", ") ?? "";
      return `### ${pos.title} | ${company.companyName}\n\nDuration: ${period}${pos.employmentType ? ` · ${pos.employmentType}` : ""}\n${skills ? `Skills: ${skills}\n` : ""}\n${pos.description?.trim() ?? ""}`;
    }).join("\n\n")
  ).join("\n\n")}
`;

  const educationText = `## Education

${EDUCATION.map((inst) =>
    inst.positions.map((pos) => {
      const period = `${pos.employmentPeriod.start} – ${pos.employmentPeriod.end ?? "Present"}`;
      return `### ${pos.title} | ${inst.companyName}\n\nDuration: ${period}\n\n${pos.description?.trim() ?? ""}`;
    }).join("\n\n")
  ).join("\n\n")}
`;

  const trainingText = `## Training

${TRAINING.map((org) =>
    org.positions.map((pos) => {
      const period = `${pos.employmentPeriod.start} – ${pos.employmentPeriod.end ?? "Present"}`;
      return `### ${pos.title} | ${org.companyName}\n\nDuration: ${period}\n\n${pos.description?.trim() ?? ""}`;
    }).join("\n\n")
  ).join("\n\n")}
`;

  const projectsText = `## Projects

${PROJECTS.map((p) => `### ${p.name}\n\n${p.desc}${p.href ? `\n\nURL: ${p.href}` : ""}`).join("\n\n")}
`;

  const achievementsText = `## Achievements

${ACHIEVEMENTS.map((a) => `### ${a.title}\n\n${a.subtitle} · ${a.date}\n\n${a.description.replace(/\*\*/g, "")}${a.link ? `\n\nLink: ${a.link}` : ""}`).join("\n\n")}
`;

  return `<SYSTEM>This document contains comprehensive information about June Chakma's professional profile and portfolio. It includes personal details, work experience, education, projects, training, and achievements. This data is formatted for consumption by Large Language Models (LLMs) to provide accurate and up-to-date information about June Chakma's background, skills, and expertise.</SYSTEM>

# june-chakma.vercel.app

> A minimal portfolio showcasing the work of June Chakma — fullstack & mobile developer from Dhaka, Bangladesh.

${aboutText}
${techStackText}
${experienceText}
${educationText}
${trainingText}
${projectsText}
${achievementsText}`;
}

export const dynamic = "force-static";

export async function GET() {
  return new Response(getContent(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
