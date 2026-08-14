import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog-posts';
import { Calendar, User, ChevronLeft } from 'lucide-react';
import Button from '@/components/Button';

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

export default function BlogPostPage({ params }: Props) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

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
        image: `${SITE}${post.image}`,
        datePublished: post.date,
        dateModified: post.date,
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

                {/* Content */}
                <div className="bg-white">
                    <div
                        className="prose prose-lg max-w-none prose-headings:text-navy prose-headings:font-bold prose-p:text-neutral-slate prose-a:text-gold hover:prose-a:text-navy"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>

                {/* Related service */}
                <div className="mt-10 pt-6 border-t border-gray-100">
                    <p className="text-neutral-slate">
                        Related service: <Link href="/services#maintenance" className="text-navy font-bold hover:text-gold transition-colors">Electrical Maintenance &amp; Safety</Link>
                    </p>
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
