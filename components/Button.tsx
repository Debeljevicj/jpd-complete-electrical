import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'gold' | 'outline';
    href?: string;
    children: ReactNode;
    className?: string;
}

export default function Button({ variant = 'primary', href, children, className = '', ...props }: ButtonProps) {
    const baseClasses = 'btn';
    const variantClasses = {
        primary: 'btn-primary',
        gold: 'btn-gold',
        outline: 'border-2 border-navy text-navy hover:bg-navy hover:text-white',
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
