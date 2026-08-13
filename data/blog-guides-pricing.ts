import type { BlogPost } from './blog-posts';

/** Pricing, hiring and troubleshooting posts. High search volume, high commercial intent. */
export const pricingPosts: BlogPost[] = [
    {
        slug: 'electrician-cost-adelaide',
        title: 'What Should an Electrician Cost in Adelaide?',
        excerpt:
            'Nobody publishes real numbers, and most quotes are impossible to compare. Here is how electricians actually price work, and the questions that let you compare two quotes properly.',
        date: '2026-08-13',
        author: 'Justin',
        category: 'Pricing',
        image: '/images/onsite_walkthrough.jpg',
        content: `
            <h3>Why This Matters to You</h3>
            <p>You ring three electricians, you get three numbers, and they are nowhere near each other. One is half the price of the next. There is no way to tell whether the cheap one is efficient or whether they have simply left half the job out of the quote, and you find out which after the work has started.</p>
            <p>That is not an accident. Electrical quoting is genuinely hard to compare because most quotes do not state what they include. This post explains how the pricing actually works and gives you the specific questions that make two quotes comparable. It will not tell you what your job costs, because that depends on your house, but it will stop you comparing a complete quote against an incomplete one and picking the wrong builder of the two.</p>

            <h3>The Three Ways Electrical Work Gets Priced</h3>
            <p><strong>Callout plus hourly.</strong> Used for repairs, fault finding and anything where nobody knows how long it will take until they start. There is a callout that covers attendance and a first block of time on site, then an hourly rate after that. This is the right model for a dead circuit, because pretending to know in advance how long a fault takes to find is guesswork dressed up as a quote.</p>
            <p><strong>Fixed price.</strong> Used where the scope is known. A switchboard upgrade, a set number of downlights, an EV charger install. You get one number and it does not move unless the scope moves. This is what you want for planned work, because it puts the risk of the job taking longer on the electrician rather than on you.</p>
            <p><strong>Per point or per item.</strong> Used mostly on new builds and larger renovations, where the job is quoted off a plan by counting light points, power points and circuits. Efficient for big jobs, meaningless for small ones.</p>
            <p>The important thing is knowing which one you are being given. A number quoted over the phone for a job nobody has seen is not a fixed price, it is an estimate, and the gap between the two is where most disputes live.</p>

            <h3>What Actually Drives the Number</h3>
            <p>When two quotes for the same job differ a lot, it is usually one of these, not greed.</p>
            <ul>
                <li><strong>Access.</strong> A single-storey home with a clear roof space is a fraction of the labour of a two-storey with no access above the upper floor. Slab-on-ground with no wall cavity is harder again.</li>
                <li><strong>Distance from the switchboard.</strong> Every new circuit is a cable run. A charger on the garage wall behind the board is cheap. The same charger at a detached shed sixty metres away needs much bigger cable, and possibly trenching.</li>
                <li><strong>Switchboard capacity.</strong> If your board is full, work that needs a new circuit quietly becomes work that needs a new board. An honest quote flags that. A cheap quote sometimes just leaves it out.</li>
                <li><strong>Materials specification.</strong> Downlights range enormously in price and quality, and so do switches, fans and chargers. Two quotes can differ by hundreds purely on what is being installed.</li>
                <li><strong>The age of the house.</strong> Older wiring takes longer to work with and is more likely to reveal something. A 1968 Holden Hill house and a 2015 Greenwith house are not the same job even when the task is identical.</li>
                <li><strong>Whether compliance work is included.</strong> Testing, certification and any upgrade triggered by the new work all cost something. Leaving them out makes a quote look cheaper without making the job cheaper.</li>
            </ul>

            <h3>The Questions That Make Quotes Comparable</h3>
            <p>Ask every electrician who quotes you the same six questions. The answers, not the headline number, are what tell you which quote is real.</p>
            <ul>
                <li><strong>Is this a fixed price or an estimate?</strong> If it is an estimate, what would make it change?</li>
                <li><strong>What is specifically excluded?</strong> This is the single most useful question and very few people ask it.</li>
                <li><strong>Does it include a Certificate of Compliance and testing?</strong> It should.</li>
                <li><strong>What happens if you open it up and find a problem?</strong> A good answer is "we stop, show you, and price it before continuing". A bad answer is silence.</li>
                <li><strong>What exact fittings are you supplying?</strong> Get the brand and model, not "quality LED downlights".</li>
                <li><strong>Does my switchboard need anything for this to work?</strong> If one quote says yes and two say nothing, the two are probably not accounting for it.</li>
            </ul>

            <h3>Why the Cheapest Quote Is Often the Most Expensive</h3>
            <p>There are only a handful of ways to be significantly cheaper than everyone else on the same job. Cheaper materials, less time on site, skipping the compliance work, or not being licensed and insured. None of those are things you want, and all of them cost you later.</p>
            <p>The version we see most is scope that has quietly been left out. The quote covers installing the thing, but not the circuit it needs, not the board work required to fit that circuit, and not the certification. It is a real number for an unreal job, and the difference appears as a variation once you are committed.</p>
            <p>None of this means the most expensive quote is the right one either. It means the number on its own tells you very little, and the six questions above tell you a lot.</p>

            <h3>What We Do</h3>
            <p>Free quotes, fixed prices on planned work, and a written scope that states inclusions, exclusions and assumptions. For fault finding we tell you the callout on the phone before we come out rather than after we arrive.</p>
            <p>If we think something might turn up once we open a wall or take a board off, you hear about it at quote stage. That is not us hedging, it is us refusing to give you a comfortable number now and an uncomfortable conversation later.</p>
        `,
        cta: {
            heading: 'Get a Quote You Can Actually Compare',
            description:
                'Free quotes across Adelaide\'s north-east, with inclusions and exclusions in writing so you know exactly what you are comparing.',
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
        image: '/images/electrician_working_1764247092697.jpg',
        content: `
            <h3>Why This Matters to You</h3>
            <p>Electrical work is one of the few trades where you cannot inspect the result. You can see whether a paint job is good. You cannot see whether a connection was torqued properly, whether the circuit is protected correctly, or whether the earthing was ever checked. It looks identical either way until something goes wrong.</p>
            <p>That means you are choosing on trust, and the usual signals are weak. A slick website costs a few hundred dollars. Reviews can be bought. The number on the quote tells you almost nothing about quality. So here are the checks that actually mean something.</p>

            <h3>Check One: The Licence</h3>
            <p>In South Australia, electrical work must be carried out by a licensed electrician, and the business must hold a contractor licence. Ask for the licence number and check it. It takes two minutes on the Consumer and Business Services website.</p>
            <p>An unlicensed job is not just a quality risk. It can invalidate your home insurance if there is a fire, it cannot be certified, and it becomes your problem when you sell the house and the work has no paperwork behind it. Anyone reluctant to give you a licence number has told you what you need to know.</p>

            <h3>Check Two: Insurance</h3>
            <p>Public liability insurance covers damage caused during the work. If somebody puts a screw through a water pipe in your wall, or a fault causes damage after they have left, that is what covers the repair.</p>
            <p>Ask directly whether they carry it. A legitimate business will answer immediately and be unbothered by the question, because they get asked it regularly.</p>

            <h3>Check Three: The Certificate of Compliance</h3>
            <p>Ask whether you will get a Certificate of Compliance for Electrical Work. The answer should be an immediate yes for any job that requires one.</p>
            <p>This document is your evidence that licensed work was done and tested. You want it on file for two reasons that both arrive at bad moments: when an insurer investigates an incident, and when a buyer's conveyancer asks what work has been done on the property. "The bloke seemed good" is not evidence.</p>

            <h3>Check Four: Who Actually Turns Up</h3>
            <p>Ask who will be doing the work. In a larger business, the person who quotes is often not the person who attends, and the person who attends may be an apprentice working alone.</p>
            <p>There is nothing wrong with a larger operation, plenty are excellent. But it is worth knowing, because the quality of the conversation you had at quote stage does not necessarily transfer to the person who shows up.</p>

            <h3>The Warning Signs</h3>
            <p>These are the ones that come up repeatedly in jobs we get called in to fix.</p>
            <ul>
                <li><strong>A price over the phone for work nobody has seen.</strong> Fine as a ballpark if it is described as one. A problem when it is presented as a quote and then changes.</li>
                <li><strong>Pressure to decide today.</strong> Genuine electrical hazards need fixing quickly. Genuine electrical hazards do not require a limited-time discount.</li>
                <li><strong>A recommendation to rewire the whole house without any testing.</strong> Full rewires are the exception. If nobody has done an insulation resistance test and they are quoting a rewire, get a second opinion.</li>
                <li><strong>No written quote.</strong> A verbal number is not a scope. When there is a disagreement later there is nothing to point at.</li>
                <li><strong>Vagueness about materials.</strong> "Quality LED downlights" is not a specification. Brand and model is.</li>
                <li><strong>Cash-only, no invoice.</strong> No invoice means no warranty, no certificate and no recourse.</li>
                <li><strong>Reluctance to explain.</strong> A good electrician will happily tell you why something needs doing. If the explanation is "it just needs it", that is not an explanation.</li>
            </ul>

            <h3>Local Is Worth More Than People Think</h3>
            <p>Beyond the checks above, whether the electrician actually works in your area matters more than it looks.</p>
            <p>A business based across town either builds travel into your price or deprioritises your job when something closer comes up. It also matters for the small stuff: a business an hour away has no interest in coming out for one powerpoint, so those jobs sit undone for months.</p>
            <p>There is a knowledge side too. An electrician who works constantly in the same housing stock knows what is behind the walls before opening them. The switchboard in a 1970s Hope Valley house is a known quantity. So is the full-but-serviceable board in a 1990s Greenwith home that now needs an EV charger on it.</p>

            <h3>What You Should Expect as Standard</h3>
            <ul>
                <li>A written quote stating what is included and excluded</li>
                <li>A licence number provided without hesitation</li>
                <li>Confirmation of public liability insurance</li>
                <li>A Certificate of Compliance on completion</li>
                <li>An explanation you can follow of why the work is needed</li>
                <li>Arriving when they said, or a phone call when that changes</li>
                <li>The site left clean</li>
                <li>Someone who answers the phone afterwards if there is a problem</li>
            </ul>
            <p>None of that is a high bar. It is just worth knowing what the bar is before you pick.</p>
        `,
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
            'A safety switch that keeps going off is usually telling you something real. Here is how to work out what, and when to stop resetting it and call someone.',
        date: '2026-08-13',
        author: 'Justin',
        category: 'Troubleshooting',
        image: '/images/switchboard_fault_finding.jpg',
        content: `
            <h3>Why This Matters to You</h3>
            <p>A tripping safety switch is annoying, and the temptation is to treat the tripping itself as the fault. It usually is not. The device is doing exactly what it was installed to do, and it is telling you that something in your installation or your appliances is not right.</p>
            <p>The genuinely dangerous response is the common one: reset it repeatedly, or worse, have someone bypass it so it stops being a nuisance. That does not fix anything, it just removes the thing that was protecting you from it.</p>
            <p>This post covers how to narrow down the cause yourself, which is often enough to solve it, and where the line is between a household job and one that needs testing.</p>

            <h3>First, Work Out What Actually Tripped</h3>
            <p>Open the switchboard and look. There is a real difference between the two, and it changes what the problem is.</p>
            <p><strong>A circuit breaker</strong> protects the wiring from too much current. If a breaker has tripped, the circuit was overloaded or there was a short circuit. Breakers are usually smaller and there is one per circuit.</p>
            <p><strong>A safety switch, or RCD,</strong> detects current leaking to earth. If an RCD has tripped, current was escaping somewhere it should not be, through a faulty appliance, damaged insulation, water, or a person. RCDs usually have a test button on them.</p>
            <p>Many modern boards use RCBOs, which are both in one device per circuit. On those you cannot tell from the switch position which cause it was, but the rest of the process is the same.</p>

            <h3>If It Is a Breaker: You Are Probably Overloading a Circuit</h3>
            <p>This is the most common cause in older homes, and it is not a fault at all. A kitchen in a 1970s house in St Agnes or Holden Hill was often wired as one circuit, because in 1975 the kitchen had a fridge and a kettle. It now has a kettle, a toaster, a microwave, a dishwasher and an air fryer, and two of them at once is enough to exceed what that circuit was built for.</p>
            <p>The giveaway is that it trips predictably. Always when the same two appliances run together, always at the same time of day. If you can trigger it on demand, it is a load problem, not a fault.</p>
            <p>The fix is either using less at once, which is a workaround rather than a solution, or splitting the load across additional circuits. In a house of that era it is often worth doing that as part of a switchboard upgrade, because the board usually has no spare space to add circuits anyway.</p>

            <h3>If It Is a Safety Switch: Find the Appliance</h3>
            <p>Around eight times out of ten, an RCD tripping is a faulty appliance. You can find it yourself in twenty minutes.</p>
            <ol>
                <li>Unplug everything on the affected circuit. Everything, including things you are sure are fine.</li>
                <li>Reset the safety switch. If it holds, the problem is an appliance rather than the wiring.</li>
                <li>Plug items back in one at a time, waiting a moment after each.</li>
                <li>When it trips, you have found it. Leave that item unplugged.</li>
            </ol>
            <p>The usual culprits are old kettles, toasters, washing machines, dishwashers, fridges, and anything that lives outside such as a pump or a power tool. Heating elements are especially common, because as they age, moisture and degradation let a small amount of current leak to earth. That leakage is exactly what the RCD exists to detect.</p>
            <p>A word of warning worth taking seriously: if an appliance is tripping your safety switch, that appliance is faulty. It is not the safety switch being oversensitive. Continuing to use it on a circuit without RCD protection is how people get hurt.</p>

            <h3>When It Trips With Nothing Plugged In</h3>
            <p>If you have unplugged everything and it still trips, the fault is in the fixed wiring, and that is where the household troubleshooting stops.</p>
            <p>Common causes are water getting into an outdoor point or an external light fitting, damaged cable in a roof or wall space, often from rodents or from someone putting a nail or screw through it, degraded insulation in older rubber-insulated wiring, or moisture in a light fitting after rain. Diagnosing which requires insulation resistance testing on the circuit, which needs the right instrument and someone who knows how to read it.</p>

            <h3>The Rain Clue</h3>
            <p>If your tripping only happens when it rains or shortly afterwards, that is one of the most useful diagnostic clues there is. It means water is getting somewhere it should not.</p>
            <p>The usual suspects are outdoor powerpoints that are not properly weatherproof, external light fittings with failed seals, a damaged section of underground cable to a shed or pump, or water tracking into a meter box or switchboard enclosure. It narrows the search enormously, so mention it when you call.</p>

            <h3>Stop and Call Someone If Any of This Applies</h3>
            <ul>
                <li>It trips again immediately every time you reset it</li>
                <li>There is any burning smell, heat or visible scorching at the board, an outlet or a fitting</li>
                <li>You get a tingle or a shock from a tap, an appliance or a metal fixture</li>
                <li>It started right after building work, a storm, or water entering the property</li>
                <li>You have unplugged everything and it still will not hold</li>
                <li>Multiple circuits are tripping rather than one</li>
            </ul>
            <p>And the one that matters most: never bypass, disable or remove a safety switch to stop it tripping. It is the only device in your house specifically designed to stop an electric shock from killing someone. If it is going off, something is wrong, and the answer is to find out what.</p>
        `,
        cta: {
            heading: 'Still Tripping After You Have Checked?',
            description:
                'If the safety switch will not hold with everything unplugged, the fault is in the wiring and it needs proper testing. We are based in Wynn Vale and cover Adelaide\'s north-east.',
            linkText: 'Book Fault Finding',
            href: '/contact',
        },
    },
];
