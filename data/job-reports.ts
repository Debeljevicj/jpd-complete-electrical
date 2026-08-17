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
        slug: 'kitchen-appliances-lighting-greenwith',
        title: 'Kitchen Appliances and Lighting in Greenwith',
        metaDescription:
            'A full kitchen renovation in Greenwith with Smeg appliances throughout and new LED lighting, and why a modern kitchen needs far more circuits than the one it replaces.',
        excerpt:
            'Smeg appliances throughout and new LED lighting. A modern kitchen is a much bigger electrical load than the kitchen it replaces, and the total is what catches people out.',
        date: '2026-08-15',
        author: 'Justin',
        category: 'Recent Work',
        image: '/images/kitchen_lighting_greenwith.webp',
        services: [
            'oven-cooktop-installation-adelaide',
            'downlight-installation-adelaide',
            'renovation-electrician-adelaide',
        ],
        suburb: 'electrician-greenwith',
        angles: {
            'downlight-installation-adelaide': {
                title: 'Kitchen Lighting Done Properly in Greenwith',
                blurb: 'Downlights behind where you stand put you in your own shadow over the bench. Kitchen lighting is a working tool, not ambience.',
                anchor: 'lighting',
            },
            'renovation-electrician-adelaide': {
                title: 'A Full Kitchen Renovation in Greenwith',
                blurb: 'Appliances, circuits and lighting all decided before the cabinetry is built, because everything downstream depends on it.',
                anchor: 'order',
            },
        },
        content: `
            <h3>Why This Matters to You</h3>
            <p>The kitchen you are replacing was probably built for a gas cooktop, an oven, a fridge and a kettle. The kitchen you are installing has considerably more in it than that, and the total is what catches people out rather than any single appliance.</p>
            <p>This was a full kitchen renovation in Greenwith with Smeg appliances throughout, including the oven and an induction cooktop, plus new LED lighting. Here is what a modern kitchen actually asks for electrically, and the lighting decision most kitchens get wrong.</p>

            <h3 id="the-load">Add Up What Is Actually Going In</h3>
            <p>Write out the appliance list for a current kitchen and it is longer than people expect. An oven. A cooktop, which if it is induction is the single largest item on the list. A built-in microwave. A dishwasher. A rangehood. A fridge, and increasingly a second one or a freezer in the garage. Then the bench outlets for a kettle, a toaster, an air fryer and a coffee machine, several of which get used at the same time every morning.</p>
            <p>Individually none of that is remarkable. Together it is a lot more than the kitchen it replaced was wired for, and the older the kitchen the bigger the gap. A 1990s kitchen commonly had one circuit for the oven and cooktop and one general circuit doing everything else, which was adequate for what was in it then.</p>
            <p>So the question at the start of a kitchen job is not just what the cooktop needs. It is what the whole room needs, and whether the switchboard has the capacity and the spare ways for it. That is much better established while you are choosing appliances than after the cabinetry is in.</p>

            <h3 id="circuits">What Needs Its Own Circuit</h3>
            <p>Broadly, the heavy fixed appliances get their own circuits and the bench outlets share.</p>
            <p>An induction cooktop needs a dedicated circuit sized for that specific model, and going from gas to induction means running that circuit from the board for the first time. We covered that in more detail on a <a href="/blog/induction-cooktop-oven-install-golden-grove">Golden Grove kitchen</a> where the same change was made, so rather than repeat it here: get the model number to your electrician before you buy.</p>
            <p>The oven usually wants its own supply as well, and a dishwasher and rangehood need outlets positioned inside the cabinetry where they can still be reached. The bench outlets are where you want to be generous rather than minimal, because the alternative is a permanent extension lead on a stone benchtop. More on the connection side is on our <a href="/oven-cooktop-installation-adelaide">oven and cooktop installation</a> page.</p>

            <h3 id="lighting">The Lighting Mistake Almost Every Kitchen Makes</h3>
            <p>Here is the one worth reading even if you are not renovating.</p>
            <p>Most kitchens are lit by downlights spaced evenly across the middle of the ceiling. Stand at the bench and work out where that puts the light. It is behind you. Your body is between the light and the surface you are working on, so you chop, read recipes and check whether the chicken is done in your own shadow. The room is well lit and the bench is not.</p>
            <p>The fix is to light the bench rather than the room. That means <a href="/downlight-installation-adelaide">downlights positioned over the front edge of the bench</a> rather than the centre of the ceiling, so the light comes down onto the work surface past you instead of over your shoulder. Where cabinetry allows, under-cabinet lighting does it better again, because it sits below head height and cannot be blocked at all.</p>
            <p>Think of it as two separate jobs. General light so the room is not gloomy, and task light where you actually work. A kitchen with both is noticeably easier to use, and the difference costs very little at rough-in stage. It costs a great deal after the ceiling is closed and the splashback is on.</p>

            <h3 id="order">The Order It Has To Happen In</h3>
            <p>Appliances chosen first, because their sizes and electrical requirements drive everything. Then cabinetry designed around them. Then electrical rough-in to match the cabinetry, before the plasterer and before any splashback goes on. Then benchtops and cabinetry installed, then appliances connected and tested.</p>
            <p>Every stage depends on the one above. The reason kitchens are less forgiving than any other room is that almost everything in them is fixed, made to measure and expensive, so a decision made in the wrong order is not a quick adjustment. Our <a href="/renovation-electrician-adelaide">renovation electrician</a> page covers how this sequences alongside the other trades.</p>

            <h3>If You Are Doing a Kitchen</h3>
            <p>Two things at the start. Send the appliance list with model numbers to your electrician, and ask whether the board has capacity for the lot rather than just for the cooktop.</p>
            <p>Then spend five minutes on where you will actually be standing when you use the room, and put light on those surfaces. It is the cheapest thing on the list and the one you will notice every single day. There is more on what we do locally on our <a href="/electrician-greenwith">Greenwith electrician</a> page.</p>
        `,
        cta: {
            heading: 'Planning a Kitchen Renovation?',
            description:
                'Appliances, circuits and lighting sorted before the cabinetmaker measures up. JPD Complete Electrical covers Greenwith and the north-eastern suburbs.',
            linkText: 'Get a Kitchen Electrical Quote',
            href: '/contact',
        },
    },
    {
        slug: 'outdoor-strip-heaters-golden-grove',
        title: 'Outdoor Strip Heaters in Golden Grove',
        metaDescription:
            'Two 3.2 kW outdoor strip heaters installed on dedicated circuits in Golden Grove, and why outdoor heating cannot run off an existing outdoor powerpoint.',
        excerpt:
            'Two 3.2 kW radiant heaters, each on its own circuit. At that rating a pair of them is most of a small house, which is the whole reason they cannot share.',
        date: '2026-08-15',
        author: 'Justin',
        category: 'Recent Work',
        image: '/images/outdoor_strip_heaters_golden_grove.webp',
        services: ['powerpoint-installation-adelaide'],
        suburb: 'electrician-golden-grove',
        content: `
            <h3>Why This Matters to You</h3>
            <p>An outdoor area in Adelaide is comfortable for about eight months of the year. The other four it sits empty, which is a lot of money spent on paving and a pergola you look at from indoors between May and August.</p>
            <p>This job in Golden Grove was two Lucci outdoor heaters, around 3.2 kW each, each on its own dedicated circuit. The heaters are the easy part. The circuits are the reason it works.</p>

            <h3 id="why-dedicated-circuits">Why Each One Needs Its Own Circuit</h3>
            <p>A 3.2 kW heater pulls roughly 14 amps on its own. Two of them running together is around 28 amps of continuous load, which is more than a general outdoor powerpoint circuit was ever built to carry.</p>
            <p>This is the single most common misunderstanding with outdoor heating. People assume that because the heater comes with a plug, an existing outdoor powerpoint will do. It will not. That outlet is very likely sharing a circuit with other outlets, and heating is not an intermittent load like a drill or a radio. It runs flat out for hours, which is exactly the condition that finds the weakest connection on a circuit and heats it up.</p>
            <p>So each heater got a <a href="/powerpoint-installation-adelaide">dedicated circuit</a> sized for continuous load. That also means you can run one or both without anything else on the property being affected, and if you only want to warm half the area you are not paying to run the other heater.</p>

            <h3 id="radiant">Why Radiant and Not a Fan Heater</h3>
            <p>Outdoor heating only works if it is radiant. A fan heater warms the air, and outdoors the air simply leaves. You are heating the suburb.</p>
            <p>A radiant strip heater sends heat directly onto people and surfaces the same way sunlight does, so it works regardless of whether the air around it is moving. That is why it can be effective in a semi-open pergola where a convection heater would be useless.</p>
            <p>It also means aim and mounting height matter more than raw output. Too high and the heat spreads out and thins before it reaches anyone. Too low and it is uncomfortable to sit under and harder to keep the required clearances. Both heaters need to cover where people actually sit rather than the middle of the paving.</p>

            <h3 id="planning">If You Are Adding Outdoor Heating</h3>
            <p>Work out the heater size and how many before the electrical, because the answer determines the circuits and possibly the switchboard. Two 3.2 kW heaters is a meaningful addition to a house's total load, and if the board has no spare ways then that is part of the job.</p>
            <p>It is also worth doing outdoor heating at the same time as anything else out there. An outdoor area that gains heating usually also wants lighting, fans and weatherproof outlets, and those together are well beyond what one existing outdoor circuit can carry. Doing them in one visit costs far less than adding each one separately, and it means the whole area gets designed as a whole.</p>
            <p>For what it is worth, this is a job that pays for itself in use rather than in resale. Cold evenings around Greenwith and Golden Grove are the difference between an outdoor area you use three seasons a year and one you use all four. There is more on what we do locally on our <a href="/electrician-golden-grove">Golden Grove electrician</a> page.</p>
        `,
        cta: {
            heading: 'Want to Use Your Outdoor Area in Winter?',
            description:
                'Heating, lighting and power for an outdoor space, sized properly and on circuits that can carry it. JPD Complete Electrical covers Golden Grove, Greenwith and the north-eastern suburbs.',
            linkText: 'Get an Outdoor Heating Quote',
            href: '/contact',
        },
    },
    {
        slug: 'security-camera-install-golden-grove',
        title: 'Security Camera Install in Golden Grove',
        metaDescription:
            'Seven security cameras installed for full coverage at a Golden Grove business, in a solid brick building with no wall cavities to run cable in.',
        excerpt:
            'Seven cameras covering a commercial premises in solid brick, where there are no wall cavities to hide a single cable in.',
        date: '2026-08-15',
        author: 'Justin',
        category: 'Recent Work',
        image: '/images/security_cameras_eaves_golden_grove.webp',
        gallery: [
            {
                src: '/images/security_cameras_bracket_golden_grove.webp',
                alt: 'Two security cameras on a bracket under the eaves of a Golden Grove property',
                caption:
                    'Two cameras on one bracket covering different approaches, mounted high enough to be out of reach.',
            },
        ],
        services: ['powerpoint-installation-adelaide'],
        suburb: 'electrician-golden-grove',
        content: `
            <h3>Why This Matters to You</h3>
            <p>Most camera systems are sold on the cameras. The number of megapixels, the night vision range, the app. In practice the thing that decides whether an install looks professional or looks like an afterthought is the cabling, and that is decided by the building rather than the kit.</p>
            <p>This job was for a business in Golden Grove. Seven cameras for full coverage around the premises, in a solid brick building, which meant there were no wall cavities to run anything in.</p>

            <h3 id="solid-brick">No Cavity Means No Easy Route</h3>
            <p>In a brick veneer building there is a cavity behind the internal lining, so a cable can be dropped down a wall and come out where you want it with nothing showing. Solid brick does not give you that. There is no gap to work in.</p>
            <p>So every run has to be planned rather than improvised. That means working through the roof space where possible, out through the eaves, and using surface conduit where there is genuinely no other option, run along lines that already exist on the building so it reads as deliberate rather than added. The difference between a tidy install and an ugly one is almost entirely in these decisions, and they are much easier to get right before the first hole is drilled than after.</p>
            <p>It also takes longer, which is worth knowing when you are comparing quotes. A cheaper quote on a solid brick building often means cable stapled across the brickwork by the shortest route.</p>

            <h3 id="commercial">What Is Different About a Business</h3>
            <p>Cameras on a commercial site are doing a different job to cameras on a house. Nobody is there overnight, which is when most of what you want recorded happens, so coverage of the approaches and anywhere stock or vehicles sit matters more than coverage of the building itself.</p>
            <p>There is usually more to cover, too. A business tends to have multiple entry points, a yard, a loading area and a car park rather than a front and back door, which is how a job gets to seven cameras rather than three. And because the footage may end up being used for an insurance claim or shown to police, image quality at the points that matter is worth more than camera count spread thinly.</p>
            <p>Worth thinking through before install: who needs to be able to view it, from where, and whether that is only on site or from a phone as well. That decision changes what the recorder needs to be connected to.</p>

            <h3 id="coverage">Seven Cameras, and Where They Point</h3>
            <p>Full coverage does not mean a camera on every wall. It means the approaches are covered and the views overlap enough that there is no blind gap between them, particularly at the points where somebody would actually come onto the property.</p>
            <p>Height matters in two directions. High enough that nobody can reach up and turn a camera away, but not so high that everything you record is the top of a head. A camera at second-storey height gives you excellent footage of somebody's shoulders and nothing you could identify them by.</p>
            <p>Direction matters too, and not just for image quality. A camera aimed into the afternoon sun will give you a silhouette for two hours a day. And it is worth being considerate about where the field of view lands, because a camera that takes in a good portion of the neighbour's back yard tends to become a conversation you did not want to have. Point them at your own property and the system does its job without creating a second problem.</p>

            <h3 id="power">The Recorder Needs Power and Somewhere to Live</h3>
            <p>The cameras themselves typically take power and data down the same cable, which keeps the outdoor side simple. The recorder is the part people do not plan for.</p>
            <p>It needs a <a href="/powerpoint-installation-adelaide">supply</a>, it needs somewhere ventilated because it runs continuously and generates heat, and it needs to be somewhere reasonably secure. A recorder sitting in an obvious spot inside the front door is the first thing taken, along with everything it recorded.</p>
            <p>Worth thinking about too: if the power goes off, the recording stops. If that matters to you, the recorder wants to be on a small uninterruptible supply so a brief outage, or somebody deliberately killing the power, does not create a gap.</p>

            <h3>If You Are Getting Cameras Installed</h3>
            <p>Walk the site first and decide what you actually want to see. Approaches, entry points, and anywhere a vehicle, stock or equipment is left. That list drives the camera count, and the camera count drives the cabling, which is where the work actually is.</p>
            <p>Then find out what your walls are. If the building is solid brick, expect the cabling to be a bigger part of the job than the cameras, and get someone who will tell you where the conduit is going to run before they start rather than after. We do this work for homes and small commercial sites across the north-east, and there is more on what we cover locally on our <a href="/electrician-golden-grove">Golden Grove electrician</a> page.</p>
        `,
        cta: {
            heading: 'Thinking About Cameras?',
            description:
                'Home or business, the cabling is the part that decides how it looks and how long it lasts. JPD Complete Electrical covers Golden Grove and the north-eastern suburbs.',
            linkText: 'Get a Security Camera Quote',
            href: '/contact',
        },
    },
    {
        slug: 'induction-cooktop-oven-install-golden-grove',
        title: 'Induction Cooktop and Oven Install in Golden Grove',
        metaDescription:
            'A full kitchen renovation in Golden Grove with an induction cooktop, oven and built-in microwave, and what changes electrically when you move away from gas.',
        excerpt:
            'Induction, oven and a built-in microwave in a full kitchen renovation. Going from gas to induction means a new circuit, not a new plug.',
        date: '2026-08-15',
        author: 'Justin',
        category: 'Recent Work',
        image: '/images/kitchen_renovation_golden_grove.webp',
        gallery: [
            {
                src: '/images/kitchen_oven_microwave_golden_grove.webp',
                alt: 'Built-in oven and microwave in a cabinet tower in a renovated Golden Grove kitchen',
                caption:
                    'Integrated appliances need their supply where the cabinetmaker leaves room for it, and where somebody can still reach it later.',
            },
        ],
        services: [
            'oven-cooktop-installation-adelaide',
            'renovation-electrician-adelaide',
            'powerpoint-installation-adelaide',
            'downlight-installation-adelaide',
        ],
        suburb: 'electrician-golden-grove',
        angles: {
            'renovation-electrician-adelaide': {
                title: 'Appliance Wiring on a Golden Grove Kitchen Renovation',
                blurb: 'Appliance specs drive the cabinetry and the cabinetry drives the outlet positions, so the order those decisions get made in matters.',
                anchor: 'sequence',
            },
            'powerpoint-installation-adelaide': {
                title: 'Outlets for Integrated Kitchen Appliances in Golden Grove',
                blurb: 'An outlet behind a fixed oven that nobody can reach is a problem the first time the appliance needs isolating.',
                anchor: 'integrated',
            },
        },
        content: `
            <h3>Why This Matters to You</h3>
            <p>Induction cooktops are the thing people most often get wrong when planning a kitchen, and it is almost never the cooktop's fault. It is that everyone treats it as an appliance swap when it is actually a new circuit.</p>
            <p>This was a full kitchen renovation in Golden Grove. Smeg appliances throughout, an induction cooktop, an oven and a built-in microwave, new powerpoints and LED lighting as part of the same job. Here is what the appliance side actually involves.</p>

            <h3 id="induction">Induction Is Not a Like-for-Like Swap</h3>
            <p>If you are coming from gas, your cooktop currently has a gas connection and no meaningful electrical supply at all. Nothing behind it is capable of running an induction unit, so the job includes a new circuit run from the switchboard to the cooktop position.</p>
            <p>Induction also draws considerably more than most people assume. It is not a powerpoint appliance. These generally need a dedicated circuit sized specifically for that model, and plenty of them are hardwired rather than plugged in. The important detail is that the requirement varies genuinely between models, sometimes substantially, so the number that matters is the one on the spec sheet of the cooktop you are actually buying.</p>
            <p>Which leads to the one piece of advice worth more than anything else here: get the model number to your electrician before you buy, not after it arrives. It takes a minute and it is the difference between a booked-in circuit and a kitchen you cannot cook in while you wait for one.</p>

            <h3 id="board">It May Also Be a Switchboard Question</h3>
            <p>A new dedicated circuit needs somewhere to land, and that means a spare way in the board with capacity to match.</p>
            <p>On plenty of Golden Grove homes there is not one. When the board is full, adding an induction cooktop quietly becomes a cooktop plus board work, and finding that out during planning is very different from finding it out on installation day with a bench full of new appliances. It is worth having the board looked at while you are still choosing appliances rather than after. Our page on <a href="/switchboard-upgrade-adelaide">switchboard upgrades</a> covers what that involves.</p>

            <h3 id="integrated">Integrated Appliances and Getting to Them Later</h3>
            <p>The oven and microwave here sit in a cabinet tower, which is a different problem to a freestanding appliance.</p>
            <p>Each needs its supply positioned where the cabinetmaker has left room for it, which means the cabinetry drawings and the electrical rough-in have to agree before either is built. And it has to be somewhere a person can actually reach. An outlet sealed behind a fixed oven with no access panel technically works, right up until the appliance needs isolating for a repair and the only way to reach the plug is to pull the oven out of the joinery.</p>
            <p>The same applies to the microwave. It is inside the cabinetry, so its <a href="/powerpoint-installation-adelaide">outlet</a> has to be hidden but serviceable. That is a decision made on the plan, not on the day.</p>

            <h3 id="sequence">The Order These Decisions Happen In</h3>
            <p>Kitchens go wrong on sequence more than on any technical detail. The order that works is:</p>
            <ul>
                <li>Choose the appliances, or at least confirm their electrical requirements and physical sizes</li>
                <li>Cabinetry designed around those</li>
                <li>Electrical rough-in to match the cabinetry, before the plasterer and before any splashback</li>
                <li>Cabinetry and benchtops installed</li>
                <li>Appliances connected and tested</li>
            </ul>
            <p>Every step depends on the one above it. Skip ahead and you get the classic outcomes: a cooktop that needs a circuit nobody allowed for, an outlet in the wrong place behind finished joinery, or a splashback that needs cutting after it is installed.</p>
            <p>It is the same reasoning as any other room, just less forgiving because a kitchen has more fixed, expensive, made-to-measure parts than anywhere else in a house. More on how this sequences with the other trades is on our <a href="/renovation-electrician-adelaide">renovation electrician</a> page.</p>

            <h3>If You Are Doing a Kitchen</h3>
            <p>Two things and you avoid most of the trouble. Send the appliance model numbers to your electrician early, and ask whether the switchboard has the capacity for what you have chosen.</p>
            <p>If you are going gas to induction, assume a new circuit and budget for it rather than hoping. And if lighting is part of the same job, do it in the same run of work while the ceilings and walls are already open. Our <a href="/oven-cooktop-installation-adelaide">oven and cooktop installation</a> page has more on the connection side, and there is more on what we do locally on our <a href="/electrician-golden-grove">Golden Grove electrician</a> page.</p>
        `,
        cta: {
            heading: 'Planning a New Kitchen?',
            description:
                'Send the appliance model numbers before you order and we will tell you what the circuits and the board need to do. JPD Complete Electrical covers Golden Grove and the north-eastern suburbs.',
            linkText: 'Get a Kitchen Electrical Quote',
            href: '/contact',
        },
    },
    {
        slug: 'whole-house-led-downlights-golden-grove',
        title: 'Whole House LED Downlights in Golden Grove',
        metaDescription:
            'Over forty LED downlights through a Golden Grove home, plus every switch and powerpoint replaced, as part of a renovation that also did floors and paint.',
        excerpt:
            'Over forty downlights, every switch and powerpoint replaced, and a kitchen refit. Paint, floors and lighting together change a house more than any one of them alone.',
        date: '2026-08-15',
        author: 'Justin',
        category: 'Recent Work',
        image: '/images/led_downlights_living_golden_grove.webp',
        gallery: [
            {
                src: '/images/led_downlights_kitchen_golden_grove.webp',
                alt: 'Golden Grove kitchen with new LED downlights, new benchtop and new appliances',
                caption:
                    'The kitchen was updated in the same run of work, which is when new appliances are easiest to allow for.',
            },
            {
                src: '/images/outdoor_twin_spotlight_golden_grove.webp',
                alt: 'Twin-head outdoor spotlight lighting a pool area at a Golden Grove home',
                caption:
                    'From a separate Golden Grove job: a twin-head spotlight aimed across a pool area, which is the outdoor half of the same idea.',
            },
        ],
        services: [
            'downlight-installation-adelaide',
            'powerpoint-installation-adelaide',
            'renovation-electrician-adelaide',
            'oven-cooktop-installation-adelaide',
        ],
        suburb: 'electrician-golden-grove',
        angles: {
            'powerpoint-installation-adelaide': {
                title: 'Every Switch and Powerpoint Replaced in a Golden Grove Home',
                blurb: 'Fresh paint next to twenty-year-old yellowed switches is the detail that gives a renovation away. Replacing them is cheap and it is also a chance to check what is behind them.',
                anchor: 'switches',
            },
            'renovation-electrician-adelaide': {
                title: 'Paint, Floors and Lighting on a Golden Grove Renovation',
                blurb: 'The three things that shift how a house feels the most for the money, and why doing the electrical while the painter is still there costs less.',
                anchor: 'the-trio',
            },
            'oven-cooktop-installation-adelaide': {
                title: 'New Kitchen Appliances in a Golden Grove Renovation',
                blurb: 'New appliances do not always want the same circuit the old ones had, which is worth checking before delivery day rather than on it.',
                anchor: 'kitchen',
            },
        },
        content: `
            <h3>Why This Matters to You</h3>
            <p>If you want a house to feel different, there are three things that do more than anything else for the money: paint, floors and lighting. We see it constantly. A house gets those three done and people walk in and assume it has been rebuilt, when the layout has not moved and the kitchen might not even have been touched.</p>
            <p>This job in Golden Grove was the full version. Over forty LED downlights through the whole house, new floors, every wall painted, the kitchen updated with new appliances, and every switch and powerpoint replaced. Our part was the lighting, the switches and outlets, and the kitchen.</p>

            <h3 id="the-trio">Paint, Floors and Lighting</h3>
            <p>Each of the three does something the others cannot.</p>
            <p>Paint resets every surface and it is the cheapest of the three by a long way. Floors change what the whole house feels like underfoot and visually tie rooms together, particularly when you go from several different floor coverings to one. Lighting is the one people underestimate, because it changes not just how the house looks but how it reads. A room lit by a single centre fitting with a yellowing diffuser looks dated in a way that no amount of paint fixes, and it makes good paint and good floors look worse than they are.</p>
            <p>The reason they belong together is practical rather than aesthetic. Installing downlights means cutting into ceilings. Replacing switches and outlets means marks on walls. Running anything new means access. If the painter is coming anyway and the floors are already up, all of that is absorbed into work that was happening regardless. Do the lighting two years after the painting and you are paying someone to patch and repaint.</p>
            <p>In our experience this is where the money goes furthest, both for people renovating to sell and for people who intend to stay. We are electricians rather than valuers, so take the resale part as a trade observation rather than a valuation, but the pattern is consistent enough that it is worth saying.</p>

            <h3 id="switches">The Part Everyone Forgets</h3>
            <p>Every switch and powerpoint in the house was replaced with a current style, and this is the detail most people leave out of the budget.</p>
            <p>It matters visually because switch plates are at eye level and at hand height, on every wall, in every room. Twenty-year-old plates that have yellowed unevenly sitting against brand new paint are the single clearest giveaway that a house has been freshened up rather than renovated. They are also the cheapest thing on the list to fix.</p>
            <p>There is a second reason that has nothing to do with looks. Replacing an outlet means the terminations behind it get seen. Connections work loose over decades, and a loose connection heats up, and heat is what eventually discolours and embrittles the insulation around it. Most of the time everything behind the plate is fine. Occasionally it is not, and finding that during a planned renovation is a much better outcome than finding it later. It is also why this is <a href="/powerpoint-installation-adelaide">electrical work</a> rather than a job for whoever is already on site with a screwdriver.</p>

            <h3 id="how-many">On Forty-Plus Downlights</h3>
            <p>Forty sounds like a lot until you count the rooms. Spread across a whole house it is a normal number, and the count is not really the decision anyway. The spacing is.</p>
            <p>Downlights get spaced against ceiling height and beam angle so the light overlaps evenly rather than leaving scallops of bright and dim across a wall. Get that wrong in either direction and you notice: too few and the room has dark corners no lamp fixes, too many and it feels like a display home with nowhere comfortable to sit at night.</p>
            <p>The way out of that tension is dimming rather than fewer lights. A well-lit room you can wind back to a quarter gives you both a working kitchen and a comfortable lounge from the same fittings, and it is far cheaper to allow for while the ceilings are open. More on the fittings themselves is on our <a href="/downlight-installation-adelaide">downlights and LED lighting</a> page.</p>

            <h3 id="outside">Do Not Stop at the Back Door</h3>
            <p>The one place a lighting upgrade usually stops short is outside, and it is the cheapest remaining win once someone is already on site.</p>
            <p>The third photo below is from a separate Golden Grove job rather than this one, but it makes the point. A twin-head spotlight aimed across a pool area turns a space that was unusable after dark into one you can actually see. Outdoor lighting does two jobs at once: it makes the area usable at night, and a house that is lit at the approaches is a less appealing target than one that is not.</p>
            <p>The things worth getting right are aim and glare. A floodlight pointed at where people walk rather than at their eyes is the difference between lighting an area and blinding everyone in it. Sensors are worth considering for anywhere you only pass through, and a switch for anywhere you sit. And it all needs to be weather-rated and on a circuit that can carry whatever else is out there.</p>

            <h3 id="kitchen">The Kitchen and the New Appliances</h3>
            <p>The kitchen was updated in the same run of work, including new appliances throughout.</p>
            <p>The thing to check there is that new appliances do not necessarily want the circuit the old ones had. Cooking appliances in particular have changed, and swapping what was in a kitchen twenty years ago for a current equivalent can mean a different circuit rating, a different connection type, or a dedicated circuit where the old appliance shared one. It is a five minute conversation before you order and a genuine problem on delivery day if nobody has had it.</p>
            <p>Our <a href="/oven-cooktop-installation-adelaide">oven and cooktop installation</a> page covers the connection side of that in more detail.</p>

            <h3>If You Are Planning This</h3>
            <p>Do the three together, and get the electrical decided before the painter books in. The order that saves money is: agree the lighting layout and the switch and outlet positions, do the electrical, then plaster patching, then paint, then floors last so they do not get worked over.</p>
            <p>If you are only doing one of the three, lighting is the one that changes the feel of a house most for the least disruption, because it does not require you to move out or empty rooms. If you are doing all three, say so at the quoting stage, because it changes how the job is sequenced and usually reduces what it costs. There is more on renovation sequencing on our <a href="/renovation-electrician-adelaide">renovation electrician</a> page, and on what we do locally on our <a href="/electrician-golden-grove">Golden Grove electrician</a> page.</p>
        `,
        cta: {
            heading: 'Renovating, or Just Want It to Feel New?',
            description:
                'Lighting, switches and outlets done while the walls are already open costs less than doing it after. JPD Complete Electrical covers Golden Grove and the north-eastern suburbs.',
            linkText: 'Get a Renovation Lighting Quote',
            href: '/contact',
        },
    },
    {
        slug: 'switchboard-upgrade-signs-golden-grove',
        title: 'Switchboards That Need Upgrading Around Golden Grove',
        metaDescription:
            'Real switchboards from recent jobs around Golden Grove, Ridgehaven and Greenwith, and the signs that tell you a board has reached the end of its useful life.',
        excerpt:
            'Rewireable fuses, one safety switch covering a whole house, and hand-written labels. Three real boards and what each one tells you.',
        date: '2026-08-15',
        author: 'Justin',
        category: 'Recent Work',
        image: '/images/switchboard_ceramic_fuses_golden_grove.webp',
        gallery: [
            {
                src: '/images/switchboard_single_rcd_golden_grove.webp',
                alt: 'Switchboard with a single earth leakage main switch covering every circuit in the house',
                caption:
                    'One "earth leakage main switch" for the whole house. Every circuit shares it, so one fault anywhere takes out everything.',
            },
            {
                src: '/images/switchboard_hand_labelled_golden_grove.webp',
                alt: 'Switchboard with hand-written labels and breakers from several different eras',
                caption:
                    'Hand-written labels and devices from three different decades. This board was added to over time rather than planned.',
            },
        ],
        services: ['switchboard-upgrade-adelaide', 'rcd-testing-safety-switches-adelaide'],
        suburb: 'electrician-golden-grove',
        angles: {
            'rcd-testing-safety-switches-adelaide': {
                title: 'When One Safety Switch Is Covering Your Whole House',
                blurb: 'A single earth leakage main switch means one fault anywhere takes out every circuit, including the fridge.',
                anchor: 'one-rcd',
                image: '/images/switchboard_single_rcd_golden_grove.webp',
            },
        },
        content: `
            <h3>Why This Matters to You</h3>
            <p>Nobody looks at their switchboard until something stops working. It sits in a cupboard or on an outside wall, and as long as the lights come on it is easy to assume it is fine.</p>
            <p>The problem is that a switchboard is the one part of your electrical installation whose whole job is to protect you, and the standard of protection it provides depends entirely on when it was built. A board from 1975 is not a worse version of a modern board. It is a board designed before the protection you now rely on existed at all.</p>
            <p>These are real boards from recent jobs around Golden Grove, Ridgehaven and Greenwith. Here is what each one tells you, and what to look for on your own.</p>

            <h3 id="fuses">Rewireable Fuses</h3>
            <p>The board in the photo at the top of this page has white ceramic fuse carriers labelled by hand, one for lighting and one for the stove, on a slate panel with an old enclosed main switch above it.</p>
            <p>A fuse like that protects the cable in your wall from carrying more current than it should. That is genuinely useful and it is why the house has not burnt down. What it does not do is protect a person. It has no mechanism for detecting current leaking to earth through somebody, which is the thing that actually kills people. That protection is what a safety switch does, and boards of this era were built before it was required.</p>
            <p>There is a second problem specific to rewireable fuses. The fuse wire is replaceable, which means over fifty years somebody has almost certainly replaced one with whatever gauge was in the drawer. A fuse rewired with heavier wire than it should have quietly stops protecting the cable it was installed to protect, and nothing about the board's appearance tells you it has happened.</p>

            <h3 id="one-rcd">One Safety Switch Covering Everything</h3>
            <p>The second photo below is a more modern board, and at a glance it looks fine. Neat row of breakers, printed labels, solar connected. Look at the labels though and there is a single "earth leakage main switch" sitting across the whole installation.</p>
            <p>That is one safety switch protecting every circuit in the house. It meets the requirement it was installed under, and it is far better than nothing. But it has two consequences you live with daily.</p>
            <p>The first is that a fault anywhere takes out everywhere. A failing outdoor light, a wet powerpoint or a dying appliance trips the lot, so you lose the fridge, the freezer, the internet and every clock in the house because of a fault in one fitting. The second is that it makes the fault almost impossible to identify. When everything goes off together, nothing has been narrowed down.</p>
            <p>The modern arrangement puts individual protection on each circuit instead. A fault on the outdoor lights trips the outdoor lights. Everything else keeps running, and you already know where to look. More on how these are tested is on our <a href="/rcd-testing-safety-switches-adelaide">safety switches and RCD testing</a> page.</p>

            <h3 id="tripping">Circuits That Keep Tripping</h3>
            <p>A breaker or safety switch that trips repeatedly is not being oversensitive and it is not worn out. It is reporting something.</p>
            <p>Resetting it is the equivalent of turning off a smoke alarm rather than looking for the smoke. Sometimes the cause is trivial and sometimes it is a cable sitting in wet ground, but either way the device is doing its job and the answer is to find out what it is detecting.</p>

            <h3 id="other-signs">Other Things Worth Looking For</h3>
            <p>Beyond what is in these photos, these are the signs that come up most often on boards around here. None of them require you to open anything, and you should not.</p>
            <p><strong>Hand-written or missing labels.</strong> The third photo has labels in marker pen and breakers from several different decades sitting side by side. That is a board that has been added to piece by piece rather than planned. The practical cost is that nobody can isolate the right circuit quickly, including whoever turns up in an emergency.</p>
            <p><strong>No spare space.</strong> If the board is physically full, then the next thing you want, an EV charger, ducted air conditioning, a pool, quietly becomes a board replacement rather than a new circuit. This is worth knowing before you buy the equipment, not after.</p>
            <p><strong>Any sign of heat.</strong> Discoloured or brittle insulation, brown marks around terminals, or a faint smell of hot plastic. This one is not a plan-for-it item. That is a call-someone-now item.</p>
            <p><strong>Solar bolted onto an old board.</strong> Solar adds a second supply and its own main switch. Where that has been added to a board which was already at the end of its life, the whole arrangement is worth a proper look rather than just the solar part.</p>
            <p><strong>Age alone, if the board is pre-1980s.</strong> Boards from that era sometimes have backing panels containing asbestos. It does not make your house dangerous to live in, but it does change how the work has to be done, and it is one of several reasons a board is not somewhere to experiment.</p>

            <h3>What To Do About It</h3>
            <p>None of this is a reason to panic. Plenty of old boards are working exactly as designed, and an upgrade is planned work rather than an emergency unless you are seeing heat.</p>
            <p>The sensible trigger is when you are about to do something else. A renovation, an EV charger, air conditioning or a pool all need capacity and protection the old board may not have, and doing the board at the same time avoids paying twice for access. Our <a href="/switchboard-upgrade-adelaide">switchboard upgrades</a> page covers what the work actually involves, and there is more on what we do locally on our <a href="/electrician-golden-grove">Golden Grove electrician</a> page.</p>
        `,
        cta: {
            heading: 'Not Sure About Your Board?',
            description:
                'Send a photo and we will tell you honestly whether it needs attention now, later, or not at all. JPD Complete Electrical covers Golden Grove, Ridgehaven, Greenwith and the surrounding suburbs.',
            linkText: 'Get Your Switchboard Assessed',
            href: '/contact',
        },
    },
    {
        slug: 'ev-charger-install-greenwith',
        title: 'EV Charger Install in a Greenwith Apartment Car Park',
        metaDescription:
            'A 7 kW EV charger installed on a dedicated circuit in the lower level of a multi-level residential car park in Greenwith, and what is different about charging in a shared building.',
        excerpt:
            'A 7 kW charger on its own dedicated circuit in a multi-level residential car park, where the wiring, the supply and the permissions all work differently to a house.',
        date: '2026-08-15',
        author: 'Justin',
        category: 'Recent Work',
        image: '/images/ev_charger_greenwith.webp',
        services: ['ev-charger-installation-adelaide', 'powerpoint-installation-adelaide'],
        suburb: 'electrician-greenwith',
        angles: {
            'powerpoint-installation-adelaide': {
                title: 'A Dedicated 7 kW Circuit for an EV Charger in Greenwith',
                blurb: 'A charger pulls near its maximum for hours at a time, which is why it gets its own circuit rather than sharing an existing one.',
                anchor: 'dedicated-circuit',
            },
        },
        content: `
            <h3>Why This Matters to You</h3>
            <p>Most writing about home EV charging assumes a house with a garage and a switchboard on the other side of the wall. Plenty of people in Adelaide do not have that. They have a park in a shared basement, a board somewhere else entirely, and a body corporate.</p>
            <p>This install was on the lower level of a multi-level residential car park in Greenwith. A customer-supplied EV Switch unit, 7 kW, on a new dedicated circuit. The electrical principles are the same as a house. Almost everything around them is different.</p>

            <h3 id="dedicated-circuit">Why It Gets Its Own Circuit</h3>
            <p>A 7 kW single-phase charger draws around 32 amps, and the thing that makes an EV different to every other appliance you own is duration. A kettle pulls hard for two minutes. An oven cycles on and off. A car charger sits at close to its maximum continuously for hours.</p>
            <p>That is why it goes on a dedicated circuit sized for continuous load rather than sharing with anything else. A circuit that copes fine with intermittent use can run hot when something sits on it all night, and heat is what degrades cable and connections over years rather than minutes. It is also why plugging a car into an ordinary powerpoint on an extension lead is a genuinely bad idea rather than just a slow one.</p>

            <h3 id="dc-fault">The Protection Is Not the Same as a Powerpoint</h3>
            <p>An electric vehicle can introduce DC fault current into the supply, and an ordinary safety switch is not built to detect that. If DC blinds the safety switch, the protection you assumed you had is not there.</p>
            <p>So an EV circuit needs protection that accounts for it. Some chargers have that detection built into the unit, and where they do not, it has to be provided on the circuit instead. Either way it is not optional and it is not something a standard powerpoint arrangement gives you. It is worth asking whoever quotes you how the DC side is being handled, because the answer tells you quickly whether they install these regularly.</p>
            <p>The unit also has local isolation beside it, so it can be switched off where it sits rather than by walking to a board somewhere else in the building.</p>

            <h3 id="strata">What Is Different in a Shared Building</h3>
            <p>This is the part that catches people out, and none of it is electrical.</p>
            <p><strong>Whose supply is it coming from.</strong> In a shared building the answer needs to be your own meter, not common property, unless there is an agreed arrangement for metering and paying for it. Getting this wrong means you are charging your car on everybody else's bill, which tends to get noticed.</p>
            <p><strong>Permission.</strong> Running a new circuit through common areas and mounting equipment on a common wall is not yours to decide alone. That is a body corporate or strata conversation, and it is far easier before the work than after.</p>
            <p><strong>Cable route.</strong> A car park has no wall cavities to hide anything in. The supply runs in surface conduit, which means the route has to be planned so it is neat, protected from vehicle damage, and does not cut across somebody else's space.</p>
            <p><strong>What happens when the neighbours want one.</strong> Buildings are steadily going from nobody charging to several residents charging, and the building's supply is finite. If you are first, you are in the best position. It is still worth asking what capacity is there, because the answer affects everyone who comes after you.</p>

            <h3>If You Are Getting a Charger</h3>
            <p>Sort the charger choice and the location before you book the electrical, because both change the job. We install customer-supplied units like this one and we can supply a range of brands, so if you have not bought yet that is worth a conversation first rather than after.</p>
            <p>In a house, the questions are board capacity and the distance from the board. In an apartment, add metering and permissions to that list and start earlier. There is more on our <a href="/ev-charger-installation-adelaide">EV charger installation</a> page, and on what we cover locally on our <a href="/electrician-greenwith">Greenwith electrician</a> page.</p>
        `,
        cta: {
            heading: 'Thinking About an EV Charger?',
            description:
                'House or apartment, the first questions are supply, capacity and where it is going. JPD Complete Electrical covers Greenwith and the north-eastern suburbs.',
            linkText: 'Get an EV Charger Quote',
            href: '/contact',
        },
    },
    {
        slug: 'led-downlights-tv-wall-mount-hope-valley',
        title: 'LED Downlights and a TV Wall Mount in Hope Valley',
        metaDescription:
            'Modernising the lighting through a Hope Valley home, plus a master bedroom TV wall mount with concealed HDMI, a new antenna point and power behind the screen.',
        excerpt:
            'LED downlights through the house, and a wall-mounted TV with the power, HDMI and antenna all run inside the wall so nothing shows.',
        date: '2026-08-15',
        author: 'Justin',
        category: 'Recent Work',
        image: '/images/tv_wall_mount_hope_valley.webp',
        gallery: [
            {
                src: '/images/led_downlights_bedroom_hope_valley.webp',
                alt: 'Bedroom with new LED downlights installed during a Hope Valley renovation',
                caption: 'Downlights set around the room rather than directly over the bed.',
            },
            {
                src: '/images/led_downlights_second_room_hope_valley.webp',
                alt: 'Second room with new LED downlights during a Hope Valley renovation',
                caption: 'Same colour temperature throughout, so no room reads warmer or cooler than the next.',
            },
        ],
        services: [
            'downlight-installation-adelaide',
            'powerpoint-installation-adelaide',
            'renovation-electrician-adelaide',
        ],
        suburb: 'electrician-hope-valley',
        angles: {
            'powerpoint-installation-adelaide': {
                title: 'Power and Data Behind a Wall-Mounted TV in Hope Valley',
                blurb: 'A powerpoint behind the screen, two HDMI runs and a new antenna point, all inside the wall so no cable shows.',
                anchor: 'tv-wall',
            },
            'renovation-electrician-adelaide': {
                title: 'Lighting and Media Rough-In on a Hope Valley Renovation',
                blurb: 'Cabling for lights, power and data all goes in before the plasterer. After that, every change is patch and paint.',
                anchor: 'timing',
            },
        },
        content: `
            <h3>Why This Matters to You</h3>
            <p>A wall-mounted TV with a cable hanging down to a powerpoint undoes the whole point of mounting it on the wall. So does a media unit with a visible HDMI lead looping up from a console.</p>
            <p>This was part of a larger renovation in Hope Valley to modernise the lighting through the house. The interesting part is the master bedroom, where the TV is mounted with the power, the HDMI and the antenna all inside the wall.</p>

            <h3 id="tv-wall">What "No Visible Cables" Actually Requires</h3>
            <p>Three separate things had to be in the wall behind that screen, and each is a different type of cabling.</p>
            <p>A <a href="/powerpoint-installation-adelaide">powerpoint behind the TV</a>, positioned so the plug and any adaptor sit hidden behind the screen rather than below it. Two HDMI cables, so a console or media device somewhere else in the room connects without a lead crossing the wall. And a new TV antenna point, because the old outlet was not where the TV was going.</p>
            <p>Two HDMI runs rather than one is deliberate. The cable itself is cheap and the labour of getting it inside a finished wall is not, so the second one costs very little now and saves opening the wall later when a device changes. If you are doing this, run a spare.</p>
            <p>All of it has to land at the right height for where the bracket goes, which means the TV size and bracket need deciding before the cabling, not after.</p>

            <h3 id="downlights">Where the Downlights Went</h3>
            <p>The rest of the job was <a href="/downlight-installation-adelaide">LED downlights</a> through the other rooms, and positioning matters more than people expect.</p>
            <p>The instinct is to centre lights in a room. In a bedroom that puts a downlight directly above where you lie down, which is unpleasant every night. Setting them around the room instead lights the space evenly without anything shining into your face, and it also lights the wardrobe and the walkway rather than just the middle of the floor.</p>
            <p>The other thing worth deciding once, for the whole house, is colour temperature. Mixing warm white in one room with cool white in the next is the kind of thing you cannot unsee afterwards, and it reads as a mistake rather than a choice. Pick one and use it everywhere, and if you want a different feel in a particular room, do it with dimming rather than a different globe colour.</p>

            <h3 id="timing">Why This Is Renovation Work, Not Afterwards Work</h3>
            <p>Everything described here went in before the plasterer. Once the walls are closed and painted, running a new HDMI or moving a powerpoint means cutting, patching and repainting, and it never quite matches.</p>
            <p>So the media wall is a conversation to have at the same time as the lighting plan, even if the TV itself is not being bought for another six months. Deciding the wall, the height and roughly the screen size early costs nothing. Deciding it late costs a plasterer.</p>
            <p>If you are planning a renovation, our <a href="/renovation-electrician-adelaide">renovation electrician</a> page covers how the electrical sequences with the other trades, and there is more on what we do locally on our <a href="/electrician-hope-valley">Hope Valley electrician</a> page.</p>
        `,
        cta: {
            heading: 'Planning a Renovation?',
            description:
                'Lighting, power and media cabling all go in before the walls close. JPD Complete Electrical covers Hope Valley and the north-eastern suburbs.',
            linkText: 'Book a Renovation Quote',
            href: '/contact',
        },
    },
    {
        slug: 'hex-led-lighting-garage-fairview-park',
        title: 'Hex LED Lighting in a Fairview Park Garage',
        metaDescription:
            'Hexagon LED lighting installed in a Fairview Park garage for a car detailer, where seeing paint defects properly is the entire point of the lighting.',
        excerpt:
            'Hex LED panels across a garage ceiling. When your job is spotting swirl marks in black paint, ordinary garage lighting actively hides them.',
        date: '2026-08-15',
        author: 'Justin',
        category: 'Recent Work',
        image: '/images/hex_led_lighting_garage_fairview_park.webp',
        gallery: [
            {
                src: '/images/hex_led_lighting_ceiling_fairview_park.webp',
                alt: 'Hexagon LED lighting array mounted across a garage ceiling in Fairview Park',
                caption:
                    'The array is linked modules, so the layout has to be set out to the ceiling before anything is fixed.',
            },
        ],
        services: ['feature-lighting-led-strip-adelaide', 'powerpoint-installation-adelaide'],
        suburb: 'electrician-fairview-park',
        angles: {
            'powerpoint-installation-adelaide': {
                title: 'Circuit and Supply for a Hex Lighting Array in Fairview Park',
                blurb: 'A full ceiling array is a real load with multiple drivers, so the supply and driver positions get planned with the layout.',
                anchor: 'supply',
            },
        },
        content: `
            <h3>Why This Matters to You</h3>
            <p>Most garage lighting exists so you can find things. This one exists so its owner can see defects in paint, which is a completely different requirement.</p>
            <p>The customer is a car detailer in Fairview Park, working on dark-coloured cars. Swirl marks, holograms and an uneven polish are only visible when light hits the panel from the right angle, and a single batten in the middle of the ceiling gives you exactly one angle. Half the defects stay hidden until the car is outside in the sun and the customer finds them instead.</p>

            <h3 id="why-detailers">Why the Shape Matters</h3>
            <p>A hex array covers the ceiling with lit edges running in six directions rather than one. Because the light arrives from many angles at once, a curved panel gets lit right across its surface and the reflections that reveal swirls show up wherever you stand.</p>
            <p>You can see it in the photo at the top of this page. The hex pattern is reflected across the bonnet and roof of the car, and that reflection is the working tool. A detailer is reading those lines for distortion.</p>
            <p>It is not only for cars. The same reasoning applies to a home workshop where you need to see what your hands are doing without standing in your own shadow, a home gym, or a garage that doubles as a work space. If you have ever leaned over a bench and blocked your own light, that is the problem this solves.</p>

            <h3 id="planning-the-layout">It Has To Be Set Out Before Anything Is Fixed</h3>
            <p>These arrays are linked modules rather than individual light fittings. That has a practical consequence: the layout is decided as a whole and set out to the actual ceiling dimensions before the first module goes up.</p>
            <p>You cannot sensibly add one into the middle of a finished array later, and an array that was not set out properly ends up off-centre against the walls or the roller door, which is obvious every time you walk in. Measuring the ceiling and working out the pattern is most of the job. Fixing them up is the quick part.</p>

            <h3 id="supply">Supply, Drivers and Load</h3>
            <p>A ceiling-sized array is a real load rather than a light fitting, and it runs off drivers that have to live somewhere accessible. If a driver fails in three years, whoever replaces it needs to reach it without dismantling the array.</p>
            <p>So the supply, the <a href="/powerpoint-installation-adelaide">circuit</a> and the driver positions get planned alongside the layout. In a garage there is often no ceiling cavity to hide anything in, which makes that positioning a visible decision rather than a hidden one.</p>

            <h3 id="customer-supplied">On Customer-Supplied Fittings</h3>
            <p>This lighting was supplied by the customer, which we are happy to install. One thing worth saying plainly though, because it comes up often with LED bought online.</p>
            <p>Electrical equipment sold for use in Australia has to meet Australian requirements, and an electrician cannot install something that does not. It is not a formality. The part that fails first in cheap LED is almost always the driver, and when a driver fails inside a linked array you are troubleshooting the whole run rather than swapping a globe. If you are buying your own, buy something with a driver you can still get in five years.</p>
            <p>If you are unsure about a fitting you have already bought, send us the details before the install day rather than finding out on it. More on this kind of work is on our <a href="/feature-lighting-led-strip-adelaide">feature lighting and LED strip</a> page, and on what we cover locally on our <a href="/electrician-fairview-park">Fairview Park electrician</a> page.</p>
        `,
        cta: {
            heading: 'Want Lighting You Can Actually Work Under?',
            description:
                'Garage, workshop, gym or feature lighting, set out properly and wired to suit the load. JPD Complete Electrical covers Fairview Park and the north-eastern suburbs.',
            linkText: 'Get a Lighting Quote',
            href: '/contact',
        },
    },
    {
        slug: 'ceiling-fans-pergola-ridgehaven',
        title: 'Ceiling Fans Under a Pergola in Ridgehaven',
        metaDescription:
            'Two large ceiling fans installed under a pergola in Ridgehaven, and what makes an outdoor fan install different to an indoor one.',
        excerpt:
            'Two large fans under a gabled pergola, so an outdoor space that was unusable on still summer evenings actually gets used.',
        date: '2026-08-15',
        author: 'Justin',
        category: 'Recent Work',
        image: '/images/ceiling_fans_pergola_ridgehaven.webp',
        services: ['ceiling-fan-installation-adelaide'],
        suburb: 'electrician-ridgehaven',
        content: `
            <h3>Why This Matters to You</h3>
            <p>An Adelaide summer evening outdoors is pleasant right up until the air stops moving. Then the space you built to sit in becomes the space you look at from inside where the air conditioning is.</p>
            <p>This job in Ridgehaven was two large ceiling fans, supplied by Beacon Lighting, installed under a pergola over an outdoor area that also holds a gym setup and a spa. The point was simply to get enough air moving that the space is usable on a still night.</p>

            <h3 id="outdoor-rated">An Indoor Fan Will Not Do</h3>
            <p>The first thing that matters is that a fan under a pergola is an outdoor fan, even though it is under a roof and never gets rained on directly.</p>
            <p>Outdoor air carries moisture, and in an open structure it moves through constantly. An indoor fan put in that position corrodes at the motor housing and fixings, and timber or MDF-cored blades absorb moisture and start to droop unevenly. A drooping blade puts the fan out of balance, an out-of-balance fan wobbles, and a wobbling fan works its own fixings loose. It is a slow failure that starts as an annoyance and ends as something hanging off a rafter.</p>
            <p>Fans rated for outdoor or damp locations have sealed motors and blades that do not take up water. It is the single most important choice in the job and it is made at the shop, not on site.</p>

            <h3 id="fixing">Fixing Into a Pergola Is Not Fixing Into a Ceiling</h3>
            <p>Inside, a fan goes to a ceiling joist through plasterboard, and the fixing is hidden. A pergola has exposed rafters and beams and a raked or gabled roof, as this one does, so the fixing is both visible and structural.</p>
            <p>A ceiling fan is not a static weight. It is a rotating mass applying a continuous side-to-side load for years, and the fixing has to be into structural timber that can take that rather than into a batten or a lining board. The mount also has to sit square to level, because a fan hung off a sloped rafter without correcting for the angle will spin out of plane and wobble no matter how well it is balanced.</p>
            <p>On a raked roof, the downrod length becomes a real decision too. It sets how far the blades sit below the roof line, which affects both how well the fan moves air and whether anyone on the gym equipment underneath is going to reach it.</p>

            <h3 id="two-fans">Why Two Rather Than One</h3>
            <p>A ceiling fan only really moves air in the column beneath itself. A single fan in the middle of a long outdoor room leaves both ends still, which people usually read as the fan being underpowered when the problem is coverage.</p>
            <p>Two large fans spaced along the space is a different result entirely. Blade span does more for air movement than motor speed does, which is why a big fan turning slowly is both more effective and much quieter than a small one working hard. In an outdoor area you sit and talk in, quiet is worth paying attention to.</p>

            <h3>If You Are Adding Fans Outside</h3>
            <p>Work out the fan and the fixing points before you buy, particularly under a raked or gabled roof, because the downrod and the mount depend on the structure and the ceiling height. Check the fan is rated for outdoor use even if it will be under cover.</p>
            <p>Then think about the circuit and the switching. An outdoor entertaining area that gains fans usually also wants lighting, weatherproof powerpoints and sometimes heating, and those together are more than an existing outdoor light circuit was built for. It is much cheaper to allow for that in one visit than to add each piece separately. More on our <a href="/ceiling-fan-installation-adelaide">ceiling fan installation</a> page, and on what we do locally on our <a href="/electrician-ridgehaven">Ridgehaven electrician</a> page.</p>
        `,
        cta: {
            heading: 'Want to Actually Use Your Outdoor Area?',
            description:
                'Fans, lighting, weatherproof power and heating, sized and wired for an outdoor space. JPD Complete Electrical covers Ridgehaven and the north-eastern suburbs.',
            linkText: 'Get a Quote',
            href: '/contact',
        },
    },
    {
        slug: 'hot-water-unit-powerpoint-greenwith',
        title: 'Hot Water Unit Powerpoint in Greenwith',
        metaDescription:
            'A weatherproof powerpoint installed for a new instantaneous gas hot water unit in Greenwith, where there was no power supply anywhere near it.',
        excerpt:
            'A new continuous flow gas hot water unit needs power to run. This one had none anywhere near it, which surprises most people.',
        date: '2026-08-15',
        author: 'Justin',
        category: 'Recent Work',
        image: '/images/hot_water_powerpoint_greenwith.webp',
        services: ['powerpoint-installation-adelaide'],
        suburb: 'electrician-greenwith',
        content: `
            <h3>Why This Matters to You</h3>
            <p>Here is the thing that catches people out when they replace a hot water system: a gas unit needs electricity.</p>
            <p>This job in Greenwith was a weatherproof powerpoint for a brand new instantaneous gas hot water unit, in a spot where there was no power supply anywhere nearby. Straightforward work, but it is the single most common reason a hot water changeover stalls on the day.</p>

            <h3 id="why-gas-needs-power">Why a Gas Unit Needs a Powerpoint</h3>
            <p>An old gas storage system typically ran on a standing pilot light. A small flame burned continuously, so when the thermostat called for heat there was already a flame to light the burner. No electricity involved anywhere.</p>
            <p>A continuous flow unit works differently. There is no stored tank and no pilot. When you turn on a hot tap, the unit senses the flow, opens the gas, ignites electronically and modulates the burner to hold the temperature you asked for. All of that sensing, ignition and control needs power.</p>
            <p>So the moment you go from an old storage unit to a continuous flow one, you need a powerpoint in a place that has probably never had one, on the outside of the house. That is not a fault in the new unit. It is just a consequence of how it works, and nobody mentions it when you are choosing between models.</p>

            <h3 id="whose-job">It Is Not the Plumber's Job</h3>
            <p>Your plumber installs the unit, connects the gas and does the water. The powerpoint is electrical work and needs a licensed electrician.</p>
            <p>That split is where changeovers go wrong. The plumber arrives, removes the old unit, mounts the new one, and then finds there is nothing to plug it into. Now you have no hot water and you are waiting on a second trade, which can easily be days.</p>
            <p>If you are replacing a hot water system, ask one question up front: does the new unit need power, and is there a suitable outlet where it is going? If the answer to the first is yes and the second is no, book both trades for the same day or get the outlet in beforehand.</p>

            <h3 id="weatherproofing">Outside Means Weatherproof</h3>
            <p>Hot water units live on an external wall, so the outlet is a weatherproof one with a sealing lid rather than an ordinary indoor point, and it is on an RCD-protected circuit like any other outlet.</p>
            <p>Position takes a bit of thought. It has to be reachable so the unit can actually be unplugged and isolated for service, clear of the flue and the hot parts of the casing, and clear of the gas fittings and the water connections. Far enough away to be sensible, close enough that the unit's own lead reaches without strain, which usually means agreeing the spot with the plumber before anything is mounted.</p>

            <h3>If Your Hot Water Is on Its Way Out</h3>
            <p>Hot water systems rarely fail conveniently. If yours is getting old, it is worth finding out now what a replacement would need, because the decision usually gets made in a hurry on a cold morning.</p>
            <p>Two minutes of checking, whether there is an outlet near the unit and whether it is weatherproof, is the difference between a one-day changeover and a three-day one. More on this kind of work is on our <a href="/powerpoint-installation-adelaide">powerpoints and extra circuits</a> page, and on what we cover locally on our <a href="/electrician-greenwith">Greenwith electrician</a> page.</p>
        `,
        cta: {
            heading: 'Replacing a Hot Water System?',
            description:
                'Get the outlet sorted before the plumber arrives rather than after. JPD Complete Electrical covers Greenwith and the north-eastern suburbs.',
            linkText: 'Book an Electrician',
            href: '/contact',
        },
    },
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
