import type { Metadata } from 'next';
import SuburbLandingPage from '@/components/SuburbLandingPage';
import { suburbBySlug } from '@/data/suburbs';
import { shareMeta } from '@/lib/share';

const suburb = suburbBySlug['electrician-hope-valley'];

export const metadata: Metadata = {
    title: suburb.title,
    description: suburb.description,
    alternates: {
        canonical: '/electrician-hope-valley',
    },
    ...shareMeta({
        title: suburb.title,
        description: suburb.description,
        path: '/electrician-hope-valley/',
    }),
};

export default function Page() {
    return <SuburbLandingPage suburb={suburb} />;
}
