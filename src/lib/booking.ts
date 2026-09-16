import { booking } from "@/data/booking";

const WEEKDAY_MONDAY_FIRST = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;

export function todayInTimeZone(timeZone = booking.timeZone): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

export function addCalendarDays(isoDate: string, days: number): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  const next = new Date(Date.UTC(year, month - 1, day + days));
  return next.toISOString().slice(0, 10);
}

export function earliestBookableDate(timeZone = booking.timeZone): string {
  let date = addCalendarDays(todayInTimeZone(timeZone), booking.minGapDays);
  while (isWeekend(date)) {
    date = addCalendarDays(date, 1);
  }
  return date;
}

export function latestBookableDate(timeZone = booking.timeZone): string {
  return addCalendarDays(earliestBookableDate(timeZone), booking.daysAhead - 1);
}

export function weekdayIndexMondayFirst(isoDate: string): number {
  const [year, month, day] = isoDate.split("-").map(Number);
  return (new Date(Date.UTC(year, month - 1, day)).getUTCDay() + 6) % 7;
}

export function isWeekend(isoDate: string): boolean {
  return weekdayIndexMondayFirst(isoDate) >= 5;
}

export function isSlotOpen(isoDate: string, time: string, timeZone = booking.timeZone): boolean {
  if (!booking.slots.includes(time as (typeof booking.slots)[number])) return false;
  if (isWeekend(isoDate)) return false;
  const min = earliestBookableDate(timeZone);
  const max = latestBookableDate(timeZone);
  return isoDate >= min && isoDate <= max;
}

export function dateHasSlots(isoDate: string, timeZone = booking.timeZone): boolean {
  return booking.slots.some((slot) => isSlotOpen(isoDate, slot, timeZone));
}

export function monthMatrix(year: number, monthIndex: number): Array<Array<string | null>> {
  const firstWeekday = (new Date(Date.UTC(year, monthIndex, 1)).getUTCDay() + 6) % 7;
  const daysInMonth = new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate();
  const cells: Array<string | null> = Array.from({ length: firstWeekday }, () => null);

  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(
      `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
    );
  }

  while (cells.length % 7 !== 0) cells.push(null);

  const rows: Array<Array<string | null>> = [];
  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7));
  }
  return rows;
}

export function monthLabel(year: number, monthIndex: number): string {
  return new Date(Date.UTC(year, monthIndex, 1)).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export const weekdays = WEEKDAY_MONDAY_FIRST;

export function formatClock(time: string): string {
  const [hour, minute] = time.split(":").map(Number);
  const date = new Date(Date.UTC(2000, 0, 1, hour, minute));
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hourCycle: "h12",
    timeZone: "UTC",
  }).format(date);
}

export function formatLongDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
