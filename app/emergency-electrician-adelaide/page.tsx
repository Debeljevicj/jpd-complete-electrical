import type { Metadata } from 'next';
import ServiceLandingPage from '@/components/ServiceLandingPage';
import { serviceBySlug } from '@/data/services';

const service = serviceBySlug['emergency-electrician-adelaide'];

export const metadata: Metadata = {
    title: service.title,
    description: service.description,
    alternates: {
        canonical: '/emergency-electrician-adelaide',
    },
    openGraph: {
        title: service.title,
        description: service.description,
        url: 'https://jpdcompleteelectrical.com.au/emergency-electrician-adelaide/',
        type: 'website',
    },
};

export default function Page() {
    return <ServiceLandingPage service={service} />;
}
