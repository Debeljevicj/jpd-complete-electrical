import type { BlogPost } from './blog-posts';

/**
 * Format B from SEO_STRATEGY.md: real jobs, real photos, `{Service} in {Suburb}`.
 *
 * These carry two fields the guide posts do not. `services` and `suburb` are the
 * slugs of the pages this job should surface on, which is what lets a new job
 * link itself into the right service and suburb pages instead of someone
 * hand-editing 29 templates every fortnight. First entry in `services` is the
 * primary one, so a job that touches three services still reads as one job.
 *
 * Nothing here is written speculatively. If a detail is not in Justin's notes or
 * visible in the photos, it does not go in the copy.
 */
export interface JobReport extends BlogPost {
    /** Service page slugs this job appears on. Primary first. */
    services: string[];
    /** Suburb page slug this job appears on. */
    suburb: string;
    /**
     * Per-service framing for the card, keyed by service slug.
     *
     * One job legitimately covers several services, and someone arriving from the
     * powerpoints page wants to see powerpoints, not a general renovation card.
     * This reframes the card and deep-links to the relevant heading, which is the
     * honest way to get intent-matched entry points. Writing three separate
     * articles about one job instead would be three near-duplicates sharing the
     * same photos, which is the doorway-page pattern Google demotes.
     */
    angles?: Record<string, { title: string; blurb: string; anchor?: string; image?: string }>;
}

