import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { serviceIndex } from '@/data/services';
import { suburbs } from '@/data/suburbs';

/** Highest-intent services and biggest suburbs, so the footer links carry weight rather than listing everything. */
const footerServices = serviceIndex.slice(0, 6);
const footerSuburbs = suburbs.slice(0, 7);

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy text-white">
            <div className="container-custom section-padding">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
                    {/* Logo & About */}
                    <div>
                        <div className="relative h-16 w-48 mb-4">
                            <Image
                                src="/Stacked White Logo Transparent Background.png"
                                alt="JPD Complete Electrical"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-white/80 text-sm leading-relaxed">
                            Professional electrical services for residential, commercial, medical and disability housing across Adelaide metro.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-gold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-white/80 hover:text-gold transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-white/80 hover:text-gold transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-white/80 hover:text-gold transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/reviews" className="text-white/80 hover:text-gold transition-colors">
                                    Reviews
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-white/80 hover:text-gold transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-white/80 hover:text-gold transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/card" className="text-white/80 hover:text-gold transition-colors">
                                    Save My Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Popular Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-gold">Services</h3>
                        <ul className="space-y-2">
                            {footerServices.map((service) => (
                                <li key={service.slug}>
                                    <Link
                                        href={`/${service.slug}`}
                                        className="text-white/80 hover:text-gold transition-colors text-sm"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/services" className="text-gold hover:text-white transition-colors text-sm font-semibold">
                                    All services →
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Service Areas */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-gold">Service Areas</h3>
                        <ul className="space-y-2">
                            {footerSuburbs.map((suburb) => (
                                <li key={suburb.slug}>
                                    <Link
                                        href={`/${suburb.slug}`}
                                        className="text-white/80 hover:text-gold transition-colors text-sm"
                                    >
                                        Electrician {suburb.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/service-areas" className="text-gold hover:text-white transition-colors text-sm font-semibold">
                                    All suburbs →
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-gold">Contact</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="tel:0435006420"
                                    className="flex items-center gap-2 text-white/80 hover:text-gold transition-colors"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span>0435 006 420</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:admin@jpdcompleteelectrical.com.au" className="flex items-center gap-2 text-white/80 hover:text-gold transition-colors">
                                    <Mail className="w-4 h-4 flex-shrink-0" />
                                    <span className="whitespace-nowrap text-sm">admin@jpdcompleteelectrical.com.au</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-white/80">
                                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                                <span>Adelaide Metro<br />Golden Grove, Wynn Vale, Modbury, Tea Tree Gully & Surrounds</span>
                            </li>
                        </ul>
                        <div className="flex gap-4 mt-4">
                            <a href="https://www.facebook.com/profile.php?id=61567696480436" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-gold transition-colors" aria-label="Facebook">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://www.instagram.com/jpdcompleteelectrical/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-gold transition-colors" aria-label="Instagram">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Licence & Areas */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-gold">Licence & Areas</h3>
                        <ul className="space-y-2 text-white/80 text-sm mb-4">
                            <li><strong className="text-gold">PGE296191</strong> — Licensed Electrician</li>
                            <li>Member of NECA</li>
                            <li>Public Liability &amp; Professional Indemnity Insured</li>
                        </ul>
                        <h4 className="font-bold text-gold mb-2 text-sm">Service Areas</h4>
                        <p className="text-white/80 text-sm leading-relaxed">
                            Adelaide CBD, Golden Grove, Elizabeth, Salisbury, Gawler, Tea Tree Gully,
                            Modbury, Burnside, Marion, Morphett Vale, Glenelg, Mount Barker & surrounding suburbs
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/20 mt-12 pt-8 pb-24 lg:pb-8 text-center text-white/60 text-sm">
                    <p>&copy; {currentYear} JPD Complete Electrical. All rights reserved.</p>
                    {/* Internal tools. Deliberately understated so it reads as staff-only
                        rather than a service on offer. Cloudflare Access sits in front of
                        it, so anyone else who follows it just meets a login screen. */}
                    <p className="mt-3">
                        <a
                            href="https://portal.jpdcompleteelectrical.com.au"
                            className="text-white/40 hover:text-gold transition-colors"
                            rel="noopener noreferrer"
                        >
                            Staff login
                        </a>
                    </p>
                </div>
            </div>
        </footer >
    );
}
