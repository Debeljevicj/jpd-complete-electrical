import type { MetadataRoute } from 'next';
import { suburbs } from '@/data/suburbs';
import { services } from '@/data/services';
import { blogPosts } from '@/data/blog-posts';

const SITE = 'https://jpdcompleteelectrical.com.au';

/**
 * Generated at build time so new suburb, service and blog pages register
 * themselves. Replaces the hand-maintained public/sitemap.xml, which had gone
 * stale the moment a page was added without someone remembering to edit it.
 */
export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages: MetadataRoute.Sitemap = [
        { url: `${SITE}/`, changeFrequency: 'monthly', priority: 1.0 },
        { url: `${SITE}/services/`, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${SITE}/service-areas/`, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${SITE}/contact/`, changeFrequency: 'yearly', priority: 0.8 },
        { url: `${SITE}/about/`, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${SITE}/gallery/`, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${SITE}/reviews/`, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${SITE}/blog/`, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${SITE}/faq/`, changeFrequency: 'monthly', priority: 0.7 },
    ];

    // /card/ is deliberately absent. It is noindex - it exists for the QR code on
    // physical business cards, not for search - and listing a noindex URL in the
    // sitemap asks Google to index a page we have told it to skip. Search Console
    // reports that contradiction as an "Excluded by noindex tag" error.

    const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
        url: `${SITE}/${service.slug}/`,
        changeFrequency: 'monthly',
        priority: 0.9,
    }));

    // Priority tracks population, so the biggest suburbs rank highest in the file.
    const maxPopulation = Math.max(...suburbs.map((s) => s.population));
    const suburbPages: MetadataRoute.Sitemap = suburbs.map((suburb) => ({
        url: `${SITE}/${suburb.slug}/`,
        changeFrequency: 'monthly',
        priority: Number((0.6 + 0.2 * (suburb.population / maxPopulation)).toFixed(2)),
    }));

    const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${SITE}/blog/${post.slug}/`,
        lastModified: post.updated ?? post.date,
        changeFrequency: 'yearly',
        priority: 0.6,
    }));

    return [...staticPages, ...servicePages, ...suburbPages, ...blogPages];
}
