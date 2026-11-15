import Image from 'next/image';
import ClosingCTA from '@/components/ClosingCTA';
import { shareMeta } from '@/lib/share';
import { reviews, formatReviewDate } from '@/lib/reviews';
import { reviewsMentioning } from '@/lib/review-quotes';

export const metadata = {
    title: 'About Justin | Licensed Adelaide Electrician | JPD',
    description: 'Meet Justin, your local licensed electrician (PGE296191). Committed to reliability, honesty, and professional electrical services across Adelaide.',
    alternates: {
        canonical: '/about',
    },
    ...shareMeta({
        title: 'About Justin | Licensed Adelaide Electrician | JPD',
        description: 'Meet Justin, your local licensed electrician (PGE296191). Committed to reliability, honesty, and professional electrical services across Adelaide.',
        path: '/about/',
    }),
};

// Each promise is set beside a line from a review that speaks to it, found by
// what the review says rather than picked by hand. A promise with no matching
// review simply shows no quote.
const values = [
    {
        name: 'Reliability',
        promise: 'Show up on time, every time. Complete work to schedule and budget.',
        pattern: /on time|punctual|arrived|when he said/i,
    },
    {
        name: 'Integrity',
        promise: 'Honest, transparent, and accountable in everything we do.',
        pattern: /honest|transparent|upfront|no surprises/i,
    },
    {
        name: 'Safety',
        promise: 'A massive value for our customers and staff. We prioritise safety above all else.',
        pattern: /\bsafe/i,
    },
].map((value) => ({ ...value, proof: reviewsMentioning(reviews, value.pattern, 1, 150)[0] }));

// The thing reviewers keep bringing up without being asked: he turns up when
// he says he will, and he answers quickly.
const ON_TIME = /on time|punctual|prompt|arrived (exactly )?when|when he said/i;
const onTimeCount = reviews.filter((r) => ON_TIME.test(r.content)).length;
const onTimeQuotes = reviewsMentioning(reviews, ON_TIME, 3, 240);

const credentials = [
    ['Public liability', 'Fully covered'],
    ['Professional indemnity', 'Fully covered'],
    ['Industry', 'NECA member'],
];

