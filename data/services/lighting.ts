import type { Service } from './types';

/** Lighting, fans and power outlets: the discretionary work people search for by name. */
export const lightingServices: Service[] = [
    {
        slug: 'downlight-installation-adelaide',
        name: 'Downlights & LED Lighting',
        icon: 'downlight',
        blurb: 'Halogen out, proper LED fittings in. Cooler ceilings, lower bills, and insulation that can sit where it should.',
        title: 'Downlight Installation Adelaide | LED Downlights | JPD',
        description: 'LED downlight installation and halogen replacement across Adelaide. Full fitting replacement, sensible layout, dimming done properly. Free quotes.',
        h1: 'LED Downlight Installation, Adelaide',
        intro:
            'We install LED downlights and replace old halogens across Adelaide\'s north-east. We change the whole fitting, not just the globe, which is the version that actually saves you money and takes the heat out of your ceiling.',
        sections: [
            {
                heading: 'Why Halogen Downlights Are Worth Replacing',
                body: [
                    'A halogen downlight draws around 50 watts and converts most of that into heat. Thirty of them in a house is 1,500 watts of lighting load and a ceiling space that gets genuinely hot when everything is on.',
                    'The heat is the real issue. Halogen fittings need clearance from insulation, which is why so many homes across Golden Grove, Greenwith and Gulfview Heights have insulation pulled back in a ring around every light. Those gaps are exactly where your heating and cooling escapes, so you paid for insulation and then cut holes in it.',
                    'An LED downlight does the same job on somewhere between 7 and 12 watts, runs cool, and where the fitting is rated for it, the insulation can sit right over the top. You get the lighting, the insulation works properly, and the running cost drops by roughly 80 per cent.',
                ],
            },
            {
                heading: 'Replace the Fitting, Not the Globe',
                body: [
                    'You can buy an LED globe that fits an existing halogen can. We do not recommend it and we will tell you why.',
                    'The old can is still there, so the insulation clearance requirement is still there, and the transformer feeding it is still a halogen transformer that may not run an LED cleanly. That combination is where flickering, buzzing and early failure come from. You have spent money and solved one problem out of three.',
                    'Replacing the complete fitting gives you a modern LED downlight with an integrated driver, rated for insulation contact where appropriate, with a proper beam angle and a consistent colour temperature across the house. It costs more up front and it is the version that actually works.',
                ],
            },
            {
                heading: 'Getting the Layout Right',
                body: [
                    'The most common mistake in a downlight job is treating it as a grid exercise. Evenly spaced lights across a ceiling give you flat, shadowless light and hot spots on the floor where nobody needs them.',
                    'Better is to light what people actually use. Downlights positioned over benches, in front of wardrobes, along walkways and washing the walls rather than lighting the middle of the room. In a kitchen that usually means a line above the bench edge rather than centred on the ceiling, so you are not standing in your own shadow while chopping.',
                    'Colour temperature matters too. Around 3000K is warm and suits living areas and bedrooms. Around 4000K is neutral and works in kitchens, laundries and garages. Mixing them across an open-plan area looks like a mistake, so we agree the plan before we start cutting holes.',
                ],
            },
            {
                heading: 'Dimming, Done Properly',
                body: [
                    'LED dimming is where a lot of jobs come unstuck. Not every LED downlight is dimmable, and of the ones that are, not all of them work with every dimmer. The wrong combination gives you flicker, buzzing, a limited dimming range, or lights that will not go below half.',
                    'We match the dimmer to the fitting rather than fitting whatever is in the van. If you want dimming, tell us at quote stage so the fittings we specify actually support it.',
                    'One thing worth knowing: replacing halogens with LEDs on an existing dimmer often will not work, because old dimmers were built for a much higher minimum load. That dimmer usually needs replacing along with the lights.',
                ],
            },
        ],
        priceFactors: [
            'The number of downlights and whether they are replacements in existing holes or new positions',
            'Whether there is accessible roof space above, since a raked ceiling or a second storey is a much bigger job',
            'The fittings themselves, which vary a lot in quality, and whether you want dimmable',
            'Whether existing halogen transformers need removing from the ceiling space',
            'Whether dimmers need replacing to suit the new fittings',
            'Any patching required if new positions mean cutting into a finished ceiling',
        ],
        faqs: [
            {
                question: 'How much does it cost to replace halogen downlights with LED?',
                answer: 'It depends on the count, the fittings you choose, and whether we can work from the roof space. A straight swap in a single-storey home with accessible roof space is the cheapest scenario. New positions, raked ceilings or upstairs rooms with no access above cost more. We quote per job after a look.',
            },
            {
                question: 'Can I just put LED globes in my existing halogen fittings?',
                answer: 'You can, but we do not recommend it. The old can and transformer stay in place, so you keep the insulation clearance requirement and often get flickering or buzzing from the mismatch between an old halogen transformer and an LED lamp. Replacing the complete fitting is the version that actually solves the problem.',
            },
            {
                question: 'How much will I save on power?',
                answer: 'A halogen downlight is around 50 watts and an equivalent LED is roughly 7 to 12. That is about an 80 per cent reduction on your lighting load. In a house with thirty downlights running four hours a day, the difference is noticeable on the bill and immediate.',
            },
            {
                question: 'Can insulation go over LED downlights?',
                answer: 'Over fittings specifically rated and marked for insulation contact, yes. Not all LED downlights are, so it depends on the product. It is one of the main reasons to change the whole fitting rather than the globe, because it lets the insulation be laid continuously instead of cut around every light.',
            },
            {
                question: 'What colour temperature should I choose?',
                answer: 'Around 3000K for living areas and bedrooms, which reads as warm. Around 4000K for kitchens, laundries, bathrooms and garages, which reads neutral and shows detail better. Some fittings are switchable so you can decide on site. Avoid mixing temperatures within one open-plan space.',
            },
            {
                question: 'Can you install downlights in a two-storey home or a raked ceiling?',
                answer: 'Usually yes, but it is a harder job than a standard single-storey ceiling because there may be no accessible space above. Fitting depth and cable routing become the constraints. We will tell you upfront if a particular position is not practical rather than promising it and discovering otherwise.',
            },
            {
                question: 'Why do my new LED lights flicker?',
                answer: 'Almost always a dimmer mismatch, or an LED lamp left running on an old halogen transformer. Old dimmers were designed for a much higher minimum load than LEDs draw. The fix is matching the dimmer to the fittings, which is why we specify both together.',
            },
        ],
        related: ['feature-lighting-led-strip-adelaide', 'ceiling-fan-installation-adelaide', 'renovation-electrician-adelaide'],
    },
    {
        slug: 'feature-lighting-led-strip-adelaide',
        name: 'Feature Lighting & LED Strip',
        icon: 'feature',
        blurb: 'Coves, under-bench, stair and joinery lighting, wired with the driver somewhere you can actually reach it.',
        title: 'Feature Lighting & LED Strip Installation Adelaide | JPD',
        description: 'Feature lighting and LED strip installation in Adelaide. Cove, under-bench, stair and joinery lighting, planned and wired properly. Free quotes.',
        h1: 'Feature Lighting and LED Strip Installation',
        intro:
            'Cove lighting, under-bench strip, stair and joinery lighting, and outdoor feature lighting. Done properly it makes a room. Done badly you see the dots, the joins and a driver that nobody can get to when it fails.',
        sections: [
            {
                heading: 'Where Feature Lighting Actually Works',
                body: [
                    'Feature lighting is at its best when you see the light and not the fitting. The places that consistently deliver that are:',
                ],
                bullets: [
                    'Cove and shadowline lighting washing a ceiling or wall, which lifts a room without adding a single visible fitting',
                    'Under-bench and under-cabinet strip in a kitchen, which is genuinely useful task lighting rather than decoration',
                    'Inside joinery, wardrobes, display shelving and bar areas',
                    'Stair nosing and step lighting, which is a safety feature that happens to look good',
                    'Under handrails, in pergolas and along retaining walls outside',
                    'Behind a bedhead, a mirror or a TV wall as indirect light',
                    'Uplighting on a feature wall, a void or a stairwell in the two-storey homes common through Greenwith and Golden Grove',
                ],
            },
            {
                heading: 'The Things That Make Strip Lighting Look Cheap',
                body: [
                    'Strip lighting either looks built-in or it looks stuck on, and the difference comes down to a handful of decisions made before installation.',
                    'Visible dots are the most common giveaway. That happens when a low-density strip is mounted too close to the surface it is lighting. Higher LED density and a diffuser, or simply more depth in the channel, fixes it.',
                    'The second is the aluminium channel. Strip mounted directly to timber or plasterboard has nowhere to lose its heat, which shortens its life and can discolour the surface. A channel gives you heat dissipation, a clean edge and a diffuser in one part.',
                    'The third is colour consistency. Cheap strip drifts in colour along its length and between reels, so two runs in the same kitchen end up visibly different. Buying decent product from one batch avoids a problem that cannot be fixed afterwards.',
                    'The fourth is the join. Every soldered or clipped join is a potential failure point and a visible dark spot. Planning the runs to minimise joins is part of the design, not an afterthought.',
                ],
            },
            {
                heading: 'Put the Driver Somewhere You Can Reach It',
                body: [
                    'This is the single most common thing we come back to fix on someone else\'s work. LED strip runs on a low-voltage driver, and drivers fail. Not often, but they do, and they fail long before the strip does.',
                    'If that driver has been buried above a plasterboard ceiling or sealed inside a bulkhead, replacing it means cutting the ceiling open. We have done that job for people more than once and nobody enjoys paying for it.',
                    'We put drivers in accessible locations. In a cupboard, above an accessible ceiling hatch, in a service void, or behind a removable panel. It takes slightly more planning at rough-in stage and it saves a genuinely miserable repair later.',
                ],
            },
            {
                heading: 'Planning It Into a Renovation',
                body: [
                    'Feature lighting is much cheaper and much better when it is designed in before the plaster goes up. Cove details need to be set out with the ceiling. Joinery lighting needs the cabinetmaker to allow for the channel and the cable entry. Stair lighting needs cable in before the treads go on.',
                    'If you are renovating, get us in at rough-in stage. We will mark up where the runs and the drivers go, coordinate with your builder and cabinetmaker, and come back for the fit-off once the surfaces are finished.',
                    'Retrofitting into a finished space is possible and we do it regularly, but the options narrow. Under-bench and inside-joinery runs are usually straightforward. A full cove detail in a finished ceiling generally is not.',
                ],
            },
        ],
        priceFactors: [
            'Total run length and the number of separate runs',
            'Whether it is going into new work at rough-in stage or being retrofitted into a finished space',
            'The strip and channel quality, which varies enormously and shows',
            'Whether the runs are switched together or separately, and whether they dim',
            'Driver placement and how accessible it needs to be made',
            'Whether the location is indoor or outdoor, since outdoor needs properly rated product',
        ],
        faqs: [
            {
                question: 'How much does LED strip lighting cost to install?',
                answer: 'It varies more than most electrical work because the scope varies so much. A single under-bench run in an existing kitchen is a small job. Cove lighting through a whole living area with dimming and multiple circuits is not. The two biggest factors are run length and whether we are working into new construction or retrofitting.',
            },
            {
                question: 'Why can I see dots in my LED strip?',
                answer: 'Low LED density, or the strip is mounted too close to the surface it is lighting. Higher density strip, a deeper channel, or a diffuser fixes it. It is a decision made before installation, not something that can be corrected afterwards.',
            },
            {
                question: 'Can LED strip be dimmed?',
                answer: 'Yes, but the strip, the driver and the dimmer all have to be compatible. It is not something to add later by swapping a switch. Tell us at quote stage if you want dimming so we specify the right combination from the start.',
            },
            {
                question: 'Where does the driver go?',
                answer: 'Somewhere accessible. Drivers fail eventually and if one is buried above a sealed ceiling, replacing it means cutting the ceiling open. We put them in cupboards, above access hatches, or behind removable panels. It is the detail that separates a good install from an expensive future problem.',
            },
            {
                question: 'Can you do feature lighting outdoors?',
                answer: 'Yes. Pergolas, handrails, retaining walls, steps and garden beds. It has to be properly rated product and outdoor-suitable cable, not indoor strip with silicone over it, which is a shortcut that fails in the first wet winter.',
            },
            {
                question: 'Can it be added to a finished house?',
                answer: 'Often, yes. Under-bench, inside-joinery and wardrobe runs are usually straightforward in an existing home. Full cove details in a finished plaster ceiling generally are not worth the disruption. We will tell you which category your idea falls into.',
            },
        ],
        related: ['downlight-installation-adelaide', 'renovation-electrician-adelaide', 'electrician-for-builders-adelaide'],
    },
    {
        slug: 'ceiling-fan-installation-adelaide',
        name: 'Ceiling Fan Installation',
        icon: 'fan',
        blurb: 'Fans installed on existing points or new ones, with a wall control instead of a remote that goes missing.',
        title: 'Ceiling Fan Installation Adelaide | Supply & Install | JPD',
        description: 'Ceiling fan installation across Adelaide. New points, existing light points, wall controls and bathroom exhaust fans. Licensed electrician.',
        h1: 'Ceiling Fan Installation, Adelaide',
        intro:
            'Ceiling fans installed onto existing light points or on new points where you actually want them, with a wall control fitted rather than leaving you dependent on a remote. We also handle replacements and bathroom exhaust fans.',
        sections: [
            {
                heading: 'Why Fans Are Still Worth It',
                body: [
                    'Air conditioning gets all the attention, but a ceiling fan running costs a few cents a day against a few dollars an hour for a split system. In an Adelaide summer, a fan turns a bearable night into a comfortable one for almost nothing.',
                    'Used together they work better than either alone. A fan moving air lets you run the aircon a couple of degrees warmer for the same comfort, which cuts the expensive part of the load significantly.',
                    'Most of the 1970s and 80s housing across Banksia Park, St Agnes, Redwood Park and Holden Hill was built with no fans at all, and those houses hold heat. Fitting fans in the bedrooms is one of the cheapest comfort improvements available on a house of that era.',
                ],
            },
            {
                heading: 'Existing Point or New Point',
                body: [
                    'Installing a fan onto an existing light point is the cheaper option, and where there is already a light in the right spot it is often the sensible one. You end up with a fan and light combination on the existing switch.',
                    'The catch is that the existing point is where somebody in 1978 decided the light should go, which is usually the centre of the ceiling. That is normally fine for a fan, but not always, particularly in a room that has since been extended or reconfigured.',
                    'A new point costs more because it needs a cable run and roof access, but it puts the fan where the bed actually is and lets us put in a separate wall control. If you are doing several rooms it is worth deciding room by room rather than applying one answer to the whole house.',
                    'One thing we check before quoting either way is whether the ceiling can carry the fan. A fan is a moving load and it needs a fixing into something structural, not just plasterboard. In most homes that means we need to get above it and fit a proper mounting.',
                ],
            },
            {
                heading: 'Wall Controls Versus Remotes',
                body: [
                    'Most fans now come with a remote, and most remotes end up lost, flat, or in another room. A wall control costs a little more to install and it is the version people are still happy with in three years.',
                    'Wall controls also handle the situation where a fan and light are on one existing switch drop, which otherwise means the light and fan cannot be operated independently without the remote.',
                    'If you want DC-motor fans, and they are worth it for the quietness and the lower running cost, note that they are almost always remote-controlled by design. Wall-mounted controllers exist for most brands and we will fit one if you want it.',
                ],
            },
            {
                heading: 'Bathroom and Laundry Exhaust',
                body: [
                    'Exhaust fans are the other half of this. A bathroom fan that is not actually clearing moisture is why you get mould on the ceiling and around the window.',
                    'Two things usually cause that. The fan is undersized for the room, or it discharges into the roof space rather than outside. Discharging into the roof space just moves the moisture from a room you can see into a space you cannot, and over time that causes real damage.',
                    'We install exhaust fans ducted properly to outside, sized for the room, and where you want it we can add a run-on timer so it keeps clearing for a set period after the light goes off. That last detail solves most bathroom mould problems on its own.',
                ],
            },
        ],
        priceFactors: [
            'Whether the fan goes on an existing point or needs a new one run',
            'Whether there is accessible roof space above the position',
            'Whether the ceiling needs additional structural fixing to carry the fan',
            'Wall control versus remote-only operation',
            'The number of fans, since several in one visit costs less each than one at a time',
            'For exhaust fans, the duct run to outside and whether a roof or eave vent already exists',
        ],
        faqs: [
            {
                question: 'Can you install a fan where my light currently is?',
                answer: 'Usually yes, and it is the cheaper option. The consideration is whether the existing point is actually in the right place, since it is normally the centre of the ceiling from when the house was built. We also check the ceiling can carry the fan, which needs a fixing into something structural rather than just plasterboard.',
            },
            {
                question: 'Do I need a wall control or is the remote enough?',
                answer: 'A remote works until it is lost or flat, which for most households is a matter of months. A wall control costs a bit more to install and is what people are still happy with years later. For DC fans, which are remote-controlled by design, we can usually fit a wall-mounted controller instead.',
            },
            {
                question: 'How much does ceiling fan installation cost?',
                answer: 'Installing onto an existing point is at the lower end. A new point with a cable run and a wall control is more. Roof access and whether the ceiling needs extra fixing are the other variables. Doing several rooms in one visit brings the per-fan cost down noticeably.',
            },
            {
                question: 'Are DC fans worth the extra?',
                answer: 'Generally yes. They are quieter, use significantly less power, and have more speed steps than an AC fan. In a bedroom the noise difference alone is usually what sells people. The trade-off is that they are almost always remote-based by design.',
            },
            {
                question: 'Why does my bathroom still get mouldy with an exhaust fan?',
                answer: 'Almost always because the fan is undersized for the room or it discharges into the roof space instead of outside. Ducting it properly to outside and adding a run-on timer so it keeps running after the light goes off fixes most cases.',
            },
            {
                question: 'Can you replace an old noisy fan?',
                answer: 'Yes, and it is usually a quick job since the point and the fixing are already there. If the old fan was mounted straight to plasterboard, which we do see, we will sort out a proper structural fixing while we are up there.',
            },
        ],
        related: ['downlight-installation-adelaide', 'powerpoint-installation-adelaide', 'switchboard-upgrade-adelaide'],
    },
    {
        slug: 'powerpoint-installation-adelaide',
        name: 'Powerpoints & Extra Circuits',
        icon: 'powerpoint',
        blurb: 'New outlets run properly from the board, plus dedicated circuits for the appliances that keep tripping things.',
        title: 'Powerpoint Installation Adelaide | Extra Outlets & Circuits',
        description: 'Powerpoint installation and extra circuits across Adelaide. Indoor and weatherproof outlets, dedicated appliance circuits and shed submains.',
        h1: 'Powerpoint Installation and Extra Circuits',
        intro:
            'Older houses were wired for a different life. We add powerpoints where you actually need them, run dedicated circuits for the appliances that keep tripping things, and get proper power out to sheds and garages.',
        sections: [
            {
                heading: 'Why Older Homes Run Out of Outlets',
                body: [
                    'A bedroom built in 1975 got two powerpoints, because in 1975 a bedroom had a lamp and a clock radio. It now has a phone charger, a laptop, a monitor, a fan and often a whole home office.',
                    'The result across most of the housing in Hope Valley, Modbury, St Agnes and Holden Hill is powerboards daisy-chained off powerboards, extension leads run under rugs, and a kitchen where the kettle and the toaster cannot both be on.',
                    'Adding outlets is one of the cheaper improvements available, and in a single-storey home with accessible roof space it is usually straightforward. The thing that matters is doing it properly: running the new outlet back to the board on an appropriate circuit rather than spurring off whatever happens to be nearest, which is the shortcut that causes the overloading problem all over again.',
                ],
            },
            {
                heading: 'When You Need a Dedicated Circuit',
                body: [
                    'Some appliances should have a circuit to themselves rather than sharing with half the house. If yours does not, that is often exactly why something keeps tripping.',
                ],
                bullets: [
                    'Induction cooktops, which draw far more than the old oven point was ever run for',
                    'Ovens, particularly larger or double units',
                    'Air conditioners, both ducted systems and individual split systems',
                    'EV chargers, which are a sustained high load for hours at a time',
                    'Pool and spa pumps',
                    'Workshop equipment, welders and compressors',
                    'Dishwashers and washing machines in a kitchen or laundry that is already loaded up',
                ],
            },
            {
                heading: 'Outdoor and Weatherproof Outlets',
                body: [
                    'Outdoor power is where we see the most badly done work. An indoor outlet with a plastic cover screwed over it is not a weatherproof outlet, and it is a genuine hazard once water gets in.',
                    'A proper outdoor point uses an IP-rated enclosure, outdoor-suitable cable, and RCD protection. We install them for alfresco areas, sheds, pool and spa pumps, caravan and camper points, garden equipment and Christmas lights.',
                    'On the bigger blocks around Tea Tree Gully, Vista and Banksia Park, the more common request is proper power to a shed at the back of the block. That is a submain rather than an outlet: a correctly sized cable for the distance and the load, with its own small board and protection at the shed end. If your shed lights currently dim when you start a tool, the existing run is undersized and that is the fix.',
                ],
            },
            {
                heading: 'USB Outlets, Smart Switches and the Practical Stuff',
                body: [
                    'USB-integrated outlets are worth putting in beside beds, in kitchens and in home offices, and they cost little more than a standard double point when done at the same time as other work.',
                    'Smart switches and dimmers we will install, with one honest caveat: they depend on a hub, an app and a wifi network, and when any of those change or stop being supported, the switch on your wall becomes someone else\'s problem. For most homes we would rather put in good quality conventional switching and put the smart layer where it genuinely adds something.',
                    'If you are running a home office, it is worth thinking about circuit separation as well as outlet count. Having the office on its own circuit means a tripping appliance in the kitchen does not take your work machine down with it.',
                ],
            },
        ],
        priceFactors: [
            'The number of outlets and how far each is from an existing circuit',
            'Whether there is accessible roof space above, or whether it is a two-storey or slab-on-ground situation',
            'Whether the work needs a new dedicated circuit run from the switchboard',
            'Whether the switchboard has a spare way, or is full and needs upgrading first',
            'Indoor versus weatherproof outdoor installation',
            'For sheds, the cable distance, which drives the size of the submain',
        ],
        faqs: [
            {
                question: 'How much does it cost to add a powerpoint?',
                answer: 'A single outlet close to an existing circuit in a single-storey home with roof access is at the cheaper end. Several outlets in one visit costs less each than one at a time. The expensive scenarios are two-storey rooms with no access above, slab-on-ground with no cavity, and anything needing a new circuit from the board.',
            },
            {
                question: 'Why does my kitchen trip when I use the kettle and the toaster together?',
                answer: 'Because they are on the same circuit and that circuit is doing what it was designed to do. In a 1970s kitchen the whole room is often on one circuit that was never intended for modern appliance loads. The fix is either splitting the kitchen across additional circuits or adding a dedicated one for the high-draw appliances.',
            },
            {
                question: 'Can I add outlets to an existing circuit?',
                answer: 'Often yes, provided the circuit has the capacity and the arrangement complies. Where it does not, the honest answer is a new circuit rather than adding more load to something already at its limit. We check before we quote so you know which you are getting.',
            },
            {
                question: 'Can you install a weatherproof outlet outside?',
                answer: 'Yes, using a properly IP-rated enclosure and outdoor-suitable cable with RCD protection. An indoor point with a cover over it is not the same thing and is a real hazard once water finds its way in.',
            },
            {
                question: 'My shed power is unreliable. What is wrong?',
                answer: 'Almost always an undersized submain for the distance involved. Long runs suffer voltage drop, which is why the lights dim when a tool starts. The fix is a correctly sized cable for the actual distance and load, with a small board and protection at the shed end.',
            },
            {
                question: 'Do you install USB and smart outlets?',
                answer: 'Yes to both. USB-integrated outlets are genuinely useful and cost little extra when done alongside other work. On smart switches we will install what you want, but we will also tell you honestly that they depend on an app and a hub that may not be supported in five years.',
            },
        ],
        related: ['switchboard-upgrade-adelaide', 'ev-charger-installation-adelaide', 'renovation-electrician-adelaide'],
    },
];
