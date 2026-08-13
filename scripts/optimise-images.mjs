/**
 * Generates WebP versions of public/images and builds the social share card.
 *
 * Static export sets `unoptimized: true` on next/image, so Next does no resizing
 * or re-encoding at build time. Whatever is in public/ is exactly what ships.
 * That left the site serving source photos straight off a phone: 8.9 MB of
 * images, many of them 1400x2489 portrait shots rendered in 380px-tall banners.
 *
 * Two things do the work here:
 *   1. Capping the longest edge, which is where most of the saving is. A
 *      2489px-tall photo in a 380px band is ~6x more pixels than can be seen.
 *   2. WebP, which is another 25-35% over JPEG at matched quality and is
 *      supported by every browser in current use.
 *
 * Originals are left on disk untouched. Source references point at the .webp
 * files, so the JPEGs are simply no longer requested.
 *
 * Run manually with `npm run optimise-images` after adding or replacing photos
 * in public/images, then commit the generated .webp files alongside them.
 *
 * Deliberately NOT part of prebuild. The outputs are committed, so running it on
 * every Cloudflare build would only put a native dependency (sharp) in the
 * deploy path for no benefit. It did exactly that once and took the build down.
 *
 * Safe and idempotent to re-run.
 */
import sharp from 'sharp';
import { readdirSync, statSync, writeFileSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const IMAGES = join(ROOT, 'public', 'images');
const PUBLIC = join(ROOT, 'public');

const NAVY = '#003B5C';
const GOLD = '#CDA84D';

/** Longest edge. Nothing on the site renders larger, even at 2x on a big display. */
const MAX_EDGE = 1400;
const WEBP_QUALITY = 78;

const kb = (n) => Math.round(n / 1024);

async function toWebp() {
    const files = readdirSync(IMAGES).filter((f) => /\.(jpe?g|png)$/i.test(f));
    let before = 0;
    let after = 0;

    for (const file of files) {
        const source = join(IMAGES, file);
        const target = join(IMAGES, file.replace(/\.(jpe?g|png)$/i, '.webp'));
        const size = statSync(source).size;
        before += size;

        const input = readFileSync(source);
        const meta = await sharp(input).metadata();
        const longest = Math.max(meta.width || 0, meta.height || 0);

        const pipeline = sharp(input).rotate();
        if (longest > MAX_EDGE) {
            pipeline.resize({
                width: meta.width >= meta.height ? MAX_EDGE : undefined,
                height: meta.height > meta.width ? MAX_EDGE : undefined,
                withoutEnlargement: true,
            });
        }

        const output = await pipeline.webp({ quality: WEBP_QUALITY, effort: 5 }).toBuffer();
        writeFileSync(target, output);
        after += output.length;

        const saved = Math.round((1 - output.length / size) * 100);
        if (saved >= 25) {
            console.log(`  ${file}: ${kb(size)} KB -> ${kb(output.length)} KB webp (${saved}% smaller)`);
        }
    }

    console.log(`\nPhotos: ${kb(before)} KB -> ${kb(after)} KB as WebP (${Math.round((1 - after / before) * 100)}% smaller across ${files.length} files)`);
}

async function compressLogos() {
    // The side-by-side logo is 3214px wide and renders in a 224px box. Even at
    // 2x on a large display, 1000px is generous.
    const logos = readdirSync(PUBLIC).filter((f) => /\.png$/i.test(f) && /logo/i.test(f));
    let before = 0;
    let after = 0;

    for (const file of logos) {
        const path = join(PUBLIC, file);
        const size = statSync(path).size;
        before += size;

        const input = readFileSync(path);
        const meta = await sharp(input).metadata();
        const pipeline = sharp(input);
        if (meta.width && meta.width > 1000) {
            pipeline.resize({ width: 1000, withoutEnlargement: true });
        }
        // Kept as PNG rather than WebP: these need alpha and are referenced from
        // schema and the vCard, where PNG is the safer bet.
        const output = await pipeline.png({ compressionLevel: 9, palette: true }).toBuffer();

        if (output.length < size) {
            writeFileSync(path, output);
            after += output.length;
            console.log(`  ${file}: ${kb(size)} KB -> ${kb(output.length)} KB`);
        } else {
            after += size;
        }
    }
    console.log(`\nLogos: ${kb(before)} KB -> ${kb(after)} KB`);
}

/**
 * Builds the 1200x630 social card.
 *
 * og:image previously pointed at a 96x96 favicon while the metadata declared it
 * as 1200x630, so every Facebook, LinkedIn, WhatsApp and Slack share rendered a
 * tiny icon or nothing. Twitter rejects images under 300x157 outright.
 */
async function buildSocialCard() {
    const logoPath = join(PUBLIC, 'Stacked White Logo Transparent Background.png');
    if (!existsSync(logoPath)) throw new Error(`Missing logo for social card: ${logoPath}`);

    // The stacked logo already contains "COMPLETE ELECTRICAL", so it needs real
    // clearance underneath or the tagline collides with that line.
    const LOGO_WIDTH = 420;
    const LOGO_TOP = 88;

    const logo = await sharp(logoPath).resize({ width: LOGO_WIDTH, withoutEnlargement: true }).toBuffer();
    const logoMeta = await sharp(logo).metadata();
    const logoBottom = LOGO_TOP + (logoMeta.height || 250);

    const taglineY = logoBottom + 92;
    const subtitleY = taglineY + 56;

    const svg = Buffer.from(`
        <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
            <rect width="1200" height="630" fill="${NAVY}"/>
            <rect x="0" y="602" width="1200" height="28" fill="${GOLD}"/>
            <text x="600" y="${taglineY}" font-family="Segoe UI, Arial, Helvetica, sans-serif"
                  font-size="44" font-weight="700" fill="#FFFFFF" text-anchor="middle">
                Reliable. Honest. Professional.
            </text>
            <text x="600" y="${subtitleY}" font-family="Segoe UI, Arial, Helvetica, sans-serif"
                  font-size="28" fill="${GOLD}" text-anchor="middle">
                Licensed Adelaide Electrician  &#183;  0435 006 420
            </text>
        </svg>
    `);

    const card = await sharp(svg)
        .composite([{ input: logo, top: LOGO_TOP, left: Math.round((1200 - (logoMeta.width || LOGO_WIDTH)) / 2) }])
        .png({ compressionLevel: 9 })
        .toBuffer();

    writeFileSync(join(PUBLIC, 'og-card.png'), card);
    const meta = await sharp(card).metadata();
    console.log(`\nSocial card: og-card.png ${meta.width}x${meta.height}, ${kb(card.length)} KB`);
}

console.log('Generating WebP...');
await toWebp();
console.log('\nCompressing logos...');
await compressLogos();
await buildSocialCard();
