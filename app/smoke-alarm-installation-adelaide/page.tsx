import type { Metadata } from 'next';
import ServiceLandingPage from '@/components/ServiceLandingPage';
import { serviceBySlug } from '@/data/services';
import { shareMeta } from '@/lib/share';

const service = serviceBySlug['smoke-alarm-installation-adelaide'];

export const metadata: Metadata = {
    title: service.title,
    description: service.description,
    alternates: {
        canonical: '/smoke-alarm-installation-adelaide',
    },
    ...shareMeta({
        title: service.title,
        description: service.description,
        path: '/smoke-alarm-installation-adelaide/',
    }),
};

export default function Page() {
    return <ServiceLandingPage service={service} />;
}
