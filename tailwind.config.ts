import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    DEFAULT: '#003B5C',
                    deep: '#012C45',
                },
                gold: {
                    DEFAULT: '#CDA84D',
                    dark: '#B08F3F',
                },
                neutral: {
                    offwhite: '#F8F9FA',
                    slate: '#4A4F57',
                },
                warm: {
                    50: '#FFF8F1',
                    100: '#FFEDD5',
                },
            },
            // A wide screen with a real mouse. Width alone is not enough: a phone
            // asking for the desktop site, or a tablet on its side, is wide but has
            // nothing to hover with. Used for the review-star hover cards.
            screens: {
                'can-hover': { raw: '(min-width: 1024px) and (hover: hover) and (pointer: fine)' },
            },
            fontFamily: {
                heading: ['var(--font-outfit)', 'sans-serif'],
                body: ['var(--font-inter)', 'sans-serif'],
            },
            letterSpacing: {
                heading: '0.02em',
            },
        },
    },
    plugins: [],
};

export default config;
