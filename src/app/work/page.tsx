import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { ProjectVisual } from "@/components/ProjectVisual";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Placeholder studies of digital products spanning AI, web, mobile and cloud.",
};

export default function WorkPage() {
  return (
    <main className="pt-[calc(var(--nav-h)+3rem)] pb-24">
      <div className="site-shell">
        <p className="meta mb-6">Archive</p>
        <h1 className="display headline max-w-[10ch]">Selected work</h1>
        <p className="mt-8 max-w-lg text-ink-muted">
          These entries are clearly marked placeholders until live case studies replace them.
        </p>
        <ul className="mt-20">
          {projects.map((project) => (
            <li key={project.slug} className="border-t border-line last:border-b">
              <Link
                href={`/work/${project.slug}`}
                className="group grid gap-6 py-8 md:grid-cols-[0.9fr_1.1fr] md:items-center"
                data-cursor="view"
              >
                <div>
                  <p className="meta mb-3">
                    {project.index} / {project.category}
                  </p>
                  <h2 className="display text-[clamp(1.8rem,4vw,3.4rem)]">{project.title}</h2>
                  <span className="link-arrow mt-6 inline-flex">
                    View study
                    <Arrow />
                  </span>
                </div>
                <ProjectVisual kind={project.visual} className="aspect-[16/8]" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
