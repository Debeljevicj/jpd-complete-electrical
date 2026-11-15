/**
 * Google Analytics 4 measurement ID.
 *
 * Paste the ID from Google Analytics here. It looks like `G-XXXXXXXXXX` and is
 * NOT a secret: it is visible in the page source of every site that uses GA, so
 * it belongs in the repo rather than in an environment variable.
 *
 * Find it in Google Analytics under Admin > Data Streams > (your web stream) >
 * Measurement ID, top right.
 *
 * While this is empty, no analytics script loads at all and nothing breaks. The
 * env var override exists so a staging build can point somewhere else without a
 * code change.
 */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-W76JZ5EJKL';

export const analyticsEnabled = GA_MEASUREMENT_ID.length > 0;

/**
 * Microsoft Clarity project ID (heatmaps and session recordings).
 *
 * Like the GA ID, not a secret: it sits in the page source of every site that
 * runs Clarity. Find it in Clarity under Settings > Overview > Project ID
 * (about ten letters and numbers, e.g. `abcd1234ef`).
 *
 * While this is empty, Clarity never loads, the privacy policy leaves it out,
 * and nothing else changes.
 */
export const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_ID || '';

export const clarityEnabled = /^[a-z0-9]{6,16}$/i.test(CLARITY_PROJECT_ID);
