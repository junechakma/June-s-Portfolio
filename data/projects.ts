export type Project = {
  slug: string;
  name: string;
  desc: string;
  category: "app" | "website";
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
    category: "app",
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
    category: "app",
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
    category: "website",
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
    desc: "A personalized social messaging app",
    category: "app",
    href: "https://www.thesocialmeet.com/",
    date: "2023-11-01",
    images: [
      "/project/social-meet/social-meet1.jpg",
      "/project/social-meet/social-meet2.jpg",
      "/project/social-meet/social-meet3.jpg",
      "/project/social-meet/social-meet4.jpg",
      "/project/social-meet/social-meet5.jpg",
      "/project/social-meet/social-meet6.jpg",
      "/project/social-meet/social-meet7.jpg",
      "/project/social-meet/social-meet8.jpg",
      "/project/social-meet/social-meet9.jpg",
      "/project/social-meet/social-meet10.jpg",
      "/project/social-meet/social-meet11.jpg",
    ],
    tags: ["Flutter", "Firebase", "Claude"],
    content: `The Social Meet is an innovative social messaging platform that revolutionizes how people connect online. Unlike traditional messaging apps, it uses personality assessments to create meaningful connections between users with compatible personalities.

## My Role

Full-Stack Engineer — built the entire mobile app and backend infrastructure across iOS and Android.

## Features

- Smart group assignment based on personality compatibility.
- Real-time messaging with Firebase Stream.
- Intuitive and modern user interface.
- Admin dashboard for group management and analytics.
- Secure authentication and data storage.
- Cross-platform support (iOS & Android).
- User profile customization.

## Built With

- **Flutter** — cross-platform mobile UI
- **Firebase** — real-time backend and authentication
- **Claude** — AI-assisted development`,
  },
  {
    slug: "changmabhach",
    name: "ChangmaBhach",
    desc: "ML-powered Chakma language learning app",
    category: "app",
    href: "https://june-chakma.vercel.app/apps/changmabhach.html",
    date: "2023-08-01",
    images: [
      "/project/changmabhach/changmabhach1.png",
      "/project/changmabhach/changmabhach2.png",
      "/project/changmabhach/changmabhach3.png",
      "/project/changmabhach/changmabhach4.png",
      "/project/changmabhach/changmabhach5.png",
      "/project/changmabhach/changmabhach6.png",
      "/project/changmabhach/changmabhach7.png",
      "/project/changmabhach/changmabhach8.png",
      "/project/changmabhach/changmabhach9.png",
      "/project/changmabhach/changmabhach10.png",
    ],
    tags: ["Flutter", "TensorFlow Lite", "CNN", "Machine Learning"],
    content: `ChangmaBhach is an ML-powered mobile application designed to help preserve and revive the Chakma language — an endangered script — by making it interactive and accessible to learners of all levels.

## My Role

Full-Stack Engineer — built the mobile app, trained the ML model, and integrated on-device inference.

## Features

- Interactive handwriting practice with real-time recognition and feedback.
- Structured lessons for learning Chakma vowels, consonants, and diacritics.
- Comprehensive dictionary with Chakma-Bangla translations.
- Flashcards and alphabet table for supplemental learning.
- Offline functionality for learning without internet connection.
- Progress tracking and performance feedback.

## Built With

- **Flutter** — cross-platform mobile UI
- **TensorFlow Lite** — on-device ML inference
- **Convolutional Neural Network** — handwriting recognition model
- **Machine Learning Model** — trained on custom Chakma script dataset`,
  },
  {
    slug: "buddhimotta",
    name: "Buddhimotta",
    desc: "Multiple intelligence assessment app",
    category: "app",
    href: "https://june-chakma.vercel.app/apps/changmabhach.html",
    date: "2023-05-01",
    images: [
      "/project/buddhimotta/buddhimotta.png",
      "/project/buddhimotta/buddhimotta2.png",
      "/project/buddhimotta/buddhimotta3.png",
      "/project/buddhimotta/buddhimotta4.png",
      "/project/buddhimotta/buddhimotta5.png",
      "/project/buddhimotta/buddhimotta6.png",
      "/project/buddhimotta/buddhimotta7.png",
      "/project/buddhimotta/buddhimotta8.png",
      "/project/buddhimotta/buddhimotta9.png",
      "/project/buddhimotta/buddhimotta10.png",
      "/project/buddhimotta/buddhimotta11.png",
      "/project/buddhimotta/buddhimotta12.png",
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
    desc: "Real estate website design & development",
    category: "website",
    href: "https://mitschke-immo.de/",
    date: "2024-01-01",
    images: [
      "/project/martin-mitschke/martin-mitschke.png",
      "/project/martin-mitschke/martin-mitschke2.png",
      "/project/martin-mitschke/martin-mitschke3.png",
      "/project/martin-mitschke/martin-mitschke4.png",
    ],
    tags: ["Next.js", "Firebase", "Cloudinary", "Claude"],
    content: `Developed a modern and user-friendly real estate website for Martin Mitschke Immobilien, focused on property buying, selling, and rental services in Germany.

## My Role

Full-Stack Engineer — designed and developed the full website from UI to backend integration.

## Features

- Fully responsive design optimized for performance and trust-building.
- Property listings with image galleries and contact forms.
- Blog section for real estate insights, market trends, and investment guidance.
- Testimonials section and clear service workflows.
- SEO optimization for improved organic reach.

## Built With

- **Next.js** — full-stack web framework
- **Firebase** — backend and data storage
- **Cloudinary** — image management and optimization
- **Claude** — AI-assisted design and development`,
  },
  {
    slug: "wexford",
    name: "Wexford",
    desc: "Education consultancy website for UK study abroad",
    category: "website",
    href: "https://wexford.com/",
    date: "2024-05-01",
    images: [
      "/project/wexford/wexford.png",
      "/project/wexford/wexford2.png",
      "/project/wexford/wexford3.png",
      "/project/wexford/wexford4.png",
      "/project/wexford/wexford5.png",
    ],
    tags: ["Next.js", "Web Hosting", "Claude"],
    content: `Developed a professional and conversion-focused website for an education consultancy that helps students pursue higher education in the UK.

## My Role

Frontend Engineer — built the full website UI with a focus on lead generation and student journey clarity.

## Features

- Service pages covering university partnerships, eligibility guidance, and end-to-end support.
- Lead generation forms for initial inquiry and course selection.
- Clear pathways for application assistance and enrollment support.
- Clean UI/UX with responsive design for international student audiences.
- Structured content to guide users from inquiry to application.

## Built With

- **Next.js** — web framework
- **Web Hosting** — deployment and domain setup
- **Claude** — AI-assisted development`,
  },
  {
    slug: "compileq",
    name: "CompileQ",
    desc: "Corporate website — UK-based company",
    category: "website",
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
    category: "website",
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
    category: "website",
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
