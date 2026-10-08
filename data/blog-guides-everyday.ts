import type { BlogPost } from './blog-posts';

/**
 * Everyday household electrical questions: the things people search for at
 * 9pm when something feels wrong, or the week they get the keys. Each one is
 * written to answer the query in the first sentence and to be accurate for
 * South Australia specifically.
 */
export const everydayGuides: BlogPost[] = [
    {
        slug: 'shock-or-tingle-from-tap-shower-appliance',
        title: 'Got a Shock or Tingle From a Tap, Shower or Appliance? What It Means and What to Do',
        seoTitle: 'Tingle From a Tap or Shower? Do This Now | JPD',
        metaDescription:
            'A tingle from a tap, shower or appliance is a fault, not static. What it usually means, what to do in the next five minutes, and when to ring SA Power Networks.',
        excerpt:
            'A tingle from a tap or an appliance is never normal. It usually means an earthing or neutral problem, and the gap between a tingle and a serious shock can be one more thing going wrong.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Safety',
        image: '/images/switchboard_fault_finding.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>If you got a shock or tingle from a tap, shower, appliance or any metal fixture in your home, treat it as a fault that needs fixing today, not a quirk of the house. Metal that should be sitting at earth has picked up voltage from somewhere, and the only reason it felt like a tingle rather than a shock is that the voltage happened to be low at that moment.</p>
            <p>The honest consequence of ignoring it: the same fault that produces a tingle at 10 volts can produce a fatal shock at 230 if the connection it depends on finally lets go. People have died in showers from exactly this. It's also one of the few faults your safety switch may not catch, which is covered below.</p>
            <p>So this isn't a "keep an eye on it" job. Here's what's probably going on, what to do in the next five minutes, and who to call.</p>

            <h3>Why a Tap or Shower Gives You a Tingle</h3>
            <p>Your taps, pipes, metal sinks, appliance cases and the metal frame of the house are all tied together and connected to earth at your switchboard. In normal operation they sit at the same voltage as the ground you're standing on, so you can't feel anything.</p>
            <p>In most Australian homes the earth system is also joined to the neutral at the switchboard. That's the MEN connection (main earthing neutral), and it's the standard way houses here are wired. It works well while the neutral back to the street is solid. If that neutral deteriorates, at the pole, at the connection on your house, in the meter box or in an old switchboard, the return current for everything running in the house starts looking for another path. The earth system is that path, and everything bonded to it rises in voltage: taps, pipes, the washing machine case, the shed frame.</p>
            <p>That's why the classic pattern is a tingle from the shower tap. You're wet, barefoot, standing on a tiled floor with a drain in it, and holding metal. You've become the best path to earth in the house.</p>
            <p>Other causes of the same symptom:</p>
            <ul>
                <li><strong>A faulty appliance.</strong> Insulation breaking down inside a washing machine, kettle, fridge or hot water service puts voltage onto its case. If the earth connection is good, that current flows to earth and a safety switch should trip. If the earth is poor, or the circuit has no RCD, you feel it instead.</li>
                <li><strong>A broken or corroded earth.</strong> An earth electrode that's rusted through, an earth wire that was never connected, or plastic pipe replacing a section of metal pipe that used to carry the earth. Common in older houses that have had plumbing work.</li>
                <li><strong>A damaged or disconnected neutral in your own installation.</strong> A loose neutral in the switchboard or meter box behaves like the network fault above, but it's your side of the meter.</li>
            </ul>

            <h3>Got a Shock From the Tap: What to Do Right Now</h3>
            <ul>
                <li><strong>Stop using water and don't touch the fixture again.</strong> Don't go back and test it with the back of your hand, and keep kids out of the bathroom and laundry.</li>
                <li><strong>If it was one appliance, unplug it at the wall</strong> if you can do that without touching the appliance body. Switch the powerpoint off first.</li>
                <li><strong>If it's taps around the house, or more than one metal thing, ring SA Power Networks on 13 13 66.</strong> That line runs 24 hours and a crew attends to check for free. A tingle from plumbing is one of the symptoms of a network neutral fault, and the crew works out whether the problem is on their side of the meter or yours.</li>
                <li><strong>If the lights are also behaving oddly</strong>, some brighter than normal and others dim, or appliances running strangely, that strengthens the neutral theory. Turn the main switch off if you can do it safely, and ring 13 13 66 straight away.</li>
                <li><strong>If someone has had a proper shock</strong>, not a tingle, get them checked by a doctor even if they feel fine. Ring 000 for anyone who lost consciousness, has chest pain or isn't breathing normally.</li>
            </ul>
            <p>Switching the main switch off removes the risk from your own installation while you wait. It won't fix a network neutral problem by itself, which is why the phone call matters.</p>

            <h3>Who to Call: SA Power Networks or an Electrician</h3>
            <p>SA Power Networks' own advice is to report any shock or tingle to them on 13 13 66 and keep away from the item until they've checked it. They may switch the power off until repairs are done. If the cause is in the network, they fix it and reconnect at no charge. If the fault is inside your property, they'll tell you to get a licensed electrician, and that part is on the owner (or the landlord, if you're renting).</p>
            <p>If you're confident it's a single appliance, an electrician is the right first call. We test the appliance, check the earth on that circuit, and check the RCD actually trips. Often the appliance is scrap and the real finding is that the circuit had no safety switch, which is why nobody knew the appliance was leaking.</p>
            <p>If you aren't sure which it is, ring us. We'll ask three or four questions and tell you whether to call 13 13 66 first.</p>

            <h3>Why Your Safety Switch Might Not Have Tripped</h3>
            <p>An RCD watches the current going out on the active and coming back on the neutral of the circuits it protects, and trips when they don't match. It's very good at catching a faulty appliance on a protected circuit.</p>
            <p>It can't see a network neutral fault, because that fault raises the voltage of the whole earth system from upstream of the RCD. Nothing is leaking through the RCD, so it has nothing to react to. Electrical regulators in other states say exactly this: RCDs don't protect against shocks caused by a broken neutral. That's the reason a tingle from the taps is treated as an emergency rather than a nuisance.</p>
            <p>It also won't help if the circuit the appliance is on doesn't have an RCD at all, which is still the case for a lot of Adelaide homes built before the early 1990s that haven't had the board touched.</p>

            <h3>What an Electrician Checks</h3>
            <ul>
                <li>Voltage between the taps or appliance case and true earth, under load and without</li>
                <li>The main earth conductor, earth electrode and the MEN link at the switchboard</li>
                <li>The neutral connections at the main switch and meter, for heat, looseness or corrosion</li>
                <li>Earth continuity to the metal plumbing and any bonding in bathrooms</li>
                <li>Insulation resistance on the suspect appliance and circuit</li>
                <li>Whether every power and lighting circuit has working RCD protection, and a trip test on each one</li>
            </ul>
            <p>A proper check means putting the fault under the same conditions that produced the tingle, not just looking at the board and declaring it fine. If someone turns up, flicks a test button and leaves, the fault's still there.</p>

            <h3>Is a Tingle From a Tap Dangerous if It's Only Mild?</h3>
            <p>Yes. The tingle is the warning you get while the fault is partial. A neutral connection that's corroding gets worse under load and in heat, which in Adelaide means a hot afternoon with the air conditioner running is when it tends to finish failing. Nobody can tell you from the strength of today's tingle how much margin is left.</p>
            <p>Reporting it is also expected in South Australia: electric shocks from installations and appliances are reportable to the Office of the Technical Regulator, and the occupier is one of the people who can be responsible for that. Make the calls first, worry about the paperwork after.</p>

            <h3>The Short Version</h3>
            <ul>
                <li>Tingle from taps, shower, pipes or metal around the house: stop, keep away, ring SA Power Networks on 13 13 66, turn the main switch off if safe</li>
                <li>Tingle from one appliance: switch it off at the wall, unplug it, stop using it, ring an electrician</li>
                <li>Anyone actually shocked: medical check, 000 if they're unwell</li>
                <li>Don't go back and test it with your hand, and don't let the kids near the bathroom until it's cleared</li>
            </ul>
        `,
        faqs: [
            {
                question: 'Why do I only get a tingle from the tap when I\'m in the shower?',
                answer: 'Because that\'s when your body is the best path to earth in the house. Wet skin conducts far better than dry, you\'re usually barefoot on a wet tiled floor with a metal drain, and you\'re gripping a metal tap. A fault that puts a few volts on the plumbing can be there all day without anyone noticing at the kitchen sink, then be obvious in the shower. The fault isn\'t smaller because you only feel it wet, and it still needs reporting and testing.',
            },
            {
                question: 'Can my safety switch stop a shock from a tap?',
                answer: 'Not if the cause is a lost or damaged neutral on the supply. A safety switch trips when current leaks out of a circuit it protects. A neutral fault raises the voltage of the whole earth system, including taps and pipes, from upstream of the switchboard, so nothing leaks through the RCD and it never trips. It will usually catch a faulty appliance on a protected circuit, which is why the two situations are treated differently: appliance tingle, call an electrician; taps and plumbing tingle, ring SA Power Networks on 13 13 66 first.',
            },
            {
                question: 'Why did I get a shock from the washing machine but nothing tripped?',
                answer: 'Most often because the laundry circuit has no safety switch, or the earth to that outlet is poor. A washing machine with insulation breaking down puts voltage on its metal body. With a good earth and an RCD, that leak flows to earth and the RCD trips before you touch it. Without either, the current waits for you. Switch the powerpoint off, unplug the machine and stop using it. Have the circuit tested, not just the machine, because the missing protection is the bigger finding.',
            },
            {
                question: 'Will SA Power Networks charge me if the fault turns out to be inside my house?',
                answer: 'No, the inspection is free either way. SA Power Networks sends a crew to check a reported shock or tingle at no charge and works out whether the cause is on their network or inside your property. If it\'s theirs, they repair it and reconnect for free. If it\'s on your side of the meter, they\'ll tell you to engage a licensed electrician and that repair is the owner\'s cost. They may leave the supply off until the installation has been made safe.',
            },
            {
                question: 'Is it safe to keep using the kitchen if the tingle was from the bathroom tap?',
                answer: 'Treat the whole house as suspect until it\'s been checked. The taps, sink, pipes and appliance cases are all bonded to the same earth, so a fault that\'s showing up in the bathroom is usually present at the kitchen sink and laundry too, just less noticeable because you\'re dry and wearing shoes. Keep everyone off the metal fixtures, switch the main switch off if you can do it safely, and ring 13 13 66. It\'s a couple of hours of inconvenience against a real risk.',
            },
        ],
        cta: {
            heading: 'Had a Tingle or Shock at Home?',
            description:
                'If it\'s one appliance, or SA Power Networks have checked and said the fault is on your side, we test the earth, the neutral connections and the RCDs properly before anyone turns the water back on. Based in Wynn Vale, covering Adelaide.',
            linkText: 'Book an Emergency Electrician',
            href: '/emergency-electrician-adelaide',
        },
    },
    {
        slug: 'powerboards-double-adaptors-extension-leads-safely',
        title: 'How to Use Powerboards, Double Adaptors and Extension Leads Safely at Home',
        seoTitle: 'Using Powerboards and Extension Leads Safely | JPD',
        metaDescription:
            'What overloads a powerboard, why piggyback plugs and daisy-chaining cause fires, outdoor leads and safety switches, and when the real fix is another powerpoint.',
        excerpt:
            'Powerboards and extension leads aren\'t dangerous. Using them as permanent wiring is. Here\'s what actually overloads them, the setups that start fires, and the point where adding a powerpoint is cheaper than the risk.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Safety',
        image: '/images/powerpoint_installation_1764247914293.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>Using a powerboard or extension lead safely at home comes down to one number: a standard Australian powerpoint, powerboard and lead are all rated for 10 amps, which is about 2,400 watts in total, and nothing you plug into them changes that. Every powerboard fire we've heard about started with someone forgetting it.</p>
            <p>The consequence of getting it wrong isn't a tripped breaker. A powerboard running near its limit for hours gets hot at the socket contacts and the cord, the plastic softens, and it can smoulder behind a couch or under a desk for a long time before anything trips. Circuit breakers protect the wiring in the wall, not the board on the floor. If the board is drawing 9.5 amps all evening, the breaker is perfectly happy.</p>
            <p>Below is how to count the load, the setups that cause the trouble, and when to stop buying boards and get a powerpoint put in.</p>

            <h3>How to Work Out What Overloads a Powerboard</h3>
            <p>Add up the watts of what's plugged in, not the number of plugs. Four phone chargers, a lamp, the TV and a router come to maybe 300 watts. One fan heater on its own is usually 2,000 to 2,400 watts. The powerboard doesn't care that the heater only took one socket.</p>
            <p>The watts are printed on the appliance rating plate or the charger. Rough guide for the common offenders:</p>
            <ul>
                <li>Fan heater, oil column heater, panel heater: 1,000 to 2,400 W</li>
                <li>Kettle: 1,800 to 2,400 W. Toaster: 800 to 1,800 W. Microwave: 1,000 to 1,500 W</li>
                <li>Hair dryer: 1,200 to 2,200 W. Iron: 1,500 to 2,400 W</li>
                <li>Portable air conditioner: 1,000 to 1,500 W</li>
                <li>Fridge, TV, computer, gaming console: a few hundred watts each</li>
                <li>Chargers, lamps, modems, speakers: tens of watts</li>
            </ul>
            <p>The rule we give customers: anything that makes heat gets its own powerpoint. Heaters, kettles, toasters, irons, hair dryers and portable air conditioners go straight into the wall. Everything else can share, provided the total stays comfortably under 2,400 watts and the board has overload protection.</p>
            <p>SA Government safety guidance says the same thing in fewer words: don't connect appliances that draw a lot of power to a powerboard, and don't use one as a substitute for permanent powerpoints.</p>

            <h3>Piggyback Plugs, Double Adaptors and Daisy-Chaining</h3>
            <p><strong>Double and triple adaptors</strong> have no overload protection and no switch. Two 2,400 watt appliances on one double adaptor is 20 amps through a fitting rated for 10. They're fine for two lamps. They're how a bedroom heater and a hair dryer start a fire. SA Government advice is never to plug a double or triple adaptor into a powerboard, and we'd go further and say replace them with a switched powerboard that has overload protection.</p>
            <p><strong>Piggyback plugs</strong> (the ones with a socket on the back of the plug) have a legitimate use: a lamp that needs the same outlet as a clock. They have the same problem as a double adaptor. Whatever goes on the back is sharing the one 10 amp outlet, and the stacked weight tends to pull the pins partly out, which heats the contacts.</p>
            <p><strong>Daisy-chaining</strong> is a powerboard plugged into a powerboard, or leads joined to leads. Everything downstream is still limited to the 10 amps of the first plug in the wall, so it adds sockets without adding capacity, and every extra connection is another place to overheat. Don't plug one board into another, and don't join extension leads together. Both are on the SA Government's list of things not to do, and both are what we find behind the TV cabinet in about half the homes we visit.</p>

            <h3>Heaters and Extension Leads</h3>
            <p>A 2,400 watt heater on a cheap 1 mm² extension lead is the single most common winter fire setup. The lead is at its limit, and if it's partly coiled or run under a rug, the heat can't escape. SA Government guidance is to fully unwind a lead before use so it doesn't overheat, and to keep the load under 2,400 watts.</p>
            <p>If a heater has to be on a lead for a night, use a short heavy-duty lead with a 1.5 mm² or larger core (the core size is printed along the cable), fully unrolled, in the open, with nothing else on it, and switch it off at the wall when you leave the room. If a heater is on a lead every night of winter, the room needs a powerpoint where the heater lives.</p>
            <p>Oil column heaters feel safer because the surface is cooler, but they draw the same current. The lead doesn't know the difference.</p>

            <h3>Outdoor Extension Leads and Safety Switches</h3>
            <p>Outdoors is where leads get damaged, wet and walked over, so the rules tighten up:</p>
            <ul>
                <li>Use a lead sold for outdoor use, with a three-pin plug and sheathing you can't see through. Never an old two-wire flex.</li>
                <li>Keep plugs and joins off the ground and out of the wet. A plug lying in a puddle is live metal in water.</li>
                <li>Only use it from a powerpoint that's protected by a safety switch. Older houses often have RCDs on some circuits and not others, and the outdoor powerpoint or the shed is a common one that misses out. If you aren't sure, a plug-in portable RCD is cheap insurance for power tools and pumps.</li>
                <li>Don't drive over a lead or lay metal ladders across it. Damage to the sheath you can't see is how leads become live on the outside.</li>
                <li>Outdoor leads are for the job in front of you. A lead to the pond pump, the shed fridge or the Christmas lights that stays out for months is a permanent circuit without any of the protection a permanent circuit gets.</li>
            </ul>

            <h3>Signs a Board or Lead Is Already in Trouble</h3>
            <ul>
                <li>Warm to touch at the plug, the sockets or along the cord</li>
                <li>Brown marks or a plasticky smell at a socket</li>
                <li>Plugs that fit loosely or fall out, which means worn contacts and heat</li>
                <li>A board where the overload button keeps popping. That isn't a faulty button, it's the board telling you the maths doesn't work</li>
                <li>Cracked casing, a cord that's been taped, or a lead with the outer sheath split so you can see the coloured wires</li>
            </ul>
            <p>Any of those: unplug it and throw it out. A powerboard costs less than a takeaway dinner. It's also worth checking recalls.gov.au, because unsafe powerboards and adaptors have been recalled in Australia for socket contacts that misalign and casings that fail flammability tests.</p>

            <h3>When the Real Fix Is More Powerpoints</h3>
            <p>Extension leads and powerboards are temporary equipment doing a temporary job. The honest test is: if the board or lead has been in the same place for more than a month, the house needs a powerpoint there.</p>
            <p>The usual spots in Adelaide homes: behind the TV unit (one double outlet feeding eight things), the home office that used to be a bedroom with two outlets, the kitchen bench with the coffee machine, air fryer and kettle fighting over one double, the bedside with a lead under the bed to a heater, and the shed or carport running off a lead through a window.</p>
            <p>Adding a double powerpoint next to an existing one is a small job in most houses. A new circuit for a kitchen bench or a shed is more work, and whether the switchboard has space for it is the main cost driver. Either way it's a one-off cost against a fire risk that's sitting there every evening, and it comes with a Certificate of Compliance that says it was done properly.</p>
        `,
        faqs: [
            {
                question: 'How many things can I plug into one powerboard?',
                answer: 'As many as fit, as long as the total load stays under the board\'s rating, which for a standard Australian powerboard is 10 amps or about 2,400 watts. Count watts, not sockets. Six low-draw items like chargers, a lamp, a modem and a TV might total 300 watts and be fine on one board. A single fan heater can use the whole 2,400 watts by itself. Keep heat-making appliances off boards entirely and you\'ll rarely get near the limit with everything else.',
            },
            {
                question: 'Can I plug a powerboard into an extension lead?',
                answer: 'One powerboard on one extension lead is acceptable for a short-term job if the total load stays well under 2,400 watts, the lead is fully unwound and nothing heat-producing is on it. What you shouldn\'t do is chain further: a board into a board, or a lead into a lead. Every extra plug and socket is another connection that can heat up, and nothing downstream gets more capacity than the one powerpoint in the wall. If the setup is staying put, it needs a powerpoint.',
            },
            {
                question: 'Is it safe to leave a powerboard switched on all the time?',
                answer: 'Yes for low-draw equipment, as long as the board is in good condition, has overload protection, isn\'t overloaded and has air around it. A board behind a TV running a few hundred watts isn\'t a problem. What shouldn\'t be left on unattended is anything that makes heat, so switch heaters, irons and hair tools off at the wall and don\'t run them from a board at all. Check the board occasionally for warmth or discolouration, and replace it rather than tolerate either.',
            },
            {
                question: 'Can I use an indoor extension lead outside?',
                answer: 'Don\'t. Indoor leads have lighter sheathing that cracks in sunlight and damages easily, and the plugs and sockets aren\'t designed to keep water out. Use a lead sold for outdoor use, keep the joins off the ground and dry, unwind it fully, and only run it from a powerpoint with safety switch protection or through a plug-in portable RCD. Treat an outdoor lead as something for the job you\'re doing today and bring it in afterwards, not a permanent supply to a shed or pond.',
            },
            {
                question: 'Does a surge-protected powerboard stop overloading?',
                answer: 'No, they\'re two different protections. Surge protection clamps brief voltage spikes, like those from lightning or switching on the network, to protect electronics. Overload protection is a thermal or current cut-out that switches the board off when you draw more than its rating for too long. A board can have one, both or neither, and a surge-only board will happily overheat with a heater on it. Look for both on the packaging, and look for the Regulatory Compliance Mark showing it meets Australian requirements.',
            },
        ],
        cta: {
            heading: 'Running the House on Powerboards?',
            description:
                'If a board or lead has been in the same spot for months, that\'s where the house is short a powerpoint. We add outlets and new circuits across Adelaide, from Wynn Vale.',
            linkText: 'Powerpoint Installation',
            href: '/powerpoint-installation-adelaide',
        },
    },
    {
        slug: 'moving-into-new-home-electrical-checklist',
        title: 'Moving Into a New Home? The Electrical Checklist for Your First Week',
        seoTitle: 'New Home Electrical Checklist: First Week | JPD',
        metaDescription:
            'Just moved in? Find and label the switchboard, push-test the safety switches, date the smoke alarms, find the isolators, and know what paperwork to ask for.',
        excerpt:
            'The first week in a new house is when you have the time and the motivation to learn where everything is. Here\'s the electrical list, in the order it matters, and what to ask the agent or previous owner for.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Advice',
        image: '/images/switchboard_labelled_after_ridgehaven.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>Moving into a new home is the one week you'll actually look at the switchboard, so use it: find the main switch, push-test the safety switches, check the dates on the smoke alarms and work out which breaker controls what. After that it becomes "the box outside" until something goes wrong at 11pm.</p>
            <p>The consequence of skipping it is simple. The first time you need the main switch, it'll be in a hurry, in the dark, maybe with water involved, and you'll be reading unlabelled breakers by phone torch. And if a safety switch or smoke alarm has quietly died, you don't find out until the day it was supposed to work.</p>
            <p>None of this needs tools or an electrician. It's twenty minutes and a marker pen. The things that do need an electrician are flagged.</p>

            <h3>Day One: Find the Switchboard and the Main Switch</h3>
            <p>In most Adelaide houses the switchboard is in the meter box on an outside wall, often near the front or side of the house, sometimes in the garage. Newer homes may have a second board inside, in the laundry or a hallway cupboard, with the meter outside.</p>
            <p>Open it and find the <strong>main switch</strong>. It's usually the largest switch and is often labelled. Turning it off kills power to the whole house. Show every adult in the house where it is, because a tingle from a tap, water through a light fitting, or a smell of burning at the board are all "main switch off, then ring" situations.</p>
            <p>If there's solar, there'll be a separate switch labelled something like "Main Switch Inverter Supply" or "Solar Supply Main Switch". The house main switch doesn't necessarily turn the solar off, and the panels and DC cabling stay live in daylight regardless. Know which is which.</p>
            <p>If the board has ceramic fuses rather than switches, you're in an older untouched house, and the next item is going to be short.</p>

            <h3>Day One: Push-Test the Safety Switches</h3>
            <p>Safety switches (RCDs) are the devices in the board with a small button marked T or Test. Pressing the button should trip the switch off with a click. Reset it, then move to the next one. Do this during the day with computers saved and shut down, because everything on that switch loses power for a moment.</p>
            <p>You're looking for three things:</p>
            <ul>
                <li><strong>Does each one trip when tested?</strong> One that doesn't has failed and needs replacing. That's an electrician job.</li>
                <li><strong>How many are there, and what do they cover?</strong> One RCD covering the power circuits only is typical of the 1990s. Lights, the oven, the hot water service and the air conditioner often have no RCD at all in that era. Modern boards have RCD protection on every circuit, usually as combined RCD/breakers (RCBOs), one per circuit.</li>
                <li><strong>Are there none?</strong> Common in houses from before the early 1990s that haven't had the board upgraded. That's the first electrical job in the house, ahead of anything cosmetic.</li>
            </ul>
            <p>The test button checks the switch mechanically trips. It doesn't tell you it trips fast enough, which needs a tester. That's a reasonable thing to ask for in the first year if the house is older or the board looks tired.</p>

            <h3>Day Two: Label Every Breaker</h3>
            <p>Half the boards we open are labelled "Power", "Power", "Lights", "Lights" and nothing else. Spend half an hour fixing that.</p>
            <p>Plug a lamp into a powerpoint, switch breakers off one at a time until it goes out, and write down which breaker it was. Repeat for each room, the oven, the hot water service, the air conditioner, the shed and the outdoor powerpoints. Lights are easier: switch each breaker off and see what goes dark. Write it on the board's label card, or on masking tape until you can print something neater.</p>
            <p>You'll usually find a surprise: the fridge sharing with the outdoor outlets, or a breaker that controls nothing you can find. That last one is worth asking an electrician about.</p>

            <h3>Day Two: Check the Smoke Alarms and Their Dates</h3>
            <p>Press and hold the test button on each alarm until it sounds. Then take each one down (most twist off the base) and look for the manufacture date printed on the back. Smoke alarms are replaced at 10 years from manufacture, so anything from before 2016 is due regardless of whether it still beeps.</p>
            <p>What South Australia requires, per the MFS and the Development Regulations:</p>
            <ul>
                <li>Houses built since 1 January 1995 must have hardwired 240 volt alarms.</li>
                <li>If you've bought a house with replaceable-battery alarms, you have six months from title transfer to fit either hardwired alarms or units with sealed 10 year lithium batteries. That's your job as the new owner, not the seller's, and penalties apply.</li>
                <li>Hardwired alarms must be installed by a licensed electrician. Battery alarms you can fit yourself.</li>
                <li>In a rental, the owner is responsible for installing and maintaining working alarms.</li>
            </ul>
            <p>Also check where they are. One in the hallway outside the bedrooms is the minimum. The MFS recommends photoelectric alarms, interconnected where there's more than one.</p>

            <h3>Day Three: Isolators, Outdoor Power and the Things Nobody Mentions</h3>
            <ul>
                <li><strong>Hot water isolator.</strong> Electric hot water units usually have a switch or breaker near the unit or in the board. Find it before the day it starts leaking.</li>
                <li><strong>Air conditioner isolator.</strong> Split systems have an isolating switch at the outdoor unit. Ducted units have one at the roof unit or nearby.</li>
                <li><strong>Oven and cooktop.</strong> An isolating switch near the oven, or just the breaker. Know which breaker.</li>
                <li><strong>Outdoor powerpoints, the shed and the pool or pond.</strong> Check whether they work, whether the covers close, and whether anything outdoors is running off an extension lead through a window. Outdoor and shed circuits are the most common ones to be missing RCD protection in older houses, and the most dangerous ones to be missing it on.</li>
                <li><strong>The meter box door.</strong> Does it close and latch? A box that's open to the weather corrodes the connections inside.</li>
            </ul>

            <h3>Walk Through and Note the Old Fittings</h3>
            <p>With the boxes still packed, walk the house with a notepad and note anything that falls into these groups:</p>
            <ul>
                <li>Powerpoints or switches that are cracked, discoloured, loose on the wall, or a different style from the rest (a sign of piecemeal work)</li>
                <li>Halogen downlights, which run hot and tend to be the next thing to replace</li>
                <li>Light switches that do nothing, or two switches that both seem to control the same light badly</li>
                <li>Rooms with one powerpoint, which tells you where the powerboards are about to live</li>
                <li>Any sign of DIY: surface-run cable, junction boxes in odd places, tape on anything, shed wiring that looks like it was done on a Sunday</li>
                <li>Exhaust fans that don't move air, and bathroom heat lamps with missing or broken globes</li>
            </ul>
            <p>None of those are emergencies. They're the list for one visit from an electrician rather than four callouts.</p>

            <h3>What to Ask the Agent or Previous Owner For</h3>
            <ul>
                <li><strong>Certificates of Compliance</strong> for any electrical work: switchboard upgrade, solar, air conditioning, new circuits, a renovated kitchen or bathroom. In South Australia licensed electrical work must have one, and since they're issued electronically through the Office of the Technical Regulator's eCoC system, recent ones should be easy for the previous owner to forward. Keep them in a folder with the house documents.</li>
                <li><strong>Solar paperwork</strong>: who installed it, the inverter model, the monitoring login and whether the system is still under warranty.</li>
                <li><strong>Appliance manuals and installer details</strong> for the air conditioner, hot water service and oven.</li>
                <li><strong>Any report</strong> from a pre-purchase electrical inspection if one was done, or the building inspection notes on the electrical.</li>
            </ul>
            <p>No paperwork for obviously recent work doesn't mean the work is bad, but it means nobody has certified it was tested, so it goes on the list for an electrician to look over.</p>

            <h3>When to Book an Electrician in the First Month</h3>
            <p>Straight away if: there are no safety switches, a safety switch won't trip on test, a smoke alarm is missing or over ten years old in a house you've bought, or anything at the board is discoloured, warm or smells.</p>
            <p>In the first month if: the board is pre-1990s and nobody has tested it, there's visible DIY work, or you've got a list of six small things from the walk-through. Doing them together is the cheaper way to do it.</p>
        `,
        faqs: [
            {
                question: 'Does the main switch turn off the solar as well?',
                answer: 'Not always, and never the panels themselves. Most solar installations have their own switch at the switchboard, labelled something like "Main Switch Inverter Supply", and the house main switch may leave it live. Even with every switch off, the panels generate whenever there\'s daylight and the DC cabling between the panels and the inverter stays live. For an emergency, turn off the house main switch and the inverter supply main switch, keep away from the inverter and roof cabling, and leave the rest to the people you\'ve rung.',
            },
            {
                question: 'How do I find out which circuit breaker controls which powerpoint?',
                answer: 'Plug a lamp or phone charger into the powerpoint, then switch the breakers off one at a time until it goes out, and write down the match. Repeat for each room and for the oven, hot water, air conditioner and outdoor outlets. For lights, switch each breaker off and see what goes dark. Do it in daylight with computers shut down. An electrician can do it faster with a circuit tracer, which is worth asking for if you\'re having other work done anyway.',
            },
            {
                question: 'Why does the smoke alarm in my new house chirp every minute?',
                answer: 'A single chirp every 30 to 60 seconds is a low battery warning, or on some models an end-of-life warning. Hardwired alarms have a backup battery too, so a chirp doesn\'t mean the alarm is battery-only. Replace the battery if it\'s a replaceable type. If it keeps chirping with a fresh battery, or the alarm is more than ten years from its manufacture date, the unit has reached the end of its life and needs replacing, which for a hardwired alarm is an electrician\'s job in South Australia.',
            },
            {
                question: 'How do I tell how old the smoke alarms are?',
                answer: 'Twist the alarm off its base and look at the back or side for a manufacture date, often printed near the model number or on a sticker. Some also carry a "replace by" date. Smoke alarms are replaced ten years from the manufacture date, not from when they were installed, so an alarm made in 2015 is due now even if it was fitted later. If there\'s no date at all, it\'s old enough to replace. Write the date on the base in marker when you fit a new one.',
            },
            {
                question: 'Is it worth getting the electrical checked when moving into a newer house?',
                answer: 'For a house under about ten years old, usually not as a separate job. The builder\'s electrician will have issued a Certificate of Compliance and the board will have RCD protection on every circuit. Still do the basics yourself: push-test the safety switches, test the smoke alarms, label the board and ask for the certificates. Where a newer house is worth a check is if it\'s had work since it was built with no paperwork, or if a safety switch fails its test button.',
            },
        ],
        cta: {
            heading: 'Settling Into a New Place?',
            description:
                'If the board has no safety switches, one fails its test, or you\'ve got a list from the walk-through, we\'ll do it in one visit and test what\'s there properly. Wynn Vale based, Adelaide wide.',
            linkText: 'Safety Switch Testing and Installation',
            href: '/rcd-testing-safety-switches-adelaide',
        },
    },
    {
        slug: 'selling-your-home-adelaide-electrical-issues-buyers-notice',
        title: 'Selling Your Home in Adelaide: The Electrical Things That Worry Buyers and Inspectors',
        seoTitle: 'Selling a House: Electrical Issues Buyers Notice | JPD',
        metaDescription:
            'Selling your home in Adelaide? The electrical issues buyers and inspectors flag, what\'s cheap to fix before you list, what to leave, and what to disclose.',
        excerpt:
            'An old switchboard doesn\'t stop a sale, but it gives the buyer a number to knock off the price. Here\'s what inspectors actually flag, what\'s worth fixing before photos and what\'s better left for the buyer.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Advice',
        image: '/images/switchboard_ceramic_fuses_golden_grove.webp',
        gallery: [
            {
                src: '/images/switchboard_asbestos_warning_sticker.webp',
                alt: 'Asbestos warning sticker on an old switchboard panel',
                caption: 'A building inspector photographs this and it goes straight into the report.',
            },
            {
                src: '/images/switchboard_single_rcd_golden_grove.webp',
                alt: 'Older switchboard with a single safety switch covering only the power circuits',
                caption: 'One safety switch covering only the powerpoints. Inspectors count the test buttons.',
            },
            {
                src: '/images/faulty_diy_joint_modbury_heights.webp',
                alt: 'A taped DIY cable joint found behind an outdoor light fitting',
                caption: 'DIY wiring like this is the finding that makes a buyer wonder what else is hidden.',
            },
        ],
        content: `
            <h3>Why This Matters to You</h3>
            <p>When you're selling your home in Adelaide, the electrical issues that cost you money are the ones a buyer or their building inspector finds first and prices into the offer. An old switchboard, no safety switches, missing smoke alarms or obvious DIY wiring each hand the buyer a reason to negotiate, and the number they knock off is usually bigger than what the fix would have cost.</p>
            <p>The real consequence of ignoring it isn't a failed sale. As far as we're aware, South Australia has no rule requiring an electrical inspection or a safety switch upgrade before you sell (some other states do). It's that you lose control of the conversation. A buyer who finds the problem decides what it's worth. A seller who fixes it, or prices it openly, keeps that decision.</p>
            <p>This is the seller's side of a post we wrote for buyers. Same house, opposite chair. Here's what gets flagged, what's cheap to deal with, what to leave, and what you're obliged to tell them.</p>

            <h3>What Building Inspectors Flag on the Electrical</h3>
            <p>A standard pre-purchase building inspection doesn't test the electrical. The inspector isn't opening the board or measuring anything. But they do look, and these items turn up in reports over and over:</p>
            <ul>
                <li><strong>The switchboard.</strong> Ceramic fuses, no safety switches, an asbestos-backed panel, scorch marks, a board with no spare ways, a rusted meter box. Any one of these gets a line in the report recommending "assessment by a licensed electrician", which the buyer reads as "this will cost me".</li>
                <li><strong>No or too few safety switches.</strong> They'll count the test buttons. None, or one covering only the powerpoints, is noted as a safety item.</li>
                <li><strong>Smoke alarms.</strong> Missing, battery-only, obviously old, or not in the right places. Some inspectors check the manufacture date.</li>
                <li><strong>Visible DIY or non-compliant work.</strong> Surface-run cable, junction boxes in the roof with no cover, a shed wired from an extension lead, a light fitting hanging by its wires, powerpoints that don't match the rest of the house.</li>
                <li><strong>Outdoor wiring.</strong> Perished cable to the shed or pergola, outdoor powerpoints with broken covers, garden lights with exposed joins, a pool pump with a lead running across the paving.</li>
                <li><strong>Extension leads doing permanent duty.</strong> A lead to the fridge in the garage or through a window to the shed tells them the house is short of circuits.</li>
                <li><strong>Cracked or discoloured fittings</strong>, loose powerpoints, switches that don't work, missing cover plates.</li>
            </ul>
            <p>A buyer who's serious may then book a separate electrical inspection, and that one does test. It finds what the walk-through can't: an RCD that doesn't trip in time, circuits with no earth, insulation breaking down on old cable, a neutral connection running hot.</p>

            <h3>Cheap to Fix Before You List</h3>
            <p>These are small jobs with a big effect on how the house reads:</p>
            <ul>
                <li><strong>Smoke alarms.</strong> If yours are over ten years old, battery-only, or missing from where they should be, replace them. In South Australia the buyer legally has six months after settlement to bring the alarms up to the required type, so it isn't your obligation, but an old or missing alarm is the single most visible safety red flag and the cheapest to remove.</li>
                <li><strong>Broken or discoloured powerpoints and switches, and missing cover plates.</strong> Replacing a handful of fittings is a short job and it's what people touch during an open inspection.</li>
                <li><strong>Lights and fans that don't work.</strong> A dead light in a room makes a buyer wonder what else doesn't work. Often it's a globe or a failed transformer.</li>
                <li><strong>Loose or broken outdoor powerpoint covers</strong> and dangling garden lights.</li>
                <li><strong>Extension leads and powerboards.</strong> Tidy them away for photos, but if one has been feeding the shed or a second fridge for years, consider having a powerpoint put in. It removes a question.</li>
                <li><strong>Labelling the switchboard.</strong> Costs nothing and reads as a house that's been looked after.</li>
                <li><strong>A safety switch where there isn't one.</strong> Adding RCD protection to a board that has none is a modest job on most boards and it moves "no safety switches" off the report entirely. It's the best value item on this list.</li>
            </ul>

            <h3>Worth Pricing Before You Decide</h3>
            <p>Bigger items are a judgement call, and the right answer depends on the market and the house:</p>
            <ul>
                <li><strong>A full switchboard upgrade.</strong> On a renovated house with a ceramic fuse board, buyers notice the mismatch and the upgrade often pays for itself in the price and in having one less objection. On an original-condition house being sold as a renovator, the buyer is going to do a board anyway as part of their plans, and you may be better off pricing it openly.</li>
                <li><strong>An asbestos-backed switchboard.</strong> Replacing it changes how the old panel has to be handled, which is part of the cost. Leaving it in place is legal and common, but expect the buyer to raise it.</li>
                <li><strong>Old wiring.</strong> If the house is pre-1960s and still on original cable, a rewire is a big number and nobody fixes that for a sale. Have it tested so you know what you're selling, and price accordingly.</li>
                <li><strong>Undocumented DIY work.</strong> Having a licensed electrician inspect it, correct what's wrong and issue a Certificate of Compliance for the corrected work turns a red flag into paperwork. Leaving it means the buyer's inspector finds it and assumes the worst about everything else.</li>
            </ul>
            <p>Get a quote for the big items before you list even if you don't do them. It lets you answer "how much would that cost?" with a figure, which beats the buyer's guess.</p>

            <h3>Should You Get Your Own Electrical Inspection?</h3>
            <p>On anything older than about 1990, we'd say yes. An inspection and test before listing tells you what a buyer's electrician is going to find, lets you fix the cheap items, and gives you a report you can hand over for the expensive ones. It changes the dynamic from the buyer discovering problems to the seller disclosing them, which is both more honest and a stronger position.</p>
            <p>It also catches the one thing that can derail a sale: a safety problem serious enough that the buyer's inspector tells them not to proceed.</p>

            <h3>What to Disclose When Selling in South Australia</h3>
            <p>South Australian sellers provide the buyer with a vendor's statement, the Form 1, under the Land and Business (Sale and Conveyancing) Act 1994. It covers title, encumbrances, council and statutory matters and other prescribed information, and it's prepared by your agent or conveyancer from searches and from what you tell them. It isn't an electrical safety certificate and there's no requirement in SA to attach one.</p>
            <p>What you can't do is mislead. If you know about a defect and a buyer asks, answer honestly. If you're asked whether there are Certificates of Compliance for the solar, the air conditioning or the board, hand them over. If there's work you know was never certified, say so rather than let it be discovered. Your conveyancer is the right person to ask about exactly what belongs on the Form 1 for your property, and they'll want to know about anything you're aware of.</p>
            <p>A practical approach: gather every electrical Certificate of Compliance you have (they're emailed from the Office of the Technical Regulator's eCoC system for any work in recent years), put them in the folder with the house documents, and make them available. Buyers find paperwork reassuring in a way that's out of proportion to what it cost you to keep.</p>

            <h3>Don't Have Work Done Unlicensed to Save Money</h3>
            <p>A sale is when people are most tempted to let a mate "tidy up the wiring". In South Australia electrical work has to be done by a licensed electrician and comes with a Certificate of Compliance. Work done any other way is the exact thing a buyer's inspector is trained to spot, and once they've found one example they assume there's more. It's cheaper to have a small amount of work done properly than to explain a large amount of work done badly.</p>

            <h3>The Short Version</h3>
            <ul>
                <li>Fix the cheap, visible things: smoke alarms, broken fittings, dead lights, outdoor covers, a safety switch if there's none</li>
                <li>Price the big things and decide openly: board upgrade, asbestos panel, old wiring</li>
                <li>Get your own inspection on anything older than about 1990 so you find problems before the buyer does</li>
                <li>Hand over every Certificate of Compliance, answer questions straight, and talk to your conveyancer about the Form 1</li>
            </ul>
        `,
        faqs: [
            {
                question: 'Do I have to install safety switches before selling my house in South Australia?',
                answer: 'No. South Australia doesn\'t have a rule requiring safety switches to be fitted before a house is sold, unlike Western Australia, where RCDs on all power and lighting circuits are required before title transfers. What you\'ll find is that a building inspector notes the absence and the buyer prices it in. Adding RCD protection to a board that has none is a relatively small job on most switchboards, and it removes one of the most common objections before it comes up.',
            },
            {
                question: 'Do I have to replace the smoke alarms before I sell in SA?',
                answer: 'Not legally. In South Australia the obligation falls on the buyer: within six months of the title transferring they must fit either hardwired 240 volt alarms or sealed ten-year lithium battery units if the house only has replaceable-battery alarms. That said, you still need working alarms in the house now, and old, missing or battery-only alarms are the first thing an inspector photographs. Replacing them is one of the cheapest ways to make the report shorter.',
            },
            {
                question: 'Should I get an electrical inspection before listing my house?',
                answer: 'On a house older than about 1990, yes. A building inspection only looks at the electrical, while an electrical inspection tests it: safety switch trip times, earthing, insulation on old cable and the condition of the switchboard connections. Doing it before listing means you find the problems in private, fix the cheap ones, and can hand over a report for the rest. It\'s a stronger position than having a buyer\'s electrician find them during the cooling-off period and reopen the price.',
            },
            {
                question: 'Do I have to tell buyers about DIY electrical work in the house?',
                answer: 'You mustn\'t mislead them, and your conveyancer will want to know about anything you\'re aware of. The Form 1 vendor\'s statement in South Australia covers prescribed matters rather than being a defect report, but answering a direct question dishonestly, or concealing something you know is unsafe, exposes you to claims after settlement. The cleaner route is to have a licensed electrician inspect the work, correct what\'s wrong and certify it, so what you disclose is a Certificate of Compliance rather than a problem.',
            },
            {
                question: 'What electrical paperwork should I give the buyer when I sell?',
                answer: 'Every Certificate of Compliance you have, plus manuals and installer details for the solar, air conditioning, hot water and oven. In South Australia a certificate is issued for licensed electrical work and sent to the owner electronically, so anything from recent years should be in your email. Add the solar monitoring login, any warranty documents and any electrical inspection report. None of it is compulsory to hand over, but a complete folder reassures buyers and shortens the questions your agent has to field.',
            },
        ],
        cta: {
            heading: 'Getting the House Ready to Sell?',
            description:
                'We inspect and test before you list, fix the items that are worth fixing and give you a straight answer on the ones that aren\'t. Based in Wynn Vale, working across Adelaide.',
            linkText: 'Switchboard Upgrades and Safety Switches',
            href: '/switchboard-upgrade-adelaide',
        },
    },
];
