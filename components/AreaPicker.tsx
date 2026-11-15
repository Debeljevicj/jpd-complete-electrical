'use client';

import Link from 'next/link';
import { ArrowRight, LocateFixed, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';
import SuburbMap, { MapCredit, nearestSuburb, suburbShapes, SUBURB_PICK_KEY } from '@/components/SuburbMap';

export interface AreaSuburb {
    name: string;
    slug: string;
    postcode: string;
    hook: string;
    housing: string;
}

const kmFromBase = Object.fromEntries(suburbShapes.map((s) => [s.name, s.km]));

/**
 * The areas page hero. The map and the panel beside it show one suburb at a
 * time, and which one is the visitor's call:
 *
 *   1. the suburb they last picked, here or by opening a suburb page;
 *   2. otherwise Wynn Vale, where we are based;
 *   3. "Use my location" swaps in the nearest suburb, and only asks the browser
 *      for a position when that button is pressed.
 *
 * The position never leaves the browser: the nearest suburb is worked out here
 * from the map's own outlines.
 */
export default function AreaPicker({ suburbs }: { suburbs: AreaSuburb[] }) {
    const [picked, setPicked] = useState('Wynn Vale');
    const [note, setNote] = useState('');
    const [locating, setLocating] = useState(false);

    useEffect(() => {
        try {
            const saved = window.localStorage.getItem(SUBURB_PICK_KEY);
            if (saved && suburbs.some((s) => s.name === saved)) setPicked(saved);
        } catch {
            // Private mode or storage blocked: stay on the default.
        }
    }, [suburbs]);

    const pick = (name: string, message = '') => {
        setPicked(name);
        setNote(message);
        try {
            window.localStorage.setItem(SUBURB_PICK_KEY, name);
        } catch {
            // Not remembered, still shown.
        }
    };

    const locate = () => {
        if (!navigator.geolocation) {
            setNote('This browser can\'t share a location. Tap your suburb on the map instead.');
            return;
        }
        setLocating(true);
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                setLocating(false);
                const near = nearestSuburb(coords.latitude, coords.longitude);
                if (near.km > 12) {
                    setNote('You\'re outside the north-east suburbs on this map. We still cover all of Adelaide, so give us a call.');
                    return;
                }
                pick(near.name, `Nearest to you: ${near.name}.`);
            },
            () => {
                setLocating(false);
                setNote('Couldn\'t get a location. Tap your suburb on the map instead.');
            },
            { maximumAge: 600000, timeout: 8000 }
        );
    };

    const suburb = suburbs.find((s) => s.name === picked) ?? suburbs[0];
    const km = kmFromBase[suburb.name];

    return (
        <div className="grid items-center gap-10 lg:grid-cols-[6fr_5fr] lg:gap-16">
            <div>
                <p className="eyebrow eyebrow-on-dark mb-5">Based in Wynn Vale SA 5127</p>
                <h1 className="display text-4xl md:text-6xl">Electrician Near Me in Adelaide&apos;s North-East</h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
                    If you&apos;re searching for an electrician near you and you live anywhere around Golden Grove, Modbury, Tea Tree
                    Gully or the foothills, we&apos;re probably closer than whoever came up first. JPD Complete Electrical is
                    owner-operated out of Wynn Vale, right in the middle of the patch.
                </p>

                {/* The picked suburb. aria-live so a tap on the map is announced. */}
                <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6" aria-live="polite">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <label htmlFor="area-suburb" className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                            Your area
                        </label>
                        <button
                            type="button"
                            onClick={locate}
                            disabled={locating}
                            className="inline-flex items-center gap-1.5 text-sm text-white/70 underline decoration-white/25 underline-offset-4 hover:text-gold disabled:opacity-60"
                        >
                            <LocateFixed className="h-4 w-4" /> {locating ? 'Finding you...' : 'Use my location'}
                        </button>
                    </div>
                    <select
                        id="area-suburb"
                        value={suburb.name}
                        onChange={(e) => pick(e.target.value)}
                        className="display mt-2 w-full cursor-pointer appearance-none bg-transparent text-3xl text-white outline-none focus-visible:ring-2 focus-visible:ring-gold md:text-4xl"
                    >
                        {suburbs.map((s) => (
                            <option key={s.slug} value={s.name} className="bg-navy text-base text-white">
                                {s.name}
                            </option>
                        ))}
                    </select>
                    <p className="mt-1 text-xs text-white/45">
                        SA {suburb.postcode}
                        {km !== undefined ? ` · about ${km < 1 ? 'a kilometre' : `${Math.round(km)} km`} from our base` : ''}
                    </p>
                    <p className="mt-4 font-heading text-lg leading-snug text-gold">{suburb.hook}</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{suburb.housing}</p>
                    {note && <p className="mt-3 text-sm text-white/85">{note}</p>}
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                        <Link href={`/${suburb.slug}`} className="pill pill-gold">
                            Electrician {suburb.name} <ArrowRight className="h-4 w-4" />
                        </Link>
                        <a href="tel:0435006420" className="pill pill-ghost-dark">
                            <Phone className="h-4 w-4" /> 0435 006 420
                        </a>
                    </div>
                </div>
            </div>

            <div>
                <SuburbMap
                    title={`Map of Adelaide's north-eastern suburbs with ${suburb.name} highlighted`}
                    selected={suburb.name}
                    onSelect={(name) => pick(name)}
                />
                <p className="mt-2 text-xs text-white/55">Tap a suburb to switch to it.</p>
                <MapCredit className="mt-1 text-white/35" />
            </div>
        </div>
    );
}
