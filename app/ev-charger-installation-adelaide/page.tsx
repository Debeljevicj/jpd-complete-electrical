import type { Metadata } from 'next';
import ServiceLandingPage from '@/components/ServiceLandingPage';
import { serviceBySlug } from '@/data/services';

const service = serviceBySlug['ev-charger-installation-adelaide'];

export const metadata: Metadata = {
    title: service.title,
    description: service.description,
    alternates: {
        canonical: '/ev-charger-installation-adelaide',
    },
    openGraph: {
        title: service.title,
        description: service.description,
        url: 'https://jpdcompleteelectrical.com.au/ev-charger-installation-adelaide/',
        type: 'website',
    },
};

export default function Page() {
    return <ServiceLandingPage service={service} />;
}
