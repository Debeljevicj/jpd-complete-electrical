import type { Metadata } from 'next';
import SuburbLandingPage from '@/components/SuburbLandingPage';
import { suburbBySlug } from '@/data/suburbs';

const suburb = suburbBySlug['electrician-highbury'];

export const metadata: Metadata = {
    title: suburb.title,
    description: suburb.description,
    alternates: {
        canonical: '/electrician-highbury',
    },
    openGraph: {
        title: suburb.title,
        description: suburb.description,
        url: 'https://jpdcompleteelectrical.com.au/electrician-highbury/',
        type: 'website',
    },
};

export default function Page() {
    return <SuburbLandingPage suburb={suburb} />;
}
