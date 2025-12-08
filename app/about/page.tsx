import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/Button';
import Image from 'next/image';
import { Shield, Users, Award, CheckCircle2 } from 'lucide-react';

export const metadata = {
    title: 'About Justin & JPD Complete Electrical | Adelaide Electrician',
    description: 'Meet Justin, your local licensed electrician (PGE296191). Committed to reliability, honesty, and professional electrical services across Adelaide.',
};

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-navy text-white py-20">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">About JPD Complete Electrical</h1>
                    <p className="text-xl text-gold">Professional. Reliable. Trusted.</p>
                </div>
            </section>

            {/* Justin's Story */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="/images/justin_portrait_new.jpg"
                                alt="Justin - JPD Complete Electrical"
                                fill
                                className="object-cover object-center"
                                style={{
                                    objectPosition: 'center top',
                                }}
                            />
                        </div>
                        <div>
                            <SectionHeading>Meet Justin</SectionHeading>
                            <div className="space-y-4 text-neutral-slate">
                                <p>
                                    With years of experience in the electrical industry, I founded JPD Complete Electrical
                                    with a simple mission: to provide honest, reliable electrical services that exceed expectations.
                                </p>
                                <p>
                                    As a fully qualified and licensed electrician, I take pride in delivering clean, professional
                                    workmanship across residential, commercial, and specialized sectors including medical clinics
                                    and disability housing.
                                </p>
                                <p>
                                    What sets JPD apart is my commitment to clear communication and customer satisfaction.
                                    Every job, big or small, receives the same level of attention to detail and professionalism.
                                </p>
                                <p>
                                    I believe in building long-term relationships with my clients through quality work,
                                    fair pricing, and dependable service you can trust.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="section-padding bg-neutral-offwhite">
                <div className="container-custom">
                    <SectionHeading centered>Our Mission & Values</SectionHeading>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle2 className="w-8 h-8 text-gold" />
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-2">Reliability</h3>
                            <p className="text-neutral-slate">
                                Show up on time, every time. Complete work to schedule and budget.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-gold" />
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-2">Integrity</h3>
                            <p className="text-neutral-slate">
                                We do what we say we will. Honest, transparent, and accountable in everything we do.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-gold" />
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-2">Safety</h3>
                            <p className="text-neutral-slate">
                                A massive value for our customers and staff. We prioritize safety above all else.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Licenses & Insurance */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <SectionHeading centered>Licenses & Insurance</SectionHeading>
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-navy text-white rounded-lg p-8 md:p-12 text-center">
                            <div className="inline-block bg-gold text-navy px-6 py-2 rounded-full font-bold text-2xl mb-6">
                                PGE296191
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Fully Licensed Electrician</h3>
                            <p className="text-white/90 mb-6">
                                Licensed in South Australia, with full public liability insurance for your peace of mind.
                            </p>
                            <div className="mt-8">
                                <div className="bg-white/10 rounded-lg p-6 inline-block min-w-[250px]">
                                    <h4 className="text-gold font-bold mb-2">Insurance</h4>
                                    <p className="text-white/90">Public Liability Covered</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-navy text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work Together?</h2>
                    <p className="text-xl mb-8 text-white/90">
                        Get in touch today for your electrical needs
                    </p>
                    <Button href="/contact" variant="gold" className="text-lg px-8 py-4">
                        Contact Us
                    </Button>
                </div>
            </section>
        </>
    );
}
