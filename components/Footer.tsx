import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { serviceIndex } from '@/data/services';
import { suburbs } from '@/data/suburbs';

/** Highest-intent services and biggest suburbs, so the footer links carry weight rather than listing everything. */
const footerServices = serviceIndex.slice(0, 6);
const footerSuburbs = suburbs.slice(0, 7);

const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/service-areas', label: 'Service Areas' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
    { href: '/card', label: 'Save My Contact' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy text-white">
            <div className="container-custom py-12 lg:py-14">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
                    {/* Brand, licence and socials */}
                    <div className="col-span-2 lg:col-span-1">
                        <div className="relative h-14 w-44 mb-4">
                            <Image
                                src="/Stacked White Logo Transparent Background.png"
                                alt="JPD Complete Electrical"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-white/80 text-sm leading-relaxed mb-4">
                            Owner-operated electrical for homes, rentals, builders and small business across
                            Adelaide&apos;s north-east.
                        </p>
                        <ul className="space-y-1 text-white/70 text-sm mb-4">
                            <li>
                                <strong className="text-gold font-semibold">PGE296191</strong> Licensed Electrician
                            </li>
                            <li>Member of NECA</li>
                            <li>Public liability &amp; professional indemnity insured</li>
                        </ul>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/profile.php?id=61567696480436" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold transition-colors" aria-label="Facebook">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://www.instagram.com/jpdcompleteelectrical/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold transition-colors" aria-label="Instagram">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-base font-bold mb-4 text-gold">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map(({ href, label }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="text-white/80 hover:text-gold transition-colors text-sm"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Popular Services */}
                    <div>
                        <h3 className="text-base font-bold mb-4 text-gold">Services</h3>
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
                        <h3 className="text-base font-bold mb-4 text-gold">Service Areas</h3>
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

                    {/* Contact. The only place in the footer that states where we are,
                        so the suburb list above is not competing with a second one. */}
                    <div>
                        <h3 className="text-base font-bold mb-4 text-gold">Contact</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a
                                    href="tel:0435006420"
                                    className="flex items-center gap-2 text-white/80 hover:text-gold transition-colors font-semibold"
                                >
                                    <Phone className="w-4 h-4 shrink-0" />
                                    <span>0435 006 420</span>
                                </a>
                            </li>
                            <li>
                                {/* min-w-0 so the long address can wrap: flex items default to
                                    min-width:auto and refuse to shrink below their content. */}
                                <a href="mailto:admin@jpdcompleteelectrical.com.au" className="flex items-start gap-2 text-white/80 hover:text-gold transition-colors">
                                    <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                                    <span className="min-w-0 break-all">admin@jpdcompleteelectrical.com.au</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-white/80">
                                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                                <span>
                                    Based in Wynn Vale SA 5127
                                    <br />
                                    <Link href="/service-areas" className="text-white/60 hover:text-gold transition-colors">
                                        Servicing Adelaide&apos;s north-east
                                    </Link>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/20 mt-10 pt-6 pb-24 lg:pb-6 text-center text-white/60 text-sm">
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
