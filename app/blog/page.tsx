import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';
import { blogPosts } from '@/data/blog-posts';
import { Calendar, User, ArrowRight } from 'lucide-react';

export const metadata = {
    title: 'Electrical Tips & News | JPD Complete Electrical Blog',
    description: 'Expert electrical advice, safety tips, and industry news for Adelaide homeowners and businesses.',
};

export default function BlogPage() {
    return (
        <div className="bg-neutral-offwhite min-h-screen">
            {/* Hero */}
            <section className="bg-navy text-white py-20">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Blog</h1>
                    <p className="text-xl text-gold">Expert Advice & Electrical Tips</p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <article key={post.slug} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
                                <Link href={`/blog/${post.slug}`} className="relative h-48 w-full block group">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                        {post.category}
                                    </div>
                                </Link>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-neutral-slate mb-3">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User className="w-3 h-3" />
                                            {post.author}
                                        </div>
                                    </div>
                                    <Link href={`/blog/${post.slug}`}>
                                        <h2 className="text-xl font-bold text-navy mb-3 hover:text-gold transition-colors line-clamp-2">
                                            {post.title}
                                        </h2>
                                    </Link>
                                    <p className="text-neutral-slate text-sm mb-4 line-clamp-3 flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="text-navy font-bold text-sm uppercase tracking-wide flex items-center gap-1 hover:text-gold transition-colors mt-auto"
                                    >
                                        Read Article <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
