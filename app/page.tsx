'use client';

import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import ClientReviews from '@/components/ClientReviews';
import ProcessSteps from '@/components/ProcessSteps';
import FAQ from '@/components/FAQ';
import { Lightbulb, Plug, Fan, Gauge, Building2, HeartPulse, Shield, MessageCircle, Award } from 'lucide-react';

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-navy min-h-[90vh] flex items-center overflow-hidden group pt-16 md:pt-0">
                {/* Background Image with Parallax & Blending */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute right-0 top-0 bottom-0 w-full md:w-2/3 lg:w-1/2">
                        <Image
                            src="/images/justin_portrait_new.jpg"
                            alt="Justin - JPD Complete Electrical Owner"
                            fill
                            className="object-cover object-center"
                            priority
                            quality={100}
                            style={{
                                objectPosition: 'center top',
                                maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                                WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/20 to-transparent md:hidden" />
                    </div>
                </div>

                <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white space-y-6 animate-slide-up pb-12 md:pb-0">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 animate-fade-in-up mt-4 md:mt-0" style={{ animationDelay: '0.1s' }}>
                            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                            <span className="text-sm font-semibold tracking-wide uppercase text-gold">Adelaide's Trusted Electrician</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            Reliable. Honest. Professional. <span className="text-gold">Electrical Work</span> You Can Trust.
                        </h1>

                        <p className="text-xl text-gray-300 max-w-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            Adelaide's trusted electrician for builders, property managers, and homeowners.
                            We show up, clean up, and keep our promises.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <Link href="/contact" className="btn btn-gold text-lg px-8 hover:scale-105 transition-transform">
                                Get a Free Quote
                            </Link>
                            <a href="tel:0435006420" className="btn btn-outline border-white text-white hover:bg-white hover:text-navy text-lg px-8 hover:scale-105 transition-transform">
                                Call 0435 006 420
                            </a>
                        </div>

                        <div className="pt-8 flex items-center gap-8 text-sm text-gray-400 animate-fade-in-up pb-8 md:pb-0" style={{ animationDelay: '0.5s' }}>
                            <div className="flex items-center gap-2">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold font-bold text-xl border border-white/5">
                                    7+
                                </div>
                                <span>Years<br />Experience</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold font-bold text-xl border border-white/5">
                                    5★
                                </div>
                                <span>Google<br />Rated</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Snapshot */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <SectionHeading centered>Our Services</SectionHeading>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ServiceCard
                            icon={<Lightbulb className="w-8 h-8" />}
                            title="Downlights & Lighting"
                            description="Expert installation of downlights, feature lighting, and LED solutions for modern homes."
                            variant="residential"
                        />
                        <ServiceCard
                            icon={<Plug className="w-8 h-8" />}
                            title="Powerpoints & Switches"
                            description="New installations, upgrades, and relocations for all your power needs."
                            variant="residential"
                        />
                        <ServiceCard
                            icon={<Fan className="w-8 h-8" />}
                            title="Ceiling & Exhaust Fans"
                            description="Professional fan installation and replacement for optimal ventilation."
                            variant="residential"
                        />
                        <ServiceCard
                            icon={<Gauge className="w-8 h-8" />}
                            title="Switchboard Upgrades"
                            description="We upgrade outdated switchboards to modern, compliant installations, removing safety hazards and ensuring full RCD protection to Australian Standards."
                            variant="residential"
                        />
                        <ServiceCard
                            icon={<Building2 className="w-8 h-8" />}
                            title="Commercial & Specialty Services"
                            description="Complete electrical solutions for offices, retail stores, gyms, medical clinics, aged care facilities, and disability housing with full compliance focus."
                            variant="residential"
                        />
                        <ServiceCard
                            icon={<Shield className="w-8 h-8" />}
                            title="Service & Maintenance"
                            description="Scheduled maintenance, RCD testing, emergency lighting testing, smoke detector servicing, and compliance inspections for all property types."
                            variant="residential"
                        />
                    </div>
                </div>
            </section>

            {/* Process Steps - How We Work */}
            <ProcessSteps />

            {/* Why Choose JPD */}
            <section className="section-padding bg-navy text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] opacity-5" />
                <div className="container-custom relative z-10">
                    <SectionHeading centered className="!text-white">Why Choose JPD Complete Electrical</SectionHeading>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <div className="text-center group p-6 rounded-xl hover:bg-white/5 transition-colors">
                            <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                                <Shield className="w-10 h-10 text-navy" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gold">Reliable & Honest</h3>
                            <p className="text-white/80 leading-relaxed">
                                Transparent pricing, punctual service, and dependable workmanship you can trust every time.
                            </p>
                        </div>
                        <div className="text-center group p-6 rounded-xl hover:bg-white/5 transition-colors">
                            <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                                <Award className="w-10 h-10 text-navy" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gold">High-Quality Workmanship</h3>
                            <p className="text-white/80 leading-relaxed">
                                Clean, professional installations with meticulous attention to detail and safety standards.
                            </p>
                        </div>
                        <div className="text-center group p-6 rounded-xl hover:bg-white/5 transition-colors">
                            <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                                <MessageCircle className="w-10 h-10 text-navy" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gold">Clear Communication</h3>
                            <p className="text-white/80 leading-relaxed">
                                We keep you informed throughout the entire job with clear explanations and regular updates.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="section-padding bg-neutral-offwhite">
                <div className="container-custom">
                    <SectionHeading centered>Featured Projects</SectionHeading>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="card overflow-hidden p-0 group">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src="/images/solar_system_6kw.jpg"
                                    alt="6.6kW Solar System Installation"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    loading="lazy"
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-navy mb-2">Solar System Installation</h3>
                                <p className="text-neutral-slate">High-efficiency 6.6kW solar system installation helping homeowners reduce energy bills and carbon footprint.</p>
                            </div>
                        </div>
                        <div className="card overflow-hidden p-0 group">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src="/images/kitchen_led_strip.jpg"
                                    alt="Kitchen LED Strip Lighting"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    loading="lazy"
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-navy mb-2">Kitchen LED Lighting</h3>
                                <p className="text-neutral-slate">Modern LED strip lighting installation adding ambiance and functionality to a contemporary kitchen renovation.</p>
                            </div>
                        </div>
                        <div className="card overflow-hidden p-0 group">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src="/images/medical_clinic_upgrade.png"
                                    alt="Medical Clinic Upgrade"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    loading="lazy"
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-navy mb-2">Medical Clinic Upgrade</h3>
                                <p className="text-neutral-slate">Full medical clinic electrical upgrade including ceiling-mounted TV installation, 15-camera CCTV system, medical examination lighting across treatment rooms, and scheduled patient-area compliance inspections.</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/gallery" className="btn btn-primary">
                            View All Projects
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <SectionHeading centered>What Our Clients Say</SectionHeading>
                    <div className="mt-12">
                        <ClientReviews />
                    </div>
                    <div className="text-center mt-12">
                        <Link href="/reviews" className="btn btn-primary">
                            Read More Reviews
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQ />

            {/* Final CTA */}
            <section className="section-padding bg-navy text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] opacity-5" />
                <div className="container-custom text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Contact us today for a free consultation and quote on your next electrical project
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn btn-gold text-lg px-8">
                            Get a Free Quote
                        </Link>
                        <a href="tel:0435006420" className="btn btn-outline border-white text-white hover:bg-white hover:text-navy text-lg px-8">
                            Call 0435 006 420
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
