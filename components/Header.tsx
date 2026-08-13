'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Phone, Facebook, Instagram } from 'lucide-react';
import TrustBadges from './TrustBadges';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
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
            <div className="container-custom">
                {/* Trust badges sit in their own right-aligned row so the logo and the nav
                    can share a single vertically-centred row below. Previously the logo was
                    centred against the badges-plus-nav stack, which left it sitting about
                    20px above the nav it visually pairs with. */}
                <div className="hidden lg:flex justify-end pt-3">
                    <TrustBadges />
                </div>

                <div className="flex items-center justify-between py-3 md:py-4 lg:pt-2">
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
                            <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
                                <div className="flex items-center gap-2 mr-2">
                                    <a href="https://www.facebook.com/profile.php?id=61567696480436" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-gold transition-colors">
                                        <Facebook className="w-5 h-5" />
                                    </a>
                                    <a href="https://www.instagram.com/jpdcompleteelectrical/" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-gold transition-colors">
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                </div>
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
        </header>
    );
}
