import type { Metadata } from 'next';
import SuburbLandingPage from '@/components/SuburbLandingPage';
import { suburbBySlug } from '@/data/suburbs';
import { shareMeta } from '@/lib/share';

const suburb = suburbBySlug['electrician-golden-grove'];

export const metadata: Metadata = {
    title: suburb.title,
    description: suburb.description,
    alternates: {
        canonical: '/electrician-golden-grove',
    },
    ...shareMeta({
        title: suburb.title,
        description: suburb.description,
        path: '/electrician-golden-grove/',
    }),
};

export default function Page() {
    return <SuburbLandingPage suburb={suburb} />;
}
