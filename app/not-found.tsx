import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto md:max-w-3xl border-x border-edge min-h-[80vh] flex flex-col">

      {/* Diagonal pattern strip */}
      <div
        className={[
          "h-8 screen-line-after",
          "before:absolute before:-left-[100vw] before:-z-10 before:h-full before:w-[200vw]",
          "[--pattern-fg:color-mix(in_oklab,var(--color-edge)_56%,transparent)]",
          "before:bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]",
          "before:bg-[size:10px_10px]",
        ].join(" ")}
      />

      {/* Main content */}
      <div className="flex flex-1 flex-col items-center justify-center gap-6 px-4 py-16 text-center">

        <div className="space-y-1">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Error 404
          </p>
          <h1 className="text-6xl font-semibold tracking-tight">
            <span className="animate-shimmer">404</span>
          </h1>
        </div>

        <div className="space-y-2 max-w-sm">
          <p className="text-xl font-medium">Page not found</p>
          <p className="font-mono text-sm text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <Link
          href="/"
          className="flex items-center gap-2 rounded-full border border-edge bg-accent px-5 py-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeftIcon className="size-3.5" />
          Back to Portfolio
        </Link>

      </div>


    </div>
  );
}
