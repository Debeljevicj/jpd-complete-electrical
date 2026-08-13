/**
 * Guards the /card digital business card.
 *
 * The URL https://jpdcompleteelectrical.com.au/card is printed on physical
 * business cards already in people's wallets. It cannot be renamed, moved or
 * deleted, and the contact details it hands out must match the page.
 *
 * Run with: npm test
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (...p) => readFileSync(join(root, ...p), 'utf8');

const content = JSON.parse(read('content', 'card.json'));

test('/card route file still exists', () => {
    assert.ok(
        existsSync(join(root, 'app', 'card', 'page.tsx')),
        'app/card/page.tsx is missing - /card is printed on physical business cards'
    );
});

test('card content has the fields the page and vCard need', () => {
    for (const field of ['displayName', 'org', 'title', 'phoneE164', 'email', 'website']) {
        assert.ok(content.contact?.[field], `content.${field} is missing`);
    }
    assert.match(content.contact.phoneE164, /^\+\d{8,15}$/, 'phoneE164 must be E.164 format');
    assert.ok(content.reviewUrl?.startsWith('https://'), 'reviewUrl must be https');
});

test('generated vCard matches content/card.json', () => {
    const vcfPath = content.vcard.path.replace(/^\//, '');
    assert.ok(existsSync(join(root, 'public', vcfPath)), `public/${vcfPath} not generated - run npm run build`);

    const vcf = read('public', vcfPath);
    assert.match(vcf, /^BEGIN:VCARD/, 'vCard must start with BEGIN:VCARD');
    assert.match(vcf, /END:VCARD/, 'vCard must end with END:VCARD');
    assert.ok(vcf.includes(content.contact.phoneE164), 'vCard phone does not match content/card.json');
    assert.ok(vcf.includes(content.contact.email), 'vCard email does not match content/card.json');
    assert.ok(vcf.includes(content.contact.website), 'vCard website does not match content/card.json');
});

test('page.tsx does not hardcode contact details', () => {
    const page = read('app', 'card', 'page.tsx');
    const digits = content.contact.phoneE164.replace(/^\+61/, '0');

    assert.ok(!page.includes(digits), `page.tsx hardcodes the phone number (${digits}) - read it from content/card.json instead`);
    assert.ok(!page.includes(content.contact.phoneDisplay), 'page.tsx hardcodes the display phone number - read it from content/card.json instead');
    assert.ok(!page.includes(content.contact.email), 'page.tsx hardcodes the email - read it from content/card.json instead');
    assert.ok(!page.includes(content.reviewUrl), 'page.tsx hardcodes the review URL - read it from content/card.json instead');
});
