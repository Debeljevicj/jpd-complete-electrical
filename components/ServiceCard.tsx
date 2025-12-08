import { ReactNode } from 'react';

interface ServiceCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    variant?: 'default' | 'commercial' | 'residential';
    ctaText?: string;
    ctaLink?: string;
}

export default function ServiceCard({
    icon,
    title,
    description,
    variant = 'default',
    ctaText,
    ctaLink
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
        <div className={`card group transition-all duration-300 border ${variantStyles[variant]} flex flex-col h-full`}>
            <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 ${iconBgStyles[variant]}`}>
                <div className={`transition-colors duration-300 ${variant === 'commercial' ? 'text-gold group-hover:text-white' : 'text-gold group-hover:text-navy'}`}>
                    {icon}
                </div>
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">{title}</h3>
            <p className="text-neutral-slate leading-relaxed mb-6 flex-grow">
                {description}
            </p>

            {ctaText && ctaLink && (
                <div className="mt-auto pt-4 border-t border-gray-100">
                    <a href={ctaLink} className="text-navy font-bold hover:text-gold transition-colors inline-flex items-center gap-1 text-sm uppercase tracking-wide">
                        {ctaText} <span className="text-lg">→</span>
                    </a>
                </div>
            )}
        </div>
    );
}
