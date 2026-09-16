import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Start a project",
  description: "Tell AasanIt what you want to build. AI, web, mobile and cloud engineering.",
};

export default function ContactPage() {
  return (
    <main className="pt-[calc(var(--nav-h)+3rem)] pb-28">
      <div className="site-shell grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="meta mb-6">Contact</p>
          <h1 className="display headline max-w-[10ch]">Let&apos;s build it.</h1>
          <p className="mt-8 max-w-md text-[1.05rem] leading-8 text-ink-muted">
            Share a little context. This form opens your email client — nothing is stored on this site yet.
          </p>
          <ContactForm />
        </div>
        <aside className="lg:pt-24">
          <p className="meta mb-4">Direct</p>
          <a href={`mailto:${site.email}`} className="display text-3xl underline-anim" data-cursor="talk">
            {site.email}
          </a>
          <p className="mt-10 meta">Location</p>
          <p className="mt-3 text-ink-muted">{site.location}</p>
        </aside>
      </div>
    </main>
  );
}
