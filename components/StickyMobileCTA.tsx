'use client';

import { Phone, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function StickyMobileCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosed, setIsClosed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling down 100px
            setIsVisible(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible || isClosed) return null;

    return (
        <>
            {/* Mobile/Tablet View */}
            <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden">
                <div className="px-3 pt-3 grid grid-cols-2 gap-3" style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom, 0.75rem))' }}>
                    <a
                        href="tel:0435006420"
                        className="flex items-center justify-center gap-2 bg-navy text-white font-bold py-3 px-4 rounded-lg active:scale-95 transition-transform"
                    >
                        <Phone className="w-5 h-5" />
                        Call Now
                    </a>
                    <a
                        href="/contact"
                        className="flex items-center justify-center gap-2 bg-gold text-navy font-bold py-3 px-4 rounded-lg active:scale-95 transition-transform"
                    >
                        <Calendar className="w-5 h-5" />
                        Get Quote
                    </a>
                </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:flex fixed bottom-8 right-8 z-50 flex-col gap-4 animate-slide-up">
                <button
                    onClick={() => setIsClosed(true)}
                    className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow-md border border-gray-200 hover:bg-gray-100 z-10"
                    aria-label="Close sticky buttons"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>

                <a
                    href="/contact"
                    className="flex items-center gap-3 bg-gold text-navy font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform hover:shadow-xl"
                >
                    <Calendar className="w-5 h-5" />
                    Request a Quote
                </a>
                <a
                    href="tel:0435006420"
                    className="flex items-center gap-3 bg-navy text-white font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform hover:shadow-xl"
                >
                    <Phone className="w-5 h-5" />
                    0435 006 420
                </a>
            </div>
        </>
    );
}
