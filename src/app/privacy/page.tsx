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
            This website is a studio presence for {site.name}. It does not operate a user account
            system or a long-term contact database.
          </p>
          <p>
            Discovery Calls are booked only through Google Calendar. Google collects your name,
            email and selected time, adds the meeting to both calendars, and emails the Google Meet
            link. This website does not send booking mail itself.
          </p>
        </div>
      </div>
    </main>
  );
}
