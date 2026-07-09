import { MapPin, Phone } from 'lucide-react';

const serviceAreas = [
    'Adelaide CBD & inner suburbs',
    'Northern suburbs & Gawler',
    'Southern suburbs & Onkaparinga',
    'Eastern suburbs & Adelaide Hills',
    'Western suburbs & coast',
    'Regional & remote SA (on enquiry)',
];

export default function ServiceAreaChecker() {
    return (
        <section className="section-padding bg-neutral-offwhite relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content Side */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                            Do We Service Your Area?
                        </h2>
                        <p className="text-lg text-neutral-slate mb-8">
                            We service all of Adelaide and the surrounding areas. Not sure if we
                            reach your suburb? Give us a call and we&apos;ll let you know straight away.
                        </p>

                        <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                            {serviceAreas.map((area) => (
                                <li key={area} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                                    <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                                    <span className="font-medium text-navy text-sm">{area}</span>
                                </li>
                            ))}
                        </ul>

                        <a href="tel:0435006420" className="btn btn-gold inline-flex items-center gap-2">
                            <Phone className="w-5 h-5" />
                            Call to Check: 0435 006 420
                        </a>
                    </div>

                    {/* Google Map */}
                    <div className="relative h-[400px] bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-200 hidden lg:block">
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
