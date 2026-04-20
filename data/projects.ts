export type Project = {
  slug: string;
  name: string;
  desc: string;
  href?: string;
  appStore?: string;
  playStore?: string;
  comingSoon?: boolean;
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
    comingSoon: true,
    date: "2024-06-01",
    featured: true,
    images: [
      "/project/receipt-scanner/cover-photo-receipt-scanner-expanse-and-tax.png",
      "/project/receipt-scanner/01-dashboard-overview.png",
      "/project/receipt-scanner/02-receipt-management.png",
      "/project/receipt-scanner/03-smart-scan.png",
      "/project/receipt-scanner/04-receipt-review.png",
      "/project/receipt-scanner/05-reporting-view.png",
      "/project/receipt-scanner/06-settings-and-limits.png",
    ],
    tags: ["Flutter", "SQLite", "OCR", "Claude AI"],
    content: `Receipt Scanner is a privacy-first, offline expense tracker built for people who want fast capture, clean reports, and full local control over their data.

## Features

- Offline-first workflow with local-only SQLite storage — no data ever leaves the device.
- Receipt scanning from camera or gallery with OCR review before saving.
- Personal and business expense tracking with custom categories.
- Workspaces for trips, clients, or projects.
- Tax-deductible tagging, refund and reimbursable tracking.
- Clean reporting UI with CSV export.

## Built With

- **Flutter** — cross-platform mobile UI
- **SQLite** — local-only data storage
- **OCR Algorithm** — on-device text extraction
- **Claude AI** — intelligent receipt parsing`,
  },
  {
    slug: "qamla-crew",
    name: "Qamla Crew",
    desc: "Worker management app — iOS & Android",
    appStore: "https://apps.apple.com/us/app/qamlacrew/id6755341717",
    date: "2024-09-01",
    featured: true,
    images: ["/project/qamla-crew.png"],
    tags: ["Flutter", "Dart", "Firebase", "Supabase"],
    content: `- Cross-platform mobile app for managing field workers and crew schedules.
- Published on Apple App Store and Google Play Store.
- Real-time location tracking, shift management, and attendance features.
- Built with Flutter for seamless iOS and Android experience.`,
  },
  {
    slug: "class-response-system",
    name: "Class Response System",
    desc: "AI analytics & anonymous educational feedback",
    href: "https://classresponse.com/",
    date: "2024-03-01",
    images: [
      "/project/class-response/crs-dashboard.png",
      "/project/class-response/crs-session-analytics.png",
      "/project/class-response/crs-qr.png",
    ],
    tags: ["Next.js", "PostgreSQL", "AI Agent", "Claude Code"],
    content: `Class Response System is an AI-powered educational feedback platform in production, built to transform how educators collect and understand student responses through intelligent analytics and CLO mapping.

## My Role

Full Stack Engineer — designed and developed the entire system end-to-end, from database schema to AI agent integration, using Claude Code.

## Features

- Anonymous response collection with real-time session management.
- AI-powered analytics to surface insights from student feedback.
- CLO (Course Learning Outcome) mapping for structured assessment.
- QR-based session joining for frictionless student participation.
- Dashboard with session analytics and response breakdowns.

## Built With

- **Next.js** — full-stack web framework
- **PostgreSQL** — relational data storage
- **AI Agent Development** — intelligent feedback analysis
- **Claude Code** — developed end-to-end with AI assistance`,
  },
  {
    slug: "the-social-meet",
    name: "The Social Meet",
    desc: "Cross-platform social media app",
    href: "https://www.thesocialmeet.com/",
    date: "2023-11-01",
    images: [
      "/project/social-meet.jpg",
      "/project/app-images/social-meet1.jpg",
      "/project/app-images/social-meet2.jpg",
      "/project/app-images/social-meet3.jpg",
      "/project/app-images/social-meet4.jpg",
      "/project/app-images/social-meet5.jpg",
    ],
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
    images: [
      "/project/changmabhach.png",
      "/project/app-images/changmabhach1.png",
      "/project/app-images/changmabhach2.png",
      "/project/app-images/changmabhach3.png",
      "/project/app-images/changmabhach4.png",
      "/project/app-images/changmabhach5.png",
    ],
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
    images: [
      "/project/buddhimotta.png",
      "/project/app-images/buddhimotta2.png",
      "/project/app-images/buddhimotta3.png",
      "/project/app-images/buddhimotta4.png",
      "/project/app-images/buddhimotta5.png",
      "/project/app-images/buddhimotta6.png",
    ],
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
    images: ["/project/immo.png"],
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
    images: ["/project/compileq.png"],
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
    images: ["/project/fly-the-plane.png"],
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
    images: ["/project/lemoncello.png"],
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
