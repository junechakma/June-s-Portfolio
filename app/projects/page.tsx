import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of projects built by June Chakma.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto md:max-w-3xl border-x border-edge min-h-screen">
      <div className="screen-line-after flex items-center justify-between px-4 py-2">
        <Link
          href="/"
          className="flex items-center gap-1.5 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeftIcon className="size-3.5" />
          Portfolio
        </Link>
      </div>
      <div className="screen-line-after px-4 py-3">
        <h1 className="text-3xl font-semibold">Projects</h1>
      </div>

      <div className="screen-line-after p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          {metadata.description}
        </p>
      </div>

      <div className="relative pt-4">
        <div className="absolute inset-0 -z-10 grid-cols-2 max-sm:hidden sm:grid">
          <div className="border-r border-edge" />
          <div />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              priority={index <= 3}
            />
          ))}
        </div>
      </div>

      <div className="h-4" />
    </div>
  );
}
