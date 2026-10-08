import type { BlogPost } from './blog-posts';

/**
 * Lighting guides. Each one answers a question people actually type before they
 * ring an electrician: whether insulation can touch their downlights, how to
 * read an LED box, how to stop a sensor light false triggering, and what smart
 * lighting works in a house that was wired decades before Wi-Fi.
 */
export const lightingGuides: BlogPost[] = [
    {
        slug: 'downlights-and-ceiling-insulation-adelaide',
        title: 'Can Insulation Touch Downlights? IC Ratings Explained for Adelaide Homes',
        seoTitle: 'Can Insulation Touch Downlights? IC Ratings | JPD',
        metaDescription:
            'Can insulation touch downlights? Only if the fitting is IC rated. What IC and IC-4 mean, why old halogens needed clearance, and what to check in your roof.',
        excerpt:
            'Insulation can touch a downlight only when the fitting is rated and marked for it. Here\'s how to read the rating, why the old halogen rules existed, and what to look for in your own roof space before someone tops up the batts.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Safety',
        image: '/images/roof_cavity_insulation_wiring.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>Insulation can touch a downlight only if the fitting is rated for it, and the rating is printed on the fitting itself, not something you can judge by looking at the ceiling. Get this wrong and the consequence isn't a shorter lamp life. It's a fire that starts in your roof space while you're asleep, in a part of the house with no smoke alarm and plenty of dry timber and dust to feed it.</p>
            <p>This is the question we get asked most often when someone is about to add roof insulation, or has just had a quote for it and been told the installer will "cut around the lights". The right answer depends on what's actually in your ceiling. This guide explains the ratings, why the old halogen rules were so strict, and what to check before anyone lays a batt over anything.</p>

            <h3>Why Old Halogen Downlights Needed Clearance</h3>
            <p>A 50 watt halogen downlight is a small heater that happens to make light. Fire and Rescue NSW puts the temperature these lamps can reach at up to 370 degrees, and the open can behind them lets that heat straight into the roof space. Insulation laid over the top traps it, and glass fibre or polyester batts will char and smoulder long before anything bursts into flame, which is why these fires often start slowly and go unnoticed.</p>
            <p>That's why the Wiring Rules (AS/NZS 3000) have long required recessed fittings to be installed so temperature rise is kept down and fire risk prevented. For a fitting with no insulation rating, the default has been clear air around it, in the order of 200 millimetres above the fitting and 50 millimetres to the side of bulk insulation, unless the maker's instructions allow less. Where loose fill insulation is used, a fixed barrier or guard has to hold that clearance, because loose material drifts back into the gap.</p>
            <p>In practice, that meant insulation installers cut a square out of every batt around every downlight. It kept the fittings cool and left a thermal hole in the ceiling at every light, which is a big part of why a halogen-lit house is hard to heat and cool.</p>

            <h3>What IC, IC-F and IC-4 Mean</h3>
            <p>Modern recessed fittings are classified under AS/NZS 60598.2.2, and the classification is marked on the back of the fitting. The ones you'll see on LED downlights sold in Australia:</p>
            <ul>
                <li><strong>IC</strong> (insulation contact): insulation can be abutted to the sides and laid over the top.</li>
                <li><strong>IC-F</strong>: the same, and the fitting is also sealed against loose material getting in. It isn't a fire rating, despite the letter.</li>
                <li><strong>IC-4</strong>: the marking most manufacturers now use alongside IC-F. It means the fitting has been tested so it can be abutted against and covered by normally flammable building materials, including insulation, without its surface exceeding the temperature the standard allows. Manufacturer instructions typically require the insulation itself to be rated to at least 90 degrees.</li>
                <li><strong>CA80 and CA135</strong>: insulation can abut the sides but must not cover the fitting. You'll find these on some older or higher-output fittings.</li>
                <li><strong>Non-IC</strong>: no insulation anywhere near it. Not suitable for a house.</li>
            </ul>
            <p>Two things worth knowing. First, the rating belongs to the complete fitting as tested, so an old halogen can with an LED lamp pushed into it hasn't become IC rated. Second, some makers still recommend abutting rather than fully covering even a rated fitting, because a cooler fitting lasts longer. Rated means safe to cover, not that covering is free.</p>

            <h3>Can Insulation Touch LED Downlights?</h3>
            <p>If the fitting is marked IC, IC-F or IC-4, yes, and that's the point of buying them. Insulation can run continuously across the ceiling with no cut-outs, which is better for the house and removes the guesswork for whoever works in the roof next. Nearly every sealed LED downlight from the mainstream brands sold here now carries that marking, but "nearly every" isn't "every", and budget fittings or older LED retrofits may not. Check the back of the fitting or the installation sheet, not the word LED on the box.</p>
            <p>A modern sealed LED fitting changes the picture in three ways. It draws a fraction of the power, so there's far less heat to shed in the first place. The heat it does produce comes off a heatsink designed for the job rather than radiating straight out of an open can. And the driver is a small separate unit that sits on top of the ceiling, where it can be kept clear and reached if it ever fails.</p>

            <h3>What to Check in Your Roof Space</h3>
            <p>If you're comfortable getting into the roof safely, or have someone up there anyway, these are the things that tell you where you stand:</p>
            <ul>
                <li><strong>Open cans with a lamp visible from above.</strong> Those are halogen or halogen-style fittings. Insulation needs to be clear of them, and if it's touching, that's the first thing to fix.</li>
                <li><strong>A separate boxy transformer</strong> lying next to each fitting. That's a 12 volt halogen setup. The transformers run hot too and need their own clearance.</li>
                <li><strong>Discoloured or compressed insulation</strong> around a fitting, or a brown ring on the plaster above. That's heat damage, and it means the clearance hasn't been there.</li>
                <li><strong>Debris, leaves or nesting material</strong> on or near a fitting. Fire services specifically flag vermin nesting against warm downlights as a fire cause.</li>
                <li><strong>The marking on the back of each fitting.</strong> IC-F or IC-4 means insulation can be laid over it. CA80 or CA135 means up to the sides only. Nothing at all means treat it as unrated.</li>
                <li><strong>Downlight covers or guards.</strong> Some houses have had purpose-made covers fitted over halogens so insulation could be laid up to them. Check they're actually in place and intact, because they get knocked off.</li>
            </ul>
            <p>Don't move insulation around live fittings with bare hands, and don't press batts back against anything you aren't sure of. If what you find is a roof full of open halogen cans, the practical fix is replacing them with sealed IC-4 LED fittings, which is a routine job for us and usually done from the roof space in a single visit. If you only want insulation laid, the installer should be treating anything unrated as needing clearance, and asking you, not assuming.</p>

            <h3>Insulation Installers and Who Checks What</h3>
            <p>Insulation installers aren't electricians and can't change a fitting, so a good one will tell you which lights are a problem rather than quietly cutting around them. The best sequence, if you're doing both, is lights first and insulation second. That way the whole ceiling gets covered properly and nobody has to go back up later to pull batts off fittings that should never have been covered.</p>
            <p>If you'd like us to look before the insulation goes in, we can identify each fitting's rating, tell you which ones can be covered and which can't, and give you a straight answer on whether replacing them makes sense.</p>
        `,
        faqs: [
            {
                question: 'How do I find out if my downlights are IC rated?',
                answer: 'The rating is marked on the back or side of the fitting itself, so it has to be read from the roof space or by dropping the fitting out of the ceiling. Look for IC, IC-F or IC-4, often with a symbol of a fitting surrounded by insulation. If you still have the box or installation sheet, it\'s printed there too. An electrician who installed them recently will know the product. If nothing\'s marked, treat the fitting as unrated and keep insulation clear of it.',
            },
            {
                question: 'Can I put a cover or guard over my old halogen downlights instead of replacing them?',
                answer: 'Purpose-made downlight covers exist and were widely used to let insulation be laid up to halogen fittings. They have to be a product tested and sold for that job, fitted so they can\'t be knocked off, and the fitting underneath still has to be installed correctly. They don\'t do anything about the heat, the running cost or the ageing transformer, so for most houses the money is better put towards sealed IC-4 LED fittings, which solve all of those at once.',
            },
            {
                question: 'Is it safe to top up roof insulation if I already have LED downlights?',
                answer: 'It is if the fittings are marked IC, IC-F or IC-4, which most sealed LED downlights sold in Australia now are. The check is worth doing anyway, because LED lamps pushed into old halogen cans look like LED downlights from below and carry no insulation rating at all. Make sure the installer knows which fittings can be covered and keeps clear of anything that isn\'t marked, and keeps clear of the drivers and any transformers as well.',
            },
            {
                question: 'Why is there a bare patch in the insulation around each of my lights?',
                answer: 'Because whoever laid it was keeping the required clearance around unrated or halogen downlights. The Wiring Rules default for a fitting without an insulation rating has been clear space around it, so installers cut a square out of each batt. The result is a ceiling with a thermal hole at every light, which lets heat in during summer and out during winter. Replacing the fittings with IC-4 rated LEDs lets those gaps be filled in.',
            },
            {
                question: 'Can rats or possums nesting around downlights cause a fire?',
                answer: 'Yes. Fire services list vermin nesting as a known cause of downlight fires, because a warm fitting surrounded by insulation is an attractive spot and the nesting material is dry and flammable. Rodents also chew cable insulation, which adds a second fault on top. If you hear animals in the roof, have the fittings and nearby wiring checked and the pests dealt with. Sealed LED fittings run much cooler and are far less inviting.',
            },
        ],
        cta: {
            heading: 'Not Sure What\'s in Your Roof?',
            description:
                'We can tell you which fittings can be covered, which can\'t, and whether replacing them makes sense before the insulation goes in. Based in Wynn Vale, covering Adelaide.',
            linkText: 'See Our Downlight Service',
            href: '/downlight-installation-adelaide',
        },
    },
    {
        slug: 'how-to-choose-led-downlights-adelaide',
        title: 'How to Choose LED Downlights and Globes: Lumens, Kelvin, Beam Angle and Dimming',
        seoTitle: 'How to Choose LED Downlights and Globes | JPD',
        metaDescription:
            'How to choose LED downlights: read lumens not watts, pick a colour temperature by room, understand beam angle, CRI and dimmer compatibility, and plan layout.',
        excerpt:
            'The box says 10W, 900lm, 3000K, 90 degree, CRI 80, dimmable. Here\'s what each of those means for the room you\'re standing in, which ones matter, and how to work out how many you need without a formula that falls over in real houses.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Advice',
        image: '/images/led_downlights_kitchen_golden_grove.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>Choosing LED downlights comes down to five numbers on the box: lumens, colour temperature, beam angle, CRI and whether it's dimmable, plus one decision about whether the globe can be replaced. Get them wrong and you live with it for years. A living room lit at the wrong colour temperature feels like a dentist's surgery every evening, a kitchen with too few lumens makes you squint at the chopping board, and a mismatched dimmer flickers and buzzes until someone pays to rip it out and start again. None of that is a safety issue, but it's a lot of money to spend on being annoyed.</p>
            <p>This isn't about halogen versus LED, which we've covered elsewhere. It's about choosing well between LEDs, because the range is huge and the labels assume you already know what they mean.</p>

            <h3>Lumens, Not Watts</h3>
            <p>Watts tell you how much power a light uses. Lumens tell you how much light it makes. With old incandescent and halogen globes the two tracked each other closely enough that everyone shopped by watts, but LEDs make far more light per watt and the ratio varies between products, so watts are now nearly useless for comparing brightness.</p>
            <p>Read the lumen figure. For a sense of scale, the Australian Energy Rating guidance for replacing a standard 50 watt 12 volt halogen downlight is an LED of at least 621 lumens, and most LED downlights sold for homes sit between roughly 700 and 1000 lumens. That's why the common complaint after an upgrade is too bright rather than too dim, and why dimming is worth thinking about from the start.</p>

            <h3>Colour Temperature by Room</h3>
            <p>Colour temperature is the kelvin figure and it describes how warm or cool the white looks. Lower is warmer. Roughly:</p>
            <ul>
                <li><strong>2700K to 3000K, "warm white":</strong> yellowish, relaxed, close to an old incandescent globe. Living rooms, bedrooms, dining.</li>
                <li><strong>4000K, "cool white" or "neutral":</strong> cleaner and whiter without being harsh. Kitchens, bathrooms, laundries, garages, studies.</li>
                <li><strong>5000K and above, "daylight":</strong> blue-white, high alertness. Workshops, garages, task areas. Most people find it cold in living spaces.</li>
            </ul>
            <p>The naming is not consistent between brands, so go by the number, not the word on the front of the box. And keep one temperature across any space you can see at once. A 3000K living area opening onto a 4000K kitchen is a very common result of buying in two batches, and it looks exactly as odd as it sounds.</p>
            <p>Tri-colour (CCT switchable) fittings have a small selector that sets them to warm, cool or daylight, usually 3000K, 4000K and 5700K or thereabouts. They let us stock one product and set each room on site, and they let you change your mind once you've lived with it. If you're torn between two temperatures, that's the answer.</p>

            <h3>Beam Angle</h3>
            <p>Beam angle is how wide the cone of light spreads. A narrow beam, typically around 36 degrees or less, throws a bright pool and leaves the ceiling and walls in shadow. It suits accent lighting, high ceilings or picking out a feature. A wide beam, around 90 to 120 degrees, washes light across the room evenly and is what you want for general lighting in a normal 2.4 to 2.7 metre ceiling.</p>
            <p>Most of the complaints we hear about "cave-like" rooms with lots of downlights come from narrow-beam fittings used for general lighting. The floor is lit, the walls aren't, and the room feels dim even though the lux meter says otherwise. Go wide for general lighting unless there's a reason not to.</p>

            <h3>CRI in Plain Terms</h3>
            <p>CRI, the colour rendering index, is how faithfully a light shows colours compared with daylight, on a scale that tops out at 100. A low CRI light makes skin look grey, food look flat and the paint colour you chose look like something else. Most decent LED downlights are CRI 80 or better, which is fine for general living areas. Where colour matters, such as a kitchen bench, a bathroom mirror or anywhere you get dressed, CRI 90 or above is noticeably better and the price difference is small.</p>

            <h3>Dimmable or Not, and Dimmer Compatibility</h3>
            <p>A non-dimmable LED on a dimmer will flicker, buzz, or fail early. A dimmable LED on the wrong type of dimmer does much the same. So two decisions:</p>
            <ul>
                <li><strong>Do you want dimming?</strong> In living rooms, bedrooms and dining areas, almost always yes, especially given how bright modern fittings are. In kitchens, laundries and garages, usually not.</li>
                <li><strong>Which dimmer?</strong> LEDs generally want a trailing edge dimmer designed for LED loads. The manufacturer of the fitting publishes a list of dimmers it's been tested with, and matching the two from that list is what stops flicker. We specify the fitting and dimmer together for that reason, and if you're buying your own fittings, tell us the model before we quote so we can check.</li>
            </ul>
            <p>Also worth knowing: a dimmer has a minimum and maximum load. Two small LED fittings may be below the minimum and misbehave, and twenty may exceed the maximum. The count on each dimmer matters.</p>

            <h3>Replaceable Globe or Integrated</h3>
            <p>An integrated downlight has the LED built into the fitting with its own driver. When it fails, the fitting is replaced, which is an electrician's job. A fitting with a replaceable globe (GU10 or MR16 lamps) lets you swap the globe yourself, which is one of the few electrical jobs a homeowner is allowed to do in South Australia.</p>
            <p>Integrated fittings are the better product in most ways: sealed, insulation-rated, better heat management, consistent colour, and rated lives in the tens of thousands of hours. Replaceable-globe fittings give you flexibility and no electrician for a dead lamp, but the globe and the fitting weren't designed together, the colour varies between globe batches, and dimming compatibility becomes a three-way match between globe, fitting and dimmer. For a whole-house install we lean integrated. For a single fitting you want to tweak, replaceable has its place.</p>

            <h3>How Many Downlights Does a Room Need?</h3>
            <p>There's no formula that survives contact with real houses, so be wary of anyone quoting one. The approach that works is layout first, count second:</p>
            <ul>
                <li>Light the things you do, not the floor plan. Benches, the dining table, the reading chair, the mirror. Put fittings where the task is.</li>
                <li>Keep fittings off the walls by enough that they don't scallop the plaster and off the ceiling fan so the blades don't strobe.</li>
                <li>Space them so the wide beams overlap at the height you use the room, which for general living is roughly an even grid in the open part of the room, tighter in work areas.</li>
                <li>Consider circuits and dimming as you go. A kitchen is nicer with the bench lights switched separately from the general lights, and a living room with the lot on a dimmer.</li>
            </ul>
            <p>With modern 800 to 1000 lumen wide-beam fittings, most people need fewer than they expect, and the common mistake is a grid of too many too-bright fittings, then wishing they dimmed. A quick mock-up with painter's tape on the ceiling before anything is cut is worth ten minutes of anyone's time.</p>
        `,
        faqs: [
            {
                question: 'What\'s the difference between a 90mm and a 70mm downlight?',
                answer: 'The number is the ceiling cut-out diameter. 90 millimetres is the most common size in Australian homes and what most halogen downlights were cut for, so replacement LED fittings in that size drop into the existing holes. 70 millimetre fittings are smaller and neater but need their own holes or a reducer ring. Fittings in the same cut-out size can still differ in overall face diameter and depth, so check the depth against your ceiling space too.',
            },
            {
                question: 'Can I mix different brands of LED downlights in the same room?',
                answer: 'You can, but it rarely looks right. Two fittings both labelled 3000K can sit visibly apart in colour because of manufacturing tolerances, and they\'ll dim differently and age differently. Within one room, or any space you can see at once, use one product bought in one batch. Mixing across rooms separated by a door is fine. If you\'re replacing a single failed fitting in a room, buying the same model, or swapping a fitting from a less visible spot, avoids an odd one out.',
            },
            {
                question: 'Do I need fire rated downlights in a house?',
                answer: 'Usually not in a freestanding home. Fire rated downlights are for ceilings that are themselves a fire-rated barrier, such as between units or townhouses, where cutting a hole would otherwise weaken the barrier. That\'s a different thing from IC-F, which is about insulation contact, not fire resistance. If you live in an apartment or attached dwelling, check with the building manager or your electrician before cutting any new holes in the ceiling.',
            },
            {
                question: 'What\'s the difference between GU10 and MR16 downlight globes?',
                answer: 'GU10 globes run directly on 240 volts and twist-lock into the fitting with two pins, so no transformer is involved. MR16 globes run on 12 volts through a transformer or LED driver and push in with two thin pins. Both come in LED versions, but a 12 volt LED globe on an old halogen transformer often flickers or won\'t start, because the transformer expected a bigger load. If you\'re keeping replaceable-globe fittings, GU10 is the simpler option.',
            },
            {
                question: 'Is a higher lumen downlight always better?',
                answer: 'No. Beyond what the room needs, extra lumens just mean glare and a dimmer doing more work. Many LED downlights sold for homes are well above the output of the halogen they replace, so a room that was fine with eight 50 watt halogens can be uncomfortably bright with eight 1000 lumen LEDs. Choose the lumen output to suit the room and the task, fit wide beams for general lighting, and put living areas on a compatible dimmer so you can set the level.',
            },
        ],
        cta: {
            heading: 'Want the Layout Done Properly?',
            description:
                'We\'ll help you pick the fittings, match the dimmers and plan the positions before anything gets cut. Based in Wynn Vale, covering Adelaide.',
            linkText: 'Downlight Installation',
            href: '/downlight-installation-adelaide',
        },
    },
    {
        slug: 'outdoor-sensor-security-lights-adelaide',
        title: 'Outdoor Sensor Lights: Placement, Settings and Stopping False Triggers',
        seoTitle: 'Outdoor Sensor Lights: Placement and Settings | JPD',
        metaDescription:
            'Outdoor sensor lights that work: where to mount the PIR, setting lux and time, stopping false triggers from pets and traffic, and when you need an electrician.',
        excerpt:
            'A sensor light that comes on for every passing car and never for the person at your back door is doing the opposite of its job. Where the sensor goes matters more than the fitting, and the settings are worth ten minutes to get right.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Advice',
        image: '/images/outdoor_twin_spotlight_golden_grove.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>Outdoor sensor lights work when the sensor is mounted so people cross its field of view, set to come on only after dark, and aimed away from anything else that moves or gives off heat. Get that wrong and you end up with a light that fires all night at traffic and the neighbour's cat, so you stop noticing it, which is the point at which it stops being security lighting. Worse, a floodlight aimed badly can leave the path to your door in shadow while lighting up the bedroom window next door, and since 2024 South Australian councils can treat that as a nuisance.</p>
            <p>Here's how we approach a sensor light so it does the job quietly for years: where the sensor goes, what the dials mean, the common causes of false triggers, and what has to be done by an electrician versus what you can plug in yourself.</p>

            <h3>How a PIR Sensor Actually Sees</h3>
            <p>Almost every sensor light uses a passive infrared (PIR) detector. It doesn't see shapes. It sees a change in heat across a set of zones in its field of view, and it's far more sensitive to something warm moving across those zones than to something walking straight towards it. That one fact explains most placement mistakes.</p>
            <p>A typical outdoor PIR, such as the Clipsal Infrascan units we fit regularly, covers up to around 18 metres across roughly 110 degrees at maximum sensitivity, and is designed for a mounting height of about 2.4 metres. Higher than that and the zones spread out and detection drops. Lower and the range shrinks and it becomes easy to walk under.</p>

            <h3>Where to Put the Sensor</h3>
            <ul>
                <li><strong>Across the path, not along it.</strong> Mount the sensor so anyone approaching crosses its zones side-on. On a straight driveway that often means on the side of the house looking across, not on the end wall looking down the drive.</li>
                <li><strong>Separate the sensor from the light if the geometry needs it.</strong> A standalone sensor can switch one or several fittings, so the sensor goes where it detects best and the lights go where you need light.</li>
                <li><strong>Think about where you want it to trigger from.</strong> A sensor over the back door that only fires when you're already standing at the door has missed the point. Aim it so it picks you up a few metres out.</li>
                <li><strong>Keep it off the boundary line</strong> unless you actually want it triggering on the footpath.</li>
            </ul>

            <h3>Lux and Time Settings</h3>
            <p>Most sensors have two or three small dials. The <strong>lux</strong> (or daylight) dial sets how dark it has to be before the sensor will trigger at all. Set to the daylight end, it works all day, which wastes power and annoys you. Set it so the light starts triggering around dusk and stays off in daylight, and adjust it at the time of day you care about rather than guessing at noon.</p>
            <p>The <strong>time</strong> dial sets how long the light stays on after the last movement, usually adjustable from a few seconds up to around 20 minutes. For a path or entry, one to three minutes is plenty. Longer times mean the light is on far more of the night than you'd expect, because every retrigger restarts the clock.</p>
            <p>The <strong>sensitivity</strong> dial, where fitted, trades range against false triggers. If the light fires on things it shouldn't, turning sensitivity down is often a better fix than re-aiming.</p>

            <h3>Stopping False Triggers</h3>
            <p>A PIR responds to changes in heat, so anything that moves and is warmer or cooler than its background can set it off:</p>
            <ul>
                <li><strong>Roads and driveways.</strong> Car engines and headlights are a classic trigger. Angle the sensor so the road is outside its field, or mask part of the lens. Most sensors come with clip-on blinkers or you can mask with tape.</li>
                <li><strong>Trees and shrubs.</strong> Foliage moving in wind, especially when sun-warmed, triggers sensors. Trim it back or aim past it.</li>
                <li><strong>Pets and wildlife.</strong> Dogs, cats and possums are warm and move. Aiming the sensor slightly upward and reducing sensitivity lowers the trigger on small animals near the ground, at the cost of some range.</li>
                <li><strong>Heat sources.</strong> Air conditioner outdoor units, heater flues, barbecues, and even other outdoor lights switching on can fool a PIR. Keep them out of view.</li>
                <li><strong>Reflective surfaces.</strong> Pools, smooth white walls and glass can bounce heat and movement into the sensor. Avoid aiming at them.</li>
                <li><strong>Insects and spiders</strong> on the lens. Clean it occasionally, and note that a sensor mounted right next to the lamp attracts more of them.</li>
            </ul>
            <p>If a sensor still misbehaves after that, the cause is usually a failing unit or a wiring fault, and it's worth having it looked at rather than living with it.</p>

            <h3>Dusk-to-Dawn, Sensor or Smart</h3>
            <p>A <strong>dusk-to-dawn</strong> fitting uses a photocell and stays on all night. Good for a front entry or a street number where you want constant low light, and with a small LED fitting the running cost is modest. A <strong>sensor</strong> light is off until something approaches, so it startles rather than illuminates, and it's the better choice for side paths, back yards and anywhere you only need light when you're there. Many fittings combine the two: a low glow all night, full brightness on movement.</p>
            <p><strong>Smart</strong> outdoor lights add schedules, phone control and camera integration. They're worth having where you want the lights on a timer when you're away, or to come on with the driveway camera, but they still need a sensible wired install and most still work best with a PIR doing the local detection.</p>

            <h3>LED Floodlights and Glare</h3>
            <p>LED floodlights are bright for their size and the mistake is to buy the biggest one. A huge floodlight aimed at eye height blinds the person approaching and lights nothing useful behind them. Aim lights downward at the ground you want to see, use the lowest output that does the job, and consider two smaller fittings rather than one big one. From the neighbour's side, walk across at night and look back at your house. If you can see the LED chips directly, the light is aimed too high, and that's the spill the EPA uses as its example of light nuisance.</p>

            <h3>IP Ratings in Brief</h3>
            <p>The IP rating on an outdoor fitting tells you how well it keeps out dust (first digit) and water (second). Under a deep verandah an IP44 fitting, which handles splashes, is fine. On an exposed wall, under a gutter line or near sprinklers you want IP65 or better, which handles water jets. The sensor itself has its own rating, and the better outdoor units are IP66.</p>

            <h3>Hardwired, Plug-In or Solar</h3>
            <p>A hardwired sensor light is connected to the house wiring, which in South Australia is work only a licensed electrician can do, and you should receive an electronic certificate of compliance for it. That includes adding a sensor to an existing light, swapping a fitting, or running a new cable. The homeowner list is short: globes, fuses, breakers, safety switch tests and smoke alarm batteries.</p>
            <p>Plug-in sensor lights and small battery solar sensor units exist and you can put those up yourself, since nothing is wired into the mains. They suit a shed, a gate or a rental, with the trade-off that the plug-in needs an outdoor outlet nearby and the solar unit's output and battery life are limited. For a front entry, driveway or anywhere you rely on it, a hardwired fitting with a proper PIR on its own circuit from the house is the thing that still works in five years.</p>
            <p>What we do on a sensor light job is more than mounting the fitting: choosing the sensor position for the approach, setting lux and time on site at dusk if the timing works, aiming to avoid the road and the neighbours, and making sure the circuit has RCD protection, which outdoor lighting on a modern install should.</p>
        `,
        faqs: [
            {
                question: 'Why does my sensor light stay on all the time?',
                answer: 'The most common reason is that it\'s been put into manual override. Many sensor lights switch to constant-on if the wall switch is flicked off and on quickly, and go back to sensor mode after the switch is left off for a while, often ten seconds or more. Other causes are a lux dial turned fully to daylight, a constant trigger such as a heat source or moving branch in view, or a failed sensor. Try the switch reset first, then check the dials, then check what the sensor can see.',
            },
            {
                question: 'Can a sensor be added to an existing outdoor light?',
                answer: 'Yes. A standalone PIR sensor can be wired in to switch an existing fitting, or several fittings together, and it can be positioned where it detects best rather than wherever the light happens to be. Most sensors need a neutral at the sensor, which usually exists at a light position but not always at a switch. Because it connects to the house wiring, it\'s a licensed electrician\'s job in South Australia, and it\'s usually a short one if the fitting is accessible.',
            },
            {
                question: 'How high should a sensor light be mounted?',
                answer: 'Most outdoor PIR sensors are designed for a mounting height of around 2 to 2.5 metres, and the manufacturer\'s figure is in the instructions. At that height the detection zones are spaced for a person walking past. Mount it much higher, such as under a second-storey eave, and the zones spread out, range drops, and small movements near the ground are missed. Mount it much lower and the range shrinks and the unit is easier to walk under or tamper with.',
            },
            {
                question: 'Do sensor lights use power when the light is off?',
                answer: 'A little. The sensor electronics stay powered so they can watch for movement, which is typically well under a watt. Over a year that adds up to a few kilowatt hours per sensor, a small fraction of what the light itself uses while on. If the running cost bothers you, the bigger levers are the time setting, since every trigger restarts the clock, the lux setting so it never runs in daylight, and an LED fitting rather than an old halogen floodlight.',
            },
            {
                question: 'Will a PIR sensor work through glass or a window?',
                answer: 'No. Ordinary window glass blocks the infrared wavelengths a PIR detects, so a sensor mounted inside looking out through a window won\'t see people outside, and an outdoor sensor won\'t pick up movement behind glass either. The same goes for most clear plastics. If you want to cover an area on the other side of a window, the sensor has to be mounted outside, or you need a different detection type such as a camera with motion detection.',
            },
        ],
        cta: {
            heading: 'Want a Sensor Light That Works First Time?',
            description:
                'Tell us where the problem spot is and we\'ll position the sensor, match the fitting and set it up properly. Based in Wynn Vale, covering Adelaide.',
            linkText: 'Get in Touch',
            href: '/contact',
        },
    },
    {
        slug: 'smart-lighting-smart-switches-existing-home-adelaide',
        title: 'Smart Lighting in an Existing Home: Smart Globes vs Smart Switches and the No-Neutral Problem',
        seoTitle: 'Smart Light Switches in an Existing Home | JPD',
        metaDescription:
            'Smart light switches or smart globes for an existing Adelaide home? Old switch wiring, the no-neutral problem, Wi-Fi vs Zigbee, and what needs an electrician.',
        excerpt:
            'Smart globes screw in and work today. Smart switches survive the next person flicking the wall switch, but most of them need a neutral that older houses don\'t have at the switch. Here\'s how to pick for a house that was wired long before any of this.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Advice',
        image: '/images/wall_sconce_dimmer_redwood_park.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>Smart lighting in an existing home comes down to a choice between smart globes, which you can fit yourself, and smart switches or dimmers, which go in the wall and need an electrician, with the deciding factor usually being whether there's a neutral wire at your switch. Choose badly and you get the house where the lights only work from a phone, the wall switch has tape over it saying "don't touch", and half the globes drop offline every time the Wi-Fi hiccups. That's not a smart home. It's a dumb one with extra steps, and it's expensive to unwind.</p>
            <p>This guide is for an Adelaide house that already exists, with whatever wiring it has. New builds and renovations with open walls are a different conversation.</p>

            <h3>Smart Globes</h3>
            <p>A smart globe has the radio and the dimming built in. You screw it into an existing fitting, join it to the app, and you have dimming, colour temperature, scenes and schedules without touching the wiring. Brands you'll see here include Philips Hue, LIFX and the various Wi-Fi globes sold at hardware stores.</p>
            <p>The catch is the wall switch. The globe needs power to listen for commands, so the switch has to stay on. Switch it off at the wall and the globe is dead until someone switches it back on, and often it comes back at full brightness. In a household of one, that's manageable. In a family home or with guests, it's a constant irritation. Smart globes suit lamps, a single feature pendant, or a room where you're happy to control everything from the phone or a stick-on wireless remote.</p>
            <p>They also don't work on a dimmer switch. A smart globe behind a dimmer will flicker and may fail, so the dimmer needs to be replaced with a plain switch, which is an electrician's job.</p>

            <h3>Smart Switches and Smart Dimmers</h3>
            <p>A smart switch replaces the mechanism in the wall. The existing globes or downlights stay ordinary, the switch still works as a switch for anyone who walks in, and the smarts sit behind it. A smart dimmer does the same and dims the circuit, which with LED downlights means they have to be dimmable and compatible with that dimmer, exactly as with an ordinary one.</p>
            <p>This is the approach that survives real life. The wall switch does what everyone expects, the app and schedules work on top of it, and when you sell the house the next owner gets a light switch that works. The trade-offs are that it needs a licensed electrician to install in South Australia, and it runs into the wiring problem below.</p>

            <h3>The No-Neutral Problem</h3>
            <p>A smart switch has electronics in it, and electronics need a continuous supply to stay awake. That means an active and a neutral at the switch. In a great many Australian homes, especially anything wired before the last decade or two, the switch position has only the active and the switched wire down to it. The neutral stays up at the light fitting. The switch was a simple loop, so nobody ran a neutral down the wall.</p>
            <p>Three ways around it:</p>
            <ul>
                <li><strong>Run a neutral to the switch.</strong> The proper fix. Easy if the switch is on an external wall with roof access above, harder in a two-storey or a solid-brick internal wall. We can usually tell you from looking at the switch and the roof space.</li>
                <li><strong>Use a no-neutral smart switch.</strong> These power themselves by passing a tiny current through the light circuit even when "off". With older incandescent loads that was invisible. With a couple of small LED downlights it can show up as flicker, a faint glow when off, or the switch not working at all because the load is below its minimum. Some brands sell a bypass device to fit at the light to fix that, which is another thing in the ceiling. The Clipsal Iconic Wiser switches sold here, for example, are three-wire units made for this situation.</li>
                <li><strong>Put the smart module at the light instead.</strong> A small relay or dimmer module sits in the ceiling at the fitting, where the neutral is, and the existing wall switch becomes an input to it. The wall switch still works, the module does the smarts, and nothing changes in the wall. This is often the cleanest answer in an older house.</li>
            </ul>
            <p>Which suits you depends on the actual wiring, which is why we look before we quote.</p>

            <h3>Wi-Fi, Zigbee and Bluetooth in Plain Terms</h3>
            <p><strong>Wi-Fi</strong> devices talk straight to your router. No hub, simple setup, and every globe or switch is another device on your network, which starts to matter past a dozen or two. If the router reboots or the internet drops, many Wi-Fi products stop responding because they rely on a cloud service. Range is your Wi-Fi range.</p>
            <p><strong>Zigbee</strong> devices talk to a hub (Philips Hue calls it a Bridge, Clipsal calls it the Wiser Hub) over their own low-power radio, and mains-powered Zigbee devices relay for each other, so the network gets stronger as you add more. The hub handles schedules locally, so a lot keeps working when the internet is down. The cost is the hub itself and generally sticking within one ecosystem per hub.</p>
            <p><strong>Bluetooth</strong> is the no-hub, phone-in-the-same-room option. Philips Hue's Bluetooth mode, for instance, controls up to 10 lights from a phone within range and can't be reached from outside the house without adding the Bridge. Fine for a bedroom lamp, limiting for a house.</p>
            <p>Our general advice for anything beyond a few globes: pick one ecosystem, prefer products that work locally without the cloud, and accept a hub. A box in a cupboard is a small price for lights that come on when you flick the switch regardless of what the internet is doing.</p>

            <h3>What Needs an Electrician in South Australia</h3>
            <p>In South Australia, anything connected to the fixed wiring is licensed work. That means replacing a switch or dimmer with a smart one, fitting a module in the ceiling, running a neutral, replacing a dimmer with a plain switch so smart globes will work, or adding a new light point. The homeowner list is limited to things like changing globes and fuses, resetting breakers, testing safety switches and smoke alarm batteries. For wired work you should receive an electronic certificate of compliance, and your insurer may ask for it if a DIY switch ever causes a problem.</p>
            <p>Smart globes, smart plugs, battery wireless remotes and the hub itself are all yours to set up.</p>

            <h3>What Works With What You've Got</h3>
            <ul>
                <li><strong>Existing dimmable LED downlights:</strong> a smart dimmer that's on the fitting manufacturer's compatibility list, or a module at the light. Smart globes don't apply to integrated downlights.</li>
                <li><strong>Old halogen downlights:</strong> deal with those first. Smart dimmers and 12 volt halogen transformers are a poor mix, and you'll be replacing the fittings anyway.</li>
                <li><strong>Pendants and lamps with standard globes:</strong> smart globes are the quick win, as long as the wall switch can live permanently on.</li>
                <li><strong>Two-way switching (hall and stairs):</strong> doable with smart switches designed for it, or a module at the light with both wall switches as inputs. Not every product handles it, so say so up front.</li>
                <li><strong>Outdoor and sensor lights:</strong> a smart switch or module gives you schedules and away-from-home control, and a PIR still does the local detection better than any app.</li>
            </ul>

            <h3>Scenes and Schedules That Actually Save Power</h3>
            <p>Smart lighting doesn't save power by being smart. It saves power when it turns things off. The settings worth doing on day one:</p>
            <ul>
                <li><strong>An "all off" at bedtime</strong> that gets the garage, the outside lights and the kids' rooms.</li>
                <li><strong>Sunset-to-a-fixed-time on the front entry</strong>, instead of dusk to dawn, so it's on when people come home and off at midnight.</li>
                <li><strong>Dimmed default scenes</strong> in living areas. A room set to 60 per cent most evenings uses less than one at full, and nobody notices the difference.</li>
                <li><strong>An "away" schedule</strong> that moves lights around the house on a loose pattern while you're on holiday, which is the one thing smart lighting does that nothing else can.</li>
            </ul>
            <p>Start with one room, usually the living area, and live with it for a month before doing the house. That tells you whether globes or switches suit how your household actually uses the lights, and it's a lot cheaper than finding out after twenty switches are in.</p>
        `,
        faqs: [
            {
                question: 'Will my smart lights still work if the internet drops out?',
                answer: 'It depends on the product. Zigbee systems with a local hub, such as Philips Hue with a Bridge or Clipsal Wiser with its hub, keep running schedules and respond to their own remotes and app on the home network without internet, though voice assistants and away-from-home control stop. Many cheaper Wi-Fi globes and switches route every command through a cloud server and go unresponsive when the internet is down. In every case a smart wall switch still works as a plain switch, which is the strongest argument for switches over globes.',
            },
            {
                question: 'Can I use smart globes in a fitting that\'s on a dimmer switch?',
                answer: 'No. A smart globe has its own dimming electronics and expects a steady full supply. Behind a conventional dimmer it will flicker, behave unpredictably or fail early, even with the dimmer turned to maximum. The fix is to have the dimmer replaced with a plain switch, which is licensed work in South Australia, and let the globe do the dimming. If you want to keep a physical dimmer on the wall, a smart dimmer with ordinary dimmable globes is the better combination.',
            },
            {
                question: 'Do smart switches work with two-way switching on a hallway or stairs?',
                answer: 'Some do, and it needs to be planned. Options include a smart switch at one end with the other end wired as a conventional two-way, a smart module at the light with both wall switches as inputs, or in some ecosystems a wired smart switch at one end and a battery wireless switch at the other. Not every product supports two-way, and the existing wiring decides which approach is practical. Tell your electrician it\'s a two-way circuit before anything is ordered.',
            },
            {
                question: 'Do smart light switches use power when the light is off?',
                answer: 'Yes, a small amount, because the radio and electronics stay awake to listen for commands. For most smart switches and globes that\'s a fraction of a watt to around a watt each, which across a house of twenty devices adds up to a modest but real amount over a year. It\'s one reason to use smart switches on circuits you actually want to automate rather than on every switch in the house, and to make sure the schedules you set up turn things off more than they turn them on.',
            },
            {
                question: 'Will smart globes work if someone turns the light off at the wall?',
                answer: 'No. A smart globe needs continuous power to stay connected, so once the wall switch is off it drops offline and can\'t be turned on from the app, a schedule or a voice assistant until the switch is turned back on. Most then come back at full brightness regardless of the scene that was set. Households deal with this by leaving the switch on and using a stick-on wireless remote or the app, or by moving to smart switches, which keep the wall switch working as everyone expects.',
            },
        ],
        cta: {
            heading: 'Not Sure What Your Switches Are Wired With?',
            description:
                'We can check whether you have a neutral at the switch, tell you which approach suits your wiring, and install the smart switches or modules properly. Based in Wynn Vale, covering Adelaide.',
            linkText: 'Get in Touch',
            href: '/contact',
        },
    },
];
