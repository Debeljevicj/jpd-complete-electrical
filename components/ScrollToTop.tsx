'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // On mobile the sticky call bar owns the bottom of the screen, so this clears
    // its full height (plus any home-indicator inset) instead of sitting on its
    // edge and reading as part of the bar. Desktop has no bar, so it drops back down.
    return (
        <button
            onClick={scrollToTop}
            style={{ bottom: 'calc(env(safe-area-inset-bottom, 0px) + 6.5rem)' }}
            className={`fixed left-4 md:left-8 md:!bottom-8 z-40 p-3 rounded-full bg-gold text-navy shadow-lg transition-all duration-300 hover:bg-gold-dark hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
            aria-label="Scroll to top"
        >
            <ArrowUp className="w-6 h-6" />
        </button>
    );
}
