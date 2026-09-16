import type { Metadata } from "next";
import { BookingScheduler } from "@/components/BookingScheduler";
import { booking } from "@/data/booking";

export const metadata: Metadata = {
  title: "Book a Discovery Call",
  description: booking.description,
};

export default function BookPage() {
  return (
    <main className="pt-[calc(var(--nav-h)+2.5rem)] pb-24">
      <div className="site-shell">
        <p className="meta">Discovery</p>
        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h1 className="display headline max-w-[14ch]">{booking.title}</h1>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-8 text-ink-muted">{booking.description}</p>
          </div>
          <ul className="flex flex-wrap gap-x-8 gap-y-2 pb-1">
            <li className="meta text-ink-muted">30 minutes</li>
            <li className="meta text-ink-muted">Google Meet</li>
            <li className="meta text-ink-muted">PKT</li>
          </ul>
        </div>
      </div>
      <div className="site-shell mt-12 md:mt-16">
        <BookingScheduler />
      </div>
    </main>
  );
}
