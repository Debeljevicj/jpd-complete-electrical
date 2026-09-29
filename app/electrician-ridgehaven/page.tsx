import type { Metadata } from 'next';
import SuburbLandingPage from '@/components/SuburbLandingPage';
import { suburbBySlug } from '@/data/suburbs';
import { shareMeta } from '@/lib/share';

const suburb = suburbBySlug['electrician-ridgehaven'];

export const metadata: Metadata = {
    title: suburb.title,
    description: suburb.description,
    alternates: {
        canonical: '/electrician-ridgehaven',
    },
    ...shareMeta({
        title: suburb.title,
        description: suburb.description,
        path: '/electrician-ridgehaven/',
    }),
};

export default function Page() {
    return <SuburbLandingPage suburb={suburb} />;
}
