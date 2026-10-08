import type { BlogPost } from './blog-posts';

/**
 * "Who do I call, and what will it cost me" posts. Every licensing claim here was
 * checked against the Plumbers, Gas Fitters and Electricians Act 1995 and Regulations 2025,
 * the Electricity (General) Regulations 2012 and the OTR, CBS and sa.gov.au pages. If the
 * legislation changes, the exemption list in regulation 4(5) is the one to re-read.
 */
export const hiringGuides: BlogPost[] = [
    {
        slug: 'plumber-or-electrician-hot-water-dishwasher-appliances',
        title: 'Plumber or Electrician? Who to Call for Hot Water, Dishwashers and Other Appliances',
        seoTitle: 'Plumber or Electrician? Who to Call in SA | JPD',
        metaDescription:
            'Hot water system, dishwasher, oven, exhaust fan or pool pump: who connects what in South Australia, and why plug-in versus hardwired decides it.',
        excerpt:
            'Water is the plumber\'s, gas is the gas fitter\'s and fixed wiring is the electrician\'s. Here\'s how that splits across the appliances people actually ask about.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Advice',
        image: '/images/kitchen_oven_microwave_golden_grove.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>Plenty of appliance jobs cross two trades, and a tradie who is happy to "just do the lot" is often working outside what they're registered for. In South Australia a plumber, a gas fitter and an electrician each hold a separate registration, and the law is written trade by trade.</p>
            <p>If the wrong person does the wiring, the likely result is a job that can't be certified. A water heater or an oven is a high-current appliance sitting in a wet or hot part of the house, so a loose or undersized connection is a shock or fire risk, and it stays hidden behind the unit until something goes wrong. You'll also be left chasing the right tradesperson to redo it, which means paying twice.</p>

            <h3>The Basic Split in South Australia</h3>
            <p>Under the Plumbers, Gas Fitters and Electricians Act 1995, water plumbing covers pipes and equipment, <strong>including water heaters</strong>, connected to the public water supply. Gas fitting is the gas pipework and appliance connection downstream of the gas meter or cylinder. Electrical work is the installation, alteration, repair or maintenance of an electrical installation, which in plain terms is the fixed wiring in your house.</p>
            <p>Each of those needs its own registration. A plumber's registration doesn't let them wire anything, and an electrician's doesn't let them touch the water or gas side. One person can hold more than one, and some do, but you should never assume it. You can check what someone is registered for on the Consumer and Business Services licence register.</p>

            <h3>Plug-In Versus Hardwired Is the Deciding Question</h3>
            <p>The regulations exempt from the licensing rules any work on equipment that is connected to, and beyond, an electrical outlet socket where the fixed wiring ends. That is the legal reason anyone can plug a dishwasher into an existing powerpoint without an electrician.</p>
            <p>It only works one way. The moment an appliance is connected directly to the house wiring, or needs a powerpoint that isn't there yet, it's electrical work and it's an electrician's job. So for any appliance, ask two things: does it plug in, and is there already a suitable powerpoint within reach of the cord?</p>

            <h3>Appliance by Appliance</h3>
            <ul>
                <li><strong>Electric hot water system.</strong> The plumber handles the water connections, the pressure and temperature relief valve and the tempering valve. The electrician disconnects and reconnects the supply wiring, which is usually hardwired to its own circuit. Replacing a unit means both trades, even though it feels like one job.</li>
                <li><strong>Gas instantaneous hot water.</strong> The gas fitter connects the gas, the plumber connects the water, and the unit still needs 240 volts for ignition and controls. Most plug into a nearby powerpoint. If there isn't one, an electrician has to install it. Check the manufacturer's installation manual for whether the unit may be plugged in or must be hardwired.</li>
                <li><strong>Dishwasher and washing machine.</strong> Both normally plug in. The plumber, or the installer, deals with the water and waste connections, and the cord goes into an existing powerpoint. A new powerpoint behind the cabinet or in the laundry is the electrician's part.</li>
                <li><strong>Oven and cooktop.</strong> No plumber involved unless it's gas, in which case a gas fitter does the gas side. An electric oven or induction cooktop is often hardwired to a dedicated circuit, which is the electrician's work. Our oven and cooktop page covers that side.</li>
                <li><strong>Rangehood.</strong> Plug-in rangehoods run off a powerpoint in the cabinet above. Hardwired ones need an electrician. The ducting isn't plumbing or electrical, but a gas cooktop below changes the clearances, so the installer needs to know what's under it.</li>
                <li><strong>Bathroom exhaust fan and heat lamps.</strong> These are fixed to the ceiling and wired into the lighting circuit, so it's electrical work. A new fan also needs somewhere for the air to go, and the roofing side of that isn't ours to advise on.</li>
                <li><strong>Pool pump.</strong> The pipework, valves and filter are pool plumbing. The power supply to the pump, and any change to the pool's electrical circuit, is the electrician's. Pool equipment sits in zones where the wiring rules are stricter, so this is not a job to improvise.</li>
                <li><strong>Heated toilet seat or bidet.</strong> The water side of a bidet is plumbing. Both usually need a powerpoint at the cistern, and bathrooms have restricted zones for where powerpoints can go, so the electrician decides the position.</li>
            </ul>

            <h3>The Certificates You Should End Up With</h3>
            <p>South Australia has separate certificates of compliance by trade. According to the state government, a plumber must issue a plumbing certificate for installing or replacing a water heater, and you should receive it within 7 days. A gas fitter issues one for installing or replacing a gas appliance such as a hot water unit, and an electrician issues one for most of their work. Gas and electrical certificates are due within 30 days.</p>
            <p>The state government also notes that without these certificates an insurer could refuse a claim if the related work causes a fire or damage. So for a hot water swap, expect two certificates, one from each trade.</p>

            <h3>Who Gets Booked First</h3>
            <p>If the job needs both trades, book the electrician for the powerpoint or circuit first, or on the same day. A plumber who arrives to fit a new heater and finds no suitable power either leaves it unconnected or waits around. Neither is cheap. Tell both trades what the other is doing, and which appliance model is going in, because the supply requirements come from that model's manual.</p>

            <h3>What We Do and Don't Do</h3>
            <p>We do the electrical side: powerpoints, dedicated circuits, hardwired connections, fans, heat lamps and the isolation at the switchboard. We don't do plumbing or gas fitting, and we'd rather tell you that than guess. If you tell us what's being installed, we'll tell you what power it needs before the other trade turns up.</p>
        `,
        faqs: [
            {
                question: 'Do I get separate certificates from the plumber and the electrician when a hot water system is replaced?',
                answer: 'Yes, expect one from each trade. In South Australia a plumber must issue a plumbing certificate of compliance for installing or replacing a water heater, due within 7 days, and an electrician issues an electrical certificate for the wiring, due within 30 days. A gas hot water unit gets a gas certificate as well. Keep all of them together, because an insurer may ask for them if there\'s ever a claim.',
            },
            {
                question: 'Can the delivery team who bring my new dishwasher or oven connect it?',
                answer: 'Only partly. Plugging a plug-in appliance into an existing powerpoint falls outside the electrical licensing rules, so a delivery or installation crew can do that. They can\'t wire an appliance directly into the house, or add a powerpoint, unless the person doing it is a registered electrician. Water and gas connections belong to a registered plumber or gas fitter. Ask what the installer is registered for before they start.',
            },
            {
                question: 'Can a plumber disconnect the wiring on my old electric hot water system?',
                answer: 'No, not unless they also hold an electrical registration. Switching the hot water circuit off at the switchboard is fine, but disconnecting and reconnecting the fixed wiring at the unit is electrical work. A plumber who offers to do it should be able to show you an electrical registration on the Consumer and Business Services licence register. Otherwise book an electrician for the same visit.',
            },
            {
                question: 'My dishwasher keeps tripping the safety switch. Do I call a plumber or an electrician?',
                answer: 'Start with an electrician or an appliance repairer, not a plumber. A safety switch trips when current leaks to earth, and in a dishwasher that is usually a failed heating element, pump or seal letting water reach live parts. Unplug it and see whether the circuit then holds. If it does, the appliance is the problem. If it still trips with the dishwasher unplugged, the fault is in the house wiring.',
            },
            {
                question: 'Can one tradesperson be both a plumber and an electrician in South Australia?',
                answer: 'Yes, if they hold both registrations. South Australia registers plumbing, gas fitting and electrical workers as separate classes, and a person can be registered in more than one. Don\'t take their word for it. Search their name on the Consumer and Business Services licence register, and ask each trade you hire for the licence or registration that covers the work they\'ll do on your job.',
            },
        ],
        cta: {
            heading: 'Need Power Where the New Appliance Is Going?',
            description:
                'Tell us the appliance and where it\'s going and we\'ll work out the powerpoint or circuit it needs, before your plumber or installer arrives.',
            linkText: 'Get a Powerpoint Quote',
            href: '/powerpoint-installation-adelaide',
        },
    },
    {
        slug: 'do-electricians-do-small-jobs-adelaide',
        title: 'Do Electricians Do Small Jobs? What You Can Do Yourself in SA',
        seoTitle: 'Do Electricians Do Small Jobs in SA? | JPD',
        metaDescription:
            'Replacing a powerpoint, light, switch or smoke alarm: what SA law lets you do yourself, what needs an electrician, and how to bundle small jobs.',
        excerpt:
            'A powerpoint, a light or a smoke alarm looks like ten minutes with a screwdriver. Here\'s where the line actually sits in South Australia, and how to get small jobs done without paying for a visit each time.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Advice',
        image: '/images/new_powerpoint.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>Small electrical jobs are where most people are tempted to have a go. It's one cracked powerpoint, one dead light, and a YouTube video makes it look like ten minutes. The trouble is that a small job can go wrong in exactly the same ways a big one can.</p>
            <p>A connection that isn't tight enough heats up under load, and that heat builds slowly inside the wall or ceiling where you won't see it. A wrongly connected earth can leave a metal fitting live. Neither shows up when you switch the power back on and the light works. The realistic outcomes of getting it wrong are a shock, a fire, or an insurer asking for paperwork you don't have.</p>

            <h3>What South Australia's Rules Say</h3>
            <p>The state government's guidance for homeowners lists what you can do yourself if you have the right skills: install a TV or antenna, replace a fuse and reset circuit breakers, test safety switches, change smoke alarm batteries, replace light globes and clean solar panels. It then says that by law you must use a licensed electrician for all other electrical work on your property, including anything that affects wiring connected to the mains.</p>
            <p>The regulations are slightly more detailed than that, and it's worth knowing how. Under the Plumbers, Gas Fitters and Electricians Regulations 2025, a few jobs are exempt from the registration rules. They include working on equipment that connects to and beyond a powerpoint, which is why you can plug things in and change a plug on an appliance lead. They also include "the replacement of a fuse, switch or two-point outlet socket". Read that carefully. A two-point socket is the old two-pin, unearthed type, not the three-pin powerpoint in every modern home, and the exemption is from the licensing Act only. The Electricity Act's safety rules still apply to the work, and the government's own guidance for homeowners doesn't list switch or powerpoint replacement as something to do yourself.</p>
            <p>So is swapping a switch or a double powerpoint legal? Our honest answer is that the regulations are narrower than people assume, the official advice is to use a licensed electrician for anything that affects fixed wiring, and we wouldn't do it. A separate rule requires electrical work to be tested and recorded on an electrical certificate of compliance, and that certificate has to be issued by a registered electrical worker. If you want a definitive reading on an owner's like-for-like swap, it's a question for the Office of the Technical Regulator, not for us.</p>

            <h3>The Jobs, One at a Time</h3>
            <ul>
                <li><strong>Powerpoint or switch.</strong> Treat it as electrical work. It's also the one where hidden faults turn up. An old powerpoint that's cracked, hot or discoloured often has a loose or scorched connection behind it. You'll only see that with the plate off, and you need a tester to know the circuit is dead before you touch it.</li>
                <li><strong>Light fitting.</strong> Not in the exemption. Replacing the fitting itself is electrical work. Changing the globe is not.</li>
                <li><strong>Smoke alarm.</strong> A battery-only alarm isn't connected to your house wiring, so fitting or swapping it isn't electrical work. A mains-powered alarm is wired into the lighting circuit and needs an electrician. Whether the alarm meets the smoke alarm requirements for your home is a separate question from the electrical one.</li>
                <li><strong>Ceiling fan.</strong> Electrical work, and a mounting job as well. The fan needs a support rated for its weight and movement, not the old light hook.</li>
                <li><strong>TV mount.</strong> Hanging a TV is fine. A powerpoint behind it, or running power through the wall, is electrical work.</li>
                <li><strong>Appliance plug or lead.</strong> Within the exemption, but only if the new part is correctly rated and the cord is anchored properly. If a lead is damaged, replacing the whole lead is safer than splicing it.</li>
            </ul>

            <h3>Why a Small Job Still Needs the Full Process</h3>
            <p>The Electricity (General) Regulations 2012 require electrical work to be done, examined and tested to the wiring rules (AS/NZS 3000), with the results recorded on a certificate of compliance. The state government says certificates aren't needed for minor maintenance like replacing a light globe, but they are needed for most electrical work, and it doesn't matter whether the job took ten minutes or three hours.</p>
            <p>Testing is the part people miss. After a swap, a licensed electrician checks the earth connection and the polarity, and that the safety switch still trips. Those readings are what separate a job that looks right from one that is right.</p>

            <h3>Bundling Small Jobs Sensibly</h3>
            <p>A visit has fixed costs whatever the size of the job: travel, setup, isolating the circuit and testing at the end. The way to get value from small jobs is to batch them. Keep a list on the fridge as you notice things, and book once you have a handful. A loose powerpoint, a dead outside light, a fan you've been meaning to swap and a missing safety switch test are one visit, not four.</p>
            <p>Group jobs by what they need. Anything in the roof space should happen together, and so should anything needing the power off at the main switch, because every shutdown means the fridge, the internet and the work-from-home setup go down. If one job might turn up a bigger problem, such as an old powerpoint with burn marks, mention that on the phone so it's priced as a possibility.</p>

            <h3>What to Have Ready When You Ring</h3>
            <ul>
                <li><strong>A list of every job</strong>, not just the main one, with the room for each.</li>
                <li><strong>Photos</strong> of the fitting, the switchboard (door open, if you can) and anything damaged or discoloured.</li>
                <li><strong>Brand and model</strong> of anything you've bought, such as a fan, a light or an appliance. Keep the box and manual.</li>
                <li><strong>Symptoms</strong> for anything faulty: when it started, whether it's one powerpoint or several, whether the safety switch has tripped, any smell or warmth.</li>
                <li><strong>Access</strong> notes, such as a roof hatch, a locked gate, a dog, or a tenant who needs notice.</li>
            </ul>
            <p>Small jobs are welcome here. Tell us everything on the list and we'll tell you honestly what's quick, what's bigger than it looks, and what we'd group.</p>
        `,
        faqs: [
            {
                question: 'Is it legal to replace the plug on an appliance cord in South Australia?',
                answer: 'Yes. The licensing regulations exempt work on equipment connected to and beyond a powerpoint, which includes fitting a new plug to an appliance lead. That doesn\'t make it safe to do carelessly. The plug must be correctly rated, the cord gripped so it can\'t pull on the terminals, and the wires connected to the right pins. If the lead is damaged along its length, replace the whole lead rather than joining it.',
            },
            {
                question: 'Why is only one powerpoint dead when the rest of the room works?',
                answer: 'Usually because of a loose connection or a failed socket, not a tripped circuit. Check the safety switch and breaker first, then try a different appliance in the dead outlet to rule out the appliance. Powerpoints are often wired in a chain, so a failed connection at one can also kill the ones after it. A dead powerpoint that was recently warm, buzzing or smelled of burning should stay switched off until it\'s been looked at.',
            },
            {
                question: 'Can I just replace a cracked powerpoint cover plate myself?',
                answer: 'We\'d say no, and here\'s why. Taking the plate off exposes the terminals behind it, which are live unless the circuit has been isolated and proven dead with a tester, and the crack is often the visible part of heat damage at a loose connection. Replacing the mechanism itself is fixed-wiring work for a licensed electrician in South Australia. It\'s a quick job for us, and we check the connection and the circuit while we\'re there.',
            },
            {
                question: 'Can I fit a battery smoke alarm myself?',
                answer: 'Yes, as far as the electrical rules go. A battery-only alarm isn\'t connected to the house wiring, so fitting it isn\'t electrical work, and changing batteries is on the state government\'s list of things you can do. What you can\'t do yourself is replace a mains-powered alarm, which is wired into the circuit. Check separately what smoke alarm requirements apply to your home, especially if it\'s a rental.',
            },
            {
                question: 'Which electrical jobs can wait for the next visit and which can\'t?',
                answer: 'Anything involving heat, burning smells, buzzing, scorch marks, shocks or a safety switch that won\'t hold should be looked at promptly and not batched. Cosmetic and convenience jobs, such as an extra powerpoint, a new light or a fan, can wait and group with other work. If you\'re unsure which side a problem falls on, ring and describe it. Explaining a symptom costs nothing and often settles the question.',
            },
        ],
        cta: {
            heading: 'Got a List of Small Jobs?',
            description:
                'Send us everything on it. We\'ll tell you what\'s quick, what\'s bigger than it looks, and what to group into one visit.',
            linkText: 'Ask About Powerpoints and Small Jobs',
            href: '/powerpoint-installation-adelaide',
        },
    },
    {
        slug: 'electrician-callout-fee-explained-adelaide',
        title: 'Electrician Callout Fees Explained: What You\'re Paying For',
        seoTitle: 'Electrician Callout Fees Explained | JPD',
        metaDescription:
            'What an electrician\'s callout fee usually covers, how it differs from a quote or a diagnosis charge, and the questions that stop you paying twice.',
        excerpt:
            'A callout isn\'t a quote and it isn\'t a fine for ringing. Here\'s what it normally covers, why it exists, and what to ask so the invoice holds no surprises.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Pricing',
        image: '/images/hero_electrician_van_1764247050939.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>Most arguments about electrician bills aren't about the total. They're about what the total turned out to include. A callout fee that nobody explained, a second charge for coming back with a part, a "diagnosis" that seemed to be the same thing as the visit you'd already paid for. Each one feels like paying twice.</p>
            <p>If you skip the questions up front, the realistic consequence isn't a safety problem. It's a bill higher than you expected, and no clear way to argue with it because nothing was agreed beforehand. The fix is asking three or four plain questions before the electrician leaves for your place. This guide lists them, and explains the thinking behind the fee so the answers make sense.</p>

            <h3>What a Callout Usually Is</h3>
            <p>A callout is a charge for the electrician attending your property and doing a first block of work. It's normally for repairs and fault-finding, where nobody knows what's wrong or how long it will take until someone looks. There's no universal definition, and practice varies between businesses, so it pays to ask rather than assume.</p>
            <p>Typically it covers:</p>
            <ul>
                <li><strong>Getting there.</strong> The vehicle, fuel, the time on the road and the cost of holding a gap in the diary for you.</li>
                <li><strong>Arriving prepared.</strong> A van stocked with common parts, and test equipment that needs regular calibration.</li>
                <li><strong>A first period of time on site</strong>, often to find the fault and sometimes to fix a simple one.</li>
            </ul>
            <p>What it usually doesn't cover is the parts, any time beyond the first period, and a second visit if the first couldn't finish the job. Where the line sits is exactly what to ask.</p>

            <h3>Callout Versus Quote</h3>
            <p>A quote is a price for a defined job. A callout is a price for turning up. They're different things, and the fault-finding stage is why.</p>
            <p>If your safety switch won't stay on, no honest electrician can quote the repair over the phone. The cause could be a ten minute fix or a section of cable that needs replacing, and you can't know until it's been tested. Pretending otherwise leads to either an inflated number that covers the unknown or a low one that blows out later. So the sensible order is a callout to find the fault, then a fixed price to fix it, if it's more than a quick job.</p>
            <p>A planned job is the opposite: downlights, a fan, an EV charger, a new circuit. The scope is known, so the right thing is a quote. At JPD quotes are free, and for repairs and fault-finding we state the callout on the phone before we come out. That's the pattern to expect from any electrician.</p>

            <h3>Free Quote Versus Diagnosis Charge</h3>
            <p>These sound similar and aren't. A free quote means the electrician values the cost of work that is already identified. They look at a job, measure it, and price it. The time to do that is a cost of winning the work.</p>
            <p>A diagnosis charge is for finding out what the work is. Tracing a fault takes skill, testing equipment and time, and the answer is useful to you whether or not the same electrician does the repair. That's why it's usually charged, and why it's reasonable to ask whether the diagnosis time is credited against the repair if you go ahead with them.</p>

            <h3>Why Travel, Time and Parts Runs Get Built In</h3>
            <p>An electrician who spends forty minutes driving to a ten minute job has been paid for ten minutes unless the callout covers the rest. The same applies to the extra trip to a supplier for a part that wasn't in the van. Good businesses either hold the common parts or build the supplier run into the price, which is why a job that needs a specialist part can bring a second visit or an added time charge.</p>
            <p>Location matters here. An electrician who works close to you spends less time driving, which is one of the few places a fee can honestly be lower. It's also fair to ask whether a travel charge applies to your suburb.</p>

            <h3>After-Hours Loadings in General Terms</h3>
            <p>Most electricians charge more for evenings, weekends and public holidays. The extra covers the fact that they're giving up personal time, and in many cases the higher wages they must pay their own staff on those days. The size of the loading varies between businesses, so ask for the rate on the phone, and for the callout plus hourly rate separately if it's a repair. If the problem is safe to leave until the next working morning, a decent electrician will tell you that and let you decide.</p>

            <h3>How to Avoid Paying Twice</h3>
            <p>Ask these before anyone attends:</p>
            <ul>
                <li><strong>What does the callout cover?</strong> Travel only, or travel plus a set amount of time?</li>
                <li><strong>What happens after the first period?</strong> What's the hourly rate, and in what increments?</li>
                <li><strong>Are parts extra?</strong> If so, will you be told the cost before they're fitted?</li>
                <li><strong>Is the callout credited if I go ahead with the repair?</strong> Practice varies, and it's fine to ask.</li>
                <li><strong>If it can't be finished in one visit, what will the second visit cost?</strong></li>
                <li><strong>Will I get an itemised invoice?</strong> Labour, parts and callout on separate lines.</li>
            </ul>
            <p>A confident electrician will answer all six without hesitation. If the answers are vague, the invoice may be too.</p>

            <h3>Helping Keep the Time On Site Down</h3>
            <p>Time on site is the part of the bill you can influence. Clear access to the switchboard, a note of what stopped working and when, and anything you've already tried all shorten the diagnosis. Before the visit, check whether the neighbours also lost power, because that's a job for the network and not for us.</p>
        `,
        faqs: [
            {
                question: 'Is an electrician\'s callout fee refundable or credited if they do the repair?',
                answer: 'Sometimes, but there\'s no rule, so ask before they attend. Some electricians deduct the callout from the repair if you go ahead, some treat it as covering the first block of time and charge the repair on top, and some charge it as a separate attendance fee. Get the answer on the phone, and make sure the invoice shows the callout and the repair as separate lines so you can see what you were charged.',
            },
            {
                question: 'Do I still pay the callout if I decide not to go ahead with the repair?',
                answer: 'Generally yes, because the electrician has already attended and spent time finding the fault, and you keep that information. The repair itself is what you can decline. Ask beforehand what the callout covers and whether a repair price is given before any repair work starts. A good electrician explains the fault, gives you a price for fixing it, and lets you decide before spending any more of your money.',
            },
            {
                question: 'Are materials charged on top of an electrician\'s callout?',
                answer: 'Usually yes. A callout normally covers attendance and a first period of labour, while parts such as a circuit breaker, a powerpoint, a switch or a length of cable are charged separately. Small consumables may or may not be included, which varies between businesses. Ask whether you\'ll hear the cost of any significant part before it\'s fitted, and whether the invoice will list parts and labour as separate lines.',
            },
            {
                question: 'What can I do if the final bill is higher than the callout I was quoted?',
                answer: 'Ask for an itemised invoice and compare it with what was agreed. Time beyond the first period, parts and a second visit can all legitimately add to a callout, so the question is whether you were told. If you were quoted a figure and charged something different with no explanation, raise it with the electrician in writing first. If it isn\'t resolved, Consumer and Business Services can help with payment disputes.',
            },
            {
                question: 'Can I send photos of an electrical problem instead of paying for a callout?',
                answer: 'Photos help, but they can\'t replace testing. A picture of the switchboard, a scorched powerpoint or the fitting you want replaced lets an electrician judge whether the job is quick and what parts to bring. It can\'t show a fault inside a wall or a connection that is intermittently loose. Send photos with a clear description of the symptoms, and expect a range or a recommendation to attend rather than a firm price.',
            },
        ],
        cta: {
            heading: 'Something Not Working?',
            description:
                'Ring and describe the problem. We\'ll tell you the callout on the phone before we come out, and say so if it can safely wait until morning.',
            linkText: 'Talk to Us About a Fault',
            href: '/emergency-electrician-adelaide',
        },
    },
    {
        slug: 'unlicensed-electrical-work-south-australia',
        title: 'Unlicensed Electrical Work in South Australia: The Risks and How to Check',
        seoTitle: 'Unlicensed Electrical Work in SA: Risks | JPD',
        metaDescription:
            'What counts as unlicensed electrical work in South Australia, the penalties in the Act, the risk to your insurance and home, and how to check a licence.',
        excerpt:
            'The offences, the penalties and the practical risks to the homeowner, plus the two-minute check on the CBS register that rules most of it out.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Safety',
        image: '/images/faulty_diy_joint_modbury_heights.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>Electrical work that isn't done properly doesn't announce itself. A loose connection or a missing earth can sit inside a wall for years, working fine, until the day it overheats or a fault has nowhere to go. The consequences are a shock, a fire, and then the part that surprises people: no paperwork to show an insurer.</p>
            <p>The state government says that without a certificate of compliance, insurance companies could refuse claims if the related work causes a fire or damage. And in South Australia, certificates can only come from a licensed electrician. If you're considering the cheaper option, this is the part to weigh up.</p>

            <h3>What Counts as Unlicensed Electrical Work</h3>
            <p>Two separate things have to be in place for electrical work to be legal here. The person physically doing the work must hold an electrical worker registration, and the business they work for must hold an electrical contractor licence. Both come from Consumer and Business Services under the Plumbers, Gas Fitters and Electricians Act 1995.</p>
            <p>In the Act, electrical work means installing, altering, repairing or maintaining an electrical installation, which is the fixed wiring and equipment connected to the mains. So the offences cover things like:</p>
            <ul>
                <li>Adding or moving a powerpoint, or running a new circuit</li>
                <li>Replacing a light fitting, ceiling fan or hardwired smoke alarm</li>
                <li>Working in your switchboard</li>
                <li>Wiring an appliance, heater or hot water system directly into the house</li>
                <li>Doing any of that as a favour, for cash, or on your own house</li>
            </ul>
            <p>It's worth being fair about what is allowed. The regulations exempt a short list, mainly work on equipment plugged in beyond a powerpoint, plus replacing a fuse, a switch or an old two-pin outlet socket. The state government also lists what a competent homeowner can do, such as replacing globes, resetting breakers and testing safety switches. We cover that in detail in our guide to small jobs.</p>

            <h3>The Penalties, From the Act</h3>
            <p>These are the maximum penalties in the Plumbers, Gas Fitters and Electricians Act 1995, as published on the South Australian legislation website in the version current from 15 January 2026. They are maximums, and a court decides the actual outcome.</p>
            <ul>
                <li><strong>Section 13</strong> says a person must not act as an electrical worker unless registered, and must not hold themselves out as entitled to. For a first or second offence the maximum is $100,000. For a third or subsequent offence it's $150,000 or 12 months' imprisonment, or both.</li>
                <li><strong>Section 6</strong> says a person must not carry on business as an electrical contractor without a licence, or advertise as if they have one. The maximum for a natural person is $100,000 for a first or second offence, and $150,000 or 12 months' imprisonment, or both, for a third or later. For a body corporate it's $500,000 for a first or second offence and $550,000 for a third or later.</li>
            </ul>
            <p>Both sections also carry an expiation fee of $5,000, which is the fine you can pay to avoid going to court.</p>
            <p>Those offences are aimed at the person doing or advertising the work. The Office of the Technical Regulator can also act on the installation itself, under the Electricity Act 1996. Its stated policy is to disconnect installations found to be unsafe, and the power can't come back on until a registered electrician has tested the installation and a certificate of compliance has been submitted.</p>

            <h3>What It Means for You as the Homeowner</h3>
            <ul>
                <li><strong>No certificate of compliance.</strong> Only a registered electrical worker can issue one, so unlicensed work leaves you with no record that it was tested.</li>
                <li><strong>Insurance.</strong> As above, a claim could be refused if the work causes a fire or damage. Check your own policy wording for what it says about unlicensed work.</li>
                <li><strong>Safety.</strong> You can't see whether a connection is sound or an earth is continuous. Only testing shows it.</li>
                <li><strong>Resale.</strong> Buyers, conveyancers and building inspectors ask about electrical work, and a sale gets harder when work has no paperwork behind it.</li>
                <li><strong>Paying twice.</strong> When unlicensed work is found, the usual remedy is for a licensed electrician to test it, and often redo it, before certifying anything.</li>
            </ul>

            <h3>How to Check an Electrician's Licence</h3>
            <p>It takes about two minutes, and it's the best protection you have.</p>
            <ol>
                <li>Ask for the licence number and the full business name before the job is quoted. A legitimate electrician gives them straight away.</li>
                <li>Go to the Consumer and Business Services website and open <strong>Find a licence holder</strong> (cbs.sa.gov.au/find-a-licence-holder). Search by name or licence number.</li>
                <li>Check the result shows an <strong>electrical</strong> licence or registration, not just a building or plumbing one, and that it's current. The business needs a contractor licence and the person doing the work needs their own registration.</li>
                <li>Check the details match the quote, the invoice and the vehicle. If the name on the licence differs from the person in front of you, ask why.</li>
                <li>Before work finishes, confirm you'll receive a certificate of compliance. It's emailed to you for most electrical work.</li>
            </ol>
            <p>Our licence number is PGE296191. Search it, and you can see for yourself.</p>

            <h3>What a Handyman Can and Can't Do</h3>
            <p>A handyman can do the same things anyone else can. They can mount a TV, change a globe, fit a battery smoke alarm, plug things in and assemble fittings. They can't legally do the fixed wiring work covered by the Act unless they hold an electrical registration, and the business needs a licence too.</p>
            <p>A common arrangement is a handyman or builder who "gets an electrician in". That's fine when it's a registered electrician who does the electrical work, tests it and issues the certificate. It isn't fine when the same person does the wiring on the day and nobody certifies it. Ask who will be doing the electrical work, and who will sign the certificate.</p>
        `,
        faqs: [
            {
                question: 'Does an electrician have to show their licence number on their ads in South Australia?',
                answer: 'Yes. Under section 33A of the Plumbers, Gas Fitters and Electricians Act 1995, a licensed contractor must not publish an advertisement for their business unless it specifies the contractor\'s licence number. Job-vacancy ads and ads directed to other licensed contractors are the exceptions. If an electrician\'s ad, website or vehicle shows no number, ask for it and search the Consumer and Business Services register before you book.',
            },
            {
                question: 'Can my builder do the electrical work on my renovation themselves?',
                answer: 'Not unless they personally hold an electrical registration. The regulations let a building business operate without a separate contractor licence, but only if the electrical work is done by someone authorised by an electrical licence or registration. In practice that means a registered electrician, working under your builder or directly for you, who tests the work and issues the certificate of compliance. Ask who that is before the job starts.',
            },
            {
                question: 'How do I report unlicensed electrical work in South Australia?',
                answer: 'Contact Consumer and Business Services on 131 882 about the person or business doing the work, and the Office of the Technical Regulator about the safety of the installation. The OTR can audit an installation in response to a complaint. Its electrical trades team takes reports on 8226 5518 on weekdays. Anything immediately dangerous should be switched off at the switchboard first, and kept away from children and pets.',
            },
            {
                question: 'What happens if the Technical Regulator finds unsafe wiring in my house?',
                answer: 'The Office of the Technical Regulator has a policy of disconnecting installations found to be unsafe, so the power can be cut off. Before it\'s restored, a registered electrician must test the installation and a certificate of compliance has to be submitted to the regulator. If the whole installation is disconnected, an electrician typically has to test and verify it all before the power returns.',
            },
            {
                question: 'Can I be penalised for hiring someone who turns out to be unlicensed?',
                answer: 'The main licensing offences are aimed at the person doing or advertising the work, not the owner who hired them. Your exposure is mostly practical: no certificate of compliance, a possible insurance problem, and the cost of having a licensed electrician test and often redo the work. If you\'re worried about a specific situation, the Office of the Technical Regulator can tell you where you stand.',
            },
        ],
        cta: {
            heading: 'Want It Done and Certified?',
            description:
                'Licence PGE296191, a Certificate of Compliance on every job that needs one, and a quote that states what\'s included. Send us what you need.',
            linkText: 'Get a Free Quote',
            href: '/contact',
        },
    },
];
