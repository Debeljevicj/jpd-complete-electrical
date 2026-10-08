/**
 * Every blog post ends with an FAQ section. Justin's standing rule, 28 Sep 2026.
 *
 * The `faqs` field on BlogPost is required, so TypeScript already refuses a post
 * without one. This covers what the type can't: an empty or token list, answers
 * that break the house style, and the same question turning up on two posts,
 * where the pages would compete for it instead of each owning their own.
 *
 * Run with: npm test
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => readFileSync(join(root, p), 'utf8');

// Every guide module is picked up by name, so a new data/blog-guides-*.ts file
// is checked from the moment it exists rather than when someone remembers to
// list it here. Five modules went unchecked for a while because of that.
const FILES = [
    'data/blog-posts.ts',
    'data/job-reports.ts',
    ...readdirSync(join(root, 'data'))
        .filter((f) => /^blog-guides-.*\.ts$/.test(f))
        .sort()
        .map((f) => `data/${f}`),
];

const MIN_FAQS = 3;

/** Single-quoted TS string literals following `key:`, unescaped. */
function strings(src, key) {
    const re = new RegExp(`${key}:\\s*'((?:[^'\\\\]|\\\\.)*)'`, 'g');
    return [...src.matchAll(re)].map((m) => m[1].replace(/\\(.)/g, '$1'));
}

/** One entry per post: its slug and the text of its faqs array. */
function posts() {
    const out = [];
    for (const file of FILES) {
        // Posts are the only objects declared at this depth, which keeps the
        // interface's `slug: string` and nested gallery entries out of it.
        const chunks = read(file).split(/\n        slug: '/).slice(1);
        for (const chunk of chunks) {
            const slug = chunk.slice(0, chunk.indexOf("'"));
            const start = chunk.indexOf('\n        faqs: [');
            const end = start === -1 ? -1 : chunk.indexOf('\n        ],', start);
            out.push({ file, slug, faqs: start === -1 || end === -1 ? null : chunk.slice(start, end) });
        }
    }
    return out;
}

const all = posts();

test('the post list was actually found', () => {
    assert.ok(all.length >= 40, `only ${all.length} posts found, the splitter has probably broken`);
});

test(`every post has at least ${MIN_FAQS} FAQs`, () => {
    for (const p of all) {
        assert.ok(p.faqs, `${p.slug} (${p.file}) has no faqs block`);
        const q = strings(p.faqs, 'question');
        const a = strings(p.faqs, 'answer');
        assert.ok(q.length >= MIN_FAQS, `${p.slug} has ${q.length} FAQs, needs ${MIN_FAQS}`);
        assert.equal(q.length, a.length, `${p.slug} has a question without an answer`);
    }
});

test('questions are questions and answers are real answers', () => {
    for (const p of all) {
        for (const q of strings(p.faqs ?? '', 'question')) {
            assert.ok(q.trim().endsWith('?'), `${p.slug}: "${q}" doesn't end in a question mark`);
        }
        for (const a of strings(p.faqs ?? '', 'answer')) {
            const words = a.split(/\s+/).length;
            assert.ok(words >= 25, `${p.slug}: an answer of ${words} words is too thin to be worth marking up`);
        }
    }
});

test('no em or en dashes in FAQ copy', () => {
    // House style for blog copy: commas, full stops, colons or brackets instead.
    for (const p of all) {
        assert.ok(!/[–—]/.test(p.faqs ?? ''), `${p.slug} has a dash in its FAQs`);
    }
});

test('no question appears on two posts', () => {
    const seen = new Map();
    const norm = (q) => q.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim();
    for (const p of all) {
        for (const q of strings(p.faqs ?? '', 'question')) {
            const key = norm(q);
            assert.ok(!seen.has(key), `"${q}" is on both ${seen.get(key)} and ${p.slug}`);
            seen.set(key, p.slug);
        }
    }
});
