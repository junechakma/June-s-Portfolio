import type { Experience } from "./experiences";

export const TRAINING: Experience[] = [
  {
    id: "bjet",
    companyName: "B-JET Program",
    companyLogo: "https://ui-avatars.com/api/?name=B-JET&background=E63946&color=fff&size=200",
    positions: [
      {
        id: "bjet-training",
        title: "Bangladesh-Japan ICT Engineers' Training",
        employmentPeriod: { start: "07.2024", end: "12.2024" },
        icon: "code",
        description: `- Completed the 6-month **B-JET** (Bangladesh-Japan ICT Engineers' Training Program).
- Trained to meet Japanese IT industry standards in software engineering and professional practices.
- Selected among competitive applicants from Bangladesh's ICT sector.
- Currently working contractually as a Web Developer for the program.`,
        skills: ["Software Engineering", "Japanese IT Standards", "Professional Development", "ICT", "Web Development"],
        isExpanded: true,
      },
    ],
  },
  {
    id: "grameenphone",
    companyName: "Grameenphone",
    companyLogo: "https://ui-avatars.com/api/?name=GP&background=006B3F&color=fff&size=200",
    positions: [
      {
        id: "gp-uddokta",
        title: "Jelay Jelay Smart Uddokta",
        employmentPeriod: { start: "08.2024", end: "08.2024" },
        icon: "idea",
        description: `- Attended the **Jelay Jelay Smart Uddokta** entrepreneurship training program organized by Grameenphone.
- Held in Savar on 11th August, 2024.`,
        skills: ["Entrepreneurship", "Business Development", "Smart Skills"],
      },
    ],
  },
];
