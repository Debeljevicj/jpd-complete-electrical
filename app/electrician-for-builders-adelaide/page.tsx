import type { Metadata } from 'next';
import ServiceLandingPage from '@/components/ServiceLandingPage';
import { serviceBySlug } from '@/data/services';
import { shareMeta } from '@/lib/share';

const service = serviceBySlug['electrician-for-builders-adelaide'];

export const metadata: Metadata = {
    title: service.title,
    description: service.description,
    alternates: {
        canonical: '/electrician-for-builders-adelaide',
    },
    ...shareMeta({
        title: service.title,
        description: service.description,
        path: '/electrician-for-builders-adelaide/',
    }),
};

export default function Page() {
    return <ServiceLandingPage service={service} />;
}
