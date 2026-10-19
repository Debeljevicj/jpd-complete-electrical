'use client';

import { useEffect } from 'react';

/**
 * Notes where this visit came from (lib/attribution.mjs), once per page load.
 *
 * Kept off the page's loading path entirely. The address and referrer are
 * read the moment the page has mounted (a few property reads), because a quick
 * click to another page changes them; the module that files them away is only
 * fetched once the browser is idle. Nothing here is in the bundle every page
 * downloads up front, so it can't slow a page down.
 *
 * Once per load, not per route change: Next navigates between pages without
 * reloading, and those moves are within the site. Separate from Analytics
 * because it has to run whether or not GA is switched on.
 */
export default function AttributionCapture() {
    useEffect(() => {
        const visit = {
            search: window.location.search,
            referrer: document.referrer,
            host: window.location.host,
            path: window.location.pathname,
        };
        const run = () => {
            import('@/lib/attribution.mjs')
                .then((m) => m.captureVisit(visit))
                .catch(() => { /* offline or blocked: the visit just isn't noted */ });
        };
        const idle = (window as Window & {
            requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
        }).requestIdleCallback;
        // Safari has no requestIdleCallback; a short timeout does the same job.
        // Called on window: detached, Chrome throws "Illegal invocation".
        if (typeof idle === 'function') idle.call(window, run, { timeout: 3000 });
        else window.setTimeout(run, 1500);
    }, []);
    return null;
}
