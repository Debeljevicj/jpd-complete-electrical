import { ShieldCheck, Award, Star } from 'lucide-react';

export default function TrustBadges({ className = "" }: { className?: string }) {
    return (
        <div className={`flex flex-wrap gap-4 items-center ${className}`}>
            <div className="flex items-center gap-2 bg-navy/5 px-3 py-1.5 rounded-full border border-navy/10">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span className="text-sm font-semibold text-navy">Licensed: PGE296191</span>
            </div>
            <div className="flex items-center gap-2 bg-navy/5 px-3 py-1.5 rounded-full border border-navy/10">
                <Award className="w-4 h-4 text-gold" />
                <span className="text-sm font-semibold text-navy">Fully Insured</span>
            </div>
        </div>
    );
}
