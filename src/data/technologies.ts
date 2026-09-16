export type TechGroup = {
  label: string;
  items: string[];
};

export const techGroups: TechGroup[] = [
  {
    label: "Web",
    items: ["Next.js", "React", "TypeScript", "Node", "Tailwind"],
  },
  {
    label: "Mobile",
    items: ["React Native", "iOS", "Android"],
  },
  {
    label: "Cloud",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    label: "Backend",
    items: ["Postgres", "MongoDB", "APIs", "Microservices"],
  },
  {
    label: "Automation",
    items: ["Python", "FastAPI", "Integrations", "Workflows"],
  },
];

export const marqueeItems = [
  "NEXT.JS",
  "REACT",
  "NODE",
  "TYPESCRIPT",
  "REACT NATIVE",
  "POSTGRES",
  "AWS",
  "DOCKER",
  "KUBERNETES",
  "PYTHON",
  "FASTAPI",
  "MONGODB",
];
