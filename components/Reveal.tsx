'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface RevealProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

/**
 * Scroll-triggered fade-in-up. Defaults to fully visible (no JS / crawlers
 * always see content); only defers to "pending" for elements confirmed to
 * be below the fold on mount, so nothing ever ships permanently hidden.
 */
export default function Reveal({ children, delay = 0, className = '' }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [state, setState] = useState<'visible' | 'pending' | 'revealed'>('visible');

    useEffect(() => {
        const node = ref.current;
        if (!node || typeof IntersectionObserver === 'undefined') return;

        const rect = node.getBoundingClientRect();
        const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (alreadyVisible) return;

        setState('pending');
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setState('revealed');
                    observer.disconnect();
                }
            },
            { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    const animationClass = state === 'pending' ? 'opacity-0' : state === 'revealed' ? 'animate-fade-in-up' : '';

    return (
        <div
            ref={ref}
            className={`${animationClass} ${className}`}
            style={state === 'revealed' && delay ? { animationDelay: `${delay}ms` } : undefined}
        >
            {children}
        </div>
    );
}
