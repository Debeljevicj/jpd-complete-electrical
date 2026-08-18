/**
 * /card - Justin's digital business card.
 *
 * DO NOT rename, move or delete this route. The URL
 * https://jpdcompleteelectrical.com.au/card is printed as a QR code on
 * physical business cards that are already out in the world and cannot be
 * recalled. If the page ever needs to live somewhere else, leave a redirect
 * at /card permanently.
 *
 * All copy and contact details come from content/card.json - edit that file,
 * not this one. The downloadable .vcf is generated from the same file at
 * build time by scripts/generate-vcard.mjs, so the two cannot drift apart.
 */
import Image from 'next/image';
import { UserPlus, Star, PhoneCall, ChevronRight } from 'lucide-react';
import card from '@/content/card.json';

const { contact, vcard, reviewUrl, intro, actions } = card;

export const metadata = {
    title: card.meta.title,
    description: card.meta.description,
    // Self-referencing. Metadata is inherited down the tree in the App Router, so
    // without this the page picks up canonical: "/" from the root layout and tells
    // Google that /card/ is a duplicate of the homepage.
    alternates: {
        canonical: '/card',
    },
    robots: {
        index: false,
        follow: true,
    },
};

export default function CardPage() {
    return (
        <div className="bg-neutral-offwhite min-h-[calc(100vh-4rem)]">
            <div className="container-custom max-w-lg py-5 md:py-10">
                {/* Intro */}
                <div className="flex items-center gap-3 mb-4 md:mb-8">
                    <div className="relative h-11 w-11 md:h-12 md:w-12 rounded-full overflow-hidden border-2 border-gold flex-shrink-0">
                        <Image
                            src={intro.portrait}
                            alt={intro.portraitAlt}
                            fill
                            className="object-cover"
                            style={{ objectPosition: 'center top' }}
                            priority
                        />
                    </div>
                    <div>
                        <h1 className="text-lg md:text-2xl font-bold text-navy leading-tight">{intro.heading}</h1>
                        <p className="text-sm text-neutral-slate">{intro.tagline}</p>
                    </div>
                </div>

                {/* Action Cells */}
                <div className="flex flex-col gap-3 md:gap-4">
                    {/* Save My Number */}
                    <a
                        href={vcard.path}
                        download={vcard.downloadAs}
                        className="group flex items-center gap-3 md:gap-4 bg-white border-2 border-navy/10 rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl hover:border-gold hover:-translate-y-0.5 transition-all active:scale-[0.97] active:shadow-md cursor-pointer"
                    >
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                            <UserPlus className="w-6 h-6 md:w-7 md:h-7 text-gold" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h2 className="text-lg font-bold text-navy">{actions.save.heading}</h2>
                            <p className="text-sm text-neutral-slate mt-0.5">
                                {actions.save.body}
                            </p>
                            <span className="inline-block mt-2 text-xs font-bold uppercase tracking-wider text-gold">
                                {actions.save.cta}
                            </span>
                        </div>
                        <ChevronRight className="w-6 h-6 flex-shrink-0 text-navy/30 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                    </a>

                    {/* Leave a Review */}
                    <a
                        href={reviewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 md:gap-4 bg-gold border-2 border-gold-dark/30 rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-[0.97] active:shadow-md cursor-pointer"
                    >
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                            <Star className="w-6 h-6 md:w-7 md:h-7 text-gold fill-gold" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex gap-0.5 mb-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-4 h-4 fill-navy text-navy" />
                                ))}
                            </div>
                            <h2 className="text-lg font-bold text-navy">{actions.review.heading}</h2>
                            <p className="text-sm text-navy/80 mt-0.5">
                                {actions.review.body}
                            </p>
                            <span className="inline-block mt-2 text-xs font-bold uppercase tracking-wider text-navy">
                                {actions.review.cta}
                            </span>
                        </div>
                        <ChevronRight className="w-6 h-6 flex-shrink-0 text-navy/40 group-hover:text-navy group-hover:translate-x-1 transition-all" />
                    </a>

                    {/* Call Now / Emergency */}
                    <a
                        href={`tel:${contact.phoneE164}`}
                        className="group flex items-center gap-3 md:gap-4 bg-navy border-2 border-navy-deep rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-[0.97] active:shadow-md cursor-pointer"
                    >
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                            <PhoneCall className="w-6 h-6 md:w-7 md:h-7 text-navy" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h2 className="text-lg font-bold text-white">{actions.call.heading}</h2>
                            <p className="text-sm text-gray-300 mt-0.5">
                                {actions.call.body.replace('{phone}', contact.phoneDisplay)}
                            </p>
                            <span className="inline-block mt-2 text-xs font-bold uppercase tracking-wider text-gold">
                                {actions.call.cta}
                            </span>
                        </div>
                        <ChevronRight className="w-6 h-6 flex-shrink-0 text-white/40 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                    </a>
                </div>
            </div>
        </div>
    );
}