export const jobReports: JobReport[] = [
    {
        slug: 'bathroom-renovation-electrical-redwood-park',
        title: 'Bathroom Renovation Electrical in Redwood Park',
        metaDescription:
            'A full bathroom renovation in a 1980 brick veneer home in Redwood Park: LED downlights, a backlit mirror, new powerpoints and an exhaust fan ducted outside.',
        excerpt:
            'New downlights, a backlit LED mirror, powerpoints and an exhaust fan in a 1980 brick veneer bathroom that was originally wired for almost none of it.',
        date: '2026-08-14',
        author: 'Justin',
        category: 'Recent Work',
        image: '/images/bathroom_led_mirror_redwood_park.webp',
        gallery: [
            {
                src: '/images/bathroom_vanity_powerpoint_redwood_park.webp',
                alt: 'Wall-hung fluted timber vanity with a double powerpoint set clear of the basin, Redwood Park bathroom renovation',
                caption:
                    'The double powerpoint sits clear of the basin and at a height that works with the benchtop, agreed before the tiler started.',
            },
        ],
        services: [
            'renovation-electrician-adelaide',
            'downlight-installation-adelaide',
            'powerpoint-installation-adelaide',
            'feature-lighting-led-strip-adelaide',
        ],
        suburb: 'electrician-redwood-park',
        angles: {
            'downlight-installation-adelaide': {
                title: 'LED Downlights in a Redwood Park Bathroom',
                blurb: 'IC-rated LED downlights into a 1980 bathroom that was built with a single batten holder and a heat lamp.',
                anchor: 'downlights',
            },
            'powerpoint-installation-adelaide': {
                title: 'New Bathroom Powerpoints in Redwood Park',
                blurb: 'Setting out powerpoints clear of the wet zones and at the right height for the vanity, before the tiler started.',
                anchor: 'powerpoints',
                image: '/images/bathroom_vanity_powerpoint_redwood_park.webp',
            },
            'feature-lighting-led-strip-adelaide': {
                title: 'Backlit LED Mirror in a Redwood Park Bathroom',
                blurb: 'A backlit mirror needs a concealed supply roughed in before tiling. Order it late and you are choosing between a visible cable and a tiler back on site.',
                anchor: 'led-mirror',
            },
        },
        content: `
            <h3>Why This Matters to You</h3>
            <p>A bathroom is the least forgiving room in the house to get the electrical wrong. Everything is tiled, everything gets wet, and every cable has to be in the wall before the tiler turns up. Put a powerpoint in the wrong spot and correcting it means cutting out tile you have already paid for. Duct the exhaust fan into the roof space instead of outside and you spend the next decade quietly growing mould above the ceiling without ever seeing it.</p>
            <p>This one was a full bathroom renovation in a 1980 brick veneer home in Redwood Park. LED downlights, a backlit LED mirror, new powerpoints and a new exhaust fan. Here is what the job actually involved and what it means if you are about to do the same thing to a house of a similar age.</p>

            <h3>The Property</h3>
            <p>Redwood Park is largely late-1970s and early-1980s brick veneer, and this house sits right in that band. That matters more than it sounds, because a bathroom from 1980 was wired for almost nothing. The standard fit-out of the day was a single batten holder or a combined light and fan unit, often a heat lamp, and frequently not one powerpoint in the room. Nobody in 1980 was charging an electric toothbrush, running a heated towel rail or hanging a backlit mirror.</p>
            <p>So a bathroom renovation in a house like this is not a case of reusing what is already there. It is a new set of circuits going into a room that never had them, which is why it is worth involving <a href="/renovation-electrician-adelaide">an electrician at the planning stage</a> rather than once the walls are open.</p>

            <h3 id="powerpoints">Setting Out the Points Before the Tiles Go On</h3>
            <p>AS/NZS 3000 divides a bathroom into zones based on how close you are to the bath, shower and basin, and it sets what can be installed in each zone and how well sealed it has to be. Socket outlets in particular have to sit clear of the wet zones. That rules out a fair bit of wall in a room this size, and it has to be resolved on paper before anything is roughed in.</p>
            <p>The other half of the job is coordination. The <a href="/powerpoint-installation-adelaide">powerpoints</a> here needed to clear the basin, land at a height that works with the benchtop and the vanity, and not fight the tile layout. Once those points are agreed with the tiler and the cabinetmaker, they are locked in. Moving one afterwards is a tile cut, not an electrical job.</p>

            <h3 id="led-mirror">The Mirror Needs a Supply You Cannot See</h3>
            <p>Backlit LED mirrors are the detail that catches people out. The mirror in this bathroom has an integrated LED surround and a touch control on the face, and all of that needs a permanent supply sitting behind it. There is no cord and no visible outlet, which is the whole point of the look.</p>
            <p>That supply has to be roughed in before the wall is tiled, at the right height and the right offset for the specific mirror being fitted. Order the mirror after the tiling is done and you have a choice between a visible cable or a tiler back on site. This is the single most common thing to get missed on a bathroom renovation.</p>

            <h3 id="downlights">Downlights and the Exhaust Fan</h3>
            <p>The <a href="/downlight-installation-adelaide">LED downlights</a> went in on IC-rated fittings, which can sit in direct contact with ceiling insulation. That is a genuine change from the halogens this house would have been built with, which needed clearance from insulation because they ran hot enough to be a fire risk. If you are replacing old downlights rather than starting fresh, that clearance gap is worth asking about.</p>
            <p>The exhaust fan is ducted out through the eave, not left venting into the roof space. Pushing warm, wet air into a roof cavity is how you rot timber and grow mould in a spot nobody inspects. It is a small amount of extra work on the day and it is the difference between a fan that solves the problem and a fan that relocates it.</p>

            <h3>If You Have a Bathroom From This Era</h3>
            <p>Two things are worth checking before you start. The first is your switchboard. A 1980 board often has no RCD protection on the lighting circuit, and sometimes none at all, so adding new circuits to a bathroom is a natural point to look at whether the board is still doing its job. If yours has ceramic fuses or a single safety switch covering everything, read up on <a href="/switchboard-upgrade-adelaide">switchboard upgrades</a> before you commit to a renovation budget.</p>
            <p>The second is timing. All of the cabling in this job went in during first fix, before the plasterer and well before the tiler. The fittings, the mirror, the fan and the downlights went on at second fix once the room was finished. Bathroom renovations go wrong when the electrical is treated as something to sort out at the end, because by then the walls are closed.</p>
            <p>We work across Redwood Park and the surrounding north-eastern suburbs, and this is a common job here given the age of the housing. If you want to see what else we do locally, have a look at our <a href="/electrician-redwood-park">Redwood Park electrician</a> page.</p>
        `,
        cta: {
            heading: 'Planning a Bathroom Renovation?',
            description:
                'Get the electrical set out properly before the tiler starts, not after. JPD Complete Electrical works across Redwood Park and the north-eastern suburbs.',
            linkText: 'Book a Bathroom Renovation Quote',
            href: '/contact',
        },
    },
];

/** Newest first, so the cards on service and suburb pages lead with recent work. */
const byDateDesc = (a: JobReport, b: JobReport) => Date.parse(b.date) - Date.parse(a.date);

export const jobsForService = (serviceSlug: string): JobReport[] =>
    jobReports.filter((job) => job.services.includes(serviceSlug)).sort(byDateDesc);

export const jobsForSuburb = (suburbSlug: string): JobReport[] =>
    jobReports.filter((job) => job.suburb === suburbSlug).sort(byDateDesc);
