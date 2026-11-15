'use client';

import shapesData from '@/data/suburb-shapes.json';

export interface SuburbShape {
    name: string;
    d: string;
    cx: number;
    cy: number;
    box: [number, number, number, number];
    /** Straight-line km from Wynn Vale. */
    km: number;
}

export const suburbShapes = shapesData as SuburbShape[];

/** The fifteen suburbs that have their own page, in the order the build script lists them. */
export const PAGE_SUBURBS = suburbShapes.slice(0, 15).map((s) => s.name);

interface SuburbMapProps {
    /** Suburbs the view is framed around. Everything else is drawn only where it falls inside. */
    frame?: string[];
    /** Gold strength per suburb, 0 to 1. Missing means unlit. */
    lit?: Record<string, number>;
    /** Suburbs drawn in the brighter blue (the ones we name). Defaults to the fifteen with a page. */
    named?: string[];
    /** Suburbs that carry their name. Defaults to `named`. */
    labelled?: string[];
    /** Label text per suburb, in place of its name. */
    labels?: Record<string, string>;
    /** Colour the lit suburbs take. Gold by default; the home page uses a brighter blue. */
    litColor?: string;
    selected?: string | null;
    hrefs?: Record<string, string>;
    onSelect?: (name: string) => void;
    /** Label size, as a multiple of the default. Below 1 where a count is added to every name. */
    labelScale?: number;
    className?: string;
    /** For screen readers: what this map is showing. */
    title: string;
}

/**
 * The north-east suburbs as real outlines (OpenStreetMap, via
 * scripts/build-suburb-map.mjs). One drawing, used three ways: lit by scroll on
 * the home page, one suburb picked out on the areas pages, and lit by job count
 * on recent work.
 */
