import type { Metadata } from 'next';
import ServiceLandingPage from '@/components/ServiceLandingPage';
import { serviceBySlug } from '@/data/services';
import { shareMeta } from '@/lib/share';

const service = serviceBySlug['rcd-testing-safety-switches-adelaide'];

export const metadata: Metadata = {
    title: service.title,
    description: service.description,
    alternates: {
        canonical: '/rcd-testing-safety-switches-adelaide',
    },
    ...shareMeta({
        title: service.title,
        description: service.description,
        path: '/rcd-testing-safety-switches-adelaide/',
    }),
};

export default function Page() {
    return <ServiceLandingPage service={service} />;
}
