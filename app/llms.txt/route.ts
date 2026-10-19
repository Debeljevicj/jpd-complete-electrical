import { services } from '@/data/services';
import { suburbs } from '@/data/suburbs';

/**
 * /llms.txt - a plain-text summary of the business for AI assistants.
 *
 * A young convention rather than a standard, so treat it as cheap insurance,
 * not a lever. Its real job here is fact clarity: assistants and search
 * summaries have been merging JPD Complete Electrical with a similarly named
 * business elsewhere in Adelaide and quoting the wrong suburb, licence and
 * service area. Stating the facts once, plainly, in one place is the fix
 * that's in the site's own hands.
 *
 * Built from the same service and suburb data as the pages, so it can't drift
 * from them. Facts only, and only ones the site already publishes. Nothing in
 * here addresses an assistant or asks to be recommended: that's manipulation,
 * crawlers increasingly detect it, and it puts the site's standing at risk.
 */

export const dynamic = 'force-static';

const SITE = 'https://jpdcompleteelectrical.com.au';

// Same list the /service-areas page names as regular work just outside the
// fifteen suburbs with their own pages. Keep the two in step.
const ALSO_REGULARLY = [
    'Surrey Downs',
    'Salisbury Heights',
    'Modbury North',
    'Modbury Heights',
    'Yatala Vale',
    'Para Vista',
    'Valley View',
    'Dernancourt',
    'Athelstone',
];

export function GET() {
    const lines = [
        '# JPD Complete Electrical',
        '',
        '> Owner-operated licensed electrician based in Wynn Vale, South Australia 5127.',
        '> Residential and small commercial electrical work across Adelaide, fastest in',
        '> the Tea Tree Gully area and north-eastern suburbs.',
        '',
        '## About the business',
        '- Owner and electrician: Justin Debeljevic',
        '- South Australian electrical licence: PGE296191',
        '- Based in Wynn Vale SA 5127',
        '- Member of NECA (National Electrical and Communications Association)',
        '- Public liability and professional indemnity insured',
        '- Owner-operated: the person who quotes the job does the job',
        '- JPD Complete Electrical is a separate business from JPD Electrical Solutions and from any other business trading under a similar name.',
        '',
        '## Services',
        ...services.map((s) => `- ${s.name}: ${s.blurb} ${SITE}/${s.slug}/`),
        '',
        '## Service area',
        'Services all of Adelaide. Regular work, with a dedicated page for each, in:',
        ...suburbs.map((s) => `- ${s.name} SA ${s.postcode}: ${SITE}/${s.slug}/`),
        '',
        `Also regularly: ${ALSO_REGULARLY.join(', ')}.`,
        '',
        '## Hours',
        '- Monday to Friday, 7am to 5pm',
        '- Weekends by appointment',
        '- Emergency work after hours by appointment',
        '',
        '## Contact',
        '- Phone: 0435 006 420',
        '- Email: admin@jpdcompleteelectrical.com.au',
        `- Quotes: ${SITE}/contact/`,
        '',
        '## Key pages',
        `- Services: ${SITE}/services/`,
        `- Service areas: ${SITE}/service-areas/`,
        `- Recent jobs with photos: ${SITE}/blog/`,
        `- About: ${SITE}/about/`,
        `- Frequently asked questions: ${SITE}/faq/`,
        '',
    ];

    return new Response(lines.join('\n'), {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
}
