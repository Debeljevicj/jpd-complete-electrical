import type { BlogPost } from './blog-posts';

/** Pricing, hiring and troubleshooting posts. High search volume, high commercial intent. */
export const pricingPosts: BlogPost[] = [
    {
        slug: 'electrician-cost-adelaide',
        title: 'What Should an Electrician Cost in Adelaide?',
        metaDescription:
            'How Adelaide electricians actually price work, what drives the number, and the six questions that let you compare two quotes properly.',
        excerpt:
            'Nobody publishes real numbers, and most quotes are impossible to compare. Here\'s how electricians actually price work, and the questions that let you compare two quotes properly.',
        date: '2026-08-13',
        author: 'Justin',
        category: 'Pricing',
        image: '/images/onsite_walkthrough.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>You ring three electricians, you get three numbers, and they're nowhere near each other. One is half the price of the next. There's no way to tell whether the cheap one is efficient or whether they have simply left half the job out of the quote, and you find out which after the work has started.</p>
            <p>That isn't an accident. Electrical quoting is genuinely hard to compare because most quotes don't state what they include. This post explains how the pricing actually works and gives you the specific questions that make two quotes comparable. It won't tell you what your job costs, because that depends on your house, but it will stop you comparing a complete quote against an incomplete one and picking the wrong builder of the two.</p>

            <h3>The Three Ways Electrical Work Gets Priced</h3>
            <p><strong>Callout plus hourly.</strong> Used for repairs, fault finding and anything where nobody knows how long it will take until they start. There's a callout that covers attendance and a first block of time on site, then an hourly rate after that. This is the right model for a dead circuit, because pretending to know in advance how long a fault takes to find is guesswork dressed up as a quote.</p>
            <p><strong>Fixed price.</strong> Used where the scope is known. A switchboard upgrade, a set number of downlights, an EV charger install. You get one number and it doesn't move unless the scope moves. This is what you want for planned work, because it puts the risk of the job taking longer on the electrician rather than on you.</p>
            <p><strong>Per point or per item.</strong> Used mostly on new builds and larger renovations, where the job is quoted off a plan by counting light points, power points and circuits. Efficient for big jobs, meaningless for small ones.</p>
            <p>The important thing is knowing which one you're being given. A number quoted over the phone for a job nobody has seen isn't a fixed price, it's an estimate, and the gap between the two is where most disputes live.</p>

            <h3>What Actually Drives the Number</h3>
            <p>When two quotes for the same job differ a lot, it's usually one of these, not greed.</p>
            <ul>
                <li><strong>Access.</strong> A single-storey home with a clear roof space is a fraction of the labour of a two-storey with no access above the upper floor. Slab-on-ground with no wall cavity is harder again.</li>
                <li><strong>Distance from the switchboard.</strong> Every new circuit is a cable run. A charger on the garage wall behind the board is cheap. The same charger at a detached shed sixty metres away needs much bigger cable, and possibly trenching.</li>
                <li><strong>Switchboard capacity.</strong> If your board is full, work that needs a new circuit quietly becomes work that needs a new board. An honest quote flags that. A cheap quote sometimes just leaves it out.</li>
                <li><strong>Materials specification.</strong> Downlights range enormously in price and quality, and so do switches, fans and chargers. Two quotes can differ by hundreds purely on what's being installed.</li>
                <li><strong>The age of the house.</strong> Older wiring takes longer to work with and is more likely to reveal something. A 1968 Holden Hill house and a 2015 Greenwith house aren't the same job even when the task is identical.</li>
                <li><strong>Whether compliance work is included.</strong> Testing, certification and any upgrade triggered by the new work all cost something. Leaving them out makes a quote look cheaper without making the job cheaper.</li>
            </ul>

            <h3>The Questions That Make Quotes Comparable</h3>
            <p>Ask every electrician who quotes you the same six questions. The answers, not the headline number, are what tell you which quote is real.</p>
            <ul>
                <li><strong>Is this a fixed price or an estimate?</strong> If it's an estimate, what would make it change?</li>
                <li><strong>What's specifically excluded?</strong> This is the single most useful question and very few people ask it.</li>
                <li><strong>Does it include a Certificate of Compliance and testing?</strong> It should.</li>
                <li><strong>What happens if you open it up and find a problem?</strong> A good answer is "we stop, show you, and price it before continuing". A bad answer is silence.</li>
                <li><strong>What exact fittings are you supplying?</strong> Get the brand and model, not "quality LED downlights".</li>
                <li><strong>Does my switchboard need anything for this to work?</strong> If one quote says yes and two say nothing, the two are probably not accounting for it.</li>
            </ul>

            <h3>Why the Cheapest Quote Is Often the Most Expensive</h3>
            <p>There are only a handful of ways to be significantly cheaper than everyone else on the same job. Cheaper materials, less time on site, skipping the compliance work, or not being licensed and insured. None of those are things you want, and all of them cost you later.</p>
            <p>The version we see most is scope that has quietly been left out. The quote covers installing the thing, but not the circuit it needs, not the board work required to fit that circuit, and not the certification. It's a real number for an unreal job, and the difference appears as a variation once you're committed.</p>
            <p>None of this means the most expensive quote is the right one either. It means the number on its own tells you very little, and the six questions above tell you a lot.</p>

            <h3>What We Do</h3>
            <p>Free quotes, fixed prices on planned work, and a written scope that states inclusions, exclusions and assumptions. For fault finding we tell you the callout on the phone before we come out rather than after we arrive.</p>
            <p>If we think something might turn up once we open a wall or take a board off, you hear about it at quote stage. That isn't us hedging, it's us refusing to give you a comfortable number now and an uncomfortable conversation later.</p>
        `,
        faqs: [
            {
                question: 'Should an electrician\'s quote include GST?',
                answer: 'Yes, if you\'re a household. Under the ACCC\'s pricing rules, prices shown to consumers should be a single total that includes GST and any unavoidable fees, not a figure with GST added on top. Businesses dealing only with other businesses can show prices excluding GST. If a quote to you as a homeowner shows GST separately at the end, ask for the total, and make sure you\'re comparing totals when you line quotes up side by side.',
            },
            {
                question: 'Can an electrician charge more than their quote?',
                answer: 'Not for the same work if you agreed a fixed price. A fixed-price quote is the price for the scope it describes, so the number should only change if the scope changes, such as you adding work or something turning up that the quote specifically excluded, and that should be agreed with you before it\'s done. An estimate is different: it\'s a best guess and the final bill can move. Get any change to the price confirmed in writing before the extra work starts.',
            },
            {
                question: 'Is it cheaper to get several electrical jobs done in one visit?',
                answer: 'Usually, yes. Every visit carries costs that don\'t depend on the size of the job: travel, setting up, getting into the roof space, isolating circuits and testing at the end. Bundle the loose powerpoint, the new outdoor light and the extra downlight into one booking and you pay for those once instead of three times. Keep a running list of small electrical jobs around the house and book them together, especially if one already needs someone in the ceiling.',
            },
            {
                question: 'Why does a small electrical job cost so much?',
                answer: 'Because most of the cost of a small job is getting there and doing it properly, not the minutes on the tools. A licensed electrician is running a vehicle, stock, insurance, calibrated test equipment and licensing, and in South Australia has to issue a Certificate of Compliance for any electrical work, whether the job takes twenty minutes or two hours. That\'s why small jobs usually carry a minimum charge or callout, and why grouping them is the easiest way to get better value.',
            },
            {
                question: 'Can I claim electrical repairs on a rental property at tax time?',
                answer: 'Often, if it\'s a genuine repair. The ATO treats fixing wear and tear or damage that happened while the property was rented as a repair you can generally claim in the same year. Improvements, like adding circuits as part of a renovation, and replacing a whole unit such as a complete appliance, are capital and claimed over several years instead. Fixing defects that existed when you bought the place counts as an initial repair, which is also capital. Ask for an itemised invoice so your accountant can split it.',
            },
        ],
        cta: {
            heading: 'Get a Quote You Can Actually Compare',
            description:
                'Free quotes across Adelaide\'s north-east, with inclusions and exclusions in writing so you know exactly what you\'re comparing.',
            linkText: 'Request a Free Quote',
            href: '/contact',
        },
    },
    {
        slug: 'how-to-choose-an-electrician-adelaide',
        title: 'How to Choose an Electrician in Adelaide',
        excerpt:
            'Four checks that take five minutes and rule out most of the bad outcomes, plus the warning signs worth walking away from.',
        date: '2026-08-13',
        author: 'Justin',
        category: 'Advice',
        image: '/images/electrician_working_1764247092697.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>Electrical work is one of the few trades where you can't inspect the result. You can see whether a paint job is good. You can't see whether a connection was torqued properly, whether the circuit is protected correctly, or whether the earthing was ever checked. It looks identical either way until something goes wrong.</p>
            <p>That means you're choosing on trust, and the usual signals are weak. A slick website costs a few hundred dollars. Reviews can be bought. The number on the quote tells you almost nothing about quality. So here are the checks that actually mean something.</p>

            <h3>Check One: The Licence</h3>
            <p>In South Australia, electrical work must be carried out by a licensed electrician, and the business must hold a contractor licence. Ask for the licence number and check it. It takes two minutes on the Consumer and Business Services website.</p>
            <p>An unlicensed job isn't just a quality risk. It can invalidate your home insurance if there's a fire, it can't be certified, and it becomes your problem when you sell the house and the work has no paperwork behind it. Anyone reluctant to give you a licence number has told you what you need to know.</p>

            <h3>Check Two: Insurance</h3>
            <p>Public liability insurance covers damage caused during the work. If somebody puts a screw through a water pipe in your wall, or a fault causes damage after they have left, that's what covers the repair.</p>
            <p>Ask directly whether they carry it. A legitimate business will answer immediately and be unbothered by the question, because they get asked it regularly.</p>

            <h3>Check Three: The Certificate of Compliance</h3>
            <p>Ask whether you'll get a Certificate of Compliance for Electrical Work. The answer should be an immediate yes for any job that requires one.</p>
            <p>This document is your evidence that licensed work was done and tested. You want it on file for two reasons that both arrive at bad moments: when an insurer investigates an incident, and when a buyer's conveyancer asks what work has been done on the property. "The bloke seemed good" Isn't evidence.</p>

            <h3>Check Four: Who Actually Turns Up</h3>
            <p>Ask who will be doing the work. In a larger business, the person who quotes is often not the person who attends, and the person who attends may be an apprentice working alone.</p>
            <p>There's nothing wrong with a larger operation, plenty are excellent. But it's worth knowing, because the quality of the conversation you had at quote stage doesn't necessarily transfer to the person who shows up.</p>

            <h3>The Warning Signs</h3>
            <p>These are the ones that come up repeatedly in jobs we get called in to fix.</p>
            <ul>
                <li><strong>A price over the phone for work nobody has seen.</strong> Fine as a ballpark if it's described as one. A problem when it's presented as a quote and then changes.</li>
                <li><strong>Pressure to decide today.</strong> Genuine electrical hazards need fixing quickly. Genuine electrical hazards don't require a limited-time discount.</li>
                <li><strong>A recommendation to rewire the whole house without any testing.</strong> Full rewires are the exception. If nobody has done an insulation resistance test and they're quoting a rewire, get a second opinion.</li>
                <li><strong>No written quote.</strong> A verbal number isn't a scope. When there's a disagreement later there's nothing to point at.</li>
                <li><strong>Vagueness about materials.</strong> "Quality LED downlights" Isn't a specification. Brand and model is.</li>
                <li><strong>Cash-only, no invoice.</strong> No invoice means no warranty, no certificate and no recourse.</li>
                <li><strong>Reluctance to explain.</strong> A good electrician will happily tell you why something needs doing. If the explanation is "it just needs it", that isn't an explanation.</li>
            </ul>

            <h3>Local Is Worth More Than People Think</h3>
            <p>Beyond the checks above, whether the electrician actually works in your area matters more than it looks.</p>
            <p>A business based across town either builds travel into your price or deprioritises your job when something closer comes up. It also matters for the small stuff: a business an hour away has no interest in coming out for one powerpoint, so those jobs sit undone for months.</p>
            <p>There's a knowledge side too. An electrician who works constantly in the same housing stock knows what's behind the walls before opening them. The switchboard in a 1970s Hope Valley house is a known quantity. So is the full-but-serviceable board in a 1990s Greenwith home that now needs an EV charger on it.</p>

            <h3>What You Should Expect as Standard</h3>
            <ul>
                <li>A written quote stating what's included and excluded</li>
                <li>A licence number provided without hesitation</li>
                <li>Confirmation of public liability insurance</li>
                <li>A Certificate of Compliance on completion</li>
                <li>An explanation you can follow of why the work is needed</li>
                <li>Arriving when they said, or a phone call when that changes</li>
                <li>The site left clean</li>
                <li>Someone who answers the phone afterwards if there's a problem</li>
            </ul>
            <p>None of that's a high bar. It's just worth knowing what the bar is before you pick.</p>
        `,
        faqs: [
            {
                question: 'What\'s the difference between an electrical contractor licence and an electrician\'s registration in SA?',
                answer: 'The registration covers the person and the contractor licence covers the business. In South Australia anyone who physically does electrical work has to be registered as an electrician, and any individual, partner or company running a business that carries out or organises electrical work has to hold a contractor licence. A sole trader doing their own work needs both. You can look either up on the Consumer and Business Services licence search, so check the business and the person who\'ll actually turn up.',
            },
            {
                question: 'How do I complain about an electrician in South Australia?',
                answer: 'It depends on the problem. If it\'s about safety or whether the work complies with the standards, complain to the Office of the Technical Regulator, which can audit the installation and the electrician. If it\'s a dispute about payment, quality of work or work that wasn\'t finished, Consumer and Business Services can help, including through conciliation. Either way, raise it with the electrician in writing first and give them a reasonable chance to fix it. Anything immediately dangerous should be switched off and reported straight away.',
            },
            {
                question: 'How long does an electrician have to give me the Certificate of Compliance in SA?',
                answer: '30 days. In South Australia the electrical certificate of compliance has to be certified before the installation is made available to be switched on, then submitted and provided to the owner or operator within 30 days. It\'s an electronic certificate, usually emailed to you from the Office of the Technical Regulator\'s eCoC system, and it can be posted if you don\'t use email. If a month has gone by and you\'ve heard nothing, ask for it, because it\'s your record the work was done and tested by a licensed electrician.',
            },
            {
                question: 'What warranty should I expect on electrical work?',
                answer: 'Whatever warranty the electrician offers, you\'re also covered by the consumer guarantees in the Australian Consumer Law, which a business can\'t take away. Services must be carried out with due care and skill, be fit for any purpose you made clear, and be delivered within a reasonable time if no date was agreed. The guarantees don\'t have a fixed expiry date. It depends on the circumstances. Products installed, like fittings and chargers, also carry their own manufacturer\'s warranty, so keep the invoice showing brands and models.',
            },
            {
                question: 'Can any electrician install solar panels or a home battery?',
                answer: 'Not if you want the federal discount. To create small-scale technology certificates, which provide the upfront discount on rooftop solar and home batteries, the system has to be designed and installed by someone accredited by Solar Accreditation Australia, and that installer also needs an unrestricted electrical licence. A licensed electrician without the accreditation can still do related work, like a switchboard upgrade or new circuits, but check the accreditation before you sign up for a solar or battery install.',
            },
        ],
        cta: {
            heading: 'Licensed, Insured, Owner-Operated',
            description:
                'Licence PGE296191, public liability insurance, and a Certificate of Compliance on every job that needs one. Justin quotes the job, does the job, and answers the phone afterwards.',
            linkText: 'Get a Free Quote',
            href: '/contact',
        },
    },
    {
        slug: 'why-does-my-power-keep-tripping',
        title: 'Why Does My Power Keep Tripping?',
        excerpt:
            'A safety switch that keeps going off is usually telling you something real. Here\'s how to work out what, and when to stop resetting it and call someone.',
        date: '2026-08-13',
        author: 'Justin',
        category: 'Troubleshooting',
        image: '/images/switchboard_fault_finding.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>A tripping safety switch is annoying, and the temptation is to treat the tripping itself as the fault. It usually isn't. The device is doing exactly what it was installed to do, and it's telling you that something in your installation or your appliances isn't right.</p>
            <p>The genuinely dangerous response is the common one: reset it repeatedly, or worse, have someone bypass it so it stops being a nuisance. That doesn't fix anything, it just removes the thing that was protecting you from it.</p>
            <p>This post covers how to narrow down the cause yourself, which is often enough to solve it, and where the line is between a household job and one that needs testing.</p>

            <h3>First, Work Out What Actually Tripped</h3>
            <p>Open the switchboard and look. There's a real difference between the two, and it changes what the problem is.</p>
            <p><strong>A circuit breaker</strong> protects the wiring from too much current. If a breaker has tripped, the circuit was overloaded or there was a short circuit. Breakers are usually smaller and there's one per circuit.</p>
            <p><strong>A safety switch, or RCD,</strong> detects current leaking to earth. If an RCD has tripped, current was escaping somewhere it shouldn't be, through a faulty appliance, damaged insulation, water, or a person. RCDs usually have a test button on them.</p>
            <p>Many modern boards use RCBOs, which are both in one device per circuit. On those you can't tell from the switch position which cause it was, but the rest of the process is the same.</p>

            <h3>If It's a Breaker: You're Probably Overloading a Circuit</h3>
            <p>This is the most common cause in older homes, and it isn't a fault at all. A kitchen in a 1970s house in St Agnes or Holden Hill was often wired as one circuit, because in 1975 the kitchen had a fridge and a kettle. It now has a kettle, a toaster, a microwave, a dishwasher and an air fryer, and two of them at once is enough to exceed what that circuit was built for.</p>
            <p>The giveaway is that it trips predictably. Always when the same two appliances run together, always at the same time of day. If you can trigger it on demand, it's a load problem, not a fault.</p>
            <p>The fix is either using less at once, which is a workaround rather than a solution, or splitting the load across additional circuits. In a house of that era it's often worth doing that as part of a switchboard upgrade, because the board usually has no spare space to add circuits anyway.</p>

            <h3>If It's a Safety Switch: Find the Appliance</h3>
            <p>Around eight times out of ten, an RCD tripping is a faulty appliance. You can find it yourself in twenty minutes.</p>
            <ol>
                <li>Unplug everything on the affected circuit. Everything, including things you're sure are fine.</li>
                <li>Reset the safety switch. If it holds, the problem is an appliance rather than the wiring.</li>
                <li>Plug items back in one at a time, waiting a moment after each.</li>
                <li>When it trips, you have found it. Leave that item unplugged.</li>
            </ol>
            <p>The usual culprits are old kettles, toasters, washing machines, dishwashers, fridges, and anything that lives outside such as a pump or a power tool. Heating elements are especially common, because as they age, moisture and degradation let a small amount of current leak to earth. That leakage is exactly what the RCD exists to detect.</p>
            <p>A word of warning worth taking seriously: if an appliance is tripping your safety switch, that appliance is faulty. It isn't the safety switch being oversensitive. Continuing to use it on a circuit without RCD protection is how people get hurt.</p>

            <h3>When It Trips With Nothing Plugged In</h3>
            <p>If you have unplugged everything and it still trips, the fault is in the fixed wiring, and that's where the household troubleshooting stops.</p>
            <p>Common causes are water getting into an outdoor point or an external light fitting, damaged cable in a roof or wall space, often from rodents or from someone putting a nail or screw through it, degraded insulation in older rubber-insulated wiring, or moisture in a light fitting after rain. Diagnosing which requires insulation resistance testing on the circuit, which needs the right instrument and someone who knows how to read it.</p>

            <h3>The Rain Clue</h3>
            <p>If your tripping only happens when it rains or shortly afterwards, that's one of the most useful diagnostic clues there is. It means water is getting somewhere it shouldn't.</p>
            <p>The usual suspects are outdoor powerpoints that aren't properly weatherproof, external light fittings with failed seals, a damaged section of underground cable to a shed or pump, or water tracking into a meter box or switchboard enclosure. It narrows the search enormously, so mention it when you call.</p>

            <h3>Stop and Call Someone If Any of This Applies</h3>
            <ul>
                <li>It trips again immediately every time you reset it</li>
                <li>There's any burning smell, heat or visible scorching at the board, an outlet or a fitting</li>
                <li>You get a tingle or a shock from a tap, an appliance or a metal fixture</li>
                <li>It started right after building work, a storm, or water entering the property</li>
                <li>You have unplugged everything and it still won't hold</li>
                <li>Multiple circuits are tripping rather than one</li>
            </ul>
            <p>And the one that matters most: never bypass, disable or remove a safety switch to stop it tripping. It's the only device in your house specifically designed to stop an electric shock from killing someone. If it's going off, something is wrong, and the answer is to find out what.</p>
        `,
        faqs: [
            {
                question: 'Why does my safety switch trip in the middle of the night?',
                answer: 'Usually because something switches on overnight. In South Australia many electric hot water systems run on an off-peak controlled load that heats overnight, and a failing element will trip the safety switch when it kicks in. Fridge and freezer defrost heaters, timers on pool pumps or heaters, and dew getting into outdoor fittings are the other usual suspects. Note the time it trips and what\'s scheduled around then, because it narrows the search a lot.',
            },
            {
                question: 'Why does the power trip when I turn on one particular light?',
                answer: 'Usually there\'s a fault in that light, its switch or the cable feeding it. If the safety switch trips, suspect water in an outdoor or bathroom fitting, or damaged cable. If a breaker trips instantly, that points to a short circuit in the fitting or at the switch. Either way, leave that light off and get it checked. Unlike an appliance, you can\'t just unplug a light fitting to rule it out, so this one isn\'t a DIY diagnosis.',
            },
            {
                question: 'Can a storm make my safety switch trip even if nothing\'s wrong?',
                answer: 'Yes. Lightning and network disturbances can cause voltage spikes that trip a safety switch without leaving a fault behind, and if it resets and stays on, that\'s likely what happened. Tripping whenever it rains, even without lightning, is different: it usually means water is getting in somewhere. And if it won\'t reset after a storm, treat it as a fault, because storms regularly damage outdoor fittings, cables and the supply to the house.',
            },
            {
                question: 'Can the safety switch itself be faulty?',
                answer: 'It can, but it\'s less common than people hope. RCDs do age and can fail or become erratic, and the only way to know is testing with an instrument. More often the device is fine and lots of small leakage is adding up. Computers, TVs and other appliances with filters each leak a little current to earth, and on one RCD covering many circuits, that can be enough to trip it. Spreading circuits across RCBOs usually cures it.',
            },
            {
                question: 'Can I run the fridge off an extension lead while a circuit won\'t stay on?',
                answer: 'Yes, as a short-term fix, as long as the fridge isn\'t what\'s tripping it and the outlet you use is protected by a safety switch. Run the lead where it won\'t get pinched or trip anyone, and don\'t chain power boards together. If the fridge trips the new circuit as well, the fridge is the fault. Never plug a suspect appliance into an outlet without RCD protection just to keep it running.',
            },
        ],
        cta: {
            heading: 'Still Tripping After You Have Checked?',
            description:
                'If the safety switch won\'t hold with everything unplugged, the fault is in the wiring and it needs proper testing. We\'re based in Wynn Vale and cover Adelaide\'s north-east.',
            linkText: 'Book Fault Finding',
            href: '/contact',
        },
    },
];
