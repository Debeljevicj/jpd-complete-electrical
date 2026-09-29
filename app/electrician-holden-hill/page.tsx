import type { Metadata } from 'next';
import SuburbLandingPage from '@/components/SuburbLandingPage';
import { suburbBySlug } from '@/data/suburbs';
import { shareMeta } from '@/lib/share';

const suburb = suburbBySlug['electrician-holden-hill'];

export const metadata: Metadata = {
    title: suburb.title,
    description: suburb.description,
    alternates: {
        canonical: '/electrician-holden-hill',
    },
    ...shareMeta({
        title: suburb.title,
        description: suburb.description,
        path: '/electrician-holden-hill/',
    }),
};

export default function Page() {
    return <SuburbLandingPage suburb={suburb} />;
}
