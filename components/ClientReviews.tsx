import { Star, Facebook } from 'lucide-react';
import { reviews, averageRating } from '@/lib/reviews';
import ReviewDate from './ReviewDate';
import SourceLogo from './SourceLogo';

// The review data and its `Review` type live in data/reviews.json and
// lib/reviews.ts. They used to be a hardcoded array in this file, which meant
// an import script would have had to rewrite a .tsx by regex, and the
// carousel had to import its data from a component that also rendered a grid.

export default function ClientReviews() {
    return (
        <div className="space-y-8">
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md mb-4">
                    <span className="font-bold text-navy text-xl">{averageRating.toFixed(1)}</span>
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-5 h-5 fill-gold text-gold" />
                        ))}
                    </div>
                    <span className="text-neutral-slate ml-2">Average Rating</span>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review) => (
                    <div key={review.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-6">
                            <SourceLogo source={review.source} className="w-10 h-10" />
                            <div>
                                <h3 className="font-bold text-navy">{review.author}</h3>
                                <div className="text-xs text-neutral-slate flex items-center gap-1">
                                    {review.source === 'Google' ? (
                                        <span className="text-blue-500 font-semibold">Google Review</span>
                                    ) : (
                                        <span className="text-blue-800 font-semibold flex items-center gap-1">
                                            <Facebook className="w-3 h-3" /> Facebook
                                        </span>
                                    )}
                                    <span>• <ReviewDate publishedAt={review.publishedAt} fallback="Recommended" /></span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-1 mb-4">
                            {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                            ))}
                        </div>

                        <p className="text-neutral-slate leading-relaxed text-sm flex-grow">
                            "{review.content}"
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
