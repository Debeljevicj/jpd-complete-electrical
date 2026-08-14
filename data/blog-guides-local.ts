import type { BlogPost } from './blog-posts';

/**
 * Locally-specific posts. These target queries where the answer genuinely differs
 * in South Australia, which is where a local business can outrank national
 * content sites rather than competing with them on general advice.
 */
export const localPosts: BlogPost[] = [
    {
        slug: 'power-out-sa-power-networks-or-electrician',
        title: "Power Out? How to Tell if It's Your Problem or SA Power Networks'",
        seoTitle: 'Power Out in Adelaide? Who to Call | JPD',
        metaDescription:
            'Lost power in Adelaide? A two-minute check tells you whether to ring SA Power Networks on 13 13 66 or an electrician. Do this before you pay a callout.',
        excerpt:
            'One is free to fix and the other is a callout you pay for. Two minutes of checking tells you which, and it is the same two minutes we would ask you about on the phone.',
        date: '2026-08-14',
        author: 'Justin',
        category: 'Troubleshooting',
        image: '/images/switchboard_fault_finding.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>When the power goes off, the instinct is to ring an electrician. Sometimes that is right and sometimes it costs you a callout for something that was never yours to fix.</p>
            <p>The line is simple. Everything from the street to your meter belongs to SA Power Networks. Everything from the meter into your house is yours. If the fault is on their side, we cannot legally touch it and you have paid us to come and tell you that. If it is on your side, they will not touch it and you have waited for a truck that was never coming.</p>
            <p>Two minutes of checking sorts it. These are the same questions we ask on the phone before agreeing to come out.</p>

            <h3>Check One: Do the Neighbours Have Power?</h3>
            <p>Look out the window. At night this is easy: are the streetlights on, are the houses opposite lit? During the day, knock on a door or check a neighbour's outside light.</p>
            <p>If the whole street is out, it is a network fault. Ring SA Power Networks on <strong>13 13 66</strong>. It is their infrastructure, their responsibility and their cost. There is nothing an electrician can do.</p>
            <p>If your neighbours have power and you do not, keep going.</p>

            <h3>Check Two: Look at Your Main Switch</h3>
            <p>Open the switchboard and find the main switch. It is usually the largest one, often labelled "Main Switch", and it controls everything.</p>
            <p>If it has tripped to the off position, something in your installation caused it. Switch it back on. If it holds, you have had a one-off fault, most likely an appliance. If it trips straight back off, stop. That is a real fault on your side and it needs an electrician.</p>
            <p>Do not keep flipping it back and forth. It tripped because it detected something, and forcing it repeatedly is how a manageable fault becomes a fire.</p>

            <h3>Check Three: Is It Just One Circuit?</h3>
            <p>If some things work and others do not, you have not lost supply at all. One circuit has tripped.</p>
            <p>Look for a single breaker or RCD sitting in the off position while the rest are on. Unplug everything on the affected area, reset it, then plug things back in one at a time until it trips again. Whatever was plugged in at that moment is your culprit, and it is usually a kettle, a toaster, a fridge, a washing machine or something outdoors that has got wet.</p>
            <p>That is a job you can often finish yourself for the price of throwing out an old appliance.</p>

            <h3>Check Four: Look at the Overhead Service</h3>
            <p>If you have an overhead supply, step outside and look at where the wires come from the pole to your house. You are looking for a cable that has come away from the bracket, a bracket pulling out of the fascia, or wires lying on the roof or the ground.</p>
            <p>Never touch or go near a fallen or hanging wire, and keep children and pets away. Treat it as live regardless of appearances. Ring SA Power Networks on 13 13 66 immediately.</p>
            <p>Worth knowing: the point of attachment on your house, and the cable from there into your meter box, is generally your responsibility rather than the network's. So storm damage at the house end often is an electrician's job. If you are not sure which side of the line the damage sits on, describe it to us on the phone and we will tell you honestly.</p>

            <h3>Check Five: Is It a Planned Outage or a Known Fault?</h3>
            <p>SA Power Networks publishes current outages on their website, and you can check your address. If there is a known fault or planned work in your area, that answers it and there is nothing more to do than wait.</p>
            <p>This is worth doing before ringing anyone, because it takes thirty seconds.</p>

            <h3>When It Is Definitely Us</h3>
            <ul>
                <li>Neighbours have power, you do not, and your main switch is on</li>
                <li>The main switch trips off again immediately every time you reset it</li>
                <li>One circuit keeps tripping and you cannot find an appliance causing it</li>
                <li>There is a burning smell, scorching, buzzing or heat at the switchboard</li>
                <li>An outlet or switch is sparking, or warm to touch</li>
                <li>Someone got a shock or a tingle from a tap, appliance or metal fixture</li>
                <li>Damage at the house end of the supply, the meter box, or the point of attachment</li>
            </ul>

            <h3>When It Is Definitely SA Power Networks</h3>
            <ul>
                <li>The whole street or a run of houses is out</li>
                <li>Wires down, hanging low, or damaged between the pole and your property</li>
                <li>A pole is damaged, leaning or has been hit</li>
                <li>There is a published outage for your address</li>
                <li>You have partial power with lights unusually bright or dim across the house, which can indicate a network neutral fault and should be reported straight away</li>
            </ul>
            <p>That last one is worth taking seriously. Lights bright in one part of the house and dim in another, appliances behaving oddly, is a classic sign of a lost neutral. It can damage everything plugged in and it is dangerous. Turn the main switch off and ring 13 13 66.</p>

            <h3>Save Both Numbers</h3>
            <p>SA Power Networks faults and emergencies: <strong>13 13 66</strong>. Us: <strong>0435 006 420</strong>. Put both in your phone now rather than looking them up in the dark.</p>
        `,
        cta: {
            heading: 'Established It Is Your Side?',
            description:
                'If the neighbours have power and yours will not stay on, that is a fault in your installation and it needs testing rather than guessing. We are based in Wynn Vale and cover Adelaide.',
            linkText: 'Book an Emergency Electrician',
            href: '/emergency-electrician-adelaide',
        },
    },
    {
        slug: 'buying-older-adelaide-home-check-wiring',
        title: "Buying an Older Home in Adelaide? Check the Wiring First",
        seoTitle: 'Buying an Older Adelaide Home? Check the Wiring | JPD',
        metaDescription:
            'A building inspection rarely covers electrical. Here is what to look for in an older Adelaide home before you buy, and what each problem actually costs to fix.',
        excerpt:
            'A standard building inspection barely touches the electrical. Here is what to look at yourself during an open inspection, and which findings are cheap versus expensive.',
        date: '2026-08-14',
        author: 'Justin',
        category: 'Safety',
        image: '/images/roof_cavity_insulation_wiring.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>Most people assume a building inspection covers the electrical. It generally does not, or not in any depth. A building inspector is looking at structure, moisture and pests. They will note an obviously ancient switchboard, but they are not testing circuits, measuring insulation resistance or opening the board.</p>
            <p>That matters in Adelaide's north-east, because a huge share of the housing across Hope Valley, Modbury, Holden Hill, St Agnes and Banksia Park went up between the 1960s and the 1980s. A lot of it is still on the original board and the original wiring.</p>
            <p>None of that means do not buy the house. It means know what you are buying, because the difference between a board upgrade and a rewire is thousands of dollars and it is worth knowing which one you are inheriting before you bid.</p>

            <h3>What You Can Check Yourself at an Open Inspection</h3>
            <p>You do not need tools and you are not doing anything unsafe. You are just looking.</p>
            <ul>
                <li><strong>Open the switchboard door.</strong> Ceramic fuses with fuse wire mean the board is original and pre-dates safety switches entirely. Rows of modern breakers with "Test" buttons mean someone has upgraded it.</li>
                <li><strong>Count the safety switches.</strong> Look for devices with a small test button. None at all is the most common finding in an untouched house of this era, and it means no shock protection anywhere.</li>
                <li><strong>Look for spare space.</strong> A board with no empty ways cannot take a new circuit, so any future air conditioning, EV charger or renovated kitchen means replacing it.</li>
                <li><strong>Look for heat.</strong> Brown or black discolouration around terminals, melted plastic, or a faint burning smell are all reasons to get it looked at before settlement.</li>
                <li><strong>Count the powerpoints per room.</strong> Two per bedroom is normal for a 1970s build. If you work from home, that is a cost you will incur.</li>
                <li><strong>Check the light fittings.</strong> Halogen downlights everywhere means a replacement job and likely insulation cut away around each one in the ceiling.</li>
                <li><strong>Look for extension leads doing permanent work.</strong> A lead running to a fridge or under a rug tells you the circuit layout does not match how the house is used.</li>
                <li><strong>Look at the meter box outside.</strong> Rust, a door that will not close, or an obviously ancient main supply is worth noting.</li>
            </ul>

            <h3>What You Cannot See, and Why It Matters</h3>
            <p>The wiring itself is the part that decides whether you have a small job or a big one, and you cannot assess it by looking at a switchboard.</p>
            <p>Houses wired before roughly the 1960s often used rubber-insulated cable. Rubber goes brittle with age and the insulation can crumble away when disturbed, which is exactly what happens when someone works in the roof space. Cotton-braided and early PVC cable from the 1950s and 60s has similar issues.</p>
            <p>From the 1970s onward, standard PVC cable is generally in serviceable condition and can stay. So the age of the house is a genuine predictor here, and it is why a 1955 cottage and a 1978 brick veneer are completely different propositions even if both boards look equally old.</p>
            <p>The only way to know is testing: insulation resistance, earth continuity and polarity on each circuit. That is a pre-purchase electrical inspection, and on an older property it is one of the better few hundred dollars you can spend before committing several hundred thousand.</p>

            <h3>Cheap Findings Versus Expensive Findings</h3>
            <p><strong>Usually manageable:</strong> no safety switches, a full board, not enough powerpoints, halogen downlights, an old exhaust fan, a shed on an undersized submain. These are all normal upgrades on a house of this age and they are planned work, not emergencies.</p>
            <p><strong>Worth pricing before you commit:</strong> deteriorated rubber or cotton-braided cable, an unearthed lighting circuit, aluminium wiring, a switchboard with an asbestos-backed panel, or evidence of unlicensed DIY work. Any of those changes the number materially.</p>
            <p>The one that catches people out is the asbestos-backed panel, common in boards from roughly the 1960s and 70s. It does not make the house dangerous to live in, but it does change how the board has to be removed and that is reflected in the price.</p>

            <h3>Evidence of DIY Is the Real Red Flag</h3>
            <p>Of everything on this list, unlicensed work worries us most, because it tells you nothing about how much of it there is.</p>
            <p>Signs include: outlets or switches that do not match the others, junction boxes in odd places, cable stapled along a skirting board or run on the surface of a wall, a light switch that controls something illogical, or wiring in a shed or pergola that looks like it was done by someone with a drill and enthusiasm.</p>
            <p>Ask the agent whether there are Certificates of Compliance for any electrical work. In South Australia licensed electrical work should have one. No paperwork for obviously recent work is worth asking about.</p>

            <h3>What to Do With What You Find</h3>
            <p>Get it priced before you settle rather than after. A quote for the electrical work is a negotiating position if you are still in the process, and a budget if you have already committed. Either is better than a surprise in month two.</p>
            <p>And prioritise honestly. If the board has no safety switches, that is the first job regardless of anything else on the list, because it is the only thing there that is about somebody getting hurt rather than about convenience.</p>
        `,
        cta: {
            heading: 'Book a Pre-Purchase Electrical Inspection',
            description:
                'Testing rather than guessing, with a written report on what the property actually needs and what it is likely to cost. Worth doing before you commit rather than after.',
            linkText: 'Book an Inspection',
            href: '/contact',
        },
    },
    {
        slug: 'switchboard-upgrade-what-actually-happens',
        title: 'What Actually Happens During a Switchboard Upgrade',
        seoTitle: 'Switchboard Upgrade: What Actually Happens | JPD',
        metaDescription:
            'What a switchboard upgrade involves start to finish, how long the power is off, what we find behind old boards, and what you should get afterwards.',
        excerpt:
            'A day without power and a box on the wall that looks much the same to most people. Here is what is actually going on, and what you should expect to receive at the end.',
        date: '2026-08-14',
        author: 'Justin',
        category: 'Maintenance',
        image: '/images/residential_switchboard_upgrade_1.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>A switchboard upgrade is one of the bigger single electrical jobs a house will have done, and from the outside it is hard to see what you paid for. The old box comes off, a new box goes on, the lights work the same as they did before.</p>
            <p>So it is worth understanding what actually happens, both so you can plan the day and so you can tell the difference between a proper job and a quick one.</p>

            <h3>Before the Day</h3>
            <p>We will have looked at the existing board and counted circuits, checked the incoming supply and the main earth, and looked at whether the existing enclosure is worth keeping. That count is what drives the price, because every circuit needs its own device and its own termination.</p>
            <p>You will get a time and a rough duration. Most domestic upgrades are a single day. Plan for the power to be off for a good part of it: charge what needs charging, think about the fridge and freezer, and if someone works from home, that day is a problem worth planning around rather than discovering.</p>

            <h3>The Power Goes Off</h3>
            <p>We isolate the supply, then the old board comes apart. This is the point where the job either goes to plan or gets interesting, because it is the first time anyone has seen behind the board in decades.</p>
            <p>What we are looking at: the condition of the incoming consumer mains, the state of the main earth and whether it is adequate, whether the cables coming into the board are in serviceable condition, and whether anything has been added over the years that should not have been.</p>
            <p>On a 1960s or 70s house this is where old rubber-insulated cable sometimes turns up, brittle enough that the insulation breaks away when it moves. If that happens we stop and show you, because wiring a new board onto cable that should not be reused is not something we will quietly do.</p>

            <h3>The New Board Goes In</h3>
            <p>The enclosure gets mounted, then each circuit is brought in, terminated and connected to its own RCBO.</p>
            <p>That last part is the actual upgrade. An RCBO combines a circuit breaker and a safety switch in one device, fitted per circuit. It means every circuit in the house gets shock protection, including the lighting circuits that older installations almost never had, and it means a fault takes out one circuit instead of half the house.</p>
            <p>The cheaper arrangement is one or two shared RCDs covering groups of circuits. It meets the requirement and it is noticeably worse to live with, because a faulty toaster takes out the fridge, the lights and the alarm at the same time. If you are comparing quotes, this is the difference worth asking about, because it is often why one number is lower.</p>
            <p>The main earth usually gets upgraded at the same time. It is not visible and it is not optional: it is what makes everything else work as intended.</p>

            <h3>Then It Gets Tested</h3>
            <p>This is the part people do not see and it is not a formality.</p>
            <ul>
                <li><strong>Insulation resistance</strong> on each circuit, which is what tells us the cable is sound rather than assumed sound</li>
                <li><strong>Earth continuity</strong>, confirming every outlet and fitting is actually connected back to earth</li>
                <li><strong>Polarity</strong>, confirming active and neutral are where they should be at every point</li>
                <li><strong>RCD trip time</strong> on every device, measured with a calibrated instrument against what the standard requires</li>
            </ul>
            <p>That last test is the one that matters most and the one most likely to be skipped. Pressing the test button proves the mechanism moves. Measuring the trip time proves it operates fast enough to protect a person, and that is the entire reason the device is there.</p>

            <h3>Labelling, Which Sounds Trivial and Is Not</h3>
            <p>Every circuit gets labelled for what it actually controls. Not "Power 1, Power 2, Power 3", but which areas of the house.</p>
            <p>This is the difference between standing in the dark working out which breaker to reset, and knowing immediately. It costs us fifteen minutes and it is the thing customers mention most often afterwards.</p>

            <h3>What You Should Get at the End</h3>
            <ul>
                <li>A Certificate of Compliance for Electrical Work</li>
                <li>Your test results</li>
                <li>A labelled board you can understand</li>
                <li>An explanation of anything we found and anything still outstanding</li>
                <li>The site cleaned up, including the old board taken away</li>
            </ul>
            <p>Keep the certificate. It is your evidence the work was done by a licensed electrician and verified, and you will want it when you sell the house or if an insurer ever asks questions after an incident.</p>

            <h3>What It Does Not Fix</h3>
            <p>Worth being straight about this. A switchboard upgrade does not rewire your house, add powerpoints, or fix a circuit that was undersized to begin with. It replaces the protection and the distribution, not the cabling behind it.</p>
            <p>What it does do is give you shock protection on every circuit, capacity to add things later, and a board where a fault is contained and identifiable. On a house that still has ceramic fuses, it is the single highest-value electrical job available.</p>
        `,
        cta: {
            heading: 'Get a Switchboard Upgrade Quote',
            description:
                'Fixed price after we have looked at it, RCBOs on every circuit, full testing and a Certificate of Compliance. We flag anything that might turn up before we start, not after.',
            linkText: 'Book a Switchboard Quote',
            href: '/switchboard-upgrade-adelaide',
        },
    },
    {
        slug: 'ceiling-fans-vs-air-conditioning-running-costs',
        title: 'Ceiling Fans vs Air Conditioning: What They Actually Cost to Run',
        seoTitle: 'Ceiling Fans vs Air Con Running Costs | JPD',
        metaDescription:
            'What ceiling fans and air conditioning actually cost to run through an Adelaide summer, and why using both together is cheaper than using either alone.',
        excerpt:
            'A ceiling fan costs cents a day. A split system costs dollars an hour. The interesting part is what happens when you run both, which is cheaper than running either on its own.',
        date: '2026-08-14',
        author: 'Justin',
        category: 'Efficiency',
        image: '/images/heat_strip_install.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>Adelaide summers are the part of the year where electricity bills stop being background noise. A run of forty-degree days is expensive, and most of that cost is cooling.</p>
            <p>The useful thing to understand is that fans and air conditioning are not competing options. They do completely different jobs, and used together they cost less than air conditioning used alone. That is not a marketing line, it is just how the two work.</p>

            <h3>They Are Not Doing the Same Thing</h3>
            <p>Air conditioning removes heat from a room. It genuinely lowers the temperature, which is why it is expensive: it is moving energy out of your house against the weather.</p>
            <p>A ceiling fan does not lower the temperature at all. It moves air across your skin, which speeds up evaporation and makes you feel several degrees cooler than the thermometer says. Leave a fan running in an empty room and you have achieved nothing except a slightly warmer room, because the motor adds a little heat.</p>
            <p>That distinction is the whole point. A fan cools people. Air conditioning cools rooms.</p>

            <h3>The Running Cost Difference Is Enormous</h3>
            <p>A typical AC-motor ceiling fan draws somewhere around 50 to 75 watts on high. A modern DC-motor fan is often under 30 watts. In practical terms, running a ceiling fan all evening costs a few cents.</p>
            <p>A reverse-cycle split system serving a living area draws something in the order of 1,000 to 2,500 watts while it is actively cooling, depending on size and how hard it is working. That is somewhere between twenty and fifty times the fan.</p>
            <p>Ducted systems cooling a whole house are higher again, and they are working hardest precisely when electricity is most expensive, on the hot afternoons when everyone else's is running too.</p>
            <p>We are deliberately not putting dollar figures on this, because tariffs vary a lot between plans and change over time. But the ratio holds regardless of what you pay per kilowatt hour, and the ratio is the point.</p>

            <h3>The Bit Worth Knowing: Use Both</h3>
            <p>Because a fan makes you feel cooler without changing the temperature, you can run the air conditioning a couple of degrees warmer and feel the same.</p>
            <p>That matters because a cooling system works considerably harder for each degree further from the outside temperature. Setting the thermostat to 25 with a fan running instead of 23 without one is a meaningful reduction in the expensive part of the load, for the cost of a fan that draws less than a light bulb.</p>
            <p>The practical version: turn the fan on first. If that is enough, you have not run the air conditioning at all. If it is not, run the air conditioning a little warmer than you otherwise would with the fan still going.</p>

            <h3>Where Fans Earn Their Keep Most</h3>
            <ul>
                <li><strong>Bedrooms overnight.</strong> Most of an Adelaide summer night is bearable with air movement alone. Running a split system all night to sleep is the single most avoidable cooling cost in most houses.</li>
                <li><strong>Rooms you pass through.</strong> Hallways and studies rarely justify cooling but benefit from air movement.</li>
                <li><strong>Older homes without ducted cooling.</strong> Most of the 1970s and 80s housing across Banksia Park, St Agnes, Redwood Park and Holden Hill was built with no fans at all. Fitting them is one of the cheapest comfort improvements available on a house of that era.</li>
                <li><strong>Alfresco and outdoor areas</strong>, where cooling the space is not an option at all.</li>
            </ul>

            <h3>Winter, Which Most People Never Use</h3>
            <p>Almost every ceiling fan has a reverse switch, and almost nobody touches it.</p>
            <p>Run in reverse on low, a fan pulls air up the middle of the room and pushes the warm air that has collected at ceiling level back down the walls. In a room with high or raked ceilings that genuinely reduces how hard the heating works, without the draught you would get running it forwards.</p>
            <p>It is free, it is already installed, and it is a switch on the fan body or a button on the remote.</p>

            <h3>If You Are Buying</h3>
            <p>DC-motor fans cost more up front and are worth it in a bedroom. They use markedly less power, they are much quieter, and they have more speed steps at the low end where you actually want them at night. The trade-off is that they are almost always remote-controlled by design, though a wall controller can usually be fitted.</p>
            <p>Blade size should match the room rather than the ceiling. A large fan turning slowly moves air more comfortably and much more quietly than a small one working hard.</p>
            <p>And whatever you buy needs fixing into something structural. A fan is a moving load and plasterboard alone will not hold it, which is a job for someone who is going to get above the ceiling and do it properly.</p>
        `,
        cta: {
            heading: 'Get Ceiling Fans Installed Before Summer',
            description:
                'Onto existing light points or new points where you actually want them, with a wall control rather than a remote that goes missing. Booked in before the heat arrives.',
            linkText: 'Book Ceiling Fan Installation',
            href: '/ceiling-fan-installation-adelaide',
        },
    },
];
