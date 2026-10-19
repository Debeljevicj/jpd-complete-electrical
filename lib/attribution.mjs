/*
 * Where a visitor came from, carried to the contact form.
 *
 * The form already asks "How did you find us?", and that answer wins: someone
 * ChatGPT named JPD to, who then searched Google for the number, arrives from
 * Google but found us through ChatGPT. This is the half they don't have to
 * fill in. The UTM tags on every link JPD puts out (Business Profile,
 * Facebook, directories, the QR codes), the click id an ad adds, the site
 * that linked here and the page they landed on.
 *
 * Two touches are kept, because the visit that brings someone in and the one
 * they fill the form in on are often days apart:
 *   first   the first time this browser arrived. Kept for 90 days.
 *   latest  the most recent arrival that came from somewhere. A direct visit
 *           (typed address, bookmark, a reload) never replaces it, or every
 *           lead would read "direct" by the time they got round to the form.
 *
 * Privacy: the referrer is kept as a host name only, never the full URL
 * (a search engine's can carry what was searched), the landing page as a path
 * with no query string, and a click id as which kind it was, never its value.
 * Nothing leaves the browser except inside the form the visitor sends.
 *
 * The portal reads the line this builds (thermal-report/lib/marketing.js in
 * the admin repo, parseTracking). Keys are key=value pairs split on "; ", so
 * a value never contains either.
 *
 * Plain JS rather than TS so `node --test` can import it as it is.
 */

export const STORAGE_KEY = 'jpd-attribution-v1';
export const MAX_AGE_DAYS = 90;
const DAY_MS = 24 * 60 * 60 * 1000;

export const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
// Google Ads (three kinds), Meta, Microsoft Ads.
export const CLICK_IDS = ['gclid', 'gbraid', 'wbraid', 'fbclid', 'msclkid'];

const bare = (host) => String(host || '').toLowerCase().replace(/^www\./, '');

/** A value safe to put in the line: no separators, no newlines, not too long. */
export function clean(value, max = 100) {
    return String(value == null ? '' : value)
        .replace(/[;=\r\n\t]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, max);
}

function localDay(ms) {
    const d = new Date(ms);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

/**
 * One arrival, or null when it was a page within the site.
 *
 * @param search    location.search
 * @param referrer  document.referrer
 * @param host      location.host
 * @param path      location.pathname
 * @param now       epoch ms
 * @returns {{ at, landing, ref?, click?, utm_source?, ... , direct: boolean } | null}
 */
export function touchFromVisit({ search = '', referrer = '', host = '', path = '/', now = Date.now() } = {}) {
    let params;
    try { params = new URLSearchParams(search || ''); } catch { params = new URLSearchParams(); }

    const touch = { at: now, landing: clean(path || '/', 120) || '/' };
    for (const key of UTM_KEYS) {
        const v = clean(params.get(key));
        if (v) touch[key] = v.toLowerCase();
    }
    const click = CLICK_IDS.find((k) => params.get(k));
    if (click) touch.click = click;

    let refHost = '';
    try { refHost = referrer ? new URL(referrer).host : ''; } catch { refHost = ''; }
    const internal = refHost && bare(refHost) === bare(host);
    if (refHost && !internal) touch.ref = clean(bare(refHost), 80);

    const tagged = UTM_KEYS.some((k) => touch[k]) || !!touch.click;
    // A page reached from another page on the site isn't an arrival at all.
    if (internal && !tagged) return null;
    touch.direct = !tagged && !touch.ref;
    return touch;
}

const fresh = (touch, now) => !!touch && Number.isFinite(touch.at) && now - touch.at < MAX_AGE_DAYS * DAY_MS;

/**
 * Fold an arrival into what's stored.
 * @returns {{ first, latest }}  latest is null until something non-direct arrives
 */
export function mergeTouch(stored, touch, now = Date.now()) {
    const first = fresh(stored && stored.first, now) ? stored.first : null;
    const latest = fresh(stored && stored.latest, now) ? stored.latest : null;
    if (!touch) return { first, latest };
    return {
        first: first || touch,
        latest: touch.direct ? latest : touch
    };
}

function pairs(touch, prefix = '') {
    if (!touch) return [];
    const out = [];
    for (const key of UTM_KEYS) if (touch[key]) out.push(`${prefix}${key}=${touch[key]}`);
    if (touch.ref) out.push(`${prefix}ref=${touch.ref}`);
    if (touch.click) out.push(`${prefix}click=${touch.click}`);
    if (touch.landing) out.push(`${prefix}landing=${touch.landing}`);
    if (Number.isFinite(touch.at)) out.push(`${prefix}at=${localDay(touch.at)}`);
    return out;
}

const sameOrigin = (a, b) => !!a && !!b && a.at === b.at;

/**
 * The form's "Tracking" line: the latest arrival that came from somewhere,
 * else the first (which may be direct), then the first under `first_` when it
 * was a different visit. '' when nothing is known (storage blocked).
 */
export function trackingLine(state) {
    const first = state && state.first;
    const latest = (state && state.latest) || first;
    if (!latest) return '';
    const parts = pairs(latest);
    if (first && !sameOrigin(first, latest)) parts.push(...pairs(first, 'first_'));
    return parts.join('; ').slice(0, 600);
}

/** A short label for analytics events: the source, the referring site, or "direct". */
export function leadSource(state) {
    const t = (state && (state.latest || state.first)) || null;
    if (!t) return 'unknown';
    return t.utm_source || t.ref || (t.click ? t.click : 'direct');
}

// ---------------------------------------------------------------- browser --

function read() {
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch {
        return null;
    }
}

/**
 * Record this page load's arrival. Safe anywhere: never throws.
 *
 * @param {{ search?: string, referrer?: string, host?: string, path?: string } | null} [visit]
 *               the URL as it was when the page loaded. AttributionCapture reads it straight away and
 *               loads this module later, when the browser is idle; by then a
 *               quick click to another page has already changed the address
 *               bar, so it can't be read here. Omitted, it's read now.
 */
export function captureVisit(visit = null) {
    if (typeof window === 'undefined') return;
    try {
        const now = Date.now();
        const touch = touchFromVisit({
            ...(visit || {
                search: window.location.search,
                referrer: document.referrer,
                host: window.location.host,
                path: window.location.pathname
            }),
            now
        });
        const next = mergeTouch(read(), touch, now);
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
        // Private mode or blocked storage: the form still sends, just without this.
    }
}

/** What's stored now, already aged. */
export function readAttribution() {
    if (typeof window === 'undefined') return { first: null, latest: null };
    return mergeTouch(read(), null, Date.now());
}
