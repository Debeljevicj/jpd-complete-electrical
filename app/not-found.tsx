import Link from 'next/link';
import { Compass, Phone } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center bg-neutral-offwhite px-4 py-16">
            <div className="text-center max-w-lg">
                <div className="w-24 h-24 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Compass className="w-12 h-12 text-gold" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">Looks Like a Wrong Turn</h1>
                <p className="text-xl text-neutral-slate mb-8">
                    We couldn't find that page — it may have moved. Here are a few ways to get where you're going.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <Link href="/" className="btn btn-primary text-lg px-8 py-3">
                        Return Home
                    </Link>
                    <a href="tel:0435006420" className="btn btn-outline text-lg px-8 py-3 inline-flex items-center justify-center gap-2">
                        <Phone className="w-5 h-5" />
                        Call 0435 006 420
                    </a>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
                    <Link href="/services" className="text-navy font-semibold hover:text-gold transition-colors">Services</Link>
                    <Link href="/gallery" className="text-navy font-semibold hover:text-gold transition-colors">Gallery</Link>
                    <Link href="/reviews" className="text-navy font-semibold hover:text-gold transition-colors">Reviews</Link>
                    <Link href="/contact" className="text-navy font-semibold hover:text-gold transition-colors">Contact</Link>
                </div>
            </div>
        </div>
    );
}
