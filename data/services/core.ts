import type { Service } from './types';

/** Safety and supply work: the jobs people search for when something is wrong or overdue. */
export const coreServices: Service[] = [
    {
        slug: 'emergency-electrician-adelaide',
        name: 'Emergency Electrician',
        icon: 'emergency',
        blurb: 'Lost power, tripping breakers, burning smells or sparking outlets. Call and we will tell you straight whether it can wait.',
        title: 'Emergency Electrician Adelaide | Fast Local Callout | JPD',
        description:
            'Emergency electrician for Adelaide\'s north-east. Power loss, tripping safety switches, burning smells, sparking outlets and storm damage. Based in Wynn Vale. Call 0435 006 420.',
        h1: 'Emergency Electrician, Adelaide North-East',
        intro:
            'Power out, a breaker that will not stay on, a burning smell at the switchboard or a sparking outlet. Call 0435 006 420. We are based in Wynn Vale and we cover the Tea Tree Gully area, so you are not waiting on someone crossing town.',
        sections: [
            {
                heading: 'What Counts as an Electrical Emergency',
                body: [
                    'Not everything that goes wrong needs someone out that hour, and we would rather tell you that on the phone than charge you for a callout you did not need. These are the ones that genuinely should not wait:',
                ],
                bullets: [
                    'A burning or hot plastic smell anywhere near the switchboard, a powerpoint or a light fitting',
                    'Visible sparking, arcing or scorch marks at an outlet, switch or the board',
                    'A safety switch or circuit breaker that trips again immediately every time you reset it',
                    'Water in the switchboard, or water through the ceiling near lights and wiring',
                    'Total loss of power to the property when the neighbours still have theirs',
                    'A shock, tingle or buzz from a tap, appliance or metal fixture',
                    'Storm damage to the overhead service, the meter box or the point of attachment',
                    'Anything hot to touch that should not be, including a switchboard door or a wall around an outlet',
                ],
            },
            {
                heading: 'Do This Before We Arrive',
                body: [
                    'If you can see or smell something wrong, turn the main switch off at the switchboard first. That removes the hazard while you wait, and it costs you nothing but a bit of inconvenience. If only one circuit is the problem and you can identify it, switching off that breaker alone is enough.',
                    'Do not keep resetting a breaker that trips straight back on. It is tripping because it is detecting something, and forcing it repeatedly is how a fault becomes a fire. Leave it off and call.',
                    'If someone has had a shock, treat that as serious regardless of whether they feel fine afterwards. Isolate the power and get medical advice.',
                    'If the problem is a tap or metal fixture giving you a tingle, keep everyone away from it, turn the main switch off, and call. That symptom can indicate a lost neutral or a fault energising the plumbing, and it is one of the more genuinely dangerous things we get called to.',
                ],
            },
            {
                heading: 'What We Do When We Get There',
                body: [
                    'The first job is making the property safe, which sometimes means isolating a circuit before anything else happens. Then we test to find the actual cause rather than replacing components until the symptom disappears.',
                    'Most emergency callouts land on one of a handful of causes: a failed appliance leaking current to earth, water ingress into an outdoor circuit or a light fitting, a loose or burnt connection generating heat, a failing RCD or breaker, or damage from rodents or building work in the roof space.',
                    'Once we know what it is, you get a clear explanation and a price before we do the repair. If it is something we can fix on the spot you will usually have power back the same visit. If it needs parts or a bigger job like a switchboard replacement, we make it safe, restore what we safely can, and book the rest properly.',
                ],
            },
            {
                heading: 'If the Whole Street Is Out',
                body: [
                    'If your neighbours have lost power too, that is a network fault, not your installation, and it belongs to SA Power Networks rather than us. Their faults and emergencies line is 13 13 66. Calling us in that situation just costs you a callout for something we cannot fix.',
                    'The quick test is your neighbours and your own main switch. If they have power and you do not, and your main switch is on, that is on your side of the meter and it is our job. If nobody has power, ring SA Power Networks first.',
                ],
            },
        ],
        priceFactors: [
            'Time of day and day of week, since after-hours attendance costs more than a weekday callout',
            'How long the fault takes to isolate, as intermittent faults take longer to find than obvious ones',
            'Whether the repair is a straight replacement or needs a section of cable run',
            'Whether the switchboard is safe to work on as it stands or needs replacing to fix the problem properly',
            'Parts, particularly if a breaker, RCD or fitting is an older type that needs a like-for-like match',
        ],
        faqs: [
            {
                question: 'How fast can you get to an emergency?',
                answer: 'It depends where we are when you call. We are based in Wynn Vale and most of our work is inside the Tea Tree Gully area, so for the suburbs we cover it is usually quick. Call 0435 006 420 and we will give you a real time rather than a vague window.',
            },
            {
                question: 'Do you charge more for after-hours callouts?',
                answer: 'Yes, after-hours attendance costs more than a standard weekday visit. We tell you the rate on the phone before we come out, not after we arrive. If the problem can safely wait until morning, we will say so and you can decide.',
            },
            {
                question: 'My safety switch keeps tripping. Is that an emergency?',
                answer: 'If it resets and stays on, it is usually a faulty appliance and you can narrow it down yourself by unplugging things one at a time. If it trips again immediately every time you reset it, or if there is any smell or heat involved, stop resetting it and call us.',
            },
            {
                question: 'Can you fix it the same visit?',
                answer: 'Most of the time, yes. Common faults get repaired on the spot. If it needs a part we do not carry or turns out to be a bigger job like a full switchboard replacement, we make the property safe, restore whatever power we safely can, and book the rest in.',
            },
            {
                question: 'What if the power is out on the whole street?',
                answer: 'That is a network fault and it belongs to SA Power Networks on 13 13 66. If your neighbours have power and you do not, it is on your side of the meter and that is when you call us.',
            },
            {
                question: 'Is it safe to just keep resetting the breaker?',
                answer: 'No. The breaker is tripping because it is detecting a fault, whether that is an overload, a short or current leaking to earth. Resetting it repeatedly forces current through whatever is faulty, and that is how a manageable problem turns into a fire. Leave it off and get it looked at.',
            },
        ],
        related: ['switchboard-upgrade-adelaide', 'rcd-testing-safety-switches-adelaide', 'powerpoint-installation-adelaide'],
    },
    {
        slug: 'switchboard-upgrade-adelaide',
        name: 'Switchboard Upgrades',
        icon: 'switchboard',
        blurb: 'Old fuses out, RCBOs in. Shock protection on every circuit and room to add what you want next.',
        title: 'Switchboard Upgrade Adelaide | RCBO Boards | JPD Electrical',
        description:
            'Switchboard upgrades across Adelaide\'s north-east. Ceramic fuses replaced with modern RCBO boards, full safety switch protection, proper labelling and a Certificate of Compliance. Free quotes.',
        h1: 'Switchboard Upgrades in Adelaide',
        intro:
            'If your switchboard still has rewireable ceramic fuses, has no safety switches, trips regularly, or is so full there is nowhere to add a circuit, it is due. We replace it with a properly sized board on RCBOs and label it so it makes sense to whoever opens it next.',
        sections: [
            {
                heading: 'Signs Your Switchboard Needs Upgrading',
                body: [
                    'Most of the housing across Modbury, Hope Valley, Holden Hill, St Agnes and Banksia Park went up between the 1960s and the 1980s, and a large share of it is still on the original board. These are the things that tell you it is time:',
                ],
                bullets: [
                    'Rewireable ceramic fuses, the ones with fuse wire you replace by hand',
                    'No safety switches at all, or one RCD covering only the power points',
                    'Breakers that trip often, especially when the kettle and the toaster are both on',
                    'A board with no spare ways, so nothing new can be added',
                    'Scorch marks, heat discolouration, a burning smell or a warm board door',
                    'Buzzing or crackling from inside the board',
                    'A board that has never been touched since the house was built',
                    'An asbestos-backed panel, common in boards from roughly the 1960s and 70s',
                ],
            },
            {
                heading: 'What a Modern Board Actually Gives You',
                body: [
                    'The real upgrade is not the box, it is what goes in it. We fit RCBOs, which combine a circuit breaker and a safety switch in one device, on each circuit.',
                    'That matters for two reasons. The first is protection: every circuit gets shock protection, including the lighting circuits, which older installations almost never had. The second is practical: when something faults, one circuit drops out instead of half the house, and you know immediately which one because it is labelled.',
                    'The alternative arrangement, one or two shared RCDs covering groups of circuits, is cheaper but noticeably worse to live with. A faulty toaster takes out the fridge, the lights and the alarm at the same time, and finding which appliance caused it becomes a job in itself.',
                    'You also get capacity. A correctly sized board has spare ways in it, which is what makes it possible to add an EV charger, a split system, a pool pump or a renovated kitchen later without starting again.',
                ],
            },
            {
                heading: 'What Is Involved on the Day',
                body: [
                    'A standard domestic switchboard upgrade is usually a full day, and the power is off for a decent chunk of it. We let you know the timing in advance so you can plan around the fridge and anyone working from home.',
                    'The work involves isolating the supply, removing the old board, mounting and wiring the new one, transferring and terminating every circuit, testing each one, and labelling the lot. Where the existing enclosure is sound and big enough we can sometimes reuse it, but on older installations a new enclosure is usually the sensible call.',
                    'Every circuit gets tested at the end: insulation resistance, earth continuity, polarity, and an RCD trip test with a calibrated instrument. You get a Certificate of Compliance for Electrical Work, which is your record that it was done by a licensed electrician and verified. Keep it, because it matters when you sell and when an insurer asks.',
                ],
            },
            {
                heading: 'What We Sometimes Find Behind the Board',
                body: [
                    'On houses from the 1960s and 70s, taking the old board off occasionally reveals wiring that is not in good shape. Rubber-insulated cable from that era goes brittle with age and the insulation can break away when it is disturbed.',
                    'We tell you that possibility exists before we start rather than after. If it turns up, we show you, explain what it means, and price the options. What we will not do is quietly wire a new board onto cable that should not be reused.',
                    'That said, the common assumption that an old board means a full rewire is usually wrong. Most of the time the board is the urgent part and the existing wiring tests fine. If someone quotes you a whole-house rewire without testing first, get a second opinion.',
                ],
            },
        ],
        priceFactors: [
            'The number of circuits, since every circuit needs its own RCBO and its own termination',
            'Whether the existing enclosure can be reused or a new one is needed',
            'Whether the board is being replaced in place or relocated, which means extending every circuit',
            'The condition of the main earth and the earthing arrangement, which often needs upgrading at the same time',
            'Whether an asbestos-backed panel is present, since that changes how the removal has to be handled',
            'Any consumer mains or metering work required alongside it',
        ],
        faqs: [
            {
                question: 'How much does a switchboard upgrade cost in Adelaide?',
                answer: 'It depends mainly on the circuit count, whether the enclosure is being reused, and the condition of the earthing. A small house with six circuits and a sound enclosure is a very different job to a larger home needing a new enclosure and an earthing upgrade. We quote a fixed price after looking at it, and we flag anything that might turn up before we start.',
            },
            {
                question: 'How long does it take?',
                answer: 'Most domestic upgrades are a single day, with the power off for a good part of it. Larger homes or jobs that include relocating the board or upgrading the consumer mains can run into a second day. We tell you which before booking.',
            },
            {
                question: 'Do I legally have to upgrade my switchboard?',
                answer: 'An existing installation that complied when it was installed is generally allowed to remain, so there is usually no standing obligation to upgrade an untouched board. But once significant work is done on the installation, the new work has to meet current standards, which in practice usually means safety switch protection. And regardless of obligation, a board with no RCDs leaves you with no shock protection at all.',
            },
            {
                question: 'What is the difference between an RCD and an RCBO?',
                answer: 'An RCD detects current leaking to earth and cuts the supply, which is what protects a person from a shock. A circuit breaker protects the wiring from overload and short circuit. An RCBO is both in one device, fitted per circuit. Fitting RCBOs across the board is why a fault only takes out the one circuit rather than everything sharing a single RCD.',
            },
            {
                question: 'Will I need a full rewire as well?',
                answer: 'Usually not. In most houses the board is the urgent part and the existing cabling tests fine. Full rewires are the exception. We test rather than assume, and we will only recommend one if the results actually support it.',
            },
            {
                question: 'Can you add a safety switch without replacing the whole board?',
                answer: 'Sometimes, if there is space and the board is otherwise sound. On an old fuse board it is often not the better option, because you end up with one shared RCD that trips the whole house on any fault. We will price both and explain the difference so you can decide.',
            },
            {
                question: 'Do I get paperwork afterwards?',
                answer: 'Yes. A Certificate of Compliance for Electrical Work on every job that requires one, plus test results. It is your proof the work was done by a licensed electrician and verified, and you want it on file for insurance and for when you sell.',
            },
        ],
        related: ['rcd-testing-safety-switches-adelaide', 'ev-charger-installation-adelaide', 'emergency-electrician-adelaide'],
    },
    {
        slug: 'ev-charger-installation-adelaide',
        name: 'EV Charger Installation',
        icon: 'ev',
        blurb: 'Home wall chargers on a dedicated circuit, with the right protection and the board capacity checked first.',
        title: 'EV Charger Installation Adelaide | Home Chargers | JPD',
        description:
            'Home EV charger installation across Adelaide\'s north-east. Dedicated circuit, correct RCD protection, switchboard capacity checked and SA Power Networks notified where required. Free quotes.',
        h1: 'EV Charger Installation, Adelaide',
        intro:
            'We install home wall chargers on a dedicated circuit with the protection the standard requires. The charger is the easy part. The job is making sure your switchboard can actually carry it alongside everything else in the house.',
        sections: [
            {
                heading: 'Why the Switchboard Comes First',
                body: [
                    'A typical single-phase home charger draws 32 amps continuously for hours at a time. That is a bigger sustained load than almost anything else in a house, and it is nothing like the short bursts a kettle or a microwave puts on the system.',
                    'So before we talk about where the charger goes, we look at the board. What is the main switch rated at, what is the consumer mains cable, how much is already connected, and is there physical space for another circuit. In Greenwith and Golden Grove, where a lot of homes already have ducted air conditioning, an induction cooktop and a pool pump, that check genuinely matters.',
                    'On older boards in Hope Valley, Modbury or Holden Hill, the honest answer is often that the board needs replacing before a charger goes on it. We would rather tell you that upfront than install a charger onto something that should not be carrying it.',
                    'Where the existing supply is tight, load management is often the answer rather than a supply upgrade. Most modern chargers can throttle their draw based on what the rest of the house is using, which lets you charge at full speed most of the time and back off automatically when the aircon and the oven are both running.',
                ],
            },
            {
                heading: 'What a Proper Install Includes',
                body: [
                    'A home charger install is a dedicated circuit run from the switchboard to the charger, sized for the load and the distance, with protection appropriate to EV charging.',
                ],
                bullets: [
                    'A dedicated circuit, not a shared one, sized for the charger and the cable run length',
                    'RCD protection suitable for EV charging, which means a Type B, or a Type A where the charger itself provides 6 mA DC fault detection',
                    'A correctly rated circuit breaker and, where needed, additional board capacity',
                    'The charger mounted where the cable actually reaches the car without stretching across a walkway',
                    'Notification to SA Power Networks where that is required for the installation',
                    'Full testing and a Certificate of Compliance for Electrical Work',
                ],
            },
            {
                heading: 'Three-Phase, Single-Phase and Charging Speed',
                body: [
                    'Most homes in our area are single phase, which caps a wall charger at around 7 kW. In practical terms that adds roughly 40 kilometres of range per hour, so an overnight charge covers far more than a normal day of driving. For the vast majority of households, single phase is genuinely enough.',
                    'If you already have three-phase supply, a three-phase charger can go up to around 22 kW where the vehicle supports it. Worth knowing: plenty of EVs only accept single-phase AC charging regardless of what the charger can deliver, so a three-phase charger does not automatically mean faster charging for your particular car. Check the vehicle before spending the extra.',
                    'Upgrading a single-phase property to three phase purely for charging is rarely worth it. It is a significant cost and it usually solves a problem you do not have.',
                ],
            },
            {
                heading: 'Where to Put It',
                body: [
                    'The two things that decide placement are where the car actually parks and where the charge port is on the vehicle. A charger mounted on the wrong side of a double garage means running the cable around the car every single time, which gets old fast.',
                    'Cable run length from the switchboard is the other factor, and it is the main thing that moves the price. A charger on the garage wall directly behind the board is a short run. A charger at a detached garage down a Fairview Park or Vista block is a long run in bigger cable, and sometimes trenching.',
                    'Outdoors, the charger needs to be rated for it and positioned where it is not going to be in the weather more than it has to be. We will walk the site with you before quoting rather than guessing from a photo.',
                ],
            },
        ],
        priceFactors: [
            'Distance from the switchboard to the charger, which drives the cable size and the labour',
            'Whether the run is through a roof space, through walls, or needs trenching to a detached garage',
            'Whether the existing switchboard has capacity and space, or needs upgrading first',
            'Single-phase versus three-phase installation',
            'The charger unit itself, if you want us to supply it rather than supplying your own',
            'Any load management or metering requirements',
        ],
        faqs: [
            {
                question: 'How much does it cost to install an EV charger in Adelaide?',
                answer: 'The install cost is driven mostly by the cable run from the switchboard to the charger and whether the board has room for the circuit. A short run onto a board with spare capacity is at the lower end. A long run to a detached garage on a full 1990s board that also needs upgrading is at the higher end. We quote after seeing it, because the difference between those two is large enough that a phone estimate would be dishonest.',
            },
            {
                question: 'Can I install an EV charger myself?',
                answer: 'No. Hardwired EV charging equipment is electrical work and has to be installed by a licensed electrician, with the correct protection and a Certificate of Compliance. Beyond the legal side, the sustained load involved is not something to guess at.',
            },
            {
                question: 'Do I need to tell SA Power Networks?',
                answer: 'EV charging equipment generally needs to be notified to SA Power Networks, and we handle that as part of the install. Requirements can change, so we confirm what applies at the time rather than working off what was true last year.',
            },
            {
                question: 'Will my switchboard handle a charger?',
                answer: 'Often yes, but it needs checking rather than assuming. We look at the main switch rating, the consumer mains, what is already connected, and whether there is physical space for another circuit. If it will not carry it, we will tell you what it would take, and load management is frequently a cheaper answer than a supply upgrade.',
            },
            {
                question: 'Is a three-phase charger worth it?',
                answer: 'Only if you already have three-phase supply and your vehicle can actually accept three-phase AC charging. Plenty of EVs are limited to single-phase AC regardless of the charger, so check the car first. Upgrading a single-phase house to three phase just for charging is rarely worth the cost.',
            },
            {
                question: 'How fast will it charge?',
                answer: 'A 7 kW single-phase charger adds roughly 40 km of range per hour, so a normal overnight charge covers well over a typical day of driving. For most households that is more than enough and the faster options solve a problem that does not exist.',
            },
            {
                question: 'Can you install a charger I have already bought?',
                answer: 'Yes, provided it is a unit approved for sale and use in Australia. Tell us the model before we quote, because the protection requirements and the circuit sizing depend on what the specific charger needs.',
            },
        ],
        related: ['switchboard-upgrade-adelaide', 'powerpoint-installation-adelaide', 'rcd-testing-safety-switches-adelaide'],
    },
    {
        slug: 'rcd-testing-safety-switches-adelaide',
        name: 'Safety Switches & RCD Testing',
        icon: 'rcd',
        blurb: 'Proper trip-time testing with a calibrated instrument, not just pushing the button on the board.',
        title: 'RCD Testing & Safety Switches Adelaide | JPD Electrical',
        description:
            'Safety switch installation and RCD testing across Adelaide\'s north-east. Calibrated trip-time testing with a written report, for homes, rentals, workplaces and medical premises.',
        h1: 'Safety Switches and RCD Testing',
        intro:
            'A safety switch is the only thing in your house designed specifically to stop a shock from killing someone. It is also a mechanical device that can fail silently. We install them, and we test them properly with a calibrated instrument rather than just pressing the button.',
        sections: [
            {
                heading: 'What an RCD Actually Does',
                body: [
                    'An RCD, or safety switch, constantly compares the current flowing out on the active with the current returning on the neutral. If those do not match, current is escaping somewhere it should not be, which usually means through a damaged appliance, a nicked cable, or a person.',
                    'When it detects that imbalance it disconnects the supply in a fraction of a second. That speed is the whole point. It is the difference between a nasty jolt and a fatal one.',
                    'A circuit breaker does not do this. A breaker protects the wiring from overload and short circuit. It will happily sit there while current flows through a person to earth, because that current is well below what it is watching for. This is the single most common misunderstanding we come across, and it is why a board full of breakers and no RCDs is not protected.',
                ],
            },
            {
                heading: 'Why the Test Button Is Not Enough',
                body: [
                    'The test button on the board proves the mechanism moves. It does not tell you whether the device trips fast enough to protect someone, and that is the number that matters.',
                    'Proper testing uses a calibrated instrument to inject a known fault current and measure the actual trip time in milliseconds against what the standard requires. An RCD that trips, but takes too long doing it, passes the button test and fails the real one. You would never know from looking.',
                    'We do the ramp test as well, which finds the current level at which the device actually operates. That picks up RCDs that have drifted out of tolerance as they have aged, which is common in devices that have been sitting in a board for twenty years.',
                    'You get a written report with the measured trip times for each device, which is the part that matters if you are a landlord, run a workplace, or need to demonstrate compliance to an insurer.',
                ],
            },
            {
                heading: 'How Often It Should Be Done',
                body: [
                    'For an owner-occupied home, pressing the test button every few months and having the devices properly tested every couple of years is a sensible baseline.',
                    'For rental properties, workplaces, medical and disability-care premises, and anywhere with a documented safety obligation, testing is generally on a set schedule and the report is the evidence. The specific interval depends on the type of premises and the relevant requirements, so it is worth confirming what applies to your situation rather than assuming.',
                    'One thing worth saying plainly: if your board has no RCDs at all, testing is not the issue. Getting protection fitted is. That is normally done as part of a switchboard upgrade, because fitting RCBOs across the board is a better outcome than bolting one shared RCD onto an old fuse board.',
                ],
            },
            {
                heading: 'When an RCD Keeps Tripping',
                body: [
                    'A safety switch that trips is usually doing its job, not malfunctioning. The most common cause is a faulty appliance leaking a small amount of current to earth, and the second most common is moisture in an outdoor circuit or a light fitting.',
                    'You can narrow it down yourself. Unplug everything on the affected circuit, reset the RCD, then plug things back in one at a time and see what brings it down. Old kettles, toasters, fridges, washing machines and outdoor pumps are the usual suspects.',
                    'If it trips with nothing plugged in, the fault is in the fixed wiring and it needs testing. If it trips only when it rains, that is water getting into an outdoor point or a fitting. Either way it is a real fault, and disabling or bypassing the RCD to stop the nuisance is the worst possible response to it.',
                ],
            },
        ],
        priceFactors: [
            'The number of RCDs to be tested and the number of circuits',
            'Whether it is a single home visit or a scheduled service across multiple properties',
            'Whether a written compliance report is required for the file',
            'For installation, whether devices can be added to the existing board or a board upgrade is needed',
            'Any fault finding required if a device fails or a circuit will not hold',
        ],
        faqs: [
            {
                question: 'How often should safety switches be tested?',
                answer: 'For a home, pressing the test button every few months and having them properly tested with an instrument every couple of years is a sensible baseline. Rentals, workplaces and medical premises usually have a set schedule tied to their obligations, so check what applies to your situation.',
            },
            {
                question: 'Is the test button on my switchboard enough?',
                answer: 'No. The button proves the mechanism moves. It does not measure whether the device trips fast enough to actually protect someone. An RCD can pass the button test and still fail a proper trip-time test, which is the one that matters.',
            },
            {
                question: 'My safety switch keeps tripping. What is causing it?',
                answer: 'Most often a faulty appliance leaking current to earth, or moisture in an outdoor circuit. Unplug everything on that circuit, reset, then reconnect items one at a time to find the culprit. If it trips with nothing plugged in, the fault is in the fixed wiring and needs testing.',
            },
            {
                question: 'Do circuit breakers protect me from electric shock?',
                answer: 'No, and this is the most common misunderstanding we come across. Circuit breakers protect the wiring from overload and short circuit. The current that flows through a person is far too small to trip a breaker. Only an RCD detects that.',
            },
            {
                question: 'Do I get a report?',
                answer: 'Yes. You get measured trip times for each device in writing, which is what you need on file as a landlord, a workplace or a medical premises. A verbal "it all tested fine" is not evidence of anything.',
            },
            {
                question: 'Can safety switches be added to an old fuse board?',
                answer: 'Sometimes, but on an old board it is often not the better option. You end up with a single shared RCD that drops the whole house on any fault. Fitting RCBOs as part of a switchboard upgrade protects every circuit individually and is usually the more sensible spend.',
            },
        ],
        related: ['switchboard-upgrade-adelaide', 'smoke-alarm-installation-adelaide', 'test-and-tag-adelaide'],
    },
    {
        slug: 'smoke-alarm-installation-adelaide',
        name: 'Smoke Alarm Installation',
        icon: 'smoke',
        blurb: 'Mains-powered, interconnected photoelectric alarms installed and positioned where they will actually work.',
        title: 'Smoke Alarm Installation Adelaide | Hardwired & Interconnected',
        description:
            'Smoke alarm installation and replacement across Adelaide\'s north-east. Mains-powered interconnected photoelectric alarms, correctly positioned, for homes and rental properties.',
        h1: 'Smoke Alarm Installation and Replacement',
        intro:
            'Smoke alarms have a service life and most people do not know theirs has passed it. We install and replace mains-powered interconnected photoelectric alarms, positioned where they will actually detect a fire rather than where they were easiest to screw in.',
        sections: [
            {
                heading: 'Photoelectric, Ionisation and Why It Matters',
                body: [
                    'There are two common detection technologies. Ionisation alarms respond faster to fast-flaming fires. Photoelectric alarms respond faster to smouldering, smoky fires.',
                    'The fires that kill people in homes are overwhelmingly the smouldering kind, typically starting overnight in furniture, bedding or wiring, producing a lot of smoke well before flame. That is why fire services across Australia recommend photoelectric alarms, and it is what we install.',
                    'Photoelectric alarms are also far less prone to the nuisance alarms that make people take the battery out, which is its own safety problem. An alarm that has been disabled because it screams every time someone makes toast protects nobody.',
                ],
            },
            {
                heading: 'Interconnection Is the Part People Underestimate',
                body: [
                    'A standalone alarm in the hallway sounds where the smoke is. If the fire starts in the lounge and you are asleep at the far end of the house with the door closed, you may not hear it in time.',
                    'Interconnected alarms all sound together the moment any one of them detects. That is the difference between being woken by an alarm in another room and being woken by the alarm above your bed.',
                    'Interconnection can be hardwired or wireless. Hardwired is the more robust arrangement and is straightforward when we already have access to the roof space, such as during a switchboard upgrade or a renovation. Wireless interconnection is a good answer where running cable would mean tearing up finished ceilings.',
                ],
            },
            {
                heading: 'They Expire, and Almost Nobody Checks',
                body: [
                    'Smoke alarms have a manufacturer-stated service life, typically ten years from the date of manufacture. The sensor degrades over time whether the alarm has ever been triggered or not.',
                    'The date is printed on the alarm itself, usually on the back or the side. Take one down and look. If it is more than ten years old, it needs replacing regardless of whether it still chirps when tested, because a test confirms the horn and the battery, not the sensor.',
                    'In our experience this is one of the most commonly overlooked things in a house. Plenty of homes across Modbury, Hope Valley and Holden Hill still have the alarms that went up when the house was last renovated, and nobody has thought about them since.',
                ],
            },
            {
                heading: 'Requirements for Rentals and Sales',
                body: [
                    'South Australia has requirements around smoke alarms tied to when a property was built and when it was sold or first rented, and the type of alarm required differs across those categories.',
                    'We will not guess at your specific obligation on a web page, because the detail matters and it changes. What we will do is look at what you currently have, tell you what it is and how old it is, and point you to the current requirement so you can confirm it. Consumer and Business Services and the SA Metropolitan Fire Service both publish the current position.',
                    'What we can say generally is that a hardwired, interconnected photoelectric alarm arrangement satisfies the more demanding end of the requirements, and it is what we would install in our own house.',
                ],
            },
        ],
        priceFactors: [
            'The number of alarms and where they need to go',
            'Whether they are hardwired or wireless interconnected',
            'Whether there is accessible roof space above each location',
            'Whether it is a straight replacement of existing units or new positions requiring cable runs',
            'Whether it is being done alongside other work, since roof access is the main labour cost',
        ],
        faqs: [
            {
                question: 'How often do smoke alarms need replacing?',
                answer: 'Typically every ten years from the date of manufacture, which is printed on the unit. The sensor degrades whether or not the alarm has ever gone off. Testing it confirms the horn and battery work, not the sensor, so age is the thing to go by.',
            },
            {
                question: 'Photoelectric or ionisation?',
                answer: 'Photoelectric. The fires that kill people in homes are usually smouldering, smoky fires, and photoelectric alarms detect those faster. They also produce far fewer nuisance alarms, which means people are less likely to disable them.',
            },
            {
                question: 'Do smoke alarms need to be interconnected?',
                answer: 'Requirements vary depending on the property and when it was built or sold, but interconnection is strongly worth having regardless. If a fire starts at the other end of the house while you are asleep with the door shut, an interconnected system is what wakes you.',
            },
            {
                question: 'Can you do them at the same time as other work?',
                answer: 'Yes, and it is the efficient way to do it. If we are already in the roof space for a switchboard upgrade or a lighting job, adding hardwired interconnected alarms costs a fraction of what a separate visit would.',
            },
            {
                question: 'What are the rules for rental properties in South Australia?',
                answer: 'The requirement depends on when the property was built and when it was sold or first rented. Rather than give you a figure that might be out of date, we check what you have on site and point you to the current position published by Consumer and Business Services and the SA MFS so you can confirm it.',
            },
            {
                question: 'My alarm keeps chirping. Does it need replacing?',
                answer: 'A regular single chirp is usually a low battery, even in a mains-powered unit, since those have a backup battery. If replacing the battery does not stop it, or the unit is more than ten years old, replace the alarm.',
            },
        ],
        related: ['rcd-testing-safety-switches-adelaide', 'switchboard-upgrade-adelaide', 'downlight-installation-adelaide'],
    },
];
