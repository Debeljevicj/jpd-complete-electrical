'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Tag {
    /** Position on the photo, as a percentage from the left and top. */
    x: number;
    y: number;
    label: string;
}

interface Step {
    title: string;
    body: string;
    src: string;
    alt: string;
    tags: Tag[];
}

// One real job: the Wynn Vale board of 3 Nov 2026. The copy is lifted from the
// write-up, so the fold and the article cannot say different things.
const STEPS: Step[] = [
    {
        title: 'What was there',
        body: 'Circuit breakers and one safety switch carrying most of the house. When it tripped, everything behind it went off together, and there was no telling which circuit caused it.',
        src: '/images/switchboard_single_rcd_before_wynn_vale.webp',
        alt: 'Older switchboard in a meter box with a row of red circuit breakers beside a single safety switch',
        tags: [
            { x: 21, y: 50, label: 'One safety switch for most of the house' },
            { x: 56, y: 37, label: 'Circuit breakers' },
        ],
    },
    {
        title: 'What went in',
        body: 'A main switch and an RCBO on every circuit, nine in all. Each circuit is now protected on its own, and trips on its own.',
        src: '/images/switchboard_rcbos_open_wynn_vale.webp',
        alt: 'Switchboard with the cover off showing the new row of RCBOs wired in',
        tags: [
            { x: 19, y: 61, label: 'Supply isolated' },
            { x: 52, y: 46, label: 'An RCBO for every circuit' },
        ],
    },
    {
        title: 'What we left',
        body: 'Every RCBO labelled for what it runs: stove, air con, heater, laundry, garage, power, lights. If one trips now, the rest of the house stays on and the label tells you which circuit it was.',
        src: '/images/switchboard_rcbos_after_wynn_vale.webp',
        alt: 'New switchboard with a main switch and a row of RCBOs, each with a green circuit label underneath',
        tags: [
            { x: 51, y: 28, label: 'Who to call, on the board' },
            { x: 18, y: 54, label: 'Main switch' },
            { x: 50, y: 61, label: 'Every circuit labelled' },
        ],
    },
];

const JOB_HREF = '/blog/switchboard-rcbos-smoke-alarms-wynn-vale';

/**
 * "Opened. Explained. Labelled." One job told in three photos.
 *
 * The section is three screens tall and its contents stick, so scrolling walks
 * through the steps: the photo cross-fades and the matching paragraph opens.
 * The steps are also buttons, and all three paragraphs are in the page source
 * whichever one is open.
 */
