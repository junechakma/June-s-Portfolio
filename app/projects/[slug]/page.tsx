import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, ArrowUpRightIcon } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PROJECTS, getProjectBySlug } from "@/data/projects";
import { ProjectImageCarousel } from "@/components/project-image-carousel";
import { Prose } from "@/components/ui/prose";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}.${mm}.${yyyy}`;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.desc,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const allSlugs = PROJECTS.map((p) => p.slug);
  const idx = allSlugs.indexOf(slug);
  const prev = idx > 0 ? PROJECTS[idx - 1] : null;
  const next = idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : null;


  return (
    <div className="mx-auto md:max-w-3xl border-x border-edge min-h-screen">

      {/* ── Top nav ── */}
      <div className="flex items-center justify-between px-4 py-2 screen-line-after">
        <Link
          href="/projects"
          className="flex items-center gap-1.5 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeftIcon className="size-3.5" />
          Projects
        </Link>

        <div className="flex items-center gap-2">
          {project.comingSoon && (
            <span className="font-mono text-xs text-muted-foreground border border-dashed border-edge rounded-md px-2.5 py-1">
              Coming Soon
            </span>
          )}
          {!project.comingSoon && project.appStore && (
            <a
              href={project.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors border border-edge rounded-md px-2.5 py-1"
            >
              App Store
              <ArrowUpRightIcon className="size-3.5" />
            </a>
          )}
          {!project.comingSoon && project.playStore && (
            <a
              href={project.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors border border-edge rounded-md px-2.5 py-1"
            >
              Play Store
              <ArrowUpRightIcon className="size-3.5" />
            </a>
          )}
          {!project.comingSoon && project.href && !project.appStore && !project.playStore && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors border border-edge rounded-md px-2.5 py-1"
            >
              Visit Site
              <ArrowUpRightIcon className="size-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* ── Diagonal pattern strip ── */}
      <div
        className={[
          "h-8 screen-line-after",
          "before:absolute before:-left-[100vw] before:-z-10 before:h-full before:w-[200vw]",
          "[--pattern-fg:color-mix(in_oklab,var(--color-edge)_56%,transparent)]",
          "before:bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]",
          "before:bg-[size:10px_10px]",
        ].join(" ")}
      />

      {/* ── Carousel ── */}
      <div className="p-4 screen-line-after">
        <ProjectImageCarousel
          images={project.images}
          name={project.name}
          href={project.href}
          priority
          variant="detail"
        />
      </div>

      {/* ── Title & meta ── */}
      <div className="px-4 pt-4 pb-4 screen-line-after">
        <h1 className="text-3xl font-semibold leading-tight mb-2">
          {project.name}
          {project.featured && (
            <span className="ml-3 inline-block size-2.5 -translate-y-1 rounded-full bg-blue-500">
              <span className="sr-only">Featured</span>
            </span>
          )}
        </h1>
        <p className="text-muted-foreground mb-3">{project.desc}</p>
        {project.date && (
          <p className="font-mono text-sm text-muted-foreground">
            {formatDate(project.date)}
          </p>
        )}
      </div>

      {/* ── Tags ── */}
      {project.tags && project.tags.length > 0 && (
        <div className="px-4 py-3 screen-line-after flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-edge bg-accent px-2.5 py-0.5 font-mono text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* ── Content ── */}
      {project.content && (
        <Prose className="px-4 py-6 screen-line-after">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {project.content}
          </ReactMarkdown>
        </Prose>
      )}

      {/* ── Prev / Next ── */}
      <div className="grid grid-cols-2 screen-line-before">
        <div className="border-r border-edge">
          {prev && (
            <Link
              href={`/projects/${prev.slug}`}
              className="flex flex-col gap-1 p-4 hover:bg-accent transition-colors"
            >
              <span className="flex items-center gap-1 font-mono text-xs text-muted-foreground">
                <ArrowLeftIcon className="size-3" />
                Previous
              </span>
              <span className="text-sm font-medium line-clamp-1">{prev.name}</span>
            </Link>
          )}
        </div>
        <div className="text-right">
          {next && (
            <Link
              href={`/projects/${next.slug}`}
              className="flex flex-col gap-1 p-4 hover:bg-accent transition-colors"
            >
              <span className="flex items-center justify-end gap-1 font-mono text-xs text-muted-foreground">
                Next
                <ArrowLeftIcon className="size-3 rotate-180" />
              </span>
              <span className="text-sm font-medium line-clamp-1">{next.name}</span>
            </Link>
          )}
        </div>
      </div>

      <div className="h-4 screen-line-before" />
    </div>
  );
}
