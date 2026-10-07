import reviewsData from '@/data/reviews.json';

/**
 * How confident we are in a review's date.
 *
 * - `exact`   pulled from a Google API, which returns a real timestamp.
 * - `derived` back-calculated from the relative string Google showed ("3 weeks
 *             ago") on the day it was copied across. Accurate to within a few
 *             days, which is plenty when the site only shows the month.
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
    /** Google's review id, so an automated import recognises one already on file. */
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

const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
];

/**
 * Renders a review's date as its month and year ("October 2026").
 *
 * The site used to show Google-style ages ("3 weeks ago"). Those are only
 * honest if something recomputes them, and a static site that rebuilds when
 * reviews change, not when time passes, can't. A month never goes stale, and
 * it is also all the accuracy a `derived` date can promise.
 *
 * Reads the year and month straight off the ISO string rather than through a
 * Date, so no timezone offset can shift a date-only value into the next or
 * previous month.
 */
export function formatReviewDate(publishedAt: string | null): string | null {
    if (!publishedAt) return null;
    const match = /^(\d{4})-(\d{2})/.exec(publishedAt);
    if (!match) return null;
    const month = Number(match[2]);
    if (month < 1 || month > 12) return null;
    return `${MONTHS[month - 1]} ${match[1]}`;
}
