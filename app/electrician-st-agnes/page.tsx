import type { Metadata } from 'next';
import SuburbLandingPage from '@/components/SuburbLandingPage';
import { suburbBySlug } from '@/data/suburbs';

const suburb = suburbBySlug['electrician-st-agnes'];

export const metadata: Metadata = {
    title: suburb.title,
    description: suburb.description,
    alternates: {
        canonical: '/electrician-st-agnes',
    },
    openGraph: {
        title: suburb.title,
        description: suburb.description,
        url: 'https://jpdcompleteelectrical.com.au/electrician-st-agnes/',
        type: 'website',
    },
};

export default function Page() {
    return <SuburbLandingPage suburb={suburb} />;
}
