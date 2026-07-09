'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Instagram, ChevronLeft, ChevronRight } from 'lucide-react';

// Placeholder tiles using real project photos until the live Instagram
// widget (SnapWidget) embed is wired in — see chat for setup steps.
const previewPosts = [
    { src: '/images/bathroom_renovation.jpg', alt: 'Bathroom renovation electrical work' },
    { src: '/images/kitchen_led_strip.jpg', alt: 'Kitchen LED strip lighting installation' },
    { src: '/images/exterior_feature_lighting.jpg', alt: 'Exterior feature lighting installation' },
    { src: '/images/cctv_installation.jpg', alt: 'CCTV camera installation' },
    { src: '/images/feature_wall_lighting.jpg', alt: 'Feature wall lighting installation' },
    { src: '/images/commercial_tv_wall_mount.jpg', alt: 'Commercial TV wall mount installation' },
    { src: '/images/led_backlit_mirror.jpg', alt: 'LED backlit mirror installation' },
    { src: '/images/solar_system_main.jpg', alt: 'Solar system installation' },
];

const INSTAGRAM_URL = 'https://www.instagram.com/jpdcompleteelectrical/';

export default function InstagramFeed() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollRef.current) return;
        const amount = scrollRef.current.clientWidth * 0.8;
        scrollRef.current.scrollBy({
            left: direction === 'left' ? -amount : amount,
            behavior: 'smooth',
        });
    };

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 mb-3">
                        <Instagram className="w-6 h-6 text-gold" />
                        <h2 className="text-3xl md:text-4xl font-bold text-navy">Follow Us on Instagram</h2>
                    </div>
                    <p className="text-neutral-slate">Behind-the-scenes looks at our latest jobs — @jpdcompleteelectrical</p>
                </div>

                <div className="relative px-0 md:px-12">
                    <button
                        type="button"
                        onClick={() => scroll('left')}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 items-center justify-center text-navy hover:text-gold hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-gold/50 cursor-pointer"
                        aria-label="Previous posts"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        type="button"
                        onClick={() => scroll('right')}
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 items-center justify-center text-navy hover:text-gold hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-gold/50 cursor-pointer"
                        aria-label="Next posts"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {previewPosts.map((post, i) => (
                            <a
                                key={post.src}
                                href={INSTAGRAM_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative flex-shrink-0 w-40 h-40 md:w-52 md:h-52 snap-center rounded-lg overflow-hidden group"
                            >
                                <Image
                                    src={post.src}
                                    alt={post.alt}
                                    fill
                                    sizes="(max-width: 768px) 160px, 208px"
                                    loading={i < 3 ? 'eager' : 'lazy'}
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/50 transition-colors flex items-center justify-center">
                                    <Instagram className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-8">
                    <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline inline-flex items-center gap-2"
                    >
                        <Instagram className="w-5 h-5" />
                        @jpdcompleteelectrical
                    </a>
                </div>
            </div>
        </section>
    );
}
