import reviewsData from '@/data/reviews.json';

/**
 * How confident we are in a review's date.
 *
 * - `exact`   pulled from the Google Places API, which returns a real timestamp.
 * - `derived` back-calculated from the relative string ("3 weeks ago") that was
 *             hardcoded at the time, offset against the git commit that added
 *             it. Accurate to within a few days, not to the hour.
 * - `unknown` no date available. Facebook recommendations carry no timestamp.
 */
export type DatePrecision = 'exact' | 'derived' | 'unknown';

export interface Review {
    id: number;
    author: string;
    source: 'Google' | 'Facebook';
    rating: number;
    /** ISO date (YYYY-MM-DD) or full ISO timestamp. Null when genuinely unknown. */
    publishedAt: string | null;
    precision: DatePrecision;
    content: string;
    avatarColor: string;
    /** Places API resource name, so re-runs recognise a review already imported. */
    googleReviewId: string | null;
}

/**
 * Reviews, newest first.
 *
 * The order used to be maintained by hand, and the carousel called `.reverse()`
 * on it to approximate "newest first". Sorting on a real date means neither the
 * data file nor the components need to care about ordering again.
 */
export const reviews: Review[] = (reviewsData as Review[]).slice().sort((a, b) => {
    if (!a.publishedAt && !b.publishedAt) return a.id - b.id;
    if (!a.publishedAt) return 1;
    if (!b.publishedAt) return -1;
    return b.publishedAt.localeCompare(a.publishedAt) || a.id - b.id;
});

export const averageRating =
    Math.round((reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length) * 10) / 10;

export const reviewCount = reviews.length;

const MINUTE = 60_000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
const MONTH = 30.44 * DAY;
const YEAR = 365.25 * DAY;

/**
 * Renders a review's age the way Google phrases it ("3 weeks ago").
 *
 * This is computed rather than stored. The old data hardcoded the string, so
 * "1 hour ago" stayed "1 hour ago" for two months and every visitor saw a date
 * that was plainly wrong. Passing `now` in keeps it testable.
 */
export function formatReviewAge(publishedAt: string | null, now: Date = new Date()): string | null {
    if (!publishedAt) return null;

    // Date-only values are anchored at midday so a timezone offset cannot push
    // them across a day boundary and report "in 4 hours" for something today.
    const iso = /^\d{4}-\d{2}-\d{2}$/.test(publishedAt) ? `${publishedAt}T12:00:00Z` : publishedAt;
    const then = new Date(iso).getTime();
    if (Number.isNaN(then)) return null;

    const delta = now.getTime() - then;
    if (delta < 0) return 'just now';

    if (delta < HOUR) return 'just now';
    if (delta < DAY) {
        const hours = Math.floor(delta / HOUR);
        return hours === 1 ? 'an hour ago' : `${hours} hours ago`;
    }
    if (delta < WEEK) {
        const days = Math.floor(delta / DAY);
        return days === 1 ? 'a day ago' : `${days} days ago`;
    }
    if (delta < MONTH) {
        const weeks = Math.floor(delta / WEEK);
        return weeks === 1 ? 'a week ago' : `${weeks} weeks ago`;
    }
    if (delta < YEAR) {
        const months = Math.max(1, Math.floor(delta / MONTH));
        return months === 1 ? 'a month ago' : `${months} months ago`;
    }
    const years = Math.floor(delta / YEAR);
    return years === 1 ? 'a year ago' : `${years} years ago`;
}
