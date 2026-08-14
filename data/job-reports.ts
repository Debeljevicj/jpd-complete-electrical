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
        slug: 'underground-cable-fault-finding-golden-grove',
        title: 'Underground Cable Fault Finding in Golden Grove',
        metaDescription:
            'Tracing an underground fault at a Golden Grove soccer club that kept tripping the lighting, and repairing a buried join that was never suitable for burial.',
        excerpt:
            'Lighting that kept tripping at a Golden Grove soccer club, traced to a buried join that had let moisture in and corroded the conductors.',
        date: '2026-08-15',
        author: 'Justin',
        category: 'Recent Work',
        image: '/images/underground_cable_damage_golden_grove.webp',
        gallery: [
            {
                src: '/images/underground_cable_corroded_join_golden_grove.webp',
                alt: 'Corroded conductors at a failed underground cable join found at a Golden Grove soccer club',
                caption:
                    'The join once it was exposed. Copper that colour has had water sitting against it for a long time.',
            },
        ],
        services: ['emergency-electrician-adelaide', 'rcd-testing-safety-switches-adelaide'],
        suburb: 'electrician-golden-grove',
        angles: {
            'rcd-testing-safety-switches-adelaide': {
                title: 'Lighting That Kept Tripping at a Golden Grove Club',
                blurb: 'The safety switch was not faulty and it was not being oversensitive. It was detecting real leakage from a cable sitting in wet ground.',
                anchor: 'tripping',
                image: '/images/underground_cable_corroded_join_golden_grove.webp',
            },
        },
        content: `
            <h3>Why This Matters to You</h3>
            <p>An underground fault is the most frustrating kind, because there is nothing to look at. The cable is a metre under the ground, the fault could be anywhere along its length, and the only thing you can see is a safety switch that will not stay on. The usual response is to reset it, get a few days out of it, and reset it again.</p>
            <p>This one was at a soccer club in Golden Grove. Their lighting kept tripping, there had been construction work nearby, and the tripping was getting more frequent. Here is how the fault was found and what was actually wrong.</p>

            <h3 id="fault-finding">Finding a Fault You Cannot See</h3>
            <p>The temptation with a buried cable is to start digging where it seems most likely. That is an expensive guess, particularly across a sports ground where the surface has to go back the way it was found.</p>
            <p>The work happens before the shovel comes out. The circuit gets isolated and tested to confirm the leakage is real and to establish which conductor is involved, because a fault between an active and earth behaves differently to a fault between active and neutral, and that tells you something about what you are looking for. From there the fault is narrowed down to a position along the run rather than a general area, so that when the ground is opened it is opened once, in the right spot.</p>
            <p>That approach is the difference between a morning and a week, and on a site with a playing surface it is also the difference between one small excavation and a trench across the ground.</p>

            <h3 id="the-fault">What Was Actually Wrong</h3>
            <p>Two things had happened. Construction work nearby had disturbed the ground and damaged the cable. But the point that actually failed was a join in the cable that a previous electrician had made and buried.</p>
            <p>A join that is going to live underground has to be sealed against water for the whole of its life, because the ground it sits in will be wet for part of every year. This one was not, and moisture had been getting into it. The conductors had corroded to the point you can see in the photo below, and corroded copper in wet ground leaks current to earth. That leakage was what the safety switch had been detecting.</p>
            <p>None of this was visible from the surface, and it would have been invisible on a visual inspection of the switchboard as well. The only symptom available was the tripping.</p>

            <h3 id="the-repair">Repairing It Properly</h3>
            <p>The damaged section was cut out and remade as a resin-filled joint. The joint goes into a shell, resin is poured in, and it cures into a solid block around the conductors with no path for water to reach the copper. That is what a buried joint is supposed to be, and it is the reason the repair will outlast the original.</p>
            <p>The conduit was repaired at the same time. Leaving a damaged conduit and relying on the cable alone means the next person to dig has nothing to warn them, and the cable has lost the mechanical protection it was supposed to have.</p>

            <h3 id="tripping">The Safety Switch Was Not the Problem</h3>
            <p>This is worth saying plainly, because it comes up constantly. A safety switch that keeps tripping is almost never a faulty safety switch. It is a device doing exactly what it was installed to do, telling you that current is going somewhere it should not.</p>
            <p>Repeatedly resetting it is not a fix, and replacing it because it seems oversensitive removes the only protection standing between a fault and a person. If you have a circuit that trips after rain, or trips more in winter than summer, moisture getting into something is the first thing to suspect. Our page on <a href="/rcd-testing-safety-switches-adelaide">safety switches and RCD testing</a> covers how they are properly tested.</p>

            <h3>If Your Circuit Keeps Tripping</h3>
            <p>Note the pattern before you call. Does it trip at a particular time of day, after rain, when a specific light or appliance comes on, or at random? That pattern is genuinely useful diagnostic information and it can save an hour of testing.</p>
            <p>For clubs, schools and businesses there is a second reason not to leave it: lighting that fails without warning is a safety and liability problem before it is an inconvenience. If it needs sorting the same day, that is what our <a href="/emergency-electrician-adelaide">emergency electrician</a> service is for, and we cover Golden Grove and the surrounding suburbs from Wynn Vale. There is more on what we do locally on our <a href="/electrician-golden-grove">Golden Grove electrician</a> page.</p>
        `,
        cta: {
            heading: 'Circuit Tripping and Nobody Can Find Why?',
            description:
                'Underground and intermittent faults need proper testing rather than guesswork. JPD Complete Electrical covers Golden Grove and the north-eastern suburbs.',
            linkText: 'Book Fault Finding',
            href: '/contact',
        },
    },
    {
        slug: 'zetr-powerpoint-stone-splashback-golden-grove',
        title: 'Zetr Powerpoint on a Stone Splashback in Golden Grove',
        seoTitle: 'Zetr Powerpoint on Stone Splashback | JPD',
        metaDescription:
            'Installing a flush matt black Zetr outlet into a genuine stone splashback in a Golden Grove kitchen renovation, and why the cutout has to be agreed before the stone is cut.',
        excerpt:
            'A flush matt black outlet set into genuine stone, where the cutout is made off site and there is no second attempt if the size is wrong.',
        date: '2026-08-15',
        author: 'Justin',
        category: 'Recent Work',
        image: '/images/zetr_powerpoint_stone_splashback_golden_grove.webp',
        services: ['powerpoint-installation-adelaide', 'renovation-electrician-adelaide'],
        suburb: 'electrician-golden-grove',
        angles: {
            'renovation-electrician-adelaide': {
                title: 'Premium Kitchen Renovation Electrical in Golden Grove',
                blurb: 'Flush outlets in genuine stone only work if the electrician, the stonemason and the cabinetmaker agree the positions before anything is fabricated.',
                anchor: 'stonemason',
            },
        },
        content: `
            <h3>Why This Matters to You</h3>
            <p>In an expensive kitchen, the powerpoints are usually the thing that lets the look down. Everything else gets chosen carefully, the stone, the tapware, the handles, the appliances, and then there is a standard white outlet screwed onto the splashback in the middle of it.</p>
            <p>This job was a premium kitchen renovation in Golden Grove with a genuine stone splashback, and the outlets were specified to match the rest of the room. Matt black Zetr outlets, sitting flush in the stone, chosen to tie in with the appliances.</p>

            <h3 id="stonemason">This Has to Be Planned With the Stonemason</h3>
            <p>Here is the part that matters, and it is the reason this cannot be decided late.</p>
            <p>A stone splashback is cut off site. The stonemason works from a template and machines the slab before it ever arrives at the house, and the cutout for a flush outlet has to be the exact size and shape that particular product needs. That dimension has to reach the stonemason before the stone is cut.</p>
            <p>There is no adjusting it afterwards. You cannot enlarge a hole in a finished stone splashback neatly, and you cannot make one smaller at all. If the cutout is wrong, you are either looking at a visible compromise in the middle of the most expensive surface in the room, or a new slab. On genuine stone with visible veining, a replacement slab also will not match the one next to it.</p>
            <p>So the sequence is: outlet product confirmed, positions agreed, exact cutout dimensions given to the stonemason, then the stone is cut, then the rough-in behind has to line up with where that cutout is going to land. Get those in the wrong order and the expensive part is already ruined.</p>

            <h3 id="zetr">What Makes These Different</h3>
            <p>A standard outlet sits on top of the surface with a visible plate around it. A flush outlet like this sits in the surface, so the face is close to level with the stone and there is no plate edge catching light or collecting dust along the top.</p>
            <p>They come in a range of finishes, which is the point of using them. This one was matt black because that is what the appliances were, so the outlet reads as part of the design rather than as something that had to be there. In a kitchen where the splashback is the feature, that is worth doing properly.</p>

            <h3 id="position">Getting the Position Right</h3>
            <p>Position on a splashback is not just about looks. The outlet has to be usable with the bench in front of it, which means high enough that a plug and its cable are not fouling the benchtop, and it has to sit clear of the cooktop, because there are requirements about how close a socket outlet can be to a cooking appliance.</p>
            <p>It also has to work around where the appliances are actually going to sit, which is a conversation with the cabinetmaker rather than a guess. All of that gets resolved on the plan, before the stone is machined, for the reasons above.</p>

            <h3>If You Are Planning a Premium Kitchen</h3>
            <p>Get your electrician involved at the design stage rather than at the fit-out stage. By the time the stone is on site, every decision that mattered has already been made, and the only question left is whether it was made correctly.</p>
            <p>If you are choosing flush outlets, confirm the exact product early, because the cutout dimension is product specific and the stonemason needs it before fabrication. More on outlets and circuits is on our <a href="/powerpoint-installation-adelaide">powerpoints page</a>, and on planning electrical for a whole renovation on our <a href="/renovation-electrician-adelaide">renovation electrician</a> page. We work across Golden Grove and the surrounding suburbs, see our <a href="/electrician-golden-grove">Golden Grove electrician</a> page for what else we cover locally.</p>
        `,
        cta: {
            heading: 'Planning a Premium Kitchen?',
            description:
                'Flush outlets in stone need the electrical decided before the stone is cut. JPD Complete Electrical works across Golden Grove and the north-eastern suburbs.',
            linkText: 'Book a Kitchen Electrical Quote',
            href: '/contact',
        },
    },
    {
        slug: 'pool-power-supply-subboard-golden-grove',
        title: 'Pool Power Supply and Subboard in Golden Grove',
        metaDescription:
            'Underground supply from the house to a pool equipment station in Golden Grove, with a weatherproof subboard and a separate circuit for every piece of equipment.',
        excerpt:
            'An underground supply out to the pool equipment, a weatherproof subboard, and a dedicated circuit for the pump, the lights and the heater so one fault cannot take out the lot.',
        date: '2026-08-15',
        author: 'Justin',
        category: 'Recent Work',
        image: '/images/pool_equipment_station_golden_grove.webp',
        gallery: [
            {
                src: '/images/pool_subboard_golden_grove.webp',
                alt: 'Weatherproof pool subboard in Golden Grove with individual circuit protection for the pump, lights and heater',
                caption:
                    'Individual protection per circuit inside a weatherproof enclosure. A fault on the pool lights trips the pool lights, and nothing else.',
            },
            {
                src: '/images/pool_golden_grove.webp',
                alt: 'Finished pool in Golden Grove with the equipment station wired and the yard tidy',
                caption: 'The finished job. None of the electrical is the first thing you notice, which is the point.',
            },
        ],
        services: [
            'switchboard-upgrade-adelaide',
            'powerpoint-installation-adelaide',
            'rcd-testing-safety-switches-adelaide',
        ],
        suburb: 'electrician-golden-grove',
        angles: {
            'powerpoint-installation-adelaide': {
                title: 'Dedicated Pool Circuits and a 15A Outlet in Golden Grove',
                blurb: 'A 15A outlet for the pool heater and separate circuits for the pump and lights, so one wet fitting does not shut down the whole pool.',
                anchor: 'nuisance-tripping',
                image: '/images/pool_equipment_station_golden_grove.webp',
            },
            'rcd-testing-safety-switches-adelaide': {
                title: 'Why the Pool Kept Tripping, and How Circuits Fix It',
                blurb: 'Pool lights and outdoor gear are the most likely things to develop leakage. Sharing one safety switch across the lot is what causes the nuisance trips.',
                anchor: 'nuisance-tripping',
                image: '/images/pool_subboard_golden_grove.webp',
            },
            'switchboard-upgrade-adelaide': {
                title: 'Weatherproof Pool Subboard in Golden Grove',
                blurb: 'A subboard at the pool end rather than four long runs back to the house, in an enclosure rated to live outside permanently.',
                anchor: 'subboard',
                image: '/images/pool_subboard_golden_grove.webp',
            },
        },
        content: `
            <h3>Why This Matters to You</h3>
            <p>Two things go wrong with pool electrical, and you have probably seen both. The first is an extension lead running across the lawn to the pump, which is a trip hazard, a shock risk and not a legal way to supply fixed equipment. The second is a pool that trips its safety switch every time it rains, so the pump stops, nobody notices for three days, and the water goes green.</p>
            <p>This job in Golden Grove, in the streets off Golden Way, was a new pool with the electrical done properly from the start. Underground supply from the house, a weatherproof subboard at the pool end, and a separate circuit for each piece of equipment. Here is why each of those decisions was made.</p>

            <h3 id="underground">Getting Power Out to the Pool</h3>
            <p>Pool equipment is almost never near the switchboard. It sits at the back of the block, behind a fence, which means the power has to get there underground.</p>
            <p>That is a trenching job before it is an electrical one. The cable goes in at the required depth, inside orange conduit so that anyone digging later can see immediately what they have found, and it needs to be sized for the distance rather than just for the load. Voltage drop is the part people forget. A cable that would be fine for a pump ten metres away can leave that same pump running low across a long run to the back of a block, and a motor fed on low voltage runs hot and dies early.</p>

            <h3 id="subboard">A Subboard at the Pool End</h3>
            <p>The alternative to a subboard is running four separate circuits all the way from the house, which means four times the trenching, four times the cable, and a switchboard at the house filling up with pool circuits.</p>
            <p>Instead this job runs one correctly sized supply out to the pool and puts a small board there. Everything the pool needs is protected and switched at the pool, so if the pump needs isolating for service it happens right there rather than someone walking back inside to guess at a label. It also leaves room to add to it later, which matters because pools accumulate equipment. Today it is a pump, a chlorinator and lights. In two years it is a heater and a robot cleaner as well. For the same reasoning applied to a main board, see <a href="/switchboard-upgrade-adelaide">switchboard upgrades</a>.</p>

            <h3 id="nuisance-tripping">Why Everything Got Its Own Circuit</h3>
            <p>This is the part that matters most, and it is the difference between a pool that works and a pool that annoys you.</p>
            <p>Pool lights, outdoor outlets and pump motors are the equipment most likely to develop a small amount of earth leakage over time. They live in water, weather and UV. If all of that shares one safety switch, then the first fitting to let a bit of moisture in trips everything, including the pump. That is what nuisance tripping actually is: not a faulty safety switch, but one safety switch being asked to cover too much.</p>
            <p>So the pool pump, the pool lights and the heater each got their own circuit and their own protection. A fault in a pool light now trips the pool light. The pump keeps running, the water keeps moving, and you have a fault narrowed to one circuit before anyone even looks at it. If your existing pool trips regularly, that is worth reading alongside our page on <a href="/rcd-testing-safety-switches-adelaide">safety switches and RCD testing</a>, because the safety switch is usually doing its job correctly and telling you something real.</p>

            <h3 id="heater-outlet">A 15A Outlet for the Heater</h3>
            <p>Pool heaters, particularly heat pumps, commonly draw more than a standard outlet is rated for. A 15A plug has a wider earth pin than a 10A plug specifically so it physically cannot be pushed into a 10A socket, because the circuit behind that socket was never built to carry it.</p>
            <p>So the heater got a <a href="/powerpoint-installation-adelaide">dedicated 15A outlet</a> on its own circuit. If you are buying a heater, check what it needs before it arrives rather than after, because a 15A appliance and a 10A outlet is a problem that gets discovered on delivery day.</p>

            <h3 id="weatherproofing">Built to Live Outside</h3>
            <p>Everything at the pool end is in weatherproof enclosures and weatherproof outlets, mounted on a backing board rather than screwed straight to the fence. It sits in full Adelaide sun and gets rained on for the next twenty years, and the difference between gear rated for that and gear that is not shows up in about three summers.</p>
            <p>There are also rules about how close electrical equipment can be to the water. AS/NZS 3000 defines zones around a pool, and what you are allowed to install and how well sealed it has to be depends on which zone it lands in. That is worked out before anything is mounted, not after.</p>

            <h3>If You Are Putting In a Pool</h3>
            <p>Talk to your electrician while the yard is still open. Once the paving is down and the fence is up, trenching a supply out to the equipment becomes a much bigger and more expensive job than it needed to be. The cheapest time to run underground cable is when there is already a hole in the ground.</p>
            <p>Get the equipment list from your pool builder first, including whether a heater is coming later. It is far easier to install a board with room in it than to go back and add capacity to a full one. We do this work across Golden Grove and the surrounding suburbs, and you can see the rest of what we cover locally on our <a href="/electrician-golden-grove">Golden Grove electrician</a> page.</p>
        `,
        cta: {
            heading: 'Putting In a Pool?',
            description:
                'Get the supply, the board and the circuits sorted while the yard is still open. JPD Complete Electrical works across Golden Grove and the north-eastern suburbs.',
            linkText: 'Book a Pool Electrical Quote',
            href: '/contact',
        },
    },
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
