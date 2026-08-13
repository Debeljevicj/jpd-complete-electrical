import type { Metadata } from 'next';
import ServiceLandingPage from '@/components/ServiceLandingPage';
import { serviceBySlug } from '@/data/services';

const service = serviceBySlug['thermal-imaging-adelaide'];

export const metadata: Metadata = {
    title: service.title,
    description: service.description,
    alternates: {
        canonical: '/thermal-imaging-adelaide',
    },
    openGraph: {
        title: service.title,
        description: service.description,
        url: 'https://jpdcompleteelectrical.com.au/thermal-imaging-adelaide/',
        type: 'website',
    },
};

export default function Page() {
    return <ServiceLandingPage service={service} />;
}
