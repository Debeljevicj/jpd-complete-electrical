import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const reviews = JSON.parse(readFileSync(join(ROOT, 'data', 'reviews.json'), 'utf8'));

// lib/reviews.ts is TypeScript, so the formatter is reimplemented here from the
// same rules rather than imported. Keep the two in step: if the thresholds in
// lib/reviews.ts change, change them here too and these tests will say so.
const MINUTE = 60_000, HOUR = 60 * MINUTE, DAY = 24 * HOUR;
const WEEK = 7 * DAY, MONTH = 30.44 * DAY, YEAR = 365.25 * DAY;

function formatReviewAge(publishedAt, now = new Date()) {
    if (!publishedAt) return null;
    const iso = /^\d{4}-\d{2}-\d{2}$/.test(publishedAt) ? `${publishedAt}T12:00:00Z` : publishedAt;
    const then = new Date(iso).getTime();
    if (Number.isNaN(then)) return null;
    const delta = now.getTime() - then;
    if (delta < 0) return 'just now';
    if (delta < HOUR) return 'just now';
    if (delta < DAY) {
        const h = Math.floor(delta / HOUR);
        return h === 1 ? 'an hour ago' : `${h} hours ago`;
    }
    if (delta < WEEK) {
        const d = Math.floor(delta / DAY);
        return d === 1 ? 'a day ago' : `${d} days ago`;
    }
    if (delta < MONTH) {
        const w = Math.floor(delta / WEEK);
        return w === 1 ? 'a week ago' : `${w} weeks ago`;
    }
    if (delta < YEAR) {
        const m = Math.max(1, Math.floor(delta / MONTH));
        return m === 1 ? 'a month ago' : `${m} months ago`;
    }
    const y = Math.floor(delta / YEAR);
    return y === 1 ? 'a year ago' : `${y} years ago`;
}

const NOW = new Date('2026-09-07T12:00:00Z');

test('review ages are phrased the way Google phrases them', () => {
    assert.equal(formatReviewAge('2026-09-07', NOW), 'just now');
    assert.equal(formatReviewAge('2026-09-06', NOW), 'a day ago');
    assert.equal(formatReviewAge('2026-09-04', NOW), '3 days ago');
    assert.equal(formatReviewAge('2026-08-28', NOW), 'a week ago');
    assert.equal(formatReviewAge('2026-08-17', NOW), '3 weeks ago');
    assert.equal(formatReviewAge('2026-07-28', NOW), 'a month ago');
    assert.equal(formatReviewAge('2026-05-20', NOW), '3 months ago');
    assert.equal(formatReviewAge('2025-06-01', NOW), 'a year ago');
});

test('a missing date yields no label rather than a wrong one', () => {
    assert.equal(formatReviewAge(null, NOW), null);
    assert.equal(formatReviewAge('not a date', NOW), null);
});

test('a date-only value never reads as being in the future', () => {
    // Anchoring at midday means a timezone offset cannot tip today into tomorrow.
    assert.equal(formatReviewAge('2026-09-07', new Date('2026-09-07T00:30:00Z')), 'just now');
});

test('full API timestamps are handled, not just date-only strings', () => {
    assert.equal(formatReviewAge('2026-09-05T04:22:11Z', NOW), '2 days ago');
});

test('every review has the fields the components render', () => {
    for (const r of reviews) {
        assert.ok(Number.isInteger(r.id), `id missing on ${r.author}`);
        assert.ok(r.author, `author missing on id ${r.id}`);
        assert.ok(['Google', 'Facebook'].includes(r.source), `bad source on ${r.author}`);
        assert.ok(r.rating >= 1 && r.rating <= 5, `bad rating on ${r.author}`);
        assert.ok(r.content && r.content.length > 10, `content missing on ${r.author}`);
        assert.ok(/^bg-/.test(r.avatarColor), `avatarColor missing on ${r.author}`);
        assert.ok(['exact', 'derived', 'unknown'].includes(r.precision), `bad precision on ${r.author}`);
    }
});

test('review ids are unique, so the refresh script never collides', () => {
    const ids = reviews.map((r) => r.id);
    assert.equal(new Set(ids).size, ids.length, 'duplicate review id');
});

test('no review is dated in the future', () => {
    for (const r of reviews) {
        if (!r.publishedAt) continue;
        assert.ok(
            new Date(r.publishedAt).getTime() <= Date.now(),
            `${r.author} is dated in the future: ${r.publishedAt}`
        );
    }
});

test('a review without a date declares itself unknown', () => {
    for (const r of reviews) {
        if (r.publishedAt === null) {
            assert.equal(r.precision, 'unknown', `${r.author} has no date but claims ${r.precision}`);
        }
    }
});

// The refresh script's matcher, reimplemented. This is the part that decides
// whether a review coming back from the API is one already on the site, and
// getting it wrong means duplicate reviews on the homepage.
function textKey(content) {
    return (content || '').toLowerCase().replace(/[^a-z0-9 ]+/g, '')
        .split(/\s+/).filter(Boolean).slice(0, 12).join(' ');
}
function isSameReview(existing, incoming) {
    if (existing.googleReviewId && incoming.googleReviewId) {
        return existing.googleReviewId === incoming.googleReviewId;
    }
    const a = textKey(existing.content), b = textKey(incoming.content);
    return Boolean(a && b && (a.startsWith(b) || b.startsWith(a)));
}

test('an already-imported review is recognised despite a trimmed body', () => {
    // Several reviews were pasted in truncated with an ellipsis. The API returns
    // the full text, and matching on the whole string would re-import them.
    const onFile = reviews.find((r) => r.author === 'Daniel D');
    assert.ok(onFile, 'expected the Daniel D review on file');
    const fromApi = {
        googleReviewId: 'places/x/reviews/y',
        content: 'Had Justin attend my workplace to find and repair an electrical fault. Not only did he arrive promptly, but he also took the time to clearly explain every step of the process. Exceptional service and I would recommend him to anyone.',
    };
    assert.equal(isSameReview(onFile, fromApi), true);
});

test('two different reviews are not treated as the same', () => {
    const a = reviews.find((r) => r.author === 'Matt W');
    const b = reviews.find((r) => r.author === 'Kathy S');
    assert.ok(a && b);
    assert.equal(isSameReview(a, { googleReviewId: null, content: b.content }), false);
});

test('the Google id wins over the text when both sides have one', () => {
    const same = { googleReviewId: 'places/p/reviews/1', content: 'totally different words here' };
    const other = { googleReviewId: 'places/p/reviews/1', content: 'nothing alike at all' };
    assert.equal(isSameReview(same, other), true);
});
