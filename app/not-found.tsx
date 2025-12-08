import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center bg-neutral-offwhite px-4">
            <div className="text-center max-w-lg">
                <div className="w-24 h-24 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <AlertTriangle className="w-12 h-12 text-navy" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">Page Not Found</h1>
                <p className="text-xl text-neutral-slate mb-8">
                    Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
                </p>
                <Link href="/" className="btn btn-primary text-lg px-8 py-3">
                    Return Home
                </Link>
            </div>
        </div>
    );
}
