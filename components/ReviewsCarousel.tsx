'use client';

import { useRef } from 'react';
import { Star, Facebook, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { reviews } from './ClientReviews';

export default function ReviewsCarousel() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = container.clientWidth * 0.8; // Scroll 80% of width

            // Use scrollBy for relative scrolling which is often more reliable with snap
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="w-full relative group">
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md mb-4 border border-navy/5">
                    <span className="font-bold text-navy text-xl">5.0</span>
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-5 h-5 fill-gold text-gold" />
                        ))}
                    </div>
                    <span className="text-neutral-slate ml-2 font-medium">Average Rating</span>
                </div>
            </div>

            <div className="relative px-4 md:px-12">
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

                {/* Carousel Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 pt-2 px-1 relative z-10"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {reviews.slice().reverse().map((review) => (
                        <div
                            key={review.id}
                            className="flex-shrink-0 w-[85vw] md:w-[400px] snap-center bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full relative"
                        >
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-gold/10 fill-gold/10" />

                            <div className="flex items-center gap-3 mb-6">
                                <div className={`w-12 h-12 rounded-full ${review.avatarColor} flex items-center justify-center text-white font-bold text-lg shadow-inner`}>
                                    {review.author.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-bold text-navy text-lg">{review.author}</h3>
                                        {review.source === 'Google' && (
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                            </svg>
                                        )}
                                    </div>
                                    <div className="text-xs text-neutral-slate flex items-center gap-1">
                                        {review.source === 'Google' ? (
                                            <span className="text-blue-500 font-semibold">Google Review</span>
                                        ) : (
                                            <span className="text-blue-800 font-semibold flex items-center gap-1">
                                                <Facebook className="w-3 h-3" /> Facebook
                                            </span>
                                        )}
                                        <span>• {review.date}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                                ))}
                            </div>

                            <p className="text-neutral-slate leading-relaxed text-sm flex-grow line-clamp-5">
                                "{review.content}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <p className="md:hidden text-center text-sm text-neutral-slate mt-4 italic flex items-center justify-center gap-2">
                <ChevronLeft className="w-4 h-4" /> Swipe to see more <ChevronRight className="w-4 h-4" />
            </p>
        </div>
    );
}
