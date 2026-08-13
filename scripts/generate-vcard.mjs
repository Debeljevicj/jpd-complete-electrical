/**
 * Generates public/justin-jpd-electrical.vcf from content/card.json.
 *
 * Runs automatically before `next build` via the "prebuild" script, so the
 * downloadable contact file can never drift from what the /card page shows.
 * Edit content/card.json, never the .vcf directly - it is overwritten here.
 *
 * This script also guards the /card route. The URL
 * https://jpdcompleteelectrical.com.au/card is printed on physical business
 * cards that cannot be recalled, so if the route file goes missing the build
 * fails loudly rather than quietly shipping a 404.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const REQUIRED_ROUTE = join(root, 'app', 'card', 'page.tsx');
const CONTENT = join(root, 'content', 'card.json');

function fail(message) {
    console.error(`\n  generate-vcard: ${message}\n`);
    process.exit(1);
}

if (!existsSync(REQUIRED_ROUTE)) {
    fail(
        'app/card/page.tsx is missing.\n' +
        '  /card is printed on physical business cards and must keep returning 200.\n' +
        '  Restore the route, or if the page genuinely moved, put a redirect at /card first.'
    );
}

if (!existsSync(CONTENT)) fail('content/card.json is missing.');

let content;
try {
    content = JSON.parse(readFileSync(CONTENT, 'utf8'));
} catch (err) {
    fail(`content/card.json is not valid JSON: ${err.message}`);
}

const { contact, vcard } = content;
for (const field of ['displayName', 'org', 'title', 'phoneE164', 'email', 'website']) {
    if (!contact?.[field]) fail(`content/card.json is missing contact.${field}`);
}
if (!/^\+\d{8,15}$/.test(contact.phoneE164)) {
    fail(`contact.phoneE164 must be E.164 (e.g. +61435006420), got "${contact.phoneE164}"`);
}

// RFC 2426: escape backslash, comma and semicolon in property values.
const esc = (v) => String(v).replace(/\\/g, '\\\\').replace(/,/g, '\\,').replace(/;/g, '\\;');

// Surname is deliberately blank so the contact saves as "Justin (Electrician)",
// which is what people search for in their phone.
const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:;${esc(contact.displayName)};;;`,
    `FN:${esc(contact.displayName)}`,
    `ORG:${esc(contact.org)}`,
    `TITLE:${esc(contact.title)}`,
    `TEL;TYPE=CELL,VOICE:${esc(contact.phoneE164)}`,
    `EMAIL;TYPE=INTERNET:${esc(contact.email)}`,
    `URL:${esc(contact.website)}`,
    'END:VCARD',
];

const outPath = join(root, 'public', (vcard?.path ?? '/justin-jpd-electrical.vcf').replace(/^\//, ''));
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, lines.join('\r\n') + '\r\n', 'utf8');

console.log(`generate-vcard: wrote ${outPath.replace(root, '.')} (${contact.phoneE164})`);
