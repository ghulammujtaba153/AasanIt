import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms notes for the AasanIt website.",
};

export default function TermsPage() {
  return (
    <main className="pt-[calc(var(--nav-h)+3rem)] pb-28">
      <div className="site-shell max-w-2xl">
        <p className="meta mb-6">Legal</p>
        <h1 className="display subhead">Terms</h1>
        <div className="mt-10 space-y-6 text-[1.02rem] leading-8 text-ink-muted">
          <p>
            The content on this site describes {site.name}&apos;s digital product engineering practice.
            Project studies are placeholders until replaced with real work.
          </p>
          <p>
            Replace this page with counsel-reviewed terms before offering paid services through the
            website.
          </p>
        </div>
      </div>
    </main>
  );
}
