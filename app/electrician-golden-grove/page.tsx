import type { Metadata } from 'next';
import SuburbLandingPage from '@/components/SuburbLandingPage';
import { suburbBySlug } from '@/data/suburbs';

const suburb = suburbBySlug['electrician-golden-grove'];

export const metadata: Metadata = {
    title: suburb.title,
    description: suburb.description,
    alternates: {
        canonical: '/electrician-golden-grove',
    },
    openGraph: {
        title: suburb.title,
        description: suburb.description,
        url: 'https://jpdcompleteelectrical.com.au/electrician-golden-grove/',
        type: 'website',
    },
};

export default function Page() {
    return <SuburbLandingPage suburb={suburb} />;
}
