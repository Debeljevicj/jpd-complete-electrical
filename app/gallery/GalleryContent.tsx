'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ClosingCTA from '@/components/ClosingCTA';
import { ArrowRight, X, ZoomIn, Instagram } from 'lucide-react';

export interface GalleryPhoto {
    src: string;
    /** Shown on the tile and under the photo when it is opened. */
    title: string;
    alt: string;
    /** Filter this photo sits under. */
    kind: string;
    /** Suburb or area, for photos that come from a job write-up. */
    place?: string;
    /** The write-up the photo belongs to. */
    job?: { href: string; title: string };
}

interface GalleryContentProps {
    photos: GalleryPhoto[];
    /** Filter names, in order, without "All". */
    kinds: string[];
    jobCount: number;
}

const PAGE = 24;

/**
 * The gallery: every photo from the job write-ups, plus the older project
 * photos that have no write-up. The list is built in app/gallery/page.tsx from
 * data/job-reports.ts, so a new write-up's photos turn up here on their own.
 *
 * Shows 24 at a time. The rest are added by the button rather than all loaded
 * at once, because there are a couple of hundred of them.
 */
export default function GalleryContent({ photos, kinds, jobCount }: GalleryContentProps) {
    const [kind, setKind] = useState('All');
    const [limit, setLimit] = useState(PAGE);
    const [open, setOpen] = useState<GalleryPhoto | null>(null);

    const filtered = kind === 'All' ? photos : photos.filter((p) => p.kind === kind);
    const shown = filtered.slice(0, limit);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(null);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open]);

    return (
        <>
            {/* Hero */}
            <section className="bg-navy text-white py-14 md:py-20">
                <div className="container-custom">
                    <p className="eyebrow eyebrow-on-dark mb-5">Gallery</p>
                    <h1 className="display text-5xl md:text-7xl">Our Work</h1>
                    <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                        {photos.length} photos from real jobs across Adelaide, including every photo from the {jobCount} jobs we
                        have written up. Open one to see it full size and read the job it came from.
                    </p>
                </div>
            </section>

            {/* Gallery */}
            <section className="bg-white py-10 md:py-16">
                <div className="container-custom">
                    <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
                        <div className="flex gap-2.5" role="group" aria-label="Filter by kind of work">
                            {['All', ...kinds].map((name) => (
                                <button
                                    key={name}
                                    type="button"
                                    aria-pressed={kind === name}
                                    onClick={() => {
                                        setKind(name);
                                        setLimit(PAGE);
                                    }}
                                    className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                                        kind === name ? 'bg-navy text-white' : 'bg-neutral-offwhite text-neutral-slate hover:bg-gold hover:text-navy'
                                    }`}
                                >
                                    {name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <p className="mt-5 text-sm text-neutral-slate" aria-live="polite">
                        Showing {shown.length} of {filtered.length} photos
                    </p>

                    <ul className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
                        {shown.map((photo) => (
                            <li key={photo.src}>
                                <button
                                    type="button"
                                    onClick={() => setOpen(photo)}
                                    className="group relative block aspect-square w-full overflow-hidden rounded-xl bg-navy-deep text-left"
                                    aria-label={`Open photo: ${photo.title}`}
                                >
                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        fill
                                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                        loading="lazy"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <span className="absolute inset-0 flex items-center justify-center bg-navy/0 opacity-0 transition group-hover:bg-navy/30 group-hover:opacity-100">
                                        <ZoomIn className="h-8 w-8 text-white drop-shadow-lg" />
                                    </span>
                                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/60 to-transparent p-3 pt-8">
                                        {photo.place && (
                                            <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">{photo.place}</span>
                                        )}
                                        <span className="line-clamp-2 text-xs font-semibold leading-snug text-white md:text-sm">{photo.title}</span>
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>

                    {filtered.length > limit && (
                        <div className="mt-8 text-center">
                            <button type="button" onClick={() => setLimit((n) => n + PAGE)} className="pill pill-ghost-light">
                                Show {Math.min(PAGE, filtered.length - limit)} more photos
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox */}
            {open && (
                <div
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-label={open.title}
                    onClick={() => setOpen(null)}
                >
                    <button
                        type="button"
                        className="absolute right-4 top-4 text-white transition-colors hover:text-gold"
                        onClick={() => setOpen(null)}
                        aria-label="Close photo"
                    >
                        <X className="h-10 w-10" />
                    </button>
                    <div className="relative h-[70vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
                        <Image src={open.src} alt={open.alt} fill sizes="100vw" className="object-contain" />
                    </div>
                    <div className="mt-4 max-w-2xl text-center" onClick={(e) => e.stopPropagation()}>
                        <p className="text-sm text-white/85">{open.title}</p>
                        {open.job && (
                            <Link
                                href={open.job.href}
                                className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
                            >
                                Read the job: {open.job.title} <ArrowRight className="h-4 w-4 shrink-0" />
                            </Link>
                        )}
                    </div>
                </div>
            )}

            {/* Instagram Connect */}
            <section className="section-padding bg-neutral-offwhite border-t border-gray-100">
                <div className="container-custom text-center">
                    <div className="inline-flex items-center justify-center p-4 bg-white rounded-full mb-6">
                        <Instagram className="w-8 h-8 text-navy" />
                    </div>
                    <h2 className="text-3xl font-bold text-navy mb-4">Follow Us on Instagram</h2>
                    <p className="text-neutral-slate text-lg mb-8 max-w-2xl mx-auto">
                        Check out our latest projects, behind-the-scenes updates, and electrical tips on our Instagram page.
                    </p>
                    <a
                        href="https://www.instagram.com/jpdcompleteelectrical/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline border-navy text-navy hover:bg-navy hover:text-white gap-2"
                    >
                        <Instagram className="w-5 h-5" />
                        @jpdcompleteelectrical
                    </a>
                </div>
            </section>

            <ClosingCTA />
        </>
    );
}
