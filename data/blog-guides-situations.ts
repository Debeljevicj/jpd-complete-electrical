import type { BlogPost } from './blog-posts';

/**
 * Situation guides. Each one is written for a homeowner (or tenant) in a
 * specific spot: cold shower, new pool, rental with a fault, garage becoming a
 * room. Titles and opening lines match how people search, and the regulatory
 * claims were checked against SA Power Networks, CBS, the SA Law Handbook,
 * PlanSA, the MFS and the state electrical regulators' published guidance.
 */
export const situationGuides: BlogPost[] = [
    {
        slug: 'electric-hot-water-not-working-electrical-side-adelaide',
        title: 'Electric Hot Water Not Working? The Electrical Side Explained',
        seoTitle: 'Electric Hot Water Not Working in Adelaide | JPD',
        metaDescription:
            'Electric hot water not working in Adelaide? How controlled load (off-peak), elements, thermostats and tripped breakers cause cold showers, and who fixes which.',
        excerpt:
            'Cold shower, power\'s on, no leak. Most of the time it\'s one of four things, and two of them aren\'t faults at all. Here\'s how the electrical side of your hot water actually works.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Troubleshooting',
        image: '/images/hot_water_powerpoint_greenwith.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>If your electric hot water isn't working and the rest of the house has power, the cause is usually one of four things: the controlled load window hasn't run yet, the breaker has tripped, the element has failed, or the thermostat has cut out. Two of those you can check from the switchboard. The other two need someone with a licence.</p>
            <p>Getting it wrong costs you in a couple of ways. Ring a plumber for an element and you can pay a callout to be told it's electrical. Keep resetting a breaker that trips on a hot water circuit and you can be feeding power into a tank that's leaking water onto live terminals. And if your unit is on controlled load and you don't know it, you'll spend money chasing a fault that's actually a tariff.</p>

            <h3>What Controlled Load (Off-Peak) Actually Is</h3>
            <p>Most electric storage hot water systems in Adelaide run on a controlled load tariff. SA Power Networks describes it as a secondary circuit on your meter that supplies power for a limited number of hours each day, at a lower rate, for appliances like hot water and underfloor heating. Your hot water isn't connected to your normal power circuits. It's connected to that controlled circuit, and the meter decides when it's energised.</p>
            <p>Who sets the hours depends on your meter. With a smart (interval) meter, your retailer sets them. With an older accumulation meter, a clock inside the meter is set once and doesn't change. From 1 July 2025 the SA Power Networks off-peak window is 11:30pm to 6:30am, and there's also a daytime "solar sponge" period from 9:30am to 4:30pm, which some retailers use for hot water now that the grid is awash with rooftop solar in the middle of the day.</p>
            <p>The practical consequence: a controlled load tank heats during its window, then coasts. A big family shower run the night before, a blackout during the heating window, or a cold snap that pulls more heat out of the tank, and you're cold by morning through no fault of the unit. Many tanks have a boost switch for exactly this. Boosting outside the window is charged at the normal rate, and the meter and its switching relay belong to your retailer's metering provider, not to you or to us, so changes to the schedule go through the retailer.</p>

            <h3>Why the Water's Cold in the Morning</h3>
            <ul>
                <li><strong>Controlled load window.</strong> If the water's cold some mornings and fine others, especially after heavy use or a blackout, suspect the window first. Check whether your bill shows a controlled load or off-peak line. If it does, try the boost before ringing anyone.</li>
                <li><strong>Tripped breaker.</strong> Look at the switchboard for a breaker labelled hot water, HWS or off-peak. If it's off, switch it back on once. If it holds, you've had a one-off. If it trips again, stop. A hot water circuit that trips repeatedly is the classic sign of an element that has corroded through and is letting water into the terminal cover.</li>
                <li><strong>Failed element.</strong> The element is a resistance heater that sits in the water. They scale up and eventually burn out or split, which is why a tank that's been fine for years suddenly produces lukewarm or cold water with no trip and no leak.</li>
                <li><strong>Thermostat cut-out.</strong> The thermostat has an over-temperature cut-out that opens if the water gets too hot. It can be reset, but it sits behind the electrical cover with live terminals, and it tripped for a reason. A cut-out that keeps opening usually means the thermostat itself is failing or the element is leaking to earth.</li>
            </ul>
            <p>Don't open the electrical cover on a storage tank yourself. In South Australia, that's electrical work.</p>

            <h3>Plumber or Electrician for Hot Water Repairs?</h3>
            <p>The short version: water and gas are the plumber's, the wiring is ours, and the element and thermostat sit on the line. Leaks, relief valves, tempering valves and the tank itself are plumbing. The circuit, the isolator, the breaker and the connection at the unit are electrical. Elements and thermostats are electrical components, and in SA some plumbers hold a restricted electrical registration that covers servicing single-phase water heaters. Ask whoever you ring whether they're registered for it. If they aren't, they'll be calling us anyway.</p>
            <p>If the tank is leaking, ring a plumber first and switch the hot water breaker off while you wait. If the water's cold with no leak, the switchboard checks above will usually tell you which trade to ring.</p>

            <h3>Heat Pump Hot Water and Its Electrical Needs</h3>
            <p>A heat pump moves heat from the air into the water instead of generating it with an element, so it draws a fraction of the power of a resistive tank while it runs. That changes the electrical conversation.</p>
            <p>Some models are sold as plug-in units for a standard outdoor powerpoint. Others need a dedicated circuit. Either way the outlet or circuit needs to be weatherproof, RCD protected, and rated for the unit, and it should be checked against the spec sheet rather than assumed. Because heat pumps work best in warmer air, running them in the middle of the day makes more sense than overnight, and SA Power Networks notes this as a reason some customers prefer the daytime window for hot water. Most heat pumps have a built-in timer. Set it to the solar sponge hours, or to your own solar generation if you have panels, and the unit does its heating when power is cheapest.</p>
            <p>The question we get most often is whether a heat pump should stay on the old controlled load circuit. It can, but then it only runs when the meter says so, which may be overnight when the air is coldest and the unit is least efficient. Many people are better off on a general circuit with the unit's own timer doing the scheduling. That's a tariff decision as much as an electrical one, so look at your plan before the unit arrives.</p>

            <h3>Timers, Isolators and Replacing the Circuit</h3>
            <p>Every fixed hot water unit should have an isolating switch within reach so it can be worked on safely, and the circuit should be on a breaker that matches the cable and the unit. On older houses we regularly find hot water circuits with no local isolator, undersized cable from a previous "upgrade", or a breaker that has been swapped for a bigger one to stop nuisance tripping. None of those are fine.</p>
            <p>When a unit is replaced like for like, the plumber usually reconnects it to the existing circuit and that's the end of it. When the type changes, from a resistive tank to a heat pump or the other way, the circuit needs to be looked at. The load changes, the location might change, a plug-in unit needs an outlet rather than a hardwired connection, and the controlled load question above comes up. That's a short job if the switchboard has room and the cable is sound, and a bigger one if the board is full or the existing cable isn't up to it.</p>
            <p>What drives the cost is the same as any circuit work: distance from the switchboard, whether there's a spare way, the condition of the existing cable, and whether anything has to go underground or through a slab. The unit's spec sheet tells us most of it before we arrive.</p>
        `,
        faqs: [
            {
                question: 'How do I know if my hot water is on off-peak in South Australia?',
                answer: 'Look at your electricity bill for a separate line called controlled load, off-peak or dedicated circuit. If it\'s there, your hot water is switched by the meter rather than running all day. You can also look at the meter box: older installations often have a separate meter or a visible relay for the hot water, and the switchboard may have a breaker labelled off-peak. If you\'re still not sure, your retailer can tell you from your account.',
            },
            {
                question: 'Can I put my electric hot water on a timer to use my solar?',
                answer: 'Yes, if the unit is on a general power circuit rather than controlled load. A timer on the hot water circuit lets a resistive tank heat in the middle of the day from your own panels instead of overnight from the grid. Heat pumps usually have a timer built in. If the unit is on controlled load, the meter controls it and a timer won\'t override that, so moving it means a conversation with your retailer and a change at the switchboard by an electrician.',
            },
            {
                question: 'Why does my hot water run out faster in winter?',
                answer: 'Three things happen at once. The cold water coming into the tank is colder, so each litre takes more energy to heat and the element runs longer to get there. The tank loses more heat to the air around it, especially outside. And people take longer, hotter showers. On a controlled load unit the heating window is fixed, so if the tank can\'t recover inside that window you run short by the next morning even though nothing is broken.',
            },
            {
                question: 'Is it dangerous if my hot water system keeps tripping the safety switch?',
                answer: 'It\'s a sign that needs sorting rather than resetting. A storage tank that trips a safety switch or breaker repeatedly usually has an element that has corroded and is leaking current to earth, or water getting into the electrical cover. The safety switch is doing its job. Leave the breaker off, don\'t open the cover, and get the unit looked at. Keep resetting it and you\'re relying on the protection to keep catching a fault that\'s getting worse.',
            },
            {
                question: 'Does a heat pump hot water system need its own circuit?',
                answer: 'It depends on the model. Some heat pump units are designed to plug into a standard weatherproof 10 amp powerpoint, while others draw more and need a dedicated circuit from the switchboard. The spec sheet states which. Either way the supply should be RCD protected and rated for the unit, and a plug-in model shouldn\'t share a powerpoint with anything else or run through an extension lead. Check the requirement before you buy, because it changes what the electrician needs to do on the day.',
            },
        ],
        cta: {
            heading: 'Hot Water Circuit Need Looking At?',
            description:
                'Whether it\'s a breaker that won\'t hold, a new heat pump that needs a supply, or an old circuit with no isolator, we\'ll sort the electrical side and tell you straight if it\'s a plumber you need instead.',
            linkText: 'Book a Powerpoint or Circuit Job',
            href: '/powerpoint-installation-adelaide',
        },
    },
    {
        slug: 'pool-spa-electrical-safety-home-adelaide',
        title: 'Pool and Spa Electrical Safety at Home: What Adelaide Owners Should Check',
        seoTitle: 'Pool & Spa Electrical Safety at Home | JPD',
        metaDescription:
            'Pool and spa electrical safety at home: bonding in plain terms, safety switches for pumps and lights, portable spas, and what to do if you feel a tingle.',
        excerpt:
            'Water, bare feet and 240 volts is the worst combination in a house. Here\'s what bonding and safety switches actually do around a pool, what to check on an older install, and what a tingle in the water means.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Safety',
        image: '/images/pool_golden_grove.webp',
        gallery: [
            {
                src: '/images/switchboard_too_close_to_pool.webp',
                alt: 'A switchboard mounted too close to a backyard swimming pool',
                caption: 'A board this close to the water is the kind of thing an older pool install can carry for years without anyone questioning it.',
            },
            {
                src: '/images/pool_subboard_golden_grove.webp',
                alt: 'Weatherproof pool sub-board with safety switches and labelled circuits',
                caption: 'A dedicated pool sub-board: every circuit RCD-protected, labelled, and in a weatherproof enclosure away from the water.',
            },
            {
                src: '/images/pool_equipment_station_golden_grove.webp',
                alt: 'Pool pump and filter station wired with a weatherproof powerpoint and isolator',
                caption: 'Pump and equipment station with its own isolator and weatherproof outlet.',
            },
        ],
        content: `
            <h3>Why This Matters to You</h3>
            <p>Pool and spa electrical safety at home comes down to two things: everything metal near the water is bonded together, and every circuit feeding the pool is protected by a safety switch. Both exist because a person in water is the easiest possible path for electricity to take.</p>
            <p>The consequence of getting it wrong isn't a tripped breaker. Wet skin and bare feet drop your body's resistance, so a fault that would give you a jolt on dry carpet can lock your muscles in a pool. The Western Australian regulator's guidance lists the warning signs as tingling, muscle spasms and feeling stuck or unable to move, and the risk after that is drowning, not just shock. Electrical faults around pools are rare. They're also the kind of rare you can't afford.</p>

            <h3>Why the Rules Are Stricter Near Water</h3>
            <p>The Wiring Rules, AS/NZS 3000, treat pools and spas as a special location with their own section. Around a pool, the standard assumes someone is wet, barefoot, possibly a child, and in contact with the water and a metal rail at the same time. So it limits what electrical equipment can be near the water, demands extra protection on what is, and requires the metalwork to be tied together electrically.</p>
            <p>That's the thinking behind every rule below. None of it is red tape.</p>

            <h3>Equipotential Bonding in Plain Terms</h3>
            <p>Bonding means connecting the metal items around the pool to each other and to the earthing system of the house with a dedicated conductor. The regulator guidance published for the Wiring Rules describes it as metal within arm's reach of a bather: fencing, handrails, ladders, light fittings, gates, diving board frames, and the steel reinforcing inside a concrete pool shell.</p>
            <p>The point isn't to carry fault current away. It's to make sure that if a fault does appear, everything you could touch at once sits at the same voltage, so there's no difference for current to flow through you. Equal potential, hence the name. It's why the pool steel has to be connected before the concrete is poured and why the electrician should be involved at the design stage, not after the paving is down. Bonding a finished pool properly can mean lifting pavers to reach the shell steel.</p>

            <h3>Safety Switch Protection for Pumps, Lights and Heaters</h3>
            <p>Every circuit that supplies the pool area needs RCD protection, and a 30 mA safety switch is the standard tool. Regulator guidance for the Wiring Rules puts it as protecting circuits that supply earthed equipment such as metal-bodied pump motors, which is exactly the equipment most likely to let a fault reach the water through the plumbing.</p>
            <p>The approach we take is one circuit per piece of equipment, each with its own protection, rather than the pump, lights, chlorinator and heater sharing one safety switch. Pool gear lives outside in UV and water and develops small leakage over time. Share one safety switch across the lot and the first fitting to get damp trips everything, including the pump, and you find out when the water goes green. Separate circuits mean a fault trips the one thing with the fault. There's a worked example in our <a href="/blog/pool-power-supply-subboard-golden-grove/">Golden Grove pool subboard write-up</a>.</p>

            <h3>Pool Lights and Extra-Low Voltage</h3>
            <p>A light sitting in the pool water is the piece of equipment closest to a swimmer, so it gets the strictest treatment. Modern underwater pool lights are almost always extra-low voltage, typically 12 volts, fed from a transformer that sits well away from the water and isolates the light from the 240 volt supply entirely. A failed 12 volt light fitting is a nuisance. A failed 240 volt one in a pool is the scenario everything above is designed to prevent.</p>
            <p>If you have an older pool with lights and no idea what voltage they run at, or a transformer mounted somewhere damp and close to the water, that's one of the first things worth checking.</p>

            <h3>Where the Pump and Powerpoint Can Go</h3>
            <p>The Wiring Rules divide the area around a pool into zones with specific distances, and what's allowed depends on which zone you're in. We won't quote the dimensions here because they vary with the fitting and the situation, and this is a design question for the electrician rather than a tape-measure job for the owner. The principle is simple: fixed equipment and general powerpoints sit outside the zone a swimmer could reach, equipment that has to be closer is specifically rated and protected for it, and nothing plugs in beside the water.</p>
            <p>Royal Life Saving's home pool advice makes the same point in plainer language, keeping electrical equipment and leads well back from the edge and knowing where the switch is that shuts the pump off. Every adult who uses the pool should know where that isolator is before anyone swims.</p>

            <h3>Portable Spas: Plug-In or Hardwired</h3>
            <p>Portable spas get sold as plug-and-play, which is true up to a point. Smaller spas with a 10 amp plug can run from a dedicated outdoor weatherproof powerpoint on an RCD-protected circuit. A spa with a 15 amp plug needs a 15 amp outlet, which has a wider earth pin so it physically can't go into a normal socket, and that outlet needs its own circuit. Larger spas have no plug at all and are hardwired by an electrician.</p>
            <p>What doesn't change: no extension leads, no double adaptors, no sharing the circuit with the garage freezer, and the spa's electrical connection kept clear of the splash. A spa heater and pump cycling for hours is a sustained load, and the lead supplied with the spa sets how far from the outlet it can sit. Put the outlet in before the spa is delivered, not after it's sitting on the deck with a lead that won't reach.</p>

            <h3>What to Check on an Older Pool Install</h3>
            <ul>
                <li><strong>Is there a safety switch on the pool circuits at all?</strong> Pools wired before RCDs were required may have none, or one shared across everything.</li>
                <li><strong>Is the metalwork bonded?</strong> Look for a green and yellow conductor connected to the fence posts, ladder base or handrail fixings. If you can't find one, ask.</li>
                <li><strong>What are the pool lights running on?</strong> Find the transformer and check where it's mounted and whether it's sound.</li>
                <li><strong>How's the pump wired?</strong> A lead running across the lawn from a house powerpoint is the most common thing we're called to fix, and it isn't a legal way to supply fixed equipment.</li>
                <li><strong>When was the safety switch last tested?</strong> Pressing the test button is the owner's job. A proper trip-time test is ours.</li>
            </ul>

            <h3>Signs Something's Wrong</h3>
            <p>A tingle in the water, a tingle touching the ladder or rail, a pump that keeps tripping, an underwater light that flickers or works intermittently, or a shock from a tap or metal fitting anywhere near the pool. Any of these means the pool is off limits until it's been tested.</p>
            <p>If you feel a tingle: get out, and if you can, get out away from metal ladders and rails. Get everyone else out. Switch the pool equipment off at the isolator or the switchboard. Don't use the pool again until an electrician has tested it. If someone is in the water and can't get out, don't go in after them. Kill the power first, reach them with something non-conductive, and ring 000.</p>
        `,
        faqs: [
            {
                question: 'Can a pool pump run on off-peak or controlled load in South Australia?',
                answer: 'Often, yes. Controlled load tariffs in South Australia apply to appliances connected to the controlled circuit on the meter, and pool pumps are among the loads retailers commonly allow on it alongside hot water and underfloor heating. The trade-off is that the pump then only runs when the meter energises that circuit, which has to line up with how long your pool needs to filter each day. Check with your retailer whether your plan allows it and what hours apply before an electrician rewires the pump circuit.',
            },
            {
                question: 'How often should pool electrical equipment be checked?',
                answer: 'Press the test button on the safety switch protecting the pool circuits regularly, at least every few months, and have the whole pool installation properly tested by an electrician periodically and whenever something changes, such as a new pump, heater or lights. Pool equipment lives in the worst conditions in the house: UV, chlorine, water and heat. Leads, plug tops and transformer housings deteriorate faster there than anywhere else, so a yearly look at the equipment station is worth it.',
            },
            {
                question: 'Why does my pool pump trip the safety switch when it rains?',
                answer: 'Because water is getting into something it shouldn\'t. Rain finding its way into a pump terminal cover, a cracked plug top, a chlorinator power supply or an underwater light fitting creates a small current leak to earth, and a 30 mA safety switch is designed to trip on exactly that. It isn\'t being oversensitive. Have the equipment looked at rather than swapping the safety switch for a less sensitive one, which is not an acceptable fix on a pool circuit.',
            },
            {
                question: 'Do I need an electrician for an inflatable or above-ground pool pump?',
                answer: 'For the pump itself, usually not, because it plugs in. But where it plugs in matters. It needs an outdoor powerpoint on a safety-switch-protected circuit, not an extension lead from inside the house, and the lead and plug need to be kept away from the water and checked for damage. Royal Life Saving\'s portable pool advice is to keep electrical equipment at least two metres from the pool edge. If you don\'t have a suitable outdoor powerpoint, that\'s the job for an electrician.',
            },
            {
                question: 'Does a spa on a deck or balcony need to be bonded?',
                answer: 'If there\'s fixed metalwork within reach of someone in the spa, the same equipotential bonding principles under the Wiring Rules apply as they do to a pool, and the electrician doing the connection will assess what needs tying in. A fully self-contained portable spa in a plastic shell on a timber deck has less to bond than an in-ground spa in a tiled surround with metal handrails and a steel-reinforced concrete shell. It\'s a site-specific call, which is why the spa supplier\'s instructions and the electrician both need to be involved.',
            },
        ],
        cta: {
            heading: 'Not Sure Your Pool Wiring Is Safe?',
            description:
                'A tingle, a pump that trips, or an older pool with no visible safety switch are all worth a proper test rather than a guess. We test the RCDs, check the bonding and tell you what, if anything, needs fixing.',
            linkText: 'Book Safety Switch Testing',
            href: '/rcd-testing-safety-switches-adelaide',
        },
    },
    {
        slug: 'renting-sa-electrical-problems-tenant-rights',
        title: 'Renting in SA: What You Can and Can\'t Do About Electrical Problems',
        seoTitle: 'Tenant Electrical Repairs in SA: Your Rights | JPD',
        metaDescription:
            'Tenant rights on electrical repairs in SA: what the landlord must fix, when you can arrange repairs yourself under the Tenancies Act, and how to report faults.',
        excerpt:
            'A powerpoint that sparks, a safety switch that won\'t reset, a smoke alarm chirping at 3am. Here\'s what the landlord has to fix, what you\'re allowed to touch yourself, and how to report a fault so it actually gets done.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Advice',
        image: '/images/residential_switchboard_upgrade_2.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>If you rent in South Australia, your landlord has to keep the property's electrical installation in reasonable repair, and you can't legally do fixed-wiring work yourself. That's the whole position in one sentence. The rest of this is how to use it.</p>
            <p>The consequence of not knowing where you stand is that faults sit. Tenants put up with a dead circuit because they think they'll be charged for it, or they fix it themselves and end up liable, or they report it once by text and nothing happens. Meanwhile a safety switch that won't reset or a powerpoint that's going brown is the same hazard in a rental as it is anywhere else. Electricity doesn't check the lease.</p>

            <h3>What the Landlord Has to Fix</h3>
            <p>Section 68 of the Residential Tenancies Act 1995 puts a term into every SA tenancy agreement: the landlord must keep the premises in a reasonable state of repair, judged by the age and character of the place, and comply with the statutory requirements that apply to it. The electrical installation is part of the premises, so the wiring, switchboard, powerpoints, light fittings, hardwired smoke alarms and any appliances that came with the property are the landlord's to maintain.</p>
            <p>There's a catch that matters: the landlord isn't in breach until they know about the problem and then fail to act with reasonable diligence. Reporting the fault is what starts the clock, which is why how you report it matters, below.</p>
            <p>Since 1 July 2024 the Act also requires premises to meet prescribed minimum housing standards at the start of a tenancy. Consumer and Business Services (CBS) and the SA Law Handbook are the places to check what those standards cover for your situation.</p>

            <h3>When You Can Arrange Repairs Yourself</h3>
            <p>Section 68(3) lets a tenant arrange repairs and recover the cost from the landlord, but every one of these conditions has to be met:</p>
            <ul>
                <li>You didn't cause the problem</li>
                <li>It's likely to cause undue inconvenience or injury to you, or damage to your belongings</li>
                <li>You told the landlord, or made reasonable attempts to</li>
                <li>The landlord failed to carry out the repair</li>
                <li>The work is done by a person licensed for that work, who gives the landlord a report on what was done and the apparent cause</li>
            </ul>
            <p>That last point is the one that catches people. You can't get a mate to do it and claim the cost. For electrical work that means a licensed electrical contractor, and the report they provide is part of your claim. Keep the invoice, the report, and your record of trying to reach the landlord. If the landlord won't reimburse you, the South Australian Civil and Administrative Tribunal (SACAT) is where it gets decided, and the same tribunal can order compensation for losses caused by a failure to repair.</p>
            <p>We looked for a dollar cap on tenant-arranged repairs in SA and didn't find one in the Act or on the CBS site, so we won't quote one. Other states have caps and they get repeated online as if they apply here. Check CBS before you rely on a figure.</p>
            <p>CBS publishes a Request for Repairs form that cites section 68 and gives the landlord the two outcomes in writing: either they fix it, or you'll arrange a licensed tradesperson and apply to SACAT to recover the cost. The form itself says not to use it for urgent repairs, so for anything dangerous, phone the landlord or agent as well as putting it in writing.</p>

            <h3>Who Pays for What</h3>
            <p>The landlord pays for wear, age and faults that are nobody's doing: a failed safety switch, a powerpoint that's stopped working, a light fitting that's burnt out, old wiring that needs replacing. The tenant pays for damage they caused intentionally or negligently, including by their guests, under section 69. Knocking a powerpoint off the wall moving a fridge is yours. The powerpoint failing because it's thirty years old is theirs.</p>
            <p>Two grey areas come up constantly. A fault caused by a tenant's appliance, such as a faulty heater tripping the safety switch, is the appliance's problem, not the wiring's, and a landlord can reasonably push back on a callout that turns out to be your toaster. And a tripped breaker that you reset yourself isn't a repair at all. Before you report a trip, unplug what's on the circuit and reset it once. If it holds, it was an appliance. If it won't, report it.</p>

            <h3>Smoke Alarm Batteries</h3>
            <p>The Metropolitan Fire Service is clear that in a rental, the owner is responsible for installing and maintaining smoke alarms, and SA's rules require working alarms in every home. The MFS also suggests leases can set out routine tasks like battery changes as the tenant's responsibility, and many SA leases do exactly that. Read yours.</p>
            <p>Whatever the lease says, change a chirping battery rather than pulling the alarm off the ceiling. Replaceable batteries should be changed once a year or when the low-battery beep starts, and any alarm, battery or hardwired, should be replaced after ten years. A hardwired alarm that chirps may have a flat backup battery, and if a new battery doesn't stop it, that's a report to the landlord, because the alarm or its supply needs looking at. Older homes often have a single battery alarm; homes built since 1995 or sold since February 1998 in SA should have hardwired or ten-year lithium alarms. If yours don't, tell the landlord.</p>

            <h3>What Tenants May Legally Do Themselves</h3>
            <p>The SA Government's own guidance lists what someone with the right skills can do without a licence: replace a fuse and reset circuit breakers, test safety switches, change smoke detector batteries, replace light globes, install a TV or antenna, and clean solar panels. Everything that touches the wiring needs a licensed electrician, by law, in South Australia. That includes replacing a powerpoint or light switch, replacing a light fitting, and anything inside the switchboard beyond flicking a breaker.</p>
            <p>So as a tenant: reset the breaker, press the safety switch test button, change globes and batteries, and leave it there. If you do unlicensed work in a rental and something happens, you're exposed on every front, and the landlord's insurer will ask who did it.</p>

            <h3>How to Report a Fault So It Gets Fixed</h3>
            <p>Report in writing, to the agent or landlord, and keep a copy. Include what's happening, where, since when, and whether it's getting worse. Photos help. If it's a safety issue, say so in the first line and phone as well. These are the details that get a job booked on the first call instead of the third:</p>
            <ul>
                <li>Which circuit or room, and what else stops working at the same time</li>
                <li>Whether the breaker or safety switch trips, and whether it will reset</li>
                <li>Any smell, heat, discolouration, buzzing or sparks</li>
                <li>Whether anyone got a shock or tingle from anything, including taps</li>
                <li>What you've already tried (unplugged appliances, reset once)</li>
            </ul>
            <p>A sparking powerpoint, a switchboard that smells hot, a shock from a tap or appliance, or exposed wiring is urgent. Switch the circuit off if you can, don't use it, and chase it by phone the same day. If a landlord or agent won't act on a genuine hazard, CBS can advise and SACAT can order it, and a licensed electrician's report of the fault is the piece of evidence that carries weight.</p>
        `,
        faqs: [
            {
                question: 'Can my landlord make me pay for an electrician callout in South Australia?',
                answer: 'Only if the fault was caused by you, your household or your guests, or if the callout turns out to be for something that isn\'t a fault in the property, such as your own faulty appliance tripping the safety switch. Faults from age, wear or defects in the installation are the landlord\'s cost under the Residential Tenancies Act. If a landlord tries to pass on the cost of a genuine repair, keep the electrician\'s report, which will state the cause, and raise it with CBS or SACAT.',
            },
            {
                question: 'Can a tenant get the switchboard upgraded or a safety switch installed in a rental?',
                answer: 'You can ask, and you can report the reasons, but the landlord decides on upgrades to their property. What you can insist on is repair: if a safety switch has failed, won\'t reset, or the board has a fault, that\'s a repair the landlord must carry out. If the property has no safety switch at all, raise it in writing, because the cost of fitting one is small against the risk, and the landlord\'s insurer and CBS\'s minimum standards guidance are both worth mentioning.',
            },
            {
                question: 'What should I do if I get a shock from a tap or appliance in a rental?',
                answer: 'Stop using it, switch the circuit off at the switchboard if you can identify it, keep everyone away from the tap or appliance, and report it to the landlord or agent by phone straight away, then in writing. A shock from a tap can indicate a fault in the earthing or a neutral problem on the property or the network. If anyone was hurt or it\'s ongoing, treat it as an emergency and also ring SA Power Networks on 13 13 66, because they can check their side of the supply.',
            },
            {
                question: 'Does my landlord have to fix a light fitting or ceiling fan that came with the rental?',
                answer: 'Yes. Fittings and appliances that were part of the property when you moved in are part of what the landlord has to keep in reasonable repair, and you can\'t legally replace a hardwired light fitting or ceiling fan yourself in South Australia. Report it in writing. The exception is damage you caused, which is yours to pay for. If the landlord is a registered community housing provider, the regulations exempt some items such as ceiling fans and air conditioners from the repair obligation, so check your lease.',
            },
            {
                question: 'Is the landlord responsible for the electricity meter or the wires from the street?',
                answer: 'Neither, strictly. The meter belongs to the retailer\'s metering provider and the service line from the street to the point of attachment on the house is SA Power Networks\' responsibility. Everything from the point of attachment into the house, including the consumer mains, switchboard and wiring, is part of the property and the landlord\'s to maintain. If the whole street is out, ring SA Power Networks on 13 13 66. If only your place is out and the main switch is on, that\'s a report to the landlord.',
            },
        ],
        cta: {
            heading: 'Property Manager or Landlord With a Fault to Fix?',
            description:
                'We work with property managers and landlords across Adelaide, give a written report on every fault we attend, and tell the tenant plainly what we found. If you\'re a tenant, send this page to your agent.',
            linkText: 'Get in Touch',
            href: '/contact',
        },
    },
    {
        slug: 'garage-conversion-granny-flat-electrical-adelaide',
        title: 'Converting a Garage, Adding a Home Office or Building a Granny Flat: The Electrical Side',
        seoTitle: 'Granny Flat & Garage Conversion Electrical | JPD',
        metaDescription:
            'Granny flat electrical requirements and garage conversion wiring in Adelaide: circuits, powerpoints, data, sub-boards, smoke alarms and approvals.',
        excerpt:
            'A garage has one light and one powerpoint. A room someone lives or works in needs a lot more than that, and the switchboard has to be able to give it. Here\'s what to plan before the plasterboard goes on.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Renovations',
        image: '/images/hex_led_lighting_garage_fairview_park.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>Granny flat electrical requirements, and the same goes for a garage conversion or a new home office, come down to this: a habitable room needs its own properly protected circuits, enough powerpoints and data for how it'll actually be used, lighting designed for the room, smoke alarms, and a switchboard with the capacity to feed all of it. Most garages were wired for a light and a door opener. That's the gap you're closing.</p>
            <p>Get it wrong and you end up with a room that trips the house every time the heater and the kettle run together, powerboards daisy-chained across a floor someone sleeps on, and a conversion you can't get signed off because the smoke alarms weren't done. Worst case, in South Australia, building without the right approval carries serious penalties and the work can't legally be occupied. Plan the electrical early and none of that happens.</p>

            <h3>Does It Need Approval?</h3>
            <p>For a granny flat, yes, always. PlanSA calls it ancillary accommodation: a secondary dwelling on the same site as an existing house, with no more than two bedrooms, which can be self-contained. Development approval is required regardless of size, in two parts. Planning consent looks at siting and effect on neighbours. Building consent checks the structure meets the National Construction Code as a habitable building, including connection to water, wastewater and electricity. Applications go through the PlanSA portal, and councils we've checked quote a maximum penalty in the order of $120,000 for building without approval or contrary to one. Since late 2023, SA has also made it clear an approved granny flat can be rented to anyone, not just family.</p>
            <p>For a garage conversion or a home office inside the existing footprint, the position is less black and white. A garage is classed as a non-habitable space and a bedroom or study is habitable, so turning one into the other is generally a change the building rules care about, with things like ceiling height, natural light, ventilation and damp-proofing coming into play, and sometimes car parking in planning terms. We're not building certifiers. Ask your council or a private certifier before you start, and get it in writing. It's a phone call that saves a lot of grief when you sell.</p>

            <h3>Working Out the Load</h3>
            <p>Before anything is wired, we work out what the space is going to draw. For a home office: a computer or two, monitors, a printer, lighting, and almost certainly a split system. For a granny flat: all of that plus a kitchen, which means an oven or cooktop, a fridge, a kettle, a microwave, maybe a dishwasher, a hot water unit, a bathroom with a heat lamp, and a washing machine. That's a small house, and it needs to be treated like one.</p>
            <p>The split system is the one people forget. An air conditioner wants its own circuit, and a granny flat kitchen with an electric cooktop wants a dedicated circuit too, usually a heavier one. Add those to what the main house already draws on a January evening and the question becomes whether the existing supply and switchboard can carry it.</p>

            <h3>Can the Switchboard Take It?</h3>
            <p>This decides the shape of the job. We look at the main switch rating, the consumer mains, how many ways are free in the board, whether the existing protection is RCDs or old fuses, and whether the board is in a condition to add to at all. A newer board with spare ways and a sound supply can take a sub-main out to the new space with no drama. A board that's full, or still on ceramic fuses, needs upgrading first, and in that case the conversion is the trigger for work the house needed anyway. Our <a href="/blog/switchboard-full-no-spare-ways-adelaide/">full switchboard guide</a> goes into what that involves.</p>
            <p>If the house is single phase, as most in our area are, the total load of house plus flat has to fit inside that supply. Load management and sensible appliance choices usually make it work. A supply upgrade is the expensive last resort, not the first option.</p>

            <h3>A Sub-Board in the New Space</h3>
            <p>For a detached granny flat or a garage at the far end of the block, running one correctly sized sub-main and putting a small switchboard in the new space beats running six separate circuits from the house. Everything the flat needs is switched and protected where it's used, a fault in the flat trips the flat rather than the house, and there's room to add to it later. The sub-main is sized for the distance as well as the load, because a long run to the back of a block loses voltage, and a motor or compressor fed on low voltage runs hot and dies early. If it's going underground, it goes in conduit at the required depth, and that trench is dug before landscaping, not after.</p>
            <p>For an attached garage or an office in a spare room, individual circuits from the main board are usually fine, provided the board has room.</p>

            <h3>Powerpoints, Data and Lighting</h3>
            <p>Plan powerpoints for how the room will be used, not for the minimum. An office wants a cluster of outlets where the desk goes, including a double at desk height, plus a few around the room for a printer, a heater, a lamp and a charger. A granny flat bedroom wants doubles both sides of the bed and one for a TV. A kitchen wants outlets above the bench at intervals, dedicated ones for the fridge and microwave, and whatever the oven and cooktop need. Powerboards on the floor are what you get when this step is skipped.</p>
            <p>Run data while the walls are open. A hardwired ethernet point to the desk is more reliable than Wi-Fi through two brick walls and a garage door, and a point for a Wi-Fi access point in a detached flat solves the signal problem permanently. Data cabling has its own registration requirement, so check whoever runs it is registered for it.</p>
            <p>Lighting is where a garage conversion most often still looks like a garage. One batten in the middle of the ceiling becomes a layout of downlights or panels suited to the room, switched sensibly, with a two-way switch if the room has two doors. For an office, aim for even light across the desk without glare on the screen. For a flat, plan it room by room the way you would in a house.</p>

            <h3>Smoke Alarms for a Habitable Room</h3>
            <p>Smoke alarms are part of the building consent for new habitable space in SA, and the certifier or council checks them before a Certificate of Occupancy is issued for an addition. PlanSA's advice is that since 1 May 2014, alarms in new dwellings and in new additions have to be interconnected, so when one sounds they all sound, and alarms in a later extension connect to alarms in extensions approved after that date. Hardwired alarms with battery backup are the norm for anything on mains power. In a granny flat that means alarms in or near the bedroom and in the path to the exit, wired on a circuit and interconnected, not a battery unit stuck to the ceiling the week before inspection.</p>

            <h3>Heating, Cooling and Hot Water</h3>
            <p>A split system is almost always the answer for a converted garage or office, and it needs its own circuit and an isolator at the outdoor unit. Position the outdoor unit with the electrical run and the neighbours in mind. For a granny flat, hot water is a decision in itself: a small electric storage unit, a continuous flow gas unit that still needs a powerpoint, or a heat pump, each with different supply needs. Decide before the slab is poured, because the circuit and the position both depend on it.</p>

            <h3>Paperwork at the End</h3>
            <p>Every piece of electrical work gets a Certificate of Compliance for Electrical Work, and for a new dwelling or a significant addition the installation is tested in full before it's connected. Keep that certificate with your building approval. It's what proves the flat was wired by someone licensed when you come to rent it, insure it or sell the property.</p>
        `,
        faqs: [
            {
                question: 'Does a granny flat need its own electricity meter in South Australia?',
                answer: 'Not necessarily. An ancillary dwelling can be fed as a sub-circuit from the main house switchboard, through a sub-main to its own sub-board, with the power going through the house\'s meter. A separate meter and account means a separate connection arranged through a retailer and SA Power Networks, which adds cost and process, and whether it\'s even available depends on how the land and dwelling are classed. If you plan to rent the flat out and want the tenant billed directly, talk to your retailer early, because a private sub-meter has its own rules for on-charging electricity.',
            },
            {
                question: 'Can I run power to a granny flat from the house with an extension lead or a long cable?',
                answer: 'No. A dwelling needs a fixed, permanent supply installed by a licensed electrician: a correctly sized sub-main, protected at the house switchboard, run overhead or underground in conduit at the required depth, and terminating in a switchboard or isolator at the flat. An extension lead or a flexible cable through a window isn\'t a legal or safe supply for a building people live in, won\'t pass a building inspection, and gives you no protection if it\'s damaged by a mower or a shovel.',
            },
            {
                question: 'How many powerpoints should a home office have?',
                answer: 'Plan for the equipment you own now plus half again. A typical desk setup runs a computer, two monitors, a dock, a lamp, a phone charger and a printer, so a bank of two or three doubles at desk height on the desk wall is a sensible starting point, with another double on each remaining wall for a heater, a second desk or a fan. Add a data point beside the desk outlets. Powerpoints are cheap while the wall is open and expensive once it\'s painted.',
            },
            {
                question: 'Will converting my garage mean I lose power to the garage door and the rest of the house?',
                answer: 'Only briefly. Adding circuits to an existing switchboard means isolating the board while the new breakers go in and the connections are made, which is usually a short outage rather than a day. If the board has to be upgraded first, expect the power to be off for most of that day. The garage door opener circuit, if it\'s staying, is kept or re-fed as part of the new layout, and anything feeding the house from that garage wall is identified and preserved before anything is cut.',
            },
            {
                question: 'Does a granny flat need its own safety switch?',
                answer: 'Every circuit supplying it needs RCD protection, which is the same rule as a new house. Where that protection sits depends on the design. With a sub-board in the flat, the circuits are protected there, which also means a fault in the flat trips the flat and not the main house. With circuits fed directly from the main board, the safety switches are in the main board. What you shouldn\'t end up with is a flat protected by a single old safety switch shared with half the house, so a trip in the kitchen takes out the bedroom lights.',
            },
        ],
        cta: {
            heading: 'Planning a Conversion or Granny Flat?',
            description:
                'The electrical plan is cheapest to get right before the walls are closed. We\'ll look at your switchboard, work out the load and give you a clear picture of what the space needs.',
            linkText: 'Talk to a Renovation Electrician',
            href: '/renovation-electrician-adelaide',
        },
    },
];
