import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';

const PHONE = '0435 006 420';
const PHONE_HREF = 'tel:0435006420';

interface InlineCTAProps {
    heading: string;
    body?: string;
    /** Where the secondary button goes. Defaults to the contact form. */
    quoteHref?: string;
    quoteLabel?: string;
    /** Light sits on white sections, dark on off-white ones, so it never blends in. */
    tone?: 'dark' | 'gold';
    /**
     * Renders as a rounded card instead of a full-bleed band. Used inside article
     * bodies, which already sit in a constrained column — a nested container-custom
     * would double the horizontal padding.
     */
    boxed?: boolean;
}

/**
 * Mid-page conversion prompt for long pages.
 *
 * Measured on a suburb page at 375px: the page runs 12,700px, and there was a
 * 7,300px stretch — about nine phone screens — between the hero buttons and the
 * next chance to act, covering the local-relevance copy and the service grid.
 * That is the part of the page doing the persuading, and a reader who decided
 * halfway through had nothing to tap.
 *
 * Mobile specifics that matter here:
 * - Buttons are full width and stacked, so neither is a small target.
 * - min-h-[52px] keeps both above the ~48px touch-target guidance.
 * - Phone is the primary action, because for a trade the conversion is a call.
 * - No fixed positioning: the sticky bar already owns the bottom of the screen
 *   and a second floating element would fight it.
 */
export default function InlineCTA({
    heading,
    body,
    quoteHref = '/contact',
    quoteLabel = 'Get a Free Quote',
    tone = 'dark',
    boxed = false,
}: InlineCTAProps) {
    const isGold = tone === 'gold';

    return (
        <section
            className={`${isGold ? 'bg-gold' : 'bg-navy'} ${boxed ? 'rounded-xl my-10' : ''}`}
            aria-label="Contact JPD Complete Electrical"
        >
            <div className={boxed ? 'px-6 py-7 md:px-8' : 'container-custom py-8 md:py-10'}>
                {/*
                    Boxed always stacks. Side by side inside an article column gave the
                    two nowrap buttons about 590px and crushed the heading into a 150px
                    ribbon five lines tall. The full-bleed band has the width for a row,
                    but only from lg, and the text still needs min-w-0 so a long button
                    label cannot squeeze it again.
                */}
                <div
                    className={`max-w-5xl mx-auto ${
                        boxed ? '' : 'lg:flex lg:items-center lg:justify-between lg:gap-8'
                    }`}
                >
                    <div className={`mb-5 min-w-0 ${boxed ? '' : 'lg:mb-0'}`}>
                        <h2 className={`text-xl md:text-2xl font-bold ${isGold ? 'text-navy' : 'text-white'}`}>
                            {heading}
                        </h2>
                        {body && (
                            <p className={`mt-2 leading-relaxed ${isGold ? 'text-navy/80' : 'text-white/80'}`}>
                                {body}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:flex-wrap lg:flex-nowrap lg:shrink-0">
                        <a
                            href={PHONE_HREF}
                            className={`inline-flex items-center justify-center gap-2 min-h-[52px] px-6 rounded-lg font-bold text-lg whitespace-nowrap active:scale-95 transition-transform ${
                                isGold ? 'bg-navy text-white' : 'bg-gold text-navy'
                            }`}
                        >
                            <Phone className="w-5 h-5 shrink-0" />
                            {PHONE}
                        </a>
                        <Link
                            href={quoteHref}
                            className={`inline-flex items-center justify-center gap-2 min-h-[52px] px-6 rounded-lg font-bold text-lg whitespace-nowrap border-2 active:scale-95 transition-transform ${
                                isGold
                                    ? 'border-navy text-navy hover:bg-navy hover:text-white'
                                    : 'border-white text-white hover:bg-white hover:text-navy'
                            }`}
                        >
                            {quoteLabel}
                            <ArrowRight className="w-4 h-4 shrink-0" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
