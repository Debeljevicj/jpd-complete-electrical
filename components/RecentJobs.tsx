import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { JobReport } from '@/data/job-reports';

/**
 * Real-job cards for service and suburb pages.
 *
 * Renders nothing when there are no matching jobs, which is what lets this drop
 * into all 29 landing pages at once while only a handful of them have a job
 * written up yet. As jobs are added the right pages start showing them without
 * anyone touching a template.
 */
export default function RecentJobs({
    jobs,
    heading,
    intro,
    angleFor,
}: {
    jobs: JobReport[];
    heading: string;
    intro?: string;
    /** Service slug to frame the cards for. Falls back to the job's own title and excerpt. */
    angleFor?: string;
}) {
    if (jobs.length === 0) return null;

    return (
        <section className="section-padding bg-neutral-offwhite">
            <div className="container-custom">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 gold-underline">{heading}</h2>
                {intro && <p className="text-neutral-slate mb-8 max-w-3xl">{intro}</p>}

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {jobs.slice(0, 3).map((job) => {
                        const angle = angleFor ? job.angles?.[angleFor] : undefined;
                        const href = angle?.anchor
                            ? `/blog/${job.slug}#${angle.anchor}`
                            : `/blog/${job.slug}`;

                        return (
                            <Link
                                key={job.slug}
                                href={href}
                                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col"
                            >
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src={angle?.image ?? job.image}
                                        alt={angle?.title ?? job.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                                        {angle?.title ?? job.title}
                                    </h3>
                                    <p className="text-neutral-slate text-sm leading-relaxed flex-1">
                                        {angle?.blurb ?? job.excerpt}
                                    </p>
                                    <span className="inline-flex items-center gap-2 text-navy font-bold text-sm mt-4 group-hover:text-gold transition-colors">
                                        Read the job <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