export default function AboutPage() {
    return (
        <>
            {/* Hero. The photo is a framed portrait beside the heading, not a
                full-bleed background: as a background it was cropped by whatever
                shape the window was, which put the face dead centre with the top
                of the head cut off. In a frame it is the same crop on every screen. */}
            <section className="bg-navy text-white">
                <div className="container-custom py-10 md:py-20">
                    <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[6fr_5fr] md:gap-16">
                        <div>
                            <p className="eyebrow eyebrow-on-dark mb-5">About JPD Complete Electrical</p>
                            <h1 className="display text-[22vw] leading-[0.85] md:text-[clamp(5.5rem,10vw,9.5rem)]">
                                Meet <span className="block">Justin<span className="text-gold">.</span></span>
                            </h1>
                            <p className="mt-6 font-heading text-lg text-white/90 md:text-xl">Professional. Reliable. Trusted.</p>
                            <p className="mt-2 text-sm text-white/60">Justin Debeljevic · Owner and licensed electrician</p>
                        </div>
                        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
                            <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl bg-gold/30" aria-hidden />
                            <div className="relative aspect-[7/8] overflow-hidden rounded-2xl bg-navy-deep shadow-2xl">
                                <Image
                                    src="/images/justin_portrait_new.webp"
                                    alt="Justin Debeljevic, owner and licensed electrician at JPD Complete Electrical"
                                    fill
                                    priority
                                    quality={100}
                                    sizes="(max-width: 768px) 100vw, 460px"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Justin's story */}
            <section className="bg-white">
                <div className="container-custom py-14 md:py-24">
                    <div className="mx-auto max-w-5xl">
                        <p className="display max-w-4xl text-3xl leading-tight text-navy md:text-5xl md:leading-[1.12]">
                            With 7+ years of experience in the electrical industry, I founded JPD Complete Electrical with a
                            simple mission: to provide honest, reliable electrical services that exceed expectations.
                        </p>
                        <div className="mt-10 grid items-center gap-8 md:mt-14 md:grid-cols-[2fr_3fr] md:gap-16">
                            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy">
                                <Image
                                    src="/images/justin_meter_box_switchboard.webp"
                                    alt="Justin working on a switchboard in a meter box"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 400px"
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <div className="max-w-xl space-y-5 text-base leading-relaxed text-neutral-slate md:text-lg">
                                    <p>
                                        As a fully qualified and licensed electrician, I take pride in delivering clean, professional
                                        workmanship across residential, commercial, and specialised sectors including medical clinics
                                        and disability housing.
                                    </p>
                                    <p>
                                        What sets JPD apart is my commitment to clear communication and customer satisfaction.
                                        Every job, big or small, receives the same level of attention to detail and professionalism.
                                    </p>
                                    <p>
                                        I believe in building long-term relationships with my clients through quality work,
                                        fair pricing, and dependable service you can trust.
                                    </p>
                                </div>
                                <div className="mt-8 flex items-center gap-4 border-t border-navy/10 pt-6">
                                    <div className="relative h-8 w-28 shrink-0">
                                        <Image
                                            src="/Side By Side Blue Logo Transparent Background.png"
                                            alt=""
                                            fill
                                            sizes="112px"
                                            className="object-contain object-left"
                                        />
                                    </div>
                                    <p className="text-sm leading-snug">
                                        <span className="block font-semibold text-navy">Justin Debeljevic</span>
                                        <span className="text-neutral-slate">Owner, JPD Complete Electrical</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & values, each beside what a reviewer said */}
            <section className="bg-warm-50">
                <div className="container-custom py-14 md:py-24">
                    <div className="mx-auto max-w-5xl">
                        <p className="eyebrow mb-5">Our mission &amp; values</p>
                        <h2 className="display text-3xl text-navy md:text-5xl">
                            What he promises. <span className="block">What reviewers saw.</span>
                        </h2>
                        <dl className="mt-10 md:mt-14">
                            {values.map(({ name, promise, proof }) => (
                                <div key={name} className="grid gap-3 border-t border-navy/10 py-8 md:grid-cols-[2fr_3fr] md:gap-16 md:py-10">
                                    <dt className="display text-4xl text-navy md:text-6xl">{name}</dt>
                                    <dd>
                                        <p className="font-heading text-lg font-medium leading-snug text-navy md:text-xl">{promise}</p>
                                        {proof && (
                                            <blockquote className="mt-4 border-l-2 border-gold pl-4">
                                                <p className="text-sm leading-relaxed text-neutral-slate">{proof.quote}</p>
                                                <footer className="mt-1.5 text-xs text-neutral-slate">
                                                    <span className="font-semibold text-gold-dark">{proof.review.author}</span>
                                                    {' · '}
                                                    {proof.review.source} review
                                                    {formatReviewDate(proof.review.publishedAt) ? ` · ${formatReviewDate(proof.review.publishedAt)}` : ''}
                                                </footer>
                                            </blockquote>
                                        )}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </section>

            {/* The pattern in the reviews */}
            <section className="bg-navy text-white">
                <div className="container-custom py-14 md:py-24">
                    <div className="mx-auto max-w-5xl">
                        <div className="grid gap-5 md:grid-cols-2 md:items-end md:gap-16">
                            <div>
                                <p className="eyebrow eyebrow-on-dark mb-5">The pattern</p>
                                <h2 className="display text-4xl md:text-6xl">{onTimeCount} reviewers noticed the same thing.</h2>
                            </div>
                            <p className="text-base leading-relaxed text-white/75 md:text-lg">
                                Each one mentioned Justin turning up when he said he would, or getting back to them quickly.
                            </p>
                        </div>
                        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-3">
                            {onTimeQuotes.map(({ review, quote }) => (
                                <blockquote key={review.id} className="border-t border-white/15 pt-5">
                                    <p className="font-heading text-lg leading-snug text-white/90">{quote}</p>
                                    <footer className="mt-4 text-xs text-white/50">
                                        <span className="block font-semibold text-gold">{review.author}</span>
                                        {review.source} review
                                        {formatReviewDate(review.publishedAt) ? ` · ${formatReviewDate(review.publishedAt)}` : ''}
                                    </footer>
                                </blockquote>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Licences & insurance */}
            <section className="bg-neutral-offwhite">
                <div className="container-custom py-14 md:py-24">
                    <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[3fr_2fr] md:items-center md:gap-16">
                        <div>
                            <p className="eyebrow mb-5">Licences &amp; insurance</p>
                            <p className="display text-[15vw] leading-none text-gold-dark md:text-8xl">PGE296191</p>
                            <p className="mt-5 max-w-sm text-base leading-relaxed text-neutral-slate md:text-lg">
                                Fully licensed electrician. Licensed in South Australia and fully insured for your peace of mind.
                            </p>
                        </div>
                        <dl>
                            {credentials.map(([term, value]) => (
                                <div key={term} className="flex items-baseline justify-between gap-6 border-b border-navy/10 py-4 text-sm">
                                    <dt className="text-neutral-slate">{term}</dt>
                                    <dd className="font-semibold text-navy">{value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </section>

            <ClosingCTA />
        </>
    );
}
