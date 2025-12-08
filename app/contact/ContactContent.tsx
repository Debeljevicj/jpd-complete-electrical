'use client';

import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import SuccessModal from '@/components/SuccessModal';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function ContactContent() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        urgency: '',
        service: '',
        message: '',
    });

    const [status, setStatus] = useState<string>("");
    const [showModal, setShowModal] = useState(false);
    const [submittedUrgency, setSubmittedUrgency] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        const form = e.target as HTMLFormElement;
        const data = new FormData(form);

        // Web3Forms Access Key
        data.append("access_key", "74377dbd-3c64-4ac9-9b0a-ca7dde014b2a");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: data
            });

            const result = await response.json();

            if (result.success) {
                setSubmittedUrgency(formData.urgency);
                setStatus("success");
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    urgency: '',
                    service: '',
                    message: '',
                });
                setShowModal(true);
            } else {
                console.log("Error", result);
                setStatus("error");
                alert('Something went wrong. Please try again or call us directly.');
            }
        } catch (error) {
            console.log(error);
            setStatus("error");
            alert('Something went wrong. Please try again or call us directly.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <SuccessModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                urgency={submittedUrgency}
            />
            {/* Contact Form & Info */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <SectionHeading>Request a Quote / Contact Us</SectionHeading>
                            <p className="text-neutral-slate mb-8">
                                Fill out the form below and we'll get back to you, or give us a call on <a href="tel:0435006420" className="text-gold font-semibold hover:underline">0435 006 420</a> to speak with us directly.
                            </p>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-navy font-semibold mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-navy font-semibold mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition"
                                        placeholder="0400 000 000"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-navy font-semibold mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="urgency" className="block text-navy font-semibold mb-2">
                                        Urgency Level *
                                    </label>
                                    <select
                                        id="urgency"
                                        name="urgency"
                                        value={formData.urgency}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition"
                                    >
                                        <option value="">Select urgency...</option>
                                        <option value="low">Low - General Enquiry (Reply within 24-48hrs)</option>
                                        <option value="medium">Medium - Standard Service (Reply within 24hrs)</option>
                                        <option value="high">High - Urgent Service Required (Reply ASAP)</option>
                                        <option value="emergency">Emergency - Immediate Assistance Needed</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-navy font-semibold mb-2">
                                        Service Required
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition"
                                    >
                                        <option value="">Select a service...</option>
                                        <option value="residential">Residential Services</option>
                                        <option value="commercial">Commercial Services</option>
                                        <option value="medical">Medical & Disability Housing</option>
                                        <option value="maintenance">Maintenance & Repairs</option>
                                        <option value="emergency">Emergency Services</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-navy font-semibold mb-2">
                                        Job Description
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition resize-none"
                                        placeholder="Please describe your electrical requirements (optional)..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-gold w-full text-lg flex items-center justify-center gap-2"
                                >
                                    Send Message <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <SectionHeading>Contact Information</SectionHeading>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-gold" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-navy mb-1">Phone</h3>
                                        <a href="tel:0435006420" className="text-neutral-slate hover:text-gold transition-colors text-lg">
                                            0435 006 420
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-gold" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-navy mb-1">Email</h3>
                                        <a href="mailto:admin@jpdcompleteelectrical.com.au" className="text-neutral-slate hover:text-gold transition-colors">
                                            admin@jpdcompleteelectrical.com.au
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-gold" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-navy mb-1">Business Hours</h3>
                                        <p className="text-neutral-slate">Monday - Friday: 7:00 AM - 5:00 PM</p>
                                        <p className="text-neutral-slate">Saturday - Sunday: By appointment</p>
                                        <p className="text-neutral-slate text-sm mt-2 italic">Emergency services available after hours by appointment</p>
                                    </div>
                                </div>
                            </div>

                            {/* Service Areas */}
                            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-gold">
                                <h3 className="text-2xl font-bold text-navy mb-6">Service Areas</h3>
                                <div className="relative h-64 bg-neutral-offwhite rounded-lg mb-6 overflow-hidden group">
                                    <iframe
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
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 p-3 bg-neutral-offwhite rounded-lg">
                                        <MapPin className="w-5 h-5 text-gold" />
                                        <span className="font-medium text-navy">Adelaide Metropolitan Area</span>
                                    </li>
                                    <li className="flex items-center gap-3 p-3 bg-neutral-offwhite rounded-lg">
                                        <MapPin className="w-5 h-5 text-gold" />
                                        <span className="font-medium text-navy">Adelaide CBD</span>
                                    </li>
                                    <li className="flex items-center gap-3 p-3 bg-neutral-offwhite rounded-lg">
                                        <MapPin className="w-5 h-5 text-gold" />
                                        <span className="font-medium text-navy">Regional & Remote (Upon Enquiry)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emergency Contact */}
            <section className="section-padding bg-neutral-offwhite">
                <div className="container-custom text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Need Emergency Electrical Services?</h2>
                        <p className="text-neutral-slate text-lg mb-6">
                            For urgent electrical issues that can't wait, give us a call directly.
                        </p>
                        <a
                            href="tel:0435006420"
                            className="btn btn-gold text-xl px-10 py-5 inline-flex items-center gap-3"
                        >
                            <Phone className="w-6 h-6" />
                            Call Now: 0435 006 420
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
