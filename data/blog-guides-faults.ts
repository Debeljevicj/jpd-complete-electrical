import type { BlogPost } from './blog-posts';

/**
 * Fault-recognition guides: what a symptom means, what to do first and when to
 * stop and call. Written to sit beside, not compete with, the tripping and
 * power-out posts.
 */
export const faultGuides: BlogPost[] = [
    {
        slug: 'burning-smell-powerpoint-switchboard-appliance',
        title: 'Burning Smell From a Powerpoint, Switchboard or Appliance: What to Do',
        seoTitle: 'Burning Smell From a Powerpoint? What to Do | JPD',
        metaDescription:
            'Burning smell from a powerpoint, switchboard or appliance? What to do in the first minute, what usually causes it, and how an electrician finds it.',
        excerpt:
            'A burning smell is the one electrical symptom that can\'t wait. Here\'s what to do in the first minute, what usually causes it, and how we track it down.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Safety',
        image: '/images/burnt_main_switch_tea_tree_gully.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>A burning smell from anything electrical means something is getting hotter than it was built to. Most of the time it's a connection or a cable, and it can keep heating quietly inside a wall or behind a switchboard door for a long time before you see anything. If it's ignored, the realistic outcomes are a fire in the wall or ceiling space, or damage that turns a small repair into a large one.</p>
            <p>This post covers what to do in the first minute, what usually causes the smell, and what we do to find it. It isn't about breakers that trip. If that's your problem, read our post on why power keeps tripping. This one is about heat.</p>

            <h3>First: Is There Fire, Smoke or Just a Smell?</h3>
            <p><strong>If you can see flames or smoke is coming from the wall, powerpoint or switchboard:</strong></p>
            <ul>
                <li>Get everyone out and call <strong>000</strong>. Getting out and calling for help comes first, as the Metropolitan Fire Service says in its guidance.</li>
                <li>Don't use water on an electrical fire. Water and live electrical equipment is a shock risk.</li>
                <li>Only if the fire is small, you've got a way out behind you and you know how to use it, an extinguisher rated for electrical fires is the tool. The MFS lists dry powder (ABE or BE rated) or carbon dioxide for this. If you hesitate, leave.</li>
                <li>Turning off the main switch helps, but only if you can reach it without going through smoke or near the fire. Don't go looking for it.</li>
            </ul>
            <p><strong>If there's a smell but no flames or smoke:</strong></p>
            <ul>
                <li>Switch off and unplug the appliance if it's safe to touch the plug. If the plug or outlet looks scorched, melted or feels hot, leave it alone and turn the circuit off at the switchboard instead.</li>
                <li>Turn off the circuit breaker for that area. If you can't tell which circuit it is, or the smell is at the switchboard itself, turn off the main switch, provided the board is dry, the door is closed and you don't have to touch anything damaged.</li>
                <li>Never open a switchboard, a powerpoint or an appliance to look. Parts inside are live even with an appliance switched off at the wall.</li>
                <li>Keep an eye on it for a while after power is off, then call an electrician. If the smell is still there, or it's coming from inside a wall, treat it as a fire risk and ring 000.</li>
            </ul>

            <h3>Where the Heat Comes From</h3>
            <p>Electricity only creates heat in a wire or connection where there's resistance. A smell nearly always traces back to one of these.</p>
            <p><strong>A loose connection.</strong> This is the most common cause we find. A wire that isn't tight in its terminal makes a poor contact, the contact heats up under load, and the heat loosens it further. It can be inside a powerpoint, a switch, a light fitting, a junction box or on the switchboard. Because the current is normal, the breaker has nothing to trip on.</p>
            <p><strong>An overloaded circuit or a power board.</strong> A cable carrying more than it was designed for runs hot. The usual culprits are heaters, portable air conditioners and double adaptors or powerboards chained together, all running off one outlet.</p>
            <p><strong>A worn or damaged powerpoint or switch.</strong> Contacts wear, springs weaken and plugs sit loosely. A plug that falls out of the wall or feels warm is a sign the contacts are no longer gripping properly. Old Bakelite fittings also become brittle, and cracked fittings can expose live parts.</p>
            <p><strong>Old cable insulation.</strong> Rubber-insulated cable in older homes can dry out, harden and crumble over the decades, particularly where it's run warm, such as in a ceiling space above a light fitting. WorkSafe Queensland has warned that old rubber-sheathed cable can deteriorate to the point of exposing live conductors. Our post on signs of faulty house wiring covers this properly.</p>
            <p><strong>The appliance itself.</strong> Motors, heating elements, power supplies and cords all fail. A fridge compressor, a vacuum motor or a dryer with built-up lint can all smell of burning without anything being wrong with the house wiring. The test is simple: unplug it and see whether the smell goes with it.</p>
            <p><strong>Not every smell is a fault.</strong> A heater smells of burning dust when it's first used after sitting all year, and a new appliance can give off a smell as manufacturing residue burns off. That should fade within a short time of use and there shouldn't be smoke. If it doesn't fade, stop using it.</p>

            <h3>What We Do to Find It</h3>
            <p>The aim is to find the heat before it's visible. First we ask where the smell was, when it happened and what was running, because a smell that only comes with the heater on points to a load problem rather than a wiring one.</p>
            <ul>
                <li><strong>Visual check:</strong> scorching, discolouration, melted plastic or insulation, and signs of arcing at outlets, switches, light fittings and the switchboard.</li>
                <li><strong>Thermal imaging:</strong> a thermal camera shows hot connections on a board under normal load, without opening anything that doesn't need to be opened.</li>
                <li><strong>Connection checks:</strong> tightening and inspecting terminals, with the circuit isolated and tested dead first.</li>
                <li><strong>Insulation resistance and earth testing:</strong> tests that show cable damage you can't see, which matter on older wiring.</li>
                <li><strong>Load check:</strong> if the wiring is sound, we look at what's plugged into it and whether the circuit is simply being asked to do too much.</li>
            </ul>
            <p>What we find sets the repair: a scorched outlet is replaced, a damaged cable run is repaired or replaced, and a board with heat damage may need more than a tightened terminal.</p>

            <h3>Why Waiting Doesn't Help</h3>
            <p>A loose connection doesn't tighten itself. It gets worse, because heat damages the surrounding insulation and the contact surfaces. A smell that "went away" usually means the circuit's cooled down, not that it's fixed. If it happens again under load, it will start from a worse place.</p>
            <p>If you've turned a circuit off and the house is otherwise fine, there's usually no need to panic. Leave it off, make a note of what you smelled and when, and book it in. If you've turned the main switch off or you can't isolate the problem, call us on <strong>0435 006 420</strong> and we'll tell you honestly whether it can wait.</p>
        `,
        faqs: [
            {
                question: 'Why does my heater smell of burning the first time I use it each winter?',
                answer: 'Usually because dust has settled on the element or in the fan while it sat unused, and it burns off when the heater warms up. A smell that fades within a few minutes, with no smoke or crackling, is normally harmless. If it lingers, smells of hot plastic or gets stronger, switch it off at the wall and stop using it until it has been checked.',
            },
            {
                question: 'Why didn\'t the breaker trip if something was burning?',
                answer: 'Because breakers and safety switches respond to too much current or current leaking to earth, not to heat. A loose connection can run hot while the current through it is perfectly normal, so nothing trips. That\'s why a burning smell with no tripped breaker still needs checking, and why you should never take the lack of a trip as a sign that all is well.',
            },
            {
                question: 'Can I keep using a powerpoint that has a scorch mark on it?',
                answer: 'No. A scorched or discoloured powerpoint has overheated, and the cause is usually a poor connection that will overheat again. The cable behind the outlet may be damaged too. Turn the circuit off at the switchboard and have it replaced and the connections tested. Don\'t just swap the faceplate, because that hides the damage without addressing why it overheated.',
            },
            {
                question: 'Will my smoke alarm go off before an electrical fire gets going?',
                answer: 'Not necessarily. Smoke alarms respond to smoke particles reaching them, and an overheating connection can smoulder inside a wall or switchboard for some time before any smoke gets out. Working alarms are essential, but your nose is often the earlier warning. If you smell something hot or burning and can\'t find the source, don\'t assume the alarm would have told you.',
            },
            {
                question: 'Is it safe to leave a powerboard plugged in if it smells warm?',
                answer: 'No. Unplug it, if the plug isn\'t hot or damaged, and replace it. A warm or smelly powerboard is overloaded, worn or has a failing connection, and it\'s not worth repairing. Plug high-load appliances like heaters and portable air conditioners directly into a wall outlet rather than a board, and never chain one powerboard into another.',
            },
        ],
        cta: {
            heading: 'Smelt Something Hot at Home?',
            description:
                'Turn the affected circuit off and give us a call. We\'ll tell you straight whether it needs attention now or can safely wait. We\'re based in Wynn Vale and cover Adelaide.',
            linkText: 'Emergency Electrician Adelaide',
            href: '/emergency-electrician-adelaide',
        },
    },

    {
        slug: 'signs-of-faulty-house-wiring-adelaide',
        title: 'Signs of Faulty House Wiring: What to Look and Listen For',
        seoTitle: 'Signs of Faulty House Wiring in Adelaide | JPD',
        metaDescription:
            'Warm faceplates, crackling, flickering and tingles can point to faulty wiring. What the signs mean, which old cable types matter, and what testing finds.',
        excerpt:
            'Faulty wiring usually announces itself in small ways first. This is what to notice at your outlets and switches, which old cable types matter, and what an electrician\'s tests find that eyes can\'t.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Safety',
        image: '/images/rewire_cotton_braid_cable_kingswood.webp',
        gallery: [
            {
                src: '/images/rewire_vir_cable_kingswood.webp',
                alt: 'Old VIR rubber-insulated cable with cracked, perished insulation found in an Adelaide roof space',
                caption: 'Rubber-insulated cable from the 1950s. The insulation cracks and falls away, leaving bare copper in the roof.',
            },
            {
                src: '/images/rewire_removed_cable_kingswood.webp',
                alt: 'Lengths of old cable removed from a house during a partial rewire',
                caption: 'What came out of one house during a partial rewire. None of it looked like a problem from inside the rooms.',
            },
            {
                src: '/images/rewire_insulation_testing_kingswood.webp',
                alt: 'Electrician testing insulation resistance on house wiring with a test instrument',
                caption: 'An insulation resistance test finds breakdown that eyes can\'t, which is why a proper check isn\'t just a look in the roof.',
            },
        ],
        content: `
            <h3>Why This Matters to You</h3>
            <p>Most wiring faults don't switch the power off. They sit in the wall or ceiling, quietly running hot or leaking current, while everything keeps working. The consequences, if they're left alone, are an electric shock from something that should be safe to touch or a fire starting inside a wall where you can't see it.</p>
            <p>The good news is that faulty wiring gives small warnings first. This post is about the wiring and outlets, the cables and fittings spread through the house. Switchboard warning signs have their own post. Everything here is something you can notice without opening anything, and you shouldn't open anything. Faceplates, switches and cables are for a licensed electrician.</p>

            <h3>What You Can Notice Without Tools</h3>
            <ul>
                <li><strong>A faceplate or switch that is warm or hot.</strong> A powerpoint carrying a heater will be a little warm at the plug. A wall plate that's warm with nothing or very little plugged in, or one that's too hot to hold your hand on, has a connection overheating behind it.</li>
                <li><strong>Brown or black discolouration.</strong> Scorching around a socket, switch or light fitting is heat damage. It has already happened.</li>
                <li><strong>Crackling, buzzing or sizzling.</strong> Sound from a switch or outlet can be arcing, which is electricity jumping a gap at a poor connection. A faint buzz from a cheap dimmer is common. Crackling, or a sound that changes when you switch something on, isn't.</li>
                <li><strong>Plugs that fall out or feel loose.</strong> Worn contacts grip badly, make poor contact and heat up.</li>
                <li><strong>Flickering that follows the fitting, not the whole house.</strong> A light that flickers when you touch the wall or knock the switch points to a loose connection in that circuit. We cover other flicker causes in our post on flickering lights.</li>
                <li><strong>A burning or fishy smell.</strong> Treat it as a heat problem and read our post on burning smells.</li>
                <li><strong>A tingle or shock.</strong> If you feel it from an appliance, tap or metal fitting, something is wrong with the earthing or the insulation. Switch off what you can, don't use the item, and call us. Don't wait to see if it happens again.</li>
                <li><strong>Safety switch tripping with no obvious appliance.</strong> That can be insulation breaking down in a cable, which needs testing.</li>
            </ul>

            <h3>Older Cable Types in Adelaide Homes</h3>
            <p>Adelaide has plenty of older housing, from established suburbs to the post-war areas, and the wiring inside varies a lot. We're not going to give dates for when each cable stopped being installed, because they overlap and renovations over the years mean one house often has several types. These are the ones to know.</p>
            <ul>
                <li><strong>Rubber-insulated cable, including VIR (vulcanised Indian rubber) and TRS (tough rubber sheathed).</strong> The insulation is rubber, often with a fabric braid. Over decades rubber dries, hardens and cracks. WorkSafe Queensland has warned that this insulation may have deteriorated to the point of exposing live conductors. Heat speeds it up, so roof spaces above light fittings are a common place for it to fail.</li>
                <li><strong>Cloth or cotton-braided cable.</strong> Often found alongside the rubber types. The braid itself can fray and the insulation underneath ages.</li>
                <li><strong>Early PVC-insulated cable.</strong> Better than rubber, but PVC also stiffens and goes brittle with heat and age, especially in hot roof spaces. It's far more forgiving than rubber, but it still needs checking when a house is old.</li>
            </ul>
            <p>None of this means every old house is dangerous. We see rubber cable that is still in decent shape, and we see newer cable ruined by a bad join or a nail. What matters is the condition of the cable, not just its age, and you can't judge that by looking at the outside of a powerpoint.</p>

            <h3>How Age Relates to Risk</h3>
            <p>Age by itself doesn't fail a wiring system. Heat, load and mechanical damage do, and age gives them more time to do it. A house that was wired for a fridge and a few lamps, and now runs air conditioners, heaters and a home office off the same cables, has been asked to do far more than it was designed for. Add roof insulation pushed over cables, which stops them shedding heat, and some old circuits spend their lives running warmer than intended.</p>
            <p>That's why the same sort of cable can be fine in one house and brittle in the next. It also explains why renovation work is the point at which old wiring is found. Moving a switch or drilling for a new fitting disturbs cable that has been left alone for decades. Our renovation planning post covers the timing.</p>

            <h3>What Testing Finds That Eyes Can't</h3>
            <p>Looking at an outlet tells you almost nothing about the cable behind it. Testing does. The Australian standard for verifying an electrical installation, AS/NZS 3017, includes these tests, and they're what we use on old wiring.</p>
            <ul>
                <li><strong>Insulation resistance:</strong> the test puts a voltage across the insulation, with the circuit isolated, to measure how well it's holding. A low reading means current is leaking where it shouldn't. This is the test that catches deteriorating rubber and damaged cable inside walls.</li>
                <li><strong>Earth continuity:</strong> checks that the earth conductor is unbroken from the outlet back to the switchboard. If it isn't, metal appliance bodies can become live and a safety switch may not protect you as it should.</li>
                <li><strong>Polarity and correct connection:</strong> confirms active and neutral are where they should be at each outlet. Reversed wiring appears to work.</li>
                <li><strong>Safety switch operation:</strong> confirms the device trips properly, not just when you press the button.</li>
            </ul>
            <p>The result is a list: this circuit's fine, this one's leaking, this one has no earth. It lets you repair what's wrong rather than guess, and sometimes it shows an old house is in better shape than you feared.</p>

            <h3>When to Call</h3>
            <p>Call us if you notice heat, scorching, a smell, crackling, a tingle or repeated safety switch trips. If you're buying or renovating an older home, ask for a condition check before work starts, not after. We're at <strong>0435 006 420</strong>, and we'll tell you honestly whether something needs doing now or can wait.</p>
        `,
        faqs: [
            {
                question: 'How long does house wiring last before it needs replacing?',
                answer: 'There\'s no set expiry date. How long wiring lasts depends on the cable type, how hot it has run, how heavily it has been loaded and whether it has been disturbed. Rubber-insulated cable ages faster than modern PVC, but condition decides it, not the calendar. Insulation resistance testing tells you where a cable stands, which is a better guide than the age of the house.',
            },
            {
                question: 'Can a plug-in outlet tester from the hardware store check my wiring?',
                answer: 'Only partly. A plug-in tester can show some basic wiring faults at an outlet, like a missing earth or reversed connections. It can\'t measure insulation resistance, can\'t see cable damage inside walls and can\'t check the circuit under load. A clean result from one is not a clean bill of health, and it should never replace a proper test.',
            },
            {
                question: 'Why does a plug keep falling out of my powerpoint?',
                answer: 'The contacts inside the powerpoint have worn or weakened and no longer grip the pins. That causes a poor connection, which heats up under load, so it should be replaced rather than put up with. Don\'t wedge the plug in with tape or use a different outlet for a heater. A new outlet on a sound circuit is a small job.',
            },
            {
                question: 'Does roof insulation make old cables overheat?',
                answer: 'It can. Cables lose heat to the surrounding air, and insulation packed over them traps it, which reduces how much current they can safely carry. The effect matters most on circuits that are already heavily loaded or on ageing cable. If your roof insulation is being topped up, ask the installer to keep it clear of cables and downlight fittings, and have old wiring checked first.',
            },
            {
                question: 'Does an electrician have to cut into walls to test the wiring?',
                answer: 'No. Insulation resistance and earth continuity tests are done from the switchboard and at outlets, switches and fittings, with the circuit isolated. Where there\'s roof access, we can also look at the cable itself. Walls are only opened if testing finds a fault and the damaged section has to be located and repaired. Most checks leave the house exactly as we found it.',
            },
        ],
        cta: {
            heading: 'Not Sure What\'s Behind the Wall?',
            description:
                'If you\'ve got warm outlets, crackling, tingles or an older home you want checked, we can test the circuits and tell you plainly what needs doing. Wynn Vale based, servicing all of Adelaide.',
            linkText: 'Book an Electrician',
            href: '/emergency-electrician-adelaide',
        },
    },

    {
        slug: 'emergency-electrician-when-it-cant-wait',
        title: 'Emergency Electrician: What Really Can\'t Wait and What Can',
        seoTitle: 'Emergency Electrician: What Can\'t Wait | JPD',
        metaDescription:
            'Which electrical problems need someone tonight and which can wait until morning. A plain triage list, what to do while you wait, and what to say on the phone.',
        excerpt:
            'Not every electrical fault is an emergency, and some that feel minor are. Here\'s a plain triage list, what to do while you wait, and what to tell the electrician when you ring.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Advice',
        image: '/images/onsite_walkthrough.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>Two mistakes cost people in opposite ways. One is paying an after-hours rate for something that would have been fine until morning. The other is waiting out something that wasn't fine and finding the damage worse the next day. The most serious consequences of an electrical fault are fire and electric shock, and those are the ones that justify moving fast.</p>
            <p>This post is a way to sort the problem you have in front of you. It isn't a replacement for a phone call. If you're unsure, ring us and we'll tell you honestly which side it falls on. For a power cut where the neighbours are also out, read our post on SA Power Networks versus an electrician.</p>

            <h3>Call 000 First</h3>
            <p>Some situations are not an electrician job first. Call <strong>000</strong> when:</p>
            <ul>
                <li>There are flames or smoke from a wall, powerpoint, switchboard, appliance or the meter box.</li>
                <li>Someone has had a serious electric shock, is unconscious or is injured. Don't touch them until the power is off or they're clear of the source.</li>
                <li>A power line has come down onto a person, a car or the property. Stay well away and don't approach anything lying on the ground.</li>
            </ul>
            <p>Once the immediate danger is dealt with, an electrician makes the installation safe afterwards. For fallen lines and network damage, call SA Power Networks on <strong>13 13 66</strong>, which they run as a 24 hour fault and emergency line.</p>

            <h3>Treat It as an Emergency: Get Someone Out Tonight</h3>
            <ul>
                <li><strong>A burning smell, scorching or melted plastic</strong> at a powerpoint, switchboard, fitting or appliance lead. Heat is the sign of a fire starting. See our burning smell post.</li>
                <li><strong>Sparking, arcing or crackling</strong> from an outlet, switch or the switchboard.</li>
                <li><strong>Water in a switchboard, meter box, outlet or light fitting.</strong> Water and electricity together is a shock risk, and the damage continues while it's wet.</li>
                <li><strong>A tingle or shock from a tap, appliance or metal fitting.</strong> It means electricity is going somewhere it shouldn't.</li>
                <li><strong>Lights that are very bright in one part of the house and dim in another,</strong> or appliances behaving strangely together. That can be a lost neutral, which we cover in our post on flickering lights.</li>
                <li><strong>A main switch or circuit that trips straight back off</strong> every time you reset it, particularly with a smell, heat or noise.</li>
                <li><strong>Storm damage to the meter box or the cable where it enters the house</strong>, hanging, cracked or pulled away.</li>
                <li><strong>Total loss of power in a home where someone relies on electrical medical equipment.</strong> If the neighbours have power, it's a problem on your side.</li>
            </ul>

            <h3>Usually Fine Until Tomorrow</h3>
            <ul>
                <li>One circuit or one area has lost power, nothing smells or feels hot, and the rest of the house is working.</li>
                <li>A safety switch that tripped once, reset and has stayed on. Note what was running and mention it.</li>
                <li>A single powerpoint that doesn't work, with no heat, smell or sparking.</li>
                <li>A light that won't come on, where changing the globe didn't help.</li>
                <li>A faulty appliance. Unplug it and leave it off.</li>
                <li>A fitting that buzzes mildly or a dimmer that hums, with no heat.</li>
            </ul>
            <p>Those are real faults and they should be fixed, but waiting a night generally doesn't make them dangerous. The exceptions are where food or heating is at stake. If you've lost the circuit your fridge or freezer is on, look at what's at risk and tell us when you ring.</p>

            <h3>What to Do While You Wait</h3>
            <ul>
                <li><strong>Isolate the problem, if it's safe.</strong> If it's one circuit and you can identify it, switch that breaker off. If it's at the switchboard or you can't tell, switch the main switch off, provided you can reach it with dry hands and a dry floor and nothing is on fire.</li>
                <li><strong>Don't keep resetting a breaker that trips again.</strong> Forcing it back on is how a manageable fault becomes a worse one.</li>
                <li><strong>Don't open anything.</strong> Not the switchboard, a powerpoint, an appliance or a light fitting.</li>
                <li><strong>Stay out of wet areas</strong> near anything electrical that's been affected, and keep children and pets away.</li>
                <li><strong>Unplug what you can safely reach</strong> on the affected circuit. Don't unplug anything with a hot, scorched or wet plug.</li>
                <li><strong>Check your smoke alarms.</strong> Alarms wired to the mains may not work with the main switch off unless they have a battery backup, so check yours before you settle in for the night.</li>
                <li><strong>Take a photo</strong> of what you can see from a safe distance. It helps us judge urgency before we arrive.</li>
            </ul>

            <h3>What to Tell the Electrician on the Phone</h3>
            <p>We ask the same things every time, so having the answers ready saves a few minutes:</p>
            <ul>
                <li>Your suburb and street address.</li>
                <li>What you noticed first: a smell, a noise, a trip, a loss of power. And when.</li>
                <li>Whether it's one circuit, one room or the whole house, and whether the neighbours have power.</li>
                <li>What was running when it happened.</li>
                <li>What you've already done, particularly if you've switched anything off or reset anything.</li>
                <li>Any heat, scorching, smoke, water or tingles.</li>
                <li>Whether anyone depends on power at home for medical reasons, or has fridge contents at risk.</li>
                <li>What type of house it is, and roughly how old. Old boards and old wiring change what we plan for.</li>
            </ul>

            <h3>What You Can Expect From Us</h3>
            <p>We're based in Wynn Vale. After-hours attendance costs more than a standard weekday visit, and we give you the rate on the phone before we come, not when we arrive. If the problem can safely wait until morning, we'll say so and you decide. Call <strong>0435 006 420</strong>.</p>
        `,
        faqs: [
            {
                question: 'Is it an emergency if half my house has lost power but the other half is fine?',
                answer: 'Usually not, if nothing smells hot and nothing is sparking. It generally means a circuit or a section of the supply has tripped or failed, and the rest of the house is working normally. Leave the dead circuits off, check if a safety switch or breaker has tripped, and book a visit. It becomes urgent if lights elsewhere are unusually bright or dim, or you notice heat or a smell.',
            },
            {
                question: 'Is it safe to sleep in a house with the main switch turned off?',
                answer: 'Generally yes, but plan for it. The main concern is things that rely on mains power, such as fridges, medical equipment and mains-powered smoke alarms that have no battery backup. Check your alarms before bed, keep a torch to hand and keep the fridge closed. If you\'ve turned power off because of a burning smell or damage, leave it off until an electrician has checked it.',
            },
            {
                question: 'What do I do if water is leaking near a powerpoint or my switchboard?',
                answer: 'Stay clear and switch the power off at the main switch only if you can reach it without standing in water or touching anything wet. If you can\'t reach it safely, leave it and call an electrician and a plumber. Don\'t turn the power back on until the area is dry and has been checked, because water damage can keep causing faults after it dries.',
            },
            {
                question: 'Can I turn the power back on myself after a flood or storm damage?',
                answer: 'Not until it\'s been checked. Water that has reached powerpoints, wiring or the switchboard can leave the installation unsafe even after it drains, and the damage isn\'t always visible. Have a licensed electrician inspect and test the affected parts first.',
            },
            {
                question: 'What should I do about a power cut if someone at home needs electrical medical equipment?',
                answer: 'Treat it as urgent and have a backup plan before you need it. Check whether the neighbours have power: if they do, call an electrician straight away, and if not, call SA Power Networks on 13 13 66. Ask your electricity retailer about life support registration, and keep any backup battery or alternative arrangement your doctor or equipment supplier has recommended charged and ready.',
            },
        ],
        cta: {
            heading: 'Not Sure If It Can Wait?',
            description:
                'Ring us and describe what you\'re seeing. We\'ll tell you straight whether it needs attention now, and what to switch off in the meantime.',
            linkText: 'Emergency Electrician Adelaide',
            href: '/emergency-electrician-adelaide',
        },
    },

    {
        slug: 'lights-flickering-or-dimming-causes',
        title: 'Lights Flickering or Dimming: What\'s Normal and What Isn\'t',
        seoTitle: 'Lights Flickering or Dimming? Causes and Fixes | JPD',
        metaDescription:
            'Lights flickering or dimming at home? What\'s normal, what points to a loose connection, a dimmer mismatch or a lost neutral, and when to stop and call.',
        excerpt:
            'A brief dip when the fridge starts is normal. Flickering that comes and goes by itself, or bright and dim lights at once, isn\'t. Here\'s how to tell the difference.',
        date: '2026-10-08',
        author: 'Justin',
        category: 'Troubleshooting',
        image: '/images/led_downlights_living_golden_grove.webp',
        content: `
            <h3>Why This Matters to You</h3>
            <p>Most flickering is harmless. A few causes aren't. A loose connection can heat up and damage the fitting or wiring around it, and a lost neutral can send damaging voltage through everything plugged in and give people shocks from taps and metal fittings. Telling those apart from a dimmer that doesn't suit its LEDs matters, because the consequence of ignoring the serious ones is fire or shock, and the others are a nuisance.</p>
            <p>This post works through the causes from harmless to serious. It's about what you can observe. Anything involving the switchboard, wiring or the meter box is an electrician's job.</p>

            <h3>What's Normal</h3>
            <p>A brief dip in brightness when a large appliance starts is normal. Motors draw a lot of current for a moment as they start, which pulls the voltage down slightly across the house. You'll see it with a fridge compressor, a washing machine, a pool pump or an air conditioner kicking in. If the lights dip once, briefly, and recover, nothing's wrong.</p>
            <p>The point to notice is the size and the pattern. A small dip when a big motor starts is expected. A big dip, or dimming that continues while the appliance runs, is worth a look. Older houses with thin supply cables or heavily loaded circuits show it more.</p>
            <p>A flicker across the whole street, once, is typically the network. SA Power Networks says brief interruptions that come straight back are often its protection equipment clearing a temporary fault on the network, such as a branch touching a line. If the neighbours' lights blinked too, it isn't you.</p>

            <h3>Start With One Light or the Whole House?</h3>
            <p>That is the most useful question you can answer before calling anyone.</p>
            <ul>
                <li><strong>One light or one room:</strong> the cause is at that fitting, its switch, its globe or its circuit.</li>
                <li><strong>One circuit:</strong> a connection somewhere along the circuit, possibly a switch, a junction or a fitting upstream of the affected lights.</li>
                <li><strong>The whole house:</strong> something at or before the switchboard, or the supply from the street.</li>
            </ul>

            <h3>Causes at the Light</h3>
            <p><strong>A loose globe or failing lamp.</strong> Check this first. Switch off, let it cool, and make sure the globe is seated. Swap in a known good one. It is the cheapest test there is.</p>
            <p><strong>Dimmer and LED mismatch.</strong> The most common cause in houses that have been upgraded to LED. Many older dimmers were designed for halogen and incandescent loads and don't suit LEDs. Not all LED lamps are dimmable either, and of the dimmable ones, not all work with every dimmer. The result can be flicker, buzzing, a limited range, or lights that won't dim below halfway. The fix is matching the dimmer to the lamps, which is often a dimmer swap, not a wiring job.</p>
            <p><strong>A failing LED driver.</strong> Many LED downlights and strips run through a driver that converts mains power. When the driver ages or overheats, light output pulses or flickers, often getting worse as the fitting warms up. The driver or the whole fitting gets replaced. A single flickering fitting among several identical ones usually points here.</p>
            <p><strong>A loose connection in the fitting or switch.</strong> A switch that flickers the light when you press on the plate, or a fitting that changes when you bump the ceiling, has a connection that isn't gripping properly. It's more than an annoyance. Loose connections create heat, so don't leave it.</p>
            <p><strong>Old transformers on halogen conversions.</strong> Where LED lamps have been fitted to an old halogen transformer, mismatch is common and flicker or early failure follows.</p>

            <h3>Causes Further Back</h3>
            <p><strong>A loose connection at the switchboard or the main switch.</strong> If the flicker affects several circuits, particularly if it varies with load, the fault may be in a connection at the board. Heat marks, a buzzing sound or a warm door make this more urgent. We see burnt main switches caused by exactly this.</p>
            <p><strong>An overloaded circuit.</strong> If lights dim whenever a heater, oven or kettle is on the same circuit or a shared one, the circuit is working near its limit. That's not a fault, but it's a sign the load needs spreading.</p>
            <p><strong>The supply from the street.</strong> The service cable, the connection at the pole or the point of attachment can all develop a bad connection. Wind and rain can make it worse. That is partly SA Power Networks' side and partly yours, so describe what you see when you call.</p>

            <h3>The Serious One: A Lost Neutral</h3>
            <p>In a house the neutral conductor is the return path for current. If its connection becomes loose, damaged or lost anywhere between your switchboard and the network transformer, the voltage across the house can swing. Some outlets and lights get too much and others too little.</p>
            <p><strong>The signs:</strong> lights bright in one room and dim in another, brightness that changes when an appliance starts, appliances running oddly or failing, and sometimes a tingle from a tap or a metal fitting. Regulators in other states warn that a lost neutral can damage appliances and start fires, and that a safety switch won't protect against a problem with the incoming neutral.</p>
            <p><strong>What to do:</strong> turn off the main switch if you can reach it safely, avoid touching taps, metal pipes and appliance bodies while you do, and ring SA Power Networks on <strong>13 13 66</strong>. They run it 24 hours a day, 7 days a week. If you got a shock, treat it as an emergency and tell them so. The fault can be in the street, the service cable or inside your own switchboard, and it's their job and ours to work out which. Don't investigate it yourself.</p>

            <h3>When to Stop and Call</h3>
            <ul>
                <li>Bright and dim lights at the same time in different parts of the house</li>
                <li>Flickering with any burning smell, buzzing, heat or scorching</li>
                <li>A tingle from a tap, appliance or metal fixture</li>
                <li>Flicker that affects several circuits or the whole house, and the neighbours are fine</li>
                <li>Flicker that changes when you touch a switch, fitting or the wall</li>
                <li>Appliances failing or acting up alongside the lights</li>
            </ul>
            <p>A single LED fitting that flickers, or a dimmer that doesn't suit its lamps, can wait for a normal booking. Everything on that list can't. Call <strong>0435 006 420</strong> and describe what you've seen.</p>
        `,
        faqs: [
            {
                question: 'Is it safe to leave a flickering light on?',
                answer: 'Not if the flicker comes from a loose connection. If it\'s one LED that pulses or a dimmer hum, with no heat or smell, it\'s generally a nuisance rather than a danger, but switch it off if you aren\'t sure. If the flicker changes when you touch the switch or the wall, or comes with a smell or warmth, turn it off at the switchboard and have it checked.',
            },
            {
                question: 'Why do my lights flicker when it\'s windy or raining?',
                answer: 'Wind and rain often point to a connection that moves or gets damp. Common places are the service cable where it attaches to the house, the meter box, outdoor fittings that have lost their seals, or the connection at the pole. A fault from the pole to your house is partly SA Power Networks\' side, so report it on 13 13 66 and tell them when it happens.',
            },
            {
                question: 'Can I fix flickering by changing the globe?',
                answer: 'Sometimes, when the globe is old, loose or the wrong type for the fitting. It\'s the cheapest test, so try a known good globe first with the power off and the old one cool. If the new one flickers too, the cause is the dimmer, the driver, the fitting or the wiring. Keep swapping globes and you\'ll only spend money.',
            },
            {
                question: 'Can flickering lights damage my appliances?',
                answer: 'A harmless flicker won\'t, but the causes behind some flicker can. A lost neutral can put too much voltage across appliances and damage them, and a loose connection can cause surges and heat. If your lights are flickering and appliances are also acting up, or failing, treat it as a supply problem and call. Keep records of any damage in case a claim is needed.',
            },
            {
                question: 'What should I note down before ringing about flickering lights?',
                answer: 'Write down which lights flicker, when it happens and what was running at the time. Note whether it\'s one light, one room or the whole house, and whether the neighbours see it. A short phone video is very useful. Also mention any buzzing, warmth or smell, any recent building work, storms or LED upgrades, and whether anyone has felt a tingle.',
            },
        ],
        cta: {
            heading: 'Lights Not Behaving?',
            description:
                'Tell us what the lights are doing and where, and we\'ll tell you whether it\'s a quick fix or something that needs testing. Wynn Vale based, servicing all of Adelaide.',
            linkText: 'Emergency Electrician Adelaide',
            href: '/emergency-electrician-adelaide',
        },
    },
];
