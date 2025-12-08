import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import ServiceAreaChecker from '@/components/ServiceAreaChecker';
import Button from '@/components/Button';
import {
    Lightbulb, Plug, Fan, Gauge, Wrench, Zap,
    Building2, AlertCircle, Calendar,
    HeartPulse, Home, Shield
} from 'lucide-react';

export const metadata = {
    title: 'Electrical Services Adelaide | Residential & Commercial Electrician',
    description: 'Comprehensive electrical services including switchboard upgrades, LED lighting, medical clinic fit-outs, and disability housing electrical safety.',
};

export default function ServicesPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-navy text-white py-20">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
                    <p className="text-xl text-gold">Comprehensive Electrical Solutions</p>
                </div>
            </section>

            {/* Quick Nav - Mobile Only */}
            <div className="lg:hidden sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm overflow-x-auto">
                <div className="flex whitespace-nowrap p-4 gap-4">
                    <a href="#residential" className="px-4 py-2 bg-neutral-offwhite rounded-full text-sm font-bold text-navy hover:bg-gold hover:text-navy transition-colors">Residential</a>
                    <a href="#commercial" className="px-4 py-2 bg-neutral-offwhite rounded-full text-sm font-bold text-navy hover:bg-gold hover:text-navy transition-colors">Commercial</a>
                    <a href="#medical" className="px-4 py-2 bg-neutral-offwhite rounded-full text-sm font-bold text-navy hover:bg-gold hover:text-navy transition-colors">Medical</a>
                    <a href="#maintenance" className="px-4 py-2 bg-neutral-offwhite rounded-full text-sm font-bold text-navy hover:bg-gold hover:text-navy transition-colors">Maintenance</a>
                </div>
            </div>

            {/* Residential Services */}
            <section id="residential" className="section-padding bg-white scroll-mt-20">
                <div className="container-custom">
                    <SectionHeading>Residential Services</SectionHeading>
                    <p className="text-neutral-slate text-lg mb-8 max-w-3xl">
                        From simple repairs to complete home rewiring, we provide comprehensive electrical
                        services for homeowners. Specialising in switchboard upgrades, safety switches, and energy-efficient solutions.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ServiceCard
                            icon={<Lightbulb className="w-8 h-8" />}
                            title="Downlights & Feature Lighting"
                            description="We use laser levels for perfect alignment. Expert installation of pendants, task lighting, and kitchen renovation lighting."
                            variant="residential"
                        />
                        <ServiceCard
                            icon={<Plug className="w-8 h-8" />}
                            title="Powerpoints & Switches"
                            description="New powerpoints, oven installs, and induction cooktop connections. We ensure your kitchen renovation has the power it needs."
                            variant="residential"
                        />
                        <ServiceCard
                            icon={<Fan className="w-8 h-8" />}
                            title="Ceiling & Exhaust Fans"
                            description="Expert installation of ceiling fans and exhaust fans. Perfect for bathrooms and living areas."
                            variant="residential"
                        />
                        <ServiceCard
                            icon={<Wrench className="w-8 h-8" />}
                            title="Shed Power & Fitouts"
                            description="Complete shed electrical fitouts, including lighting, power, and sub-mains. Turn your shed into a functional workspace."
                            variant="residential"
                        />
                        <ServiceCard
                            icon={<Gauge className="w-8 h-8" />}
                            title="Switchboard Upgrades"
                            description="Upgrade outdated switchboards to modern, compliant installations with RCBOs and full safety protection to Australian Standards."
                            variant="residential"
                        />
                        <ServiceCard
                            icon={<Zap className="w-8 h-8" />}
                            title="Pool & Outdoor Electrical"
                            description="Safe power for swimming pools, spas, and garden lighting. We ensure all outdoor wiring meets strict safety standards."
                            variant="residential"
                        />
                    </div>
                </div>
            </section>

            {/* Commercial Services */}
            <section id="commercial" className="section-padding bg-neutral-offwhite scroll-mt-20">
                <div className="container-custom">
                    <SectionHeading>Commercial & Builder Services</SectionHeading>
                    <p className="text-neutral-slate text-lg mb-8 max-w-3xl">
                        Trusted by builders and property managers across Adelaide. We provide reliable
                        electrical fit-outs, compliance testing, and maintenance with zero stress.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ServiceCard
                            icon={<Building2 className="w-8 h-8" />}
                            title="Builder Electrical Services"
                            description="Reliable communication and scheduling coordination. We work efficiently to keep projects on track and avoid holding up other trades."
                            variant="commercial"
                        />
                        <ServiceCard
                            icon={<Wrench className="w-8 h-8" />}
                            title="Property Maintenance"
                            description="Flexible access for Property Managers. We can be trusted with lock boxes and tenant communication."
                            variant="commercial"
                        />
                        <ServiceCard
                            icon={<Home className="w-8 h-8" />}
                            title="Aged Care Facilities"
                            description="Specialised electrical services for aged care and healthcare providers with compliance expertise."
                            variant="commercial"
                        />
                        <ServiceCard
                            icon={<AlertCircle className="w-8 h-8" />}
                            title="Smoke Alarm Compliance"
                            description="Installation and testing of hard-wired smoke alarms. We ensure compliance with SA legislation."
                            variant="commercial"
                        />
                        <ServiceCard
                            icon={<Calendar className="w-8 h-8" />}
                            title="RCD Testing Adelaide"
                            description="Comprehensive RCD testing schedules and compliance reporting for multi-unit properties, commercial buildings, and NDIS housing."
                            variant="commercial"
                        />
                        <ServiceCard
                            icon={<Zap className="w-8 h-8" />}
                            title="Commercial Wiring"
                            description="Complete commercial wiring services, data cabling, and 3-phase power upgrades."
                            variant="commercial"
                        />
                    </div>
                </div>
            </section>

            {/* Medical & Disability Housing */}
            <section id="medical" className="section-padding bg-white scroll-mt-20">
                <div className="container-custom">
                    <SectionHeading>Medical & Disability Housing Services</SectionHeading>
                    <p className="text-neutral-slate text-lg mb-8 max-w-3xl">
                        Specialised electrical services for medical clinics and disability housing with a focus on safety and compliance.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="card group transition-all duration-300 border bg-slate-50 border-slate-200 hover:shadow-lg hover:border-navy/30">
                            <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 bg-slate-800 group-hover:bg-navy">
                                <HeartPulse className="w-8 h-8 text-gold group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-3">Medical Clinic Electrical</h3>
                            <ul className="space-y-2 text-neutral-slate">
                                <li className="flex items-start gap-2">
                                    <span className="text-gold">•</span>
                                    <span>Compliance-focused electrical installations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold">•</span>
                                    <span>Patient area installation, inspection, maintenance, and testing</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold">•</span>
                                    <span>Emergency and task lighting for clinical spaces</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold">•</span>
                                    <span>Regular maintenance and safety testing</span>
                                </li>
                            </ul>
                        </div>
                        <div className="card group transition-all duration-300 border bg-slate-50 border-slate-200 hover:shadow-lg hover:border-navy/30">
                            <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 bg-slate-800 group-hover:bg-navy">
                                <Home className="w-8 h-8 text-gold group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-3">Disability Housing Services</h3>
                            <ul className="space-y-2 text-neutral-slate">
                                <li className="flex items-start gap-2">
                                    <span className="text-gold">•</span>
                                    <span>Mindful of auditory triggers (e.g., smoke alarm testing)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold">•</span>
                                    <span>Safety-first electrical design and installation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold">•</span>
                                    <span>NDIS compliance and documentation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold">•</span>
                                    <span>Ongoing maintenance schedules and RCD testing</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Maintenance & Safety - Added ID for navigation */}
            <section id="maintenance" className="section-padding bg-neutral-offwhite scroll-mt-20">
                <div className="container-custom">
                    <SectionHeading>Service & Maintenance</SectionHeading>
                    <p className="text-neutral-slate text-lg mb-8 max-w-3xl">
                        Comprehensive preventative maintenance and compliance testing for residential, commercial, and medical properties. Keep your electrical systems safe, compliant, and reliable with our scheduled service programs.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ServiceCard
                            icon={<Shield className="w-8 h-8" />}
                            title="Safety Inspections"
                            description="Comprehensive electrical safety checks for homes and businesses."
                        />
                        <ServiceCard
                            icon={<AlertCircle className="w-8 h-8" />}
                            title="Smoke Alarms"
                            description="Installation, testing, and replacement of hard-wired smoke alarms."
                        />
                        <ServiceCard
                            icon={<Zap className="w-8 h-8" />}
                            title="Surge Protection"
                            description="Protect your valuable electronics with whole-house surge protection."
                        />
                    </div>
                    <div className="text-center mt-8">
                        <Button href="/contact" variant="gold" className="text-lg px-8 py-4">
                            Contact Now to Discuss Your Service Schedule
                        </Button>
                    </div>
                </div>
            </section>

            {/* Service Area Checker */}
            <ServiceAreaChecker />

            {/* CTA */}
            <section className="section-padding bg-navy text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Need an Electrician?</h2>
                    <p className="text-xl mb-8 text-white/90">
                        Request a free quote for your electrical project today
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="/contact" variant="gold" className="text-lg px-8 py-4">
                            Get a Quote
                        </Button>
                        <a href="tel:0435006420" className="btn bg-white text-navy hover:bg-neutral-offwhite text-lg px-8 py-4">
                            Call 0435 006 420
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
