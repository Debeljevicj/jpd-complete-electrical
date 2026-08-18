import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog-posts';
import { jobReports } from '@/data/job-reports';
import { serviceBySlug } from '@/data/services';
import { suburbBySlug } from '@/data/suburbs';
import { Calendar, User, ChevronLeft } from 'lucide-react';
import Button from '@/components/Button';
import InlineCTA from '@/components/InlineCTA';

interface Props {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: Props) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    // "| JPD Complete Electrical" is 26 characters of suffix on titles that are
    // already long, which pushed every post past the ~60 chars Google shows.
    // seoTitle overrides it entirely where even the short suffix would not fit.
    return {
        title: post.seoTitle ?? `${post.title} | JPD`,
        description: post.metaDescription ?? post.excerpt,
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
        openGraph: {
            title: post.seoTitle ?? post.title,
            description: post.metaDescription ?? post.excerpt,
            url: `https://jpdcompleteelectrical.com.au/blog/${post.slug}/`,
            type: 'article',
        },
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

const SITE = 'https://jpdcompleteelectrical.com.au';

const PROSE_CLASSES = 'article-body';

/**
 * Splits article HTML after the Nth <h3> so a CTA can sit partway through.
 *
 * Posts are stored as one HTML string, so there is no component boundary to slot
 * into. Splitting on the lookahead keeps each heading attached to the section it
 * introduces. Short posts are left whole: breaking a three-heading article in
 * half puts the CTA almost at the end anyway, where one already exists.
 */
function splitArticle(html: string, afterHeadings = 2): { before: string; after: string } {
    const parts = html.split(/(?=<h3)/);
    // parts[0] is whatever precedes the first heading, so N headings needs N+1 slices.
    if (parts.length < afterHeadings + 3) return { before: html, after: '' };
    return {
        before: parts.slice(0, afterHeadings + 1).join(''),
        after: parts.slice(afterHeadings + 1).join(''),
    };
}

export default function BlogPostPage({ params }: Props) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    // Job reports carry the service and suburb slugs they belong to, so the
    // "related" block below can point at the actual pages this job supports
    // instead of the one hardcoded maintenance link every post used to share.
    const job = jobReports.find((j) => j.slug === params.slug);
    const articleParts = splitArticle(post.content);

    // Article + a real author entity. Google weights first-hand expertise for
    // advice content, and an anonymous post from an unnamed site is the weakest
    // possible version of that. Justin is a licensed electrician writing about
    // his own trade, and the markup should say so.
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': `${SITE}/blog/${post.slug}/#article`,
        headline: post.title,
        description: post.metaDescription ?? post.excerpt,
        image: [post.image, ...(post.gallery ?? []).map((g) => g.src)].map((src) => `${SITE}${src}`),
        datePublished: post.date,
        dateModified: post.updated ?? post.date,
        inLanguage: 'en-AU',
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}/blog/${post.slug}/` },
        author: {
            '@type': 'Person',
            name: 'Justin Debeljevic',
            jobTitle: 'Licensed Electrician',
            url: `${SITE}/about/`,
            worksFor: { '@id': `${SITE}/#business` },
        },
        publisher: { '@id': `${SITE}/#business` },
        articleSection: post.category,
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog/` },
            { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE}/blog/${post.slug}/` },
        ],
    };

    return (
        <article className="bg-white min-h-screen pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema]) }}
            />
            {/* Hero / Header */}
            <div className="bg-navy text-white py-16 relative">
                <div className="container-custom relative z-10">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors mb-6 text-sm font-bold uppercase tracking-wide">
                        <ChevronLeft className="w-4 h-4" /> Back to Blog
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 max-w-4xl leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-6 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gold" />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-gold" />
                            By {post.author}
                        </div>
                        <div className="bg-white/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-gold border border-white/10">
                            {post.category}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-custom max-w-4xl -mt-10 relative z-20">
                {/* Featured Image */}
                <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl mb-12">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Content, split so a CTA sits partway through rather than only at the
                    very bottom. These articles run long and most readers never reach the
                    end, so the only conversion point used to be one almost nobody saw. */}
                <div className="bg-white">
                    <div
                        className={PROSE_CLASSES}
                        dangerouslySetInnerHTML={{ __html: articleParts.before }}
                    />

                    {articleParts.after && (
                        <InlineCTA
                            boxed
                            heading={post.cta.heading}
                            body={post.cta.description}
                            quoteHref={post.cta.href}
                            quoteLabel={post.cta.linkText}
                        />
                    )}

                    {articleParts.after && (
                        <div
                            className={PROSE_CLASSES}
                            dangerouslySetInnerHTML={{ __html: articleParts.after }}
                        />
                    )}
                </div>

                {/* Job photos */}
                {post.gallery && post.gallery.length > 0 && (
                    <div className="mt-12 grid gap-6 sm:grid-cols-2">
                        {post.gallery.map((photo) => (
                            <figure key={photo.src}>
                                <div className="relative h-[360px] w-full rounded-xl overflow-hidden shadow-md">
                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        fill
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                </div>
                                {photo.caption && (
                                    <figcaption className="text-sm text-neutral-slate mt-3 leading-relaxed">
                                        {photo.caption}
                                    </figcaption>
                                )}
                            </figure>
                        ))}
                    </div>
                )}

                {/* Related pages */}
                <div className="mt-10 pt-6 border-t border-gray-100 space-y-2">
                    {job ? (
                        <>
                            {/* Not every job maps to a service page. Security cameras, outdoor
                                heating and TV wall mounting have no page of their own, and an
                                empty list here rendered a dangling "Services on this job:". */}
                            {job.services.filter((s) => serviceBySlug[s]).length > 0 && (
                                <p className="text-neutral-slate">
                                    Services on this job:{' '}
                                    {job.services
                                        .filter((serviceSlug) => serviceBySlug[serviceSlug])
                                        .map((serviceSlug, i) => (
                                            <span key={serviceSlug}>
                                                {i > 0 && ', '}
                                                <Link
                                                    href={`/${serviceSlug}`}
                                                    className="text-navy font-bold hover:text-gold transition-colors"
                                                >
                                                    {serviceBySlug[serviceSlug].name}
                                                </Link>
                                            </span>
                                        ))}
                                </p>
                            )}
                            {job.suburb && suburbBySlug[job.suburb] && (
                                <p className="text-neutral-slate">
                                    Suburb:{' '}
                                    <Link
                                        href={`/${job.suburb}`}
                                        className="text-navy font-bold hover:text-gold transition-colors"
                                    >
                                        Electrician in {suburbBySlug[job.suburb].name}
                                    </Link>
                                </p>
                            )}
                        </>
                    ) : (
                        <p className="text-neutral-slate">
                            Related service:{' '}
                            <Link
                                href="/services#maintenance"
                                className="text-navy font-bold hover:text-gold transition-colors"
                            >
                                Electrical Maintenance &amp; Safety
                            </Link>
                        </p>
                    )}
                </div>

                {/* CTA */}
                <div className="mt-16 bg-neutral-offwhite p-8 rounded-xl">
                    <h3 className="text-2xl font-bold text-navy mb-2">{post.cta.heading}</h3>
                    <p className="text-neutral-slate mb-6">
                        {post.cta.description}
                    </p>
                    <Button href={post.cta.href} variant="primary">
                        {post.cta.linkText}
                    </Button>
                    <p className="text-neutral-slate text-sm mt-4">
                        Or call <a href="tel:0435006420" className="text-navy font-semibold hover:text-gold transition-colors">0435 006 420</a> for a free quote.
                    </p>
                </div>
            </div>
        </article>
    );
}
