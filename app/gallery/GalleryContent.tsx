'use client';

import { useState } from 'react';
import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';
import { X, ZoomIn, Instagram } from 'lucide-react';

const categories = ['All', 'Residential', 'Commercial'];

const projects = [
    { id: 1, title: 'Commercial TV Ceiling Mount', category: 'Commercial', image: '/images/commercial_tv_wall_mount.jpg' },
    { id: 2, title: 'Medical Examination Lighting', category: 'Commercial', image: '/images/medical_examination_lighting_2.jpg' },
    { id: 3, title: 'CCTV Installation', category: 'Commercial', image: '/images/cctv_installation.jpg' },
    { id: 4, title: 'EV Charger Installation', category: 'Commercial', image: '/images/commercial_ev_charger.jpg' },
    { id: 5, title: 'Perimeter LED Lighting Upgrade', category: 'Commercial', image: '/images/commercial_perimeter_lighting_1.jpg' },
    { id: 6, title: 'Perimeter LED Lighting Upgrade', category: 'Commercial', image: '/images/commercial_perimeter_lighting_2.jpg' },
    { id: 7, title: 'Kitchen LED Strip Lighting', category: 'Residential', image: '/images/kitchen_led_strip.jpg' },
    { id: 8, title: 'LED Backlit Mirror', category: 'Residential', image: '/images/led_backlit_mirror.jpg' },
    { id: 9, title: 'Shed Power Installation', category: 'Residential', image: '/images/shed_power.jpg' },
    { id: 10, title: 'Exterior Feature Lighting', category: 'Residential', image: '/images/exterior_feature_lighting.jpg' },
    { id: 11, title: 'Feature Wall Lighting', category: 'Residential', image: '/images/feature_wall_lighting.jpg' },
    { id: 12, title: 'New Powerpoint Installation', category: 'Residential', image: '/images/new_powerpoint.jpg' },
    { id: 13, title: 'Shed Lighting', category: 'Residential', image: '/images/shed_lighting.jpg' },
    { id: 14, title: 'Shed Switchboard', category: 'Residential', image: '/images/shed_switchboard.jpg' },
    { id: 15, title: 'Bathroom Renovation', category: 'Residential', image: '/images/bathroom_renovation.jpg' },
    { id: 16, title: '6.6kW Solar System', category: 'Residential', image: '/images/solar_system_6kw.jpg' },
    { id: 17, title: 'Solar System Installation', category: 'Residential', image: '/images/solar_system_main.jpg' },
    { id: 18, title: 'Switchboard Upgrade', category: 'Residential', image: '/images/residential_switchboard_upgrade_1.jpg' },
    { id: 19, title: 'Switchboard Upgrade', category: 'Residential', image: '/images/residential_switchboard_upgrade_2.jpg' },
    { id: 20, title: 'Pool Switchboard & Power', category: 'Residential', image: '/images/residential_pool_switchboard.jpg' },
];

export default function GalleryContent() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Custom order for 'All' view: prioritize specific projects
    const customOrderIds = [17, 18, 13, 15, 3, 4]; // Solar, Switchboard, Shed Lighting, Bathroom, CCTV, EV Charger

    const filteredProjects = activeFilter === 'All'
        ? [...projects].sort((a, b) => {
            const indexA = customOrderIds.indexOf(a.id);
            const indexB = customOrderIds.indexOf(b.id);

            // Both are in priority list
            if (indexA !== -1 && indexB !== -1) return indexA - indexB;
            // Only a is in priority list
            if (indexA !== -1) return -1;
            // Only b is in priority list
            if (indexB !== -1) return 1;
            // Neither in priority list, maintain original order
            return a.id - b.id;
        })
        : projects.filter(p => p.category === activeFilter);

    return (
        <>
            {/* Hero */}
            <section className="bg-navy text-white py-20">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Work</h1>
                    <p className="text-xl text-gold">Quality Electrical Installations Across Adelaide</p>
                </div>
            </section>

            {/* Gallery */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <SectionHeading centered>Project Gallery</SectionHeading>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${activeFilter === category
                                    ? 'bg-navy text-white'
                                    : 'bg-gray-200 text-neutral-slate hover:bg-gold hover:text-navy'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="card overflow-hidden p-0 group cursor-pointer relative"
                                onClick={() => setSelectedImage(project.image)}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        loading="lazy"
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <ZoomIn className="w-10 h-10 text-white drop-shadow-lg" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                                        <span className="inline-block px-3 py-1 bg-gold text-navy text-xs font-bold rounded-full mb-2">
                                            {project.category}
                                        </span>
                                        <h3 className="text-white font-bold text-lg">{project.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gold transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-10 h-10" />
                    </button>
                    <div className="relative w-full max-w-5xl h-[80vh]" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={selectedImage}
                            alt="Project Full View"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}

            {/* Before/After Section */}
            <section className="section-padding bg-neutral-offwhite">
                <div className="container-custom">
                    <SectionHeading centered>Professional Electrical Work</SectionHeading>
                    <p className="text-center text-neutral-slate text-lg mb-12 max-w-3xl mx-auto">
                        Every project is completed with attention to detail, ensuring safety compliance and customer satisfaction.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="card">
                            <h3 className="text-2xl font-bold text-navy mb-4">Quality Workmanship</h3>
                            <p className="text-neutral-slate mb-4">
                                Every installation is completed to Australian electrical standards with clean, professional finishes.
                            </p>
                            <ul className="space-y-2 text-neutral-slate">
                                <li className="flex items-start gap-2">
                                    <span className="text-gold">•</span>
                                    <span>Licensed and insured electrician</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold">•</span>
                                    <span>Compliance with safety standards</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold">•</span>
                                    <span>Clean and tidy work sites</span>
                                </li>
                            </ul>
                        </div>
                        <div className="card">
                            <h3 className="text-2xl font-bold text-navy mb-4">Our Commitment</h3>
                            <p className="text-neutral-slate mb-4">
                                From residential homes to commercial facilities, we deliver reliable electrical solutions.
                            </p>
                            <ul className="space-y-2 text-neutral-slate">
                                <li className="flex items-start gap-2">
                                    <span className="text-gold">•</span>
                                    <span>Transparent pricing and quotes</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold">•</span>
                                    <span>On-time project completion</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold">•</span>
                                    <span>100% customer satisfaction focus</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Instagram Connect */}
            <section className="section-padding bg-white border-t border-gray-100">
                <div className="container-custom text-center">
                    <div className="inline-flex items-center justify-center p-4 bg-neutral-offwhite rounded-full mb-6">
                        <Instagram className="w-8 h-8 text-navy" />
                    </div>
                    <h2 className="text-3xl font-bold text-navy mb-4">Follow Us on Instagram</h2>
                    <p className="text-neutral-slate text-lg mb-8 max-w-2xl mx-auto">
                        Check out our latest projects, behind-the-scenes updates, and electrical tips on our Instagram page.
                    </p>
                    <a
                        href="https://www.instagram.com/jpdcompleteelectrical/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline border-navy text-navy hover:bg-navy hover:text-white gap-2"
                    >
                        <Instagram className="w-5 h-5" />
                        @jpdcompleteelectrical
                    </a>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-navy text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
                    <p className="text-xl mb-8 text-white/90">
                        Contact us today for a free consultation and quote
                    </p>
                    <a href="/contact" className="btn btn-gold text-lg px-8 py-4 inline-block">
                        Get a Free Quote
                    </a>
                </div>
            </section>
        </>
    );
}
