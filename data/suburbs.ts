export interface SuburbFaq {
    question: string;
    answer: string;
}

export interface LocalJob {
    title: string;
    body: string;
}

export interface Suburb {
    /** URL path, without leading slash. */
    slug: string;
    name: string;
    postcode: string;
    /** ABS 2021 Census (SAL) population. Used for build priority, not shown on page. */
    population: number;
    council: string;
    /** Short H1 suffix, e.g. "Local, Licensed and Around the Corner". */
    hook: string;
    title: string;
    description: string;
    /** Hero paragraph. */
    intro: string;
    /** Body paragraphs for the "Your Local X Electrician" section. */
    local: string[];
    /** Plain-English summary of the suburb's housing stock and what it means electrically. */
    housing: string;
    /** The jobs that actually come up here, tied to the local building stock. */
    localJobs: LocalJob[];
    /** Streets, centres and reserves used for local relevance signals. */
    landmarks: string[];
    nearby: string[];
    faqs: SuburbFaq[];
}

/**
 * Ordered highest to lowest population (ABS 2021 Census, suburb/locality level).
 * This order also drives the sitemap and the internal-link priority.
 */
export const suburbs: Suburb[] = [
    {
        slug: 'electrician-golden-grove',
        name: 'Golden Grove',
        postcode: '5125',
        population: 10299,
        council: 'City of Tea Tree Gully',
        hook: 'Local, Licensed and Ten Minutes Away',
        title: 'Electrician Golden Grove | Switchboards, EV Chargers, LEDs',
        description: 'Licensed electrician in Golden Grove for switchboard upgrades, EV chargers, downlights and emergency callouts. Based in Wynn Vale. Free quotes.',
        intro:
            'JPD Complete Electrical is based in Wynn Vale, a few minutes down Golden Grove Road. We handle switchboard upgrades, EV charger installs, downlights and feature lighting, oven and cooktop connections, safety switch testing and emergency callouts for Golden Grove homes and businesses.',
        local: [
            'Golden Grove is the biggest suburb we cover, and it is one we work in most weeks. It was master-planned from the mid-1980s and built out through the 1990s and 2000s, so the housing runs from early brick-veneer courtyard homes near Golden Grove Village through to the larger two-storey builds that went up later.',
            'That matters more than it sounds. A Golden Grove home built in 1988 has a switchboard that is now close to forty years old, most likely with a single RCD covering the power points and nothing protecting the lighting circuits. A home built in 2005 down the road usually has RCBOs and a board that is fine, but no spare space in it for an EV charger circuit. Two different jobs, two streets apart.',
            'Being local means we are not padding the quote with travel time from the other side of town. If you need someone out for a dead circuit or a tripping safety switch, we are coming from Wynn Vale, not Adelaide CBD.',
        ],
        housing: 'Master-planned, 1980s through 2000s brick veneer and later two-storey builds',
        localJobs: [
            {
                title: 'Switchboard upgrades on the original 1980s boards',
                body: 'The first wave of Golden Grove homes still have their original boards. Rewireable ceramic fuses or early MCBs, one RCD at best, and no room to add a circuit. We replace the lot with a properly sized board on RCBOs so every circuit is individually protected and individually identifiable when something trips.',
            },
            {
                title: 'EV charger installs on double-garage homes',
                body: 'Golden Grove has the garage space and the driveways for home charging, and we install a lot of wall chargers here. The job is rarely just the charger. It is usually a dedicated circuit, board space, correct RCD protection with DC fault detection, and notifying SA Power Networks where that is required.',
            },
            {
                title: 'Halogen downlight replacements',
                body: 'A lot of the late-1990s and early-2000s homes still run 50W halogen downlights. They are hot, they eat power, and the older ones needed clearance from insulation for a reason. Swapping a house over to LED is a straightforward day of work and the difference on the power bill is immediate.',
            },
            {
                title: 'Alfresco and outdoor lighting',
                body: 'Rear extensions and alfresco areas are common here. That means weatherproof powerpoints, outdoor feature lighting, LED strip under the bench or in the pergola, and fans and heating that need a circuit that can actually carry them.',
            },
        ],
        landmarks: [
            'Golden Grove Village',
            'The Grove Shopping Centre',
            'Golden Way',
            'Adey Road',
            'the Golden Grove tri-school campus',
            'Golden Grove Recreation Centre',
        ],
        nearby: ['Greenwith', 'Wynn Vale', 'Redwood Park', 'Fairview Park', 'Surrey Downs', 'Yatala Vale'],
        faqs: [
            {
                question: 'How quickly can you get to Golden Grove?',
                answer: 'We are based in Wynn Vale, which is a few minutes down Golden Grove Road. For urgent work we can usually be there the same day, and routine jobs like switchboard upgrades or downlight replacements are normally booked within the week.',
            },
            {
                question: 'My Golden Grove home is from the late 1980s. Does the switchboard need upgrading?',
                answer: 'Probably, yes. Boards from that era typically have rewireable fuses or early circuit breakers with, at most, one safety switch covering the power points. Lighting circuits were usually left unprotected. If yours has never been touched, it is worth a look, and we will tell you straight if it can wait.',
            },
            {
                question: 'Can you install an EV charger in Golden Grove?',
                answer: 'Yes. We install wall-mounted home chargers on a dedicated circuit with the correct RCD protection. The main things we check first are whether there is spare space and capacity in your switchboard and how far the run is from the board to the garage, because that drives the cable size and the price.',
            },
            {
                question: 'Do you do emergency electrical work in Golden Grove?',
                answer: 'Yes. Loss of power, a breaker that will not reset, burning smells, sparking outlets or water in a switchboard are all things we will prioritise. Call us on 0435 006 420 and we will tell you honestly whether it needs someone now or whether it can safely wait until morning.',
            },
            {
                question: 'Can you replace my halogen downlights with LEDs?',
                answer: 'Yes, and it is one of the more worthwhile upgrades on an older Golden Grove home. We replace the fittings, not just the globes, so you get proper LED fittings that are safe to be covered by insulation and will not cook the ceiling space.',
            },
            {
                question: 'Do you install ovens and cooktops in Golden Grove?',
                answer: 'Yes. We connect ovens, cooktops and rangehoods, including hardwired installs. If you are moving from gas to induction, tell us early, because induction cooktops usually need a dedicated circuit run from the switchboard rather than the existing oven point.',
            },
        ],
    },
    {
        slug: 'electrician-greenwith',
        name: 'Greenwith',
        postcode: '5125',
        population: 10103,
        council: 'City of Tea Tree Gully',
        hook: 'Local Sparky for the Newer End of the Grove',
        title: 'Electrician Greenwith | EV Chargers, Downlights, Boards',
        description: 'Greenwith electrician for EV charger installs, downlights, LED strip, switchboard upgrades and emergency callouts. Owner-operated. Free quotes.',
        intro:
            'JPD Complete Electrical covers Greenwith from our base in Wynn Vale, a short run up Golden Grove Road. EV chargers, downlights and LED strip lighting, switchboard upgrades, safety switch testing, oven and cooktop connections and emergency callouts.',
        local: [
            'Greenwith is the newer end of the Golden Grove development, built out through the 1990s and 2000s on bigger blocks with bigger houses. Two-storey is common, alfresco areas are common, and so are the electrical loads that come with them.',
            'The work here looks different to the older suburbs down the hill. We are rarely pulling out ceramic fuses in Greenwith. What we get instead is a twenty-five-year-old board that is technically fine but completely full, and a homeowner who wants an EV charger, a pool pump, ducted air conditioning and a heated alfresco all running off it. That is a load calculation and often a board rebuild, not a quick add-on.',
            'The other big one here is lighting. A lot of Greenwith homes were built with halogen downlights everywhere, and the owners are now replacing them with LED, adding feature lighting to the stairwell or the void, and running LED strip through the kitchen and the alfresco.',
        ],
        housing: '1990s and 2000s family homes on larger blocks, plenty of two-storey',
        localJobs: [
            {
                title: 'EV charger installs',
                body: 'Greenwith has more home chargers going in than almost anywhere else we work. Long driveways, double garages and the sort of commute where charging at home actually pays for itself. We size the circuit properly, check what the existing board can carry alongside the aircon, and install the charger with the RCD protection the standard requires.',
            },
            {
                title: 'Feature lighting and LED strip',
                body: 'Two-storey homes with voids and stairwells are made for feature lighting. We install LED strip in coves, under kitchen benches and joinery, in stair nosings and through alfresco pergolas, wired properly with the driver somewhere accessible rather than buried in a ceiling.',
            },
            {
                title: 'Switchboard capacity for a full house',
                body: 'Ducted air conditioning, a pool or spa pump, an EV charger and an induction cooktop is a lot of load for a board that was built for a 1998 house. We check the main switch rating, the submain, and whether you have the space to add what you actually want.',
            },
            {
                title: 'Oven, cooktop and kitchen renovations',
                body: 'Kitchen renovations here almost always mean going induction, adding under-bench LED, moving powerpoints to a new island and running a dedicated circuit for the appliance load. We do the rough-in and the final fit-off, and we work to the cabinetmaker\'s timeline.',
            },
        ],
        landmarks: [
            'Greenwith Road',
            'Cobbler Creek Recreation Park',
            'Golden Grove Road',
            'Kingfisher Drive',
            'Greenwith Primary School',
        ],
        nearby: ['Golden Grove', 'Wynn Vale', 'Gulfview Heights', 'Fairview Park', 'Salisbury Heights', 'Yatala Vale'],
        faqs: [
            {
                question: 'Can my Greenwith switchboard handle an EV charger?',
                answer: 'Often yes, but it depends what else is on it. A 7kW charger is a serious continuous load, and if you already have ducted air conditioning and an induction cooktop, we need to look at the main switch, the submain and the available space before quoting. We check that on site rather than guessing over the phone.',
            },
            {
                question: 'How much does LED strip lighting cost to install?',
                answer: 'It depends entirely on the run length, whether it is going into existing joinery or a new build, and how the driver and switching are handled. A single under-bench run in an existing kitchen is a small job. Coving through a whole living area with dimming is not. We quote it properly after a look.',
            },
            {
                question: 'Do you work with builders and cabinetmakers on Greenwith renovations?',
                answer: 'Yes, regularly. We handle the rough-in before the plaster goes up and come back for the fit-off once the cabinetry is in. Getting us in early is what stops the situation where the powerpoint ends up behind a fixed panel.',
            },
            {
                question: 'My Greenwith home is only about 20 years old. Do I still need safety switch testing?',
                answer: 'Yes. RCDs are mechanical devices and they can fail to trip without any outward sign. The push-button test on the board only proves the button works. A proper test with a calibrated instrument confirms it actually trips within the required time, and that is the part that matters if someone ever gets a shock.',
            },
            {
                question: 'Can you install downlights in a two-storey Greenwith home?',
                answer: 'Yes, including upstairs where there is no accessible roof space above. That is a harder job than a single-storey ceiling and it needs planning around joists and existing wiring, but it is very doable. We will tell you upfront if a particular spot is not practical.',
            },
            {
                question: 'Do you cover Greenwith for emergency callouts?',
                answer: 'Yes. We are ten minutes away in Wynn Vale. Call 0435 006 420 and describe what is happening. If it is a genuine hazard, sparking, burning smells or water in the board, turn the main switch off first and then call.',
            },
        ],
    },
    {
        slug: 'electrician-hope-valley',
        name: 'Hope Valley',
        postcode: '5090',
        population: 8184,
        council: 'City of Tea Tree Gully',
        hook: 'Older Homes, Older Wiring, Honest Advice',
        title: 'Electrician Hope Valley | Switchboards & Safety Switches',
        description: 'Hope Valley electrician for switchboard upgrades, safety switches, rewiring, downlights and emergency callouts. Local to Adelaide\'s north-east.',
        intro:
            'JPD Complete Electrical services Hope Valley for switchboard upgrades, safety switch installs, downlights, oven and cooktop connections, fault finding and emergency callouts. We are based nearby in Wynn Vale and we work across the Tea Tree Gully council area most days.',
        local: [
            'Hope Valley went up largely through the 1960s and 70s, around the reservoir and either side of Grand Junction Road. It is a well-built older suburb, and the electrical work here reflects that.',
            'A 1960s or 70s Hope Valley house that has never been touched will typically have a rewireable ceramic fuse board, no safety switches at all, an unearthed lighting circuit, and only two or three circuits for the whole house. Add a modern kitchen, a couple of split systems and a garage full of tools to that, and you get nuisance tripping at best. We upgrade a lot of these boards.',
            'The other thing we find in this age of housing is the cabling itself. Rubber-insulated cable from that era goes brittle, and the insulation can crumble off when it is disturbed in the roof space. We are honest about it. Sometimes a board upgrade is all you need. Sometimes the board upgrade will expose a cabling problem, and you deserve to know that possibility before we start, not after.',
        ],
        housing: '1960s and 70s brick and stone homes, with newer infill on subdivided blocks',
        localJobs: [
            {
                title: 'Replacing ceramic fuse boards',
                body: 'This is the single most common job we do in Hope Valley. Out comes the old rewireable fuse board, in goes a properly sized switchboard on RCBOs, with every circuit individually protected and labelled. It brings a 1970s house up to a standard where a fault trips one circuit instead of plunging the house into darkness.',
            },
            {
                title: 'Safety switches where there were none',
                body: 'Plenty of homes in this suburb have never had an RCD fitted. If yours has a row of ceramic fuses and nothing else, you have no protection against electric shock at all. That is the gap we close first.',
            },
            {
                title: 'Fault finding on old circuits',
                body: 'Older wiring gives you intermittent faults, lights that flicker, a circuit that trips only when it rains, a powerpoint that works some days. That takes methodical testing rather than guesswork, and it is work we do properly rather than replacing parts until it stops.',
            },
            {
                title: 'Rental compliance for landlords',
                body: 'Hope Valley has a solid share of rental stock, and a lot of it is old enough that the safety switch and smoke alarm arrangements need checking. We test, report and fix, and you get documentation you can actually put on file.',
            },
        ],
        landmarks: [
            'Hope Valley Reservoir Reserve',
            'Grand Junction Road',
            'North East Road',
            'Hope Valley Primary School',
            'Kelly Road',
        ],
        nearby: ['Modbury', 'Highbury', 'Ridgehaven', 'Holden Hill', 'St Agnes', 'Vista'],
        faqs: [
            {
                question: 'My Hope Valley house still has ceramic fuses. Is that dangerous?',
                answer: 'It is not automatically dangerous, but it means you almost certainly have no safety switch protection, and a rewireable fuse does not protect a person from a shock. It also means the board is old enough that the wiring behind it deserves a look. It is the first thing we would recommend addressing in a house of that era.',
            },
            {
                question: 'How much does a switchboard upgrade cost in Hope Valley?',
                answer: 'It depends on the number of circuits, whether the existing enclosure can be reused, the condition of the incoming supply, and what we find behind the board once it is off. We give you a fixed price after looking at it, and if we think something might turn up once we open it, we tell you before we start rather than after.',
            },
            {
                question: 'Does my whole 1970s house need rewiring?',
                answer: 'Usually not. Most of the time a switchboard upgrade plus a few repairs is enough. Full rewires are the exception, not the rule, and we will only suggest one if the testing actually supports it. If someone quotes a full rewire without testing first, get a second opinion.',
            },
            {
                question: 'Do you install safety switches in older Hope Valley homes?',
                answer: 'Yes, and it is normally done as part of a switchboard upgrade rather than as a bolt-on. Fitting RCBOs across the board gives you shock protection on every circuit and overload protection at the same time, which is a better outcome than adding one RCD to an old fuse board.',
            },
            {
                question: 'Can you do smoke alarms at the same time?',
                answer: 'Yes. If we are already in the roof space for a board upgrade it is the sensible time to sort out interconnected mains-powered alarms. We will check what you currently have and what your obligations are, and give you a straight answer rather than an upsell.',
            },
            {
                question: 'Do you do emergency work in Hope Valley?',
                answer: 'Yes. Call 0435 006 420. Total loss of power, a breaker that will not reset, burning smells from the board or a sparking outlet all get prioritised. We are a few minutes away in Wynn Vale.',
            },
        ],
    },
    {
        slug: 'electrician-wynn-vale',
        name: 'Wynn Vale',
        postcode: '5127',
        population: 7865,
        council: 'City of Tea Tree Gully',
        hook: 'This Is Where We Are Based',
        title: 'Electrician Wynn Vale | Local, Licensed, Same Suburb | JPD',
        description: 'JPD Complete Electrical is based in Wynn Vale. Switchboards, EV chargers, downlights, safety switch testing and emergency callouts. Free quotes.',
        intro:
            'JPD Complete Electrical is based right here in Wynn Vale. Switchboard upgrades, EV charger installs, downlights and feature lighting, safety switch testing, oven and cooktop connections and emergency callouts, from an electrician who lives in the same suburb.',
        local: [
            'Wynn Vale is home. Justin lives and works out of here, which means when you call for a Wynn Vale job, you are not waiting on someone to fight their way across town.',
            'The suburb went up through the 1980s and into the early 90s, mostly single-storey brick veneer on regular blocks, with the newer pockets running up towards Golden Grove. Practically every original home in Wynn Vale now has a switchboard in the thirty-five to forty year bracket. Some have one safety switch covering the power circuits. Plenty have none.',
            'That is the bread and butter here. Board upgrades, adding proper RCD protection, replacing tired halogen downlights with LED, adding powerpoints where 1988 thought two would be plenty, and putting in EV chargers for people who have just bought their first electric car.',
        ],
        housing: '1980s and early 90s single-storey brick veneer, with newer pockets toward Golden Grove',
        localJobs: [
            {
                title: 'Switchboard upgrades on original 1980s boards',
                body: 'The original Wynn Vale boards are at the end of their sensible life. Early MCBs or fuses, one RCD if you are lucky, and no spare ways. We replace them with a correctly sized board on RCBOs so each circuit is protected and labelled on its own.',
            },
            {
                title: 'Adding powerpoints where the house is short',
                body: 'A 1988 bedroom got two powerpoints and nobody imagined a home office. We add outlets, including double and quad points, USB outlets and outdoor weatherproof points, and we run them properly from the board rather than daisy-chaining off whatever is nearest.',
            },
            {
                title: 'Halogen to LED downlight conversions',
                body: 'Most Wynn Vale homes that had downlights put in during the 1990s or 2000s are still running halogens. Replacing the fittings with proper LED downlights cuts the running cost, removes the heat, and lets the insulation sit where it should.',
            },
            {
                title: 'EV chargers and garage circuits',
                body: 'Wynn Vale garages are being used for more than the car. Chargers, workshop tools, freezers and second fridges all add up. We run dedicated circuits to the garage and install home EV chargers with the protection the standard requires.',
            },
        ],
        landmarks: [
            'Wynn Vale Dam',
            'The Grove Shopping Centre',
            'Wynn Vale Drive',
            'Golden Grove Road',
            'Kingfisher Drive',
            'Wynn Vale Primary School',
        ],
        nearby: ['Golden Grove', 'Greenwith', 'Redwood Park', 'Gulfview Heights', 'Modbury', 'Surrey Downs'],
        faqs: [
            {
                question: 'Are you actually based in Wynn Vale?',
                answer: 'Yes. JPD Complete Electrical is owner-operated by Justin, who lives in Wynn Vale. It is not a call centre with a local phone number. If you are in Wynn Vale, you are getting an electrician from your own suburb.',
            },
            {
                question: 'How fast can you get to a Wynn Vale job?',
                answer: 'For genuine emergencies in Wynn Vale, usually within the hour if we are not already on the tools somewhere. For routine work we are normally booking within the week. Call 0435 006 420 and we will give you a real answer rather than a maybe.',
            },
            {
                question: 'My Wynn Vale house is from about 1990. What needs looking at?',
                answer: 'The switchboard, first. Boards of that vintage usually have one RCD covering power points and nothing on the lighting circuits, and they are now old enough that the components are past their service life. After that, halogen downlights if you have them, and the smoke alarms if they have never been replaced.',
            },
            {
                question: 'Can you install an EV charger in Wynn Vale?',
                answer: 'Yes. We install home wall chargers on a dedicated circuit with the correct RCD protection and notify SA Power Networks where that is required. The two things that drive the price are the distance from the switchboard to the garage and whether the board has room for the circuit.',
            },
            {
                question: 'Do you do small jobs, or only big ones?',
                answer: 'Small jobs are fine. A single powerpoint, a dead light, a fan that needs replacing. Being based in the suburb means a small Wynn Vale job is not a waste of half a day in the van, so we are happy to take them on.',
            },
            {
                question: 'Do you install ovens, cooktops and rangehoods?',
                answer: 'Yes. Including hardwired ovens and induction cooktops. Induction usually needs its own circuit run from the board rather than plugging into the existing oven point, so it is worth telling us what you have bought before delivery day.',
            },
        ],
    },
    {
        slug: 'electrician-highbury',
        name: 'Highbury',
        postcode: '5089',
        population: 6956,
        council: 'City of Tea Tree Gully',
        hook: 'Foothills Homes, Mixed Vintages, Straight Answers',
        title: 'Electrician Highbury | Switchboards, Downlights, EV Chargers',
        description: 'Highbury electrician for switchboard upgrades, safety switches, downlights, EV chargers and shed submains. Local to the foothills. Free quotes.',
        intro:
            'JPD Complete Electrical services Highbury for switchboard upgrades, safety switch testing, downlights and feature lighting, EV charger installs, oven and cooktop connections, fault finding and emergency callouts.',
        local: [
            'Highbury sits where the suburbs meet the foothills, backing onto the River Torrens Linear Park and the old aqueduct reserve. It is a mixed suburb electrically, and that keeps the work interesting.',
            'You get solid 1960s and 70s homes with the wiring to match, sitting alongside infill from the last twenty years and the occasional older place on a big block. Two houses on the same street can need completely different work. One needs the ceramic fuse board pulled out and replaced. The other has a perfectly good board and just wants a charger and some downlights.',
            'Sloping blocks are a factor here too. Split-level homes, undercroft garages and detached sheds all mean submains, and a submain that was run in 1974 to feed a shed light is not going to carry a workshop. We check what is actually in the ground before anyone commits to a plan.',
        ],
        housing: 'A genuine mix, 1960s and 70s originals alongside more recent infill, often on sloping blocks',
        localJobs: [
            {
                title: 'Switchboard upgrades on the older stock',
                body: 'The 1960s and 70s Highbury homes are the ones that need this most. Rewireable fuses, no RCDs, and a circuit count that made sense before every room had a computer in it. We replace the board and get proper protection on every circuit.',
            },
            {
                title: 'Shed and garage submains',
                body: 'Sloping blocks in Highbury mean detached sheds, undercroft garages and workshops. If yours is fed by an undersized cable run decades ago, you will see lights dim when the compressor starts. We size and run a proper submain with its own distribution board and protection.',
            },
            {
                title: 'Downlights and feature lighting',
                body: 'Renovated foothills homes with raked ceilings and outdoor entertaining areas suit good lighting design. We install LED downlights, feature and step lighting, LED strip and outdoor lighting that will actually survive a Highbury winter.',
            },
            {
                title: 'EV chargers on mixed-era boards',
                body: 'Adding a charger to a 1970s board is a different job to adding one to a 2015 board. We look at capacity and protection first and give you a straight answer about what the install actually involves.',
            },
        ],
        landmarks: [
            'River Torrens Linear Park',
            'Highbury Aqueduct Reserve',
            'Lower North East Road',
            'Valley Road',
            'Hancock Road',
            'Highbury Primary School',
        ],
        nearby: ['Hope Valley', 'Vista', 'Tea Tree Gully', 'Modbury', 'Dernancourt', 'Athelstone'],
        faqs: [
            {
                question: 'Do you service the whole of Highbury, including the hills side?',
                answer: 'Yes, right up to the Linear Park and the aqueduct reserve. We are based in Wynn Vale, so Highbury is a short run down Hancock Road for us.',
            },
            {
                question: 'My Highbury shed has no power, or the power is unreliable. Can you fix it?',
                answer: 'Yes, and it is a job we see a lot here. Usually the existing submain is too small, has degraded, or was never protected properly. We test what is there, then either repair it or run a correctly sized new submain with its own board and RCD protection in the shed.',
            },
            {
                question: 'How do I know if my Highbury switchboard needs upgrading?',
                answer: 'Rewireable ceramic fuses, no safety switches, a board that trips regularly, scorch marks, or a board so full there is nowhere to add a circuit are all clear signs. If you are not sure, send us a photo of the open board and we will tell you honestly whether it is urgent.',
            },
            {
                question: 'Can you install downlights in a raked or cathedral ceiling?',
                answer: 'Usually yes, but it needs a look first. Raked ceilings often have limited or no accessible space above, so the fitting depth and the cable route matter. We will tell you upfront if a spot is not practical rather than promising it and then finding out.',
            },
            {
                question: 'Do you do emergency callouts in Highbury?',
                answer: 'Yes. Call 0435 006 420. If there is sparking, a burning smell or water in the switchboard, turn the main switch off first and then call us.',
            },
            {
                question: 'Do you install outdoor and garden lighting?',
                answer: 'Yes. Weatherproof outdoor lighting, garden and path lighting, step lights, and lighting for alfresco and pergola areas, all installed to survive outdoors properly rather than fail in the first wet winter.',
            },
        ],
    },
    {
        slug: 'electrician-modbury',
        name: 'Modbury',
        postcode: '5092',
        population: 5593,
        council: 'City of Tea Tree Gully',
        hook: 'Homes, Rentals and Small Business',
        title: 'Electrician Modbury | Switchboards, Emergency, Test & Tag',
        description: 'Modbury electrician for switchboard upgrades, safety switch testing, emergency callouts, rental compliance and small commercial work. Free quotes.',
        intro:
            'JPD Complete Electrical services Modbury for switchboard upgrades, safety switch testing, emergency callouts, downlights and lighting, oven and cooktop connections, and electrical work for the shops and small businesses along North East Road.',
        local: [
            'Modbury is the commercial heart of this part of Adelaide. Westfield Tea Tree Plaza, Modbury Hospital, and a long strip of shops, offices and consulting rooms along North East Road, wrapped around a residential core that mostly went up in the 1960s and 70s.',
            'That gives us two very different jobs in the same suburb. On the residential side it is old switchboards, rental compliance and the usual repairs on ageing wiring. On the commercial side it is shop and office fitouts, lighting upgrades, distribution boards, exit and emergency lighting, and test and tag for businesses that need the paperwork to be right.',
            'Modbury also has more units, townhouses and infill development than the suburbs around it. Unit switchboards, shared supplies and metering arrangements come with their own quirks, and they are worth getting right the first time.',
        ],
        housing: '1960s and 70s homes with substantial unit and townhouse infill, plus commercial along North East Road',
        localJobs: [
            {
                title: 'Switchboard upgrades on 1960s and 70s homes',
                body: 'Rewireable fuses, no safety switches and too few circuits is the standard starting point on the original Modbury housing. We replace the board with a properly sized one on RCBOs and label it so the next person can actually understand it.',
            },
            {
                title: 'Rental and property manager compliance',
                body: 'Modbury has a lot of tenanted property. We handle safety switch testing, smoke alarm checks and replacement, and the repairs that come out of a condition report, with documentation you can file. Fast turnaround matters here and we work to it.',
            },
            {
                title: 'Shop, office and consulting room fitouts',
                body: 'Along North East Road and around the Plaza we do fitout work, lighting upgrades to LED, additional power for equipment, distribution boards and exit and emergency lighting. We also do medical and allied-health rooms, which have their own requirements.',
            },
            {
                title: 'Test and tag for local businesses',
                body: 'Portable appliance testing on a schedule, with a register you can actually produce when someone asks for it. We do this for offices, clinics, workshops and retail across Modbury and the surrounding suburbs.',
            },
        ],
        landmarks: [
            'Westfield Tea Tree Plaza',
            'Modbury Hospital',
            'North East Road',
            'Smart Road',
            'Reservoir Road',
            'Modbury Primary School',
        ],
        nearby: ['Hope Valley', 'Ridgehaven', 'Holden Hill', 'Modbury North', 'Modbury Heights', 'Para Vista'],
        faqs: [
            {
                question: 'Do you do commercial electrical work in Modbury?',
                answer: 'Yes. Shop and office fitouts, LED lighting upgrades, additional power for equipment, distribution boards, exit and emergency lighting, and test and tag. We also work in medical and allied-health consulting rooms, which have specific requirements.',
            },
            {
                question: 'Can you work with property managers on Modbury rentals?',
                answer: 'Yes, and we do a lot of it. Safety switch testing, smoke alarm compliance, repairs off condition reports, and clear documentation afterwards. We turn up when we say we will, which is usually the thing property managers actually care about.',
            },
            {
                question: 'Do you do test and tag in Modbury?',
                answer: 'Yes. We test and tag portable appliances on whatever schedule your workplace requires and provide a register. It is a service we run across Adelaide\'s north-east regularly, so we can usually fit a site in without a long wait.',
            },
            {
                question: 'My Modbury unit\'s power keeps tripping. What is going on?',
                answer: 'Usually one of three things. A faulty appliance leaking to earth, an overloaded circuit, or a genuine wiring fault. In units it is also sometimes a shared or wrongly labelled circuit. It needs proper testing to isolate rather than guesswork, and that is what we do.',
            },
            {
                question: 'Do you offer emergency electrical work in Modbury?',
                answer: 'Yes. Call 0435 006 420. Loss of power, a breaker that will not reset, sparking, burning smells or water in the switchboard all get prioritised, for homes and for businesses.',
            },
            {
                question: 'Can you upgrade the lighting in my Modbury shop to LED?',
                answer: 'Yes, and it usually pays for itself faster than people expect in a retail or office space that runs lights ten hours a day. We can also handle it after hours so we are not working around your customers.',
            },
        ],
    },
    {
        slug: 'electrician-redwood-park',
        name: 'Redwood Park',
        postcode: '5097',
        population: 5367,
        council: 'City of Tea Tree Gully',
        hook: 'Straightforward Work on 1970s and 80s Homes',
        title: 'Electrician Redwood Park | Switchboards & Safety Switches',
        description: 'Redwood Park electrician for switchboard upgrades, safety switches, downlights, ceiling fans and emergency callouts. Based nearby in Wynn Vale.',
        intro:
            'JPD Complete Electrical services Redwood Park for switchboard upgrades, safety switch installs and testing, downlights, extra powerpoints, oven and cooktop connections, fault finding and emergency callouts.',
        local: [
            'Redwood Park was built out through the 1970s and into the 80s, and it has stayed a straightforward family suburb. Single-storey brick veneer on decent blocks, close to The Grove and the schools.',
            'Electrically, this is a suburb full of homes that are due. A house built in 1978 that has never had the board touched will have rewireable fuses and no safety switches. A house built in 1985 will usually have early circuit breakers and, if you are lucky, one RCD on the power circuits. Neither arrangement gives you what the current standard would call adequate protection.',
            'The good news is these are usually clean, uncomplicated jobs. Accessible switchboards, accessible roof space, sensible cable runs. A board upgrade in Redwood Park is normally a day, not a saga.',
        ],
        housing: '1970s and 80s single-storey brick veneer on regular family blocks',
        localJobs: [
            {
                title: 'Switchboard and safety switch upgrades',
                body: 'The core job here. Replacing an original fuse or early-MCB board with a properly sized board on RCBOs so every circuit has both overload and shock protection, and so a fault takes out one circuit rather than the whole house.',
            },
            {
                title: 'Extra powerpoints and circuits',
                body: 'A 1970s house was wired for a very different life. We add powerpoints where you actually need them, run dedicated circuits for high-draw appliances, and put weatherproof outlets outside for the shed, the pool pump or the caravan.',
            },
            {
                title: 'LED downlights and lighting upgrades',
                body: 'Replacing tired fluorescent battens and halogen downlights with LED transforms how these houses feel, and cuts the lighting bill at the same time. We replace fittings rather than just globes so the result is safe and lasts.',
            },
            {
                title: 'Ceiling fans and cooling',
                body: 'Redwood Park houses get hot. We install ceiling fans, including on existing light points, wire in split system power circuits, and add the wall controls so it is not all on a remote that goes missing.',
            },
        ],
        landmarks: [
            'Redwood Park Primary School',
            'The Grove Shopping Centre',
            'Milne Road',
            'Golden Grove Road',
            'Redwood Park Reserve',
        ],
        nearby: ['Ridgehaven', 'Wynn Vale', 'St Agnes', 'Golden Grove', 'Modbury Heights', 'Surrey Downs'],
        faqs: [
            {
                question: 'How long does a switchboard upgrade take in a Redwood Park home?',
                answer: 'Most are a single day. The power is off for a good chunk of it, so we let you know the timing in advance. If the house has more circuits than average or we find something behind the board, we tell you before it becomes a surprise on the invoice.',
            },
            {
                question: 'My Redwood Park house has no safety switch. Is that legal?',
                answer: 'An older installation that predates the requirement is generally allowed to remain as it was installed, so it is not automatically illegal. But it does mean you have no shock protection, and any significant work on the board will trigger the requirement to bring it up to current standards anyway. It is worth doing on its own merits.',
            },
            {
                question: 'Can you add powerpoints to an existing room?',
                answer: 'Yes. In a single-storey Redwood Park home with accessible roof space this is usually straightforward. We run it back to the board on an appropriate circuit rather than spurring off the nearest existing outlet, which is the shortcut that causes problems later.',
            },
            {
                question: 'Do you install ceiling fans in Redwood Park?',
                answer: 'Yes. We can install onto an existing light point or run a new point where you want it, and fit a wall control rather than leaving you dependent on a remote. If the ceiling needs bracing for the fan, we will tell you.',
            },
            {
                question: 'Do you do emergency electrical callouts in Redwood Park?',
                answer: 'Yes. We are only a few minutes away in Wynn Vale. Call 0435 006 420 for loss of power, breakers that will not reset, sparking or burning smells.',
            },
            {
                question: 'Can you install an oven or cooktop I have bought myself?',
                answer: 'Yes, as long as it meets Australian safety standards. We will connect a customer-supplied appliance without any fuss. If you are switching to induction, mention it when you book, because it usually needs its own circuit.',
            },
        ],
    },
    {
        slug: 'electrician-ridgehaven',
        name: 'Ridgehaven',
        postcode: '5097',
        population: 4304,
        council: 'City of Tea Tree Gully',
        hook: 'Homes, Rentals and the Industrial Pocket',
        title: 'Electrician Ridgehaven | Switchboards, Rentals, Commercial',
        description: 'Ridgehaven electrician for switchboard upgrades, rental compliance, emergency callouts and small commercial and industrial work. Free quotes.',
        intro:
            'JPD Complete Electrical services Ridgehaven for switchboard upgrades, safety switch testing, rental compliance work, downlights and lighting, emergency callouts, and electrical work in the light industrial pocket off Milne Road.',
        local: [
            'Ridgehaven is two things at once. Most of it is 1960s and 70s residential, modest homes on sensible blocks with a decent share of rental property. The other part is the light industrial area off Milne Road and Bridge Road, which is full of workshops, trades and small manufacturing.',
            'On the residential side the work is what you would expect for that era. Old boards, no RCDs, and circuits that were never designed for a house with a second fridge, a workshop in the shed and air conditioning. Rental properties bring safety switch testing and smoke alarm compliance on top of that.',
            'On the industrial side it is a different set of tools. Three-phase supplies, distribution boards, machine circuits, workshop lighting, exit and emergency lighting, and test and tag. We do that work too, and being ten minutes away in Wynn Vale means we can get to a breakdown before it costs you a full day of production.',
        ],
        housing: '1960s and 70s homes with a strong rental share, plus a light industrial precinct',
        localJobs: [
            {
                title: 'Switchboard upgrades and safety switches',
                body: 'The original Ridgehaven boards are well past their intended life. We replace them with correctly sized boards on RCBOs, giving every circuit its own protection and finally putting shock protection on the lighting.',
            },
            {
                title: 'Landlord and property manager compliance',
                body: 'Safety switch testing, smoke alarm compliance, and repairs off condition reports, with proper documentation. We work to property manager timelines because we know a slow trade holds up a whole tenancy.',
            },
            {
                title: 'Three-phase and workshop work',
                body: 'In the industrial pocket we handle three-phase distribution boards, machine and welder circuits, compressor supplies, high-bay LED lighting upgrades, and exit and emergency lighting. Breakdown work included.',
            },
            {
                title: 'Test and tag for workshops and offices',
                body: 'Portable appliance testing on a set schedule with a register you can produce on request. Straightforward for a workshop where leads and tools take a beating and fail regularly.',
            },
        ],
        landmarks: [
            'Milne Road',
            'Bridge Road',
            'the Ridgehaven light industrial area',
            'Ridgehaven Primary School',
            'The Grove Shopping Centre',
        ],
        nearby: ['St Agnes', 'Redwood Park', 'Modbury', 'Hope Valley', 'Banksia Park', 'Wynn Vale'],
        faqs: [
            {
                question: 'Do you do three-phase work in the Ridgehaven industrial area?',
                answer: 'Yes. Three-phase distribution boards, machine and welder circuits, compressor and plant supplies, high-bay LED lighting and emergency lighting. We also do breakdown work, and being local means we can usually get there fast.',
            },
            {
                question: 'I manage rentals in Ridgehaven. What do you cover?',
                answer: 'Safety switch testing with a proper report, smoke alarm compliance checks and replacements, and any repairs coming out of a condition report. You get documentation for the file and we work to your timeline rather than ours.',
            },
            {
                question: 'How do I know if my Ridgehaven switchboard is unsafe?',
                answer: 'Rewireable ceramic fuses, no safety switches, regular tripping, scorching or heat marks, a burning smell, or a board with no spare space are all reasons to have it looked at. Send us a photo of the open board and we will give you an honest read on how urgent it is.',
            },
            {
                question: 'Can you upgrade my workshop lighting to LED?',
                answer: 'Yes. Swapping old high-bay or fluorescent fittings for LED usually pays back quickly in a workshop that runs long hours, and the light quality difference on a bench is significant. We can do it after hours if the shutdown is a problem.',
            },
            {
                question: 'Do you do emergency callouts in Ridgehaven?',
                answer: 'Yes, for homes and businesses. Call 0435 006 420. We prioritise loss of power, breakers that will not reset, sparking, burning smells and anything that has water in it.',
            },
            {
                question: 'Do you install safety switches on their own, without a full board upgrade?',
                answer: 'Sometimes it is possible, but on an old fuse board it is often not the better option. Fitting RCBOs as part of a board upgrade gives you protection on every circuit rather than one shared safety switch that takes out half the house whenever anything trips. We will explain both options and what each actually costs.',
            },
        ],
    },
    {
        slug: 'electrician-st-agnes',
        name: 'St Agnes',
        postcode: '5097',
        population: 4233,
        council: 'City of Tea Tree Gully',
        hook: 'Local Sparky for a 1970s Suburb',
        title: 'Electrician St Agnes | Switchboards, Downlights, Repairs',
        description: 'St Agnes electrician for switchboard upgrades, safety switches, downlights, ceiling fans, shed power and emergency callouts. Free quotes.',
        intro:
            'JPD Complete Electrical services St Agnes for switchboard upgrades, safety switch installs and testing, downlights and lighting, ceiling fans, oven and cooktop connections, fault finding and emergency callouts.',
        local: [
            'St Agnes went up mainly through the 1970s, around The Village shopping centre and either side of Kelly Road. It is a quiet, established suburb where a lot of the original owners are still in the same houses.',
            'That means a lot of original switchboards. Rewireable fuses or the earliest circuit breakers, no RCDs, and a circuit layout designed before anyone had a microwave, a dishwasher, a second fridge and four devices charging in the kitchen. Nuisance tripping in a St Agnes home is very often just an overloaded 1970s circuit doing exactly what it was designed to do.',
            'Sloping blocks are common here too, which brings undercroft garages, sheds and the submains that feed them. If your shed lights dim when you start a tool, the submain is the first thing we look at.',
        ],
        housing: '1970s brick veneer, plenty of original owners, a fair few sloping blocks',
        localJobs: [
            {
                title: 'Switchboard upgrades',
                body: 'Replacing the original 1970s board with a modern one on RCBOs. It gives you shock protection on every circuit, ends the situation where one fault kills the whole house, and gives you the spare capacity to add anything later.',
            },
            {
                title: 'Sorting out nuisance tripping',
                body: 'Usually it is either an overloaded original circuit, a faulty appliance leaking to earth, or moisture somewhere it should not be. We test to find which, rather than replacing parts and hoping. Once we know, the fix is usually simple.',
            },
            {
                title: 'Downlights, ceiling fans and cooling',
                body: 'LED downlights instead of tired old fittings, ceiling fans in the bedrooms and living areas, and dedicated circuits for split systems. Standard work on a house of this age and it makes a real difference to how it lives.',
            },
            {
                title: 'Shed and garage power',
                body: 'Undercroft garages and rear sheds on St Agnes blocks are often fed by a cable that was only ever meant to run a light and a single outlet. We size and install a proper submain with its own protection so the shed works like part of the house.',
            },
        ],
        landmarks: [
            'The Village St Agnes',
            'Kelly Road',
            'Grand Junction Road',
            'Range Road',
            'St Agnes Primary School',
        ],
        nearby: ['Ridgehaven', 'Banksia Park', 'Redwood Park', 'Hope Valley', 'Modbury', 'Tea Tree Gully'],
        faqs: [
            {
                question: 'Why does my St Agnes switchboard keep tripping?',
                answer: 'In a 1970s house the most common cause is simply too much load on a circuit that was designed for a much lighter one. The other two common causes are an appliance leaking current to earth and moisture in an outdoor circuit. We test to identify which it actually is instead of guessing.',
            },
            {
                question: 'Is a switchboard upgrade worth it on an older St Agnes home?',
                answer: 'If the board still has rewireable fuses or no safety switches, yes. It is the single biggest safety improvement available on a house of that era, and it also gives you the capacity to add air conditioning, a charger or a renovated kitchen later without redoing everything.',
            },
            {
                question: 'Can you get power to my shed or undercroft garage?',
                answer: 'Yes. We work out what is already there, size a submain for what you actually intend to run, and install it with its own board and protection at the shed end. That stops the dimming lights and the tripping you get from an undersized old run.',
            },
            {
                question: 'Do you replace old light fittings with LED downlights?',
                answer: 'Yes. We replace the whole fitting rather than just fitting an LED globe into an old halogen can, which is the version that actually saves you money and removes the heat problem in the ceiling.',
            },
            {
                question: 'How quickly can you get to St Agnes?',
                answer: 'We are based in Wynn Vale, a few minutes away. Urgent work is usually same-day and routine bookings are normally within the week. Call 0435 006 420.',
            },
            {
                question: 'Do you install ceiling fans in St Agnes homes?',
                answer: 'Yes, either onto an existing light point or on a new point where you want it, with a wall control fitted. We check the ceiling can carry the fan before installing rather than after.',
            },
        ],
    },
    {
        slug: 'electrician-fairview-park',
        name: 'Fairview Park',
        postcode: '5126',
        population: 3792,
        council: 'City of Tea Tree Gully',
        hook: 'Foothills Suburb, Local Electrician',
        title: 'Electrician Fairview Park | Switchboards, Lighting, EV',
        description: 'Fairview Park electrician for switchboard upgrades, outdoor and step lighting, EV chargers and renovation wiring. Local, free quotes.',
        intro:
            'JPD Complete Electrical services Fairview Park for switchboard upgrades, safety switch testing, downlights and outdoor lighting, EV charger installs, oven and cooktop connections, fault finding and emergency callouts.',
        local: [
            'Fairview Park sits up against the foothills at the top of Golden Grove Road, backing onto reserve land. It went up through the 1970s and into the 80s, and a lot of it is built into the slope.',
            'That slope shapes the electrical work. Split-level homes, undercroft garages, retaining walls and terraced gardens all mean cable runs that are longer and less obvious than they look, and outdoor lighting that has to survive genuinely wet winters up here.',
            'The housing stock itself is at the age where boards are due. Original fuse boards or early breakers, usually no safety switch on the lighting, and not much spare space. It is also a suburb where people stay a long time and renovate rather than move, so we do a good amount of kitchen, bathroom and extension work alongside the straight upgrades.',
        ],
        housing: '1970s and 80s homes, often split-level or built into the slope, backing onto reserve',
        localJobs: [
            {
                title: 'Switchboard upgrades on split-level homes',
                body: 'Original boards from this era need replacing, and split-level layouts often mean the board is somewhere awkward. We replace it with a correctly sized board on RCBOs and relocate it where that makes sense and is practical.',
            },
            {
                title: 'Outdoor, garden and step lighting',
                body: 'Terraced gardens, retaining walls and steep driveways in Fairview Park need lighting that is both safe and durable. We install step lights, garden and path lighting, and weatherproof outdoor power with proper IP-rated fittings, not indoor gear used outside.',
            },
            {
                title: 'Renovation wiring',
                body: 'Kitchens, bathrooms and extensions. We handle rough-in and fit-off, coordinate with the builder or cabinetmaker, and make sure the new work is on circuits that can carry it rather than hanging off whatever was nearest.',
            },
            {
                title: 'EV chargers and garage circuits',
                body: 'Undercroft and detached garages mean the charger is often a long way from the board. That drives the cable size and the price, so we measure it rather than quoting blind.',
            },
        ],
        landmarks: [
            'Illyarrie Reserve',
            'Golden Grove Road',
            'Hancock Road',
            'Range Road',
            'Fairview Park Primary School',
            'Anstey Hill Recreation Park',
        ],
        nearby: ['Banksia Park', 'Golden Grove', 'Tea Tree Gully', 'Surrey Downs', 'Vista', 'Yatala Vale'],
        faqs: [
            {
                question: 'Can you install outdoor lighting on a sloping Fairview Park block?',
                answer: 'Yes, and it is worth doing properly here. Steps, driveways and retaining walls are where people actually trip. We use IP-rated fittings and outdoor-suitable cable so it survives a foothills winter instead of failing in the first wet month.',
            },
            {
                question: 'My Fairview Park switchboard is in an awkward spot. Can it be moved?',
                answer: 'Often yes. Relocating a board is more work than replacing it in place, because the incoming supply and every circuit has to be extended or rerouted, but it is very doable and sometimes the right call. We will price both options so you can decide.',
            },
            {
                question: 'Do you do renovation electrical work in Fairview Park?',
                answer: 'Yes. Kitchens, bathrooms, extensions and outdoor areas. We do the rough-in before the plaster and the fit-off after the fixtures, and we coordinate with your builder so we are not the trade holding up the job.',
            },
            {
                question: 'How much does an EV charger cost to install here?',
                answer: 'The charger itself is a fixed cost, but the install varies mainly with the cable run from the switchboard to where the car parks and whether the board has room for the circuit. On a Fairview Park block with a detached or undercroft garage that run can be long, so we measure before quoting.',
            },
            {
                question: 'Do you cover Fairview Park for emergency work?',
                answer: 'Yes. Call 0435 006 420. We are based in Wynn Vale, which is a short run down Golden Grove Road.',
            },
            {
                question: 'Do you test safety switches?',
                answer: 'Yes, with a calibrated test instrument rather than just pushing the test button. The button confirms the mechanism moves. A proper test confirms it trips within the time the standard requires, which is the part that actually protects someone.',
            },
        ],
    },
    {
        slug: 'electrician-holden-hill',
        name: 'Holden Hill',
        postcode: '5088',
        population: 3716,
        council: 'City of Tea Tree Gully',
        hook: 'Older Homes, Honest Pricing',
        title: 'Electrician Holden Hill | Switchboards & Safety Switches',
        description: 'Holden Hill electrician for switchboard upgrades, safety switches, rental compliance, fault finding and emergency callouts. Free quotes.',
        intro:
            'JPD Complete Electrical services Holden Hill for switchboard upgrades, safety switch installs and testing, rental compliance, downlights and lighting, oven and cooktop connections, fault finding and emergency callouts.',
        local: [
            'Holden Hill is an established 1960s and 70s suburb sitting between North East Road and Grand Junction Road. It has a good mix of long-term owners, tenanted property and newer infill on subdivided blocks.',
            'The original housing here is old enough that the electrical work is fairly predictable. Rewireable fuse boards, no safety switches, unearthed lighting circuits, and far fewer circuits than a modern household needs. Those are the jobs we do most in this suburb, and they are usually clean and straightforward.',
            'The infill is a different story. New builds on subdivided blocks need supply arrangements sorted, and the older house next door sometimes gets disturbed in the process. If you have had building work next door and something has changed with your power, that is worth a look.',
        ],
        housing: '1960s and 70s homes with a good share of rentals, plus newer infill on subdivided blocks',
        localJobs: [
            {
                title: 'Replacing old fuse boards',
                body: 'The core job in Holden Hill. Ceramic rewireable fuses out, a correctly sized board on RCBOs in, with proper labelling. It gives you shock protection on every circuit for the first time and stops one fault taking out the whole house.',
            },
            {
                title: 'Rental compliance and repairs',
                body: 'Safety switch testing, smoke alarm compliance, and repairs off condition reports for landlords and property managers, with documentation for the file and turnaround that does not hold up a tenancy.',
            },
            {
                title: 'Fault finding on ageing circuits',
                body: 'Intermittent faults are common in housing this age. A light that flickers, an outlet that works sometimes, a circuit that only trips when it rains. We test methodically to find the actual cause rather than swapping components.',
            },
            {
                title: 'Adding circuits for modern appliances',
                body: 'Dishwashers, second fridges, air conditioning and induction cooktops all want more than a 1968 circuit layout can give. We add dedicated circuits from the board so you stop tripping and start using the appliances properly.',
            },
        ],
        landmarks: [
            'North East Road',
            'Grand Junction Road',
            'Sudholz Road',
            'Holden Hill Primary School',
            'the Holden Hill police complex',
        ],
        nearby: ['Modbury', 'Hope Valley', 'Valley View', 'Para Vista', 'Gilles Plains', 'Dernancourt'],
        faqs: [
            {
                question: 'My Holden Hill house is from the 1960s. Where do I start?',
                answer: 'The switchboard. If it still has ceramic fuses you have no safety switch protection at all, and that is the single biggest gap. Once the board is sorted, the rest of the house can be assessed and dealt with in priority order rather than all at once.',
            },
            {
                question: 'Do you work with landlords and property managers in Holden Hill?',
                answer: 'Yes. Safety switch testing with reports, smoke alarm compliance, and repairs off condition reports. We show up when we say we will and we give you paperwork you can actually file.',
            },
            {
                question: 'The lights flicker in one part of my house. Is that serious?',
                answer: 'It can be. Flickering usually points to a loose connection somewhere, and a loose connection generates heat. In older wiring that is worth checking sooner rather than later. It is not always urgent, but it should not be ignored.',
            },
            {
                question: 'Can you add a circuit for a new appliance?',
                answer: 'Yes. Dishwashers, induction cooktops, air conditioning and EV chargers generally want their own circuit rather than sharing an existing one. If the board is full, that becomes a conversation about upgrading it, and we will be upfront about that before starting.',
            },
            {
                question: 'Do you do emergency work in Holden Hill?',
                answer: 'Yes. Call 0435 006 420 for loss of power, breakers that will not reset, sparking, burning smells or water in the switchboard. Turn the main switch off first if there is anything visibly wrong.',
            },
            {
                question: 'Are you licensed and insured?',
                answer: 'Yes. Fully licensed, licence number PGE296191, with public liability insurance. Every job gets a Certificate of Compliance for Electrical Work where one is required.',
            },
        ],
    },
    {
        slug: 'electrician-gulfview-heights',
        name: 'Gulfview Heights',
        postcode: '5096',
        population: 3674,
        council: 'City of Salisbury and City of Tea Tree Gully',
        hook: 'Elevated Blocks, Newer Homes, Local Service',
        title: 'Electrician Gulfview Heights | EV Chargers, Downlights',
        description: 'Gulfview Heights electrician for EV charger installs, downlights, outdoor lighting and switchboard upgrades. Owner-operated. Free quotes.',
        intro:
            'JPD Complete Electrical services Gulfview Heights for EV charger installs, downlights and feature lighting, switchboard upgrades, safety switch testing, oven and cooktop connections and emergency callouts.',
        local: [
            'Gulfview Heights sits high on the western side of our patch, with the views that give it the name. The housing is mostly 1980s and 90s, on elevated blocks, and it straddles the boundary between the Salisbury and Tea Tree Gully council areas.',
            'Electrically, this is a suburb of boards that are now around thirty years old. Not ancient, but at the point where components have aged, where there is often a single RCD covering power circuits only, and where there is rarely spare space for anything new.',
            'The work here skews toward upgrades rather than repairs. People adding chargers, replacing halogen downlights, putting in outdoor and feature lighting to make the most of the elevation and the views, and renovating kitchens. All of which lands back at the switchboard eventually.',
        ],
        housing: '1980s and 90s homes on elevated blocks, many with views west across the plains',
        localJobs: [
            {
                title: 'EV charger installs',
                body: 'A common job in Gulfview Heights. We check the board has capacity and space, size the circuit for the charger you have chosen, install with the correct RCD protection including DC fault detection, and notify SA Power Networks where required.',
            },
            {
                title: 'Outdoor and feature lighting for the view',
                body: 'Elevated blocks and decks are worth lighting properly. We install outdoor feature lighting, step and path lighting, LED strip under handrails and through pergolas, and weatherproof power for the entertaining area.',
            },
            {
                title: 'Switchboard upgrades on 1990s boards',
                body: 'Thirty-year-old boards with one shared RCD and no spare ways. We replace them with correctly sized boards on RCBOs so every circuit is protected individually and you have room to add what you want next.',
            },
            {
                title: 'Halogen downlight replacement',
                body: 'A lot of the 1990s homes here are still running halogen downlights. Swapping the fittings for LED removes the heat problem in the ceiling, lets the insulation sit properly, and cuts the running cost noticeably.',
            },
        ],
        landmarks: [
            'The Grove Shopping Centre',
            'Golden Grove Road',
            'Grand Junction Road',
            'Gulfview Heights Primary School',
            'Cobbler Creek Recreation Park',
        ],
        nearby: ['Greenwith', 'Wynn Vale', 'Salisbury Heights', 'Golden Grove', 'Salisbury East', 'Modbury Heights'],
        faqs: [
            {
                question: 'Do you service Gulfview Heights even though it is partly in the Salisbury council area?',
                answer: 'Yes. Council boundaries do not affect who can do your electrical work. We are based in Wynn Vale, which is a few minutes away, so the whole suburb is well within our normal patch.',
            },
            {
                question: 'Can you install an EV charger on a 1990s Gulfview Heights board?',
                answer: 'Usually, but it needs checking first. Boards of that era are often full and have only a single shared safety switch. Sometimes we can add the circuit as it stands, and sometimes the sensible answer is to upgrade the board at the same time. We tell you which before quoting.',
            },
            {
                question: 'What is involved in replacing halogen downlights with LED?',
                answer: 'We replace the complete fitting rather than putting an LED globe into an old halogen can. That gives you a fitting rated to be covered by insulation, removes the heat, and typically cuts each light from around 50 watts to under 10. On a house with thirty downlights that is a real difference.',
            },
            {
                question: 'Can you do outdoor lighting for a deck or entertaining area?',
                answer: 'Yes. Weatherproof powerpoints, step and path lighting, LED strip under handrails and in pergolas, and lighting for the view. All using IP-rated fittings and outdoor-suitable cable so it lasts.',
            },
            {
                question: 'Do you offer emergency callouts in Gulfview Heights?',
                answer: 'Yes. Call 0435 006 420. We prioritise loss of power, breakers that will not reset, sparking, burning smells and anything involving water in the switchboard.',
            },
            {
                question: 'Do you provide a Certificate of Compliance?',
                answer: 'Yes, on every job where one is required. It is your record that the work was done by a licensed electrician and tested. Keep it, because it matters when you sell or when an insurer asks.',
            },
        ],
    },
    {
        slug: 'electrician-tea-tree-gully',
        name: 'Tea Tree Gully',
        postcode: '5091',
        population: 3499,
        council: 'City of Tea Tree Gully',
        hook: 'Old Village, Old Wiring, Careful Work',
        title: 'Electrician Tea Tree Gully | Older Homes, Switchboards',
        description: 'Tea Tree Gully electrician for switchboard upgrades, older and heritage home wiring, shed submains and safety switches. Free quotes.',
        intro:
            'JPD Complete Electrical services Tea Tree Gully for switchboard upgrades, wiring work on older and heritage homes, shed and submain installs, downlights, safety switch testing and emergency callouts.',
        local: [
            'Tea Tree Gully is the original village that gave the whole council area its name, and it is easily the most varied suburb we work in. Stone cottages from the 1850s through to the turn of the century sit alongside 1970s and 80s brick veneer and larger semi-rural blocks running up towards Anstey Hill.',
            'The old stone places take a different approach. Solid walls with no cavity mean there is nowhere to hide a cable, so it is surface conduit run neatly, or channelling, or coming down from above. Ceilings are often lath and plaster and will not forgive a rough job. Getting an outlet into the right place in a 140-year-old cottage takes planning, not brute force.',
            'The bigger blocks bring their own work. Sheds, workshops, water pumps, gates and outbuildings all need submains, and a lot of what is out there was run decades ago and is undersized for what it is now being asked to do.',
        ],
        housing: 'Genuinely mixed, heritage stone cottages through to 1970s and 80s homes and larger semi-rural blocks',
        localJobs: [
            {
                title: 'Wiring work in older and heritage homes',
                body: 'Solid stone walls, lath and plaster ceilings, and no cavity to run through. We do this carefully, with surface conduit run properly where that is the sensible answer, and we discuss the approach with you before drilling anything.',
            },
            {
                title: 'Switchboard upgrades on very old installations',
                body: 'Some of the older Tea Tree Gully properties still have installations that predate almost everything. We replace the board, test what is behind it, and give you an honest picture of the wiring rather than quietly moving on.',
            },
            {
                title: 'Shed, workshop and pump submains',
                body: 'Bigger blocks mean outbuildings. We run correctly sized submains to sheds and workshops with their own boards and protection, and wire water pumps, gate motors and outdoor power that has to work reliably at distance.',
            },
            {
                title: 'Safety switch installs where there are none',
                body: 'Plenty of the older properties here have never had an RCD fitted. On a rural-feel block with sheds and outdoor power, that gap matters more than it does in a standard suburban home. It is the first thing we fix.',
            },
        ],
        landmarks: [
            'the Old Tea Tree Gully village',
            'Anstey Hill Recreation Park',
            'North East Road',
            'Perseverance Road',
            'Hancock Road',
            'the Tea Tree Gully Hotel',
        ],
        nearby: ['Vista', 'Banksia Park', 'Fairview Park', 'St Agnes', 'Highbury', 'Yatala Vale'],
        faqs: [
            {
                question: 'Can you wire an old stone cottage without wrecking the walls?',
                answer: 'Yes, but it takes planning and it will not always be invisible. Solid stone has no cavity, so the honest options are neat surface conduit, careful channelling, or coming down from the ceiling space. We will show you the options and what each looks like before we start rather than deciding for you.',
            },
            {
                question: 'My Tea Tree Gully property has a shed with unreliable power. Can you fix it?',
                answer: 'Yes, and it is one of the most common jobs out here. Usually the existing submain is undersized or has degraded over the years. We test it, work out what you actually want to run in the shed, and install a properly sized submain with its own board and protection.',
            },
            {
                question: 'Do older Tea Tree Gully homes need a full rewire?',
                answer: 'Sometimes, but far less often than people expect. Most of the time the board is the urgent part and the wiring can be tested and dealt with in stages. We will not recommend a full rewire unless the testing actually supports it.',
            },
            {
                question: 'Can you wire a water pump or gate motor?',
                answer: 'Yes. Both are common on the larger blocks here. Distance matters for both, so the cable size and the protection have to be worked out properly rather than run in whatever is on the van.',
            },
            {
                question: 'Do you install safety switches in old properties?',
                answer: 'Yes, and it is usually done as part of a board upgrade. On a property with outdoor power, sheds and pumps, RCD protection is more important than on a standard suburban house, not less.',
            },
            {
                question: 'How quickly can you get to Tea Tree Gully?',
                answer: 'We are based in Wynn Vale, a short run away. Urgent work is usually same-day, and routine bookings are normally within the week. Call 0435 006 420.',
            },
        ],
    },
    {
        slug: 'electrician-banksia-park',
        name: 'Banksia Park',
        postcode: '5091',
        population: 3346,
        council: 'City of Tea Tree Gully',
        hook: 'Quiet 1970s Suburb, Local Electrician',
        title: 'Electrician Banksia Park | Switchboards, Downlights, Fans',
        description: 'Banksia Park electrician for switchboard upgrades, shed and backyard power, ceiling fans, downlights and emergency callouts. Free quotes.',
        intro:
            'JPD Complete Electrical services Banksia Park for switchboard upgrades, safety switch installs and testing, downlights, ceiling fans, oven and cooktop connections, fault finding and emergency callouts.',
        local: [
            'Banksia Park is a quiet 1970s suburb tucked between Anstey Hill and Milne Road, built on generous blocks with plenty of established trees. It is the sort of suburb where houses do not turn over often.',
            'That longevity shows in the electrical work. A lot of Banksia Park homes are still on the switchboard they were built with, which means rewireable fuses or early breakers, no safety switch on lighting, and a circuit count that made sense in 1975. Board upgrades are easily the most common job we do here.',
            'The generous blocks bring sheds, workshops and outdoor entertaining areas into play as well. Big backyards mean outdoor power and lighting, and a shed at the back of a Banksia Park block is often further from the house than the original cable was ever sized for.',
        ],
        housing: '1970s brick veneer on generous blocks with established gardens and plenty of sheds',
        localJobs: [
            {
                title: 'Switchboard upgrades on original 1970s boards',
                body: 'The main job in this suburb. Replacing the original board with a correctly sized one on RCBOs, giving every circuit its own overload and shock protection and finally putting RCD protection on the lighting.',
            },
            {
                title: 'Shed and backyard power',
                body: 'Deep blocks mean long cable runs. We size and install proper submains to rear sheds and workshops with their own boards, plus weatherproof outdoor power for the backyard and entertaining area.',
            },
            {
                title: 'Ceiling fans and cooling',
                body: 'A 1970s house without a fan in every bedroom is a hot house in a Adelaide February. We install fans onto existing points or new ones, with wall controls, and run the dedicated circuits split systems need.',
            },
            {
                title: 'Downlights and lighting upgrades',
                body: 'Replacing old battens, halogen downlights and tired fittings with proper LED. It changes how a 1970s house feels more than almost anything else you can do for the money.',
            },
        ],
        landmarks: [
            'Banksia Park International High School',
            'Anstey Hill Recreation Park',
            'Milne Road',
            'Hancock Road',
            'North East Road',
        ],
        nearby: ['Tea Tree Gully', 'St Agnes', 'Fairview Park', 'Ridgehaven', 'Vista', 'Redwood Park'],
        faqs: [
            {
                question: 'My Banksia Park home still has its original 1970s switchboard. Should I upgrade?',
                answer: 'Yes, in almost every case. A board of that age has no safety switch protection, uses fuses or early breakers past their service life, and has no capacity for anything you might want to add. It is the highest-value electrical work available on a house of that vintage.',
            },
            {
                question: 'Can you run power to a shed at the back of a deep block?',
                answer: 'Yes. Distance is the main factor, because a long run needs a bigger cable to avoid voltage drop. We measure it, size the submain for what you actually want to run out there, and install a small board with protection at the shed end.',
            },
            {
                question: 'How much does it cost to install ceiling fans?',
                answer: 'Installing onto an existing light point is the cheaper option. Running a new point and adding a wall control costs more but gives a better result. The number of fans and whether we can get into the roof space above each one drives the rest. We quote it after a look.',
            },
            {
                question: 'Do you install outdoor powerpoints and lighting?',
                answer: 'Yes. Weatherproof outdoor outlets for the shed, pool pump or caravan, plus garden, path and entertaining-area lighting using IP-rated fittings that will actually last outdoors.',
            },
            {
                question: 'Do you do emergency work in Banksia Park?',
                answer: 'Yes. Call 0435 006 420. Loss of power, breakers that will not reset, sparking or burning smells all get prioritised. We are a short drive away in Wynn Vale.',
            },
            {
                question: 'Can you replace fluorescent battens with LED?',
                answer: 'Yes, and it is worth doing. Old fluorescent battens in kitchens and laundries are dim, they flicker as they age, and the ballasts fail. Modern LED battens or a proper LED downlight layout is a straightforward swap with an immediate difference.',
            },
        ],
    },
    {
        slug: 'electrician-vista',
        name: 'Vista',
        postcode: '5091',
        population: 1035,
        council: 'City of Tea Tree Gully',
        hook: 'Small Suburb, Same Local Sparky',
        title: 'Electrician Vista SA | Switchboards, Sheds, Safety Switches',
        description: 'Vista SA electrician for switchboard upgrades, shed and submain work, safety switches, downlights and emergency callouts. Small jobs welcome.',
        intro:
            'JPD Complete Electrical services Vista for switchboard upgrades, shed and submain work, safety switch installs and testing, downlights, oven and cooktop connections and emergency callouts.',
        local: [
            'Vista is the smallest suburb we cover, a quiet pocket of a thousand or so people sitting between Highbury, Tea Tree Gully and Banksia Park. Larger blocks, established trees, and a semi-rural feel toward the Anstey Hill end.',
            'Being small does not mean being ignored. A lot of trades will not make the trip for a single job in Vista. We are ten minutes away in Wynn Vale, so a one-hour job here is not a problem for us.',
            'The housing is mostly 1970s and 80s on generous blocks, which puts the electrical work squarely in familiar territory. Original switchboards that are now well past their intended life, sheds and outbuildings on undersized submains, and outdoor power that was never designed for what it is running now.',
        ],
        housing: '1970s and 80s homes on large blocks, semi-rural in feel toward Anstey Hill',
        localJobs: [
            {
                title: 'Switchboard upgrades',
                body: 'Original boards on 1970s and 80s Vista homes need replacing. We fit a correctly sized board on RCBOs so every circuit gets its own protection, and label it so the next person knows what is what.',
            },
            {
                title: 'Shed, workshop and outbuilding power',
                body: 'Big blocks mean long runs to sheds. We size submains for the actual load and the actual distance, install a board and protection at the shed end, and sort out lighting and power that work properly rather than dimming under load.',
            },
            {
                title: 'Outdoor power and lighting',
                body: 'Weatherproof outlets, garden and path lighting, and power for pumps, gates and outbuildings. Installed with outdoor-rated gear so it survives more than one winter.',
            },
            {
                title: 'General repairs and fault finding',
                body: 'Dead circuits, tripping breakers, flickering lights and outlets that have stopped working. We test to find the actual cause instead of replacing parts until the symptom goes away.',
            },
        ],
        landmarks: [
            'Anstey Hill Recreation Park',
            'Hancock Road',
            'North East Road',
            'Valley Road',
            'Tea Tree Gully village',
        ],
        nearby: ['Highbury', 'Tea Tree Gully', 'Banksia Park', 'Hope Valley', 'St Agnes', 'Athelstone'],
        faqs: [
            {
                question: 'Will you come out to Vista for a small job?',
                answer: 'Yes. We are based in Wynn Vale, about ten minutes away, so a single powerpoint or a dead light in Vista is not a wasted trip. Plenty of trades will not bother with a small suburb. We will.',
            },
            {
                question: 'Can you get reliable power to my shed?',
                answer: 'Yes. On the larger Vista blocks the shed is often a long way from the house, and the original cable is usually undersized for what people now run out there. We size a new submain for the distance and the load and install a board with proper protection at the shed.',
            },
            {
                question: 'My Vista home is from the 1980s. Does the switchboard need attention?',
                answer: 'Very likely. Boards from that era typically have one safety switch at best, covering power circuits only, and they are now around forty years old. We will look at it and tell you honestly whether it is urgent or whether it can wait.',
            },
            {
                question: 'Do you do emergency callouts in Vista?',
                answer: 'Yes. Call 0435 006 420. If there is sparking, a burning smell or water in the board, switch the main off first and then call us.',
            },
            {
                question: 'Can you install outdoor lighting and weatherproof powerpoints?',
                answer: 'Yes. Garden and path lighting, sensor lights, and IP-rated outdoor outlets for pumps, tools, caravans and the shed. All installed with outdoor-suitable cable and fittings rather than indoor gear pushed outside.',
            },
            {
                question: 'Are you licensed?',
                answer: 'Yes. JPD Complete Electrical is fully licensed, licence number PGE296191, and carries public liability insurance. You get a Certificate of Compliance for Electrical Work on every job that requires one.',
            },
        ],
    },
];

export const suburbBySlug = Object.fromEntries(suburbs.map((s) => [s.slug, s]));

/** Slug lookup by display name, used for interlinking the "nearby suburbs" chips. */
export const suburbSlugByName: Record<string, string> = Object.fromEntries(
    suburbs.map((s) => [s.name, `/${s.slug}`])
);
