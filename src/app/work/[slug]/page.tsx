import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/Arrow";
import { ProjectVisual } from "@/components/ProjectVisual";
import { getProject, projects } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Work" };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function WorkStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="pt-[calc(var(--nav-h)+3rem)] pb-28">
      <div className="site-shell">
        <Link href="/work" className="link-arrow inline-flex text-ink-muted">
          <span className="rotate-180">
            <Arrow />
          </span>
          All work
        </Link>
        <p className="meta mt-10">
          {project.index} / {project.category}
        </p>
        <h1 className="display headline mt-6 max-w-[12ch]">{project.title}</h1>
        <p className="mt-8 max-w-xl text-[1.1rem] leading-8 text-ink-muted">{project.description}</p>
        <p className="meta mt-6">{project.technologies.join(" · ")}</p>
      </div>
      <div className="site-shell mt-16 flex justify-center">
        <ProjectVisual
          image={project.image}
          alt={project.imageAlt}
          className="w-full max-w-[420px]"
        />
      </div>
    </main>
  );
}
