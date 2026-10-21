// The short links in public/_redirects (jpdcompleteelectrical.com.au/ig and
// friends). Cloudflare Pages reads that file as it is, with no build step to
// catch a typo, and a broken line fails silently: the short link just 404s.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { touchFromVisit } from '../lib/attribution.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const lines = readFileSync(join(root, 'public', '_redirects'), 'utf8')
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'));
const rules = lines.map((l) => l.split(/\s+/));

test('every line is a path, a destination and a temporary redirect', () => {
    assert.ok(rules.length > 0);
    for (const r of rules) {
        assert.equal(r.length, 3, `three fields: ${r.join(' ')}`);
        const [from, to, status] = r;
        assert.match(from, /^\/[a-z0-9-]+\/?$/, `a short path: ${from}`);
        assert.ok(to.startsWith('/'), `stays on the site: ${to}`);
        assert.equal(status, '302', `302, never 301: ${from}`);
    }
});

test('each short link lands with its source, medium and campaign tagged', () => {
    for (const [from, to] of rules) {
        const url = new URL(to, 'https://jpdcompleteelectrical.com.au');
        const touch = touchFromVisit({ search: url.search, host: url.host, path: url.pathname, now: 0 });
        for (const k of ['utm_source', 'utm_medium', 'utm_campaign']) {
            assert.ok(touch[k], `${from} carries ${k}`);
        }
    }
});

test('every short link works with and without its trailing slash, both going the same place', () => {
    const map = new Map(rules.map(([from, to]) => [from, to]));
    for (const [from, to] of rules) {
        const twin = from.endsWith('/') ? from.slice(0, -1) : `${from}/`;
        assert.equal(map.get(twin), to, `${twin} matches ${from}`);
    }
});

test('no short link hides a real page', () => {
    for (const [from] of rules) {
        const name = from.replace(/\//g, '');
        assert.ok(!existsSync(join(root, 'app', name)), `/${name} is a page in app/`);
        assert.ok(!existsSync(join(root, 'public', name)), `/${name} is a file in public/`);
    }
});
