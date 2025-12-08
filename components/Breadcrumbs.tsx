'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

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
                        const title = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');

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
