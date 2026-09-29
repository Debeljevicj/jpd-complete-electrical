import type { Metadata } from 'next';
import SuburbLandingPage from '@/components/SuburbLandingPage';
import { suburbBySlug } from '@/data/suburbs';
import { shareMeta } from '@/lib/share';

const suburb = suburbBySlug['electrician-wynn-vale'];

export const metadata: Metadata = {
    title: suburb.title,
    description: suburb.description,
    alternates: {
        canonical: '/electrician-wynn-vale',
    },
    ...shareMeta({
        title: suburb.title,
        description: suburb.description,
        path: '/electrician-wynn-vale/',
    }),
};

export default function Page() {
    return <SuburbLandingPage suburb={suburb} />;
}
