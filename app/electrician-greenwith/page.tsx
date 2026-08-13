import type { Metadata } from 'next';
import SuburbLandingPage from '@/components/SuburbLandingPage';
import { suburbBySlug } from '@/data/suburbs';

const suburb = suburbBySlug['electrician-greenwith'];

export const metadata: Metadata = {
    title: suburb.title,
    description: suburb.description,
    alternates: {
        canonical: '/electrician-greenwith',
    },
    openGraph: {
        title: suburb.title,
        description: suburb.description,
        url: 'https://jpdcompleteelectrical.com.au/electrician-greenwith/',
        type: 'website',
    },
};

export default function Page() {
    return <SuburbLandingPage suburb={suburb} />;
}
