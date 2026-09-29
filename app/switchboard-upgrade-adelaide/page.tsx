import type { Metadata } from 'next';
import ServiceLandingPage from '@/components/ServiceLandingPage';
import { serviceBySlug } from '@/data/services';
import { shareMeta } from '@/lib/share';

const service = serviceBySlug['switchboard-upgrade-adelaide'];

export const metadata: Metadata = {
    title: service.title,
    description: service.description,
    alternates: {
        canonical: '/switchboard-upgrade-adelaide',
    },
    ...shareMeta({
        title: service.title,
        description: service.description,
        path: '/switchboard-upgrade-adelaide/',
    }),
};

export default function Page() {
    return <ServiceLandingPage service={service} />;
}
