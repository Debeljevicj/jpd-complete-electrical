'use client';

import { useEffect } from 'react';
import { CLARITY_PROJECT_ID, clarityEnabled } from '@/data/analytics';

type ClarityFn = ((...args: unknown[]) => void) & { q?: unknown[] };

declare global {
    interface Window {
        clarity?: ClarityFn;
    }
}

/**
 * Sends a custom event to Clarity, so its recordings and heatmaps can be
 * filtered to the visits that ended in a phone tap or an enquiry. Safe to call
 * before Clarity loads (the stub below queues it) or when it's off (no-op).
 */
export function clarityEvent(name: string) {
    if (typeof window === 'undefined' || typeof window.clarity !== 'function') return;
    window.clarity('event', name);
}

/**
 * Microsoft Clarity: heatmaps, scroll depth, rage and dead clicks, and session
 * recordings.
 *
 * Kept off the page's loading path, same as AttributionCapture: nothing is
 * fetched until the page has finished loading and the browser is idle (or 2 s
 * have passed, whichever is first). Microsoft's own snippet is an inline
 * script in <head>; this does the same job from the bundle, so the CSP needs
 * no inline-script change, only Clarity's hosts (public/_headers).
 *
 * The cost of waiting: a visitor who leaves inside about two seconds isn't
 * recorded. GA still counts them. Clarity's job is how people use the pages
 * once they're on them, and that's unaffected.
 *
 * Masking stays on Clarity's default ("Balanced"): form inputs are never
 * captured. The contact form is also marked data-clarity-mask as a backstop.
 */
export default function Clarity() {
    useEffect(() => {
        if (!clarityEnabled || window.clarity) return;

        // Microsoft's queue stub: calls made before the script arrives (the
        // lead-source tag below, an early phone tap) are held and replayed.
        const stub: ClarityFn = (...args: unknown[]) => {
            (stub.q = stub.q || []).push(args);
        };
        window.clarity = stub;

        let started = false;
        const start = () => {
            if (started) return;
            started = true;
            const s = document.createElement('script');
            s.async = true;
            s.src = `https://www.clarity.ms/tag/${encodeURIComponent(CLARITY_PROJECT_ID)}`;
            document.head.appendChild(s);

            // Which channel brought this visitor, as a Clarity filter
            // ("Custom tags > lead_source"), so a heatmap can be cut to, say,
            // only the Google Business Profile visits.
            import('@/lib/attribution.mjs')
                .then((m) => window.clarity?.('set', 'lead_source', String(m.leadSource(m.readAttribution()))))
                .catch(() => { /* blocked or private mode: just no tag */ });
        };

        const whenIdle = () => {
            const idle = (window as Window & {
                requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
            }).requestIdleCallback;
            // Called on window: detached, Chrome throws "Illegal invocation".
            if (typeof idle === 'function') idle.call(window, start, { timeout: 2000 });
            else window.setTimeout(start, 1000);
        };

        if (document.readyState === 'complete') whenIdle();
        else window.addEventListener('load', whenIdle, { once: true });
    }, []);
    return null;
}
