import { Phone } from 'lucide-react';

const serviceAreas: Record<string, string[]> = {
    'Adelaide CBD & Inner': ['Adelaide CBD', 'North Adelaide', 'Prospect', 'Unley', 'Norwood', 'Thebarton', 'Kensington', 'Parkside', 'Goodwood'],
    'Northern Suburbs': ['Elizabeth', 'Salisbury', 'Gawler', 'Golden Grove', 'Mawson Lakes', 'Modbury', 'Para Hills', 'Paralowie', 'Craigmore', 'Angle Vale', 'Wynn Vale', 'Tea Tree Gully'],
    'Eastern Suburbs': ['Burnside', 'Campbelltown', 'Magill', 'Athelstone', 'Newton', 'Payneham', 'Rostrevor', 'St Peters'],
    'Southern Suburbs': ['Marion', 'Morphett Vale', 'Noarlunga', 'Christies Beach', 'Reynella', 'Aberfoyle Park', 'Flagstaff Hill', 'Seaford', 'Hallett Cove', 'Woodcroft', 'Blackwood'],
    'Western & Coastal': ['Glenelg', 'Henley Beach', 'West Lakes', 'Grange', 'Semaphore', 'Port Adelaide', 'Findon', 'Woodville', 'Brighton'],
    'Adelaide Hills': ['Stirling', 'Aldgate', 'Mount Barker', 'Crafers', 'Bridgewater', 'Littlehampton'],
};

export default function ServiceAreaChecker() {
    return (
        <section className="section-padding bg-neutral-offwhite relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Content Side */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                            Do We Service Your Area?
                        </h2>
                        <p className="text-lg text-neutral-slate mb-8">
                            We service all of Adelaide and the surrounding suburbs listed below.
                        </p>

                        <div className="space-y-5 mb-8">
                            {Object.entries(serviceAreas).map(([region, suburbs]) => (
                                <div key={region}>
                                    <h3 className="font-bold text-navy mb-2">{region}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {suburbs.map((suburb) => (
                                            <span
                                                key={suburb}
                                                className="px-3 py-1 bg-white rounded-full border border-gray-200 text-sm text-neutral-slate"
                                            >
                                                {suburb}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <p className="text-neutral-slate mb-4">
                                Don&apos;t see your suburb? We probably still service your area — give us a call to book.
                            </p>
                            <a href="tel:0435006420" className="btn btn-gold inline-flex items-center gap-2">
                                <Phone className="w-5 h-5" />
                                Call to Book: 0435 006 420
                            </a>
                        </div>
                    </div>

                    {/* Google Map */}
                    <div className="relative h-[400px] lg:sticky lg:top-24 bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-200 hidden lg:block">
                        <iframe
                            title="JPD Complete Electrical service area — Adelaide, South Australia"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d418336.63960122806!2d138.2815111742472!3d-34.99988560775201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab735c7c526b33f%3A0x4033654628ec640!2sAdelaide%20SA!5e0!3m2!1sen!2sau!4v1709615000000!5m2!1sen!2sau"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
