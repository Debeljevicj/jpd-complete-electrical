import type { BlogPost } from './blog-posts';

/**
 * Compliance-side guides: smoke alarm rules, landlord electrical duties, home
 * inspections and the Certificate of Compliance. Every regulatory claim here was
 * checked against South Australian primary sources (MFS fact sheets, the Housing
 * Safety Authority, the Residential Tenancies Act 1995, the Electricity (General)
 * Regulations 2012 and the Office of the Technical Regulator).
 */
export const complianceGuides: BlogPost[] = [
    {
        slug: 'smoke-alarm-rules-south-australia-homeowners-landlords',
        title: 'Smoke Alarm Rules in South Australia: What Owners and Landlords Actually Have to Do',
        seoTitle: 'SA Smoke Alarm Rules for Owners and Landlords | JPD',
        metaDescription:
            'What South Australian law requires for smoke alarms, what depends on when your home was built or sold, and what is only advice. For owners and landlords.',
        excerpt:
            'Some smoke alarm rules in South Australia are law, some depend on the year your house was built or sold, and some are only fire service advice. Here\'s which is which.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Safety',
        image: '/images/electrician_working_1764247092697.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>A smoke alarm that is missing, flat or past its life doesn't do anything when a fire starts at night. Most deaths in house fires come from breathing in smoke, not from the flames, and people asleep don't wake up to it. An alarm that works is what turns that into a few extra minutes to get out.</p>
            <p>There's a second reason to get the rules straight. If you own the property, the responsibility for having working alarms sits with you, and if you let it out the tenant is relying on you for it. Penalties apply for non-compliance, but the bigger cost is the one you can't get back.</p>
            <p>The rules are also messy. They depend on when your home was approved, whether it has changed hands since 1998, and whether you've built on since 2014. This guide separates what's required from what's recommended, using the South Australian Metropolitan Fire Service (MFS) and Housing Safety Authority material.</p>

            <h3>What's Required for Every Home</h3>
            <p>Smoke alarms are compulsory in residential buildings in South Australia. That covers houses, units, townhouses and flats, and small boarding houses and the like. Whatever you fit has to comply with <strong>Australian Standard 3786</strong>, which should be printed on the packaging.</p>
            <p>The alarms have to be positioned so occupants of the sleeping areas get reasonable warning to get out safely. Beyond that, the type of alarm you need depends on the age of the home.</p>

            <h3>What Depends on When the Home Was Built or Sold</h3>
            <ul>
                <li><strong>Building approval on or after 1 January 1995:</strong> alarms must be hardwired to the 240 volt supply. The MFS says they should also have a backup battery. Homes with no mains supply can use alarms with a sealed 10 year battery instead.</li>
                <li><strong>Approved before 1 January 1995:</strong> the minimum is an alarm with a replaceable battery.</li>
                <li><strong>Sold on or after 1 February 1998:</strong> when ownership of an older home changes, the new owner has six months from the title transfer to fit alarms that are either hardwired to the 240 volt supply or powered by a sealed, non-removable 10 year battery. A replaceable battery alarm stops being enough at that point.</li>
            </ul>
            <p>So if you've bought an older house in the last few decades and the only alarm in it runs off a nine volt battery, it probably doesn't meet the rule for your situation.</p>

            <h3>Interconnection: New Work Only</h3>
            <p>Interconnected alarms, where one sounds and they all sound, are required in new homes approved from 1 May 2014. The same applies to extensions or additions from that date that need more than one alarm. Those new alarms have to be interconnected with each other, but there's no requirement to tie them into the alarms in the existing part of the house.</p>
            <p>An older home with no recent building work isn't legally required to be interconnected. The MFS still recommends it whenever there's more than one alarm, and we agree. A fire at the far end of the house is the case where interconnection earns its keep.</p>

            <h3>Photoelectric or Ionisation: What the Law Says</h3>
            <p>You may have read that photoelectric alarms are compulsory in South Australia and ionisation alarms are banned. That isn't what the MFS says. The MFS states that domestic smoke alarms can be photoelectric or ionisation, as long as they meet AS 3786.</p>
            <p>What the MFS does is recommend. Photoelectric alarms, hardwired and interconnected, give the best detection across a range of fires. Photoelectric alarms respond best to smouldering fires. Ionisation alarms respond best to fast flaming fires and are prone to nuisance alarms from cooking. For a home that already has ionisation alarms, the MFS suggests adding interconnected photoelectric alarms, and replacing the ionisation ones with photoelectric when they reach 10 years.</p>
            <p>That's our advice too. It's a recommendation rather than a legal requirement, so don't let anyone tell you your existing alarms are illegal purely because of the type.</p>

            <h3>The 10 Year Rule</h3>
            <p>The MFS says alarms that comply with AS 3786 have a recommended service life of 10 years, and should be replaced at least that often, whether they're battery or mains powered and whether they're photoelectric or ionisation. After that they can fail through dust, insects and corrosion. Check the date printed on the back of the alarm. If you can't find one, assume it's old.</p>
            <p>The 10 years is the manufacturer and fire service guidance rather than something written into a regulation we can point to, but it's the one to follow.</p>

            <h3>Where They Go</h3>
            <p>The minimum is an alarm in the hallway that leads to the bedrooms, at the end closest to the living area. If the bedrooms open straight off the living space, put one outside each bedroom door. Each storey of a multi-level home needs its own. If bedrooms are at opposite ends of the house, each area needs one.</p>
            <p>The MFS recommends additional alarms inside the bedrooms, particularly if people sleep with the doors shut. Keep them out of dead air spaces in the corner where wall meets ceiling, away from bathrooms and laundries where steam sets them off, and never paint over them.</p>

            <h3>Who Can Install What</h3>
            <p>Per the MFS, a qualified electrician must install hardwired 240 volt alarms. Householders can install battery powered alarms, following the manufacturer's instructions. Hardwired installation is electrical work, so use a licensed electrician and expect paperwork for it afterwards.</p>
            <p>Alarms that connect through a monitored security system are a trap. Some of those detectors don't comply with AS 3786. If yours is one of those, the MFS says you need one or more compliant alarms as well.</p>

            <h3>Landlords</h3>
            <p>In a rented home, the owner is responsible for installing working smoke alarms and making sure they're maintained. Smoke alarms are also part of South Australia's minimum housing standards, which landlords have to meet at the start of a tenancy. Tenants can test and clean alarms, and the MFS suggests the lease spell out who does the regular checks, but the duty to have working alarms stays with the owner.</p>
            <p>Our practical advice for a rental is to test every alarm at each changeover, write down the date and the alarm's expiry year, and replace anything near 10 years old.</p>

            <h3>Keeping Them Working</h3>
            <ul>
                <li>Test monthly by pressing the button until it sounds</li>
                <li>Change replaceable and backup batteries once a year, or when it chirps</li>
                <li>Vacuum the outside with a soft brush every six months, then test</li>
                <li>Don't disconnect one to stop cooking false alarms. Move it or change the type</li>
            </ul>
        `,
        faqs: [
            {
                question: 'Do hardwired smoke alarms still work in a power cut?',
                answer: 'Yes, as long as the backup battery is in good condition. A hardwired alarm runs off the 240 volt supply and switches to its battery when the power fails. To check the battery, switch the power off at the main switch or the circuit breaker, then press the test button. If it doesn\'t sound, the battery is flat or the alarm is faulty and needs replacing.',
            },
            {
                question: 'Can I put a smoke alarm in the kitchen or near the bathroom?',
                answer: 'Not in the bathroom or laundry, because steam sets them off, and keep ionisation alarms away from the kitchen. The MFS says photoelectric alarms are suitable near kitchens and rooms with combustion heaters or open fires. Place the alarm outside the room rather than directly over the cooktop, away from continual drafts, and never disable one to stop nuisance alarms from cooking.',
            },
            {
                question: 'How do I get rid of an old smoke alarm in Adelaide?',
                answer: 'It depends on the type. Ionisation alarms contain a tiny amount of radioactive material and are marked with a black and yellow radiation symbol, so the MFS says to take them to a dedicated recycling facility or ask your council. Photoelectric alarms have no radiation symbol and can go in the normal household rubbish. Remove the battery first and check your council\'s rules for batteries.',
            },
            {
                question: 'Why is my smoke alarm chirping every minute?',
                answer: 'A regular single chirp usually means a flat battery, so replace it and test the alarm. If the chirp continues with a fresh battery, dust inside the sensor or the end of the alarm\'s life are the next suspects. Check the date on the back. Alarms over 10 years old should be replaced rather than repaired. Your alarm\'s manual lists what each chirp pattern means.',
            },
            {
                question: 'Who changes the smoke alarm batteries in a rental in South Australia?',
                answer: 'The owner is responsible for having working alarms and keeping them maintained, but in practice the tenant often does the monthly test and battery swap. The MFS suggests the lease says who does the more frequent checks. Whoever does it, the tenant should report a faulty alarm straight away, and the landlord should fix it promptly rather than leave a rental without a working alarm.',
            },
        ],
        cta: {
            heading: 'Not Sure What Your Home Needs?',
            description:
                'We\'ll check what\'s on your ceilings, work out what applies to your home, and replace or add alarms where needed. We cover all of Adelaide.',
            linkText: 'Smoke Alarm Installation',
            href: '/smoke-alarm-installation-adelaide',
        },
    },
    {
        slug: 'landlord-electrical-safety-south-australia-rentals',
        title: 'Landlord Electrical Safety in South Australia: What the Law Requires and What\'s Just Sensible',
        seoTitle: 'Landlord Electrical Safety in SA Rentals | JPD',
        metaDescription:
            'What the Residential Tenancies Act and minimum housing standards mean for electrical safety in SA rentals: safety switches, smoke alarms and urgent faults.',
        excerpt:
            'South Australian landlords have a legal duty to keep a rental in repair and to meet minimum housing standards. Here\'s where that touches the electrical side and where it\'s just good practice.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Advice',
        image: '/images/switchboard_single_rcd_golden_grove.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>If you own a rental, the wiring is yours, the tenant can't touch it, and a fault you don't know about is still your responsibility from the moment you're told. Skipping electrical upkeep doesn't save money in the long run. An overheating connection or a failed safety switch can cause a shock or a fire, and a tenant is the one at risk.</p>
            <p>There's a legal side too. Since 1 July 2024 landlords in South Australia must meet the minimum housing standards when a tenancy starts, with penalties attached. This guide covers what the Residential Tenancies Act 1995 and the standards actually say about electrical safety, and what is only good practice. We're electricians, not lawyers, so for a dispute get advice from Consumer and Business Services (CBS) or the tribunal.</p>

            <h3>The Basic Duty: Reasonable Repair</h3>
            <p>Under section 68 of the Act, every South Australian residential tenancy agreement has a term that the landlord will have the premises in a reasonable state of repair at the start of the tenancy and keep them that way, having regard to their age, character and prospective life. It also says the landlord will comply with statutory requirements affecting the premises.</p>
            <p>A landlord isn't in breach until they have notice of the defect and fail to act with reasonable diligence to have it repaired. So the clock starts when the tenant tells you or the agent. Keep a record of when you were told, and what you did.</p>

            <h3>Minimum Housing Standards</h3>
            <p>Section 67A requires a landlord to make sure the premises meet the prescribed minimum housing standards on or before the day the tenant moves in. If they don't, the tenant can request urgent repairs to meet the standards. The standards are administered by the Housing Safety Authority, and the parts that touch electrical work are:</p>
            <ul>
                <li>Electrical installations, alterations, repairs and maintenance must comply with relevant law</li>
                <li>Continuous electrical supply</li>
                <li>Fixtures, fittings and facilities must not be a health or safety hazard, and must be properly installed, fit for purpose and in good working order</li>
                <li>Fitted and working smoke alarms</li>
                <li>The property must be maintained so as not to present a fire hazard</li>
                <li>Sufficient power points in living areas, bedrooms, kitchens and bathrooms, and adequate lighting</li>
            </ul>
            <p>"Compliant with relevant law" is the key phrase for wiring. It means work done by a licensed electrician to the wiring rules, not a handyman's best effort.</p>

            <h3>Safety Switches (RCDs) in Rentals</h3>
            <p>This is the question we get asked most. We could not find anything in the Residential Tenancies Act or the published minimum housing standards that says an existing South Australian rental must be retrofitted with safety switches. Don't rely on interstate articles for this, because the rules differ between states, and some states have stricter rental requirements than South Australia does.</p>
            <p>What is true is that new and altered circuits have to meet the current wiring standard, AS/NZS 3000, and that standard requires safety switch protection on the final subcircuits in new work. So a rental that has had recent electrical work should have protection on what was changed.</p>
            <p>For an older rental with ceramic fuses and no protection, the legal position is murkier but the practical answer isn't. A safety switch is the thing that cuts power in a fraction of a second when current leaks through a person. Putting them on every circuit is one of the most worthwhile safety upgrades you can make to a rental, and it's the sort of thing a reasonable owner would be expected to have done if something went wrong. That's our view as electricians, not a statement of the law.</p>

            <h3>Smoke Alarms</h3>
            <p>The owner is responsible for installing working smoke alarms and maintaining them. What's needed depends on the age of the home and when it was sold, and our guide on South Australian smoke alarm rules covers it. Tenants shouldn't be left to discover that the alarm has no battery.</p>

            <h3>Paperwork: Certificates Go to the Technical Regulator</h3>
            <p>Another myth to clear up. Electrical work in South Australia is certified with an electronic Certificate of Compliance (eCoC), issued by the licensed electrician and provided to the owner and to the Office of the Technical Regulator (OTR). It's not lodged with SafeWork SA. If you own the property, your copy should arrive by email. Keep every one with the property file. They show who did the work and that it was tested.</p>
            <p>An incident where someone gets an electric shock, an electrical burn, or there's a fire that brings out an emergency service is also reportable to the OTR, by the electrician, the occupier or the electricity entity.</p>

            <h3>When a Tenant Reports an Urgent Fault</h3>
            <ul>
                <li><strong>Sparking, burning smell, scorch marks, or a hot switchboard:</strong> the tenant should switch off the affected circuit or the main switch if they can do so safely, and call an electrician or emergency services if there's fire. The landlord or agent should send a licensed electrician straight away.</li>
                <li><strong>A circuit or the whole supply that won't stay on:</strong> same approach. Don't let the tenant keep resetting it.</li>
                <li><strong>Everything else:</strong> a written request to the landlord or agent, with photos, creates a clear record.</li>
            </ul>
            <p>The Act also gives a tenant a path if the landlord doesn't act. Where the disrepair isn't the tenant's fault, is likely to cause injury, property damage or undue inconvenience, and the landlord has been notified but hasn't taken reasonable action, the tenant can recover reasonable costs of getting it fixed. The catch is that the work has to be done by a licensed person, who must give the landlord a report on the work and the apparent cause. The tenant can also claim compensation for damage to their belongings.</p>

            <h3>Landlord and Tenant, Side by Side</h3>
            <ul>
                <li><strong>Landlord:</strong> the wiring, switchboard, safety switches, fixed lights and power points, fixed appliances supplied, smoke alarms, and keeping them in repair after notice</li>
                <li><strong>Tenant:</strong> reporting faults promptly, not overloading circuits, not doing electrical work, and testing smoke alarms</li>
            </ul>

            <h3>What We'd Do Beyond the Minimum</h3>
            <ul>
                <li>Get the switchboard looked at by an electrician before each new tenancy, or at least every few years</li>
                <li>Put safety switches on every circuit if there aren't any</li>
                <li>Test the smoke alarms at each changeover and record the date</li>
                <li>Replace ceramic fuses and anything scorched or cracked</li>
                <li>Keep every Certificate of Compliance on file</li>
            </ul>
        `,
        faqs: [
            {
                question: 'What are the penalties for a landlord in SA who doesn\'t meet the minimum housing standards?',
                answer: 'A landlord who lets premises that don\'t meet the minimum housing standards on the day the tenant moves in commits an offence under section 67A of the Residential Tenancies Act 1995. The maximum penalty is $25,000, and an expiation fee of $1,200 applies. The tenant can also request urgent repairs to bring the property up to standard.',
            },
            {
                question: 'Can a tenant end the lease if a rental has dangerous electrical work?',
                answer: 'Yes, in some cases. The Act lets a South Australian tenant give notice of termination if the premises don\'t comply with the prescribed minimum housing standards, or if the premises are so damaged they\'re unsafe. Before going that far, put the problem to the landlord or agent in writing and ask CBS for advice, because the details matter.',
            },
            {
                question: 'Can a landlord refuse to renew my lease because I complained about an electrical fault?',
                answer: 'Not for that reason. Since the 1 July 2024 rental reforms, a landlord\'s grounds for not renewing a fixed-term lease are restricted, which is meant to stop retaliation over issues such as minimum housing standards. Non-renewal is limited to cases like repairs or renovations that can\'t conveniently be done while the tenant stays. If it happens to you, contact CBS or a tenant advice service.',
            },
            {
                question: 'Do I need an electrical safety certificate before renting out my house in South Australia?',
                answer: 'Not as far as we can find. The minimum housing standards require electrical work to comply with relevant law, but they don\'t list a mandatory electrical inspection certificate before a tenancy starts. Your Certificates of Compliance for past work are the paper trail. An inspection before a new tenancy is good practice, though, and it\'s the best evidence that you looked.',
            },
            {
                question: 'What can I do if my landlord won\'t fix a dangerous electrical fault?',
                answer: 'Put the request in writing with photos, and keep a copy. If nothing happens, you can ask Consumer and Business Services for guidance and apply to the South Australian Civil and Administrative Tribunal (SACAT), which can deal with repairs and compensation. For anything that is an immediate danger, don\'t wait on the paperwork. Switch off the circuit if it\'s safe and call an electrician.',
            },
        ],
        cta: {
            heading: 'Own a Rental in Adelaide?',
            description:
                'We test safety switches, check switchboards, and fix faults for landlords and property managers across Adelaide, and send the Certificate of Compliance when work needs one.',
            linkText: 'Safety Switch Testing and Checks',
            href: '/rcd-testing-safety-switches-adelaide',
        },
    },
    {
        slug: 'home-electrical-safety-inspection-adelaide',
        title: 'What an Electrical Safety Inspection of Your Home Actually Covers',
        seoTitle: 'Home Electrical Safety Inspection Adelaide | JPD',
        metaDescription:
            'What a licensed electrician checks in a home electrical safety inspection, when it is worth doing, what the report is not, and how to get ready for it.',
        excerpt:
            'A proper inspection is more than a look at the switchboard. Here\'s what gets checked, when it\'s worth the money, and what the report does and doesn\'t tell you.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Safety',
        image: '/images/rewire_insulation_testing_kingswood.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>Most of your home's wiring is behind walls and above ceilings, where you can't see it going bad. The usual way people find out is that something trips, buzzes or smells. By then a connection may already have been running hot, or the safety switch you assume is protecting you may have stopped working.</p>
            <p>The consequence of never having it checked is plain. Most homes won't have a serious problem. The ones that do can give you an electric shock or start a fire, usually with very little warning. An inspection is how you find the problem on a quiet day rather than during an emergency.</p>
            <p>Here's what a proper inspection covers, when it's worth getting one, and what you should and shouldn't expect from the report.</p>

            <h3>What Gets Checked</h3>
            <h3>The Switchboard</h3>
            <p>This is where the visual inspection starts. The electrician looks for scorching or discolouration, loose or overheated connections, ceramic fuses where there should be circuit breakers, mismatched breaker brands, damaged covers, doubled-up wires on one terminal, and previous DIY or hurried work. It's also where signs of an asbestos backing panel show up in older homes. They also look at whether the board is full, labelled, and big enough for what's connected to it.</p>

            <h3>Safety Switches (RCDs)</h3>
            <p>Pressing the test button tells you the mechanism moves. It doesn't tell you whether the device trips fast enough on a real leakage current. A tester that injects a controlled current measures the trip time. Which circuits are protected matters too. Many older homes have a safety switch covering only some of the circuits, so lights or the oven can be unprotected.</p>

            <h3>Earthing</h3>
            <p>The earth is what makes a fault trip the breaker instead of leaving the metal body of an appliance live. The electrician checks the main earthing connection and tests that earth continuity is sound at the outlets and fixed appliances they test. A missing or broken earth is invisible, which is why it's tested rather than looked at.</p>

            <h3>Insulation Resistance</h3>
            <p>This test applies a higher test voltage to the wiring with the circuit isolated, to find insulation that has deteriorated from age, heat, moisture or rodents. It's why parts of an inspection need the power off.</p>

            <h3>Polarity at Powerpoints</h3>
            <p>A sample of powerpoints is tested for correct polarity. Active and neutral swapped is a classic DIY error. The appliance works perfectly, but the switch in it now isolates the neutral and leaves the appliance live when it's switched off. Powerpoints are also checked for cracks, heat marks and loose fixing.</p>

            <h3>Accessible Wiring and the Roof Space</h3>
            <p>If there's a roof hatch, the electrician can see a lot: the cable type and condition, rodent damage, joins made without a junction box, cables buried in insulation, and downlight transformers or fittings covered over. Rubber or cloth sheathed cable, found in homes of a certain age, goes brittle and is a reason to talk about rewiring.</p>

            <h3>Smoke Alarms</h3>
            <p>Are they there, in the right places, working, interconnected where they should be, and within their 10 year life? It's a quick check and one of the most valuable.</p>

            <h3>Other Things Worth Looking At</h3>
            <ul>
                <li>The meter box and the supply cable at your side of the connection</li>
                <li>Outdoor powerpoints, pool and spa wiring, and sheds with their own supply</li>
                <li>Solar isolators and inverters, visually, if you have them</li>
                <li>Extension leads and double adaptors used as permanent wiring</li>
                <li>Bathroom and wet area fittings</li>
            </ul>

            <h3>What an Inspection Can't See</h3>
            <p>An inspection looks at what's accessible and samples the rest. It can't see cables inside closed walls, and it won't test every connection in the house. Thermal imaging adds a lot by finding heat that the eye can't, but it too is a snapshot. A good electrician will tell you what they could and couldn't check.</p>

            <h3>The Report Is Not a Certificate of Compliance</h3>
            <p>An inspection report describes the condition of your electrical system on the day. It isn't a certificate that the installation is compliant, and it doesn't fix anything. The Certificate of Compliance in South Australia is the legal record of electrical work that was carried out and tested. If the inspection finds problems, repairs are a separate job, quoted separately, and the paperwork for those repairs follows the repair work.</p>
            <p>Ask before the inspection exactly what testing is included and what you'll get in writing. A report listing findings in order of urgency is far more useful than a pass or fail.</p>

            <h3>When It's Worth Doing</h3>
            <ul>
                <li><strong>Buying an older home:</strong> to know what you're taking on before you commit</li>
                <li><strong>Fuses, ceramic holders, or a very old board:</strong> if the switchboard predates safety switches</li>
                <li><strong>Before a renovation or an addition:</strong> to see whether the existing system can carry the load</li>
                <li><strong>Before adding an EV charger, air conditioner or solar:</strong> new loads show up weak points</li>
                <li><strong>After a storm, flood, roof leak or rodent infestation</strong></li>
                <li><strong>Before letting a property out, or between tenancies</strong></li>
                <li><strong>Any time something flickers, buzzes, runs warm or trips for no clear reason</strong></li>
            </ul>
            <p>Insurance is a grey area. Some insurers ask for evidence of electrical condition for older properties, but that's between you and your policy wording, so check yours. An inspection record is useful to have either way.</p>

            <h3>How to Prepare</h3>
            <ul>
                <li>Clear access to the switchboard, the meter box and the roof hatch</li>
                <li>Tell the electrician about every symptom, with dates if you have them, such as tripping, flickering or warm outlets</li>
                <li>Tell them about any previous electrical work, and find the old Certificates of Compliance</li>
                <li>Know where every board is, including the shed, granny flat or pool</li>
                <li>Expect the power to be off for part of the visit, and plan for the fridge, computers, medical equipment and anything with a clock</li>
                <li>If you rent, get the landlord's or agent's approval first</li>
            </ul>
        `,
        faqs: [
            {
                question: 'How long does a home electrical safety inspection take?',
                answer: 'It depends on the size of the home, how many boards there are and how easy everything is to reach, so ask for an estimate when you book. A small unit with one board is quite different from a large house with a shed and a pool. Part of the visit usually needs the power off, so the electrician should be able to tell you roughly how long that will be.',
            },
            {
                question: 'Do I need to be home for an electrical inspection?',
                answer: 'It\'s best if you or someone you trust is there. The electrician needs access to the switchboard, the roof space and the rooms, and parts of the testing switch the power off. Being there also means you can hear the findings on the spot and ask questions. If you\'re a tenant, check with your landlord or agent first.',
            },
            {
                question: 'What happens if the inspection finds something dangerous?',
                answer: 'A competent electrician will tell you on the day, explain the risk in plain terms, and can usually isolate the affected circuit so it\'s safe to leave. Repairs are then quoted as a separate job, and you decide what to do and when. Anything that could cause a fire or shock should be dealt with promptly rather than put off.',
            },
            {
                question: 'Is an electrical safety inspection the same as test and tag?',
                answer: 'No. Test and tag checks portable appliances, such as leads, power tools and heaters, by plugging them into a tester. A home electrical inspection looks at the fixed wiring: the switchboard, safety switches, earthing, circuits, powerpoints and fittings. They test different things, and passing one says nothing about the other.',
            },
            {
                question: 'How often should I have my home\'s wiring checked?',
                answer: 'There\'s no fixed interval for owner-occupied homes in South Australia that we\'re aware of, so it comes down to age and condition. A home with an older switchboard, old cable or a history of DIY work is worth checking every few years, and any home deserves a check when you buy it, before major changes, or when symptoms show up. Safety switches and smoke alarms need regular testing regardless.',
            },
        ],
        cta: {
            heading: 'Want Your Switchboard and Safety Switches Checked?',
            description:
                'We test safety switches properly, look over the board and tell you plainly what we find. Based in Wynn Vale, covering all of Adelaide.',
            linkText: 'Safety Switch Testing and Checks',
            href: '/rcd-testing-safety-switches-adelaide',
        },
    },
    {
        slug: 'certificate-of-compliance-electrical-work-south-australia',
        title: 'Certificate of Compliance for Electrical Work in South Australia, Explained',
        seoTitle: 'Electrical Certificate of Compliance SA Explained | JPD',
        metaDescription:
            'What a Certificate of Compliance is in South Australia, who lodges it with the Technical Regulator, and what to do if work was never certified.',
        excerpt:
            'Every licensed electrician in South Australia has to certify their work. Here\'s what the certificate is, what you should get, and what to do if work on your house was never certified.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Advice',
        image: '/images/switchboard_rcbos_wired_ridgehaven.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>The Certificate of Compliance is the only proof that the electrical work in your home was done by someone licensed, and tested before it was switched on. Without it you're relying on someone's word that a new circuit, powerpoint or switchboard is safe, and the next owner, your insurer or the next electrician has nothing to check.</p>
            <p>Work that was never certified is also a warning sign. Unlicensed or uncertified work is where loose joins, missing earths and overloaded circuits come from, and the consequence of those is an electric shock or fire. If you're buying, renovating or just curious about the wiring you inherited, this is the paper to look for.</p>

            <h3>What It Is</h3>
            <p>In South Australia the certificate is called an electronic Certificate of Compliance, or eCoC. The Office of the Technical Regulator (OTR), which regulates electrical safety in the state, describes it as a legal document required under the Electricity Act 1996. It's issued by a registered electrical worker, and it certifies that the installation complies with the applicable requirements of AS/NZS 3000, the wiring rules, and the standards that it calls up.</p>
            <p>The OTR gives four reasons for having it. It enables self-certification of work, assures you that the work has been installed, examined and tested to the Australian Standards, limits the electrician's liability to the work they carried out, and lets the OTR audit installations for safety and technical compliance.</p>
            <p>It's not a SafeWork SA document, and you may see articles from other states talking about a Certificate of Electrical Safety or lodging with another body. In South Australia it goes to the OTR.</p>

            <h3>Which Work Needs One</h3>
            <p>The State Government's guidance says an electrician must give you an eCoC for most of their work, including electrical tests and checks, but not for minor maintenance such as replacing a light globe. The regulations require work of any kind covered by AS/NZS 3000 to be carried out, examined and tested to that standard.</p>
            <p>In practice, that means new circuits, new or relocated powerpoints, lighting changes, switchboard work, hardwired smoke alarms, air conditioner and oven circuits, and EV chargers are all certified. There are grey areas at the small end, such as swapping like for like. If you're unsure, ask the electrician before the job what certificate you'll receive.</p>
            <p>And a reminder: in South Australia the work itself has to be done by a licensed electrician. A homeowner can't do their own fixed wiring and then certify it.</p>

            <h3>Who Lodges It, and When</h3>
            <p>Under regulation 55A of the Electricity (General) Regulations 2012, the licensed worker completes the certificate. Where the worker is an employee of an electrical contractor, they issue it to the contractor, who completes it if satisfied that the work and testing meet the standard, and provides it to both the Technical Regulator and the owner or operator of the installation within 30 days after the installation was made available for energisation. A self-employed registered worker does the same directly.</p>
            <p>So the electrician lodges it, not you. The 30 days is the outer limit, and the regulations allow it to be completed after the power is back on if it isn't reasonably practicable to do it before.</p>
            <p>Electricians who don't issue it or issue it incorrectly face warnings, expiation notices, disciplinary interviews and legal action, with penalties of up to $5,000 under section 61 of the Act.</p>

            <h3>What You Should Receive and Keep</h3>
            <p>According to the State Government, eCoCs are emailed to you, and if you don't have email the tradesperson must print one for you. Save the email, then keep a copy on your computer or phone, and a printout with the house documents. If you're in a rental, ask the landlord for any certificates for work they've had done.</p>
            <p>What you want to see on it is the electrician's name, licence details, the address, the date, and a description of what was done. If the description is vague, ask for it to be fixed.</p>
            <p>SA Power Networks may also want a copy for network-related jobs such as new connections or alterations to your connection.</p>

            <h3>Why It Matters for Insurance and Selling</h3>
            <p>After an electrical fire or damage claim, an insurer may ask who did the work and whether it was certified. A certificate for the work answers that. Without it, the question is open.</p>
            <p>When you sell, buyers, their conveyancers and building inspectors often ask for it. It saves arguments. And for a buyer, a run of certificates in the file is a good sign the house has been looked after by licensed people.</p>

            <h3>What It Doesn't Tell You</h3>
            <p>A certificate covers the work that the electrician did, not the entire house. A switchboard upgrade certificate says nothing about the wiring in the walls, and a certificate for a new powerpoint doesn't make the ceramic fuse board in the hallway any safer.</p>

            <h3>If You Suspect Work Was Never Certified</h3>
            <ol>
                <li><strong>Ask first.</strong> The previous owner, the builder or the tradesperson named on any paperwork may have it. Electricians keep records and can often retrieve one.</li>
                <li><strong>Look at what's there.</strong> Overlapping joins, a switchboard with mismatched parts, circuits that have been added to old ones and cables running in odd places are all clues.</li>
                <li><strong>Get an electrician to inspect and test it.</strong> A licensed electrician can't simply sign off work they didn't do and haven't examined. What they can do is test it, report what they find and fix what is wrong, then certify the work they've carried out.</li>
                <li><strong>Raise concerns with the regulator.</strong> The OTR takes complaints about the safety or technical compliance of an electrical installation.</li>
            </ol>
            <p>Don't leave a doubtful installation in service on the assumption it's probably fine. Work done without testing is a gamble with the people who live there.</p>
        `,
        faqs: [
            {
                question: 'How do I know my electrician has lodged the Certificate of Compliance?',
                answer: 'You should receive a copy by email, and that\'s your first sign. The electrician or their contractor has to provide the certificate to both you and the Technical Regulator within 30 days after the installation was made available for energisation. If nothing has arrived by then, ask the electrician for it. If they can\'t produce it, the OTR\'s eCoC team can help with queries.',
            },
            {
                question: 'Do I need a Certificate of Compliance to replace a light fitting or powerpoint?',
                answer: 'Replacing a light globe doesn\'t need one, as that\'s minor maintenance. Swapping a fitting or powerpoint is electrical work, though, and in South Australia it has to be done by a licensed electrician, so expect a certificate for it. Unlicensed or DIY work won\'t come with one, which is exactly the problem when you sell or make an insurance claim.',
            },
            {
                question: 'How long should I keep an electrical Certificate of Compliance?',
                answer: 'Keep it for as long as you own the property, and pass the file on to the next owner. We\'re not aware of a set legal period for owners, but the certificate is the record that the work was done by a licensed person and tested. Buyers, insurers and later electricians will ask for it. A photo on your phone and a copy in the house folder is enough.',
            },
            {
                question: 'Does a new EV charger need a Certificate of Compliance in South Australia?',
                answer: 'Yes. Fitting a home EV charger is electrical installation work, so the electrician who installs it should certify it with an eCoC and provide it to you and the Technical Regulator. The installation also has to meet the wiring rules and the network operator\'s requirements. Keep the certificate with the charger\'s manual, because it\'s what you\'ll need if there\'s ever a warranty or insurance question.',
            },
            {
                question: 'What\'s the difference between a Certificate of Compliance and a Certificate of Electrical Safety?',
                answer: 'They\'re the same sort of paperwork in different states. Victoria\'s Certificate of Electrical Safety is lodged with Energy Safe Victoria, while South Australia\'s Certificate of Compliance goes to the Office of the Technical Regulator. If an interstate website or a seller from another state mentions the first one, it doesn\'t apply here. In South Australia you want an eCoC.',
            },
        ],
        cta: {
            heading: 'Not Sure What Was Done to Your Switchboard?',
            description:
                'If you\'ve inherited a board with no paperwork, we\'ll tell you what\'s there and what it needs, and certify anything we do. We cover all of Adelaide.',
            linkText: 'Switchboard Upgrades',
            href: '/switchboard-upgrade-adelaide',
        },
    },
];
