import type { Metadata } from 'next';
import ServiceLandingPage from '@/components/ServiceLandingPage';
import { serviceBySlug } from '@/data/services';
import { shareMeta } from '@/lib/share';

const service = serviceBySlug['thermal-imaging-adelaide'];

export const metadata: Metadata = {
    title: service.title,
    description: service.description,
    alternates: {
        canonical: '/thermal-imaging-adelaide',
    },
    ...shareMeta({
        title: service.title,
        description: service.description,
        path: '/thermal-imaging-adelaide/',
    }),
};

export default function Page() {
    return <ServiceLandingPage service={service} />;
}
