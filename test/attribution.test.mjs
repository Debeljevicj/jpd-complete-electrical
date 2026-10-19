// The contact form's "Tracking" line (lib/attribution.mjs). The portal parses
// this line back out of the enquiry email, so its shape is a contract.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { touchFromVisit, mergeTouch, trackingLine, leadSource, clean, MAX_AGE_DAYS } from '../lib/attribution.mjs';

const HOST = 'jpdcompleteelectrical.com.au';
const DAY = 24 * 60 * 60 * 1000;
const T0 = new Date(2026, 9, 12, 9, 30).getTime();

test('a tagged Business Profile click keeps its UTM tags and landing page', () => {
    const t = touchFromVisit({ search: '?utm_source=google&utm_medium=organic&utm_campaign=gbp', referrer: 'https://www.google.com/', host: HOST, path: '/', now: T0 });
    assert.equal(t.utm_source, 'google');
    assert.equal(t.utm_campaign, 'gbp');
    assert.equal(t.ref, 'google.com');
    assert.equal(t.direct, false);
});

test('the referrer is kept as a host only, never the full URL', () => {
    const t = touchFromVisit({ referrer: 'https://www.bing.com/search?q=electrician+wynn+vale', host: HOST, path: '/services/', now: T0 });
    assert.equal(t.ref, 'bing.com');
    assert.doesNotMatch(trackingLine({ first: t, latest: t }), /electrician/);
});

test('a click id is recorded as its kind, never its value', () => {
    const t = touchFromVisit({ search: '?gclid=Cj0KCQjw-secret', host: HOST, path: '/', now: T0 });
    assert.equal(t.click, 'gclid');
    assert.doesNotMatch(trackingLine({ first: t, latest: t }), /secret/);
});

test('moving between pages on the site is not an arrival', () => {
    assert.equal(touchFromVisit({ referrer: `https://${HOST}/services/`, host: HOST, path: '/contact/', now: T0 }), null);
    assert.equal(touchFromVisit({ referrer: `https://www.${HOST}/`, host: HOST, path: '/contact/', now: T0 }), null);
});

test('a direct visit never replaces the arrival that brought them', () => {
    const chat = touchFromVisit({ search: '?utm_source=chatgpt.com', host: HOST, path: '/ev-chargers/', now: T0 });
    const direct = touchFromVisit({ host: HOST, path: '/contact/', now: T0 + 3 * DAY });
    const state = mergeTouch(mergeTouch(null, chat, T0), direct, T0 + 3 * DAY);
    assert.equal(state.latest.utm_source, 'chatgpt.com');
    assert.equal(leadSource(state), 'chatgpt.com');
});

test('the first arrival is kept when a later one differs, under first_', () => {
    const fb = touchFromVisit({ search: '?utm_source=facebook&utm_medium=social', host: HOST, path: '/', now: T0 });
    const g = touchFromVisit({ referrer: 'https://www.google.com/', host: HOST, path: '/contact/', now: T0 + DAY });
    const line = trackingLine(mergeTouch(mergeTouch(null, fb, T0), g, T0 + DAY));
    assert.match(line, /^ref=google\.com; landing=\/contact\/; at=2026-10-13; first_utm_source=facebook; first_utm_medium=social; first_landing=\/; first_at=2026-10-12$/);
});

test('a first visit that was direct still says where they landed', () => {
    const d = touchFromVisit({ host: HOST, path: '/', now: T0 });
    assert.equal(trackingLine(mergeTouch(null, d, T0)), 'landing=/; at=2026-10-12');
    assert.equal(leadSource(mergeTouch(null, d, T0)), 'direct');
});

test('touches older than the window are forgotten', () => {
    const old = touchFromVisit({ search: '?utm_source=yellowpages', host: HOST, path: '/', now: T0 });
    const later = T0 + (MAX_AGE_DAYS + 1) * DAY;
    assert.deepEqual(mergeTouch(mergeTouch(null, old, T0), null, later), { first: null, latest: null });
});

test('a value can never break the line apart', () => {
    assert.equal(clean('a; b=c\nd'), 'a b c d');
    const t = touchFromVisit({ search: '?utm_campaign=spring%3B%20sale%3Dbig', host: HOST, path: '/', now: T0 });
    assert.equal(t.utm_campaign, 'spring sale big');
});

test('no storage, no line', () => {
    assert.equal(trackingLine({ first: null, latest: null }), '');
    assert.equal(trackingLine(null), '');
});
