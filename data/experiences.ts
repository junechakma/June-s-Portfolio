export type ExperiencePositionIcon = "code" | "design" | "education" | "business" | "idea";

export type ExperiencePosition = {
  id: string;
  title: string;
  employmentPeriod: {
    start: string;
    end?: string;
  };
  employmentType?: string;
  description?: string;
  icon?: ExperiencePositionIcon;
  skills?: string[];
  isExpanded?: boolean;
};

export type Experience = {
  id: string;
  companyName: string;
  companyLogo?: string;
  positions: ExperiencePosition[];
  isCurrentEmployer?: boolean;
  theme?: boolean;
};

export const EXPERIENCES: Experience[] = [
  {
    id: "ucsi",
    companyName: "UCSI University Bangladesh Branch Campus",
    companyLogo: "/images/ucsi-logo.jpg",
    isCurrentEmployer: true,
    positions: [
      {
        id: "ucsi-lab",
        title: "Lab In-Charge & Assistant to the Dean",
        employmentPeriod: { start: "09.2025" },
        employmentType: "Part-time",
        icon: "business",
        description: `- Oversee daily computer laboratory operations including equipment maintenance, supporting faculties, and safety protocol enforcement during lab sessions.
- Provide comprehensive administrative support to the Dean (FCSDI) by preparing reports, coordinating meetings, managing correspondence, and maintaining organized schedules and documentation.`,
        skills: ["Lab Management", "Academic Administration", "Student Support", "IT Infrastructure", "Documentation"],
        isExpanded: true,
      },
    ],
  },
  {
    id: "freelance",
    companyName: "Freelance",
    isCurrentEmployer: true,
    positions: [
      {
        id: "freelance-dev",
        title: "Full-stack & Mobile Developer",
        employmentPeriod: { start: "01.2023" },
        employmentType: "Freelance",
        icon: "code",
        description: `- Delivered projects for **25+ international clients** on Fiverr and Upwork with consistent client satisfaction.
- Built cross-platform mobile apps using **Flutter** and **Firebase**, and diverse websites — custom and WordPress-based.
- Co-founded **Wydiz**, a web studio delivering premium websites in a 7–10 day sprint.
- Creator of **ChangmaBhach** — an ML-powered Flutter app for Chakma language learning with TensorFlow Lite.`,
        skills: ["Flutter", "React", "Next.js", "WordPress", "Firebase", "Blender", "Fiverr", "Upwork"],
        isExpanded: true,
      },
    ],
  },
  {
    id: "daffodil",
    companyName: "Daffodil International University",
    companyLogo: "https://daffodilvarsity.edu.bd/favicon.ico",
    positions: [
      {
        id: "diu-lecturer",
        title: "Lecturer (Contractual)",
        employmentPeriod: { start: "07.2025", end: "08.2025" },
        employmentType: "Contract",
        icon: "education",
        description: `- Taught Object-Oriented Programming (OOP) theory and conducted lab sessions.
- Technology used: Java, Python.`,
        skills: ["Java", "Python", "OOP", "Teaching", "Lab Instruction"],
      },
    ],
  },
  {
    id: "compileq",
    companyName: "CompileQ",
    companyLogo: "/images/compileq-logo.jpg",
    positions: [
      {
        id: "compileq-frontend",
        title: "Jr. Frontend Developer",
        employmentPeriod: { start: "08.2023", end: "06.2024" },
        employmentType: "Full-time",
        icon: "code",
        description: `- Developed and maintained responsive websites using **React.js**, **Next.js**, Framer Motion, and Tailwind CSS, improving user engagement and ensuring cross-device compatibility.
- Collaborated with design and backend teams, integrated third-party APIs with authentication.
- Participated in agile sprints using Slack, Microsoft Teams, and GitHub.
- Remote position at a **UK-based company**.`,
        skills: ["React.js", "Next.js", "Tailwind CSS", "Motion", "GSAP", "Firebase", "Git", "Agile"],
      },
    ],
  },
];
