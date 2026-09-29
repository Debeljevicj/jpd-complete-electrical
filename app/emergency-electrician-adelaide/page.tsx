import type { Metadata } from 'next';
import ServiceLandingPage from '@/components/ServiceLandingPage';
import { serviceBySlug } from '@/data/services';
import { shareMeta } from '@/lib/share';

const service = serviceBySlug['emergency-electrician-adelaide'];

export const metadata: Metadata = {
    title: service.title,
    description: service.description,
    alternates: {
        canonical: '/emergency-electrician-adelaide',
    },
    ...shareMeta({
        title: service.title,
        description: service.description,
        path: '/emergency-electrician-adelaide/',
    }),
};

export default function Page() {
    return <ServiceLandingPage service={service} />;
}
