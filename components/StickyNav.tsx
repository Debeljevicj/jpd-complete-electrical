'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Facebook, Instagram } from 'lucide-react';

export default function StickyNav() {
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const pathname = usePathname();

    const mainLinks = [
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/contact', label: 'Contact' },
    ];

    const moreLinks = [
        { href: '/reviews', label: 'Reviews' },
        { href: '/gallery', label: 'Gallery' },
    ];

    const socialLinks = [
        { href: 'https://www.facebook.com/profile.php?id=61567696480436', label: 'Facebook', icon: Facebook },
        { href: 'https://www.instagram.com/jpdcompleteelectrical/', label: 'Instagram', icon: Instagram },
    ];

    return (
        <div className="sticky top-[72px] md:top-[80px] z-40 bg-white border-b border-gray-200 shadow-sm lg:hidden">
            <div className="container-custom">
                <nav className="flex items-center justify-center gap-8 py-3">
                    {mainLinks.map((link) => {
                        const isActive = link.href === '/'
                            ? pathname === '/'
                            : pathname.startsWith(link.href);

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`font-medium text-sm hover:text-gold transition-colors ${isActive ? 'text-gold' : 'text-navy'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}

                    {/* More Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsMoreOpen(!isMoreOpen)}
                            className="flex items-center gap-1 font-medium text-sm text-navy hover:text-gold transition-colors"
                            onBlur={() => setTimeout(() => setIsMoreOpen(false), 200)}
                        >
                            More
                            <ChevronDown className={`w-4 h-4 transition-transform ${isMoreOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isMoreOpen && (
                            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                                {moreLinks.map((link) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={`block px-4 py-2 text-sm hover:bg-neutral-offwhite transition-colors ${isActive ? 'text-gold font-semibold' : 'text-navy'
                                                }`}
                                            onClick={() => setIsMoreOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    );
                                })}

                                <div className="border-t border-gray-200 my-2"></div>

                                {socialLinks.map((link) => {
                                    const Icon = link.icon;
                                    return (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 text-sm text-navy hover:bg-neutral-offwhite hover:text-gold transition-colors"
                                            onClick={() => setIsMoreOpen(false)}
                                        >
                                            <Icon className="w-4 h-4" />
                                            {link.label}
                                        </a>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
}
