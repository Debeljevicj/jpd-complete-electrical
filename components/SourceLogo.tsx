import { Facebook } from 'lucide-react';
import type { Review } from '@/lib/reviews';

interface SourceLogoProps {
    source: Review['source'];
    className?: string;
}

/**
 * The logo of the platform a review came from, in the spot a profile photo
 * would normally sit.
 *
 * The cards used to show a coloured circle with the reviewer's initial in it,
 * which looked like a profile photo that had failed to load. We don't have the
 * reviewers' photos and shouldn't pretend to, so the circle now says where the
 * review was left instead.
 */
export default function SourceLogo({ source, className = 'w-12 h-12' }: SourceLogoProps) {
    return (
        <div
            className={`${className} shrink-0 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center`}
            aria-label={source === 'Google' ? 'Google review' : 'Facebook recommendation'}
            role="img"
        >
            {source === 'Google' ? (
                <svg className="w-1/2 h-1/2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
            ) : (
                <Facebook className="w-1/2 h-1/2 text-[#1877F2] fill-[#1877F2]" aria-hidden="true" />
            )}
        </div>
    );
}
