import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { suburbs } from '@/data/suburbs';

/**
 * Home page service-area block.
 *
 * Deliberately worded so the north-east reads as where we are fastest, not as a
 * boundary. JPD services all of Adelaide and the copy should not talk anyone out
 * of calling because their suburb is not in the list.
 */
export default function HomeServiceAreas() {
    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="max-w-3xl mb-8">
                    <div className="inline-flex items-center gap-2 bg-neutral-offwhite px-3 py-1.5 rounded-full border border-gray-200 mb-4">
                        <MapPin className="w-4 h-4 text-gold" />
                        <span className="text-xs font-semibold tracking-wide uppercase text-navy">
                            Based in Wynn Vale
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 gold-underline">
                        What Areas Do We Service?
                    </h2>
                    <p className="text-neutral-slate text-lg leading-relaxed mb-4">
                        All of Adelaide. We are based in Wynn Vale, so the north-east is where we work most days and
                        where we can usually get to you fastest, but we take jobs right across the metro area and into
                        regional South Australia when it makes sense.
                    </p>
                    <p className="text-neutral-slate text-lg leading-relaxed">
                        These are the suburbs we are in most often. Each one has a page covering the housing stock and
                        the electrical work that actually comes up there.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                    {suburbs.map((suburb) => (
                        <Link
                            key={suburb.slug}
                            href={`/${suburb.slug}`}
                            className="px-4 py-2 bg-neutral-offwhite rounded-full border border-gray-200 text-sm text-navy font-semibold hover:border-gold hover:text-gold transition-colors"
                        >
                            {suburb.name}
                        </Link>
                    ))}
                </div>

                <div className="bg-neutral-offwhite rounded-xl p-6 md:p-8 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                    <p className="text-neutral-slate leading-relaxed">
                        <span className="font-bold text-navy">Not on the list?</span> That is not a boundary, it is just
                        where we are most often. Give us a ring and we will tell you straight away whether we can get to
                        you.
                    </p>
                    <Link
                        href="/service-areas"
                        className="inline-flex items-center gap-2 text-navy font-bold underline underline-offset-4 hover:text-gold transition-colors whitespace-nowrap"
                    >
                        See all areas
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
