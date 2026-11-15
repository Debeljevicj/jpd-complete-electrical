'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Facebook, Instagram } from 'lucide-react';

/**
 * `compact`: the page is scrolled and Header has folded its logo row away, so a
 * small JPD mark sits at the left of this row and the links spread to make room.
 */
export default function StickyNav({ compact = false }: { compact?: boolean }) {
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
        { href: 'https://www.facebook.com/jpdcompleteelectrical', label: 'Facebook', icon: Facebook },
        { href: 'https://www.instagram.com/jpdcompleteelectrical/', label: 'Instagram', icon: Instagram },
    ];

    return (
        <div className="bg-white border-t border-gray-100 lg:hidden">
            <div className="container-custom">
                <nav className={`flex items-center py-1 ${compact ? 'justify-between gap-3' : 'justify-center gap-8'}`}>
                    {compact && (
                        <Link href="/" className="relative h-6 w-[62px] sm:h-7 sm:w-[73px] shrink-0 animate-fade-in" aria-label="JPD Complete Electrical home">
                            <Image src="/jpd-mark.png" alt="" fill sizes="73px" className="object-contain" />
                        </Link>
                    )}
                    {mainLinks.map((link) => {
                        const isActive = link.href === '/'
                            ? pathname === '/'
                            : pathname.startsWith(link.href);

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`font-medium text-sm hover:text-gold transition-colors py-3 ${isActive ? 'text-navy font-bold' : 'text-navy'
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
                            className="flex items-center gap-1 font-medium text-sm text-navy hover:text-gold transition-colors py-3"
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
                                            className={`block px-4 py-2 text-sm hover:bg-neutral-offwhite transition-colors ${isActive ? 'text-navy font-bold' : 'text-navy'
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
