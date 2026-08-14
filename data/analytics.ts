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
