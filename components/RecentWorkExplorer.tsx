'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, X } from 'lucide-react';
import { useState } from 'react';
import SuburbMap, { MapCredit } from '@/components/SuburbMap';

export interface ExplorerJob {
    slug: string;
    title: string;
    image: string;
    /** Suburb or area the job was in, as written in its title. */
    place: string;
    /** Work category slugs this job belongs to. */
    categories: string[];
}

interface RecentWorkExplorerProps {
    jobs: ExplorerJob[];
    categories: { slug: string; label: string; name: string }[];
    /** Places drawn on the map. Jobs anywhere else are listed as "further afield". */
    mapped: string[];
}

/**
 * The recent-work index: a map lit by how many jobs are written up in each
 * suburb, and every job beside it. Tapping a suburb or a kind of work filters
 * the list in place. Every job is in the page source whatever the filter.
 */
export default function RecentWorkExplorer({ jobs, categories, mapped }: RecentWorkExplorerProps) {
    const [place, setPlace] = useState<string | null>(null);
    const [category, setCategory] = useState<string | null>(null);

    const counts: Record<string, number> = {};
    for (const job of jobs) counts[job.place] = (counts[job.place] ?? 0) + 1;
    const onMap = mapped.filter((name) => counts[name]);
    const most = Math.max(...onMap.map((name) => counts[name]));
    const afield = Object.keys(counts).filter((name) => !mapped.includes(name)).sort();
    const afieldJobs = afield.reduce((sum, name) => sum + counts[name], 0);

    const lit = Object.fromEntries(onMap.map((name) => [name, 0.35 + 0.65 * (counts[name] / most)]));
    const labels = Object.fromEntries(onMap.map((name) => [name, `${name} ${counts[name]}`]));

    const shown = jobs.filter(
        (job) =>
            (!category || job.categories.includes(category)) &&
            (!place || (place === 'afield' ? afield.includes(job.place) : job.place === place))
    );

    const activeCategory = categories.find((c) => c.slug === category);
    const placeLabel = place === 'afield' ? 'further afield' : place ? `in ${place}` : '';
    const heading =
        !place && !category
            ? `All ${jobs.length} jobs, newest first`
            : `${shown.length} ${activeCategory ? activeCategory.name.toLowerCase() + ' ' : ''}${shown.length === 1 ? 'job' : 'jobs'} ${placeLabel}`.trim();

    const tab = (active: boolean) =>
        `whitespace-nowrap border-b-2 pb-1.5 text-sm transition-colors ${
            active ? 'border-gold font-semibold text-navy' : 'border-transparent text-neutral-slate hover:text-navy'
        }`;

    return (
        <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
            <div>
                <div className="lg:sticky lg:top-32">
                    <SuburbMap
                        title="Map of the suburbs with written-up JPD jobs, brighter where there are more"
                        frame={[...onMap, 'Wynn Vale']}
                        named={onMap}
                        lit={lit}
                        labels={labels}
                        labelScale={0.78}
                        selected={place && place !== 'afield' ? place : null}
                        onSelect={(name) => setPlace((current) => (current === name ? null : name))}
                        className="shadow-xl"
                    />
                    <p className="mt-3 text-xs leading-relaxed text-neutral-slate">
                        Lit suburbs have written-up jobs; brighter means more. Tap one to see its jobs. The ring is our Wynn Vale
                        base.
                    </p>
                    <MapCredit className="mt-1 text-neutral-slate/70" />
                    {afield.length > 0 && (
                        <button
                            type="button"
                            onClick={() => setPlace((current) => (current === 'afield' ? null : 'afield'))}
                            aria-pressed={place === 'afield'}
                            className={`mt-4 flex w-full items-start gap-3 rounded-xl border p-3.5 text-left transition-colors ${
                                place === 'afield' ? 'border-gold bg-gold/10' : 'border-navy/10 bg-white hover:border-navy/30'
                            }`}
                        >
                            <span className="font-heading text-lg font-semibold leading-none text-gold-dark">+{afieldJobs}</span>
                            <span className="text-xs leading-relaxed text-neutral-slate">
                                <span className="block font-semibold text-navy">jobs further afield</span>
                                {afield.join(', ')}
                            </span>
                        </button>
                    )}
                </div>
            </div>

            <div>
                <p className="eyebrow mb-5">Lit where they happened</p>
                <h1 className="display text-5xl text-navy md:text-7xl">Recent work</h1>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-neutral-slate">
                    {jobs.length} real jobs from around Adelaide, written up with photos of what was there before and what it looked
                    like when we left. Pick the kind of work you are after.
                </p>

                <div className="-mx-4 mt-7 overflow-x-auto px-4 sm:mx-0 sm:px-0">
                    <div className="flex gap-5" role="group" aria-label="Filter by kind of work">
                        <button type="button" className={tab(!category)} aria-pressed={!category} onClick={() => setCategory(null)}>
                            All work
                        </button>
                        {categories.map((c) => (
                            <button
                                key={c.slug}
                                type="button"
                                className={tab(category === c.slug)}
                                aria-pressed={category === c.slug}
                                onClick={() => setCategory(c.slug)}
                            >
                                {c.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-2">
                    <h2 className="font-heading text-xl font-semibold text-navy" aria-live="polite">
                        {heading}
                    </h2>
                    {(place || category) && (
                        <button
                            type="button"
                            onClick={() => {
                                setPlace(null);
                                setCategory(null);
                            }}
                            className="inline-flex items-center gap-1 text-sm text-neutral-slate underline underline-offset-4 hover:text-navy"
                        >
                            <X className="h-3.5 w-3.5" /> Show all
                        </button>
                    )}
                    {activeCategory && (
                        <Link
                            href={`/recent-work/${activeCategory.slug}`}
                            className="inline-flex items-center gap-1 text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-dark"
                        >
                            More on {activeCategory.name.toLowerCase()} <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                    )}
                </div>

                {shown.length === 0 && (
                    <p className="mt-6 text-sm text-neutral-slate">
                        Nothing written up for that combination yet. We still do the work there: give Justin a call on{' '}
                        <a href="tel:0435006420" className="font-semibold text-navy underline">
                            0435 006 420
                        </a>
                        .
                    </p>
                )}

                <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-7 md:grid-cols-3">
                    {jobs.map((job) => (
                        <li key={job.slug} className={shown.includes(job) ? '' : 'hidden'}>
                            <Link href={`/blog/${job.slug}`} className="group block">
                                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-navy-deep">
                                    <Image
                                        src={job.image}
                                        alt=""
                                        fill
                                        sizes="(max-width: 768px) 50vw, 240px"
                                        loading="lazy"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-dark">{job.place}</p>
                                <h3 className="mt-1 font-heading text-[15px] font-semibold leading-snug tracking-normal text-navy group-hover:underline">
                                    {job.title}
                                </h3>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
