import Link from 'next/link';
import Accordion, { type AccordionItem } from './Accordion';

interface FaqGroup {
    title: string;
    items: AccordionItem[];
}

const groups: FaqGroup[] = [
    {
        title: 'Getting a Quote and Booking Us',
        items: [
            {
                question: 'Do you offer free quotes?',
                answer: 'Yes. Quotes are free and there is no obligation. We state what is included, what is excluded and what we have assumed, so you are comparing like for like if you are getting other prices. If we think something might turn up once we open things up, you hear about it before we start rather than on the invoice.',
            },
            {
                question: 'Do you charge a callout fee?',
                answer: 'Quotes are free. For repair and fault-finding work there is a callout that covers attendance and the first period on site, and we tell you what it is on the phone before we come out. Because we work a tight patch around Wynn Vale, that number is not padded with an hour of travel.',
            },
            {
                question: 'How soon can you get to me?',
                answer: 'Genuine emergencies are usually same day, and often within the hour if we are not already on the tools. Routine work is normally booked within the week. Call 0435 006 420 and we will give you a real time rather than a window that covers the whole day.',
            },
            {
                question: 'Will you come out for a small job?',
                answer: 'Yes. A single powerpoint, a dead light, a fan that needs replacing. Being based in the middle of the area we cover means a small job nearby is not half a day gone in the van.',
            },
            {
                question: 'What areas do you service?',
                answer: 'We are based in Wynn Vale and work across Adelaide\'s north-east, mostly within the City of Tea Tree Gully. Golden Grove, Greenwith, Hope Valley, Highbury, Modbury, Redwood Park, Ridgehaven, St Agnes, Fairview Park, Holden Hill, Gulfview Heights, Tea Tree Gully, Banksia Park and Vista, plus the suburbs around them. We also take on work further afield when it makes sense.',
            },
            {
                question: 'How do you take payment?',
                answer: 'Invoiced on completion for standard work, with the usual electronic payment options. For larger jobs such as full switchboard upgrades or renovation work we will discuss the arrangement upfront so there are no surprises either way.',
            },
        ],
    },
    {
        title: 'Licensing, Insurance and Paperwork',
        items: [
            {
                question: 'Are you licensed and insured?',
                answer: 'Yes. JPD Complete Electrical is fully licensed, licence number PGE296191, and carries public liability insurance. Ask any electrician for both before they start work, and be wary of anyone who is vague about it.',
            },
            {
                question: 'Do I get a Certificate of Compliance?',
                answer: 'Yes, on every job that requires one. A Certificate of Compliance for Electrical Work is your record that the work was carried out by a licensed electrician and tested. Keep it on file, because it matters when you sell the property and when an insurer asks questions after an incident.',
            },
            {
                question: 'Who actually turns up to the job?',
                answer: 'Justin. JPD Complete Electrical is owner-operated, so the person who quotes the job is the person who does it and the person who answers the phone afterwards. Nothing gets lost between a salesperson and whoever gets sent out.',
            },
            {
                question: 'What if something goes wrong after you have left?',
                answer: 'Call us. Workmanship is stood behind and we come back and sort it. That is a much easier promise to keep as an owner-operator than it is for a business that has moved on to the next job.',
            },
        ],
    },
    {
        title: 'Safety, Switchboards and Compliance',
        items: [
            {
                question: 'How do I know if my switchboard needs upgrading?',
                answer: 'Rewireable ceramic fuses, no safety switches, breakers that trip often, scorch marks or heat discolouration, a burning smell, buzzing from inside the board, or a board so full there is nowhere to add a circuit. Any of those is a reason to have it looked at. Send us a photo of the open board and we will give you an honest read on how urgent it is.',
            },
            {
                question: 'Do circuit breakers protect me from electric shock?',
                answer: 'No, and this is the most common misunderstanding we come across. A circuit breaker protects the wiring from overload and short circuit. The amount of current that flows through a person is nowhere near enough to trip one. Only a safety switch, an RCD, detects that and disconnects fast enough to matter.',
            },
            {
                question: 'Is the test button on my safety switch enough?',
                answer: 'No. The button proves the mechanism moves. It does not measure whether the device trips fast enough to actually protect someone. An RCD can pass the button test and still fail a proper trip-time test with a calibrated instrument, which is the test that matters.',
            },
            {
                question: 'Why does my safety switch keep tripping?',
                answer: 'Usually a faulty appliance leaking current to earth, or moisture in an outdoor circuit. Unplug everything on that circuit, reset it, then plug things back in one at a time to find the culprit. If it trips with nothing plugged in, the fault is in the fixed wiring and needs testing. Never bypass or disable an RCD to stop it tripping.',
            },
            {
                question: 'How often should smoke alarms be replaced?',
                answer: 'Typically every ten years from the date of manufacture, which is printed on the unit itself. The sensor degrades whether the alarm has ever gone off or not, so testing it tells you the horn and battery work, not the sensor. Take one down and check the date, because almost nobody does.',
            },
            {
                question: 'Does my whole house need rewiring if it is old?',
                answer: 'Usually not. In most older homes the switchboard is the urgent part and the existing cabling tests fine. Full rewires are the exception rather than the rule. If someone quotes a whole-house rewire without testing first, get a second opinion.',
            },
        ],
    },
    {
        title: 'Materials, Appliances and Renovations',
        items: [
            {
                question: 'Can you install fittings or appliances I have bought myself?',
                answer: 'Yes, as long as they are approved for sale and use in Australia. There is no markup game here and no requirement to buy through us. We can also supply trade-quality gear if you would rather we sorted it. Just have the item on site and unpacked with its instructions before we arrive.',
            },
            {
                question: 'Does an induction cooktop need its own circuit?',
                answer: 'Almost always. A typical four-zone induction cooktop draws well over 30 amps at full output and is hardwired, and the circuit that fed your old oven usually was not sized for that as well. Tell us the model before delivery day, because finding out on the day means a new kitchen and no way to cook.',
            },
            {
                question: 'When should I get an electrician involved in a renovation?',
                answer: 'At planning stage, before demolition. That is when layout decisions are free. Once the plaster is on and the cabinetry is in, moving a powerpoint means cutting and patching, and running lighting into joinery is off the table entirely. The planning conversation costs you nothing.',
            },
            {
                question: 'Can I just put LED globes in my existing halogen downlights?',
                answer: 'You can, but we would not. The old can and transformer stay in place, so you keep the insulation clearance requirement and often get flickering or buzzing from the mismatch. Replacing the whole fitting is what actually removes the heat, lets insulation sit properly and cuts the running cost.',
            },
            {
                question: 'Can my switchboard handle an EV charger?',
                answer: 'Often yes, but it needs checking rather than assuming. A home charger is a sustained high load, so we look at the main switch rating, the consumer mains, what is already connected and whether there is physical space for the circuit. Where the supply is tight, load management is frequently a cheaper answer than a supply upgrade.',
            },
        ],
    },
    {
        title: 'Landlords, Builders and Business',
        items: [
            {
                question: 'Do you work with property managers and landlords?',
                answer: 'Yes, regularly. Safety switch testing with written reports, smoke alarm compliance, and repairs coming out of condition reports. You get documentation you can file, and turnaround that does not hold up a tenancy.',
            },
            {
                question: 'Do you take on work for builders?',
                answer: 'Yes, as a subcontractor. New builds, extensions, renovations and small commercial fitouts. We quote from plans with clear inclusions and exclusions, turn up on the day we said, do a rough-in the plasterer is not cursing, and get the compliance paperwork back without being chased.',
            },
            {
                question: 'Do you do commercial and medical work?',
                answer: 'Yes. Shop, office and consulting room fitouts, LED lighting upgrades, distribution boards, exit and emergency lighting, and test and tag. We also work in medical, dental and allied health premises and in disability housing, both of which carry their own requirements.',
            },
            {
                question: 'Do you do emergency electrical work?',
                answer: 'Yes. Loss of power, a breaker that will not stay on, burning smells, sparking outlets, or water in a switchboard. Call 0435 006 420. If something is visibly wrong, turn the main switch off first, then call. We will also tell you honestly if it can safely wait until morning.',
            },
        ],
    },
];

const allItems = groups.flatMap((group) => group.items);

export default function FAQ() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: allItems.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
    };

    return (
        <section className="py-16 bg-neutral-offwhite">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="container-custom max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
                    <p className="text-neutral-slate">
                        Straight answers on pricing, safety, compliance and how we work. If yours is not here,{' '}
                        <Link href="/contact" className="text-navy font-semibold underline underline-offset-4 hover:text-gold">
                            just ask
                        </Link>
                        .
                    </p>
                </div>

                <div className="space-y-10">
                    {groups.map((group, groupIndex) => (
                        <div key={group.title}>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-gold mb-4">{group.title}</h3>
                            {/* Only the very first group starts expanded, so the page does not open as a wall of text. */}
                            <Accordion items={group.items} defaultOpen={groupIndex === 0 ? 0 : null} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
