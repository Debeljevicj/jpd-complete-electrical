import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => readFileSync(join(ROOT, p), 'utf8');

const recentWork = read('lib/recent-work.ts');
const jobReports = read('data/job-reports.ts');
const servicesIndex = read('data/services/index.ts');

/** Service slugs each category claims, in declaration order. */
function categoryServices() {
    const out = [];
    const blocks = recentWork.split(/\n    \{\n/).slice(1);
    for (const block of blocks) {
        const slug = block.match(/slug:\s*'([^']+)'/)?.[1];
        const services = block.match(/services:\s*\[([\s\S]*?)\]/)?.[1] ?? '';
        if (!slug) continue;
        out.push({
            slug,
            services: services.split(',').map((s) => s.trim().replace(/'/g, '')).filter(Boolean),
        });
    }
    return out;
}

const categories = categoryServices();

test('the home page grid has six categories', () => {
    // Six fills two rows of three on desktop and three rows of two on mobile.
    // A fifth or seventh leaves a hole in the grid.
    assert.equal(categories.length, 6);
});

test('every service slug a category claims actually exists', () => {
    // A typo here would silently produce a category that collects no jobs and
    // links to a service page that 404s.
    const known = new Set(
        [...servicesIndex.matchAll(/'([a-z0-9-]+-adelaide)'/g)].map((m) => m[1])
    );
    assert.ok(known.size > 5, 'expected to parse the service display order');

    for (const { slug, services } of categories) {
        for (const s of services) {
            assert.ok(known.has(s), `category "${slug}" claims unknown service "${s}"`);
        }
    }
});

test('no service is claimed by two categories', () => {
    // Overlap would put the same job in two archives under different headings,
    // which reads as duplicate content and makes the counts misleading.
    const seen = new Map();
    for (const { slug, services } of categories) {
        for (const s of services) {
            assert.ok(!seen.has(s), `"${s}" is in both "${seen.get(s)}" and "${slug}"`);
            seen.set(s, slug);
        }
    }
});

test('every service with jobs written up is reachable from some category', () => {
    // A service with real job posts that no category collects is content that
    // nothing on the home page links to.
    const withJobs = new Set();
    for (const m of jobReports.matchAll(/services:\s*\[([^\]]*)\]/g)) {
        m[1].split(',').map((s) => s.trim().replace(/['`]/g, '')).filter(Boolean)
            .forEach((s) => withJobs.add(s));
    }
    const covered = new Set(categories.flatMap((c) => c.services));
    for (const s of withJobs) {
        assert.ok(covered.has(s), `service "${s}" has jobs but no category collects it`);
    }
});

test('the home page renders the grid from the category data', () => {
    // Guards against someone reintroducing six hand-written cards, which is how
    // the grid and the archive pages drifted apart in the first place.
    const page = read('app/page.tsx');
    assert.match(page, /workCategories\.map/);
    assert.match(page, /href=\{`\/recent-work\/\$\{category\.slug\}`\}/);
});

test('the sitemap lists the archive pages', () => {
    const sitemap = read('app/sitemap.ts');
    assert.match(sitemap, /workCategories/);
    assert.match(sitemap, /recent-work/);
});

test('ServiceCard renders a link when given an href, and a div otherwise', () => {
    // The card used to be an inert div, so the home page grid had nothing to
    // click. Both shapes must keep working: /services still uses the plain one.
    const card = read('components/ServiceCard.tsx');
    assert.match(card, /if \(href\) \{[\s\S]*<Link/);
    assert.match(card, /return <div className=\{shell\}>\{body\}<\/div>/);
});

test('every category page has a title and description for search', () => {
    for (const block of recentWork.split(/\n    \{\n/).slice(1)) {
        const slug = block.match(/slug:\s*'([^']+)'/)?.[1];
        if (!slug) continue;
        assert.match(block, /title:\s*\n?\s*'[^']{20,}'/, `${slug} needs a title`);
        assert.match(block, /description:\s*\n?\s*'[^']{50,}'/, `${slug} needs a description`);
    }
});
