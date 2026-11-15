'use client';

// A client component only because the suburb data it reads lives in SuburbMap,
// which is one. Nothing here holds state.
import Link from 'next/link';
import SuburbMap, { MapCredit, PAGE_SUBURBS, suburbShapes } from '@/components/SuburbMap';

interface WhereWeWorkProps {
    /** Suburb name to its page, for the map and the list under the copy. */
    hrefs: Record<string, string>;
}

// Nearest to Wynn Vale first, for the list of suburb pages under the copy.
const ORDER = suburbShapes
    .filter((s) => PAGE_SUBURBS.includes(s.name))
    .sort((a, b) => a.km - b.km)
    .map((s) => s.name);

const EVERY_SUBURB = suburbShapes.map((s) => s.name);

/**
 * "Wynn Vale based. All of Adelaide." A still map: Wynn Vale in gold, and every
 * suburb drawn carries its name, not only the fifteen with a page, so it reads
 * as the area we work in rather than a short list. The fifteen are links.
 *
 * It used to light up suburb by suburb on scroll. Justin found that didn't
 * come across as working (15 Nov 2026), so nothing here moves.
 */
export default function WhereWeWork({ hrefs }: WhereWeWorkProps) {
    return (
        <section className="bg-navy text-white">
            <div className="container-custom py-14 md:py-24">
                <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[4fr_6fr] lg:gap-14">
                    <div>
                        <p className="eyebrow eyebrow-on-dark mb-5">Where we work</p>
                        <h2 className="display text-4xl md:text-6xl">
                            Wynn Vale based. <span className="block text-white/55">All of Adelaide.</span>
                        </h2>
                        <p className="mt-5 max-w-md text-base leading-relaxed text-white/75 md:text-lg">
                            The north-east is where we work most days and where we can usually get to you fastest. We take jobs right
                            across the metro area too.
                        </p>
                        <ul className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                            {ORDER.map((name) => (
                                <li key={name}>
                                    <Link href={hrefs[name]} className="text-white/70 underline decoration-white/25 underline-offset-4 transition-colors hover:text-gold">
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link href="/service-areas" className="pill pill-ghost-dark mt-7">
                            All areas
                        </Link>
                    </div>

                    <div>
                        <SuburbMap
                            title="Map of the Adelaide suburbs JPD works in most, with Wynn Vale highlighted"
                            frame={EVERY_SUBURB}
                            labelled={EVERY_SUBURB}
                            selected="Wynn Vale"
                            hrefs={hrefs}
                        />
                        <MapCredit className="mt-2 text-white/40" />
                    </div>
                </div>
            </div>
        </section>
    );
}
