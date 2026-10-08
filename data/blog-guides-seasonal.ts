import type { BlogPost } from './blog-posts';

/**
 * Seasonal guides. Each one targets a question Adelaide homeowners ask at a
 * particular time of year (pre-summer, winter, storm season, December), where
 * the honest answer differs for South Australia and a local tradesperson can
 * say something the national content sites don't.
 */
export const seasonalGuides: BlogPost[] = [
    {
        slug: 'prepare-home-electrics-adelaide-summer',
        title: "Getting Your Home's Electrics Ready for an Adelaide Summer",
        seoTitle: 'Home Electrics Ready for Adelaide Summer | JPD',
        metaDescription:
            'Get your home electrics ready for an Adelaide summer: air con on older switchboards, heatwave tripping, garage fridges, pool pumps and the pre-summer check.',
        excerpt:
            'The first 40 degree week is when Adelaide switchboards get found out. Here is what fails, why it fails in the heat specifically, and what to sort in October rather than in January.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Maintenance',
        image: '/images/outdoor_strip_heaters_golden_grove.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>Getting your home's electrics ready for summer in Adelaide comes down to one question: can your switchboard and circuits carry the load you're about to put on them for days at a stretch? Most of the year a tired board gets away with it. In a heatwave it doesn't, and the failure shows up at the worst possible time.</p>
            <p>The real consequence of skipping this isn't a tripped breaker. It's the air conditioner dropping out at 3 pm on the third day of a 40 degree run, when every electrician in the city is already booked, the freezer in the garage is thawing, and the switchboard is too hot to reset without it tripping again. A fair share of our January emergency calls are things that would have been a quiet half hour in October.</p>

            <h3>Why Heat Is Different From Any Other Load</h3>
            <p>Electrical equipment is rated to carry current at a certain temperature. Push the ambient up and the margin shrinks. A circuit breaker in a west-facing meter box in full sun can be well above 50 degrees before you've switched anything on, and breakers trip sooner when they're hot. Cables in a 60 degree roof space can't shed heat the way the tables assume.</p>
            <p>At the same time the load goes up. The air conditioner runs flat out instead of cycling, the fridge compressor barely stops, and the pool pump runs twice as long. Everything marginal becomes a problem at once, which is why a house can be fine for years and then trip three times in one week.</p>
            <p>It isn't just inside your fence. SA Power Networks postpones non-critical planned work in extreme heat if it can't be confident of restoring supply before the local temperature hits 37 degrees, and heat-related network faults in South Australia have historically come from prolonged air conditioning demand overloading street transformers. The grid is working hard too, which is one more reason not to have your own installation on the edge.</p>

            <h3>Air Conditioner Tripping the Power in the Heat</h3>
            <p>If your air conditioner trips the power in hot weather, there are usually three suspects.</p>
            <ul>
                <li><strong>It's sharing a circuit.</strong> A split system installed properly gets its own circuit from the board. Older or cheaper installs sometimes hang off a power circuit that also feeds the kitchen or garage. Add a kettle and the breaker does its job.</li>
                <li><strong>The breaker or fuse is undersized or tired.</strong> Breakers wear with every trip. A unit that's been tripping for a couple of summers can start tripping below its rating. Ceramic fuse boards have the opposite problem: someone's fitted heavier fuse wire to stop the nuisance, and now nothing protects the cable.</li>
                <li><strong>A connection is loose.</strong> A loose terminal heats up under load, and heat loosens it further. It's the most common thermal camera find on a board that "only plays up in summer".</li>
            </ul>
            <p>A unit that trips the safety switch rather than the breaker is a different story. That points to moisture or insulation breakdown in the outdoor unit, and it needs a tradesperson, not a bigger breaker.</p>

            <h3>Older Switchboards and Ducted or Multi-Head Systems</h3>
            <p>A ducted system or a couple of large splits can be the biggest single load in the house. On a board with ceramic fuses, a single old safety switch, or no spare ways, there's often no clean way to add that load. We see boards where the air conditioner was wired into whatever fuse had room, which is exactly the setup that fails on day three of a heatwave.</p>
            <p>If you're installing or replacing air conditioning this spring, have the board looked at before the unit goes in, not after. What you don't want is to find out the board needs replacing when the unit's already on the wall and the first hot week is here.</p>

            <h3>Fridges and Freezers in a Hot Garage</h3>
            <p>Every fridge has a climate class on its rating plate. The common classes top out at 32 degrees (N), 38 degrees (ST) or 43 degrees (T) ambient. An uninsulated Adelaide garage with a roller door facing the afternoon sun goes past 43 degrees on a bad day. Above its rated ambient, a fridge isn't guaranteed to hold temperature, the compressor runs continuously, and the energy use climbs steeply.</p>
            <p>Electrically, that long continuous run is what matters. The fridge draws its full load for hours, the extension lead or double adaptor it's been living on gets warm, and the circuit it shares with the air conditioner or the workshop gets pushed. If the second fridge is staying, give it a proper powerpoint on a circuit that isn't already carrying the air conditioner, and keep it out of the hottest corner. If it only holds drinks, think about whether it needs to run through February at all.</p>

            <h3>Pool Pumps, Chlorinators and Outdoor Equipment</h3>
            <p>Pool equipment runs longer in summer and it lives outdoors with the sun, the sprinklers and the chemicals. Before the season, look at the pump's lead, plug and powerpoint for cracking, green corrosion or a cover that no longer closes. A hard-working chlorinator cell, a pump with a seized bearing, or a timer full of ants can all cause tripping that only shows up when the run time goes up.</p>
            <p>Pool and spa circuits have their own rules about safety switch protection and how close equipment can sit to the water. If yours was installed long ago, or the pump has been replaced with a bigger one, have that checked rather than assuming the original setup still covers it.</p>

            <h3>Ceiling Fans and Outdoor Entertaining</h3>
            <p>Fans are cheap to run and take real pressure off the air conditioner, which we've covered separately. The pre-summer job is simple: run each one on high and listen. Wobble, clicking or a new hum means a loose mount or a failing capacitor, and a loose fan is not one you want running over a bed all night.</p>
            <p>Alfresco areas are where the extension leads come out. The bar fridge, the fairy lights, the speaker and the outdoor fan all end up on one powerboard run through a window. Count up what's plugged in. A standard powerpoint and a standard powerboard are each good for 10 amps, about 2400 watts in total, and a bar fridge plus a couple of appliances gets close quickly. If you entertain outside every summer, an outdoor-rated powerpoint on its own circuit removes the problem rather than managing it.</p>

            <h3>Check the Safety Switches Before the Season</h3>
            <p>The South Australian Government's advice is to press the test button on your safety switches at least twice a year, and it suggests doing it when the clocks change for daylight saving. That's the start of October in SA, which makes it a natural pre-summer job. Press the button, confirm the switch snaps off, reset it. If one doesn't trip, or won't reset, stop using that circuit until it's looked at.</p>
            <p>The test button only proves the mechanism moves. It doesn't tell you the switch trips fast enough or at the right current, which is what a proper RCD test with an instrument measures. If your switches are more than a decade old or you've never had them tested properly, this is the time.</p>

            <h3>Bushfire Season and the Hills Face</h3>
            <p>If you're in the Hills, the Hills face suburbs or anywhere the CFS counts as a bushfire risk area, there's one more summer fact worth knowing. On Catastrophic fire danger days SA Power Networks has the power to switch off supply to reduce the risk of lines starting fires. It's rare, but the CFS advice is to plan for losing mains power during the Fire Danger Season rather than assume it stays on.</p>

            <h3>What a Pre-Summer Electrical Check Covers</h3>
            <ul>
                <li>Switchboard: tightness of main connections, signs of heat on breakers and busbars, condition of any ceramic fuses, whether the air conditioner has its own correctly rated protection</li>
                <li>Thermal imaging of the board under load, which finds the loose connections you can't see</li>
                <li>Safety switch test with an instrument: trip time and trip current on each RCD, not just the button</li>
                <li>Powerpoints and leads feeding fridges, freezers, pool equipment and outdoor areas</li>
                <li>Ceiling fans: mounting, balance and switch operation</li>
                <li>Meter box: seal, door, and whether sun or water is getting in</li>
            </ul>
            <p>None of that is complicated. It's just far easier in October than by torchlight in January.</p>
        `,
        faqs: [
            {
                question: 'Why does my air conditioner trip the power only on very hot days?',
                answer: 'Because the heat raises the load and lowers the margin at the same time. On a 40 degree day the compressor runs continuously instead of cycling, so it draws its full current for hours, while the breaker in a hot meter box trips sooner than it would at normal temperature. If the unit shares a circuit with other appliances, or a terminal has worked loose, that combination is enough to trip it. It\'s worth having the circuit and the board checked rather than resetting it all summer.',
            },
            {
                question: 'Can I run a second fridge in the garage over summer in Adelaide?',
                answer: 'You can, but check the climate class on the rating plate first. Most domestic fridges are rated for a maximum ambient of 32, 38 or 43 degrees, and an uninsulated Adelaide garage can go past that on a hot afternoon. Above its rating the fridge may not hold temperature and the compressor runs flat out. Electrically, give it a proper powerpoint rather than an extension lead, and avoid putting it on the same circuit as the air conditioner.',
            },
            {
                question: 'How often should I get the pool pump electrics checked?',
                answer: 'Have a look yourself at the start of each swimming season, and get an electrician to check it when anything changes or looks worn. You\'re looking for a cracked lead or plug, corrosion on the powerpoint, a weatherproof cover that no longer shuts, and signs of insects or water inside the timer or control box. Because pool equipment is outdoors and near water, the safety switch protecting that circuit matters more than most, so test it along with the others.',
            },
            {
                question: 'Does an old switchboard use more power in summer?',
                answer: 'No, a switchboard doesn\'t consume meaningful power itself, old or new. What an old board does is fail under summer load. Worn breakers trip below their rating, loose connections heat up, and ceramic fuses either blow or have been fitted with heavier wire that stops them protecting anything. So an upgrade won\'t lower your bill, but it will stop the air conditioner dropping out on the worst day of the year and it adds safety switch protection to circuits that may never have had it.',
            },
            {
                question: 'Will SA Power Networks cut my power on a Catastrophic fire danger day?',
                answer: 'Possibly, if you\'re in a bushfire risk area, though it\'s uncommon. SA Power Networks has the authority to switch off supply when conditions are Extreme or Catastrophic during the Fire Danger Season, and it reviews conditions with the CFS. It says it has only done this a handful of times since the 1980s. Warning may be short, so if you\'re in the Hills or on the Hills face the CFS advice is to include losing mains power in your bushfire plan.',
            },
        ],
        cta: {
            heading: 'Want the Board Checked Before It Gets Hot?',
            description:
                'We test the safety switches properly, thermal image the switchboard under load and tell you plainly what will and won\'t cope with summer. Based in Wynn Vale, covering Adelaide.',
            linkText: 'Book Safety Switch Testing',
            href: '/rcd-testing-safety-switches-adelaide',
        },
    },
    {
        slug: 'winter-electrical-safety-heaters-electric-blankets',
        title: 'Winter Electrical Safety at Home: Heaters, Electric Blankets and the Faults We See Every June',
        seoTitle: 'Winter Electrical Safety at Home Adelaide | JPD',
        metaDescription:
            'Winter electrical safety at home: what plug-in heaters draw, why they never go on a powerboard, checking electric blankets, dryer lint and the faults we see.',
        excerpt:
            'A 2400 watt heater is the single biggest thing most people plug into a wall, and winter is when the powerboards, old blankets and lint-filled dryers come out. Here is what actually causes the trouble.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Safety',
        image: '/images/bathroom_heat_light_exhaust_wynn_vale.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>Winter electrical safety at home is mostly about one thing: heat. Heaters, electric blankets, dryers and heat lamps all turn electricity into heat on purpose, and when a plug, lead or powerboard isn't up to it, they turn electricity into heat somewhere they shouldn't.</p>
            <p>The consequence of getting this wrong isn't a tripped switch. House fires in Australia peak in winter, and the fire services put heaters, electric blankets and clothes dryers near the top of the causes list every year. A powerboard that melts behind the couch at 2 am, or a blanket with a broken element under a sleeping child, doesn't give you much warning. The checks below take an evening and they're the same ones we'd do in our own place.</p>

            <h3>What a Plug-In Heater Actually Draws</h3>
            <p>A typical fan heater, oil column heater or panel heater on its high setting draws between 2000 and 2400 watts. A standard Australian powerpoint is rated at 10 amps, which at 240 volts is 2400 watts. So one heater on high uses essentially the entire capacity of the outlet it's plugged into. That's the number behind every other heater rule.</p>
            <ul>
                <li><strong>Never on a powerboard or double adaptor.</strong> A powerboard is also rated at 10 amps in total. One heater fills it. Add a lamp and a phone charger and you're over, and the overload protection on a cheap board (if it has any) isn't something to rely on.</li>
                <li><strong>Never on an extension lead if you can avoid it,</strong> and never a coiled one. A lead carrying 10 amps for hours gets warm; a coiled lead can't shed that heat.</li>
                <li><strong>One heater per circuit is the safe assumption.</strong> Two heaters on the same power circuit, plus the TV and the kettle, is how a breaker trips on a cold night. On an old fuse board it's how a fuse gets "fixed" with heavier wire.</li>
                <li><strong>Feel the plug.</strong> After an hour on high, the plug and the powerpoint face should be warm at most. Hot to touch, discoloured or smelling means the connection is failing. Stop using that outlet and get it looked at.</li>
            </ul>
            <p>On clearances, the SA Metropolitan Fire Service's advice is to keep clothes, bedding, curtains and furniture well clear of heaters, ideally at least two metres. Don't dry washing on or over a heater, and switch heaters off before you go to bed or leave the house.</p>

            <h3>Is It Safe to Leave an Electric Blanket On?</h3>
            <p>The advice from the ACCC and the fire services is consistent: use the blanket to warm the bed, then switch it off before you get in. They're not designed to run all night under a person, and a blanket that's been folded, bunched or has a broken element develops hot spots you won't feel until it's too late.</p>
            <p>Before the first use each winter:</p>
            <ul>
                <li>Lay it flat and look over the whole surface for scorch marks, worn patches or places where the element feels kinked or lumpy</li>
                <li>Check the cord, the plug and the controller for cracks, fraying or heat marks</li>
                <li>Check it hasn't been recalled. The ACCC has recalled hundreds of thousands of electric blankets since 2010 over fire and shock risks, and only a small fraction were ever returned. Search the brand and model on the Product Safety Australia recalls site</li>
                <li>Fit it flat and tied firmly to the mattress so it can't bunch, and never switch on a blanket that's damp</li>
            </ul>
            <p>If you don't know how old it is, that's a reasonable sign it's done. Store it rolled rather than folded at the end of winter. A heated throw gets the same treatment: it's an electric blanket with a different shape, and the ones that get rolled up and sat on while they're on are the ones that fail.</p>

            <h3>Clothes Dryers and Lint</h3>
            <p>The MFS puts out a dryer fire warning most winters for a reason. Lint is fuel, the dryer is a heater, and the two meet when the filter is blocked. Their advice: clean the lint filter before every load, scrub it with warm soapy water monthly if you use dryer sheets (the waxy residue blocks airflow), and pull the dryer out once a year to vacuum behind and underneath it. Don't run it while nobody's home, and let the cool-down cycle finish rather than stopping it early with a hot load inside.</p>
            <p>Electrically, a dryer is another 2000-plus watt appliance. It wants its own powerpoint, not a powerboard shared with the washing machine and the iron, and a laundry that gets steamy wants that powerpoint checked for corrosion every so often.</p>

            <h3>Bathroom Heat Lamps</h3>
            <p>Three-in-one heat, light and exhaust units get hammered in winter. The common faults we see: heat lamps blowing repeatedly because the fitting's clearance to the ceiling insulation has been lost, exhaust fans seized with dust so the room stays damp, and the cheap units' fan motors failing after a few winters of running wet.</p>
            <p>Two things worth knowing. The heat lamps are typically 275 watt globes and the unit is designed for a specific number of them, so don't fit higher wattage ones. And if someone's stuffed insulation up against the unit in the roof, it needs clearing, because that's how the plastic housing gets cooked. If the fan runs but barely moves air, the room will stay damp, which leads straight to the next problem.</p>

            <h3>Condensation, Damp and Outdoor Outlets</h3>
            <p>Winter is when the safety switch trips for "no reason". It's rarely no reason. The usual causes are water getting into an outdoor powerpoint or light fitting, a garden lighting transformer sitting in a puddle, condensation inside a bathroom fitting, or a fridge or freezer in a damp shed with a corroded element. The pattern is the giveaway: it trips after rain, or early in the morning, or when a specific appliance starts.</p>
            <p>Look at your outdoor powerpoints before the wet sets in. The weatherproof cover should close fully over the plug. If the cover's cracked or the outlet's gone green inside, water's getting in. Anything that's been left plugged in outside through summer, like a pump or a fairy light transformer, should be unplugged and inspected.</p>

            <h3>The Winter Faults an Electrician Actually Sees</h3>
            <ul>
                <li><strong>Melted powerboards</strong> behind couches and beds, almost always with a heater on them</li>
                <li><strong>Scorched powerpoints</strong> where a heater's been plugged into a worn outlet that no longer grips the pins</li>
                <li><strong>Tripping safety switches</strong> from water in outdoor fittings or a failing heating element in a hot water unit, oven or dryer</li>
                <li><strong>Overloaded circuits</strong> in older homes where one power circuit feeds two bedrooms and the lounge, and there's now a heater in each</li>
                <li><strong>Fuse wire replaced with something heavier</strong> to stop the "nuisance", which removes the only protection on that cable</li>
                <li><strong>Heat lamps and heated towel rails</strong> wired into lighting circuits that were never meant for the load</li>
            </ul>
            <p>Most of these come back to the same idea. Heating appliances are big loads, older houses have fewer circuits, and the bits in between (plugs, powerboards, old outlets) are where it fails. If a circuit is tripping, a plug is warm, or you're running heaters off powerboards because there aren't enough outlets, the fix is usually a powerpoint or a circuit, not a bigger breaker.</p>
        `,
        faqs: [
            {
                question: 'How many watts can a powerpoint handle in Australia?',
                answer: 'A standard Australian powerpoint is rated at 10 amps, which is 2400 watts at 240 volts. That\'s the total for everything plugged into it, including anything on a powerboard or double adaptor hanging off it. A single plug-in heater on high typically draws 2000 to 2400 watts, so it uses the whole outlet on its own. If you need more than one high-draw appliance in a room, the answer is another powerpoint or circuit, not a bigger powerboard.',
            },
            {
                question: 'Why does the safety switch trip when I turn the heater on?',
                answer: 'If it\'s the safety switch rather than the circuit breaker, the heater most likely has a fault that\'s letting current leak to earth, often a cracked element, moisture inside an oil column, or a damaged lead. A breaker tripping instead means overload. Test it by plugging the heater into a different circuit on its own. If it trips the safety switch there too, the heater\'s done and should be replaced rather than repaired. If it only trips on one circuit, the wiring or outlet needs checking.',
            },
            {
                question: 'Is it safe to put a heater on an extension lead?',
                answer: 'Avoid it if you can. A heater draws close to the full 10 amp rating of a lead for hours at a time, and leads get warm doing that. A coiled or partly wound lead can\'t shed the heat and can melt its own insulation. If there\'s no other option, use a heavy duty lead rated for at least 10 amps, unwind it fully, keep it off carpet and away from the heater itself, and feel the plugs at both ends after half an hour. Warm is normal; hot is not.',
            },
            {
                question: 'Can a heated towel rail be left on all the time?',
                answer: 'Most are designed for continuous use and draw far less than a heater, often under 100 watts, but check the manufacturer\'s instructions for your model. The cost is modest but not nothing over a year, so a timer is a sensible middle ground. What matters more is how it\'s installed: in a bathroom the outlet or connection needs to meet the wet area rules, and a plug-in rail should never be fed from a powerboard or lead run across the floor.',
            },
            {
                question: 'What should I do if my powerboard has melted?',
                answer: 'Switch off the powerpoint, unplug it once it\'s cool, and throw the board away. Don\'t keep using it or anything that was plugged into it until you\'ve checked their plugs for heat damage. Look at the powerpoint itself for brown marks, a melted face or a smell. If it\'s discoloured, don\'t use it until an electrician has looked at it, because the damage often continues into the terminals behind the plate. Then work out what was overloading the board, which in winter is nearly always a heater.',
            },
        ],
        cta: {
            heading: 'Running Heaters Off Powerboards?',
            description:
                'If the house doesn\'t have enough outlets or a circuit keeps tripping once the heaters come out, that\'s fixable. We add powerpoints and circuits across Adelaide and tell you what the board can and can\'t take.',
            linkText: 'Powerpoint Installation',
            href: '/powerpoint-installation-adelaide',
        },
    },
    {
        slug: 'storms-lightning-power-surges-adelaide',
        title: 'Storms, Lightning and Power Surges in Adelaide: What Gets Damaged and How to Protect Against It',
        seoTitle: 'Power Surge Protection Adelaide Homes | JPD',
        metaDescription:
            'Power surge protection for Adelaide homes: what a surge damages, switchboard protection vs plug-in boards, what to do during and after a storm, and insurance.',
        excerpt:
            'A lightning strike does not have to hit your house to cook the TV, the inverter and the garage door opener. Here is what a surge actually is, what protects against it, and what to do before, during and after a storm.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Safety',
        image: '/images/switchboard_after_rcbos_modbury_heights.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>Power surge protection for your home is the difference between a storm being a nuisance and a storm costing you every piece of electronics with a circuit board in it. Adelaide doesn't get the thunderstorm count of Brisbane or Darwin, but we get enough, usually in spring and autumn, and the damage we see afterwards is always the same list: the TV, the modem, the solar inverter, the garage door opener, the induction cooktop's control board.</p>
            <p>The real consequence of ignoring this is that none of those things are cheap, most of them aren't repairable, and insurers increasingly want proof that lightning caused the loss before they pay. A few hundred dollars of protection at the switchboard, or thirty seconds unplugging gear when the sky goes dark, is the difference.</p>

            <h3>What a Power Surge Actually Is</h3>
            <p>A surge is a very short spike in voltage, lasting microseconds, far above the normal 230 to 240 volts. The big ones come from lightning, and it doesn't need to hit your house. A strike on a line, a pole or the ground a few hundred metres away induces a voltage pulse that travels along the overhead network and into every house connected to it. Smaller surges happen when the network switches large loads, when supply is restored after an outage, and even inside your own house when a motor like the fridge compressor or the air conditioner stops.</p>
            <p>Modern appliances are more vulnerable than old ones because nearly everything now has a circuit board rated for a few hundred volts at most. The 1990s fridge with a mechanical thermostat shrugs off what kills a new one with a touchscreen.</p>

            <h3>What Gets Damaged, and What Usually Doesn't</h3>
            <ul>
                <li><strong>Most at risk:</strong> anything connected to two services at once. The TV on power and antenna, the modem on power and the NBN line, the solar inverter on power and the DC from the roof. The surge comes in one path and finds earth through the other, with the electronics in between.</li>
                <li><strong>Commonly lost:</strong> garage door openers, security system panels, smart appliances, computers, induction cooktops and ovens with electronic controls, pool chlorinators and controllers, ducted air conditioning control boards.</li>
                <li><strong>Usually fine:</strong> simple resistive loads like kettles, old heaters, incandescent lights, and anything with a mechanical switch and no electronics.</li>
            </ul>
            <p>Surge damage isn't always immediate either. A board weakened by one spike can fail weeks later, so a run of unrelated appliance failures after a storm is worth mentioning when you ring about any of them.</p>

            <h3>Switchboard Surge Protection vs Plug-In Surge Boards</h3>
            <p>Two layers, doing different jobs.</p>
            <p><strong>A surge protective device (SPD) at the switchboard</strong> sits across the incoming supply and diverts the bulk of a surge to earth before it reaches any circuit. It protects everything in the house at once, including hardwired gear like the oven, the air conditioner, the hot water system and the inverter, which no plug-in board can cover. It needs a spare pole or two on the board, a sound earth to dump the energy into, and a licensed electrician to fit it. Most have a window or flag that shows when they've absorbed a hit and need replacing, which is worth checking after a big storm.</p>
            <p>The 2018 edition of the Australian Wiring Rules added detailed guidance on SPDs, and whether one is required is assessed on the risk to the installation rather than being automatic for every house. In practice that means most existing Adelaide switchboards don't have one. If your board is being upgraded anyway it's a small addition, and it's one of the few things we'd suggest on nearly any board that has a solar inverter hanging off it.</p>
            <p><strong>Plug-in surge boards</strong> are the second layer, not a substitute. They handle the smaller spikes that get past the switchboard and the ones generated inside the house. Two things people don't realise: the surge component wears out with every spike it absorbs, so a five year old board may be a plain powerboard now, and the cheap ones often have a token component that won't survive anything serious. Look for a stated joule rating and an indicator light. For the TV and modem, a board that also passes the antenna and phone line through its protection covers both paths.</p>

            <h3>What to Do During a Storm</h3>
            <p>When the Bureau issues a severe thunderstorm warning for Adelaide and you can hear it coming, the SES advice is to unplug computers and appliances. Unplugging is the only protection that's complete, because a surge can't jump a gap at the wall. The practical list:</p>
            <ul>
                <li>Unplug the TV and anything attached to it, and the antenna lead if it's easy to reach</li>
                <li>Unplug the modem and router, including the NBN lead</li>
                <li>Unplug computers, gaming consoles and anything with a hard drive you care about</li>
                <li>Switch outdoor decorative lighting off and unplug it</li>
                <li>Leave the fridge, and don't go switching things at the board during a strike</li>
            </ul>
            <p>Stay off corded phones during a direct overhead storm. It's an old rule and it's still right.</p>

            <h3>After the Storm: The Checklist</h3>
            <p><strong>Tripped safety switches.</strong> A trip during a storm is common and usually caused by water in an outdoor fitting or a nearby surge, not a wiring fault. Wait until the rain's stopped and things have dried. If the switchboard itself is dry and undamaged, reset the switch once. If it holds, fine. If it trips again, don't keep forcing it: unplug everything outdoors first, then try again, and if it still won't hold it needs testing.</p>
            <p><strong>Wet outdoor fittings.</strong> Garden lights, sensor lights, outdoor powerpoints and pool equipment are where water gets in. A fitting full of water is a shock risk, and a fire risk once it dries and starts arcing. Don't use it until it's been opened, dried and checked, and replace a damaged cover or seal.</p>
            <p><strong>Water in the meter box.</strong> Meter boxes on the weather side of the house leak, especially the old ones with a warped door. If you can see water inside, dripping off the meter or pooled at the bottom, don't touch anything in there. Switch nothing. Ring an electrician, and if the water is around the meter or service fuse, SA Power Networks on 13 13 66 as well. A soaked meter panel can stay dangerous after it looks dry.</p>
            <p><strong>Fallen or hanging wires.</strong> Treat every fallen, broken or low-hanging wire as live, even if it's silent and not sparking. SA Power Networks' instruction is to stay at least 10 metres away from the wire and anything it's touching, keep everyone else and pets clear, and ring 13 13 66 immediately, or 000 if anyone's in danger. Never try to move or secure a wire with anything; electricity can travel through wet ground and arc through air. The pole and the lines in the street are SA Power Networks' job. The bracket on your fascia and the cable from there to the meter box is generally the homeowner's, so storm damage at the house end usually needs an electrician once the network side is made safe.</p>
            <p><strong>Appliances behaving oddly.</strong> Lights unusually bright in one room and dim in another after a storm can mean a damaged neutral on the network. Turn the main switch off and ring 13 13 66. Left alone, that one can destroy everything in the house.</p>

            <h3>Insurance Claims for Surge and Lightning Damage</h3>
            <p>Most home and contents policies cover damage from lightning, including a power surge caused by lightning. Most also exclude a surge or failure caused by the electricity provider, which is a different claim lodged with SA Power Networks and only paid where their network was at fault (they don't cover lightning or severe weather). Read your own PDS, because the wording varies.</p>
            <p>Two things the large insurers' published policy wording commonly asks for: a Bureau of Meteorology record of lightning in your area at the time, and written confirmation from a qualified repairer that lightning or the surge was the cause. So after a storm, note the date and time, photograph the damage, keep the dead appliances until the claim's assessed, and get a written report from whoever inspects them. An electrician's report on the installation (tripped devices, a blown SPD, scorched outlets) backs up the repairer's. Lodge promptly, and mention every failure, including the ones that turn up a week later.</p>
        `,
        faqs: [
            {
                question: 'Do I need a surge protector if I have solar panels?',
                answer: 'It\'s strongly worth considering. A solar inverter is connected to the roof array on one side and the switchboard on the other, which gives a lightning-induced surge a path straight through its electronics, and an inverter is one of the more expensive items in the house to replace. Many inverters have some built-in protection, and some installers fit surge devices on the DC side, but a surge protective device at the main switchboard covers the AC side and everything else in the house as well. Check what your installer actually fitted.',
            },
            {
                question: 'Does a surge protector powerboard wear out?',
                answer: 'Yes. The component inside a surge board that absorbs spikes degrades a little every time it works, and a large surge can use it up in one go. After that the board still passes power but offers no protection, which is why decent ones have an indicator light showing the protection is intact. Treat them as consumable: replace one after any storm that caused damage in the house, and don\'t assume a board that\'s been behind the TV for eight years is still doing anything.',
            },
            {
                question: 'Will unplugging appliances during a storm protect them from lightning?',
                answer: 'Yes, and it\'s the only method that\'s complete. A surge travelling along the mains can\'t cross the air gap at an unplugged wall socket, so anything disconnected from power, antenna and phone lines is safe from a mains-borne surge. Switching the appliance off at the wall isn\'t the same, because the switch gap is tiny and a lightning surge can jump it. Do it when the storm\'s approaching, not during a strike, and leave the fridge and freezer connected.',
            },
            {
                question: 'Why did my modem die in a storm when nothing else did?',
                answer: 'Because it was connected to two services. A modem sits between the power supply and the NBN or phone line, and a surge arriving on one side finds its way to earth through the other, with the modem\'s electronics in the path. The same applies to a TV on power plus an antenna. Nothing else in the house had that second connection, so nothing else offered the surge a route through. A surge board that passes the data line through its protection, or unplugging both leads before a storm, closes that path.',
            },
            {
                question: 'How do I know if a power surge damaged my switchboard?',
                answer: 'Look for a surge protective device with its indicator window changed colour or a flag showing, breakers or safety switches that won\'t reset, scorch marks or a burnt smell, and circuits that are dead with everything switched on. Less obviously, several appliances failing at once or over the following weeks points to a surge even when the board looks fine. A blown surge device has done its job and needs replacing. If anything at the board is discoloured or won\'t reset, leave it and have it tested rather than forcing it.',
            },
        ],
        cta: {
            heading: 'Want Surge Protection on the Board?',
            description:
                'A switchboard surge device is a small job on a board with the room for it and a sound earth, and a sensible addition during an upgrade. We\'ll tell you honestly whether yours has the space. Wynn Vale based, Adelaide wide.',
            linkText: 'Switchboard Upgrades',
            href: '/switchboard-upgrade-adelaide',
        },
    },
    {
        slug: 'christmas-lights-outdoor-safety-adelaide',
        title: "How to Put Up Christmas Lights Outside Safely: An Electrician's Checklist",
        seoTitle: 'Outdoor Christmas Lights Safety Adelaide | JPD',
        metaDescription:
            'How to put up Christmas lights outside safely: outdoor-rated sets, low voltage vs 240 V, safety switches, leads in the weather, clips not staples and ladders.',
        excerpt:
            'Most festive lighting problems come down to indoor lights used outside, one outlet doing the whole house, and a lead through a window. Here is how to do it so the display lasts the season without tripping, melting or shocking anyone.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Safety',
        image: '/images/roof_access_ladder.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>Putting up Christmas lights outside safely comes down to three things: buying sets made for outdoors, powering them from a protected outlet without overloading it, and getting on and off the roof without falling. Get those right and the rest is tidying.</p>
            <p>The consequence of getting it wrong ranges from annoying to serious. At the annoying end, the safety switch trips every time it rains and the display is dead for the Christmas Eve walk. At the serious end, a 240 volt set with a split in the cable is sitting in a wet garden bed where kids are running around, or an extension lead has been run through a closed window for four weeks and the insulation has worn through. And every December the fire and safety regulators repeat the same warning about people falling off ladders hanging lights, because it keeps happening.</p>

            <h3>Only Outdoor-Rated Lights Go Outdoors</h3>
            <p>Check the box or the tag near the plug. Lights sold for indoor use have no weather sealing on the lamp holders, controller or joins, and they're the sets that fill with water and trip the safety switch. Outdoor sets carry an IP rating; Energy Safe Victoria's guidance is IP23 as a minimum, and IP44 is common on decent sets. Also look for the RCM mark (a tick inside a triangle) on the plug, the tag or the transformer. Plug-in decorative lights sold in Australia have to carry it, and sets bought from overseas online sellers often don't meet the standard.</p>
            <p>Replace rather than repair. A set with a cut cable, cracked lamp holder or exposed wire goes in the bin. Taped joins on a lighting set outdoors aren't a fix, they're a fault waiting for rain. And test every set on the ground before you spend an hour fixing it to the gutter.</p>

            <h3>Extra-Low-Voltage vs 240 Volt Sets</h3>
            <p>Most modern LED sets run at 12, 24 or 31 volts from a plug-pack transformer. That's extra-low voltage: if a lead gets nicked or a connector fills with water, it generally won't deliver a dangerous shock. The 240 volt sets, usually the older incandescent strings and some large commercial-style sets, run full mains voltage along every metre of cable. Both are legal; the low voltage ones are simply the forgiving choice around kids, pets, garden beds and sprinklers, which is why the regulators point to extra-low-voltage, LED or solar as the safest options.</p>
            <p>The transformer is where the low voltage sets go wrong. Many are rated for indoor use only, even when the lights themselves are outdoor-rated, and the instructions say so. An indoor plug-pack sitting on the verandah boards or hanging off the eave gets rained on, corrodes and either fails or trips the safety switch. Mount it under cover, up off the ground, or run the low voltage lead out from an inside outlet so the transformer stays dry.</p>

            <h3>Make Sure the Circuit Has a Safety Switch</h3>
            <p>Whatever outlet feeds the display must be protected by a safety switch (RCD). Houses wired or renovated in the last couple of decades will have this on the power circuits. Older homes with a single old RCD, or a ceramic fuse board, may have power circuits with none. If you're not sure, press the test button on the switchboard and see which outlets go dead. If the outdoor outlet stays live, it's not protected and you shouldn't run outdoor lights from it. A plug-in portable safety switch at the outlet is the stop-gap. Press the test button before the season starts regardless.</p>

            <h3>Extension Leads and the Weather</h3>
            <ul>
                <li><strong>Unwind leads fully.</strong> A coiled lead carrying load heats up. Fairy lights don't draw much, but a lead that's also feeding the inflatable's blower and the bar fridge does.</li>
                <li><strong>Keep the joins dry.</strong> The plug-to-socket join between a lead and a light set is where water gets in. Lift it off the ground, put it under cover, or use a weatherproof lead connector cover. Don't leave it in a garden bed the reticulation hits at 5 am.</li>
                <li><strong>Don't run leads through windows or doors.</strong> A sash or door closing on a lead for a month wears through the insulation. It also means the window's open to the weather and the house isn't locked.</li>
                <li><strong>Don't run leads across paths or driveways,</strong> and don't bury them under mulch to hide them.</li>
                <li><strong>Use heavy duty outdoor leads,</strong> not the thin indoor ones. Look for the rating on the tag, and never use a damaged lead.</li>
            </ul>

            <h3>Clips, Not Staples or Nails</h3>
            <p>A staple gun through a lighting cable pierces the insulation. On a 240 volt set that puts mains voltage on your gutter. On a low voltage set it's a short that kills the run or the transformer. Use the plastic gutter clips, shingle clips and eave hooks sold alongside the lights. They're cheap, they hold in wind, and they come off without damage in January. Keep the cable away from sharp gutter edges and metal roof screws, and leave enough slack that the lights aren't pulling tight when the cable contracts on a cold night.</p>

            <h3>Getting On the Roof</h3>
            <p>This is where the real injuries happen, and SafeWork SA's warnings every year are about falls from under three metres, sometimes fatal. The basics for a single storey house:</p>
            <ul>
                <li>Set the ladder on firm level ground at roughly one out for every four up, which for a single storey gutter is about 750 millimetres out from the wall</li>
                <li>Have it extend about a metre past the gutter if you're stepping onto the roof, and have someone footing it</li>
                <li>Keep three points of contact and your belt buckle between the rails. Don't lean out to reach the next clip; climb down and move the ladder</li>
                <li>Don't carry the box of lights up with you. Use a bucket on a rope or clip them to your belt</li>
                <li>Stay well clear of the overhead service line where it attaches to the house. Ladders, lights and poles don't go near it</li>
                <li>Don't do it in wind, in the dark, or after a couple of drinks at the Christmas lunch</li>
            </ul>
            <p>If the house is two storeys or the roof is steep, honestly consider roofline lights that clip to the gutter from a ladder, lights on the fence and garden instead, or paying someone with the right gear.</p>

            <h3>Timers, and Switching Off</h3>
            <p>A plug-in timer or a smart plug turns the display on at dusk and off at a sensible hour, which saves power and means the lights aren't running unattended all night. If the timer lives outside, it needs to be an outdoor-rated one in a weatherproof enclosure, not a bedside timer in a sandwich bag. The regulators' advice is also to switch outdoor lights off in poor weather, and off before bed or when leaving the house. A timer does most of that for you.</p>

            <h3>Don't Run the Whole Street Off One Outlet</h3>
            <p>LED sets are low draw, often a few watts a string, which is why people keep adding. The things that aren't low draw are inflatables with blowers, projectors, older incandescent strings and the drinks fridge that migrates outside for December. A standard powerpoint and a standard powerboard are each rated at 10 amps, 2400 watts total. Add up what's on the one outlet, follow the manufacturer's limit on how many strings connect end to end, and don't piggy-back plugs or double adaptors to make it fit. If the breaker trips when everything comes on at dusk, that's your answer: the circuit's full.</p>

            <h3>The Permanent Fix: An Outdoor Powerpoint</h3>
            <p>If you do lights every year, the lead through the laundry window is a problem you keep solving. A weatherproof outdoor powerpoint near the front of the house, on a safety switch protected circuit, with the transformer and timer under its hinged cover, removes the lead, the open window and the overloaded indoor outlet in one go. It's useful for the rest of the year too: the pressure washer, the hedge trimmer, the bar fridge in summer. We've covered what's involved in an outdoor powerpoint separately, but the short version is that it's a small, routine job and the right time to book it is November rather than the week before Christmas.</p>
        `,
        faqs: [
            {
                question: 'Can I leave outdoor Christmas lights on all night?',
                answer: 'You can, but the regulators\' advice is to switch them off before bed and in poor weather, mainly so a fault doesn\'t go unnoticed while everyone\'s asleep. A plug-in timer or smart plug that cuts them at 11 pm or midnight is the practical answer: the display runs for the people walking past, the power bill stays small and nothing\'s energised unattended through a 2 am downpour. If the timer sits outside it needs to be an outdoor-rated one in a weatherproof housing.',
            },
            {
                question: 'Why do my Christmas lights trip the safety switch when it rains?',
                answer: 'Water is getting into a live part, usually an indoor-rated set used outside, a transformer sitting in the weather, or the join between the extension lead and the light set lying on wet ground. The safety switch is doing exactly what it should. Unplug the display, let everything dry, and check each set and join separately. Lift joins off the ground and under cover, move the transformer inside or under the eave, and replace any set with cracked lamp holders or a damaged cable rather than taping it.',
            },
            {
                question: 'Do Christmas lights have to be certified in Australia?',
                answer: 'Yes. Plug-in decorative lights and powered decorations sold in Australia need to meet the relevant safety standard and carry the Regulatory Compliance Mark, the tick in a triangle, usually on the plug, a tag near the plug or the transformer. Sets bought from overseas marketplaces often don\'t have it and may not meet Australian requirements for insulation, plugs or weather sealing. Buy from an Australian retailer, check for the mark, and if you\'re unsure a set\'s approval can be looked up on the national EESS register.',
            },
            {
                question: 'How many strings of Christmas lights can I connect together?',
                answer: 'Follow the number printed in the manufacturer\'s instructions, because it depends on the set. The limit is set by what the first plug, the transformer or the cable at the start of the run can carry, not by the outlet on the wall. LED strings draw very little, so the limit is often generous; older incandescent strings are limited to a handful. Mixing brands end to end or connecting a 240 volt set to a low voltage one won\'t work and can be dangerous, so keep each run to one type.',
            },
            {
                question: 'Is it safe to put Christmas lights on a metal roof or gutter?',
                answer: 'Yes with the right sets and fixings. Use outdoor-rated lights, preferably extra-low-voltage LED, and fix them with plastic clips rather than anything that pierces the cable, because a damaged 240 volt cable can make the gutter or roof sheeting live. Keep cables away from sharp edges and roof screws, and leave slack so they don\'t pull tight. The bigger hazard is the roof itself: metal is slippery when wet or dewy, so work from the ladder and gutter line rather than walking on it where you can.',
            },
        ],
        cta: {
            heading: 'Sick of the Lead Through the Window?',
            description:
                'An outdoor powerpoint on a safety switch protected circuit is a small job that fixes the problem for good. We install them across Adelaide, and November is the time to book it.',
            linkText: 'Outdoor Powerpoint Installation',
            href: '/powerpoint-installation-adelaide',
        },
    },
];
