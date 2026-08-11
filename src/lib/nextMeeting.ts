import IcalExpander from 'ical-expander';

const ICS_URL =
  'https://calendar.google.com/calendar/ical/166e17bb8c23405f6db9eb5001f755c54f0e146dab05431e226a502213c161b6%40group.calendar.google.com/public/basic.ics';

const HALIFAX_TZ = 'America/Halifax';
const LOOKAHEAD_DAYS = 180;
const CANCELLED_PREFIX = /^no\b/i;

export interface NextMeeting {
  month: string;
  day: string;
  weekday: string;
  timeLabel: string;
  countdown: string;
  start: Date;
  end: Date;
}

function formatMonth(d: Date): string {
  return new Intl.DateTimeFormat('en-US', { timeZone: HALIFAX_TZ, month: 'short' }).format(d);
}

function formatDay(d: Date): string {
  return new Intl.DateTimeFormat('en-US', { timeZone: HALIFAX_TZ, day: 'numeric' }).format(d);
}

function formatWeekday(d: Date): string {
  return new Intl.DateTimeFormat('en-US', { timeZone: HALIFAX_TZ, weekday: 'long' }).format(d);
}

function halifaxDateKey(d: Date): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: HALIFAX_TZ,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(d);
}

function daysUntil(now: Date, target: Date): number {
  const a = new Date(`${halifaxDateKey(now)}T00:00:00Z`).getTime();
  const b = new Date(`${halifaxDateKey(target)}T00:00:00Z`).getTime();
  return Math.round((b - a) / 86_400_000);
}

function formatCountdown(days: number): string {
  if (days <= 0) return 'Today';
  if (days === 1) return 'Tomorrow';
  return `In ${days} days`;
}

function period(d: Date): string | undefined {
  return new Intl.DateTimeFormat('en-US', { timeZone: HALIFAX_TZ, hour: 'numeric', hour12: true })
    .formatToParts(d)
    .find((p) => p.type === 'dayPeriod')?.value;
}

function formatTime(d: Date, withPeriod: boolean): string {
  const formatted = new Intl.DateTimeFormat('en-US', {
    timeZone: HALIFAX_TZ,
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(d);
  return withPeriod ? formatted : formatted.replace(/\s?[AP]M$/, '');
}

function formatTimeRange(start: Date, end: Date): string {
  const samePeriod = period(start) === period(end);
  return `${formatTime(start, !samePeriod)}–${formatTime(end, true)}`;
}

export async function getNextMeeting(): Promise<NextMeeting | null> {
  try {
    const res = await fetch(ICS_URL);
    if (!res.ok) return null;
    const ics = await res.text();

    const expander = new IcalExpander({ ics, maxIterations: 1000 });
    const now = new Date();
    const rangeEnd = new Date(now.getTime() + 1000 * 60 * 60 * 24 * LOOKAHEAD_DAYS);
    const { events, occurrences } = expander.between(now, rangeEnd);

    const candidates = [
      ...events.map((e: any) => ({ start: e.startDate.toJSDate(), end: e.endDate.toJSDate(), summary: e.summary as string })),
      ...occurrences.map((o: any) => ({ start: o.startDate.toJSDate(), end: o.endDate.toJSDate(), summary: o.item.summary as string })),
    ]
      .filter((e) => e.start.getTime() >= now.getTime() && !CANCELLED_PREFIX.test(e.summary ?? ''))
      .sort((a, b) => a.start.getTime() - b.start.getTime());

    const next = candidates[0];
    if (!next) return null;

    return {
      month: formatMonth(next.start),
      day: formatDay(next.start),
      weekday: formatWeekday(next.start),
      timeLabel: formatTimeRange(next.start, next.end),
      countdown: formatCountdown(daysUntil(now, next.start)),
      start: next.start,
      end: next.end,
    };
  } catch {
    return null;
  }
}
