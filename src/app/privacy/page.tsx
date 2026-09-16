import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy notes for the AasanIt website.",
};

export default function PrivacyPage() {
  return (
    <main className="pt-[calc(var(--nav-h)+3rem)] pb-28">
      <div className="site-shell max-w-2xl">
        <p className="meta mb-6">Legal</p>
        <h1 className="display subhead">Privacy</h1>
        <div className="mt-10 space-y-6 text-[1.02rem] leading-8 text-ink-muted">
          <p>
            This website is a studio presence for {site.name}. It does not currently operate a user
            account system or a server-side contact database.
          </p>
          <p>
            If you use the contact form, your message is handed to your own email client and sent to{" "}
            {site.email}. Replace this page with a full policy before collecting analytics or form data.
          </p>
        </div>
      </div>
    </main>
  );
}
