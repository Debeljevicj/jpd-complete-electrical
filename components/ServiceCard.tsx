import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import type { ServicePhoto } from '@/data/services';

interface ServiceCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    variant?: 'default' | 'commercial' | 'residential';
    ctaText?: string;
    ctaLink?: string;
    /** Icon + title only on mobile, no description — for quick-glance grids (e.g. home page snapshot). Full detail pages should leave this off. */
    compact?: boolean;
    /**
     * Makes the whole card a link.
     *
     * The card used to be an inert `<div>` with an optional link buried in its
     * footer, so on the home page grid there was nothing to click at all. Where
     * a card represents somewhere you can go, the whole card should take you
     * there — that is what people try to tap, particularly on a phone.
     */
    href?: string;
    /** Text for the affordance shown at the foot of a linked card. */
    linkLabel?: string;
    /**
     * A real job photo across the top of the card. The icon shrinks to a badge
     * on the photo's bottom edge, matching the services photo grid.
     */
    photo?: ServicePhoto;
}

export default function ServiceCard({
    icon,
    title,
    description,
    variant = 'default',
    ctaText,
    ctaLink,
    compact = false,
    href,
    linkLabel = 'See the work',
    photo
}: ServiceCardProps) {
    const variantStyles = {
        default: "bg-white border-gray-100 hover:shadow-xl",
        commercial: "bg-slate-50 border-slate-200 hover:shadow-lg hover:border-navy/30",
        residential: "bg-warm-50 border-orange-100 hover:shadow-lg hover:border-gold/30"
    };

    const iconBgStyles = {
        default: "bg-navy group-hover:bg-gold",
        commercial: "bg-slate-800 group-hover:bg-navy",
        residential: "bg-navy group-hover:bg-gold"
    };

    // The badge's ring matches the card so it reads as cut into the photo.
    const ringStyles = {
        default: 'ring-white',
        commercial: 'ring-slate-50',
        residential: 'ring-warm-50',
    };

    const footer = href ? (
        <span className="mt-auto pt-2 md:pt-4 inline-flex items-center gap-1.5 text-navy font-bold text-[11px] md:text-sm group-hover:text-gold transition-colors">
            {linkLabel} <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
        </span>
    ) : null;

    const photoBody = photo && (
        <>
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    style={{ objectPosition: photo.focus ?? '50% 50%' }}
                />
                {photo.suburb && (
                    <span className="hidden md:inline-flex absolute right-3 top-3 items-center gap-1 rounded-full bg-black/55 backdrop-blur px-2.5 py-1 text-[11px] font-semibold text-white">
                        <MapPin className="w-3 h-3 text-gold" aria-hidden />
                        {photo.suburb}
                    </span>
                )}
            </div>
            <div className="relative flex flex-col flex-grow p-3 pt-6 md:p-6 md:pt-9">
                <div
                    className={`absolute -top-5 md:-top-7 left-3 md:left-6 w-10 h-10 md:w-14 md:h-14 rounded-lg ring-4 ${ringStyles[variant]} flex items-center justify-center transition-colors duration-300 [&_svg]:w-5 [&_svg]:h-5 md:[&_svg]:w-7 md:[&_svg]:h-7 ${iconBgStyles[variant]}`}
                >
                    <div className={`transition-colors duration-300 ${variant === 'commercial' ? 'text-gold group-hover:text-white' : 'text-gold group-hover:text-navy'}`}>
                        {icon}
                    </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-navy mb-1 md:mb-2 leading-snug group-hover:text-gold transition-colors">{title}</h3>
                <p className={`text-xs md:text-base text-neutral-slate leading-snug md:leading-relaxed mb-0 md:mb-4 flex-grow line-clamp-2 md:line-clamp-none ${compact ? 'hidden md:block' : ''}`}>
                    {description}
                </p>
                {footer}
            </div>
        </>
    );

    const body = photoBody || (
        <>
            <div className={`w-9 h-9 md:w-16 md:h-16 rounded-lg md:rounded-lg flex items-center justify-center mb-2 md:mb-3 transition-colors duration-300 [&_svg]:w-4 [&_svg]:h-4 md:[&_svg]:w-8 md:[&_svg]:h-8 ${iconBgStyles[variant]}`}>
                <div className={`transition-colors duration-300 ${variant === 'commercial' ? 'text-gold group-hover:text-white' : 'text-gold group-hover:text-navy'}`}>
                    {icon}
                </div>
            </div>
            <h3 className="text-sm md:text-xl font-bold text-navy mb-1 md:mb-2 leading-snug group-hover:text-gold transition-colors">{title}</h3>
            <p className={`text-xs md:text-base text-neutral-slate leading-snug md:leading-relaxed mb-0 md:mb-4 flex-grow line-clamp-2 md:line-clamp-none ${compact ? 'hidden md:block' : ''}`}>
                {description}
            </p>

            {footer}

            {!href && ctaText && ctaLink && (
                <div className={`mt-auto pt-4 border-t border-gray-100 ${compact ? 'hidden md:block' : ''}`}>
                    <a href={ctaLink} className="text-navy font-bold hover:text-gold transition-colors inline-flex items-center gap-1 text-sm uppercase tracking-wide">
                        {ctaText} <span className="text-lg">→</span>
                    </a>
                </div>
            )}
        </>
    );

    const shell = `card group transition-all duration-300 border ${variantStyles[variant]} flex flex-col h-full ${photo ? 'p-0 md:p-0 overflow-hidden' : 'p-3 md:p-6'}`;

    if (href) {
        return (
            <Link href={href} className={`${shell} hover:-translate-y-0.5 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2`}>
                {body}
            </Link>
        );
    }

    return <div className={shell}>{body}</div>;
}
