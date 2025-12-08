'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: "Do you offer free quotes?",
        answer: "Yes! We provide free, no-obligation quotes for all our services. We believe in transparent pricing with no hidden surprises."
    },
    {
        question: "Are you licensed and insured?",
        answer: "Absolutely. We are fully licensed (PGE296191) and carry comprehensive public liability insurance for your peace of mind."
    },
    {
        question: "What areas do you service?",
        answer: "We service all of Adelaide and its surrounding suburbs, including northern, eastern, southern, western, foothills, beachside, and hills regions. We also service remote and regional South Australian locations when required."
    },
    {
        question: "Do you do emergency electrical work?",
        answer: "Yes, we understand some electrical issues can't wait. Contact us immediately for urgent electrical requirements."
    },
    {
        question: "Can you install customer-supplied fittings?",
        answer: "Yes, we can install fittings you've purchased, provided they meet Australian Safety Standards. We can also supply high-quality trade-trusted brands if you prefer."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-16 bg-neutral-offwhite">
            <div className="container-custom max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
                    <p className="text-neutral-slate">Common questions about our electrical services.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg font-bold text-navy">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-gold" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400" />
                                )}
                            </button>

                            <div
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="text-neutral-slate leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
