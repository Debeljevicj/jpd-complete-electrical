import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { MapPin } from 'lucide-react';
import ServiceIcon from '@/components/ServiceIcon';
import { serviceIndex, type ServiceIndexEntry } from '@/data/services';

/**
 * The services grid on /services/, every suburb page and /service-areas/.
 *
 * Each card leads with a real job photo (Justin asked for this on 15 Nov 2026,
 * to look authentic rather than a page of icons). A service with no photo yet
 * is left off the grid and named in a text line underneath, so its page still
 * has links pointing at it.
 *
 * On phones a card is a thumbnail beside the text, so the grid doesn't become
 * fifteen screens of big photos. From 640px the photo sits on top.
 */

/**
 * Which cards go double width so no row ends with a card on its own.
 * Two columns: an odd count widens the first card. Three columns: widen
 * further cards until the slot count divides by three. Dense flow back-fills.
 */
function spans(count: number) {
    const sm = count % 2 === 1 ? 1 : 0;
    const extra = (3 - ((count + sm) % 3)) % 3;
    return (index: number): 'sm' | 'lg' | null => {
        if (index < sm) return 'sm';
        if (index < sm + extra) return 'lg';
        return null;
    };
}

const SIZES = '(max-width: 639px) 112px, (max-width: 1023px) 50vw, 33vw';

// Written out in full per layout so Tailwind sees every class, and so a wide
// card never carries two classes for the same property at the same breakpoint
// (sm:flex-col beside sm:flex-row: whichever Tailwind emits last wins).
const LAYOUT = {
    normal: {
        card: 'sm:flex-col',
        media: 'w-28 sm:w-full sm:aspect-[4/3]',
        body: 'p-4 sm:p-5 sm:pt-7',
        badge: 'absolute -top-6 left-5',
        title: '',
        blurb: '',
    },
    sm: {
        card: 'sm:col-span-2 sm:flex-row',
        media: 'w-28 sm:w-1/2 sm:min-h-[260px]',
        body: 'p-4 sm:p-8 sm:self-center',
        badge: 'sm:mb-4',
        title: 'sm:text-2xl',
        blurb: 'sm:text-base',
    },
    lg: {
        card: 'sm:flex-col lg:col-span-2 lg:flex-row',
        media: 'w-28 sm:w-full sm:aspect-[4/3] lg:w-1/2 lg:aspect-auto lg:min-h-[260px]',
        body: 'p-4 sm:p-5 sm:pt-7 lg:p-8 lg:self-center',
        badge: 'absolute -top-6 left-5 lg:static lg:mb-4',
        title: 'lg:text-2xl',
        blurb: 'lg:text-base',
    },
};

function ServicePhotoCard({ service, wide, suffix }: { service: ServiceIndexEntry; wide: 'sm' | 'lg' | null; suffix?: string }) {
    const photo = service.photo!;
    const l = LAYOUT[wide ?? 'normal'];
    return (
        <Link
            href={`/${service.slug}`}
            className={`group flex ${l.card} bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-gold hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2`}
        >
            <div className={`relative ${l.media} shrink-0 self-stretch overflow-hidden bg-gray-100`}>
                <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={SIZES}
                    className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    style={{ objectPosition: photo.focus ?? '50% 50%' }}
                />
                {photo.suburb && (
                    <span className="hidden sm:inline-flex absolute right-3 top-3 items-center gap-1 rounded-full bg-black/55 backdrop-blur px-2.5 py-1 text-[11px] font-semibold text-white">
                        <MapPin className="w-3 h-3 text-gold" aria-hidden />
                        {photo.suburb}
                    </span>
                )}
            </div>
            <div className={`relative ${l.body} min-w-0`}>
                <div
                    className={`hidden sm:flex ${l.badge} w-11 h-11 rounded-lg bg-navy ring-4 ring-white items-center justify-center group-hover:bg-gold transition-colors`}
                >
                    <ServiceIcon name={service.icon} className="w-5 h-5 text-gold group-hover:text-navy transition-colors" />
                </div>
                <h3 className={`font-bold text-navy mb-1 ${l.title} group-hover:text-gold-dark transition-colors`}>
                    {service.name}
                    {suffix}
                </h3>
                <p className={`text-sm ${l.blurb} text-neutral-slate leading-snug`}>{service.blurb}</p>
            </div>
        </Link>
    );
}

export default function ServicePhotoGrid({ suburbName }: { suburbName?: string }) {
    const withPhoto = serviceIndex.filter((s) => s.photo);
    const withoutPhoto = serviceIndex.filter((s) => !s.photo);
    const wideAt = spans(withPhoto.length);
    const suffix = suburbName ? ` in ${suburbName}` : undefined;

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 [grid-auto-flow:dense]">
                {withPhoto.map((service, i) => (
                    <ServicePhotoCard key={service.slug} service={service} wide={wideAt(i)} suffix={suffix} />
                ))}
            </div>
            {withoutPhoto.length > 0 && (
                <p className="mt-6 text-neutral-slate text-lg leading-relaxed">
                    We also do{' '}
                    {withoutPhoto.map((service, i) => (
                        <Fragment key={service.slug}>
                            {i > 0 && (i === withoutPhoto.length - 1 ? ' and ' : ', ')}
                            <Link
                                href={`/${service.slug}`}
                                className="text-navy font-bold underline underline-offset-4 hover:text-gold"
                            >
                                {service.name.toLowerCase()}
                            </Link>
                        </Fragment>
                    ))}
                    {suburbName ? ` in ${suburbName}.` : '.'}
                </p>
            )}
        </>
    );
}
