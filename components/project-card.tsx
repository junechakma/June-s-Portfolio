"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "lucide-react";
import { ProjectImageCarousel } from "@/components/project-image-carousel";
import type { Project } from "@/data/projects";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}.${mm}.${yyyy}`;
}

export function ProjectCard({
  project,
  priority,
}: {
  project: Project;
  priority?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group/card flex flex-col gap-2 p-2 max-sm:screen-line-before max-sm:screen-line-after sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after">

      {/* Carousel */}
      {project.images && project.images.length > 1 ? (
        <ProjectImageCarousel
          images={project.images}
          name={project.name}
          href={project.href}
          priority={priority}
          variant="card"
        />
      ) : (
        <Link href={`/projects/${project.slug}`} className="block">
          <ProjectImageCarousel
            images={project.images}
            name={project.name}
            href={project.href}
            priority={priority}
            variant="card"
          />
        </Link>
      )}

      {/* Title + date row */}
      <div
        onClick={() => setExpanded((v) => !v)}
        className="flex items-start justify-between gap-2 px-2 cursor-pointer py-1 -my-1"
      >
        <div className="flex flex-col gap-1 min-w-0">
          <Link
            href={`/projects/${project.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="w-fit"
          >
            <h3 className="text-lg leading-snug font-medium text-balance underline-offset-4 hover:underline">
              {project.name}
              {project.featured && (
                <span className="ml-2 inline-block size-2 -translate-y-px rounded-full bg-blue-500">
                  <span className="sr-only">Featured</span>
                </span>
              )}
            </h3>
          </Link>
          {project.date && (
            <p className="text-sm text-muted-foreground">{formatDate(project.date)}</p>
          )}
        </div>

        <ChevronDownIcon
          className={`mt-1.5 size-4 shrink-0 text-muted-foreground transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
        />
      </div>

      {/* Expandable: description + tags */}
      <div
        className={`overflow-hidden transition-all duration-250 ease-out ${
          expanded ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 px-2 pb-2">
          {project.desc && (
            <p className="text-sm text-muted-foreground leading-relaxed">{project.desc}</p>
          )}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-edge bg-accent px-2 py-0.5 font-mono text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
