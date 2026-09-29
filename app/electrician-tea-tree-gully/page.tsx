import type { Metadata } from 'next';
import SuburbLandingPage from '@/components/SuburbLandingPage';
import { suburbBySlug } from '@/data/suburbs';
import { shareMeta } from '@/lib/share';

const suburb = suburbBySlug['electrician-tea-tree-gully'];

export const metadata: Metadata = {
    title: suburb.title,
    description: suburb.description,
    alternates: {
        canonical: '/electrician-tea-tree-gully',
    },
    ...shareMeta({
        title: suburb.title,
        description: suburb.description,
        path: '/electrician-tea-tree-gully/',
    }),
};

export default function Page() {
    return <SuburbLandingPage suburb={suburb} />;
}
