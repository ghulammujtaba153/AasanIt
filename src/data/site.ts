export const site = {
  name: "AasanIt",
  tagline: "Digital products, engineered for what comes next.",
  description:
    "AasanIt is a digital product engineering studio. We design and build AI systems, web platforms, mobile applications, and cloud infrastructure as one.",
  email: "hello@aasanit.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  location: "Remote / Global",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "Instagram", href: "https://www.instagram.com" },
  ],
} as const;

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
] as const;
