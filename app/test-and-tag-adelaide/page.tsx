import type { Metadata } from 'next';
import ServiceLandingPage from '@/components/ServiceLandingPage';
import { serviceBySlug } from '@/data/services';
import { shareMeta } from '@/lib/share';

const service = serviceBySlug['test-and-tag-adelaide'];

export const metadata: Metadata = {
    title: service.title,
    description: service.description,
    alternates: {
        canonical: '/test-and-tag-adelaide',
    },
    ...shareMeta({
        title: service.title,
        description: service.description,
        path: '/test-and-tag-adelaide/',
    }),
};

export default function Page() {
    return <ServiceLandingPage service={service} />;
}
