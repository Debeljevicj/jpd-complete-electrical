import SuburbLandingPage from '@/components/SuburbLandingPage';

export const metadata = {
    title: 'Electrician Golden Grove | Switchboards, RCD Testing | JPD',
    description: 'Local electrician servicing Golden Grove for switchboard upgrades, RCD testing, thermal imaging inspections and general electrical maintenance. Licensed & insured — free quotes.',
};

export default function Page() {
    return (
        <SuburbLandingPage
            suburb="Golden Grove"
            intro="JPD Complete Electrical is based in the Golden Grove area, offering switchboard upgrades, RCD testing, thermal imaging inspections, and general electrical maintenance to homes and businesses across one of Adelaide's largest residential communities."
            localNote="Golden Grove is a big, family-focused suburb with homes from every era of its development, so switchboard condition varies a lot from street to street. We're right in the area, which means quick response times and a genuine understanding of what's normal — and what's not — for wiring around here."
            nearbyAreas={['Wynn Vale', 'Modbury', 'Tea Tree Gully', 'Salisbury Heights', 'Surrey Downs', 'Fairview Park']}
        />
    );
}
