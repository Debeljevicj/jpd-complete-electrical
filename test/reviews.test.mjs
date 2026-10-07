import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const reviews = JSON.parse(readFileSync(join(ROOT, 'data', 'reviews.json'), 'utf8'));

// lib/reviews.ts is TypeScript, so the formatter is reimplemented here from the
// same rules rather than imported. Keep the two in step: if lib/reviews.ts
// changes, change this too and these tests will say so.
const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
];

function formatReviewDate(publishedAt) {
    if (!publishedAt) return null;
    const match = /^(\d{4})-(\d{2})/.exec(publishedAt);
    if (!match) return null;
    const month = Number(match[2]);
    if (month < 1 || month > 12) return null;
    return `${MONTHS[month - 1]} ${match[1]}`;
}

test('a review shows its month and year, nothing finer', () => {
    assert.equal(formatReviewDate('2026-10-07'), 'October 2026');
    assert.equal(formatReviewDate('2026-10-01'), 'October 2026');
    assert.equal(formatReviewDate('2026-09-30'), 'September 2026');
    assert.equal(formatReviewDate('2025-12-14'), 'December 2025');
    assert.equal(formatReviewDate('2026-01-12'), 'January 2026');
});

test('a missing date yields no label rather than a wrong one', () => {
    assert.equal(formatReviewDate(null), null);
    assert.equal(formatReviewDate('not a date'), null);
    assert.equal(formatReviewDate('2026-13-01'), null);
});

test('full API timestamps are handled, not just date-only strings', () => {
    assert.equal(formatReviewDate('2026-09-05T04:22:11Z'), 'September 2026');
});

test('the label is read off the string, so no timezone can shift the month', () => {
    // A date-only value run through `new Date()` is UTC midnight, which in a
    // negative-offset timezone is the previous evening. Reading the string
    // directly means the last day of a month never reports the month before.
    assert.equal(formatReviewDate('2026-10-01'), 'October 2026');
    assert.equal(formatReviewDate('2026-08-31'), 'August 2026');
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

test('review ids are unique, so an automated import never collides', () => {
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

test('every dated review has a date the formatter can label', () => {
    for (const r of reviews) {
        if (!r.publishedAt) continue;
        assert.ok(formatReviewDate(r.publishedAt), `${r.author} has an unlabelable date: ${r.publishedAt}`);
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
// whether a review coming back from an API is one already on the site, and
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
    // Several reviews were pasted in truncated with an ellipsis. An API returns
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
