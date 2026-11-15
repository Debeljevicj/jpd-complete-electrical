import Link from 'next/link';
import Image from 'next/image';
import { Mail, Facebook, Instagram } from 'lucide-react';
import { serviceIndex } from '@/data/services';
import { suburbs } from '@/data/suburbs';

/** Highest-intent services and a short list of suburbs, so the footer links carry weight rather than listing everything. */
const footerServices = serviceIndex.slice(0, 6);
// The suburb pages Search Console had nearest page one in Oct 2026, rather than the
// seven biggest by population, which left St Agnes and Fairview Park out sitewide.
const footerSuburbs = [
    'electrician-wynn-vale',
    'electrician-st-agnes',
    'electrician-golden-grove',
    'electrician-greenwith',
    'electrician-fairview-park',
    'electrician-modbury',
    'electrician-redwood-park',
]
    .map((slug) => suburbs.find((s) => s.slug === slug))
    .filter((s): s is (typeof suburbs)[number] => Boolean(s));

const companyLinks = [
    { href: '/about', label: 'About Justin' },
    { href: '/recent-work', label: 'Our work' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/blog', label: 'Guides' },
    { href: '/faq', label: 'FAQs' },
    { href: '/contact', label: 'Contact' },
    { href: '/card', label: 'Save my contact' },
];

const linkClass = 'text-sm text-white/65 transition-colors hover:text-gold';
const headClass = 'mb-4 font-heading text-sm font-semibold text-white';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy text-white">
            <div className="container-custom pt-14 lg:pt-20">
                {/* Brand on the left, the number on the right. The number is the
                    biggest thing in the footer on purpose: for a trade, the
                    conversion is a call. */}
                <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
                    <div>
                        <div className="relative h-20 w-40">
                            <Image
                                src="/Stacked White Logo Transparent Background.png"
                                alt="JPD Complete Electrical"
                                fill
                                sizes="160px"
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="mt-4 font-heading text-sm font-semibold text-gold">Reliable. Honest. Professional.</p>
                    </div>

                    <div className="md:text-right">
                        <p className="eyebrow eyebrow-on-dark mb-3 md:justify-end">Talk to Justin</p>
                        <a
                            href="tel:0435006420"
                            className="display block text-5xl text-white/85 transition-colors hover:text-gold md:text-6xl"
                        >
                            0435 006 420
                        </a>
                        <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60 md:ml-auto">
                            Monday to Friday, 7:00am to 5:00pm. Weekends by appointment. After-hours emergencies by appointment.
                        </p>
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-white/10 pt-10 lg:grid-cols-4">
                    <div>
                        <h3 className={headClass}>Services</h3>
                        <ul className="space-y-2.5">
                            {footerServices.map((service) => (
                                <li key={service.slug}>
                                    <Link href={`/${service.slug}`} className={linkClass}>
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/services" className="text-sm font-semibold text-gold transition-colors hover:text-white">
                                    All {serviceIndex.length} services
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className={headClass}>Areas</h3>
                        <ul className="space-y-2.5">
                            {footerSuburbs.map((suburb) => (
                                <li key={suburb.slug}>
                                    <Link href={`/${suburb.slug}`} className={linkClass} aria-label={`Electrician ${suburb.name}`}>
                                        {suburb.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/service-areas" className="text-sm font-semibold text-gold transition-colors hover:text-white">
                                    All areas
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className={headClass}>JPD</h3>
                        <ul className="space-y-2.5">
                            {companyLinks.map(({ href, label }) => (
                                <li key={href}>
                                    <Link href={href} className={linkClass}>
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className={headClass}>Credentials</h3>
                        <ul className="space-y-2.5 text-sm text-white/65">
                            <li>Licence PGE296191</li>
                            <li>NECA member</li>
                            <li>Public liability &amp; professional indemnity</li>
                            <li>
                                Based in Wynn Vale SA 5127,{' '}
                                <Link href="/service-areas" className="transition-colors hover:text-gold">
                                    servicing all of Adelaide
                                </Link>
                            </li>
                        </ul>
                        <div className="mt-5 flex gap-2.5">
                            {[
                                { href: 'https://www.facebook.com/jpdcompleteelectrical', label: 'Facebook', Icon: Facebook, external: true },
                                { href: 'https://www.instagram.com/jpdcompleteelectrical/', label: 'Instagram', Icon: Instagram, external: true },
                                { href: 'mailto:admin@jpdcompleteelectrical.com.au', label: 'Email', Icon: Mail, external: false },
                            ].map(({ href, label, Icon, external }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-gold hover:text-gold"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* pb-24 on phones clears the sticky call bar. */}
                <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pb-24 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between lg:pb-8">
                    <p>&copy; {currentYear} JPD Complete Electrical</p>
                    <p>
                        <Link href="/privacy" className="transition-colors hover:text-gold">
                            Privacy
                        </Link>
                        {' · '}
                        {/* Internal tools. Cloudflare Access sits in front of it, so
                            anyone else who follows it just meets a login screen. */}
                        <a
                            href="https://portal.jpdcompleteelectrical.com.au"
                            className="transition-colors hover:text-gold"
                            rel="noopener noreferrer"
                        >
                            Staff login
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
