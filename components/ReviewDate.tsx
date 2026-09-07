'use client';

import { useEffect, useState } from 'react';
import { formatReviewAge } from '@/lib/reviews';

interface ReviewDateProps {
    publishedAt: string | null;
    /** Shown when there is no date at all, e.g. a Facebook recommendation. */
    fallback?: string;
}

/**
 * A review's age, correct both for crawlers and for visitors.
 *
 * The label is computed at build time so it is present in the served HTML,
 * which is what Google reads. But a static site is only as fresh as its last
 * deploy, and the weekly refresh only rebuilds when the reviews actually
 * change. So after hydration this recalculates against the visitor's real
 * clock. The first client render deliberately matches the server's, so there
 * is no hydration mismatch, and the correction lands a moment later.
 */
export default function ReviewDate({ publishedAt, fallback }: ReviewDateProps) {
    const buildTimeLabel = formatReviewAge(publishedAt) ?? fallback ?? null;
    const [label, setLabel] = useState(buildTimeLabel);

    useEffect(() => {
        setLabel(formatReviewAge(publishedAt) ?? fallback ?? null);
    }, [publishedAt, fallback]);

    if (!label) return null;
    return <>{label}</>;
}
