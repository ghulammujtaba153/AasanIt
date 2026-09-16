import { LineReveal, Reveal } from "@/components/Reveal";

export function Intro() {
  return (
    <section className="relative border-t border-line py-24 md:py-36">
      <div className="site-shell grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)] lg:items-end">
        <LineReveal
          as="h2"
          className="display subhead"
          lines={["We turn", "complex ideas", "into digital", "solutions."]}
        />
        <Reveal>
          <p className="max-w-md text-[1.05rem] leading-8 text-ink-muted lg:justify-self-end">
            We design and engineer web platforms, mobile applications, cloud infrastructure and
            product software that move from concept to production.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
