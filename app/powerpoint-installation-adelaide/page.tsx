import type { Metadata } from 'next';
import ServiceLandingPage from '@/components/ServiceLandingPage';
import { serviceBySlug } from '@/data/services';
import { shareMeta } from '@/lib/share';

const service = serviceBySlug['powerpoint-installation-adelaide'];

export const metadata: Metadata = {
    title: service.title,
    description: service.description,
    alternates: {
        canonical: '/powerpoint-installation-adelaide',
    },
    ...shareMeta({
        title: service.title,
        description: service.description,
        path: '/powerpoint-installation-adelaide/',
    }),
};

export default function Page() {
    return <ServiceLandingPage service={service} />;
}
