"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setContactVisible(false);
      return;
    }

    const el = document.getElementById("contact");
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setContactVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [pathname]);

  const handleContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#contact");
    }
  };

  const handlePortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const NAV_ITEMS = [
    {
      label: "Portfolio",
      href: "/",
      active: pathname === "/" && !contactVisible,
      onClick: handlePortfolio,
    },
    {
      label: "Projects",
      href: "/projects",
      active: pathname.startsWith("/projects"),
    },
    {
      label: "Contact",
      href: "/#contact",
      active: contactVisible,
      onClick: handleContact,
    },
  ];

  return (
    <nav className="hidden items-center gap-4 sm:flex">
      {NAV_ITEMS.map(({ label, href, active, onClick }) => (
        <Link
          key={href}
          href={href}
          onClick={onClick}
          className={cn(
            "font-mono text-sm font-medium transition-colors duration-300",
            active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
