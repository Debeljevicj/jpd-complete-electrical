'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { Star, Facebook, ChevronLeft, ChevronRight } from 'lucide-react';
import { reviews } from './ClientReviews';

export default function ReviewsCarousel() {
    const [width, setWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, []);

    return (
        <div className="w-full overflow-hidden">
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md mb-4">
                    <span className="font-bold text-navy text-xl">5.0</span>
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-5 h-5 fill-gold text-gold" />
                        ))}
                    </div>
                    <span className="text-neutral-slate ml-2">Average Rating</span>
                </div>
            </div>

            <motion.div
                ref={carousel}
                className="cursor-grab overflow-hidden"
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className="flex gap-6 px-4 py-4"
                >
                    {reviews.slice().reverse().map((review) => ( // Show newest first on Home Page Carousel
                        <div key={review.id} className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full pointer-events-none"> {/* pointer-events-none to prevent text selection while dragging */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full ${review.avatarColor} flex items-center justify-center text-white font-bold text-lg`}>
                                        {review.author.charAt(0).toUpperCase()}
                                    </div>
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
                                            <span>• {review.date}</span>
                                        </div>
                                    </div>
                                </div>
                                {review.source === 'Google' && (
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                    </svg>
                                )}
                            </div>

                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                                ))}
                            </div>

                            <p className="text-neutral-slate leading-relaxed text-sm flex-grow line-clamp-4">
                                "{review.content}"
                            </p>
                            <div className="mt-4 text-gold text-sm font-semibold cursor-pointer">Read more</div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
            <p className="text-center text-sm text-neutral-slate mt-6 italic">
                Swipe to see more reviews
            </p>
        </div>
    );
}
