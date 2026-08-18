import { pricingPosts } from './blog-guides-pricing';
import { upgradePosts } from './blog-guides-upgrades';
import { localPosts } from './blog-guides-local';
import { jobReports } from './job-reports';

export interface BlogPost {
    slug: string;
    title: string;
    /** Overrides the <title> tag where `title` plus the " | JPD" suffix exceeds ~60 chars. */
    seoTitle?: string;
    /** Overrides the meta description where the excerpt runs past ~160 chars. */
    metaDescription?: string;
    excerpt: string;
    date: string;
    /** Set when a post is substantially rewritten. Feeds dateModified; datePublished stays put. */
    updated?: string;
    author: string;
    content: string;
    image: string;
    /** Extra job photos, shown under the article body. Job reports use this; guides do not. */
    gallery?: {
        src: string;
        alt: string;
        caption?: string;
    }[];
    category: string;
    cta: {
        heading: string;
        description: string;
        linkText: string;
        href: string;
    };
}

const legacyPosts: BlogPost[] = [
    {
        slug: 'rcd-testing-thermal-imaging-adelaide',
        title: 'RCD Testing & Thermal Imaging: The Maintenance Most Properties Skip',
        seoTitle: 'RCD Testing & Thermal Imaging Adelaide | JPD',
        excerpt: 'Safety switches and thermal scans catch two very different kinds of electrical fault. Here\'s what each one actually finds, and how often you need them.',
        date: '2026-07-29',
        author: 'Justin',
        category: 'Maintenance',
        image: '/images/switchboard_fault_finding.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>If a connection inside your switchboard is quietly overheating, you won't know about it until it trips, fails, or starts a fire. If one of your safety switches has stopped working properly, you won't find out until someone actually needs it to save them from a shock. Both of these are cheap, fast checks. Neither one shows up on a walk-through, and neither gets fixed by waiting and hoping.</p>
            <p>To be direct about it: a switchboard fault left unchecked can start a house fire, and a safety switch that fails to trip when it's actually needed can be the difference between someone getting a shock and someone dying from one. These aren't rare, exaggerated scenarios. They're precisely the outcomes RCD testing and thermal imaging are designed to prevent, and both are entirely avoidable with a routine check.</p>
            <p>If you're a landlord, run a medical or disability-care premises, or manage a workplace, there are also compliance obligations tied to this. Skipping it isn't just a safety gap, it can be a legal and insurance problem too.</p>

            <h3>What RCD Testing Actually Checks</h3>
            <p>An RCD (safety switch) is designed to cut power within milliseconds if current is leaking somewhere it shouldn't, through a damaged appliance, a nicked cable, or a person. It's the single biggest defence against electric shock in a modern home or workplace. But RCDs are mechanical devices, and like anything mechanical, they can fail to trip when you actually need them to.</p>
            <p>Formal RCD testing involves triggering each safety switch with a calibrated test device and confirming it trips within the required time. For homes, this is worth doing every couple of years. For rental properties, medical premises, and workplaces, there are compliance schedules (often annual, sometimes more frequent) tied to insurance and tenancy legislation, and a test report is the only way to prove it's been done.</p>

            <h3>What Thermal Imaging Catches That RCD Testing Doesn't</h3>
            <p>RCD testing tells you your shock protection works. It doesn't tell you a connection inside your switchboard has been slowly cooking itself for the last six months. That's where thermal imaging comes in: a scan of your switchboard and circuits with a thermal camera, picking up heat signatures at loose connections, overloaded circuits, and failing components that are completely invisible from the outside.</p>
            <p>A connection that's heating up under load is a fire risk that will keep getting worse until it either fails or ignites something. The switchboard looks fine, the lights work, and nothing trips, right up until it doesn't. Thermal imaging is the only practical way to catch this early, and it's done live, with no need to shut anything down.</p>

            <h3>Who Actually Needs This</h3>
            <p>Rental properties and medical or disability-care premises usually have compliance obligations that make this a formality rather than a choice. But it's just as relevant for any home or business with an older switchboard, a history of tripped breakers, high-draw appliances (EV chargers, pool pumps, air conditioning), or a switchboard that's never been inspected since the house was built.</p>

            <h3>How We Run It</h3>
            <p>For most properties, RCD testing and a thermal scan are done in the same visit. You get a straightforward pass/fail on your safety switches and a report showing exactly what the thermal camera picked up, with photos. If something's running hot, you'll know precisely which connection or circuit before it becomes an emergency callout.</p>
        `,
        cta: {
            heading: 'Book an RCD Test & Thermal Imaging Scan',
            description: "Protect your property with a combined RCD safety switch test and thermal imaging inspection from JPD Complete Electrical, Adelaide's licensed local electrician.",
            linkText: 'Book Your RCD Testing & Thermal Imaging Scan',
            href: '/contact',
        },
    },
    {
        slug: 'electrical-safety-tips-adelaide-homes',
        title: '5 Essential Electrical Safety Tips for Adelaide Homes',
        excerpt: `The safety checks worth doing yourself, the ones that need a licensed electrician, and how to tell which is which.`,
        date: '2023-10-15',
        updated: '2026-08-18',
        author: 'Justin',
        category: 'Safety',
        image: '/images/residential_switchboard_upgrade_2.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>Most electrical incidents in homes are not dramatic. They are a cord that has been quietly overheating under a rug, a safety switch that stopped working three years ago and nobody noticed, or a power board carrying twice what it was designed for. None of these announce themselves. They sit there until something gives.</p>
            <p>The good news is that a decent share of it is checkable in about twenty minutes, without tools, by anyone living in the house. What follows is what actually matters, split into what you can do yourself and what needs a licensed electrician. Adelaide summers put real load on a house, so if you are going to run through this, the start of the warmer months is a sensible time.</p>

            <h3>1. Test Your Safety Switches, and Understand What the Test Proves</h3>
            <p>A safety switch (RCD) is designed to cut power within about 30 milliseconds if current starts leaking somewhere it should not, through a damaged appliance, a nicked cable, or a person. It is the single biggest defence against electric shock in a modern home.</p>
            <p>Press the "Test" button on each one every three months. It should trip instantly. If it does not, stop using that circuit and call an electrician.</p>
            <p>Here is the part most people miss: the test button only confirms the mechanism moves. It does not confirm the device trips fast enough, or at the right leakage current, to actually protect someone. That needs a calibrated tester, and it is the difference between "the button works" and "this will save someone". If your RCDs have never had a proper instrument test, that is worth booking. Our guide to <a href="/blog/rcd-testing-thermal-imaging-adelaide">RCD testing and thermal imaging</a> covers what a real test involves, and <a href="/rcd-testing-safety-switches-adelaide">RCD testing and safety switches</a> explains the service itself.</p>
            <p>One more thing worth checking: a lot of older Adelaide homes have RCD protection on the power circuits but not the lighting circuits. If yours is like that, you are only half covered.</p>

            <h3>2. Power Boards, Double Adaptors and the Daisy Chain Problem</h3>
            <p>Plugging a power board into another power board is a genuine fire risk, not a technicality. Each board is rated for a total load, and chaining them lets you draw far more through one wall outlet than it was ever designed to carry. The outlet and the cable behind it heat up, and nothing trips, because the breaker is protecting the circuit rather than the overloaded accessory.</p>
            <p>Watch the high draw items in particular: heaters, kettles, toasters, air fryers, and anything with a heating element. These are the ones that turn a marginal setup into a hot one. A fan heater on an extension lead run under a door is a classic.</p>
            <p>If you are permanently short of outlets in a room, that is the actual problem, and the fix is <a href="/powerpoint-installation-adelaide">additional powerpoints</a> rather than more boards. It is safer, it is tidier, and in most rooms it is a straightforward job.</p>

            <h3>3. Check Cords, Plugs and Where They Run</h3>
            <p>Look along appliance cords for fraying, nicks, stiffness, or any section that has gone discoloured. Check the plug itself for scorching or a loose pin. If a plug feels warm after normal use, something is wrong with it.</p>
            <p>Just as important is where cords run. Never under a rug or carpet, where heat cannot escape and foot traffic works the insulation loose. Never pinched behind furniture pushed hard against a wall. Never through a doorway that closes on them.</p>
            <p>Extension leads are for temporary use. If a lead has been in the same spot for a year, it has stopped being an extension lead and started being unapproved fixed wiring.</p>

            <h3>4. Wet Areas Deserve More Care Than They Get</h3>
            <p>Bathrooms, kitchens, laundries and anywhere outdoors carry more risk because water lowers the resistance between you and earth. Dry your hands before touching switches. Keep appliances well clear of sinks and baths. Do not use a portable heater in a bathroom.</p>
            <p>Outside, check that outdoor outlets have intact weatherproof covers that actually close, and that any lead running to a shed or pergola is rated for outdoor use rather than draped across the lawn. Garden power in older Adelaide homes is frequently an afterthought that has been extended over the years, and it is a common place to find work that was never done by a licensed electrician.</p>

            <h3>5. Know the Age of Your Switchboard</h3>
            <p>If your board still has ceramic fuses, the ones with the removable carriers and fuse wire, it belongs to an era before safety switches existed. It offers no shock protection at all, only rudimentary overload protection, and it cannot be extended to run modern loads.</p>
            <p>A lot of the housing stock through the north-eastern suburbs sits in exactly this bracket. If your board looks like it came with the house and the house is from the sixties or seventies, it is worth having assessed. The <a href="/blog/signs-you-need-switchboard-upgrade">warning signs that a switchboard needs upgrading</a> covers this in more detail, and <a href="/switchboard-upgrade-adelaide">switchboard upgrades</a> explains what the work involves.</p>

            <h3>6. Pay Attention to Things That Have Changed</h3>
            <p>Most of the calls we get that turn out to be serious started with someone noticing something different. A light that flickers when the air conditioner starts. A switch that has begun to feel warm. A faint smell of hot plastic near the board that comes and goes. A breaker that trips once a month rather than never.</p>
            <p>None of those are emergencies on their own, and all of them are worth acting on, because they are the early version of a problem that gets more expensive and more dangerous the longer it runs.</p>

            <h3>When to Stop and Call Someone</h3>
            <p>Turn off the main switch and call an electrician straight away if you smell burning plastic, see scorch or brown marks around an outlet or the switchboard, get any kind of tingle from an appliance or a tap, or have a breaker that trips immediately every time you reset it. That last one means there is a fault on the circuit right now, and resetting it repeatedly is not a fix.</p>
            <p>If it is after hours and it will not wait, that is what an <a href="/emergency-electrician-adelaide">emergency electrician</a> is for.</p>

            <h3>The Honest Summary</h3>
            <p>Testing your RCDs quarterly, keeping cords sensible, and not chaining power boards covers a lot of ground for no cost. Beyond that, the two things genuinely worth paying for are a proper instrument test of your safety switches and an assessment of an old switchboard. Both are quick, neither is expensive relative to what they protect against, and together they cover the failure modes that actually hurt people.</p>
        `,
        cta: {
            heading: 'Get a Full Electrical Safety Check',
            description: 'Have a licensed Adelaide electrician run through the checks covered here properly, including a professional RCD test, so you know exactly where your home stands.',
            linkText: 'Book an Electrical Safety Inspection',
            href: '/contact',
        },
    },
    {
        slug: 'led-lighting-upgrade-benefits',
        title: 'Why Upgrading to LED Lighting Saves You Money',
        excerpt: `What halogen downlights actually cost to run in Adelaide, and what a proper LED upgrade involves beyond swapping globes.`,
        date: '2023-11-02',
        updated: '2026-08-18',
        author: 'Justin',
        category: 'Efficiency',
        image: '/images/bedroom_led_downlights.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>If your house still has halogen downlights, you are paying to heat your ceiling. A halogen converts most of the energy it draws into heat rather than light, and in a house with twenty of them the running cost adds up to real money every year.</p>
            <p>Below are the numbers, with the assumptions stated so you can adjust them to your own house, plus the part most articles skip: what a proper LED upgrade actually involves, and where the cheap version goes wrong.</p>

            <h3>What Halogens Actually Cost You</h3>
            <p>A standard halogen downlight draws around 50 watts. An equivalent LED does the same job on roughly 8 watts. That is about 42 watts saved per fitting.</p>
            <p>Working it through, and being clear these are assumptions rather than a quote: twenty downlights, averaging four hours a day across the house, at 45 cents per kilowatt hour, which is in the range South Australian households have been paying.</p>
            <p>That is 840 watts saved when they are all running, about 3.4 kilowatt hours a day, and roughly 1,200 kilowatt hours across a year. At 45 cents, somewhere near 550 dollars a year.</p>
            <p>Your house will differ. Fewer lights, or fewer hours, and the figure comes down accordingly. But the shape of it holds: on a full house of halogens the saving is usually in the hundreds per year rather than the tens, and South Australian electricity prices make the case stronger here than in most of the country.</p>

            <h3>They Last Long Enough to Matter</h3>
            <p>Halogen globes typically give 1,000 to 2,000 hours. A decent LED fitting is rated for 25,000 hours or more. On the four hours a day above, that is a globe change every year or so versus something that should outlast the next fifteen.</p>
            <p>The practical benefit is not really the cost of globes. It is never having to get the ladder out, work out which of the three fittings above the stairwell has gone this time, and find that the replacement is a slightly different colour to the rest.</p>

            <h3>The Safety Case Is Stronger Than the Savings Case</h3>
            <p>Halogen downlights run extremely hot, up to around 300 degrees at the fitting. That heat sits in your roof space, directly against whatever is up there. Older installations frequently have insulation pushed against fittings that were never designed to tolerate it, and insulation in contact with a halogen is a genuine fire risk.</p>
            <p>It is also why you sometimes find a neat square of missing insulation around each downlight in an older house, which is doing exactly what it should for fire safety while quietly undermining the thermal performance you paid for.</p>
            <p>LEDs run cool enough that appropriately rated fittings can be covered by insulation, so you get the full benefit of the insulation and lose the hot spots. In an Adelaide summer that is worth something beyond the lighting bill.</p>

            <h3>Light Quality, and Choosing a Colour Temperature</h3>
            <p>Modern LEDs come in a range of colour temperatures, and this is the choice people most often get wrong, because it is made on a shelf under fluorescent lighting rather than in the room.</p>
            <p>Warm white, around 3000K, is closest to the halogen look people are used to, and suits bedrooms and living areas. Cool white, around 4000K, is cleaner and works well in kitchens, laundries and bathrooms. Daylight, 5000K and above, is bright and clinical, and in a home it usually reads as harsh outside of a garage or workshop.</p>
            <p>Mixing temperatures across an open plan area is the other common mistake. If the kitchen and living room see each other, they should match. Many current fittings are switchable across all three, which takes the risk out of the decision, and it is worth asking for those.</p>
            <p>Colour rendering matters too, particularly in kitchens and bathrooms. A poor LED makes food and skin tones look wrong in a way that is hard to name but easy to notice.</p>

            <h3>What a Proper Upgrade Involves</h3>
            <p>Swapping a halogen for an LED is not always just changing the globe. Depending on what you have, the job may involve removing old transformers, which continue drawing power and are a common failure point, replacing the whole fitting rather than the lamp, and checking that the existing cabling and the way the fittings were installed is sound.</p>
            <p>Older downlight installs are also a reasonable place to find work that was done poorly. Once the fittings are out and we can see into the ceiling, problems that were invisible from below tend to surface.</p>
            <p>If you are changing the number or position of fittings rather than swapping like for like, that is a lighting design question as much as an electrical one, and it is worth getting right while the ceiling is open. Our <a href="/downlight-installation-adelaide">downlight installation</a> page covers the layout side, and <a href="/feature-lighting-led-strip-adelaide">feature lighting and LED strip</a> covers the work that goes beyond general lighting.</p>

            <h3>Where the Cheap Version Goes Wrong</h3>
            <p>The failure modes with budget LED fittings are predictable. Flicker, which some people see and some do not, and which is genuinely unpleasant if you are one of the people who does. Buzzing on dimmers, because the dimmer was designed for a resistive halogen load and an LED is not one. Colour drift, where fittings that matched on day one no longer match after two years. And early driver failure, where the LED chip is fine but the electronics behind it are not, at which point you are replacing the fitting anyway.</p>
            <p>If you are dimming, the dimmer and the fitting need to be a compatible pair. That is the single most common reason a new LED install disappoints, and it is entirely avoidable by choosing them together.</p>

            <h3>The Short Version</h3>
            <p>On a full house of halogens the energy saving usually pays for the upgrade within a few years, the fire risk in the roof space goes away, and the maintenance stops. The savings make it sensible. The heat is the reason not to put it off.</p>
        `,
        cta: {
            heading: 'Upgrade to LED Lighting',
            description: 'Start saving on your energy bill with a professional LED downlight upgrade, installed cleanly and safely by JPD Complete Electrical.',
            linkText: 'Get a Free LED Lighting Upgrade Quote',
            href: '/contact',
        },
    },
    {
        slug: 'signs-you-need-switchboard-upgrade',
        title: 'Warning Signs Your Switchboard Needs Upgrading',
        excerpt: `The warning signs worth acting on, what a switchboard upgrade actually involves, and what it will not fix.`,
        date: '2023-11-20',
        updated: '2026-08-18',
        author: 'Justin',
        category: 'Maintenance',
        image: '/images/residential_switchboard_upgrade_1.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>Your switchboard is where every circuit in the house terminates and where all the protection lives. When it is old, the failure is rarely sudden. It is a slow drift where the board gets less able to handle what the house now asks of it, while the protection it offers falls further behind what is expected.</p>
            <p>Modern houses draw far more than the ones these boards were designed for. Ducted air conditioning, induction cooktops, EV chargers, heat pump hot water, a home office running all day. A board specified in 1972 was not built with any of that in mind.</p>
            <p>Here is what to look for, in rough order of how urgently it needs attention.</p>

            <h3>1. Burning Smell or Scorch Marks</h3>
            <p>Taking this out of order because it is the one that cannot wait. If you smell hot or burning plastic near the board, or see brown or black marks around the board or any outlet, turn off the main switch and call an electrician immediately.</p>
            <p>That smell is insulation or plastic getting hot enough to break down, which means a connection is arcing or badly overloaded. It does not resolve itself. Left alone it progresses to a fire, and it can do so quickly.</p>
            <p>Worth knowing: a connection can run hot for months before it ever produces a smell or a mark. That is precisely what <a href="/thermal-imaging-adelaide">thermal imaging</a> is for, and it is covered in more detail in our guide to <a href="/blog/rcd-testing-thermal-imaging-adelaide">RCD testing and thermal imaging</a>. It is the only practical way to catch this stage early.</p>

            <h3>2. No Safety Switches, or Only Partial Coverage</h3>
            <p>If your board has no RCDs at all, you have no shock protection, and that is the strongest single argument for upgrading.</p>
            <p>More common, and easier to miss, is partial coverage. Plenty of Adelaide homes had RCDs added to the power circuits at some point and never to the lighting circuits. That leaves the lighting, and often anything hard wired like exhaust fans, with no shock protection at all. People in that situation generally believe they are covered, because there is an RCD on the board.</p>
            <p>If you are not sure which of your circuits are protected, that is worth establishing. It is a quick thing to check and the answer is frequently not what the owner expected.</p>

            <h3>3. Ceramic Fuses</h3>
            <p>If your board still has ceramic fuse carriers, the porcelain holders you pull out with fuse wire inside, the board predates safety switches entirely.</p>
            <p>Beyond the absent shock protection, rewireable fuses have a practical problem: they only protect correctly if the right gauge of wire was fitted. Over decades, boards get rewired by whoever was around at the time, and heavier wire gets fitted to stop a fuse that "keeps blowing". At that point the fuse is no longer protecting the circuit, and the thing it was protecting against is now free to happen inside the wall.</p>
            <p>A lot of the original housing stock through Tea Tree Gully and the surrounding suburbs is in this category. If the board looks original and the house is from the sixties or seventies, assume it needs assessing.</p>

            <h3>4. Fuses Blowing or Breakers Tripping Repeatedly</h3>
            <p>An occasional trip is usually a faulty appliance and not a concern. A pattern is different.</p>
            <p>If the same breaker goes every time the kettle and the toaster run together, that circuit is at capacity, which normally means too much has been added to it over the years. If a breaker trips immediately every time you reset it, there is a live fault on that circuit right now, and it needs looking at rather than resetting.</p>
            <p>What matters is whether it is getting more frequent. A circuit that tripped twice last year and twice last month is telling you something is deteriorating.</p>

            <h3>5. Lights That Flicker or Dim Under Load</h3>
            <p>Lights dipping when the air conditioner or the oven kicks in points to a loose connection or a circuit working harder than it should. Loose connections are the ones to take seriously, because a loose connection is a hot connection, and that is the same path that ends in the scorch marks above.</p>
            <p>If the flickering is house wide rather than one room, it is more likely to be at the board or the incoming supply, and that is worth investigating properly.</p>

            <h3>6. No Room Left on the Board</h3>
            <p>This one is not a safety issue on its own, it is a planning one. If the board is physically full, every future addition becomes awkward and expensive. Adding an <a href="/ev-charger-installation-adelaide">EV charger</a>, a new air conditioner, or a decent workshop circuit all need a spare way and adequate capacity.</p>
            <p>If you are considering any of those in the next few years, doing the board first is usually cheaper than doing it twice.</p>

            <h3>7. Asbestos Backing Board</h3>
            <p>Switchboards from roughly the fifties through the seventies were often mounted on asbestos backing sheet. Undisturbed and in good condition it is not an immediate hazard, but it does constrain what can be done to the board, and it needs handling correctly during any upgrade rather than being discovered halfway through.</p>
            <p>If your board is that vintage, mention it when you get a quote so it is priced properly from the start rather than becoming a variation on the day.</p>

            <h3>What an Upgrade Actually Involves</h3>
            <p>A switchboard upgrade replaces the enclosure and the protective devices: main switch, circuit breakers, and RCDs across the circuits. Existing circuits get transferred across, tested, and labelled properly, which by itself is worth something in a house where nobody has ever known which breaker does what.</p>
            <p>Expect the power to be off for a chunk of the day. Expect the electrician to find at least one thing behind the old board that nobody knew about, because on boards of this age that is closer to the rule than the exception. A good quote states what is included, what is excluded, and what happens if something turns up once the old board is off the wall. Ours does, and you hear about anything unexpected before the work continues rather than on the invoice.</p>
            <p>The <a href="/switchboard-upgrade-adelaide">switchboard upgrade</a> page covers the process and what drives the price.</p>

            <h3>What It Will Not Fix</h3>
            <p>Being straight about this: a new board does not rewire the house. If the cabling in the walls is old rubber or fabric insulated, or previous work was done poorly, the new board will protect those circuits far better than the old one did, but the cabling itself is unchanged.</p>
            <p>In practice a proper upgrade usually surfaces those issues, because the circuits get tested during the changeover. Better to know.</p>

            <h3>If Any of This Sounds Like Your Place</h3>
            <p>Scorch marks or a burning smell means turn off the main switch and call now. Everything else on this list is worth an assessment rather than an emergency, and the assessment is the cheap part. The expensive version is waiting until the board makes the decision for you.</p>
        `,
        cta: {
            heading: 'Book a Switchboard Upgrade',
            description: 'If any of these warning signs sound familiar, get your switchboard assessed by a licensed Adelaide electrician before it turns into an emergency.',
            linkText: 'Book a Switchboard Upgrade Quote',
            href: '/contact',
        },
    }
];

/**
 * Newest first. The guide posts live in their own modules so this file does not
 * grow past the point where it is painful to edit a single post.
 */
export const blogPosts: BlogPost[] = [
    ...jobReports,
    ...localPosts,
    ...pricingPosts,
    ...upgradePosts,
    ...legacyPosts,
].sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
