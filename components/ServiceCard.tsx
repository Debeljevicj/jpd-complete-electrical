import { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
    linkLabel = 'See the work'
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

    const body = (
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

            {href && (
                <span className="mt-auto pt-2 md:pt-4 inline-flex items-center gap-1.5 text-navy font-bold text-[11px] md:text-sm group-hover:text-gold transition-colors">
                    {linkLabel} <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                </span>
            )}

            {!href && ctaText && ctaLink && (
                <div className={`mt-auto pt-4 border-t border-gray-100 ${compact ? 'hidden md:block' : ''}`}>
                    <a href={ctaLink} className="text-navy font-bold hover:text-gold transition-colors inline-flex items-center gap-1 text-sm uppercase tracking-wide">
                        {ctaText} <span className="text-lg">→</span>
                    </a>
                </div>
            )}
        </>
    );

    const shell = `card group transition-all duration-300 border ${variantStyles[variant]} flex flex-col h-full p-3 md:p-6`;

    if (href) {
        return (
            <Link href={href} className={`${shell} hover:-translate-y-0.5 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2`}>
                {body}
            </Link>
        );
    }

    return <div className={shell}>{body}</div>;
}
