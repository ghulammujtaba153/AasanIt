export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

export const site = {
  name: "AasanIt",
  tagline: "Digital solutions, engineered for what comes next.",
  description:
    "AasanIt designs and engineers digital solutions — web platforms, mobile applications, cloud systems and product software that move from idea to production.",
  email: "hello@aasanit.com",
  url: getSiteUrl(),
  location: "Remote / Global",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "Instagram", href: "https://www.instagram.com" },
  ],
};

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
] as const;
