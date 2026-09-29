import { jobsForService, type JobReport } from '@/data/job-reports';

export interface ServicePhoto {
    src: string;
    alt: string;
    caption: string;
    focus?: 'top' | 'center' | 'bottom';
    /** The job report the photo comes from. */
    href: string;
}

/** Cards shown in the Recent Work grid under a featured job. */
const GRID_LIMIT = 3;

/** Services where a photo of a switchboard is the work itself. */
const BOARD_SERVICES = new Set(['switchboard-upgrade-adelaide', 'rcd-testing-safety-switches-adelaide']);

/**
 * Photos the strip shows: six, or three, or two, so the grid never ends on a
 * lonely tile. None below two, because a service with one photo already shows
 * it on its job card.
 */
export function stripCount(photos: ServicePhoto[]): number {
    return photos.length >= 6 ? 6 : photos.length >= 3 ? 3 : photos.length === 2 ? 2 : 0;
}

/**
 * The jobs and photos a service page shows.
 *
 * Jobs where this is the main work (first in `services`) come before jobs that
 * only touch it. Newest-first alone put the Ridgehaven switchboard, tagged to EV
 * chargers because the new board left room for one, ahead of an actual EV charger
 * install on the EV page. Within each group it stays newest first.
 *
 * Photos come from the main-work jobs only, hero first then the gallery, leaving
 * out any photo a job card on the page already shows. A job that only touches the
 * service contributes nothing, because its gallery is about something else (the
 * switchboard job's photos are switchboards). The exception is a service no job
 * leads on, such as RCD testing: there the photo each job picked for that service
 * in `angles` is used, since those were chosen for exactly this page.
 */
export function workForService(slug: string) {
    const all = jobsForService(slug);
    const isMain = (job: JobReport) => job.services[0] === slug;
    const jobs = [...all.filter(isMain), ...all.filter((job) => !isMain(job))];

    // A job can lead the page instead of sitting in the card grid. Pulled out of
    // the list as well, so the same job is not shown twice.
    const featured = jobs.find((job) => job.featuredFor?.includes(slug));
    const gridJobs = featured ? jobs.filter((job) => job.slug !== featured.slug) : jobs;

    const cardImage = (job: JobReport) => job.angles?.[slug]?.image ?? job.image;
    const onCards = new Set(
        [...(featured ? [featured] : []), ...gridJobs.slice(0, GRID_LIMIT)].map(cardImage)
    );

    const mainJobs = jobs.filter(isMain);
    const candidates: ServicePhoto[] = mainJobs.length
        ? mainJobs.flatMap((job) => [
              { src: job.image, alt: job.title, caption: job.title, href: `/blog/${job.slug}/` },
              ...(job.gallery ?? []).map((photo) => ({
                  src: photo.src,
                  alt: photo.alt,
                  caption: photo.caption ?? job.title,
                  focus: photo.focus,
                  href: `/blog/${job.slug}/`,
              })),
          ])
        : jobs.flatMap((job) => {
              const angle = job.angles?.[slug];
              if (!angle?.image) return [];
              const href = `/blog/${job.slug}/${angle.anchor ? `#${angle.anchor}` : ''}`;
              return [{ src: angle.image, alt: angle.title, caption: angle.title, href }];
          });

    // Most jobs end at the switchboard, so board photos turn up in galleries about
    // something else (the Mawson Lakes shed is a downlight job with a board build in
    // it). Off the board pages they read as the wrong service, so they're left out.
    const boardPage = BOARD_SERVICES.has(slug);

    const seen = new Set(onCards);
    const photos = candidates.filter((photo) => {
        if (!boardPage && /switchboard/i.test(`${photo.src} ${photo.alt}`)) return false;
        if (seen.has(photo.src)) return false;
        seen.add(photo.src);
        return true;
    });

    return { featured, gridJobs, gridLimit: GRID_LIMIT, photos };
}