export default function BoardStory() {
    const ref = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(0);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const measure = () => {
            const rect = node.getBoundingClientRect();
            const travel = rect.height - window.innerHeight;
            if (travel <= 0) return;
            const progress = Math.min(0.999, Math.max(0, -rect.top / travel));
            setActive(Math.floor(progress * STEPS.length));
        };
        // Measured straight off the scroll event: the state only changes when the
        // step does, so there is nothing for a frame callback to save.
        const onScroll = measure;
        measure();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

    // A tap on a step scrolls to the part of the section where that step is the open one.
    const goTo = (i: number) => {
        const node = ref.current;
        if (!node) return;
        const travel = node.offsetHeight - window.innerHeight;
        const top = node.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: top + (travel * (i + 0.5)) / STEPS.length, behavior: 'smooth' });
    };

    return (
        <section ref={ref} className="relative bg-navy text-white" style={{ height: `${STEPS.length * 85 + 100}vh` }}>
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="container-custom w-full pb-24 pt-28 md:pb-10 md:pt-32">
                    <div className="mx-auto grid max-w-5xl items-center gap-5 md:grid-cols-[1fr_minmax(0,22rem)] md:gap-20 lg:grid-cols-[1fr_minmax(0,24rem)]">
                        <div className="md:order-1">
                            <p className="eyebrow eyebrow-on-dark mb-3 md:mb-5">The proof · A real job in Wynn Vale</p>
                            <h2 className="display text-3xl md:text-6xl">
                                Opened. Explained.{' '}
                                <span className="text-gold md:block">Labelled.</span>
                            </h2>

                            <ol className="mt-4 hidden md:mt-8 md:block">
                                {STEPS.map((step, i) => (
                                    <StepRow key={step.title} step={step} index={i} open={active === i} onPick={() => goTo(i)} />
                                ))}
                            </ol>
                            <Link
                                href={JOB_HREF}
                                className="mt-5 hidden items-center gap-2 text-sm font-semibold text-white/80 underline decoration-white/30 underline-offset-4 transition-colors hover:text-gold md:inline-flex"
                            >
                                Read the full Wynn Vale job <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        <div className="md:order-2">
                            <div className="relative mx-auto aspect-[3/4] max-h-[42vh] overflow-hidden rounded-2xl bg-navy-deep shadow-2xl md:max-h-[68vh]">
                                {STEPS.map((step, i) => (
                                    <div
                                        key={step.src}
                                        className="absolute inset-0 transition-opacity duration-700"
                                        style={{ opacity: active === i ? 1 : 0 }}
                                        aria-hidden={active !== i}
                                    >
                                        <Image
                                            src={step.src}
                                            alt={step.alt}
                                            fill
                                            sizes="(max-width: 768px) 70vw, 384px"
                                            className="object-cover object-top"
                                        />
                                        {step.tags.map((tag) => (
                                            <span
                                                key={tag.label}
                                                className="absolute flex -translate-y-1/2 items-center gap-1.5"
                                                style={{ left: `${tag.x}%`, top: `${tag.y}%` }}
                                            >
                                                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-gold ring-4 ring-gold/30" />
                                                <span className="max-w-[9.5rem] rounded bg-navy/90 px-2 py-1 text-[10px] font-semibold leading-tight text-white md:text-[11px]">
                                                    {tag.label}
                                                </span>
                                            </span>
                                        ))}
                                    </div>
                                ))}
                            </div>
                            <div className="mx-auto mt-3 flex max-w-[24rem] items-center justify-between text-xs text-white/55">
                                <span>Wynn Vale · 3 Nov 2026</span>
                                <span className="flex gap-1.5" aria-hidden>
                                    {STEPS.map((s, i) => (
                                        <span key={s.title} className={`h-0.5 w-6 rounded-full transition-colors ${i <= active ? 'bg-gold' : 'bg-white/20'}`} />
                                    ))}
                                </span>
                            </div>
                        </div>

                        {/* Phones: the steps sit under the photo, not beside it. */}
                        <div className="md:hidden">
                            <ol>
                                {STEPS.map((step, i) => (
                                    <StepRow key={step.title} step={step} index={i} open={active === i} onPick={() => goTo(i)} />
                                ))}
                            </ol>
                            <Link href={JOB_HREF} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white/80 underline decoration-white/30 underline-offset-4">
                                Read the full Wynn Vale job <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function StepRow({ step, index, open, onPick }: { step: Step; index: number; open: boolean; onPick: () => void }) {
    return (
        <li className="border-t border-white/10 last:border-b">
            <button type="button" onClick={onPick} className="flex w-full items-baseline gap-4 py-2.5 text-left md:py-3" aria-expanded={open}>
                <span className={`text-[11px] font-semibold tabular-nums transition-colors ${open ? 'text-gold' : 'text-white/30'}`}>
                    0{index + 1}
                </span>
                <span className={`font-heading text-base font-semibold transition-colors md:text-lg ${open ? 'text-white' : 'text-white/40'}`}>
                    {step.title}
                </span>
            </button>
            <div
                className="grid transition-[grid-template-rows] duration-500 ease-out"
                style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
            >
                <p className="overflow-hidden pl-8 text-sm leading-relaxed text-white/70 md:max-w-sm md:text-[15px]">
                    <span className="block pb-3">{step.body}</span>
                </p>
            </div>
        </li>
    );
}
