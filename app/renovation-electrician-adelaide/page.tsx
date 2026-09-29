import type { Metadata } from 'next';
import ServiceLandingPage from '@/components/ServiceLandingPage';
import { serviceBySlug } from '@/data/services';
import { shareMeta } from '@/lib/share';

const service = serviceBySlug['renovation-electrician-adelaide'];

export const metadata: Metadata = {
    title: service.title,
    description: service.description,
    alternates: {
        canonical: '/renovation-electrician-adelaide',
    },
    ...shareMeta({
        title: service.title,
        description: service.description,
        path: '/renovation-electrician-adelaide/',
    }),
};

export default function Page() {
    return <ServiceLandingPage service={service} />;
}
