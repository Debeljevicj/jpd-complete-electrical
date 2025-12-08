import { ReactNode } from 'react';

interface SectionHeadingProps {
    children: ReactNode;
    centered?: boolean;
    className?: string;
}

export default function SectionHeading({ children, centered = false, className = '' }: SectionHeadingProps) {
    return (
        <h2
            className={`text-3xl md:text-4xl font-bold text-navy gold-underline mb-8 ${centered ? 'text-center mx-auto' : ''
                } ${className}`}
        >
            {children}
        </h2>
    );
}
