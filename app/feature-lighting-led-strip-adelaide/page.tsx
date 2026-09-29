import type { Metadata } from 'next';
import ServiceLandingPage from '@/components/ServiceLandingPage';
import { serviceBySlug } from '@/data/services';
import { shareMeta } from '@/lib/share';

const service = serviceBySlug['feature-lighting-led-strip-adelaide'];

export const metadata: Metadata = {
    title: service.title,
    description: service.description,
    alternates: {
        canonical: '/feature-lighting-led-strip-adelaide',
    },
    ...shareMeta({
        title: service.title,
        description: service.description,
        path: '/feature-lighting-led-strip-adelaide/',
    }),
};

export default function Page() {
    return <ServiceLandingPage service={service} />;
}
