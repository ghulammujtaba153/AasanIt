import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { ProjectVisual } from "@/components/ProjectVisual";
import { LineReveal, Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";
import { cn } from "@/lib/cn";

export function SelectedWork() {
  return (
    <section id="work" className="relative border-t border-line py-24 md:py-32">
      <div className="site-shell mb-16 md:mb-24">
        <LineReveal as="h2" className="display subhead" lines={["Things", "we've built."]} />
        <Reveal className="mt-6 max-w-md">
          <p className="text-ink-muted">Selected work. One live digital solution, shown as it exists today.</p>
        </Reveal>
      </div>
      <div className="flex flex-col gap-24 md:gap-32">
        {projects.map((project) => (
          <article key={project.slug} className="site-shell group">
            <Link
              href={`/work/${project.slug}`}
              className={cn(
                "grid gap-8 lg:items-center",
                project.layout === "split-right" && "lg:grid-cols-[0.9fr_0.9fr]",
                project.layout === "split-left" && "lg:grid-cols-[0.9fr_0.9fr]",
                project.layout === "full" && "site-shell",
                project.layout === "asymmetric" && "lg:grid-cols-[1fr_0.7fr]",
              )}
              data-cursor="view"
            >
              <div className={cn(project.layout === "split-left" && "lg:order-2")}>
                <p className="meta mb-4">
                  {project.index} / {project.category}
                </p>
                <h3 className="display text-[clamp(2rem,4.5vw,4.4rem)]">{project.title}</h3>
                <p className="mt-5 max-w-md text-[1rem] leading-7 text-ink-muted">{project.description}</p>
                <p className="meta mt-5">{project.technologies.join(" · ")}</p>
                <span className="link-arrow mt-8 inline-flex">
                  View case study
                  <Arrow />
                </span>
              </div>
              <ProjectVisual image={project.image} alt={project.imageAlt} className="mx-auto w-full max-w-[360px]" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
