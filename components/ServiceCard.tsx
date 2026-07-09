import { ReactNode } from 'react';

interface ServiceCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    variant?: 'default' | 'commercial' | 'residential';
    ctaText?: string;
    ctaLink?: string;
    /** Icon + title only on mobile, no description — for quick-glance grids (e.g. home page snapshot). Full detail pages should leave this off. */
    compact?: boolean;
}

export default function ServiceCard({
    icon,
    title,
    description,
    variant = 'default',
    ctaText,
    ctaLink,
    compact = false
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

    return (
        <div className={`card group transition-all duration-300 border ${variantStyles[variant]} flex flex-col h-full p-3 md:p-6`}>
            <div className={`w-9 h-9 md:w-16 md:h-16 rounded-lg md:rounded-lg flex items-center justify-center mb-2 md:mb-3 transition-colors duration-300 [&_svg]:w-4 [&_svg]:h-4 md:[&_svg]:w-8 md:[&_svg]:h-8 ${iconBgStyles[variant]}`}>
                <div className={`transition-colors duration-300 ${variant === 'commercial' ? 'text-gold group-hover:text-white' : 'text-gold group-hover:text-navy'}`}>
                    {icon}
                </div>
            </div>
            <h3 className="text-sm md:text-xl font-bold text-navy mb-1 md:mb-2 leading-snug">{title}</h3>
            <p className={`text-xs md:text-base text-neutral-slate leading-snug md:leading-relaxed mb-0 md:mb-4 flex-grow line-clamp-2 md:line-clamp-none ${compact ? 'hidden md:block' : ''}`}>
                {description}
            </p>

            {ctaText && ctaLink && (
                <div className={`mt-auto pt-4 border-t border-gray-100 ${compact ? 'hidden md:block' : ''}`}>
                    <a href={ctaLink} className="text-navy font-bold hover:text-gold transition-colors inline-flex items-center gap-1 text-sm uppercase tracking-wide">
                        {ctaText} <span className="text-lg">→</span>
                    </a>
                </div>
            )}
        </div>
    );
}
