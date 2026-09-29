import type { Metadata } from 'next';
import ServiceLandingPage from '@/components/ServiceLandingPage';
import { serviceBySlug } from '@/data/services';
import { shareMeta } from '@/lib/share';

const service = serviceBySlug['downlight-installation-adelaide'];

export const metadata: Metadata = {
    title: service.title,
    description: service.description,
    alternates: {
        canonical: '/downlight-installation-adelaide',
    },
    ...shareMeta({
        title: service.title,
        description: service.description,
        path: '/downlight-installation-adelaide/',
    }),
};

export default function Page() {
    return <ServiceLandingPage service={service} />;
}
