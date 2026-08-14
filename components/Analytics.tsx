'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { GA_MEASUREMENT_ID, analyticsEnabled } from '@/data/analytics';

declare global {
    interface Window {
        dataLayer?: unknown[];
        gtag?: (...args: unknown[]) => void;
    }
}

/**
 * Fires a GA4 event. Safe to call when analytics is off or the script has not
 * loaded yet, which matters because the phone links work regardless and must
 * never depend on analytics being present.
 */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    window.gtag('event', name, params);
}

/**
 * GA4 for a statically exported site.
 *
 * Two things this handles that the copy-paste snippet does not:
 *
 * 1. Route changes. Next does client-side navigation, so the browser never
 *    reloads and GA would record one page view for a whole session. The effect
 *    below sends a page_view on each pathname change.
 *
 * 2. Phone clicks. For a trade business the conversion is a phone call, not a
 *    form submit, and a call leaves no trace in analytics by default. A single
 *    delegated listener catches every tel: link on the site, including the
 *    sticky mobile CTA and the ones inside page copy.
 */
export default function Analytics() {
    const pathname = usePathname();

    // The init script sets send_page_view: false, so every page view including the
    // first is sent from here. Doing it the other way round double-counts the
    // landing page: gtag('config') fires its own page_view, and this effect then
    // fires a second one for the same path on mount.
    useEffect(() => {
        if (!analyticsEnabled || typeof window.gtag !== 'function') return;
        window.gtag('event', 'page_view', {
            page_path: pathname,
            page_location: window.location.href,
            page_title: document.title,
        });
    }, [pathname]);

    useEffect(() => {
        if (!analyticsEnabled) return;

        const onClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement | null;
            const link = target?.closest?.('a');
            if (!link) return;

            const href = link.getAttribute('href') || '';
            if (href.startsWith('tel:')) {
                trackEvent('phone_call_click', {
                    // Which page the call came from is the useful part: it tells us
                    // whether the suburb pages actually generate calls.
                    page_path: window.location.pathname,
                    link_text: link.textContent?.trim().slice(0, 60) || '',
                });
            } else if (href.startsWith('mailto:')) {
                trackEvent('email_click', { page_path: window.location.pathname });
            }
        };

        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    if (!analyticsEnabled) return null;

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    window.gtag = gtag;
                    gtag('js', new Date());
                    gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true, send_page_view: false });
                `}
            </Script>
        </>
    );
}
