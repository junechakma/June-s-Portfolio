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
    companyName: "UCSI University Bangladesh",
    companyLogo: "https://www.bangladesh.ucsiuniversity.edu.my/favicon.ico",
    isCurrentEmployer: true,
    positions: [
      {
        id: "ucsi-lab",
        title: "Lab In-Charge & Assistant to Dean",
        employmentPeriod: { start: "09.2025" },
        employmentType: "Full-time",
        icon: "business",
        description: `- Managing the university computer lab, overseeing hardware/software maintenance and student support.
- Assisting the Dean with administrative and academic coordination tasks.
- Supporting curriculum delivery and facilitating hands-on lab sessions for students.`,
        skills: ["Lab Management", "Academic Administration", "Student Support", "IT Infrastructure"],
        isExpanded: true,
      },
    ],
  },
  {
    id: "bjet",
    companyName: "B-JET Program",
    companyLogo: "https://ui-avatars.com/api/?name=B-JET&background=E63946&color=fff&size=200",
    isCurrentEmployer: true,
    positions: [
      {
        id: "bjet-web-dev",
        title: "Web Developer (Contractual)",
        employmentPeriod: { start: "01.2025" },
        employmentType: "Contract",
        icon: "code",
        description: `- Working contractually as a Web Developer for the Bangladesh-Japan ICT Engineers' Training Program.
- Building and maintaining web platforms that support the program's operations and participant management.
- Grooming Bangladeshi ICT engineers for the Japanese IT sector through technical tooling.`,
        skills: ["Next.js", "React", "TypeScript", "Web Development", "Contract Work"],
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
        employmentPeriod: { start: "07.2025", end: "09.2025" },
        employmentType: "Contract",
        icon: "education",
        description: `- Delivered lectures on web development and programming fundamentals.
- Mentored students on practical frontend development skills.`,
        skills: ["Teaching", "Web Development", "React", "JavaScript", "Mentoring"],
      },
    ],
  },
  {
    id: "compileq",
    companyName: "CompileQ",
    companyLogo: "https://ui-avatars.com/api/?name=CompileQ&background=6366F1&color=fff&size=200",
    positions: [
      {
        id: "compileq-frontend",
        title: "Jr. Frontend Developer",
        employmentPeriod: { start: "08.2023", end: "06.2024" },
        employmentType: "Full-time",
        icon: "code",
        description: `- Developed responsive user interfaces using React.js and Tailwind CSS.
- Collaborated with senior developers on production-level web applications.
- Participated in code reviews and agile sprint planning.`,
        skills: ["React.js", "Tailwind CSS", "JavaScript", "TypeScript", "Git", "Agile"],
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
        employmentPeriod: { start: "01.2022" },
        employmentType: "Freelance",
        icon: "code",
        description: `- Delivered projects for **25+ international clients** on Fiverr and Upwork.
- Built web and mobile applications using React, Next.js, Flutter, and Firebase.
- Creator of **ChangmaBhach** — an ML-powered Flutter app for Chakma language learning with TensorFlow Lite.
- Co-founded **Wydiz**, a web studio delivering premium websites in a 7–10 day sprint.`,
        skills: ["Next.js", "React", "Flutter", "Firebase", "Dart", "Fiverr", "Upwork", "Wydiz"],
        isExpanded: true,
      },
    ],
  },
];
