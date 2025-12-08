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

    return {
        title: `${post.title} | JPD Complete Electrical`,
        description: post.excerpt,
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPostPage({ params }: Props) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="bg-white min-h-screen pb-20">
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

                {/* CTA */}
                <div className="mt-16 bg-neutral-offwhite p-8 rounded-xl border-l-4 border-gold">
                    <h3 className="text-2xl font-bold text-navy mb-2">Need help with your electricals?</h3>
                    <p className="text-neutral-slate mb-6">
                        JPD Complete Electrical is here to help with all your residential and commercial needs in Adelaide.
                    </p>
                    <Button href="/contact" variant="primary">
                        Contact Us Today
                    </Button>
                </div>
            </div>
        </article>
    );
}
