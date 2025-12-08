import { Star } from 'lucide-react';

interface TestimonialCardProps {
    name: string;
    rating: number;
    review: string;
    date: string;
}

export default function TestimonialCard({ name, rating, review, date }: TestimonialCardProps) {
    return (
        <div className="card flex flex-col h-full">
            <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-4 h-4 ${i < rating ? 'text-gold fill-gold' : 'text-gray-300'}`}
                    />
                ))}
                <span className="text-xs text-green-600 font-semibold ml-2 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                    Google Verified
                </span>
            </div>
            <p className="text-neutral-slate mb-4 italic flex-grow">"{review}"</p>
            <div className="flex justify-between items-end mt-auto">
                <div>
                    <h4 className="font-bold text-navy">{name}</h4>
                    <span className="text-sm text-gray-400">{date}</span>
                </div>
                <div className="w-8 h-8 bg-navy/5 rounded-full flex items-center justify-center">
                    <span className="text-navy font-bold text-xs">G</span>
                </div>
            </div>
        </div>
    );
}
