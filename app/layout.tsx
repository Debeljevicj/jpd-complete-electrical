import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import StickyNav from "@/components/StickyNav";

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "JPD Complete Electrical | Professional Electrician Adelaide",
    description: "Reliable, honest electrical solutions for residential, commercial, medical and disability housing. Licensed electrician (PGE296191) serving Adelaide metro.",
    keywords: ["electrician Adelaide", "electrical services", "residential electrician", "commercial electrician", "medical clinic electrician", "disability housing electrician"],
    icons: {
        icon: [
            {
                url: '/favicon-light.png',
                media: '(prefers-color-scheme: light)',
            },
            {
                url: '/favicon-dark.png',
                media: '(prefers-color-scheme: dark)',
            },
        ],
    },
    metadataBase: new URL('https://www.jpdcompleteelectrical.com.au'),
    openGraph: {
        title: 'JPD Complete Electrical',
        description: 'Reliable, honest electrical solutions for residential, commercial, medical and disability housing. Licensed electrician (PGE296191) serving Adelaide metro.',
        url: 'https://www.jpdcompleteelectrical.com.au',
        siteName: 'JPD Complete Electrical',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'JPD Complete Electrical Logo',
            },
        ],
        locale: 'en_AU',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'JPD Complete Electrical',
        description: 'Reliable, honest electrical solutions for residential, commercial, medical and disability housing. Licensed electrician (PGE296191) serving Adelaide metro.',
        images: ['/og-image.png'],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
            <head>
                <JsonLd />
            </head>
            <body className="font-sans antialiased text-navy bg-white flex flex-col min-h-screen">
                <Header />
                <StickyNav />
                <Breadcrumbs />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
                <ScrollToTop />
                <StickyMobileCTA />
            </body>
        </html>
    );
}
