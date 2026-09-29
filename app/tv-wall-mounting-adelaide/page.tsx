import type { Metadata } from 'next';
import ServiceLandingPage from '@/components/ServiceLandingPage';
import { serviceBySlug } from '@/data/services';
import { shareMeta } from '@/lib/share';

const service = serviceBySlug['tv-wall-mounting-adelaide'];

export const metadata: Metadata = {
    title: service.title,
    description: service.description,
    alternates: {
        canonical: '/tv-wall-mounting-adelaide',
    },
    ...shareMeta({
        title: service.title,
        description: service.description,
        path: '/tv-wall-mounting-adelaide/',
    }),
};

export default function Page() {
    return <ServiceLandingPage service={service} />;
}
