export type SocialLink = {
  icon: string;
  label: string;
  sub: string;
  href: string;
  iconSize?: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: "github",
    label: "GitHub",
    sub: "github.com/junechakma",
    href: "https://github.com/junechakma",
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    sub: "june-chakma-dev",
    href: "https://www.linkedin.com/in/june-chakma-dev/",
  },
  {
    icon: "instagram",
    label: "Instagram",
    sub: "@june_chakma",
    href: "https://www.instagram.com/june_chakma/",
  },
  {
    icon: "x",
    label: "X (Twitter)",
    sub: "@junechakma",
    href: "https://x.com/junechakma",
    iconSize: "size-5",
  },
  {
    icon: "upwork",
    label: "Upwork",
    sub: "upwork.com/junechakma",
    href: "https://www.upwork.com/freelancers/~0148ccc5230797fbd1",
  },
  {
    icon: "fiverr",
    label: "Fiverr",
    sub: "fiverr.com/junechakma",
    href: "https://www.fiverr.com/junechakma",
  },
];
