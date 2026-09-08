import type { BlogPost } from './blog-posts';

/** Upgrade and project posts. These map onto the service pages and carry the reader from research to booking. */
export const upgradePosts: BlogPost[] = [
    {
        slug: 'home-ev-charger-adelaide-guide',
        title: 'Thinking About a Home EV Charger? Read This First',
        excerpt:
            'The charger is the easy part. The switchboard, the cable run and whether your car can even use a faster charger are what decide the price and whether it works.',
        date: '2026-08-13',
        author: 'Justin',
        category: 'EV Charging',
        image: '/images/commercial_ev_charger.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>Home charging is the whole point of owning an electric car. Charging at home overnight is dramatically cheaper than public fast charging, and it means you leave every morning with a full battery instead of planning your week around a charging stop.</p>
            <p>But the quotes people get vary enormously for what looks like the same job, and the reason is almost never the charger. It's the switchboard, the distance from the board to the car, and whether the house can carry the load at all. Understanding those three things before you ring anyone will save you a lot of confusion.</p>

            <h3>The Load Is the Real Story</h3>
            <p>A typical single-phase home charger draws around 32 amps continuously, for hours. That's a fundamentally different kind of load to anything else in a house. A kettle draws a lot but for two minutes. An EV charger draws a lot all night.</p>
            <p>So the first question isn't where the charger goes, it's whether your switchboard and your supply can carry it alongside everything else. We look at the main switch rating, the consumer mains cable, what's already connected, and whether there's physical space in the board for another circuit.</p>
            <p>In the newer suburbs like Greenwith and Golden Grove, where a lot of homes already have ducted air conditioning, an induction cooktop and sometimes a pool pump, that check genuinely matters. In the older suburbs like Hope Valley and Holden Hill, the answer is often that the board needs replacing before a charger goes anywhere near it.</p>

            <h3>Load Management Is Usually Cheaper Than a Supply Upgrade</h3>
            <p>If the numbers are tight, most people assume the answer is upgrading the supply. Usually it isn't, because that's expensive and slow.</p>
            <p>The better answer is normally load management. Most modern chargers can monitor what the rest of the house is drawing and throttle themselves accordingly. In practice that means charging at full speed for most of the night and automatically backing off for the twenty minutes when the oven and the air conditioning are both running.</p>
            <p>You barely notice it, because the car is sitting there for ten hours and only needs a few of them. It's a far better use of money than upgrading the incoming supply to handle a peak that happens rarely.</p>

            <h3>Don't Pay for Three Phase Without Checking the Car</h3>
            <p>This is the mistake that costs people the most money for nothing.</p>
            <p>Most homes in our area are single phase, which caps a wall charger at around 7 kW. That adds roughly 40 kilometres of range per hour. An overnight charge is well over 300 kilometres, which is more than almost anyone drives in a day.</p>
            <p>If you already have three-phase supply, a three-phase charger can go to around 22 kW. But here's the part nobody mentions at the dealership: plenty of electric vehicles only accept single-phase AC charging, regardless of what the charger can deliver. On those cars, a 22 kW charger charges at exactly the same speed as a 7 kW one.</p>
            <p>Check your vehicle's onboard AC charger rating before spending anything on three phase. And upgrading a single-phase house to three phase purely to charge faster is almost never worth it, because it solves a problem that doesn't exist.</p>

            <h3>What a Compliant Install Actually Involves</h3>
            <ul>
                <li>A dedicated circuit from the switchboard, sized for the charger and for the length of the run</li>
                <li>RCD protection suitable for EV charging, which means a Type B, or a Type A where the charger itself provides 6 mA DC fault detection</li>
                <li>A correctly rated circuit breaker, and board space to fit it</li>
                <li>Notification to SA Power Networks where that's required</li>
                <li>Full testing and a Certificate of Compliance for Electrical Work</li>
            </ul>
            <p>That DC fault detection point is worth understanding, because it's a genuine technical requirement rather than an upsell. EV charging can produce smooth DC fault currents that a standard Type AC or Type A RCD won't detect, and which can actually blind that RCD to other faults. Either the RCD handles it or the charger does. Skipping it isn't an option.</p>

            <h3>Where to Put It</h3>
            <p>Two things decide this. Where the car actually parks, and where the charge port is on the vehicle. A charger mounted on the wrong side of a double garage means dragging the cable around the car every single night, which gets old inside a week.</p>
            <p>The other factor is the distance from the switchboard, and this is the single biggest driver of the install price. A charger on the garage wall directly behind the board is a short run in modest cable. The same charger at a detached garage down a Fairview Park or Vista block is a long run in much heavier cable, and sometimes trenching. The difference between those two jobs is large.</p>
            <p>If the charger is going outside, it needs to be rated for outdoor use and ideally positioned so it isn't sitting in the weather more than it has to.</p>

            <h3>Tethered or Untethered</h3>
            <p>A tethered charger has the cable permanently attached. Untethered has a socket, and you use your own cable.</p>
            <p>Tethered is more convenient day to day, because you pull the plug off the wall and go. Untethered is tidier when not in use, works with different connector types, and means a damaged cable is a cheap replacement rather than a service call. For a single-car household that keeps the same car for years, tethered usually wins on convenience. For anything else, untethered is the more flexible choice.</p>

            <h3>What to Have Ready Before You Call</h3>
            <ul>
                <li>The make and model of the car, so we can check its onboard AC charging rate</li>
                <li>The charger model, if you have already chosen one</li>
                <li>A photo of your switchboard with the cover open</li>
                <li>A rough idea of the distance from the board to where the car parks</li>
                <li>Whether the parking spot is in a garage, carport or open driveway</li>
            </ul>
            <p>With those five things we can tell you most of what you need to know before anyone drives anywhere.</p>
        `,
        cta: {
            heading: 'Get an EV Charger Quote',
            description:
                'We check the switchboard first, size the circuit properly, and install with the protection the standard actually requires. Free quotes across Adelaide\'s north-east.',
            linkText: 'Book an EV Charger Quote',
            href: '/ev-charger-installation-adelaide',
        },
    },
    {
        slug: 'halogen-downlights-cost-adelaide',
        title: 'Your Halogen Downlights Are Costing More Than You Think',
        seoTitle: 'Halogen vs LED Downlights: The Real Cost | JPD',
        excerpt:
            'Thirty halogen downlights is 1,500 watts of lighting and a ceiling full of insulation gaps. The running cost is only half the problem.',
        date: '2026-08-13',
        author: 'Justin',
        category: 'Efficiency',
        image: '/images/bedroom_led_downlights.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>If your house was built or renovated between roughly 1995 and 2010, you very likely have halogen downlights, and there's a good chance nobody has ever told you what they're costing you.</p>
            <p>A single halogen downlight draws around 50 watts. Thirty of them, which isn't unusual in a family home across Golden Grove, Greenwith or Gulfview Heights, is 1,500 watts. That's more than a decent air conditioner, running every evening.</p>
            <p>But the power bill is only half of it. The bigger issue is heat, and what that heat has done to your insulation.</p>

            <h3>The Insulation Problem Nobody Mentions</h3>
            <p>Halogen downlights run hot. Genuinely hot, hot enough that older fittings needed a physical clearance from insulation to avoid becoming a fire risk.</p>
            <p>So when the insulation was installed, it was pulled back in a ring around every single light. Go into your roof space and look. In a house with thirty downlights you have thirty holes in the insulation layer, each one a direct path for heat to escape in winter and pour in during summer.</p>
            <p>You paid for insulation, and then cut holes in it. The heating and cooling cost of that's real, and it's quietly larger than the lighting bill it came with.</p>
            <p>It's also a live fire risk in houses where somebody has since topped up the insulation without knowing about the clearance requirement, and simply laid it over the top. That does happen, and it's one of the things we look for when we're in a roof space.</p>

            <h3>What Changes With LED</h3>
            <p>An LED downlight producing similar light draws somewhere between 7 and 12 watts. That's roughly an 80 per cent reduction in your lighting load.</p>
            <p>More importantly, LED fittings rated and marked for insulation contact can be covered directly. That means the insulation can be laid as a continuous layer instead of thirty separate cut-outs, which restores the thermal performance you originally paid for.</p>
            <p>Modern LED downlights also last far longer, typically tens of thousands of hours against a couple of thousand for halogen, so the constant ladder work to replace blown globes stops as well.</p>

            <h3>Why Swapping the Globe doesn't Work</h3>
            <p>You can buy an LED lamp that fits into an existing halogen can. We don't recommend it, and here's the honest reason.</p>
            <p>The original can is still in your ceiling, so the insulation clearance requirement is still there. You haven't solved the insulation problem at all. The original transformer is also still there, and halogen transformers were designed for a much higher load than an LED draws. That mismatch is where flickering, buzzing and premature failure come from.</p>
            <p>So you spend money, keep two of the three problems, and often introduce a new one. Replacing the complete fitting costs more up front and is the version that actually delivers the outcome.</p>

            <h3>Do the Layout Properly While You're There</h3>
            <p>Most downlight layouts we come across were done as a grid. Evenly spaced across the ceiling, which gives flat light and puts bright spots in the middle of rooms where nobody stands.</p>
            <p>Since we're replacing every fitting anyway, it's worth thinking about where the light should actually go. Over benches rather than centred on the kitchen ceiling, so you aren't standing in your own shadow while chopping. In front of wardrobes rather than behind you. Washing walls rather than lighting floors.</p>
            <p>It costs very little extra to move a fitting while the ceiling is already open, and the difference in how a room feels is much larger than the difference in the bill.</p>

            <h3>Get the Colour Temperature Right</h3>
            <p>Around 3000K reads as warm and suits living areas and bedrooms. Around 4000K reads neutral and works better in kitchens, laundries, bathrooms and garages where you want to see detail.</p>
            <p>The one thing worth avoiding is mixing temperatures within a single open-plan space. It reads as a mistake rather than a choice, and it's very obvious once you notice it. Some fittings are switchable, so the decision can be made on site.</p>

            <h3>If You Want Dimming, Say So Before We Quote</h3>
            <p>LED dimming is where these jobs most often go wrong. Not every LED downlight is dimmable, and among those that are, not every one works with every dimmer. The wrong combination gives you flicker, buzzing, a narrow dimming range, or lights that refuse to go below half.</p>
            <p>There's also a specific trap: replacing halogens with LEDs on an existing dimmer usually won't work, because old dimmers were built for a much higher minimum load than LEDs draw. That dimmer needs replacing along with the lights.</p>
            <p>None of this is difficult if it's planned. It's only a problem when dimming gets mentioned after the fittings are already chosen.</p>

            <h3>Is It Worth Doing</h3>
            <p>If you have more than about fifteen halogen downlights and you're still living in the house in three years, yes, comfortably. The lighting saving alone is meaningful, and the insulation improvement is the part most people underestimate.</p>
            <p>If you have a handful of halogens in a room you rarely use, it's less compelling on economics alone, though it's still worth doing when you're having other work done and someone is already in the roof space.</p>
        `,
        cta: {
            heading: 'Get a Downlight Replacement Quote',
            description:
                'Full fitting replacement, sensible layout, and dimming specified properly from the start. Free quotes across Adelaide\'s north-east.',
            linkText: 'Book a Downlight Quote',
            href: '/downlight-installation-adelaide',
        },
    },
    {
        slug: 'renovation-electrical-planning-adelaide',
        title: 'Planning the Electrical for a Renovation',
        excerpt:
            'Almost every expensive electrical regret in a renovation comes from the same cause. The layout was decided after the walls were closed up.',
        date: '2026-08-13',
        author: 'Justin',
        category: 'Renovations',
        image: '/images/bathroom_renovation.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>Renovation electrical work is cheap to get right and expensive to get wrong, and the difference between the two is almost entirely about timing.</p>
            <p>While the walls are open, moving a powerpoint costs nothing. Adding a light point costs very little. Running strip lighting into joinery is a five-minute decision. Once the plaster is on and the cabinetry is in, every one of those becomes a cutting, patching and repainting exercise, and some become impossible.</p>
            <p>So the single most useful thing in this post is this: talk to your electrician at planning stage, before demolition. That conversation costs you nothing and it's where most of the value sits.</p>

            <h3>The Two Visits, and Why the Sequence Matters</h3>
            <p>Renovation electrical work happens in two distinct stages.</p>
            <p><strong>Rough-in</strong> happens after demolition and framing, before plaster and cabinetry. All the cable gets run, outlet and switch positions get set out, light points get located, appliance circuits get pulled in, and anything going into joinery gets prepared. This is when the layout becomes permanent.</p>
            <p><strong>Fit-off</strong> happens after plaster, painting, flooring and cabinetry are done. Outlets, switches and fittings get installed and terminated, appliances get connected, and the whole lot gets tested and certified.</p>
            <p>In between, the electrician is off site and other trades work. The failure mode we see most is being called in after the cabinetry is already installed, which is how you end up with a powerpoint behind a fixed panel, or an isolation switch you have to empty a cupboard to reach.</p>

            <h3>Decisions Worth Making Before Rough-In</h3>
            <ul>
                <li><strong>Where the furniture actually goes.</strong> Bed positions decide bedside outlets and switch locations. Sketch the furniture layout, not just the walls.</li>
                <li><strong>What appliances you're buying.</strong> Particularly the cooktop. Induction almost always needs its own dedicated circuit, and finding that out on delivery day is a genuinely bad week.</li>
                <li><strong>Whether you want dimming.</strong> It changes the fittings, the dimmer and sometimes the wiring. Cheap to plan, expensive to retrofit.</li>
                <li><strong>Any feature or strip lighting.</strong> Cove details need to be set out with the ceiling. Joinery lighting needs the cabinetmaker to allow for the channel and the cable entry.</li>
                <li><strong>Where the LED drivers will live.</strong> They fail eventually, and if one is buried above a sealed ceiling, replacing it means cutting the ceiling open.</li>
                <li><strong>Data, TV and wall-mounted screens.</strong> Cable behind the screen instead of down the wall is a rough-in decision only.</li>
                <li><strong>Outdoor power and lighting.</strong> Alfresco, pergola, garden and shed. Much easier before the paving goes down.</li>
                <li><strong>Future proofing.</strong> An EV charger circuit, or at least the board capacity for one, is far cheaper now than in three years.</li>
            </ul>

            <h3>What Opening Up an Older House Tends to Reveal</h3>
            <p>Across the 1960s to 1980s housing stock in Adelaide's north-east, the list is fairly predictable.</p>
            <ul>
                <li>A switchboard with no spare capacity for the circuits the renovation needs</li>
                <li>Rewireable fuses, or no safety switch protection at all</li>
                <li>Wiring extended informally over the years, sometimes without junction boxes</li>
                <li>Old rubber-insulated cable that has gone brittle and shouldn't be reused</li>
                <li>Undersized circuits feeding areas about to gain a lot more load</li>
                <li>Halogen transformers sitting loose in the ceiling space</li>
                <li>Asbestos-containing materials in older switchboard panels, which changes how the work is handled</li>
            </ul>
            <p>None of these are disasters. But they're much better discovered at quote stage than mid-job, which is why an electrician who talks about them upfront is telling you something useful rather than hedging.</p>

            <h3>Renovating Triggers Current Standards</h3>
            <p>Here's the part that catches people out on budget. An existing installation is generally allowed to remain as it was installed. New and altered work has to meet current standards.</p>
            <p>In practice that means when you renovate a kitchen or bathroom, the circuits serving it need current-standard protection, including RCD protection. Bathrooms additionally have zone requirements governing what fittings can go where relative to the bath and shower, which is why a heat lamp or a light can't simply go wherever it looks best.</p>
            <p>Often this is the moment a house finally gets the safety switch protection it should have had for thirty years, which is a good outcome. But it does mean a renovation sometimes triggers a switchboard upgrade, and you want that in the budget from the start rather than as a variation in week three.</p>

            <h3>If You're the Builder Rather Than the Homeowner</h3>
            <p>The same points apply, with one addition. The thing that actually determines whether the electrical trade helps or hurts your program isn't the quote, it's whether they turn up on the day they said.</p>
            <p>A rough-in that slips three days pushes the plasterer, which pushes the painter, which pushes handover. That cost never appears in the electrical quote but it's far larger than the difference between two quotes. It's worth weighting reliability accordingly.</p>
        `,
        cta: {
            heading: 'Planning a Renovation?',
            description:
                'Get us in at planning stage, before demolition. We mark up the layout, flag anything that needs a bigger circuit or a board upgrade, and coordinate with your builder and cabinetmaker.',
            linkText: 'Talk to Us About Your Renovation',
            href: '/renovation-electrician-adelaide',
        },
    },
    {
        slug: 'asbestos-switchboard-adelaide',
        title: 'Asbestos in Your Switchboard: How to Tell, and What It Means',
        seoTitle: 'Asbestos Switchboard Adelaide | JPD',
        metaDescription:
            `Asbestos backing panels are common in Adelaide boards built before the mid-1980s. How to spot one, why it isn't an emergency, what it changes.`,
        excerpt:
            'Plenty of Adelaide switchboards have an asbestos backing panel behind the fuses. Here\'s how to tell, why it isn\'t a reason to panic, and what it changes about replacing the board.',
        date: '2026-08-31',
        author: 'Justin',
        category: 'Safety',
        image: '/images/switchboard_asbestos_ceramic_fuses.webp',
        gallery: [
            {
                src: '/images/switchboard_asbestos_warning_sticker.webp',
                alt: 'Warning contains asbestos sticker applied to the brown fibrous backing panel inside a switchboard',
                caption:
                    'The label an electrician applies once a panel has been identified. The brown fibrous board behind it\'s the panel itself.',
            },
            {
                src: '/images/switchboard_asbestos_behind_modern_board.webp',
                alt: 'Modern switchboard with breakers, RCD and surge protection above a brown asbestos backing panel carrying a warning sticker',
                caption:
                    'A tidy modern board with an RCD, surge protection and solar connected. The panel behind the meter is still the original asbestos one.',
            },
            {
                src: '/images/switchboard_full_no_spare_ways.webp',
                alt: 'Switchboard packed with breakers and hand-written circuit labels including one marked with question marks',
                caption:
                    'No spare ways, and a circuit labelled "?SHED?" because nobody was sure. Both are reasons a board gets replaced.',
            },
            {
                src: '/images/switchboard_asbestos_backing_wide.webp',
                alt: 'The same full switchboard seen wider, showing the meter and the dark backing panel it\'s all mounted on',
                caption:
                    'The same board from further back. Two more enclosures have been added beside it over the years, and the whole lot is mounted on the original dark backing panel.',
            },
            {
                src: '/images/switchboard_retrofit_safety_switch.webp',
                alt: 'Older commercial switchboard with a single safety switch added later in a separate yellow enclosure below the board',
                caption:
                    'An older commercial board with no RCD protection of its own. One safety switch was added later, in its own box bolted underneath.',
            },
            {
                src: '/images/switchboard_too_close_to_pool.webp',
                alt: 'Switchboard cabinet mounted on a wall directly beside a swimming pool',
                caption:
                    'A switchboard on the wall beside the pool. The wiring rules keep electrical equipment out of the zone around the water, and this is well inside it.',
            },
        ],
        content: `
            <h3>Why This Matters to You</h3>
            <p>If your house was built before the mid-1980s, there's a reasonable chance the switchboard has an asbestos backing panel behind the fuses. That isn't a dramatic statement, it's just what boards were made of at the time.</p>
            <p>The two things worth knowing are that it almost certainly isn't doing you any harm right now, and that it does change how any work on that board has to be done. Between those two facts sits a lot of unnecessary worry, and occasionally some unnecessary spending.</p>
            <p>These are real boards from around Adelaide. Here's what to look for and what it actually means.</p>

            <h3>What the Asbestos Actually Is</h3>
            <p>It's the panel. Not the wiring, not the fuses, not anything you touch.</p>
            <p>Switchboards need a backing board that's rigid, fireproof and doesn't conduct electricity. From roughly the 1930s to the mid-1980s, the material that did all three cheaply was an asbestos-cement composite. In Australia the common trade names were Zelemite and Ausbestos, and the boards are typically a dark brown or black fibrous sheet, noticeably heavier and harder than timber.</p>
            <p>The fuse carriers, the breakers and the meters are all bolted to the front of that panel. So the asbestos sits behind everything, which is precisely why people who have looked at their own board a hundred times have never seen it.</p>

            <h3>How to Tell Without Opening Anything</h3>
            <p>To be clear first: don't take the cover off your switchboard to check. The incoming connections inside are live whatever position your main switch is in. There's nothing you can determine by looking that's worth that.</p>
            <p>What you can go on:</p>
            <p><strong>The age of the house.</strong> This is the strongest single indicator. Pre-1980s and original board, assume it's possible. Built after about 1990, very unlikely.</p>
            <p><strong>Ceramic fuses.</strong> If the board has white ceramic fuse carriers that pull out, rather than switches that flick, it's old enough. The board in the photo at the top of this page is a good example: two dial-face meters still marked as property of the Electricity Trust of South Australia, an off-peak time switch, a row of rewireable ceramic fuses, and a modern safety switch bolted on beside them decades later.</p>
            <p><strong>A warning sticker.</strong> If an electrician has been in the board and identified a panel, they will normally label it, and that label often ends up somewhere visible on the front. It looks like the one in the second photo. Finding one is good news, not bad. It means somebody has already checked and recorded it.</p>
            <p><strong>Ask.</strong> Any electrician who opens your board will tell you, and it costs nothing to ask when one is there for something else.</p>

            <h3>A Modern-Looking Board Can Still Have It</h3>
            <p>This is the one that surprises people, and the third photo is the reason it's worth its own section.</p>
            <p>That board has a full row of modern breakers, a proper safety switch, surge protection and solar connected through its own main switch. Printed labels, everything tidy. By every rule of thumb people use, it reads as a modern board.</p>
            <p>The brown panel below it, the one carrying the asbestos sticker, is the original. What happened here's completely normal: at some point the protective devices were replaced and mounted in a new enclosure, but the backing panel the meter sits on was left alone because there was no reason to disturb it.</p>
            <p>So the useful version of the rule isn't "old board, asbestos". It is "old house, possible asbestos, regardless of how new the breakers look".</p>

            <h3>It isn't Making Your House Dangerous</h3>
            <p>Asbestos is hazardous when its fibres are airborne and get breathed in. That requires the material to be broken, drilled, cut or abraded.</p>
            <p>An intact backing panel sitting inside a closed enclosure, doing nothing, isn't releasing fibres. It has most likely been there for fifty years with your family living around it, which is the situation for a very large number of Adelaide homes and isn't the thing to lose sleep over.</p>
            <p>There's no obligation to remove it because it exists. Nobody needs to move out. If your board is otherwise sound and doing its job, the honest answer is often to leave it alone.</p>
            <p>The risk isn't the panel. It's the panel being disturbed by someone who didn't know it was there.</p>

            <h3>When It Actually Matters</h3>
            <p>It matters the moment somebody works on that board.</p>
            <p>Drilling a new hole to mount a breaker, cutting the panel to fit a larger enclosure, or unbolting devices off it all have the potential to release fibres. That's the point at which an asbestos panel stops being a historical curiosity and becomes a control measure, and it's why an electrician who spots one will tell you before quoting rather than after.</p>
            <p>The practical consequence is that adding to an old asbestos-backed board is often not sensible. Once the panel has to be disturbed anyway, replacing the whole board is usually the better value and it's certainly the better outcome, because you end up with a board that has RCD protection on every circuit rather than an old one with a newer bit stuck to it.</p>

            <h3>What Replacing One Involves</h3>
            <p>More than a straight swap, and it's worth knowing why before you compare quotes.</p>
            <p><strong>The supply has to be isolated.</strong> The incoming main is live and isn't something that can be switched off from inside the house, so the service fuse has to be pulled or the supply otherwise isolated, and reconnection arranged with SA Power Networks. That's a scheduling dependency rather than a technical difficulty, and it's the main reason this work can't always happen on the day you ring.</p>
            <p><strong>The panel is removed under controls.</strong> Kept intact where possible, wetted down rather than cut, sealed and disposed of properly. The aim is to take the whole sheet out in one piece, not to work around it.</p>
            <p><strong>Everything transfers to a new enclosure.</strong> Circuits are identified, tested and reconnected onto individual protection, and the board is labelled properly. On a board with hand-written labels this is frequently where you find out that a circuit nobody could name feeds the shed.</p>
            <p><strong>You're without power for part of the day.</strong> Usually most of it. Worth planning around if anyone works from home or there's a full freezer.</p>
            <p>Our <a href="/blog/switchboard-upgrade-what-actually-happens/">guide to what happens during a switchboard upgrade</a> covers the process in more detail, and the <a href="/switchboard-upgrade-adelaide/">switchboard upgrades</a> page covers what we do.</p>

            <h3>Three Other Reasons Boards Get Replaced</h3>
            <p>Asbestos is rarely the only thing wrong with a board of that age, and on its own it's rarely the reason someone finally does something. These three come up constantly.</p>
            <p><strong>No spare ways.</strong> The board in the fourth photo is physically full. That matters the day you want solar, an EV charger, ducted air conditioning or a pool, because the new circuit has nowhere to go and a straightforward job quietly becomes a board replacement. Worth checking before you buy the equipment. Notice also the circuit labelled with question marks, because somebody wasn't sure what it fed. That's its own argument.</p>
            <p><strong>No RCD protection, or one device covering everything.</strong> The fifth photo is an older commercial board with a single safety switch added later in its own yellow box bolted underneath. That retrofit is a genuine improvement on nothing and it was the right call at the time. It's still one device standing in for what should be protection on every circuit. Older safety switches are also worth testing properly rather than trusting: pressing the test button proves the button works, not that the device will operate fast enough during a real fault, and that difference only shows up on a meter. Our <a href="/rcd-testing-safety-switches-adelaide/">safety switches and RCD testing</a> page covers what that test involves.</p>
            <p><strong>The board is in the wrong place.</strong> The last photo is a switchboard mounted on the wall directly beside a swimming pool. The wiring rules set zones around a pool where electrical equipment either can't be installed or has to meet specific requirements, and the clearance involved for a switchboard is 3.5 metres. This one is well inside that. The fix is relocation, which isn't cheap, and it's the sort of defect a homeowner has no way of recognising because there's nothing visibly wrong with the board itself.</p>

            <h3>What To Do</h3>
            <p>If you think you have an asbestos-backed board and nothing is wrong with it, do nothing urgently. Leave the cover on, don't go looking, and mention it the next time an electrician is there.</p>
            <p>Deal with it when you're doing something else anyway. A renovation, solar, an EV charger, air conditioning or a pool all need capacity and protection an old board may not have, and doing the board at the same time means paying for access once.</p>
            <p>Deal with it now if you can smell hot plastic, see any browning or scorching, or the board is warm to the touch. That isn't about asbestos at all, it's heat, and heat is the one symptom that doesn't wait. We wrote up <a href="/blog/burnt-main-switch-tea-tree-gully/">what that looks like on a board in Tea Tree Gully</a>.</p>
            <p>And if you just want to know, send a photo of the front of your board. That's usually enough to tell you roughly what era it's from and whether it's worth a proper look, and it costs nothing.</p>
        `,
        cta: {
            heading: 'Not Sure What\'s Behind Your Board?',
            description:
                'Send a photo of the front of your switchboard and we\'ll tell you honestly whether it needs attention now, later, or not at all. No obligation and no scare tactics.',
            linkText: 'Get Your Switchboard Assessed',
            href: '/contact',
        },
    },
    {
        slug: 'switchboard-full-no-spare-ways-adelaide',
        title: 'Your Switchboard Is Full. Here\'s What That Actually Blocks',
        seoTitle: 'Switchboard Full? No Spare Ways | JPD',
        metaDescription:
            `A full switchboard is the reason a simple EV charger or solar job turns into a board replacement. How to check before you buy the equipment.`,
        excerpt:
            `Nobody rings an electrician because their switchboard is full. They ring because they want an EV charger, or solar, or ducted air conditioning, and find out the hard way that there's nowhere to put it.`,
        date: '2026-09-01',
        author: 'Justin',
        category: 'Switchboards',
        image: '/images/switchboard_full_no_spare_ways.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>Nobody books an electrician because their switchboard is full. They book because they have just bought an electric car, or signed a contract for solar and a battery, or decided this is the summer the ducted air conditioning goes in. The board being full is what they find out afterwards, usually at the quoting stage, and usually as a number considerably larger than they expected.</p>
            <p>This is the most avoidable expensive surprise in domestic electrical work. Checking takes a few minutes and can be done before you commit to anything.</p>

            <h3>What "Full" Actually Means</h3>
            <p>A switchboard holds a fixed number of what the trade calls ways, sometimes poles. Each circuit breaker occupies one, and an RCD or a combined RCBO occupies one or two depending on the type. When every position is taken, the board is full.</p>
            <p>Two things surprise people here. The first is that a board can look like it has room and have none, because the empty-looking space isn't usable mounting rail. The second is the opposite: a board can look completely packed and still have a way or two free behind the cover.</p>
            <p>So the honest answer to "is my board full" is that you can't reliably tell from a photo, and neither can we. Someone has to take the cover off, and that isn't a job for the homeowner. What you can do from the outside is count the switches. If you're seeing a solid row with no gaps at all, assume it's full until told otherwise.</p>

            <h3>Why Boards Fill Up</h3>
            <p>A board is specified for the house as it was built. Every addition since has taken a way: the air conditioner, the second oven, the pool pump, the shed, the spa, the solar inverter, the hot water changeover. Individually each was a small job. Collectively they used up the board.</p>
            <p>The houses this catches hardest are the ones from the 1980s and early 90s, which were built with enough capacity for their era and have since absorbed thirty years of additions. In the newer estates the board is usually larger to begin with but the houses draw more, so the pressure arrives from the other direction.</p>

            <h3>What a Full Board Blocks</h3>
            <p>Every one of these needs its own circuit, which means its own way in the board:</p>
            <ul>
                <li>An <a href="/ev-charger-installation-adelaide/">EV charger</a>, which needs a dedicated circuit and appropriate RCD protection, and can't share with anything</li>
                <li>Solar, and a battery, which each need their own protection and isolation</li>
                <li>Ducted or added-on air conditioning</li>
                <li>A heat pump or changed-over hot water service</li>
                <li>A shed or granny flat, which usually means a submain and a sub-board</li>
                <li>A pool or spa, which brings its own requirements on top of the circuit</li>
            </ul>
            <p>This is why the same EV charger install is quoted at wildly different prices at different houses. The charger is the same. Whether your board can accept it isn't.</p>

            <h3>The Fixes That Look Cheap</h3>
            <p>When a board is full there are ways to squeeze another circuit in, and some of them are legitimate in the right situation. The problem is that they get used as a way to avoid a conversation about the board.</p>
            <p>Slimline or tandem breakers fit two circuits into one physical way. They have their place. They also make an already crowded board harder to work on, and they do nothing about the fact that the board is at its limit for a reason.</p>
            <p>A sub-board fed from the main board is a proper solution when the load is genuinely somewhere else, like a shed or a workshop. It isn't a proper solution when it's being used to avoid replacing a main board that should have been replaced anyway.</p>
            <p>Being blunt about the incentive: the cheapest quote for adding a circuit to a full board is usually the one that has decided not to mention the board. That difference shows up later, either as a second job or as a compromise nobody explained to you.</p>

            <h3>Full Is Rarely the Only Thing</h3>
            <p>A board that has run out of room has usually been in service a long time, and age brings company. The same board is often the one with no <a href="/rcd-testing-safety-switches-adelaide/">RCD protection</a> on the lighting circuits, or a single safety switch covering the entire house, or circuits nobody has ever labelled properly.</p>
            <p>If it's old enough, it may also have an asbestos backing panel, which changes how the work has to be handled and is worth understanding before you get quotes. That's covered properly in our guide to <a href="/blog/asbestos-switchboard-adelaide/">asbestos in your switchboard</a>.</p>
            <p>The practical consequence is that "I need one more circuit" and "this board is due" are frequently the same conversation, and it's better to have it once.</p>

            <h3>Check Before You Buy the Equipment</h3>
            <p>The order that saves people money is straightforward, and almost nobody follows it.</p>
            <p>Have the board looked at <em>before</em> you sign for the solar, order the charger, or book the air conditioning. Not after. A ten minute look tells you whether the job you're planning is the job you're planning, or whether it comes with a board replacement attached.</p>
            <p>It also means that if the board does need doing, you can decide how to sequence it. Doing the board and the new circuit together is meaningfully cheaper than doing the board six months later and paying to disturb the same work twice.</p>

            <h3>What You Get Beyond the Space</h3>
            <p>Replacing a full board isn't only about making room. The same job brings the protection up to current standards, gives every circuit proper RCD coverage, and leaves you with a board where the labelling actually reflects what the circuits do.</p>
            <p>It also leaves spare ways, which is the part worth insisting on. A board replaced with exactly enough room for today is a board you'll be having this conversation about again. Ask for headroom.</p>
            <p>What's involved, and what moves the price, is set out on our <a href="/switchboard-upgrade-adelaide/">switchboard upgrade</a> page, and the other reasons a board reaches the end of its life are covered in <a href="/blog/signs-you-need-switchboard-upgrade/">the warning signs guide</a>.</p>

            <h3>The Short Version</h3>
            <p>If you're planning anything that needs its own circuit, get the board checked first. It's a short look that either clears the way or saves you from finding out at the worst possible moment. Either answer is worth having before you spend the money.</p>
        `,
        cta: {
            heading: 'Planning Solar, an EV Charger or Air Conditioning?',
            description:
                'Have the switchboard checked before you commit to the equipment. It takes a few minutes and it either clears the way or tells you what else is involved, while you can still plan around it.',
            linkText: 'Book a Switchboard Check',
            href: '/contact',
        },
    },
];
