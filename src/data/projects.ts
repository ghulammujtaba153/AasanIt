export type ProjectLayout = "split-right" | "full" | "asymmetric" | "split-left";

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  layout: ProjectLayout;
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    slug: "aasan-dairy",
    index: "01",
    title: "Aasan Dairy",
    category: "Mobile",
    description:
      "A digital solution for dairy operations. Aasan Dairy helps manage the business from collection point onward — dairy business, simply managed.",
    technologies: ["Mobile", "Operations", "Product"],
    layout: "split-right",
    image: "/aasan_dairy.png",
    imageAlt: "Aasan Dairy mobile app splash screen",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
