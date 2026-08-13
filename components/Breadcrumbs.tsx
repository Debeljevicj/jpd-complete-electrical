'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

/** Rendered as-is rather than title-cased. */
const ACRONYMS: Record<string, string> = {
    ev: 'EV',
    rcd: 'RCD',
    led: 'LED',
    jpd: 'JPD',
    sa: 'SA',
};

/** Lower-cased mid-phrase, the way a person would write it. */
const MINOR_WORDS = new Set(['and', 'or', 'the', 'a', 'an', 'for', 'in', 'of', 'to', 'at']);

/**
 * Turn a URL slug into a readable label.
 *
 * The old version upper-cased only the very first character of the whole slug,
 * which was fine for /about but produced "Electrician greenwith" and
 * "Rcd testing safety switches adelaide" once the suburb and service pages
 * landed. Deliberately kept as string handling rather than a lookup against the
 * suburb and service data, because this is a client component and importing
 * those modules would pull their full page copy into the client bundle.
 */
function slugToLabel(slug: string): string {
    return slug
        .split('-')
        .map((word, index) => {
            const lower = word.toLowerCase();
            if (ACRONYMS[lower]) return ACRONYMS[lower];
            if (index > 0 && MINOR_WORDS.has(lower)) return lower;
            return lower.charAt(0).toUpperCase() + lower.slice(1);
        })
        .join(' ');
}

export default function Breadcrumbs() {
    const pathname = usePathname();

    // Don't show on home page
    if (pathname === '/') return null;

    const pathSegments = pathname.split('/').filter(segment => segment);

    return (
        <nav aria-label="Breadcrumb" className="bg-neutral-offwhite py-3 border-b border-gray-200">
            <div className="container-custom">
                <ol className="flex items-center space-x-2 text-sm text-neutral-slate">
                    <li>
                        <Link href="/" className="flex items-center hover:text-gold transition-colors">
                            <Home className="w-4 h-4" />
                        </Link>
                    </li>
                    {pathSegments.map((segment, index) => {
                        const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
                        const isLast = index === pathSegments.length - 1;
                        const title = slugToLabel(segment);

                        return (
                            <li key={href} className="flex items-center">
                                <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
                                {isLast ? (
                                    <span className="font-semibold text-navy" aria-current="page">
                                        {title}
                                    </span>
                                ) : (
                                    <Link href={href} className="hover:text-gold transition-colors">
                                        {title}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </nav>
    );
}
