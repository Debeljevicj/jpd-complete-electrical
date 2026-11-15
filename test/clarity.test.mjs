// Microsoft Clarity (components/Clarity.tsx). The site enforces a CSP
// (public/_headers), and a host missing from it fails silently: Clarity's
// dashboard just stays empty. Microsoft's list: https://*.clarity.ms (the tag
// on www, the script on scripts., the uploads on a letter subdomain) and
// https://c.bing.com.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (...p) => readFileSync(join(root, ...p), 'utf8');

const csp = read('public', '_headers')
    .split(/\r?\n/)
    .find((l) => l.trim().startsWith('Content-Security-Policy:'));
const directive = (name) => {
    const d = csp.split(';').map((s) => s.trim()).find((s) => s.startsWith(name + ' ') || s.includes(': ' + name + ' '));
    return d ? d.split(/\s+/) : [];
};

test('the CSP lets Clarity load, upload and sync its cookie', () => {
    assert.ok(csp, 'a CSP line exists');
    assert.ok(directive('script-src').includes('https://*.clarity.ms'), 'script-src');
    assert.ok(directive('connect-src').includes('https://*.clarity.ms'), 'connect-src');
    assert.ok(directive('connect-src').includes('https://c.bing.com'), 'connect-src bing');
    assert.ok(directive('img-src').includes('https://*.clarity.ms'), 'img-src');
    assert.ok(directive('img-src').includes('https://c.bing.com'), 'img-src bing');
});

test('Clarity loads from its own tag URL, after the page has loaded', () => {
    const src = read('components', 'Clarity.tsx');
    assert.match(src, /https:\/\/www\.clarity\.ms\/tag\/\$\{encodeURIComponent\(CLARITY_PROJECT_ID\)\}/);
    assert.match(src, /addEventListener\('load'/, 'waits for the load event');
    assert.doesNotMatch(src, /next\/script/, 'not a next/script tag in the head');
});

test('Clarity is wired into the layout and off until a project ID is set', () => {
    assert.match(read('app', 'layout.tsx'), /<Clarity \/>/);
    const cfg = read('data', 'analytics.ts');
    assert.match(cfg, /export const clarityEnabled = /);
});

test('every GA event also reaches Clarity, and the contact form is masked', () => {
    const analytics = read('components', 'Analytics.tsx');
    const body = analytics.slice(analytics.indexOf('export function trackEvent'));
    assert.ok(body.indexOf('clarityEvent(name)') < body.indexOf("typeof window.gtag !== 'function'"),
        'Clarity gets the event even when GA has not loaded');
    assert.match(read('app', 'contact', 'ContactContent.tsx'), /<form[^>]*data-clarity-mask="true"/);
});

test('the privacy policy names Clarity, only when it is on', () => {
    const page = read('app', 'privacy', 'page.tsx');
    assert.match(page, /clarityEnabled && \(\s*<li>\s*<strong>Microsoft Clarity\.<\/strong>/);
    assert.match(page, /_clck/);
});
