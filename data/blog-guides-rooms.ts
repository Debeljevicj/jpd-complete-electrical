import type { BlogPost } from './blog-posts';

/**
 * Room and area guides: bathroom, kitchen, shed and outdoor power. Each one
 * answers the planning question a homeowner has before the trades turn up,
 * and goes a level deeper than the general renovation post.
 */
export const roomGuides: BlogPost[] = [
    {
        slug: 'bathroom-electrical-zones-rules-adelaide',
        title: 'Bathroom Electrical Rules: What Can Go Where',
        seoTitle: 'Bathroom Electrical Zones Explained | JPD',
        metaDescription:
            'Bathroom electrical rules in plain English: the zones around the bath and shower, IP ratings, powerpoints, heat lamps, towel rails and what a reno triggers.',
        excerpt:
            'Every bathroom has invisible lines around the bath, shower and basin that decide where a powerpoint, switch or light can go. Here is how they work, without the standard in front of you.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Renovations',
        image: '/images/bathroom_vanity_powerpoint_wynn_vale.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>Bathroom electrical rules exist because a bathroom is the one room where you're wet, barefoot and touching metal taps, so a fault that would give you a tingle in the lounge can stop your heart in the shower. The Wiring Rules deal with that by drawing zones around the bath, shower and basin and limiting what can be installed inside each one.</p>
            <p>If you get the layout wrong, the consequence isn't only safety. A powerpoint set out in the wrong spot gets found at fit-off, after the tiler has finished, and the only fixes are to move it (cut tiles, patch, retile) or leave the wall blank. A heat lamp that can't go where the plan says it goes becomes an argument on site. Both are avoidable with a ten-minute conversation before the walls close.</p>

            <h3>Bathroom Electrical Zones in Plain English</h3>
            <p>The Australian Wiring Rules (AS/NZS 3000) split a bathroom into zones numbered 0 to 3, measured from the bath, the shower and the basin. The lower the number, the wetter the spot and the fewer things allowed there.</p>
            <ul>
                <li><strong>Zone 0</strong> is inside the bath or shower base itself. Nothing normal goes here.</li>
                <li><strong>Zone 1</strong> is the space above the bath or inside the shower, up to a set height. Only equipment designed for it, such as a suitably rated exhaust fan or a fitting the manufacturer specifically allows there.</li>
                <li><strong>Zone 2</strong> is the band immediately around zone 1 on the floor and walls, and the small area around a basin. For a bath or screened shower that band is 0.6 metres out and up to 2.25 metres high. Switches here need a water rating (IPX4 or better) and ordinary powerpoints aren't allowed.</li>
                <li><strong>Zone 3</strong> is the rest of the room within a further 2.4 metres. Powerpoints and switches are fine here as long as the circuit has RCD protection and they're not down at floor level.</li>
            </ul>
            <p>An open shower with no screen or door throws a bigger zone than a screened one, because water travels further. That's why a frameless, doorless shower often pushes the vanity powerpoint further along the wall than the designer drew it. We set the zones out on site against the actual shower screen, bath and basin positions, not from a sketch.</p>

            <h3>IP Ratings: What the Numbers Mean</h3>
            <p>An IP rating is two digits. The first is dust, the second is water, and the second digit is the one that matters in a bathroom. IPX4 means protected against splashing from any direction, which is the usual minimum for a switch or fitting inside zone 2. Anything inside zone 1 needs to be designed for that location and generally carries a higher rating. Outside the zones, a standard fitting is acceptable, though steam still shortens the life of cheap fittings, so a sealed one is a sensible buy over a sealed-looking one.</p>

            <h3>Heat, Light and Exhaust Units</h3>
            <p>The three-in-one unit is the most common bathroom fitting we install and the most common one drawn in the wrong place. Manufacturers restrict where the unit can sit relative to the shower and bath, and the radiant heat lamps are there to warm you where you dry off, not where you wash. The practical layout in most Adelaide bathrooms is the heat and light unit over the drying area in front of the shower, and either a separate exhaust fan inside or beside the shower (one rated for that zone) or the three-in-one's fan drawing air from close enough to do the job.</p>
            <p>Exhaust has to be ducted to outside air under the National Construction Code, through the eave, a wall vent or a roof cowl. Dumping it into the roof space soaks the insulation and timber. If your existing fan has never had a duct, that's a fix worth doing while the ceiling is open.</p>

            <h3>Powerpoints vs Shaver Sockets</h3>
            <p>A normal powerpoint has to sit in zone 3, outside the splash band around the bath and shower, and clear of the basin's own small zone. A shaver supply unit is different: it has an isolating transformer inside it, so the outlet is allowed in zone 2 where a powerpoint isn't. That's why older bathrooms have the two-pin shaver socket beside the mirror and nothing else. In a renovation we usually fit a proper double powerpoint in zone 3 for hair dryers and straighteners, which draw far more than a shaver socket can supply, and only use a shaver unit if the layout leaves no zone 3 wall near the mirror.</p>

            <h3>Heated Towel Rails and Underfloor Heating</h3>
            <p>Heated towel rails are either plug-in or hardwired. Plug-in rails need a powerpoint, which brings the zones back into play, so a rail planned next to the shower screen usually ends up hardwired through a wall plate instead. Hardwired rails are controlled by an isolating switch, and a timer at the switch is worth the small extra cost because a rail left on around the clock is one of the quieter contributors to a power bill.</p>
            <p>Electric underfloor heating is a heating element under the tiles, so it's installed with the tiler and connected by us. The mat or cable goes down before the tiles, the floor sensor and the thermostat cable run back to a switch position, and the whole thing is tested for insulation resistance before and after tiling because a damaged element can't be fixed once the tiles are down. Under the current Wiring Rules every final circuit in a home gets 30 mA RCD protection, and this is one you want it on.</p>

            <h3>Mirror Lights, LED Mirrors and Switching</h3>
            <p>Backlit mirrors and demisters are usually hardwired to a cable left poking through the wall behind the mirror, so the mirror position and height need to be settled before rough-in. Wall lights either side of a mirror need to be outside the basin zone or rated for it. We'd normally switch the main light, the mirror light, the heat lamps and the fan separately, because people use them at different times and a fan that only runs with the light never runs long enough.</p>

            <h3>RCD Protection and What a Renovation Triggers</h3>
            <p>Any circuit altered or added during the renovation has to meet the current Wiring Rules, which in a home means 30 mA RCD protection on that circuit. The national regulators' guidance is clear that only the altered circuits are caught, not the whole house, and that a straight like-for-like replacement in the same spot counts as a repair rather than an alteration. In practice a bathroom reno alters the lighting circuit, usually the power circuit and often adds a new one, so the bathroom ends up fully protected even if the rest of the house isn't. If the switchboard has no room for that, the board work becomes part of the reno budget, and it's far better to know that at quote stage than in week three.</p>
            <p>What we need from you before rough-in: the shower screen type and position, bath position, basin and mirror positions and heights, and which appliances you'll actually plug in. With those, the zones take care of themselves.</p>
        `,
        faqs: [
            {
                question: 'Can you have a normal powerpoint in a bathroom in Australia?',
                answer: 'Yes, as long as it sits outside the zones around the bath, shower and basin, and the circuit has safety switch protection. In the Wiring Rules a standard powerpoint belongs in zone 3, which is the part of the room clear of the 0.6 metre splash band around a bath or screened shower and clear of the small zone around the basin. It also can\'t be down near the floor. Inside zone 2 the only outlet allowed is a shaver supply unit or an RCD-protected outlet inside a cupboard.',
            },
            {
                question: 'What IP rating does a bathroom light need?',
                answer: 'It depends on which zone the light sits in. Inside zone 2, the splash band around the bath or shower, a fitting needs at least IPX4, which is protection against splashing water from any direction. Inside zone 1, above the bath or within the shower, the fitting has to be designed for that location and the manufacturer\'s instructions decide whether it can go there at all. Outside the zones no rating is required, though a sealed fitting lasts longer in a steamy room.',
            },
            {
                question: 'Can a light switch be inside the bathroom?',
                answer: 'Yes. Switches can\'t go in zones 0 or 1, but they can go in zone 2 if they\'re rated IPX4 or better and at least 0.3 metres above the floor, and anywhere in zone 3 with no special rating. The usual compromise is a switch just inside the door, which is almost always zone 3. Putting the fan and heat lamps on a switch inside the room rather than outside it also means they get used.',
            },
            {
                question: 'Does underfloor heating in a bathroom need its own circuit?',
                answer: 'Usually yes for anything more than a small ensuite, and always with safety switch protection. A heating mat draws a steady load for long periods, so sharing it with the bathroom powerpoints invites nuisance tripping when a hair dryer joins in. The thermostat is also rated for a maximum load, so a larger floor can need a contactor or a second circuit. Your electrician sizes it from the mat\'s wattage and the floor area, which is why the heating product needs to be chosen before rough-in.',
            },
            {
                question: 'Do I have to bring the whole bathroom up to current rules if I only replace a light fitting?',
                answer: 'No. National regulator guidance on the Wiring Rules treats a like-for-like replacement in the same position, with no change to the circuit, as a repair, and a repair doesn\'t trigger new RCD protection. Moving the fitting, adding a second one or extending the cable is an alteration, and that circuit then needs 30 mA safety switch protection. Even so, if the circuit has none, it\'s cheap to add while the electrician is there and a bathroom is the room that most deserves it.',
            },
        ],
        cta: {
            heading: 'Planning a Bathroom?',
            description:
                'Send us the layout before the walls close and we\'ll set out the zones, the fan ducting and the switching so nothing gets found after the tiler has left. Based in Wynn Vale, covering Adelaide.',
            linkText: 'Renovation Electrical',
            href: '/renovation-electrician-adelaide',
        },
    },
    {
        slug: 'kitchen-electrical-plan-powerpoints-circuits',
        title: 'Kitchen Electrical Plan: Powerpoints, Circuits and Where They Go',
        seoTitle: 'Kitchen Powerpoint and Circuit Plan | JPD',
        metaDescription:
            'A kitchen electrical plan for your renovation: how many powerpoints and where, which appliances need their own circuit, splashback cutouts and lighting.',
        excerpt:
            'The kitchen is the room with the most appliances, the biggest loads and the least forgiving finishes. This is the planning conversation we have with every client before the cabinetmaker measures up.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Renovations',
        image: '/images/zetr_powerpoint_stone_splashback_golden_grove.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>A kitchen electrical plan is the list of every powerpoint, circuit, light and isolator in the room, decided before the cabinetmaker measures and before the stone is templated. Skip it and you get the kitchen most people live with: a kettle and toaster fighting for one double point, an extension lead feeding the microwave in the pantry, the dishwasher plugged in behind the kickboard where nobody can reach it, and a cooktop that trips the oven when both are on.</p>
            <p>The expensive part is the finishes. A powerpoint added after the stone splashback is in means a stonemason, not an electrician. One missed under the island means lifting the island. Everything below is cheap at rough-in and painful afterwards.</p>

            <h3>How Many Powerpoints a Kitchen Needs</h3>
            <p>Count appliances, not walls. Write down everything that lives on the bench or in a cupboard and plugs in: kettle, toaster, coffee machine, air fryer, stand mixer, microwave, phone chargers, the blender that comes out on weekends. Then place them along the plan where you'll actually use them. The number falls out of that exercise, and it's almost always more than the old kitchen had.</p>
            <ul>
                <li><strong>Benchtop runs:</strong> a double powerpoint roughly every metre of usable bench, with one at each end of a run so appliances can sit in the corners where they don't block the work space. Two doubles side by side where the kettle, toaster and coffee machine cluster.</li>
                <li><strong>Island bench:</strong> at least one double, usually on the end panel or the side facing away from the seating, for the mixer, the laptop and the cordless vacuum charger. The cable gets to the island through the slab or the floor during rough-in, which is the single most time-critical decision in the whole kitchen.</li>
                <li><strong>Appliance garage or pantry:</strong> a double inside, high enough to clear whatever sits on the shelf, so the toaster and air fryer can live out of sight and still be used in place.</li>
                <li><strong>Under the bench:</strong> a single point for the dishwasher in the cupboard beside it, not behind it, so it can be unplugged without pulling the machine out. Same thinking for a bar fridge or wine fridge.</li>
                <li><strong>Fridge:</strong> its own point in the fridge cavity, set where the fridge body won't crush the plug. Fridges are getting deeper, so check the spec.</li>
                <li><strong>Rangehood:</strong> a point inside the canopy space or in the cupboard above, per the hood's instructions.</li>
            </ul>

            <h3>Dedicated Circuits: Oven, Cooktop, Dishwasher, Microwave</h3>
            <p>The big heat-producing appliances each want their own circuit from the switchboard, sized for the appliance's actual rating.</p>
            <ul>
                <li><strong>Cooktop:</strong> induction and most ceramic cooktops are hardwired on a dedicated circuit, and induction can need a heavier cable than the old element cooktop had. Get the model's rating to your electrician before rough-in, because it decides the cable and sometimes whether the switchboard can take it.</li>
                <li><strong>Oven:</strong> many single ovens plug into a point in the cavity, larger ones and pyrolytic models are hardwired. Either way it should be a dedicated circuit rather than shared with the bench powerpoints.</li>
                <li><strong>Dishwasher:</strong> a heating element and a motor, so a dedicated circuit is good practice and stops the kettle tripping the wash.</li>
                <li><strong>Microwave:</strong> a built-in microwave draws a lot for short bursts. Giving it its own circuit, or at least keeping it off the circuit that feeds the kettle and toaster, is what stops the familiar morning trip.</li>
            </ul>
            <p>Every one of those circuits gets 30 mA RCD protection under the current Wiring Rules, which is one reason a kitchen reno often turns into a switchboard conversation. A board with two spare ways can't take four new circuits.</p>

            <h3>Splashbacks, Stone and Cutouts</h3>
            <p>Powerpoints in a tiled splashback are straightforward: the tiler cuts around the mounting block. Stone, glass and porcelain splashbacks are different. The cutouts are made off site by the fabricator from the positions on the plan, and they can't be moved afterwards. So the splashback powerpoint positions have to be final before the stone is templated, with heights that clear the benchtop appliance bodies and sit under the overhead cabinets. If you want flush or recessed outlets in stone, the fabricator needs the exact unit's cutout drawing, not just a position.</p>
            <p>Keep powerpoints clear of the cooktop. The Wiring Rules set a minimum distance from the cooktop edge, and it's larger than most people guess, so the point you wanted right beside the hob usually moves along the bench.</p>

            <h3>Rangehood and Isolators</h3>
            <p>The rangehood needs a powerpoint (or a hardwired connection for some canopy models) and, if it's ducted, a duct path to outside that the cabinetmaker allows for. Recirculating hoods just push greasy air back into the room, so duct it if the roof or wall allows.</p>
            <p>Hardwired appliances need an isolating switch within reach so the appliance can be switched off without going to the switchboard. For a cooktop that's typically a switch on the splashback or bench side, out of the splash and away from the hob. We'd rather put one on the oven and dishwasher too, so any appliance can be swapped later without an electrician.</p>

            <h3>Lighting Layers</h3>
            <p>One grid of downlights lights the floor and leaves your own shadow on the bench. A kitchen that works has three layers: general lighting (downlights spaced so there's one over each work zone, not centred in the room), task lighting (LED strip under the overhead cabinets, with the driver somewhere you can reach), and something for the evening (pendants over the island, or a strip under the island overhang or the kickboard). Switch them separately, and if you want dimming, decide now because it changes the fittings and the switch.</p>
            <p>Drivers for LED strip need a home that isn't sealed inside a cabinet with no air and no access. The top of the overheads or a dedicated void in the pantry both work.</p>

            <h3>USB Points and the Small Decisions</h3>
            <p>A powerpoint with built-in USB sockets suits the charging spot, which in most homes is the end of the island or the bench near the fridge. USB-C is the one to specify now. Think about a powerpoint inside a drawer for a charging drawer, one in the pantry for the vacuum, and one above the overheads if you want strip lighting up there later. None of them cost much at rough-in and all of them are a nuisance afterwards.</p>

            <h3>What We Need From You</h3>
            <p>The cabinet drawings with bench heights and overhead heights, the appliance list with model numbers (cooktop, oven, rangehood, dishwasher, microwave, fridge dimensions), the splashback material, and a half-hour walk through the plan with the appliances you'll actually use in your hands. From that we build the circuit list and the point schedule, and the cabinetmaker, stonemason and tiler all work from the same positions.</p>
        `,
        faqs: [
            {
                question: 'Does a microwave need its own circuit?',
                answer: 'Not by rule, but it\'s worth it in a kitchen renovation. A microwave can draw close to the full capacity of a standard 10 amp powerpoint while it runs, so sharing a circuit with the kettle, toaster and air fryer is how a kitchen ends up tripping every morning. On a renovation we\'ll normally give a built-in microwave its own circuit, or at least put it on a circuit with nothing else that heats. For a benchtop microwave in an existing kitchen, keeping it off the kettle\'s powerpoint run is the practical fix.',
            },
            {
                question: 'Does a dishwasher need its own powerpoint?',
                answer: 'Yes, a single powerpoint of its own, and ideally in the cupboard beside the dishwasher rather than behind it. Behind the machine means pulling it out to unplug it, and the plug can be crushed against the wall. Beside it means the dishwasher can be isolated for a leak or a repair in seconds. The point should be on a circuit that isn\'t shared with the bench appliances, because a dishwasher has a heating element as well as a motor.',
            },
            {
                question: 'Can powerpoints go on a kitchen island?',
                answer: 'Yes, and they should, but the cable has to reach the island through the floor during rough-in, before the slab is patched or the floor goes down. There\'s no way to add one later without lifting the island or running cable in a visible duct. The points usually go on an end panel or on the side facing away from the stools so a cable isn\'t draped across where people sit. Allow at least one double, and more if the mixer and coffee machine will live there.',
            },
            {
                question: 'Where does the powerpoint for a rangehood go?',
                answer: 'Inside the canopy space or in the cupboard directly above the hood, wherever the manufacturer\'s template says the plug comes out. For an undermount hood inside a cabinet, the point goes in that cabinet above the hood body. For a canopy hood on an open wall, the point sits behind the flue cover. Some hoods are hardwired instead, so the model needs to be known before rough-in, along with whether it\'s ducted, because the duct path has to be left clear in the cabinetry.',
            },
            {
                question: 'Are USB powerpoints worth it in a kitchen?',
                answer: 'Yes, in one or two spots, not everywhere. The island end or the bench corner where phones already pile up is the place, and USB-C is the socket to specify now that most devices use it. The downside is that the USB module ages faster than the powerpoint around it as charging standards move on, so it\'s a modest spend rather than a whole-kitchen decision. Everywhere else, a plain double powerpoint is cheaper and lasts longer.',
            },
        ],
        cta: {
            heading: 'Doing a Kitchen?',
            description:
                'Send us the cabinet drawings and the appliance list and we\'ll turn them into a circuit and powerpoint schedule before the stone is templated. Wynn Vale based, covering Adelaide.',
            linkText: 'Renovation Electrical',
            href: '/renovation-electrician-adelaide',
        },
    },
    {
        slug: 'running-power-to-shed-garage-granny-flat-adelaide',
        title: 'Running Power to a Shed, Garage or Granny Flat',
        seoTitle: 'Running Power to a Shed in Adelaide | JPD',
        metaDescription:
            'Running power to a shed, garage or granny flat in Adelaide: sub-main and sub-board versus an extension lead, underground cable, safety switches, 15 amp outlets.',
        excerpt:
            'An extension lead out the laundry window gets a shed through one weekend. A properly sized sub-main and a small switchboard at the shed is what makes it a workshop. Here is what the job involves.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Advice',
        image: '/images/shed_switchboard.webp',
        gallery: [
            {
                src: '/images/shed_switchboard_mawson_lakes_golf_course.webp',
                alt: 'Sub-board installed inside a shed with safety switches and circuit breakers',
                caption: 'A shed sub-board: its own main switch, RCD protection on every circuit, and room to add more later.',
            },
            {
                src: '/images/shed_power.webp',
                alt: 'Powerpoints and conduit installed along a shed wall',
                caption: 'Surface conduit and outlets where the tools actually get used, instead of one lead snaking across the floor.',
            },
            {
                src: '/images/shed_workbench_lighting_mawson_lakes.webp',
                alt: 'LED batten lights over a shed workbench',
                caption: 'Lighting over the bench is the thing people wish they\'d planned for. Easy while the sub-mains are going in.',
            },
        ],
        content: `
            <h3>Why This Matters to You</h3>
            <p>Running power to a shed properly means a cable sized for the distance and the load, buried or run so it can't be damaged, feeding a small switchboard at the shed with its own safety switches. The shortcut version is a long extension lead through the window, and the consequence of living with that isn't only inconvenience.</p>
            <p>A lead across a yard gets mowed, driven over, left in puddles and joined with tape. It has no overload protection of its own beyond the breaker back at the house, and if it feeds a welder or a compressor it runs warm every time the tool starts. Leads are how shed fires and shocks happen. A cable in the ground with proper protection at both ends is how they don't.</p>

            <h3>Sub-Main and Sub-Board vs an Extension Lead</h3>
            <p>A sub-main is a dedicated cable from the house switchboard to a second, smaller switchboard in the shed, called a sub-board. From the sub-board, the shed gets its own circuits: lights, general powerpoints, and anything heavy on its own circuit. The sub-main is protected by a breaker at the house, and each shed circuit is protected by a safety switch and breaker at the shed.</p>
            <p>That layout is what gives you a usable building. The lights don't dim when the compressor kicks in, a fault in the shed trips the shed, not the kitchen, and you can isolate the whole shed at one switch. It's also the only arrangement that lets you add a second welder, an air conditioner or an EV charger later without running a new cable across the yard.</p>
            <p>An extension lead is a temporary arrangement by design. It isn't fixed wiring, it isn't protected against mechanical damage, and a long one running a heavy tool loses enough voltage along its length to make the tool run hot and the lead run hotter. It's fine for a drill on a Saturday. It's not an answer to a shed.</p>

            <h3>Getting the Cable There: Underground and Overhead</h3>
            <p>Most domestic shed runs go underground in heavy-duty conduit, with marker tape in the trench above the conduit so anyone digging later finds the tape first. The Wiring Rules set the depth of cover from how the cable is protected and what's on top of it, so a run under lawn and a run under a driveway are treated differently. As a rough guide, a conduit run under a garden has around half a metre of cover, and your electrician confirms the depth for each section of the route before the trench is backfilled. Trench depth is one of the things that gets checked, so don't fill it in early to be helpful.</p>
            <p>If you're digging the trench yourself to save money, that's common and sensible. Lodge a free Before You Dig enquiry first, and remember it only shows the network's assets, not the private water, gas or power runs already on your block. An overhead run between buildings is possible where the span and clearances allow, but in a suburban yard underground is usually the better result.</p>

            <h3>Sizing the Cable for the Distance</h3>
            <p>Shed power that flickers and trips is almost always an undersized sub-main. Cable has resistance, so a long run drops voltage under load, and a shed sixty metres from the house needs a noticeably heavier cable than one fifteen metres away for the same tools. We size it from the route length and the realistic peak load, with headroom for what you might add. The difference in cable cost between adequate and generous is small compared with digging the trench twice.</p>

            <h3>What Goes in the Shed</h3>
            <ul>
                <li><strong>A sub-board</strong> with a main switch, and 30 mA RCD protection on every circuit, which the current Wiring Rules require for a home's final circuits anyway and which matters more in a building with concrete floors, metal walls and wet hands.</li>
                <li><strong>Lighting</strong> on its own circuit, so a tool tripping a powerpoint circuit doesn't leave you in the dark with a spinning blade. LED battens or high bays for a working shed, switched by the door.</li>
                <li><strong>General powerpoints</strong> around the walls at bench height, more than you think, including doubles near the bench and one near the door for the mower and blower.</li>
                <li><strong>15 amp outlets</strong> for welders, larger compressors and some machinery. A 15 amp plug has a wider earth pin so it physically can't go into a 10 amp powerpoint, which is deliberate. Each 15 amp outlet gets its own circuit sized for it. Filing the pin down to make it fit a 10 amp outlet is a fire waiting to happen.</li>
                <li><strong>Outdoor points</strong> under the eave for the pressure washer and the caravan if one lives beside the shed.</li>
            </ul>

            <h3>What the House Switchboard Needs</h3>
            <p>The sub-main needs a breaker and a spare way at the house board, and the board has to be able to carry the shed's load on top of the house. Older boards in Adelaide's north-east often have neither spare ways nor the capacity, and if the board still has ceramic fuses or no safety switches, feeding a new sub-main from it means that part of the board is brought up to current requirements. Sometimes that tips the job into a switchboard upgrade. It's worth knowing before the trench is dug, so we look at the board first and quote the whole job rather than discovering it on the day.</p>
            <p>Three-phase is worth a thought if you have it at the house and run three-phase machinery, or plan an EV charger in the shed. If you don't have it, a single-phase sub-main sized properly covers the vast majority of home workshops.</p>

            <h3>Granny Flats and Detached Dwellings</h3>
            <p>A granny flat (ancillary accommodation, in planning language) is a different animal from a shed because people sleep in it. It needs its own sub-board with full RCD protection, a proper lighting and power layout, interconnected smoke alarms as the building rules require for a new dwelling, and often a dedicated circuit for a split system, a hot water unit and a cooktop. The sub-main is correspondingly heavier.</p>
            <p>On approvals: in South Australia, ancillary accommodation needs development approval regardless of size, through the PlanSA portal or your council, and it covers planning and building consent including connection to electricity. The Planning and Design Code treats it as subordinate to the main house and sharing its services, which in practice means it's usually fed as a sub-main from the house board rather than getting its own supply. Whether a separate meter is possible or sensible is a conversation with SA Power Networks and your retailer, and the rules have been changing, so check the current position with council before you plan around it. The electrical work itself doesn't need council approval, but the building it's going into usually does, and sheds above certain sizes do too.</p>

            <h3>Before You Ring</h3>
            <p>Measure the route from the house switchboard to where the shed board will go, list what you'll run out there (and what you'd like to run in five years), note whether the ground is lawn, paving or concrete, and take a photo of the house switchboard with the door open. With those four things we can give you a straight answer on what the job involves.</p>
        `,
        faqs: [
            {
                question: 'Can I run an extension lead to my shed permanently?',
                answer: 'You shouldn\'t. An extension lead is designed as a temporary connection, not fixed wiring, so it has no protection against being cut, crushed or left in water, and a long lead feeding a heavy tool runs hot from voltage drop. It also means any fault in the shed trips a circuit in the house. The permanent answer is a sub-main cable, buried in conduit or run where it can\'t be damaged, feeding a small switchboard in the shed with its own safety switches.',
            },
            {
                question: 'Does a shed need its own switchboard?',
                answer: 'For anything more than a single light and one powerpoint, yes. A sub-board in the shed gives it a main switch to isolate the whole building, separate circuits for lights, powerpoints and heavy tools, and safety switches where the work is being done. It also means a tripped circuit is reset in the shed rather than a walk back to the house. Running single circuits all the way from the house works for a garden shed, not for a workshop.',
            },
            {
                question: 'Does a shed need its own safety switch?',
                answer: 'Yes. Under the current Wiring Rules every new or altered final circuit in a home needs 30 mA safety switch protection, and the circuits in a shed are no exception. The usual arrangement is an RCD or RCBOs in the shed sub-board, so each circuit is protected and resettable where you\'re working. A shed is exactly the environment the protection is for: concrete floors, metal cladding, power tools with worn leads and wet hands from the garden.',
            },
            {
                question: 'Do I need council approval to run power to a shed in South Australia?',
                answer: 'Not for the electrical work itself. That\'s done by a licensed electrician who issues an electronic Certificate of Compliance for it. The shed or granny flat may need development approval depending on its size, height and position, and a granny flat always does. Check your property\'s zone on PlanSA or ask your council before the slab goes down, because retrofitting approval is harder than getting it first. Trenching across your block also needs a Before You Dig enquiry, which is free.',
            },
            {
                question: 'Can a 15 amp welder run off a normal powerpoint?',
                answer: 'No. A 15 amp plug has a wider earth pin so it won\'t fit a standard 10 amp powerpoint, and that\'s deliberate: the welder can draw more than the powerpoint and its circuit are built for. Grinding the pin down or using an uncertified adaptor pushes the full load through a 10 amp outlet, which overheats it and the cable behind it. The fix is a 15 amp outlet on its own circuit, sized for the welder, which is a routine part of a shed fit-out.',
            },
        ],
        cta: {
            heading: 'Need Power Out to a Shed?',
            description:
                'Measure the route, list what you\'ll run out there and send a photo of the house switchboard, and we\'ll tell you what the job involves. Based in Wynn Vale, covering Adelaide.',
            linkText: 'Get in Touch',
            href: '/contact',
        },
    },
    {
        slug: 'outdoor-powerpoints-garden-power-adelaide',
        title: 'Outdoor Powerpoints and Garden Power: Where to Put Them and What They Need',
        seoTitle: 'Outdoor Powerpoints and Garden Power | JPD',
        metaDescription:
            'Outdoor powerpoints done properly: weatherproof outlets and IP ratings, safety switches, where to put them (BBQ, alfresco, front of house) and garden lights.',
        excerpt:
            'Every house we visit has at least one extension lead running out a window to something that should have had its own outlet. Here is where outdoor power earns its keep, and what makes it safe.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Advice',
        image: '/images/pool_equipment_station_golden_grove.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>An outdoor powerpoint installed properly is a weatherproof outlet rated for the spot it's in, on a circuit with 30 mA safety switch protection, positioned where the lead doesn't have to cross a path or a lawn to reach what it feeds. Get that right and the BBQ rotisserie, the pressure washer, the Christmas lights and the pond pump all just work.</p>
            <p>Get it wrong, or skip it and run leads out of windows instead, and you have 240 volts outside in the rain with nothing between you and it but a lead that's been mowed twice. Outdoors is where people are wet, barefoot and touching metal, which is exactly why the Wiring Rules treat it carefully. It's also where an indoor powerpoint with a flap on it fills with water in the first storm and starts tripping, or worse, doesn't trip.</p>

            <h3>Weatherproof Outlets and IP Ratings</h3>
            <p>An outdoor powerpoint is a sealed unit with a gasketed lid and a rating for dust and water, written as two digits after IP. The second digit is water. A 4 means splashing from any direction, a 5 means water jets, a 6 means powerful jets. The right rating depends on the spot: under a deep verandah is a different environment from an exposed wall that gets driven rain or a garden bed with a sprinkler. The common double weatherproof outlets sold in Australia are rated for exposed positions with the lids closed, and the lids matter, which is why we fit ones that close over a plug rather than only when empty.</p>
            <p>The cable to it is run in conduit or inside the wall, not clipped along a fence in the sun, and the outlet is mounted where it won't be hit by the mower or buried behind a planter.</p>

            <h3>Safety Switches</h3>
            <p>Under the current Wiring Rules every new or altered final circuit in a home gets 30 mA RCD protection, and an outdoor circuit is the one you'd choose to protect if you could only do one. We'll often put outdoor outlets on their own circuit rather than extending a bedroom circuit, so a wet outlet trips the outdoor circuit and not the house. If the switchboard has no RCD protection and no spare ways, that becomes part of the job, and a photo of the board open tells us before we quote.</p>

            <h3>Where Outdoor Powerpoints Earn Their Keep</h3>
            <ul>
                <li><strong>BBQ and outdoor kitchen:</strong> a double at bench height beside the BBQ for the rotisserie, the bar fridge and the blender. A built-in outdoor kitchen wants the fridge on its own point in the cabinet, out of the weather and with airflow.</li>
                <li><strong>Alfresco and pergola:</strong> a double on the house wall under cover for the heater remote receiver, speakers, fairy lights and the laptop. If strip heaters or a ceiling fan are planned, those go on their own circuits, so plan them together.</li>
                <li><strong>Pool and spa equipment area:</strong> the pump, chlorinator and heater need their own supply, and the Wiring Rules set zones around the water that decide where outlets and equipment can go. That's a design job before anything is mounted, not a powerpoint on the nearest wall.</li>
                <li><strong>Front of the house:</strong> one under the eave or on the porch for Christmas lights, the leaf blower and the car vacuum. A switch inside the front door that controls it is a small luxury that gets used every December.</li>
                <li><strong>Garden shed:</strong> a single circuit to a small shed for a light and a powerpoint, or a proper sub-main if it's a workshop.</li>
                <li><strong>Side of the house:</strong> near the taps for the pressure washer and the hose reel pump, and near the bins if you'll ever want a sensor light there.</li>
                <li><strong>Caravan or boat parking:</strong> a 15 amp outlet, which has a wider earth pin and its own circuit, so the van can be left on charge without an adaptor hanging off a 10 amp outlet.</li>
            </ul>

            <h3>Garden and Feature Lighting: 12 Volt or 240 Volt</h3>
            <p>Garden lighting runs either at extra-low voltage (12 or 24 volts from a transformer) or at 240 volts as fixed wiring.</p>
            <p><strong>Extra-low voltage</strong> is the plug-in kits and the better professional systems: a transformer plugs into an outdoor powerpoint or is hardwired, and thin cable runs to the fittings through the garden beds. A nicked cable in a garden bed at 12 volts is a nuisance rather than a shock hazard, which is why these kits are made for homeowners to lay out. The limitation is voltage drop: a long run with a lot of fittings dims the far end, so bigger gardens get split into several runs from one transformer or several transformers. This is where a properly placed outdoor powerpoint pays for itself, because the transformer needs one.</p>
            <p><strong>240 volt</strong> fittings suit long runs, brighter floods, driveway bollards and anything far from the house. The cable is run in conduit underground with proper depth of cover and marker tape, each fitting is earthed or double insulated, and the lot is on an RCD-protected circuit. In South Australia that's fixed wiring and has to be done by a licensed electrician who issues a certificate of compliance for it.</p>
            <p>Either way, think about switching before the trench is dug: a dusk-to-dawn sensor for path lights, a timer or smart switch for feature lighting, and a manual switch inside for the lot. Pulling an extra cable for a second switched group costs almost nothing while the conduit is open.</p>

            <h3>Pond and Water Feature Pumps</h3>
            <p>Most domestic pond pumps are either extra-low voltage from a transformer or 240 volt submersible units with a sealed lead and plug. Both need an outdoor powerpoint near the pond, under cover if possible, on an RCD-protected circuit, and the plug and lid kept off the ground. The Wiring Rules treat fountains and ponds people can touch with care for the same reason as pools, so a larger feature, anything people might wade in, or a pump that has to be hardwired is a design conversation rather than a powerpoint. For a small plug-in pump, the powerpoint position and the lead route are the whole job: the lead should reach without a join, and joins outdoors are where trouble starts.</p>

            <h3>Christmas Lights</h3>
            <p>Buy lights marked for outdoor use, with the IP rating on the box, and read whether the transformer itself is rated for outside, because many aren't and need to live indoors or in a covered spot. Plug them into a weatherproof outlet with the lid closed over the plug, keep the joins between strings up off the ground, and switch them off at the outlet in a storm. If the only option is a lead from inside, a single heavy-duty outdoor lead through a window you can close on it beats a daisy chain of indoor ones, but a front-of-house outdoor outlet is the fix that makes every December easier.</p>

            <h3>Planning It</h3>
            <p>Walk the yard and note everything you plug in outdoors, where it lives and where the lead currently runs from. Add what you'd like: feature lighting, a heater, a pump, a shed light. Then send us that list and a photo of the switchboard. Most of these points go in together in one visit, and doing them with any paving or landscaping work means the conduit goes under the paving rather than around it.</p>
        `,
        faqs: [
            {
                question: 'Does an outdoor powerpoint need a safety switch?',
                answer: 'Yes. Under the current Wiring Rules every new or altered final circuit in a home has 30 mA RCD protection, so a new outdoor powerpoint is protected either by an RCD at the switchboard or, where a circuit is extended, from the point the new wiring starts. Outdoors is the highest risk spot in the house for a shock, with rain, hoses and bare feet, so if the switchboard has no safety switches at all, adding one for the outdoor circuit is the first thing we\'d do.',
            },
            {
                question: 'Can I leave Christmas lights plugged in outside in the rain?',
                answer: 'Only if the lights, the transformer and the outlet are all rated for it, and it\'s still better to switch them off at the outlet in a storm. Outdoor-rated lights carry an IP rating on the box, but many sets have a transformer that\'s only rated for indoors or under cover. The outlet should be a weatherproof one with the lid closed over the plug, and joins between strings kept up off the wet ground. Indoor lights, indoor leads or an indoor powerboard outside are the common failure.',
            },
            {
                question: 'Can an outdoor powerpoint be mounted on a fence or post?',
                answer: 'Yes, with the cable protected the whole way. A powerpoint on a post or fence is fed by cable in conduit, either underground to the post or inside a solid post, never clipped along the fence rails where the sun, the mower and the dog get to it. The outlet needs an IP rating suited to full weather exposure and a mounting height that keeps it out of sprinklers and garden beds. For a long run to a back fence, voltage drop and trench depth are sized the same way as power to a shed.',
            },
            {
                question: 'Does a pond pump need a special powerpoint?',
                answer: 'A weatherproof outdoor powerpoint on a safety switch protected circuit, positioned so the pump\'s lead reaches without a join, is what most plug-in pond pumps need. Keep the outlet above ground level and under cover where you can, with the lid closed over the plug. Extra-low voltage pumps also need somewhere dry for the transformer. A larger feature, anything people can wade in, or a pump that\'s hardwired brings the wiring rules for pools and fountains into play and needs to be designed before the pond is built.',
            },
            {
                question: 'Can I install 12 volt garden lights myself in South Australia?',
                answer: 'A plug-in extra-low voltage kit, where the transformer plugs into an existing outdoor powerpoint and nothing connects to the mains, is designed for a homeowner to lay out and plug in. Running 240 volt garden lights, hardwiring a transformer or adding the outdoor powerpoint the kit plugs into is work on wiring connected to the mains, and in South Australia that has to be done by a licensed electrician. If you want a tidy result, get the outdoor outlets positioned for the transformers first, then lay the kit out yourself.',
            },
        ],
        cta: {
            heading: 'Need Power Outside?',
            description:
                'Walk the yard, list what you plug in outdoors and send us a photo of the switchboard. Most outdoor points go in together in one visit. Based in Wynn Vale, covering Adelaide.',
            linkText: 'Powerpoint Installation',
            href: '/powerpoint-installation-adelaide',
        },
    },
];
