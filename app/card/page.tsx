import Image from 'next/image';
import { UserPlus, Star, PhoneCall } from 'lucide-react';

export const metadata = {
    title: "Justin's Digital Card | JPD Complete Electrical",
    description: 'Save Justin\'s contact, leave a review, or call now for an electrical emergency.',
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
                <div className="flex items-center gap-3 mb-5 md:mb-8">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-gold flex-shrink-0">
                        <Image
                            src="/images/justin_portrait_new.jpg"
                            alt="Justin - JPD Complete Electrical"
                            fill
                            className="object-cover"
                            style={{ objectPosition: 'center top' }}
                            priority
                        />
                    </div>
                    <div>
                        <h1 className="text-lg md:text-2xl font-bold text-navy leading-tight">Justin — JPD Complete Electrical</h1>
                        <p className="text-sm text-neutral-slate">Adelaide's reliable local electrician</p>
                    </div>
                </div>

                {/* Action Cells */}
                <div className="flex flex-col gap-4">
                    {/* Save My Number */}
                    <a
                        href="/justin-jpd-electrical.vcf"
                        download="Justin-JPD-Electrical.vcf"
                        className="group flex items-center gap-5 bg-white border-2 border-navy/10 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md hover:border-gold transition-all active:scale-[0.98]"
                    >
                        <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                            <UserPlus className="w-7 h-7 text-gold" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-navy">Save My Number</h2>
                            <p className="text-sm text-neutral-slate mt-0.5">
                                Add Justin to your contacts in one tap, so you're never searching for it again.
                            </p>
                        </div>
                    </a>

                    {/* Leave a Review */}
                    <a
                        href="https://g.page/r/CW2LCGVNt7qSEAI/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-5 bg-gold rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-lg transition-all active:scale-[0.98]"
                    >
                        <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                            <Star className="w-7 h-7 text-gold fill-gold" />
                        </div>
                        <div>
                            <div className="flex gap-0.5 mb-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-4 h-4 fill-navy text-navy" />
                                ))}
                            </div>
                            <h2 className="text-lg font-bold text-navy">Happy With the Service?</h2>
                            <p className="text-sm text-navy/80 mt-0.5">
                                Leave us a 5-star review, it takes 30 seconds and means the world to a small local business.
                            </p>
                        </div>
                    </a>

                    {/* Call Now / Emergency */}
                    <a
                        href="tel:0435006420"
                        className="group flex items-center gap-5 bg-navy rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-lg transition-all active:scale-[0.98]"
                    >
                        <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                            <PhoneCall className="w-7 h-7 text-navy" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-white">Emergency? Call Now</h2>
                            <p className="text-sm text-gray-300 mt-0.5">
                                Electrical issue that can't wait? Tap to call Justin directly on 0435 006 420.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
