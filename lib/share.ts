import { existsSync } from 'node:fs';
import { join } from 'node:path';
import type { Metadata } from 'next';

const SITE = 'https://jpdcompleteelectrical.com.au';

const CARD = {
    url: '/og-card.png',
    width: 1200,
    height: 630,
    alt: 'JPD Complete Electrical - Licensed Adelaide Electrician',
};

/**
 * Open Graph and Twitter tags for one page.
 *
 * Next.js replaces a parent's `openGraph` wholesale rather than merging it, so a
 * page that set its own openGraph lost the layout's image, and a page that set
 * none inherited the layout's url, sharing itself as the homepage. Twitter tags
 * never got set per page at all, so every page carried the homepage's twitter
 * title. Build all of it here so no page can drop half.
 *
 * `image` is a path under public/. Where optimise-images left a .jpg beside the
 * .webp the jpg goes out instead, because not every link preview (older
 * iMessage, some Android share sheets) renders webp.
 */
export function shareMeta({
    title,
    description,
    path,
    image,
    imageAlt,
    type = 'website',
}: {
    title: string;
    description: string;
    path: string;
    image?: string;
    imageAlt?: string;
    type?: 'website' | 'article';
}): Pick<Metadata, 'openGraph' | 'twitter'> {
    const url = `${SITE}${path === '/' ? '' : path.replace(/\/?$/, '/')}`;
    const images = image ? [{ url: preferJpg(image), alt: imageAlt ?? title }] : [CARD];
    return {
        openGraph: {
            title,
            description,
            url,
            siteName: 'JPD Complete Electrical',
            locale: 'en_AU',
            type,
            images,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: images.map((i) => i.url),
        },
    };
}

function preferJpg(src: string): string {
    if (!src.endsWith('.webp')) return src;
    const jpg = src.replace(/\.webp$/, '.jpg');
    return existsSync(join(process.cwd(), 'public', jpg)) ? jpg : src;
}
