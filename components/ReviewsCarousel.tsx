'use client';

import { useRef } from 'react';
import { Star, Facebook, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { reviews, averageRating, type Review } from '@/lib/reviews';
import ReviewDate from './ReviewDate';
import SourceLogo from './SourceLogo';

/**
 * One review card. The same markup serves the phone swipe row and the desktop
 * grid; only the container around it changes with the viewport.
 */
function ReviewCard({ review }: { review: Review }) {
    return (
        <div className="flex-shrink-0 w-full sm:w-[calc(50%-8px)] md:w-auto snap-start bg-white p-5 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col relative">
            <Quote className="absolute top-5 right-5 md:top-6 md:right-6 w-8 h-8 text-gold/10 fill-gold/10" />

            <div className="flex items-center gap-3 mb-3 md:mb-6">
                <SourceLogo source={review.source} />
                <div>
                    <h3 className="font-bold text-navy text-lg">{review.author}</h3>
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

            <div className="flex gap-1 mb-2 md:mb-4">
                {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
            </div>

            <p className="text-neutral-slate leading-relaxed text-sm line-clamp-5">
                "{review.content}"
            </p>
        </div>
    );
}

export default function ReviewsCarousel() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // The buttons only exist from md up, where the track is a grid whose
    // columns are sized so that one page of them fills the container exactly.
    // Stepping by the container's width therefore moves a whole page, and the
    // snap points tidy up the few pixels of padding.
    const scroll = (direction: 'left' | 'right') => {
        const container = scrollContainerRef.current;
        if (!container) return;
        container.scrollBy({
            left: direction === 'left' ? -container.clientWidth : container.clientWidth,
            behavior: 'smooth',
        });
    };

    return (
        <div className="w-full relative group">
            <div className="text-center mb-4 md:mb-12">
                <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md mb-4 border border-navy/5">
                    <span className="font-bold text-navy text-xl">{averageRating.toFixed(1)}</span>
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-5 h-5 fill-gold text-gold" />
                        ))}
                    </div>
                    <span className="text-neutral-slate ml-2 font-medium">Average Rating</span>
                </div>
            </div>

            <div className="relative px-4 md:px-12 mt-2 mb-4 md:mb-8">
                {/* Navigation Buttons - Hidden on mobile, visible on desktop */}
                <button
                    type="button"
                    onClick={() => scroll('left')}
                    className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 items-center justify-center text-navy hover:text-gold hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-gold/50 cursor-pointer"
                    aria-label="Previous reviews"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                    type="button"
                    onClick={() => scroll('right')}
                    className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 items-center justify-center text-navy hover:text-gold hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-gold/50 cursor-pointer"
                    aria-label="Next reviews"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/*
                  The track. On a phone it is a row of full-width cards you
                  swipe through, one at a time. From md up it becomes a grid
                  that fills three rows top to bottom before starting the next
                  column, so a page is a block of cards (2x3 on a tablet, 3x3
                  on a desktop) and the buttons page through those blocks.
                */}
                <div
                    ref={scrollContainerRef}
                    className="flex items-start md:grid md:items-stretch md:grid-flow-col md:grid-rows-3 md:auto-cols-[calc(50%-12px)] lg:auto-cols-[calc(33.333%-16px)] gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-2 px-1 relative z-10"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {reviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>
            </div>

            <p className="md:hidden text-center text-sm text-neutral-slate mt-4 italic flex items-center justify-center gap-2">
                <ChevronLeft className="w-4 h-4" /> Swipe to see more <ChevronRight className="w-4 h-4" />
            </p>
        </div>
    );
}
