import type { Metadata } from 'next';
import ServiceLandingPage from '@/components/ServiceLandingPage';
import { serviceBySlug } from '@/data/services';
import { shareMeta } from '@/lib/share';

const service = serviceBySlug['ceiling-fan-installation-adelaide'];

export const metadata: Metadata = {
    title: service.title,
    description: service.description,
    alternates: {
        canonical: '/ceiling-fan-installation-adelaide',
    },
    ...shareMeta({
        title: service.title,
        description: service.description,
        path: '/ceiling-fan-installation-adelaide/',
    }),
};

export default function Page() {
    return <ServiceLandingPage service={service} />;
}
