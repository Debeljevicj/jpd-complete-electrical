#!/usr/bin/env node
/**
 * Pulls new Google reviews into data/reviews.json.
 *
 * Runs weekly from .github/workflows/refresh-reviews.yml. Uses the official
 * Places API rather than scraping the public listing: scraping Google is
 * against their terms, needs a headless browser because the page is
 * JavaScript-rendered, and gets CAPTCHA'd from CI runner IPs. It would work
 * for a fortnight and then fail silently, which is the worst outcome.
 *
 * Two deliberate constraints:
 *
 *   1. The API returns at most five reviews and you cannot choose which. So
 *      this APPENDS new ones and never deletes. The hand-picked back catalogue,
 *      including the long detailed reviews that actually sell, stays put.
 *   2. Existing reviews are left alone apart from upgrading a `derived` date to
 *      the `exact` timestamp when the API happens to return that same review.
 *
 * Usage:
 *   GOOGLE_PLACES_API_KEY=... node scripts/refresh-reviews.mjs [--dry-run]
 *
 * Place ID is read from GOOGLE_PLACE_ID, or looked up by name and printed so
 * it can be pinned in the workflow.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATA_FILE = join(ROOT, 'data', 'reviews.json');

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID;
const BUSINESS_QUERY = process.env.GOOGLE_PLACE_QUERY || 'JPD Complete Electrical, Adelaide SA';
const DRY_RUN = process.argv.includes('--dry-run');

/** Tailwind avatar colours, cycled so a new reviewer never lands colourless. */
const AVATAR_COLOURS = [
    'bg-blue-600', 'bg-green-600', 'bg-purple-600', 'bg-orange-600', 'bg-teal-600',
    'bg-indigo-600', 'bg-pink-600', 'bg-red-600', 'bg-rose-600', 'bg-violet-600',
    'bg-amber-600', 'bg-cyan-600', 'bg-sky-600', 'bg-emerald-600', 'bg-fuchsia-600',
    'bg-lime-600', 'bg-yellow-600', 'bg-slate-600', 'bg-zinc-600',
];

function fail(message) {
    console.error(`refresh-reviews: ${message}`);
    process.exit(1);
}

if (!API_KEY) {
    fail('GOOGLE_PLACES_API_KEY is not set. See docs/REVIEWS-AUTOMATION.md.');
}

/** Resolves a Place ID from the business name, for first-time setup. */
async function lookupPlaceId() {
    const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': API_KEY,
            'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress',
        },
        body: JSON.stringify({ textQuery: BUSINESS_QUERY }),
    });

    if (!res.ok) fail(`place lookup failed (${res.status}): ${await res.text()}`);

    const { places = [] } = await res.json();
    if (places.length === 0) fail(`no place found for "${BUSINESS_QUERY}"`);

    console.log('Matched places:');
    for (const p of places.slice(0, 3)) {
        console.log(`  ${p.id}  ${p.displayName?.text} - ${p.formattedAddress}`);
    }
    console.log(`\nPin this as GOOGLE_PLACE_ID: ${places[0].id}\n`);
    return places[0].id;
}

async function fetchPlace(placeId) {
    const res = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`, {
        headers: {
            'X-Goog-Api-Key': API_KEY,
            'X-Goog-FieldMask': 'id,displayName,rating,userRatingCount,reviews',
        },
    });

    if (!res.ok) fail(`place details failed (${res.status}): ${await res.text()}`);
    return res.json();
}

/**
 * Normalises a name for matching. The site shows "Daniel D" where the API
 * returns "Daniel Dawson", so comparing full strings would import a duplicate
 * of a review that is already on the site under a shortened name.
 */
function nameKey(author) {
    return (author || '').trim().toLowerCase().split(/\s+/)[0] || '';
}

/** First words of the review body, which is what actually identifies it. */
function textKey(content) {
    return (content || '')
        .toLowerCase()
        .replace(/[^a-z0-9 ]+/g, '')
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 12)
        .join(' ');
}

function isSameReview(existing, incoming) {
    if (existing.googleReviewId && incoming.googleReviewId) {
        return existing.googleReviewId === incoming.googleReviewId;
    }
    // Reviews imported by hand have no API id, so fall back to the text. The
    // body is compared on its opening words because the site's copies were
    // sometimes trimmed with an ellipsis when they were pasted in.
    const a = textKey(existing.content);
    const b = textKey(incoming.content);
    if (a && b && (a.startsWith(b) || b.startsWith(a))) return true;
    return false;
}

async function main() {
    const placeId = PLACE_ID || (await lookupPlaceId());
    const place = await fetchPlace(placeId);

    const existing = JSON.parse(readFileSync(DATA_FILE, 'utf8'));
    const incoming = (place.reviews || []).map((r) => ({
        googleReviewId: r.name || null,
        author: r.authorAttribution?.displayName?.trim() || 'Google user',
        rating: r.rating ?? 5,
        publishedAt: r.publishTime || null,
        content: (r.originalText?.text || r.text?.text || '').trim(),
    }));

    console.log(`Place: ${place.displayName?.text} (${place.rating} from ${place.userRatingCount} ratings)`);
    console.log(`API returned ${incoming.length} reviews; ${existing.length} already on file.`);

    let added = 0;
    let upgraded = 0;
    let nextId = Math.max(0, ...existing.map((r) => r.id)) + 1;

    for (const candidate of incoming) {
        if (!candidate.content) continue;

        const match = existing.find((e) => isSameReview(e, candidate));

        if (match) {
            // Already have it. Take the chance to replace a date we back-derived
            // from git history with the real timestamp from Google.
            if (match.precision !== 'exact' && candidate.publishedAt) {
                match.publishedAt = candidate.publishedAt;
                match.precision = 'exact';
                match.googleReviewId = candidate.googleReviewId;
                upgraded++;
                console.log(`  upgraded date: ${match.author} -> ${candidate.publishedAt}`);
            }
            continue;
        }

        existing.push({
            id: nextId,
            author: candidate.author,
            source: 'Google',
            rating: candidate.rating,
            publishedAt: candidate.publishedAt,
            precision: 'exact',
            content: candidate.content,
            avatarColor: AVATAR_COLOURS[nextId % AVATAR_COLOURS.length],
            googleReviewId: candidate.googleReviewId,
        });
        nextId++;
        added++;
        console.log(`  new review: ${candidate.author} (${candidate.rating} stars)`);
    }

    existing.sort((a, b) => {
        if (!a.publishedAt && !b.publishedAt) return a.id - b.id;
        if (!a.publishedAt) return 1;
        if (!b.publishedAt) return -1;
        return b.publishedAt.localeCompare(a.publishedAt) || a.id - b.id;
    });

    console.log(`\n${added} added, ${upgraded} dates upgraded.`);

    if (DRY_RUN) {
        console.log('Dry run, not writing.');
        return;
    }

    if (added === 0 && upgraded === 0) {
        console.log('Nothing changed.');
        return;
    }

    writeFileSync(DATA_FILE, JSON.stringify(existing, null, 2) + '\n');
    console.log(`Wrote ${DATA_FILE}`);
}

main().catch((err) => fail(err.stack || String(err)));
