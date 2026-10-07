import { formatReviewDate } from '@/lib/reviews';

interface ReviewDateProps {
    publishedAt: string | null;
    /** Shown when there is no date at all, e.g. a Facebook recommendation. */
    fallback?: string;
}

/**
 * A review's month and year, e.g. "October 2026".
 *
 * This used to be a client component that re-derived a "3 weeks ago" label
 * against the visitor's clock after hydration, because a static label of that
 * kind goes stale between deploys. A month label can't go stale, so it is
 * rendered once at build time and left alone.
 */
export default function ReviewDate({ publishedAt, fallback }: ReviewDateProps) {
    const label = formatReviewDate(publishedAt) ?? fallback ?? null;
    if (!label) return null;
    return <>{label}</>;
}
