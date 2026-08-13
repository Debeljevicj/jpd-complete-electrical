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
            <p>But the quotes people get vary enormously for what looks like the same job, and the reason is almost never the charger. It is the switchboard, the distance from the board to the car, and whether the house can carry the load at all. Understanding those three things before you ring anyone will save you a lot of confusion.</p>

            <h3>The Load Is the Real Story</h3>
            <p>A typical single-phase home charger draws around 32 amps continuously, for hours. That is a fundamentally different kind of load to anything else in a house. A kettle draws a lot but for two minutes. An EV charger draws a lot all night.</p>
            <p>So the first question is not where the charger goes, it is whether your switchboard and your supply can carry it alongside everything else. We look at the main switch rating, the consumer mains cable, what is already connected, and whether there is physical space in the board for another circuit.</p>
            <p>In the newer suburbs like Greenwith and Golden Grove, where a lot of homes already have ducted air conditioning, an induction cooktop and sometimes a pool pump, that check genuinely matters. In the older suburbs like Hope Valley and Holden Hill, the answer is often that the board needs replacing before a charger goes anywhere near it.</p>

            <h3>Load Management Is Usually Cheaper Than a Supply Upgrade</h3>
            <p>If the numbers are tight, most people assume the answer is upgrading the supply. Usually it is not, because that is expensive and slow.</p>
            <p>The better answer is normally load management. Most modern chargers can monitor what the rest of the house is drawing and throttle themselves accordingly. In practice that means charging at full speed for most of the night and automatically backing off for the twenty minutes when the oven and the air conditioning are both running.</p>
            <p>You barely notice it, because the car is sitting there for ten hours and only needs a few of them. It is a far better use of money than upgrading the incoming supply to handle a peak that happens rarely.</p>

            <h3>Do Not Pay for Three Phase Without Checking the Car</h3>
            <p>This is the mistake that costs people the most money for nothing.</p>
            <p>Most homes in our area are single phase, which caps a wall charger at around 7 kW. That adds roughly 40 kilometres of range per hour. An overnight charge is well over 300 kilometres, which is more than almost anyone drives in a day.</p>
            <p>If you already have three-phase supply, a three-phase charger can go to around 22 kW. But here is the part nobody mentions at the dealership: plenty of electric vehicles only accept single-phase AC charging, regardless of what the charger can deliver. On those cars, a 22 kW charger charges at exactly the same speed as a 7 kW one.</p>
            <p>Check your vehicle's onboard AC charger rating before spending anything on three phase. And upgrading a single-phase house to three phase purely to charge faster is almost never worth it, because it solves a problem that does not exist.</p>

            <h3>What a Compliant Install Actually Involves</h3>
            <ul>
                <li>A dedicated circuit from the switchboard, sized for the charger and for the length of the run</li>
                <li>RCD protection suitable for EV charging, which means a Type B, or a Type A where the charger itself provides 6 mA DC fault detection</li>
                <li>A correctly rated circuit breaker, and board space to fit it</li>
                <li>Notification to SA Power Networks where that is required</li>
                <li>Full testing and a Certificate of Compliance for Electrical Work</li>
            </ul>
            <p>That DC fault detection point is worth understanding, because it is a genuine technical requirement rather than an upsell. EV charging can produce smooth DC fault currents that a standard Type AC or Type A RCD will not detect, and which can actually blind that RCD to other faults. Either the RCD handles it or the charger does. Skipping it is not an option.</p>

            <h3>Where to Put It</h3>
            <p>Two things decide this. Where the car actually parks, and where the charge port is on the vehicle. A charger mounted on the wrong side of a double garage means dragging the cable around the car every single night, which gets old inside a week.</p>
            <p>The other factor is the distance from the switchboard, and this is the single biggest driver of the install price. A charger on the garage wall directly behind the board is a short run in modest cable. The same charger at a detached garage down a Fairview Park or Vista block is a long run in much heavier cable, and sometimes trenching. The difference between those two jobs is large.</p>
            <p>If the charger is going outside, it needs to be rated for outdoor use and ideally positioned so it is not sitting in the weather more than it has to.</p>

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
            <p>If your house was built or renovated between roughly 1995 and 2010, you very likely have halogen downlights, and there is a good chance nobody has ever told you what they are costing you.</p>
            <p>A single halogen downlight draws around 50 watts. Thirty of them, which is not unusual in a family home across Golden Grove, Greenwith or Gulfview Heights, is 1,500 watts. That is more than a decent air conditioner, running every evening.</p>
            <p>But the power bill is only half of it. The bigger issue is heat, and what that heat has done to your insulation.</p>

            <h3>The Insulation Problem Nobody Mentions</h3>
            <p>Halogen downlights run hot. Genuinely hot, hot enough that older fittings needed a physical clearance from insulation to avoid becoming a fire risk.</p>
            <p>So when the insulation was installed, it was pulled back in a ring around every single light. Go into your roof space and look. In a house with thirty downlights you have thirty holes in the insulation layer, each one a direct path for heat to escape in winter and pour in during summer.</p>
            <p>You paid for insulation, and then cut holes in it. The heating and cooling cost of that is real, and it is quietly larger than the lighting bill it came with.</p>
            <p>It is also a live fire risk in houses where somebody has since topped up the insulation without knowing about the clearance requirement, and simply laid it over the top. That does happen, and it is one of the things we look for when we are in a roof space.</p>

            <h3>What Changes With LED</h3>
            <p>An LED downlight producing similar light draws somewhere between 7 and 12 watts. That is roughly an 80 per cent reduction in your lighting load.</p>
            <p>More importantly, LED fittings rated and marked for insulation contact can be covered directly. That means the insulation can be laid as a continuous layer instead of thirty separate cut-outs, which restores the thermal performance you originally paid for.</p>
            <p>Modern LED downlights also last far longer, typically tens of thousands of hours against a couple of thousand for halogen, so the constant ladder work to replace blown globes stops as well.</p>

            <h3>Why Swapping the Globe Does Not Work</h3>
            <p>You can buy an LED lamp that fits into an existing halogen can. We do not recommend it, and here is the honest reason.</p>
            <p>The original can is still in your ceiling, so the insulation clearance requirement is still there. You have not solved the insulation problem at all. The original transformer is also still there, and halogen transformers were designed for a much higher load than an LED draws. That mismatch is where flickering, buzzing and premature failure come from.</p>
            <p>So you spend money, keep two of the three problems, and often introduce a new one. Replacing the complete fitting costs more up front and is the version that actually delivers the outcome.</p>

            <h3>Do the Layout Properly While You Are There</h3>
            <p>Most downlight layouts we come across were done as a grid. Evenly spaced across the ceiling, which gives flat light and puts bright spots in the middle of rooms where nobody stands.</p>
            <p>Since we are replacing every fitting anyway, it is worth thinking about where the light should actually go. Over benches rather than centred on the kitchen ceiling, so you are not standing in your own shadow while chopping. In front of wardrobes rather than behind you. Washing walls rather than lighting floors.</p>
            <p>It costs very little extra to move a fitting while the ceiling is already open, and the difference in how a room feels is much larger than the difference in the bill.</p>

            <h3>Get the Colour Temperature Right</h3>
            <p>Around 3000K reads as warm and suits living areas and bedrooms. Around 4000K reads neutral and works better in kitchens, laundries, bathrooms and garages where you want to see detail.</p>
            <p>The one thing worth avoiding is mixing temperatures within a single open-plan space. It reads as a mistake rather than a choice, and it is very obvious once you notice it. Some fittings are switchable, so the decision can be made on site.</p>

            <h3>If You Want Dimming, Say So Before We Quote</h3>
            <p>LED dimming is where these jobs most often go wrong. Not every LED downlight is dimmable, and among those that are, not every one works with every dimmer. The wrong combination gives you flicker, buzzing, a narrow dimming range, or lights that refuse to go below half.</p>
            <p>There is also a specific trap: replacing halogens with LEDs on an existing dimmer usually will not work, because old dimmers were built for a much higher minimum load than LEDs draw. That dimmer needs replacing along with the lights.</p>
            <p>None of this is difficult if it is planned. It is only a problem when dimming gets mentioned after the fittings are already chosen.</p>

            <h3>Is It Worth Doing</h3>
            <p>If you have more than about fifteen halogen downlights and you are still living in the house in three years, yes, comfortably. The lighting saving alone is meaningful, and the insulation improvement is the part most people underestimate.</p>
            <p>If you have a handful of halogens in a room you rarely use, it is less compelling on economics alone, though it is still worth doing when you are having other work done and someone is already in the roof space.</p>
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
            <p>So the single most useful thing in this post is this: talk to your electrician at planning stage, before demolition. That conversation costs you nothing and it is where most of the value sits.</p>

            <h3>The Two Visits, and Why the Sequence Matters</h3>
            <p>Renovation electrical work happens in two distinct stages.</p>
            <p><strong>Rough-in</strong> happens after demolition and framing, before plaster and cabinetry. All the cable gets run, outlet and switch positions get set out, light points get located, appliance circuits get pulled in, and anything going into joinery gets prepared. This is when the layout becomes permanent.</p>
            <p><strong>Fit-off</strong> happens after plaster, painting, flooring and cabinetry are done. Outlets, switches and fittings get installed and terminated, appliances get connected, and the whole lot gets tested and certified.</p>
            <p>In between, the electrician is off site and other trades work. The failure mode we see most is being called in after the cabinetry is already installed, which is how you end up with a powerpoint behind a fixed panel, or an isolation switch you have to empty a cupboard to reach.</p>

            <h3>Decisions Worth Making Before Rough-In</h3>
            <ul>
                <li><strong>Where the furniture actually goes.</strong> Bed positions decide bedside outlets and switch locations. Sketch the furniture layout, not just the walls.</li>
                <li><strong>What appliances you are buying.</strong> Particularly the cooktop. Induction almost always needs its own dedicated circuit, and finding that out on delivery day is a genuinely bad week.</li>
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
                <li>Old rubber-insulated cable that has gone brittle and should not be reused</li>
                <li>Undersized circuits feeding areas about to gain a lot more load</li>
                <li>Halogen transformers sitting loose in the ceiling space</li>
                <li>Asbestos-containing materials in older switchboard panels, which changes how the work is handled</li>
            </ul>
            <p>None of these are disasters. But they are much better discovered at quote stage than mid-job, which is why an electrician who talks about them upfront is telling you something useful rather than hedging.</p>

            <h3>Renovating Triggers Current Standards</h3>
            <p>Here is the part that catches people out on budget. An existing installation is generally allowed to remain as it was installed. New and altered work has to meet current standards.</p>
            <p>In practice that means when you renovate a kitchen or bathroom, the circuits serving it need current-standard protection, including RCD protection. Bathrooms additionally have zone requirements governing what fittings can go where relative to the bath and shower, which is why a heat lamp or a light cannot simply go wherever it looks best.</p>
            <p>Often this is the moment a house finally gets the safety switch protection it should have had for thirty years, which is a good outcome. But it does mean a renovation sometimes triggers a switchboard upgrade, and you want that in the budget from the start rather than as a variation in week three.</p>

            <h3>If You Are the Builder Rather Than the Homeowner</h3>
            <p>The same points apply, with one addition. The thing that actually determines whether the electrical trade helps or hurts your program is not the quote, it is whether they turn up on the day they said.</p>
            <p>A rough-in that slips three days pushes the plasterer, which pushes the painter, which pushes handover. That cost never appears in the electrical quote but it is far larger than the difference between two quotes. It is worth weighting reliability accordingly.</p>
        `,
        cta: {
            heading: 'Planning a Renovation?',
            description:
                'Get us in at planning stage, before demolition. We mark up the layout, flag anything that needs a bigger circuit or a board upgrade, and coordinate with your builder and cabinetmaker.',
            linkText: 'Talk to Us About Your Renovation',
            href: '/renovation-electrician-adelaide',
        },
    },
];
