export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-before mx-auto border-x border-edge pt-4 md:max-w-3xl">
        <p className="mb-4 px-4 text-center font-mono text-sm text-muted-foreground">
          Built by{" "}
          <a
            className="font-medium underline underline-offset-4"
            href="https://github.com/junechakma"
            target="_blank"
            rel="noopener"
          >
            June Chakma
          </a>
          . Source code on{" "}
          <a
            className="font-medium underline underline-offset-4"
            href="https://github.com/junechakma"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          .
        </p>

        <div className="screen-line-before screen-line-after flex w-full before:z-1 after:z-1">
          <div className="mx-auto flex items-center justify-center gap-3 border-x border-edge bg-background px-6 py-3">
            <span className="font-mono text-xs text-muted-foreground">
              © {new Date().getFullYear()} June Chakma
            </span>
          </div>
        </div>
      </div>
      <div className="h-2" />
    </footer>
  );
}
