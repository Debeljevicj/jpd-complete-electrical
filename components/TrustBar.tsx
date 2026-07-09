import { ShieldCheck, Award, BadgeCheck, Star } from 'lucide-react';

const items = [
    { icon: ShieldCheck, label: 'Licensed: PGE296191' },
    { icon: Award, label: 'Fully Insured' },
    { icon: BadgeCheck, label: 'NECA Member' },
    { icon: Star, label: '5★ Google Rated' },
];

export default function TrustBar() {
    return (
        <div className="bg-navy border-b border-white/10">
            <div className="container-custom">
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-4 md:py-5">
                    {items.map(({ icon: Icon, label }, i) => (
                        <div key={label} className="flex items-center gap-x-8">
                            {i > 0 && <span className="hidden md:block w-px h-5 bg-white/20" aria-hidden="true" />}
                            <div className="flex items-center gap-2.5">
                                <Icon className="w-5 h-5 text-gold flex-shrink-0" />
                                <span className="text-white font-semibold text-sm md:text-base whitespace-nowrap">{label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
