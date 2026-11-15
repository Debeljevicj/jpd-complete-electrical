'use client';

import { useState } from 'react';
import { formatReviewDate, type Review } from '@/lib/reviews';

interface ReviewListProps {
    reviews: Review[];
    /** How many show before "Show the other N reviews". */
    initial?: number;
}

const LONG = 230;

/**
 * Every review in full, newest first. The first dozen show; the rest are in
 * the page source from the start (hidden, not fetched), so the button only
 * reveals them and search engines read all of them either way.
 */
export default function ReviewList({ reviews, initial = 12 }: ReviewListProps) {
    const [showAll, setShowAll] = useState(false);
    const [open, setOpen] = useState<Set<number>>(new Set());
    const rest = reviews.length - initial;

    const toggle = (id: number) =>
        setOpen((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });

    return (
        <>
            <ul className="grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
                {reviews.map((review, i) => {
                    const long = review.content.length > LONG;
                    const expanded = open.has(review.id);
                    const date = formatReviewDate(review.publishedAt);
                    return (
                        <li key={review.id} className={`flex-col border-t border-navy/10 py-7 ${!showAll && i >= initial ? 'hidden' : 'flex'}`}>
                            <p className="text-sm tracking-[0.25em] text-gold-dark" aria-label={`${review.rating} out of 5 stars`}>
                                {'★'.repeat(review.rating)}
                            </p>
                            <p className={`mt-3 text-[15px] leading-relaxed text-neutral-slate ${long && !expanded ? 'line-clamp-4' : ''}`}>
                                {review.content}
                            </p>
                            {long && (
                                <button
                                    type="button"
                                    onClick={() => toggle(review.id)}
                                    aria-expanded={expanded}
                                    className="mt-2 self-start text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-dark"
                                >
                                    {expanded ? 'Show less' : 'Read more'}
                                </button>
                            )}
                            <p className="mt-auto pt-4 font-heading font-semibold text-navy">{review.author}</p>
                            <p className="text-xs text-neutral-slate">
                                {review.source}
                                {date ? ` · ${date}` : review.source === 'Facebook' ? ' · Recommended' : ''}
                            </p>
                        </li>
                    );
                })}
            </ul>
            {!showAll && rest > 0 && (
                <button type="button" onClick={() => setShowAll(true)} className="pill pill-ghost-light mt-4 w-full sm:w-auto">
                    Show the other {rest} reviews
                </button>
            )}
        </>
    );
}
