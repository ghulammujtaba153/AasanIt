"use client";

import { useEffect, useMemo, useState } from "react";
import { Arrow } from "@/components/Arrow";
import { booking } from "@/data/booking";
import {
  dateHasSlots,
  earliestBookableDate,
  formatLongDate,
  latestBookableDate,
  monthLabel,
  monthMatrix,
  weekdays,
} from "@/lib/booking";
import { cn } from "@/lib/cn";

function monthFromIso(isoDate: string) {
  const [year, month] = isoDate.split("-").map(Number);
  return { year, monthIndex: month - 1 };
}

export function MeetingCalendar({ className }: { className?: string }) {
  const [ready, setReady] = useState(false);
  const minDate = earliestBookableDate();
  const maxDate = latestBookableDate();
  const minMonth = monthFromIso(minDate);
  const maxMonth = monthFromIso(maxDate);

  const [cursor, setCursor] = useState(minMonth);
  const [date, setDate] = useState("");

  useEffect(() => {
    setReady(true);
  }, []);

  const grid = useMemo(() => monthMatrix(cursor.year, cursor.monthIndex), [cursor]);

  if (!ready) {
    return <div className={cn("h-[32rem] border-t border-line", className)} aria-hidden />;
  }

  const canPrev =
    cursor.year > minMonth.year ||
    (cursor.year === minMonth.year && cursor.monthIndex > minMonth.monthIndex);
  const canNext =
    cursor.year < maxMonth.year ||
    (cursor.year === maxMonth.year && cursor.monthIndex < maxMonth.monthIndex);

  return (
    <div className={cn("border-t border-line", className)}>
      <div className="flex items-end justify-between gap-4 py-6">
        <p className="font-display text-[clamp(1.8rem,4vw,2.8rem)] leading-none">
          {monthLabel(cursor.year, cursor.monthIndex)}
        </p>
        <div className="flex gap-5">
          <button
            type="button"
            className="meta disabled:opacity-30"
            disabled={!canPrev}
            onClick={() =>
              setCursor((current) =>
                current.monthIndex === 0
                  ? { year: current.year - 1, monthIndex: 11 }
                  : { year: current.year, monthIndex: current.monthIndex - 1 },
              )
            }
          >
            Prev
          </button>
          <button
            type="button"
            className="meta disabled:opacity-30"
            disabled={!canNext}
            onClick={() =>
              setCursor((current) =>
                current.monthIndex === 11
                  ? { year: current.year + 1, monthIndex: 0 }
                  : { year: current.year, monthIndex: current.monthIndex + 1 },
              )
            }
          >
            Next
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-y-1 pb-8">
        {weekdays.map((day) => (
          <p key={day} className="meta pb-4 text-center text-ink-faint">
            {day}
          </p>
        ))}
        {grid.flat().map((iso, index) => {
          if (!iso) {
            return <span key={`empty-${index}`} />;
          }
          const open = dateHasSlots(iso);
          const selected = iso === date;
          return (
            <button
              key={iso}
              type="button"
              disabled={!open}
              onClick={() => setDate(iso)}
              className={cn(
                "mx-auto flex h-11 w-11 items-center justify-center text-sm transition-colors",
                open ? "text-ink hover:text-accent" : "cursor-not-allowed text-ink-faint/35",
                selected && "bg-accent text-accent-ink hover:text-accent-ink",
              )}
            >
              {Number(iso.slice(-2))}
            </button>
          );
        })}
      </div>

      {date ? (
        <div className="flex flex-col gap-5 border-t border-line py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-ink-muted">{formatLongDate(date)}</p>
          <a
            href={booking.schedulerUrl}
            className="link-arrow inline-flex w-fit text-accent"
            data-cursor="talk"
            target="_blank"
            rel="noreferrer"
          >
            Confirm on Google Calendar
            <Arrow className="h-4 w-4" />
          </a>
        </div>
      ) : null}
    </div>
  );
}
