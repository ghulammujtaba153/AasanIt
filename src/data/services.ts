export type Service = {
  index: string;
  title: string;
  description: string;
  keywords: string;
};

export const services: Service[] = [
  {
    index: "01",
    title: "AI & Automation",
    description:
      "AI agents, LLM applications, RAG systems, intelligent workflows, and automation built around real operations.",
    keywords: "Agents · RAG · LLM · Workflows",
  },
  {
    index: "02",
    title: "Web Applications",
    description:
      "High-performance SaaS platforms, dashboards, marketplaces, and enterprise applications designed to last.",
    keywords: "SaaS · Next.js · Product",
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
      "Cloud architecture, deployment, CI/CD, containers, observability, and infrastructure that can scale with the product.",
    keywords: "AWS · Docker · Kubernetes",
  },
  {
    index: "05",
    title: "Backend & APIs",
    description:
      "Reliable APIs, microservices, databases, and production-grade backend systems with clear contracts.",
    keywords: "Node · Python · Postgres",
  },
  {
    index: "06",
    title: "Product Engineering",
    description:
      "From product strategy and UX to engineering, deployment, and iteration — one team, one system.",
    keywords: "UX · Build · Launch",
  },
];
