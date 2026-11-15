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
 *
 * Every card is the same size. The first version widened one or two cards so
 * each row filled, but a double-width card with a half-width photo stood as tall
 * as its neighbour and the photo came out huge. Now a short last row is centred.
 */

const SIZES = '(max-width: 639px) 112px, (max-width: 1023px) 50vw, 33vw';

function ServicePhotoCard({ service, suffix }: { service: ServiceIndexEntry; suffix?: string }) {
    const photo = service.photo!;
    return (
        <Link
            href={`/${service.slug}`}
            className="group flex sm:flex-col w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-gold hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
        >
            <div className="relative w-28 sm:w-full sm:aspect-[4/3] shrink-0 self-stretch overflow-hidden bg-gray-100">
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
            <div className="relative p-4 sm:p-5 sm:pt-7 min-w-0">
                <div className="hidden sm:flex absolute -top-6 left-5 w-11 h-11 rounded-lg bg-navy ring-4 ring-white items-center justify-center group-hover:bg-gold transition-colors">
                    <ServiceIcon name={service.icon} className="w-5 h-5 text-gold group-hover:text-navy transition-colors" />
                </div>
                <h3 className="font-bold text-navy mb-1 group-hover:text-gold-dark transition-colors">
                    {service.name}
                    {suffix}
                </h3>
                <p className="text-sm text-neutral-slate leading-snug">{service.blurb}</p>
            </div>
        </Link>
    );
}

export default function ServicePhotoGrid({ suburbName }: { suburbName?: string }) {
    const withPhoto = serviceIndex.filter((s) => s.photo);
    const withoutPhoto = serviceIndex.filter((s) => !s.photo);
    const suffix = suburbName ? ` in ${suburbName}` : undefined;

    return (
        <>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                {withPhoto.map((service) => (
                    <ServicePhotoCard key={service.slug} service={service} suffix={suffix} />
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
