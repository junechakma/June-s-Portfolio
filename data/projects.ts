export type Project = {
  slug: string;
  name: string;
  desc: string;
  href?: string;
  github?: string;
  images?: string[];
  date?: string;
  featured?: boolean;
  tags?: string[];
  content?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "receipt-scanner",
    name: "Receipt Scanner",
    desc: "Privacy-first offline receipt & expense tracker",
    href: "https://june-chakma.vercel.app/apps/receipt-scanner-free.html",
    date: "2024-06-01",
    featured: true,
    tags: ["Flutter", "Dart", "ML Kit", "Firebase"],
    content: `- Built a fully offline-first mobile app for scanning and categorizing receipts using ML Kit OCR.
- Implemented privacy-first architecture — no data leaves the device.
- Features expense tracking, category grouping, and monthly summaries.
- Available on both Android and iOS as a free download.`,
  },
  {
    slug: "qamla-crew",
    name: "Qamla Crew",
    desc: "Worker management app — iOS & Android",
    href: "https://apps.apple.com/us/app/qamlacrew/id6755341717",
    date: "2024-09-01",
    featured: true,
    tags: ["Flutter", "Dart", "Firebase", "Supabase"],
    content: `- Cross-platform mobile app for managing field workers and crew schedules.
- Published on Apple App Store and Google Play Store.
- Real-time location tracking, shift management, and attendance features.
- Built with Flutter for seamless iOS and Android experience.`,
  },
  {
    slug: "class-response-system",
    name: "Class Response System",
    desc: "Real-time student engagement platform",
    href: "https://classresponse.com/",
    date: "2024-03-01",
    tags: ["Next.js", "React", "TypeScript", "Firebase"],
    content: `- Web-based platform enabling real-time student-teacher interaction during lectures.
- Features live polls, quizzes, Q&A sessions, and attendance tracking.
- Used at UCSI University Bangladesh to enhance classroom engagement.
- Built with Next.js and Firebase for real-time data synchronization.`,
  },
  {
    slug: "the-social-meet",
    name: "The Social Meet",
    desc: "Cross-platform social media app",
    href: "https://www.thesocialmeet.com/",
    date: "2023-11-01",
    tags: ["Flutter", "Dart", "Firebase"],
    content: `- Full-featured social networking app for iOS and Android.
- Includes posts, stories, direct messaging, and user discovery.
- Designed with a focus on clean UI and smooth animations.
- Backend powered by Firebase with real-time updates.`,
  },
  {
    slug: "changmabhach",
    name: "ChangmaBhach",
    desc: "ML-powered Chakma language learning app",
    href: "https://june-chakma.vercel.app/apps/changmabhach.html",
    date: "2023-08-01",
    tags: ["Flutter", "Python", "TensorFlow", "ML Kit"],
    content: `- Mobile app for learning and preserving the Chakma language — an endangered script.
- Uses machine learning to recognize handwritten Chakma characters.
- Includes interactive lessons, quizzes, and writing practice modules.
- Published as part of academic research into indigenous language preservation.`,
  },
  {
    slug: "buddhimotta",
    name: "Buddhimotta",
    desc: "Multiple intelligence assessment app",
    href: "https://june-chakma.vercel.app/apps/changmabhach.html",
    date: "2023-05-01",
    tags: ["Flutter", "Dart", "Firebase"],
    content: `- Mobile application based on Howard Gardner's Theory of Multiple Intelligences.
- Assesses users across 8 intelligence types through interactive questions.
- Provides personalized feedback and learning style recommendations.
- Designed for educational institutions and self-discovery.`,
  },
  {
    slug: "mitschke-immo",
    name: "Mitschke Immo",
    desc: "Real estate website — Next.js & Firebase",
    href: "https://mitschke-immo.de/",
    date: "2024-01-01",
    tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    content: `- Professional real estate website for a German property agency.
- Features property listings, image galleries, and contact forms.
- Built with Next.js for fast page loads and SEO optimization.
- Firebase backend for dynamic property management.`,
  },
  {
    slug: "compileq",
    name: "CompileQ",
    desc: "Corporate website — UK-based company",
    href: "https://compileq.co.uk/",
    date: "2024-04-01",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    content: `- Corporate marketing website for CompileQ, a UK-based software company.
- Designed with a modern, professional aesthetic using Framer Motion animations.
- Fully responsive and optimized for performance and accessibility.
- Delivered as a remote contract project.`,
  },
  {
    slug: "fly-the-plane",
    name: "Fly the Plane",
    desc: "Interactive 3D web game",
    href: "http://fly-the-plane.vercel.app/",
    date: "2023-07-01",
    tags: ["Three.js", "JavaScript", "WebGL"],
    content: `- Browser-based 3D flying game built with Three.js and WebGL.
- Procedurally generated terrain with real-time physics simulation.
- Smooth controls supporting keyboard and touch input.
- Deployed as a lightweight, no-install web experience.`,
  },
  {
    slug: "limoncello-london",
    name: "Limoncello London",
    desc: "Restaurant website",
    href: "https://limoncellolondon.co.uk/",
    date: "2023-12-01",
    tags: ["Next.js", "Tailwind CSS"],
    content: `- Elegant restaurant website for Limoncello, a London-based Italian dining venue.
- Features menu showcasing, reservation links, and location information.
- Designed with a warm, Mediterranean aesthetic.
- Optimized for mobile browsers with fast load times.`,
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
