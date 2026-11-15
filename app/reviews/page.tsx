import { ArrowUpRight, Check } from 'lucide-react';
import ReviewList from '@/components/ReviewList';
import Reveal from '@/components/Reveal';
import ClosingCTA from '@/components/ClosingCTA';
import { shareMeta } from '@/lib/share';
import { reviews, formatReviewDate, type Review } from '@/lib/reviews';
import { sentenceMatching, leadLine } from '@/lib/review-quotes';

export const metadata = {
    title: 'Customer Reviews | JPD Complete Electrical Adelaide',
    description: 'Read what our satisfied customers say about our electrical services. 5-star rated Adelaide electrician for residential and commercial projects.',
    alternates: {
        canonical: '/reviews',
    },
    ...shareMeta({
        title: 'Customer Reviews | JPD Complete Electrical Adelaide',
        description: 'Read what our satisfied customers say about our electrical services. 5-star rated Adelaide electrician for residential and commercial projects.',
        path: '/reviews/',
    }),
};

const google = reviews.filter((r) => r.source === 'Google');
const facebook = reviews.filter((r) => r.source === 'Facebook');
const allFive = google.every((r) => r.rating === 5);
const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? '' : 's'}`;

// The three set large above the list: one line each, found by what they say.
// If a phrase stops matching (a review is removed), the newest review not
// already used takes the slot, so the fold never comes up short.
const leadPatterns = [/above and beyond/i, /many years|for years/i, /takes pride/i];
const leads: { review: Review; quote: string }[] = [];
for (const pattern of leadPatterns) {
    const review = google.find((r) => pattern.test(r.content) && !leads.some((l) => l.review.id === r.id));
    const quote = review && sentenceMatching(review.content, pattern, 95);
    if (review && quote) leads.push({ review, quote });
}
for (const review of google) {
    if (leads.length >= 3) break;
    if (!leads.some((l) => l.review.id === review.id)) leads.push({ review, quote: leadLine(review.content, 95) });
}

export default function ReviewsPage() {
    return (
        <>
            {/* Hero: the count, and one star per review */}
            <section className="bg-navy text-white">
                <div className="container-custom py-14 md:py-24">
                    <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-16">
                        <div>
                            <p className="eyebrow eyebrow-on-dark mb-5">Reviews</p>
                            <h1 className="display text-6xl md:text-8xl">
                                <span className="text-gold">{reviews.length}</span> reviews. <span className="block">Every word.</span>
                            </h1>
                            <p className="mt-6 max-w-sm text-base leading-relaxed text-white/80 md:text-lg">
                                The {plural(google.length, 'Google review')} shown here {allFive ? 'are all five stars' : 'are rated as left'}
                                {facebook.length > 0 ? `, plus ${plural(facebook.length, 'recommendation')} on Facebook` : ''}. All{' '}
                                {reviews.length} are below, in full, newest first.
                            </p>
                        </div>
                        <div>
                            <ul className="grid grid-cols-8 gap-y-5" aria-hidden>
                                {reviews.map((review, i) => (
                                    <li
                                        key={review.id}
                                        className="group relative animate-fade-in flex items-center justify-center text-xl text-gold can-hover:cursor-help can-hover:hover:z-30"
                                        style={{ animationDelay: `${300 + i * 45}ms`, textShadow: '0 0 14px rgba(205,168,77,0.6)' }}
                                    >
                                        {review.source === 'Google' ? (
                                            '★'
                                        ) : (
                                            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/50 text-white">
                                                <Check className="h-3.5 w-3.5" />
                                            </span>
                                        )}
                                        {/* Desktop only: hovering a star shows the review it stands
                                            for. Shown only on a wide screen with a mouse (the can-hover
                                            screen in tailwind.config.ts): elsewhere a tap
                                            would leave it stuck open. It hangs below the star so
                                            the top row's card is not cut off by the header, and the
                                            right-hand columns open leftwards to stay on screen. */}
                                        <span
                                            className={`pointer-events-none absolute top-full z-30 mt-2 hidden w-72 rounded-xl bg-white p-4 text-left font-body shadow-2xl ring-1 ring-navy/10 can-hover:group-hover:block ${
                                                i % 8 >= 5 ? 'right-0' : i % 8 <= 1 ? 'left-0' : 'left-1/2 -translate-x-1/2'
                                            }`}
                                            style={{ textShadow: 'none' }}
                                        >
                                            <span className="block text-xs tracking-[0.2em] text-gold-dark">
                                                {review.source === 'Google' ? '★'.repeat(review.rating) : 'Recommended'}
                                            </span>
                                            <span className="mt-1.5 block text-sm leading-relaxed text-neutral-slate">
                                                {leadLine(review.content, 210)}
                                            </span>
                                            <span className="mt-2 block text-sm font-semibold text-navy">{review.author}</span>
                                            <span className="block text-xs text-neutral-slate">
                                                {review.source}
                                                {formatReviewDate(review.publishedAt) ? ` · ${formatReviewDate(review.publishedAt)}` : ''}
                                            </span>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <ul className="mt-6 space-y-1.5 text-xs text-white/60">
                                <li className="flex items-center gap-2">
                                    <span className="flex w-4 shrink-0 justify-center text-gold">★</span>
                                    <span>
                                        Each star is a {allFive ? 'five-star ' : ''}Google review
                                        <span className="hidden can-hover:inline">. Hover over one to read it</span>
                                    </span>
                                </li>
                                {facebook.length > 0 && (
                                    <li className="flex items-center gap-2">
                                        <span className="flex w-4 shrink-0 justify-center">
                                            <Check className="h-3 w-3" />
                                        </span>
                                        <span>Each tick is a Facebook recommendation</span>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Three to start with */}
            <section className="bg-white">
                <div className="container-custom py-14 md:py-24">
                    <div className="mx-auto max-w-5xl">
                        <p className="eyebrow mb-8 md:mb-12">Three to start with</p>
                        <div className="space-y-10 md:space-y-16">
                            {leads.map(({ review, quote }, i) => (
                                <Reveal key={review.id}>
                                    {/* Stepped across the page: left, right, middle. */}
                                    <blockquote className={`max-w-xl ${i === 1 ? 'md:ml-auto' : i === 2 ? 'md:ml-[12%]' : ''}`}>
                                        <p className="display text-3xl leading-tight text-navy md:text-5xl md:leading-[1.1]">{quote}</p>
                                        <footer className="mt-4 text-xs text-neutral-slate">
                                            <span className="font-semibold text-gold-dark">{review.author}</span>
                                            {' · '}
                                            {review.source} review
                                            {formatReviewDate(review.publishedAt) ? ` · ${formatReviewDate(review.publishedAt)}` : ''}
                                        </footer>
                                    </blockquote>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* All of them */}
            <section className="bg-neutral-offwhite">
                <div className="container-custom py-14 md:py-24">
                    <div className="mx-auto max-w-5xl">
                        <h2 className="display mb-8 text-4xl text-navy md:text-5xl">All {reviews.length}, newest first</h2>
                        <ReviewList reviews={reviews} />

                        <p className="mt-12 max-w-2xl border-t border-navy/10 pt-8 text-sm leading-relaxed text-neutral-slate">
                            <span className="font-heading text-base font-semibold text-navy">Had a great experience?</span> We would love
                            to hear about your experience with JPD Complete Electrical. Your feedback helps us improve and helps
                            others make informed decisions.{' '}
                            <a
                                href="https://g.page/r/CW2LCGVNt7qSEAI/review"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-dark"
                            >
                                Leave a Google review <ArrowUpRight className="h-4 w-4" />
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            <ClosingCTA />
        </>
    );
}
