import SectionHeading from '@/components/SectionHeading';
import ClientReviews from '@/components/ClientReviews';
import Button from '@/components/Button';
import { Star, ExternalLink } from 'lucide-react';

export const metadata = {
    title: 'Customer Reviews | JPD Complete Electrical Adelaide',
    description: 'Read what our satisfied customers say about our electrical services. 5-star rated Adelaide electrician for residential and commercial projects.',
};

export default function ReviewsPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-navy text-white py-20">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Client Reviews</h1>
                    <p className="text-xl text-gold">See What Our Customers Say</p>
                </div>
            </section>

            {/* Reviews Content */}
            <section className="section-padding bg-neutral-offwhite">
                <div className="container-custom">
                    <ClientReviews />
                </div>
            </section>

            {/* Leave a Review CTA */}
            <section className="section-padding bg-white">
                <div className="container-custom text-center">
                    <SectionHeading centered>Had a Great Experience?</SectionHeading>
                    <p className="text-neutral-slate text-lg mb-8 max-w-2xl mx-auto">
                        We would love to hear about your experience with JPD Complete Electrical.
                        Your feedback helps us improve and helps others make informed decisions.
                    </p>
                    <a
                        href="https://g.page/r/CW2LCGVNt7qSEAI/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-gold text-lg px-8 py-4 inline-flex items-center gap-2"
                    >
                        Leave a Google Review <ExternalLink className="w-5 h-5" />
                    </a>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-navy text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Quality Service?</h2>
                    <p className="text-xl mb-8 text-white/90">
                        Join our satisfied customers across Adelaide
                    </p>
                    <Button href="/contact" variant="gold" className="text-lg px-8 py-4">
                        Get Your Free Quote
                    </Button>
                </div>
            </section>
        </>
    );
}
