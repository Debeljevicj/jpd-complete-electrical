import type { Metadata } from 'next';
import ServiceLandingPage from '@/components/ServiceLandingPage';
import { serviceBySlug } from '@/data/services';

const service = serviceBySlug['smoke-alarm-installation-adelaide'];

export const metadata: Metadata = {
    title: service.title,
    description: service.description,
    alternates: {
        canonical: '/smoke-alarm-installation-adelaide',
    },
    openGraph: {
        title: service.title,
        description: service.description,
        url: 'https://jpdcompleteelectrical.com.au/smoke-alarm-installation-adelaide/',
        type: 'website',
    },
};

export default function Page() {
    return <ServiceLandingPage service={service} />;
}
