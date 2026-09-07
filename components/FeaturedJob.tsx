import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import type { JobReport } from '@/data/job-reports';

/**
 * One job given prominence on a service page, above the normal card grid.
 *
 * A job that shows the whole arc of the service, before through to finished,
 * argues for the work far better than a card in a row of three. Jobs opt in per
 * service via `featuredFor`, so the same job can lead the switchboard page while
 * sitting in the ordinary grid elsewhere.
 *
 * The caller removes the featured job from the list it passes to RecentJobs, so
 * it is not shown twice.
 */
export default function FeaturedJob({
    job,
    serviceSlug,
}: {
    job: JobReport;
    /** Uses this service's angle for the framing where the job defines one. */
    serviceSlug?: string;
}) {
    const angle = serviceSlug ? job.angles?.[serviceSlug] : undefined;
    const href = angle?.anchor ? `/blog/${job.slug}/#${angle.anchor}` : `/blog/${job.slug}/`;

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <Link
                    href={href}
                    className="group grid md:grid-cols-5 gap-0 rounded-xl overflow-hidden border border-gray-200 hover:border-gold hover:shadow-lg transition-all bg-white"
                >
                    <div className="relative h-64 md:h-auto md:min-h-[320px] md:col-span-2">
                        <Image
                            src={angle?.image ?? job.image}
                            alt={angle?.title ?? job.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    <div className="md:col-span-3 p-6 md:p-9 flex flex-col justify-center">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <Star className="w-4 h-4 text-gold" />
                            <span className="text-xs font-bold uppercase tracking-wide text-gold">
                                Featured Job
                            </span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-navy mb-3 leading-snug group-hover:text-gold transition-colors">
                            {angle?.title ?? job.title}
                        </h3>

                        <p className="text-neutral-slate leading-relaxed mb-5">
                            {angle?.blurb ?? job.excerpt}
                        </p>

                        <span className="inline-flex items-center gap-2 text-navy font-bold group-hover:text-gold transition-colors">
                            See the job, start to finish <ArrowRight className="w-4 h-4" />
                        </span>
                    </div>
                </Link>
            </div>
        </section>
    );
}
