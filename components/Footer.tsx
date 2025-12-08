import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy text-white">
            <div className="container-custom section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_auto_1.2fr_1fr] gap-12">
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
                                <Link href="/contact" className="text-white/80 hover:text-gold transition-colors">
                                    Contact
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
                        <p className="text-white/80 text-sm mb-3">
                            <strong className="text-gold">PGE296191</strong><br />
                            Licensed Electrician<br />
                            Member of NECA
                        </p>
                        <p className="text-white/80 text-sm mb-4">
                            Public Liability Insured
                        </p>
                        <p className="text-white/80 text-sm">
                            <strong className="text-gold mb-2 block">Service Areas:</strong>
                            Adelaide Metropolitan Area<br />
                            Adelaide CBD<br />
                            Regional & Remote (Upon Enquiry)
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/20 mt-12 pt-8 pb-24 lg:pb-8 text-center text-white/60 text-sm">
                    <p>&copy; {currentYear} JPD Complete Electrical. All rights reserved.</p>
                </div>
            </div>
        </footer >
    );
}
