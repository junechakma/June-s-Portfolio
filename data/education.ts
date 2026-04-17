import type { Experience } from "./experiences";

export const EDUCATION: Experience[] = [
  {
    id: "ucsi",
    companyName: "UCSI University Bangladesh",
    companyLogo: "https://www.bangladesh.ucsiuniversity.edu.my/favicon.ico",
    isCurrentEmployer: true,
    positions: [
      {
        id: "ucsi-edtech",
        title: "Bachelor of Educational Technology",
        employmentPeriod: { start: "2022" },
        icon: "education",
        description: `- Studying the intersection of technology and education with a focus on digital learning systems.
- Co-authored a research paper currently under review at **Elsevier SSHO**.
- Co-wrote a book showcased at **Amar Ekushey Book Fair 2024**.`,
        skills: ["Educational Technology", "Research", "Academic Writing", "Digital Learning"],
        isExpanded: true,
      },
    ],
  },
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
- Selected among competitive applicants from Bangladesh's ICT sector.`,
        skills: ["Software Engineering", "Japanese IT Standards", "Professional Development", "ICT"],
      },
    ],
  },
];
