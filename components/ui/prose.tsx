import { cn } from "@/lib/utils";

export function Prose({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "prose prose-sm max-w-none text-foreground prose-zinc dark:prose-invert",
        "prose-headings:font-sans prose-headings:font-semibold",
        "prose-h2:border-b prose-h2:border-edge prose-h2:pb-2 prose-h2:text-xl",
        "prose-h3:text-base",
        "prose-p:text-muted-foreground",
        "prose-li:text-muted-foreground",
        "prose-strong:text-foreground prose-strong:font-medium",
        "prose-a:text-foreground prose-a:no-underline prose-a:underline-offset-4 hover:prose-a:underline",
        "prose-hr:border-edge",
        className
      )}
      {...props}
    />
  );
}
