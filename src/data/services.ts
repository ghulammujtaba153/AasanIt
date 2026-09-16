export type Service = {
  index: string;
  title: string;
  description: string;
  keywords: string;
};

export const services: Service[] = [
  {
    index: "01",
    title: "Digital Platforms",
    description:
      "End-to-end digital solutions for operations, customers and internal teams — designed as one product, not a stack of tools.",
    keywords: "Platforms · Product · Systems",
  },
  {
    index: "02",
    title: "Web Applications",
    description:
      "High-performance SaaS platforms, dashboards, marketplaces and enterprise applications designed to last.",
    keywords: "SaaS · Next.js · Web",
  },
  {
    index: "03",
    title: "Mobile",
    description:
      "Native-quality iOS and Android experiences using modern mobile technologies and shared product systems.",
    keywords: "iOS · Android · React Native",
  },
  {
    index: "04",
    title: "Cloud & DevOps",
    description:
      "Cloud architecture, deployment, CI/CD, containers, observability and infrastructure that can scale with the product.",
    keywords: "AWS · Docker · Kubernetes",
  },
  {
    index: "05",
    title: "Backend & APIs",
    description:
      "Reliable APIs, microservices, databases and production-grade backend systems with clear contracts.",
    keywords: "Node · Python · Postgres",
  },
  {
    index: "06",
    title: "Automation",
    description:
      "Workflows and integrations that remove manual work. Intelligence is used where it helps the solution, not as the headline.",
    keywords: "Workflows · Integrations · Ops",
  },
];
