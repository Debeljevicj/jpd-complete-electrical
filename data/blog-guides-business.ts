import type { BlogPost } from './blog-posts';

/**
 * Guides for small businesses: offices, shops, clinics, workshops.
 *
 * Law versus standard matters in all of these. The WHS Regulations are the law.
 * Standards such as AS/NZS 3760 and AS/NZS 3017 are the methods the regulator
 * points to for meeting it. Keep that line clear when editing.
 */
export const businessGuides: BlogPost[] = [
    {
        slug: 'test-and-tag-south-australia-business-guide',
        title: 'Test and Tag in South Australia: What the Law Requires and What the Standard Adds',
        seoTitle: 'Test and Tag in SA: Is It Required? | JPD',
        metaDescription:
            'Is test and tag legally required in South Australia? What the WHS Regulations say, who is responsible, how AS/NZS 3760 sets intervals, and what to do with a failed item.',
        excerpt:
            'South Australia has no blanket law saying every workplace must tag everything every 12 months. There is a legal duty, though, and AS/NZS 3760 is how most businesses meet it.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Safety',
        image: '/images/commercial_office_electrical_1764247119477.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>If you run a business, the duty to keep electrical equipment safe sits with you, not with the staff member who plugged in the damaged lead. A frayed extension cord or a cracked plug on a kettle can give someone a serious shock, and some electrical faults start fires. If that happens and you can't show how you checked your equipment, you're explaining yourself to SafeWork SA, and quite possibly to an insurer, with nothing in your hand.</p>
            <p>The other mistake is the opposite one: paying for a blanket tag-everything-every-year program because someone said it's the law, when the actual requirement is narrower and more sensible than that. This guide sorts out which is which.</p>

            <h3>What's Law and What's Standard</h3>
            <p>Test and tag is the common name for the inspection and testing of plug-in electrical equipment. The word "tag" isn't in the legal duty. Here's how it breaks down.</p>
            <ul>
                <li><strong>The law:</strong> the Work Health and Safety Act 2012 (SA) and the WHS Regulations. A person conducting a business or undertaking (a PCBU) has to manage electrical risks, and must make sure electrical equipment under their control is safe to use so far as is reasonably practicable. That duty applies to every workplace.</li>
                <li><strong>A specific legal requirement:</strong> for plug-in equipment used in a "hostile operating environment", the regulations say it must be regularly inspected and tested by a competent person. A hostile environment is one where normal use is likely to damage the equipment or shorten its life: moisture, heat, vibration, mechanical damage, corrosive chemicals or dust. Safe Work Australia's examples include wet or dusty areas, outdoors, commercial kitchens and manufacturing. Equipment that hasn't been regularly tested in those places must not be used until it is.</li>
                <li><strong>The standard:</strong> AS/NZS 3760, <em>In-service safety inspection and testing of electrical equipment and RCDs</em>. It sets out the test methods and indicative intervals. Regulators point to it as guidance on how to comply. It isn't a law in its own right, and the regulations don't say "tag everything yearly".</li>
            </ul>
            <p>So is test and tag legally required in South Australia? For plug-in equipment in a hostile environment, regular inspection and testing is. For a dry, clean office or shop, there's no regulation that lists a fixed interval, but the general duty still applies, and the guidance says equipment there may still need inspection and testing on a less frequent basis. Construction sites are covered separately by AS/NZS 3012, and the usual rule of thumb there is a three-monthly cycle, tightened or loosened by the site's risk assessment.</p>
            <p>One caution. We've read the Safe Work Australia model code of practice and fact sheet, which SafeWork SA's code follows. SafeWork SA publishes its own version, and a few details such as the standard edition it references can differ, so if you need the exact wording for an audit, read SafeWork SA's current code.</p>

            <h3>Who's Responsible</h3>
            <p>The PCBU with management or control of the equipment. In a typical small business that's the owner or whoever runs the operation. It doesn't matter who bought the item. If your workers use it at your workplace and you control the site, the duty is yours, and that includes a staff member's own appliance plugged in at work.</p>
            <p>Officers of a company (directors and the like) also have a duty to take reasonable steps to make sure the business meets its safety duties, which is why "I left it to the office manager" doesn't stand up well.</p>

            <h3>What AS/NZS 3760 Covers and How Intervals Get Decided</h3>
            <p>The standard covers low voltage equipment connected by a flexible cord and plug, and it includes residual current devices (RCDs) in the scope. It sets out a visual inspection, then electrical tests suited to the class of equipment: typically earth continuity for earthed items, insulation resistance and polarity where relevant, and a trip test for portable RCDs.</p>
            <p>We aren't going to quote a table of intervals, because the right interval depends on your site, and a generic number is how people end up over-testing a monitor or under-testing a workshop lead. What decides it is:</p>
            <ul>
                <li><strong>The environment.</strong> Dry office desk or workshop floor, indoors or outdoors, wet or dusty.</li>
                <li><strong>The equipment.</strong> Whether it's handheld, moved around often, or sits in one spot for years. Extension leads and powerboards take the most punishment.</li>
                <li><strong>How hard it's used.</strong> Hire equipment and commercial cleaning gear are treated more strictly than a fixed printer.</li>
                <li><strong>What the manufacturer says.</strong> Where there's a recommendation, it counts.</li>
                <li><strong>What testing finds.</strong> If a batch keeps failing at a site, the interval should shorten.</li>
            </ul>
            <p>That's a risk-based approach, written down. Whatever interval you land on, record why.</p>

            <h3>What Gets Tagged and What Doesn't</h3>
            <p>The scope is equipment connected by a flexible cord and plug, plus the leads themselves. In a workplace that usually means extension leads, powerboards, power tools, kitchen and break room appliances, cleaning equipment, portable heaters and fans, and anything with a plug on it that isn't fixed to the building.</p>
            <p>It doesn't cover the building's fixed wiring, switchboards, or equipment that's hardwired into the installation, such as a fixed light fitting or an air conditioner on its own isolator. That's a different job. Fixed installations are checked by electrical inspection and testing under AS/NZS 3017, not by a handheld appliance tester. Medical devices and electrical equipment in patient care areas are specifically outside AS/NZS 3760 and have their own standards, so if you run a clinic, raise that when you talk to a tester.</p>

            <h3>What a Tag and a Register Tell You</h3>
            <p>Under the regulations, a record of testing for equipment in a hostile environment has to show who did the testing, the date, the outcome, and when the next test is due. The record can be the tag on the equipment. So a tag with those details is a legitimate record.</p>
            <p>What a tag doesn't tell you is anything about the items nobody tagged. A register fixes that. It lists every item, where it lives, the result, and the next due date, so you can see at a glance what's overdue, what failed, and what was never on the list. When an auditor, an insurer or a principal contractor asks for evidence, the register is the document you hand over.</p>
            <p>The tester has to be competent: someone with the training, qualifications or experience to do it. A licensed electrician qualifies, and so does a person who's completed a structured course and been assessed on a pass or fail portable appliance tester and visual inspection. It doesn't have to be an electrician for plug-in equipment, though for anything beyond a standard pass or fail test, you want one.</p>

            <h3>How to Prepare</h3>
            <ul>
                <li>Make a rough list of everything with a plug, including what staff brought in themselves.</li>
                <li>Gather items from storage, back rooms, vehicles and the shed so they get counted.</li>
                <li>Decide which equipment needs to stay running (servers, fridges, point of sale) and tell the tester before they arrive.</li>
                <li>Pull out anything you already know is damaged. Don't wait for the test to find a cut cord.</li>
                <li>Say whether failed items should be repaired, replaced or just tagged out. It changes the cost.</li>
            </ul>
            <p>Cost depends mostly on item count, the number of locations, whether testing has to happen after hours, and how many failures you want repaired. We won't put a number on it in a guide, because it varies too much by site.</p>

            <h3>What to Do With a Failed Item</h3>
            <p>The regulations are plain about this: equipment that's unsafe has to be disconnected or isolated, and it can't go back into service until it's been repaired or tested by a competent person and found safe, or replaced, or permanently removed. In practice that means a fail tag, taking it off the floor, and making sure someone doesn't plug it back in the next morning because it's the one that fits the printer.</p>
            <p>A repair is sensible for a damaged lead or plug. A failed appliance with internal insulation breakdown is usually a replacement. Either way, the outcome goes in the register so there's a trail, and if the same type of item keeps failing, shorten its interval or change how it's used.</p>
        `,
        faqs: [
            {
                question: 'Does a brand-new appliance need testing before I use it at work?',
                answer: 'Not before first use. Safe Work Australia\'s code says brand-new equipment that has never been used doesn\'t have to be tested first, but it should be checked for damage from delivery or installation. Many businesses fit a "new to service" tag with the date and the date the first test falls due. Second-hand equipment is different: it should be tested before its first use.',
            },
            {
                question: 'Do I have to test staff members\' own appliances at work?',
                answer: 'If staff use their own equipment at your workplace, the duty to make sure it\'s safe still falls on you, because it applies whether or not your business owns the item. The practical choices are to include their equipment in your program, or to ban personal electrical items. A personal kettle or heater in a kitchen is the usual example where this comes up.',
            },
            {
                question: 'Can a staff member do our test and tag, or does it have to be an electrician?',
                answer: 'It has to be a competent person, which isn\'t always an electrician. The code of practice accepts a licensed electrician or someone who has completed a structured training course and been assessed on a pass or fail portable appliance tester and visual inspection. Whoever does it, they should know the standard they\'re working to, and be honest about when a failure needs an electrician.',
            },
            {
                question: 'How long do I have to keep test and tag records?',
                answer: 'For equipment used in a hostile operating environment, the regulations say a record of testing must be kept until the equipment is next tested or permanently removed from the workplace or disposed of. For other workplaces there is no figure I can point to. Most businesses keep the register permanently, since it\'s the evidence if anyone ever asks about a particular item.',
            },
            {
                question: 'Do desktop computers and printers in an office need test and tag?',
                answer: 'They can, but less often. The code of practice describes offices, shops and classrooms as lower-risk workplaces where computers, printers and fixed equipment commonly sit, and says that equipment may still need inspection and testing on a less frequent basis. The interval is a risk-based judgement guided by AS/NZS 3760, so the leads and powerboards behind the desk matter as much as the computer.',
            },
        ],
        cta: {
            heading: 'Need Your Equipment Tested and Recorded?',
            description:
                'We test and tag for offices, workshops, clinics and retail across Adelaide, and set the schedule around what your workplace actually does. You get a register you can hand to an auditor or insurer.',
            linkText: 'See Our Test and Tag Service',
            href: '/test-and-tag-adelaide',
        },
    },
    {
        slug: 'rcd-safety-switch-testing-workplace-sa',
        title: 'Testing the Safety Switches at Your Workplace: Push-Button Checks vs Trip-Time Tests',
        seoTitle: 'Workplace RCD Testing in SA: Push-Button vs Trip-Time | JPD',
        metaDescription:
            'What South Australian workplaces have to do about RCD testing: push-button checks versus a trip-time test by an electrician, who is responsible, failures and records.',
        excerpt:
            'Pressing the test button and having an electrician measure the trip time are two different checks. Here\'s what each one proves, and what the WHS Regulations say about RCDs at work.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Safety',
        image: '/images/switchboard_retrofit_safety_switch.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>A safety switch is the device that's meant to cut the power when current is flowing through someone instead of the circuit. If yours has stopped working and nobody has checked, you won't find out until a staff member or customer needs it, and by then the result is an electric shock that was avoidable. Under the WHS Regulations, the person with management or control of a workplace has to take all reasonable steps to have the RCDs there tested regularly by a competent person. So skipping it is a safety risk and a compliance gap at the same time.</p>
            <p>Our <a href="/blog/rcd-testing-thermal-imaging-adelaide/">RCD and thermal imaging guide</a> covers the general case. This one is about the workplace: what the regulations say, who does which check, and what to do with the result.</p>

            <h3>What the Regulations Say</h3>
            <p>These come from the model WHS Regulations, which South Australia follows, as explained in Safe Work Australia's code of practice on managing electrical risks. Three provisions matter here.</p>
            <ul>
                <li><strong>Where an RCD has to be used (regulation 164).</strong> In hostile operating environments, or where equipment is moved between locations or frequently moved in use, the PCBU has to minimise the electrical risk of plug-in supply by using an appropriate RCD, so far as is reasonably practicable. Where one is required and the socket outlet is up to 20 amps, the RCD must trip at no more than 30 milliamps. There are exceptions, such as extra-low voltage supply (50 volts AC or less), DC supply, or supply through an isolating transformer providing at least equivalent protection.</li>
                <li><strong>Testing them (regulation 165).</strong> The person with management or control of a workplace must take all reasonable steps to ensure the RCDs used there are tested regularly by a competent person. The code of practice says this covers RCDs in all operating environments, including fixed ones in the switchboard. It doesn't give an interval, and neither do we, because the right one depends on the site.</li>
                <li><strong>Records and failures.</strong> A record of testing, other than daily testing, has to be kept until the device is next tested or disposed of. If an RCD is tested and found faulty, it has to be taken out of service and replaced as soon as possible.</li>
            </ul>
            <p>We've checked these against the Safe Work Australia model code. SafeWork SA publishes its own code, and the regulation numbers above are the model numbering, so check SafeWork SA's current wording if you need to quote it.</p>

            <h3>Two Different Checks</h3>
            <p>People use "RCD testing" for two things that aren't the same.</p>
            <p><strong>The push-button test</strong> is the little test button on the device. Pressing it creates a small imbalance inside the RCD and should make it trip. It proves the mechanism moves. Anyone can do it, takes seconds, and is a sensible routine for staff to run. The regulations treat daily testing as not needing a record, which fits this kind of quick check.</p>
            <p><strong>The trip-time test</strong> is what a competent person does with an instrument. It injects a known leakage current and measures how long the RCD takes to trip, in milliseconds, against what the standard allows. A ramp test can also find the current at which it operates. An RCD can pass the button test and still trip too slowly or at the wrong level, and nothing on the outside shows it. This is the test that tells you the device will do its job.</p>
            <p>Both matter. The button catches a seized device between formal tests. The instrument test catches a device that moves but no longer protects. Neither replaces the other.</p>

            <h3>Where the Standards Fit</h3>
            <p>Two standards sit behind this, and they cover different things.</p>
            <ul>
                <li><strong>AS/NZS 3017</strong> (<em>Electrical installations: Verification by inspection and testing</em>) covers verifying the fixed installation. RCD operation is one of the tests it deals with. It's what a licensed electrician works from when testing the RCDs in your switchboard.</li>
                <li><strong>AS/NZS 3760</strong> covers in-service testing of plug-in equipment and also RCDs, which includes portable RCDs and RCD-protected powerboards. It's part of what a test and tag program covers.</li>
            </ul>
            <p>We haven't quoted trip-time limits or push-button intervals, because they come from those standards and from your risk assessment, and the exact figures depend on the device type. Your electrician will test against the current edition.</p>

            <h3>Who Does What</h3>
            <p>Your staff can run the push-button check, if you've set up a routine and told them what to do when it doesn't trip. The trip-time test and the written result should come from a competent person, and for fixed RCDs in a switchboard that means a licensed electrician, because it involves working at the board.</p>
            <p>Responsibility follows management or control. If you lease a shop and the switchboard is inside your tenancy, that's likely you. If the board serves the whole building and the landlord controls it, they may hold the duty for that board while you hold it for your own area. Don't assume. Check the lease, and where responsibility is shared, agree in writing who tests what and who keeps the records.</p>

            <h3>What Happens on a Failure</h3>
            <p>A failed RCD doesn't get adjusted back into spec. It gets replaced, and the regulations say as soon as possible. Depending on the board that's a straight swap, or it may raise the question of whether the board is worth upgrading to individual RCBOs so one fault doesn't drop a whole floor. Until it's replaced, the circuits it protects shouldn't be used for portable equipment. If a failure shows up in a fixed RCD that's the only protection on a circuit, your electrician should tell you straight what can safely stay on and what can't.</p>
            <p>Plan the testing day, too. Each RCD has to actually trip, so the circuits go off briefly. Tell the electrician about anything that shouldn't lose power without warning.</p>

            <h3>Records That Hold Up</h3>
            <p>Keep a written report with the device, circuit it protects, the measured result and the date. Keep it until the device is next tested at minimum. A note saying "RCDs tested, all OK" is thin. The reading for each device is what shows it was done properly, and it's what an insurer or SafeWork SA inspector would want to see.</p>
        `,
        faqs: [
            {
                question: 'Who is responsible for testing the safety switches in a shop I lease?',
                answer: 'Whoever has management or control of the workplace, which depends on your lease and the building. The WHS Regulations put the testing duty on the person with management or control. If the board sits inside your tenancy, that\'s usually you. If one board serves the whole building and the landlord runs it, check who tests it, and get the arrangement in writing.',
            },
            {
                question: 'What should I do if a safety switch at work trips and won\'t reset?',
                answer: 'Leave it off and find out why before anything is switched back on. The code of practice says circuits shouldn\'t be re-energised after an RCD operates until the reason has been determined by a competent person. Unplugging everything on that circuit and trying again can show if equipment is the cause. If it won\'t reset with nothing plugged in, call an electrician.',
            },
            {
                question: 'Does a portable safety switch or an RCD powerboard need testing too?',
                answer: 'Yes. Portable RCDs are covered by AS/NZS 3760, so they belong in your test and tag program, not just the switchboard schedule. The code of practice says a new portable RCD should be checked by pressing its trip test button, and ones in service are tested to the standard. Treat them as electrical equipment and as protective devices.',
            },
            {
                question: 'Do I need to keep a record every time staff press the test button?',
                answer: 'No. The WHS Regulations say a record of RCD testing must be kept, other than daily testing, until the device is next tested or disposed of. A routine daily push-button check doesn\'t need a record under that wording. If you run a less frequent routine, a simple log of the date, who checked and the result is cheap and worth keeping.',
            },
            {
                question: 'If I have safety switches on the board, do I still need to test and tag my leads and tools?',
                answer: 'Yes, they\'re separate duties. An RCD limits the shock if current is leaking to earth, but it doesn\'t tell you that a lead has damaged insulation, a broken earth connection or a failing plug. The regulations treat RCD use and testing, and the inspection and testing of plug-in equipment in hostile environments, as separate requirements. Having one doesn\'t cover you for the other.',
            },
        ],
        cta: {
            heading: 'Want Your RCDs Tested Properly?',
            description:
                'We test safety switches with a calibrated instrument and give you the measured trip times in writing, for workplaces across Adelaide.',
            linkText: 'See RCD Testing',
            href: '/rcd-testing-safety-switches-adelaide',
        },
    },
    {
        slug: 'small-business-electrical-safety-checklist-adelaide',
        title: 'Electrical Safety Checklist for a Small Business, Office or Shopfront in Adelaide',
        seoTitle: 'Small Business Electrical Safety Checklist | JPD',
        metaDescription:
            'An electrical safety checklist for an Adelaide office or shopfront: what you can check yourself, what needs a licensed electrician, and what to keep on file.',
        excerpt:
            'Most of the checks that catch real problems take five minutes and need no tools. Here\'s what to check yourself, what to leave to an electrician, and what belongs in your compliance folder.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Safety',
        image: '/images/medical_clinic_upgrade.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>If you run a shop, office or clinic, you're the person responsible for the electrical safety of everyone who walks in, whether or not you own the building. Under WHS law a business has to manage electrical risks so far as is reasonably practicable. Skip it and the realistic consequences are staff or customers getting shocked, a fire starting from an overloaded powerboard or a hot connection, and an insurance conversation where you can't show you looked. None of that needs an unusual fault. It usually starts with something that was visible for months.</p>
            <p>A lot of the work is noticing. This checklist is split into what you can do safely yourself, and what needs a licensed electrician.</p>

            <h3>What You Can Check Yourself</h3>
            <p>These are visual checks and routine habits. None of them involves opening anything that's live or taking a cover off.</p>
            <ul>
                <li><strong>Cords and plugs.</strong> Look for cracked or crushed insulation, exposed wire, bent pins, a plug that's warm or discoloured, and cord that's been taped. Anything damaged comes out of use straight away.</li>
                <li><strong>Powerboards and adaptors.</strong> Overloaded sockets and adaptors are a known fire cause, as Safe Work Australia's guidance points out. If a business keeps adding adaptors, it needs more socket outlets, not another board. Don't plug heaters, kettles or fridges into a board that's already full.</li>
                <li><strong>Leads across floors and doorways.</strong> Cords run through doorways, under mats or over sharp edges get damaged and trip people. Move them or protect them.</li>
                <li><strong>Heat and smell.</strong> A powerpoint, plug or powerboard that's hot, discoloured, crackling or smells of burning is taken out of use and looked at.</li>
                <li><strong>Switchboard access.</strong> Keep the area in front of it clear, so anyone can reach the switches in an emergency. Don't stack stock against it. Check that every circuit is labelled legibly, and that the cover is on with nothing missing.</li>
                <li><strong>Exit and emergency lights.</strong> Check they exist and are lit where they should be, and that nothing is hung over or blocking them. Routine testing of emergency and exit lighting has its own schedule under the relevant standard (AS/NZS 2293.2), and it's worth asking your building owner or a lighting electrician who's doing it and keeping the records.</li>
                <li><strong>Safety switch routine.</strong> Press the test button on each RCD on a regular schedule, and write down the date. If one doesn't trip, report it that day. Our <a href="/blog/rcd-safety-switch-testing-workplace-sa/">workplace RCD guide</a> explains why this doesn't replace an instrument test.</li>
                <li><strong>Tripping.</strong> If a circuit trips, find out why before resetting it again. Keep forcing it back on and a manageable fault becomes a dangerous one.</li>
            </ul>
            <p>The principle behind the equipment checks is in the regulations too: if electrical equipment is unsafe, it has to be disconnected and stay disconnected until it's repaired or tested and found safe, or replaced. Get staff to report faulty gear rather than quietly working around it, and make it normal to pull something from service.</p>

            <h3>What Needs a Licensed Electrician</h3>
            <p>Electrical work has to be done by appropriately licensed or registered people. If it involves opening a switchboard, touching fixed wiring, or changing something that's connected to the installation, it's an electrician's job.</p>
            <ul>
                <li>Anything in or behind the switchboard, including adding or changing breakers and RCDs</li>
                <li>New or moved powerpoints, light fittings, fixed appliances, signage and data or security power supplies</li>
                <li>Trip-time testing of RCDs and testing of the fixed installation (AS/NZS 3017)</li>
                <li>Repeated tripping with no obvious cause, or a circuit that has to be reset again and again</li>
                <li>Warm or discoloured switchboard parts, buzzing, or burn marks. A <a href="/thermal-imaging-adelaide/">thermal imaging scan</a> shows loose connections that are heating under load without shutting anything down</li>
                <li>Exit and emergency light repairs and fixed lighting faults</li>
            </ul>
            <p>Test and tag of your plug-in equipment sits in between. The tester has to be competent, and that isn't always an electrician, but a failure that needs repair beyond a lead or plug is an electrician's job. How the law treats that work is covered in our <a href="/blog/test-and-tag-south-australia-business-guide/">test and tag guide</a>.</p>

            <h3>What to Keep in a Compliance Folder</h3>
            <p>A folder, paper or digital, that you can hand over in a few minutes. Aim to include:</p>
            <ul>
                <li>The test and tag register, with failures and what happened to them</li>
                <li>RCD test reports, with measured results for each device, plus your push-button log if you keep one</li>
                <li>Certificates of Compliance for electrical work done at the premises, which your electrician provides after work</li>
                <li>Thermal imaging or inspection reports, if you've had them</li>
                <li>Emergency and exit lighting service records, from whoever services them</li>
                <li>Switchboard photos and a current circuit list, so any electrician can orient themselves</li>
                <li>A short note of any faults reported, who dealt with them, and when</li>
            </ul>
            <p>None of this is complicated. The value is that you can produce it. It's what you hand an insurer, an auditor, a principal contractor or a new landlord's agent without a week of hunting.</p>

            <h3>When to Bring in an Electrician</h3>
            <p>Some moments are natural trigger points. We aren't claiming any of them is a legal deadline, only that they're the times a check pays for itself.</p>
            <ul>
                <li><strong>Insurance.</strong> A renewal, a new policy or a claim after an incident. Insurers can ask what you've done about electrical safety, so records in a folder help. Check your own policy wording for anything specific.</li>
                <li><strong>Moving in.</strong> Before you commit to a tenancy, have the board and RCDs looked at, so problems are on record as existing before you arrived.</li>
                <li><strong>Lease end or handback.</strong> Your lease decides what you owe. If it requires you to hand back in a particular condition, find out what that means electrically before the last month.</li>
                <li><strong>Fit-out or reconfiguration.</strong> New desks, a new kitchenette, a second till, extra equipment. Adding load to a board without checking capacity is how circuits start overheating.</li>
                <li><strong>After a fault.</strong> A burnt smell, a shock, a board that tripped and was reset without anyone finding the cause.</li>
            </ul>
        `,
        faqs: [
            {
                question: 'Is it okay to plug a heater or bar fridge into a powerboard in the office?',
                answer: 'It\'s better to plug high-draw items straight into a wall socket. Safe Work Australia\'s guidance warns that overloading socket outlets with adaptors can cause fires, and heaters and kettles draw a lot of current. If you keep needing boards because there aren\'t enough powerpoints, the fix is to have more outlets installed by an electrician.',
            },
            {
                question: 'What should I do if someone gets a shock at work?',
                answer: 'Make the area safe, get medical help if needed, and take the equipment out of service. A shock that exposes someone to a serious risk can be a notifiable incident, meaning you must tell SafeWork SA straight away. Trivial static shocks generally aren\'t. If you aren\'t sure whether it qualifies, ring SafeWork SA and ask. Don\'t put the equipment back into use before it has been tested.',
            },
            {
                question: 'How often should a small business get its electrical installation inspected?',
                answer: 'There\'s no fixed interval for a general inspection that we can point to for a small office or shop, so it comes down to risk. The WHS guidance says the frequency depends on the workplace, its environment and the equipment. Sensible triggers are a change of tenancy, a fit-out, an older board, repeated tripping or an insurer\'s request. RCD and equipment testing run on their own schedules.',
            },
            {
                question: 'What should I do if there\'s a burning smell from a powerpoint or the switchboard?',
                answer: 'If there\'s visible smoke or fire, get everyone out and call 000. If there\'s only a smell, switch off the affected circuit or the main switch if it\'s safe to reach, keep people away and call an electrician. Don\'t restore the power to see if it happens again. A burning smell usually means a connection is overheating, and that gets worse, not better.',
            },
            {
                question: 'Can I leave the switchboard cupboard locked so customers and staff can\'t get to it?',
                answer: 'Keeping it locked is sensible, but the people who need it in an emergency must be able to reach it fast. Make sure at least one person on site always has the key or the code, and that the area in front is clear of stock and boxes. Label the circuits clearly. Anyone attending an emergency should be able to isolate the right circuit without searching.',
            },
        ],
        cta: {
            heading: 'Want an Electrician to Look Over Your Premises?',
            description:
                'We work with small businesses, clinics and offices across Adelaide. Tell us what you\'ve got and what\'s been bothering you, and we\'ll say what actually needs doing.',
            linkText: 'Talk to Us About Your Premises',
            href: '/contact',
        },
    },
];
