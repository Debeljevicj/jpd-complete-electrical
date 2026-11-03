import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

// Every article is linked into the service pages, suburb pages, guides and
// other jobs (the rule since 3 Nov 2026). A typo in one of those links is a
// 404 on the live site that nothing else would catch, so check them all.

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => readFileSync(join(ROOT, p), 'utf8').replace(/\r\n/g, '\n');

const blogFiles = readdirSync(join(ROOT, 'data')).filter((f) => /^(blog-.*|job-reports)\.ts$/.test(f));
const articleSlugs = new Set(
    blogFiles.flatMap((f) => [...read(`data/${f}`).matchAll(/^ {8}slug: '([^']+)'/gm)].map((m) => m[1]))
);
const serviceSlugs = new Set(
    readdirSync(join(ROOT, 'data/services'))
        .flatMap((f) => [...read(`data/services/${f}`).matchAll(/slug: '([a-z0-9-]+-adelaide)'/g)].map((m) => m[1]))
);
const suburbSlugs = new Set([...read('data/suburbs.ts').matchAll(/slug: '(electrician-[a-z-]+)'/g)].map((m) => m[1]));
const categorySlugs = new Set([...read('lib/recent-work.ts').matchAll(/^ {8}slug: '([^']+)'/gm)].map((m) => m[1]));

function pageExists(path) {
    const clean = path.split(/[?#]/)[0].replace(/\/+$/, '');
    if (clean === '') return true;
    const parts = clean.slice(1).split('/');
    if (parts[0] === 'blog' && parts.length === 2) return articleSlugs.has(parts[1]);
    if (parts[0] === 'recent-work' && parts.length === 2) return categorySlugs.has(parts[1]);
    if (parts.length === 1 && (serviceSlugs.has(parts[0]) || suburbSlugs.has(parts[0]))) return true;
    return existsSync(join(ROOT, 'app', ...parts, 'page.tsx'));
}

const jobReports = read('data/job-reports.ts');
const jobs = jobReports.split(/\n {4}\{\n {8}slug: /).slice(1).map((block) => ({
    slug: block.match(/^'([^']+)'/)[1],
    block,
}));

test('the parsers found the site', () => {
    assert.ok(articleSlugs.size > 40, `only ${articleSlugs.size} articles parsed`);
    assert.ok(serviceSlugs.size >= 15);
    assert.ok(suburbSlugs.size >= 15);
    assert.ok(jobs.length > 20);
});

test('every internal link in an article goes to a page that exists', () => {
    const broken = [];
    let checked = 0;
    for (const f of blogFiles) {
        const src = read(`data/${f}`);
        for (const m of src.matchAll(/href=\\?"(\/[^"\\]*)\\?"/g)) {
            checked++;
            if (!pageExists(m[1])) broken.push(`${f}: ${m[1]}`);
        }
    }
    assert.ok(checked > 100, `only ${checked} links found: the pattern has stopped matching`);
    assert.deepEqual(broken, []);
});

test('every related job slug is a real job report, and never the job itself', () => {
    const jobSlugs = new Set(jobs.map((j) => j.slug));
    for (const { slug, block } of jobs) {
        const related = block.match(/\n {8}related: \[([^\]]*)\]/)?.[1];
        if (!related) continue;
        for (const r of related.split(',').map((s) => s.trim().replace(/'/g, '')).filter(Boolean)) {
            assert.ok(jobSlugs.has(r), `${slug} lists unknown related job "${r}"`);
            assert.notEqual(r, slug, `${slug} lists itself as related`);
        }
    }
});
