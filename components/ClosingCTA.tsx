import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, Zap } from 'lucide-react';

const PHONE = '0435 006 420';
const PHONE_HREF = 'tel:0435006420';

/**
 * The closing fold, the same on every page: Justin, one line, two buttons, and
 * the "don't use the form for an emergency" note underneath.
 *
 * It takes no props on purpose. Every page used to end on its own heading and
 * its own pair of buttons, and Justin asked for one call to action that reads
 * the same wherever you finish (15 Nov 2026).
 */
export default function ClosingCTA() {
    return (
        <section className="bg-white" aria-label="Contact JPD Complete Electrical">
            <div className="container-custom py-14 md:py-24">
                <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-[4fr_6fr] md:gap-16">
                    <div className="relative mx-auto w-full max-w-xs md:max-w-none">
                        <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl bg-gold/25" aria-hidden />
                        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy shadow-xl">
                            <Image
                                src="/images/justin_portrait_new.webp"
                                alt="Justin Debeljevic, owner and electrician at JPD Complete Electrical"
                                fill
                                sizes="(max-width: 768px) 320px, 400px"
                                className="object-cover"
                                style={{ objectPosition: '50% 12%' }}
                            />
                        </div>
                    </div>

                    <div>
                        <p className="eyebrow mb-5">Start here</p>
                        <h2 className="display text-4xl text-navy md:text-6xl">Ready when you are.</h2>
                        <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-slate md:text-lg">
                            Free quotes, fixed prices on planned work. Call, text or send the details and Justin will come back to
                            you, usually the same day.
                        </p>
                        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                            <Link href="/contact" className="pill pill-gold">
                                Get a free quote <ArrowRight className="h-4 w-4" />
                            </Link>
                            <a href={PHONE_HREF} className="pill pill-ghost-light">
                                <Phone className="h-4 w-4" /> {PHONE}
                            </a>
                        </div>
                        <p className="mt-7 flex max-w-md items-start gap-2.5 border-t border-navy/10 pt-5 text-sm leading-relaxed text-neutral-slate">
                            <Zap className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                            <span>
                                Power out, a burning smell or a breaker that won&apos;t stay on? Don&apos;t use the form. Ring{' '}
                                <a href={PHONE_HREF} className="font-semibold text-navy underline decoration-gold underline-offset-2">
                                    {PHONE}
                                </a>
                                .
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
