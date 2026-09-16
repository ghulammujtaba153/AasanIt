export type ProjectLayout = "split-right" | "full" | "asymmetric" | "split-left";
export type ProjectVisual = "lattice" | "orbit" | "bars" | "nodes";

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  layout: ProjectLayout;
  visual: ProjectVisual;
  placeholder: true;
};

export const projects: Project[] = [
  {
    slug: "platform-core",
    index: "01",
    title: "Platform Core",
    category: "Web",
    description:
      "Placeholder study — a digital operations platform that brings work, data and users into one place.",
    technologies: ["Next.js", "Node", "Postgres", "AWS"],
    layout: "split-right",
    visual: "lattice",
    placeholder: true,
  },
  {
    slug: "operations-os",
    index: "02",
    title: "Operations OS",
    category: "SaaS",
    description:
      "Placeholder study — a web platform for teams that need one place to run work, data, and decisions.",
    technologies: ["Next.js", "Node", "Postgres", "AWS"],
    layout: "full",
    visual: "bars",
    placeholder: true,
  },
  {
    slug: "field-signal",
    index: "03",
    title: "Field Signal",
    category: "Mobile",
    description:
      "Placeholder study — a mobile product for people working away from a desk, with offline-first craft and quiet UI.",
    technologies: ["React Native", "iOS", "Android", "APIs"],
    layout: "asymmetric",
    visual: "orbit",
    placeholder: true,
  },
  {
    slug: "cloud-spine",
    index: "04",
    title: "Cloud Spine",
    category: "Cloud",
    description:
      "Placeholder study — infrastructure shaped around the product: delivery, observability, and a calmer path to production.",
    technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    layout: "split-left",
    visual: "nodes",
    placeholder: true,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
