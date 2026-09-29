/**
 * Guards the link previews every page hands to Facebook, Messenger, WhatsApp and SMS.
 *
 * Next.js replaces a parent's openGraph wholesale instead of merging it, so a page
 * writing its own openGraph block loses the layout's image, and a page writing
 * none shares itself as the homepage. Until Sep 2026 that left 79 of 85 pages
 * with no preview image and five pointing their share link at /. lib/share.ts
 * builds the whole set, so pages go through it rather than writing tags by hand.
 *
 * Run with: npm test
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function pages(dir) {
    return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
        const p = join(dir, e.name);
        if (e.isDirectory()) return pages(p);
        return e.name === 'page.tsx' ? [p] : [];
    });
}

const all = pages(join(root, 'app')).map((p) => ({
    name: relative(root, p).split('\\').join('/'),
    src: readFileSync(p, 'utf8'),
}));

test('no page writes its own openGraph block', () => {
    const offenders = all.filter((p) => /\bopenGraph\s*:/.test(p.src)).map((p) => p.name);
    assert.deepEqual(offenders, [], 'use shareMeta() from lib/share.ts instead');
});

test('every page that sets a canonical also sets its share tags', () => {
    const missing = all
        .filter((p) => /canonical\s*:/.test(p.src) && !p.src.includes('shareMeta('))
        .map((p) => p.name);
    assert.deepEqual(missing, [], 'these pages would share themselves as the homepage');
});
