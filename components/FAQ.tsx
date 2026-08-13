import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Accordion from './Accordion';
import { homepageFaqs } from '@/data/faqs';

/**
 * Short FAQ block for the home page. The full set lives at /faq so the home page
 * does not carry twenty-five accordions between the featured work and the
 * closing call to action.
 */
export default function FAQ() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: homepageFaqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
    };

    return (
        <section className="py-16 bg-neutral-offwhite">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="container-custom max-w-4xl">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Common Questions</h2>
                    <p className="text-neutral-slate">
                        The things people ask most before booking. Straight answers, no runaround.
                    </p>
                </div>

                <Accordion items={homepageFaqs} />

                <div className="text-center mt-8">
                    <Link
                        href="/faq"
                        className="inline-flex items-center gap-2 text-navy font-bold underline underline-offset-4 hover:text-gold transition-colors"
                    >
                        See all frequently asked questions
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
