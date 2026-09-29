import type { Metadata } from 'next';
import SuburbLandingPage from '@/components/SuburbLandingPage';
import { suburbBySlug } from '@/data/suburbs';
import { shareMeta } from '@/lib/share';

const suburb = suburbBySlug['electrician-st-agnes'];

export const metadata: Metadata = {
    title: suburb.title,
    description: suburb.description,
    alternates: {
        canonical: '/electrician-st-agnes',
    },
    ...shareMeta({
        title: suburb.title,
        description: suburb.description,
        path: '/electrician-st-agnes/',
    }),
};

export default function Page() {
    return <SuburbLandingPage suburb={suburb} />;
}