export default function SuburbMap({
    frame = PAGE_SUBURBS,
    lit = {},
    named = PAGE_SUBURBS,
    labelled,
    labels,
    litColor = '#CDA84D',
    selected,
    hrefs = {},
    onSelect,
    labelScale = 1,
    className = '',
    title,
}: SuburbMapProps) {
    const framed = suburbShapes.filter((s) => frame.includes(s.name));
    const pad = 14;
    // Room either side so a label on an edge suburb is not cut off.
    const padX = labelScale < 1 ? 60 : 44;
    const x0 = Math.min(...framed.map((s) => s.box[0])) - padX;
    const y0 = Math.min(...framed.map((s) => s.box[1])) - pad;
    const x1 = Math.max(...framed.map((s) => s.box[2])) + padX;
    const y1 = Math.max(...framed.map((s) => s.box[3])) + pad;
    const w = x1 - x0;
    const h = y1 - y0;
    const fontSize = (Math.max(w, h) / 44) * labelScale;
    const home = suburbShapes.find((s) => s.name === 'Wynn Vale');

    const isNamed = (name: string) => named.includes(name);
    const labelFor = (name: string) => labels?.[name] ?? ((labelled ?? named).includes(name) ? name : null);

    // Place the labels one at a time. Each label is treated as a box (its width is estimated from
    // its length, generously) and has to clear every box already down, plus the
    // ring that marks the Wynn Vale base. A label that clashes where it would
    // naturally sit is tried a line up or down and to either side. A
    // suburb with its own page takes the least-bad of those if none is clear; any
    // other suburb is left off, because a missing name on a far suburb reads
    // better than two names printed over each other.
    const ringY = home ? home.cy - fontSize * 1.45 : 0;
    const placed: { name: string; text: string; x: number; y: number; size: number; w: number }[] = [];
    const ring = home ? { name: '', text: '', x: home.cx, y: ringY + fontSize * 0.35, size: fontSize * 1.3, w: fontSize * 1.6 } : null;
    // Wynn Vale first (its ring goes down straight after it), then the suburbs
    // with a page, longest name first: a long name has the fewest places it can
    // go, and a short one beside it can step aside. Then the rest, nearest first.
    const rank = (name: string) => (name === 'Wynn Vale' ? 0 : isNamed(name) ? 1 : 2);
    const order = [...suburbShapes].sort(
        (a, b) =>
            rank(a.name) - rank(b.name) ||
            (rank(a.name) === 1 ? b.name.length - a.name.length : 0) ||
            a.km - b.km
    );
    for (const shape of order) {
        const text = labelFor(shape.name);
        if (!text) continue;
        const size = isNamed(shape.name) ? fontSize : fontSize * 0.82;
        const w = text.length * size * 0.62;
        const baseX = shape.cx;
        const baseY = shape.cy + size * 0.35;
        // How far into another label this spot reaches: 0 is clear.
        // `room` is the breathing space wanted around a label: 1 for the
        // comfortable gap, 0 for boxes that only just don't touch.
        const overlap = (x: number, y: number, room: number) =>
            placed.reduce((worst, p) => {
                const dx = (p.w + w) / 2 + size * 0.7 * room - Math.abs(p.x - x);
                // A line of text is about 1.25 times its size from ascender to descender.
                const dy = Math.max(p.size, size) * (1.25 + 0.15 * room) - Math.abs(p.y - y);
                return dx > 0 && dy > 0 ? Math.max(worst, Math.min(dx, dy)) : worst;
            }, 0);
        const spots: { x: number; y: number; cost: number; tight: number }[] = [];
        for (const lines of [0, -1.35, 1.35, -2.7, 2.7]) {
            for (const shift of [0, -0.25, 0.25, -0.5, 0.5, -0.75, 0.75]) {
                const x = baseX + shift * w;
                const y = baseY + lines * size;
                // Stay inside the drawing.
                if (x - w / 2 < x0 + 2 || x + w / 2 > x1 - 2 || y - size < y0 + 2 || y > y1 - 2) continue;
                spots.push({ x, y, cost: overlap(x, y, 1), tight: overlap(x, y, 0) });
            }
        }
        // First choice: a spot with room around it. For a suburb with its own
        // page, second choice is a spot that at least touches nothing, and last
        // is whichever spot overlaps least.
        const clear = spots.find((spot) => spot.cost === 0);
        const best =
            clear ??
            (isNamed(shape.name)
                ? spots.find((spot) => spot.tight === 0) ?? [...spots].sort((p, q) => p.tight - q.tight)[0]
                : undefined);
        if (!best) continue;
        placed.push({ name: shape.name, text, x: best.x, y: best.y, size, w });
        // Wynn Vale is first in the order. Its ring sits just above its name, and
        // everything after has to clear both.
        if (ring && shape.name === 'Wynn Vale') placed.push(ring);
    }
    if (ring) placed.splice(placed.indexOf(ring), 1); // the ring's own box is not a label

    return (
        <svg
            viewBox={`${x0} ${y0} ${w} ${h}`}
            className={`block w-full h-auto rounded-2xl bg-navy-deep ${className}`}
            role="img"
            aria-label={title}
        >
            {suburbShapes.map((s) => {
                const gold = selected === s.name ? 1 : lit[s.name] ?? 0;
                const href = hrefs[s.name];
                const clickable = Boolean(href || (onSelect && isNamed(s.name)));
                const shape = (
                    <g
                        key={s.name}
                        className={clickable ? 'cursor-pointer group/suburb' : undefined}
                        onClick={onSelect && isNamed(s.name) ? () => onSelect(s.name) : undefined}
                    >
                        <path
                            d={s.d}
                            fill={gold > 0 && litColor === '#CDA84D' ? '#012C45' : isNamed(s.name) ? '#0E5F8A' : '#064A6E'}
                            stroke="#012C45"
                            strokeWidth={1.4}
                            fillRule="evenodd"
                            className={clickable ? 'transition-[fill] duration-200 group-hover/suburb:fill-[#1878AB]' : undefined}
                        />
                        <path
                            d={s.d}
                            fill={selected === s.name ? '#CDA84D' : litColor}
                            fillRule="evenodd"
                            stroke="#012C45"
                            strokeWidth={1.4}
                            style={{ opacity: gold, transition: 'opacity 500ms ease' }}
                            pointerEvents="none"
                        />
                    </g>
                );
                return href ? (
                    <a key={s.name} href={href} aria-label={`Electrician ${s.name}`}>
                        {shape}
                    </a>
                ) : (
                    shape
                );
            })}

            {home && (
                <g pointerEvents="none">
                    <circle cx={home.cx} cy={home.cy - fontSize * 1.45} r={fontSize * 0.55} fill="none" stroke="#fff" strokeWidth={1.2} />
                    <circle cx={home.cx} cy={home.cy - fontSize * 1.45} r={fontSize * 0.18} fill="#fff" />
                </g>
            )}

            {placed.map(({ name, text, x, y, size }) => {
                const gold = selected === name ? 1 : lit[name] ?? 0;
                return (
                    <text
                        key={name}
                        x={x}
                        y={y}
                        textAnchor="middle"
                        fontSize={size}
                        fontWeight={isNamed(name) ? 600 : 500}
                        opacity={isNamed(name) || gold > 0 ? 1 : 0.75}
                        fill={gold > 0.55 && (selected === name || litColor === '#CDA84D') ? '#003B5C' : '#fff'}
                        style={{ transition: 'fill 500ms ease' }}
                        pointerEvents="none"
                        className="font-heading"
                    >
                        {text}
                    </text>
                );
            })}
        </svg>
    );
}

export function MapCredit({ className = '' }: { className?: string }) {
    return (
        <p className={`text-[11px] leading-snug ${className}`}>
            Suburb boundaries © OpenStreetMap contributors. Distances measured from Wynn Vale.
        </p>
    );
}

// The same projection scripts/build-suburb-map.mjs draws with. Keep the three
// numbers in step with it.
const HOME = { lat: -34.795, lon: 138.69 };
const SCALE = 6000;
const KX = Math.cos((HOME.lat * Math.PI) / 180);

/** The page suburb nearest a real-world position, and how far away its middle is in km. */
export function nearestSuburb(lat: number, lon: number): { name: string; km: number } {
    const x = (lon - HOME.lon) * KX * SCALE;
    const y = -(lat - HOME.lat) * SCALE;
    let best = { name: 'Wynn Vale', km: Infinity };
    for (const s of suburbShapes) {
        if (!PAGE_SUBURBS.includes(s.name)) continue;
        const km = (Math.hypot(s.cx - x, s.cy - y) / SCALE) * 111;
        if (km < best.km) best = { name: s.name, km };
    }
    return best;
}

/** Where the visitor's last suburb pick is kept, so the areas page opens on it. */
export const SUBURB_PICK_KEY = 'jpd-suburb';
