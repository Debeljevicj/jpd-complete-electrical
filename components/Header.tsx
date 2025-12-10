'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Facebook, Instagram } from 'lucide-react';
import TrustBadges from './TrustBadges';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
                <div className="flex items-center justify-between py-3 md:py-4">
                    {/* Logo - Centered on mobile, left on desktop */}
                    <Link href="/" className="relative h-12 w-48 md:h-14 md:w-56 shrink-0 lg:mr-8 mx-auto lg:mx-0">
                        <Image
                            src="/Side By Side Blue Logo Transparent Background.png"
                            alt="JPD Complete Electrical"
                            fill
                            className="object-contain lg:object-left"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex flex-col items-end gap-2">
                        <TrustBadges />
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
                                            className={`font-medium hover:text-gold transition-colors duration-200 ${isActive ? 'text-gold border-b-2 border-gold' : 'text-navy'
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

                    {/* Mobile Menu Button - Hidden, using StickyNav instead */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="hidden lg:hidden p-2 text-navy hover:text-gold transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-gray-200">
                        <TrustBadges className="mb-4 justify-center" />
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => {
                                const isActive = link.href === '/'
                                    ? pathname === '/'
                                    : pathname.startsWith(link.href);

                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`font-medium hover:text-gold transition-colors duration-200 py-2 ${isActive ? 'text-gold font-bold' : 'text-navy'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                            <div className="flex items-center gap-4 py-2 justify-center border-t border-gray-100 mt-2 pt-4">
                                <a href="https://www.facebook.com/profile.php?id=61567696480436" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-gold transition-colors">
                                    <Facebook className="w-6 h-6" />
                                </a>
                                <a href="https://www.instagram.com/jpdcompleteelectrical/" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-gold transition-colors">
                                    <Instagram className="w-6 h-6" />
                                </a>
                            </div>
                            <a
                                href="tel:0435006420"
                                className="flex items-center gap-2 text-navy hover:text-gold transition-colors py-2 justify-center"
                            >
                                <Phone className="w-5 h-5" />
                                <span className="font-semibold">0435 006 420</span>
                            </a>
                            <Link
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="btn btn-gold w-full"
                            >
                                Book a Job
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
