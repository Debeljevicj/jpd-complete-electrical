'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Phone, Facebook, Instagram } from 'lucide-react';
import TrustBadges from './TrustBadges';
import StickyNav from './StickyNav';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    // Phones only: once the page is scrolled, the logo row folds away and a small
    // JPD mark joins the menu row instead. The two rows took ~140px of a phone
    // screen (Justin, 15 Nov 2026: "the screen's quite small" when scrolling).
    const [isCompact, setIsCompact] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;
            setIsScrolled(y > 20);
            // Different thresholds in and out. Folding the row shortens the page
            // above the content, and with one threshold the scroll position (or
            // the browser's scroll anchoring) could bounce it straight back open.
            setIsCompact((compact) => (compact ? y > 8 : y > 80));
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/service-areas', label: 'Areas' },
        { href: '/gallery', label: 'Gallery' },
        { href: '/reviews', label: 'Reviews' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
                }`}
        >
            {/* Slim utility strip. The badges used to float in an untinted row whose
                left half was empty, which read as three loose pills pinned to the
                corner. Giving them a tinted band with the social icons opposite
                anchors them and puts the previously dead left side to work. */}
            <div className="hidden lg:block bg-navy/[0.035] border-b border-navy/[0.07]">
                <div className="container-custom flex items-center justify-between py-1.5">
                    <div className="flex items-center gap-3">
                        <a href="https://www.facebook.com/jpdcompleteelectrical" target="_blank" rel="noopener noreferrer" className="text-navy/60 hover:text-gold transition-colors" aria-label="Facebook">
                            <Facebook className="w-4 h-4" />
                        </a>
                        <a href="https://www.instagram.com/jpdcompleteelectrical/" target="_blank" rel="noopener noreferrer" className="text-navy/60 hover:text-gold transition-colors" aria-label="Instagram">
                            <Instagram className="w-4 h-4" />
                        </a>
                    </div>
                    <TrustBadges variant="plain" />
                </div>
            </div>

            {/* The 0fr/1fr grid row animates the fold without measuring heights.
                From lg up this row holds the whole desktop nav, so it never folds. */}
            <div
                className={`grid transition-[grid-template-rows] duration-200 motion-reduce:transition-none lg:grid-rows-[1fr] ${isCompact ? 'grid-rows-[0fr] invisible lg:visible' : 'grid-rows-[1fr]'}`}
            >
            <div className="container-custom min-h-0 overflow-hidden lg:overflow-visible">
                <div className="flex items-center justify-between py-3">
                    {/* Logo box matches the artwork's 5.55:1 aspect, so there is no dead
                        letterbox space above and below to throw the alignment out. */}
                    <Link href="/" className="relative h-9 w-48 md:h-10 md:w-56 shrink-0 lg:mr-8 mx-auto lg:mx-0">
                        <Image
                            src="/Side By Side Blue Logo Transparent Background.png"
                            alt="JPD Complete Electrical"
                            fill
                            className="object-contain lg:object-left"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center">
                        <div className="flex items-center gap-8">
                            <nav className="flex items-center gap-8">
                                {navLinks.map((link) => {
                                    const isActive = link.href === '/'
                                        ? pathname === '/'
                                        : pathname.startsWith(link.href);

                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={`font-medium hover:text-gold transition-colors duration-200 ${isActive ? 'text-navy font-bold border-b-2 border-gold' : 'text-navy'
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    );
                                })}
                            </nav>
                            <div className="flex items-center gap-4 pl-6 border-l border-gray-200">
                                <a href="tel:0435006420" className="flex items-center gap-2 text-navy hover:text-gold transition-colors whitespace-nowrap">
                                    <Phone className="w-5 h-5" />
                                    <span className="font-semibold">0435 006 420</span>
                                </a>
                                <Link href="/contact" className="btn btn-gold whitespace-nowrap">
                                    Book a Job
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            {/* The mobile nav lives inside the header rather than as its own sticky
                element. It used to pin itself at a hardcoded top-[72px] while the
                header is only 60px tall, which left a gap the page scrolled through. */}
            <StickyNav compact={isCompact} />
        </header>
    );
}
