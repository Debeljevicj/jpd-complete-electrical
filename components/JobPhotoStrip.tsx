import Image from 'next/image';
import Link from 'next/link';
import { stripCount, type ServicePhoto } from '@/lib/service-work';

const OBJECT_POSITION: Record<string, string> = {
    top: 'object-top',
    center: 'object-center',
    bottom: 'object-bottom',
};

/**
 * Photos from real jobs, high up a service page that is otherwise all text.
 *
 * How many it shows is stripCount's call. Each photo links to the job it came from.
 */
export default function JobPhotoStrip({
    photos,
    heading,
    className = 'bg-neutral-offwhite',
}: {
    photos: ServicePhoto[];
    heading: string;
    className?: string;
}) {
    const count = stripCount(photos);
    if (count === 0) return null;
    const shown = photos.slice(0, count);

    return (
        <section className={`section-padding ${className}`}>
            <div className="container-custom">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 gold-underline">{heading}</h2>
                <p className="text-neutral-slate text-lg mb-8 max-w-3xl">
                    Taken on our own jobs around Adelaide. Tap a photo to read what the work involved.
                </p>

                <div className={`grid grid-cols-2 ${count === 2 ? '' : 'md:grid-cols-3'} gap-3 md:gap-5`}>
                    {shown.map((photo, i) => (
                        <Link
                            key={photo.src}
                            href={photo.href}
                            // Three on a phone would leave one tile alone on the second
                            // row, so the first spans the width instead.
                            className={`group ${count === 3 && i === 0 ? 'col-span-2 md:col-span-1' : ''}`}
                        >
                            <figure>
                                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-sm group-hover:shadow-lg transition-shadow">
                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        fill
                                        sizes="(max-width: 768px) 50vw, 33vw"
                                        className={`object-cover ${OBJECT_POSITION[photo.focus ?? 'center']} group-hover:scale-105 transition-transform duration-300`}
                                    />
                                </div>
                                <figcaption className="text-sm text-neutral-slate mt-2 leading-snug group-hover:text-navy transition-colors">
                                    {photo.caption}
                                </figcaption>
                            </figure>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
