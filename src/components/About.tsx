import { LineReveal, Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="relative border-t border-line py-24 md:py-32">
      <div className="site-shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <LineReveal as="h2" className="display subhead" lines={["We are a", "team of", "builders."]} />
        <Reveal>
          <p className="meta mb-5">Studio</p>
          <p className="max-w-md text-[1.05rem] leading-8 text-ink-muted">
            We combine product thinking, design, software engineering and cloud infrastructure
            to build digital solutions that are ready for the real world.
          </p>
        </Reveal>
      </div>
      <div className="site-shell mt-20">
        <p className="meta mb-5">What we build</p>
        <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {["Web platforms", "SaaS", "Mobile apps", "Cloud systems", "APIs", "Automation"].map(
            (item) => (
              <p key={item} className="bg-bg px-5 py-8 font-display text-2xl tracking-[-0.04em]">
                {item}
              </p>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
