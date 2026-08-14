import { ShieldCheck, Award, Star } from 'lucide-react';

interface TrustBadgesProps {
    className?: string;
    /**
     * "pill" is the standalone treatment used mid-page, where the badges need
     * their own visual container. "plain" drops the pill chrome for use inside
     * an already-tinted bar (the header utility strip), where a pill on a tint
     * reads as a muddy box-in-a-box.
     */
    variant?: 'pill' | 'plain';
}

export default function TrustBadges({ className = "", variant = 'pill' }: TrustBadgesProps) {
    const items = [
        { Icon: ShieldCheck, label: 'Licensed: PGE296191' },
        { Icon: Award, label: 'Fully Insured' },
    ];

    const wrapper = variant === 'pill'
        ? 'flex items-center gap-2 bg-navy/5 px-3 py-1.5 rounded-full border border-navy/10'
        : 'flex items-center gap-1.5';

    const text = variant === 'pill'
        ? 'text-sm font-semibold text-navy'
        : 'text-xs font-semibold text-navy/80';

    return (
        <div className={`flex flex-wrap items-center ${variant === 'pill' ? 'gap-4' : 'gap-4'} ${className}`}>
            {items.map(({ Icon, label }) => (
                <div key={label} className={wrapper}>
                    <Icon className={`${variant === 'pill' ? 'w-4 h-4' : 'w-3.5 h-3.5'} text-gold`} />
                    <span className={text}>{label}</span>
                </div>
            ))}
        </div>
    );
}
