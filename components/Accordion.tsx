'use client';

import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItem {
    question: string;
    answer: string;
}

interface AccordionProps {
    items: AccordionItem[];
    /** Index open on first render. Pass null to start fully collapsed. */
    defaultOpen?: number | null;
}

/**
 * Shared FAQ accordion.
 *
 * Uses a grid-rows transition rather than a max-height one so long answers are
 * never clipped — the earlier max-h-48 approach cut off anything over ~4 lines,
 * which silently hid half of the longer answers.
 */
export default function Accordion({ items, defaultOpen = 0 }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);
    // The FAQ page renders several Accordions at once. Without a per-instance
    // prefix every group emits the same faq-trigger-0 / faq-panel-0 ids, which is
    // invalid HTML and silently breaks the aria-controls pairing for all but the first.
    const uid = useId();

    return (
        <div className="space-y-3">
            {items.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                    <div
                        key={item.question}
                        className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-shadow hover:shadow-md"
                    >
                        <button
                            type="button"
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                            className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset"
                            aria-expanded={isOpen}
                            aria-controls={`faq-panel-${uid}-${index}`}
                            id={`faq-trigger-${uid}-${index}`}
                        >
                            <span className="text-base md:text-lg font-bold text-navy">{item.question}</span>
                            <ChevronDown
                                className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                                    isOpen ? 'rotate-180 text-gold' : 'text-gray-400'
                                }`}
                            />
                        </button>

                        {/*
                          * max-height rather than the grid-rows-[0fr]/[1fr] trick, which needs
                          * min-height:0 on the grid item to collapse at all and silently leaves
                          * panels stuck open otherwise. The cap is deliberately far larger than
                          * the longest answer at mobile widths — the original max-h-48 clipped
                          * anything past about four lines, hiding half of most answers.
                          */}
                        <div
                            id={`faq-panel-${uid}-${index}`}
                            role="region"
                            aria-labelledby={`faq-trigger-${uid}-${index}`}
                            className="overflow-hidden transition-all duration-300 ease-in-out"
                            style={{
                                maxHeight: isOpen ? '1000px' : '0px',
                                opacity: isOpen ? 1 : 0,
                            }}
                        >
                            <p className="px-5 md:px-6 pb-5 md:pb-6 text-neutral-slate leading-relaxed">
                                {item.answer}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
