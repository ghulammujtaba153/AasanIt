export type TechGroup = {
  label: string;
  items: string[];
};

export const techGroups: TechGroup[] = [
  {
    label: "AI / ML",
    items: ["AI", "LLM", "RAG", "Agents", "Python", "FastAPI"],
  },
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
];

export const marqueeItems = [
  "AI",
  "LLM",
  "PYTHON",
  "FASTAPI",
  "NODE",
  "NEXT.JS",
  "REACT",
  "REACT NATIVE",
  "POSTGRES",
  "MONGODB",
  "AWS",
  "DOCKER",
  "KUBERNETES",
];
