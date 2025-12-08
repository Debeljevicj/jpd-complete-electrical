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
                    DEFAULT: '#F5D042',
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
            fontFamily: {
                heading: ['var(--font-montserrat)', 'sans-serif'],
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
