import SuburbLandingPage from '@/components/SuburbLandingPage';

export const metadata = {
    title: 'Electrician Wynn Vale | Switchboards, RCD Testing | JPD',
    description: 'Local electrician servicing Wynn Vale for switchboard upgrades, RCD testing, thermal imaging inspections and general electrical maintenance. Licensed & insured — free quotes.',
};

export default function Page() {
    return (
        <SuburbLandingPage
            suburb="Wynn Vale"
            intro="Justin and the team at JPD Complete Electrical are based close to Wynn Vale, providing switchboard upgrades, RCD testing, thermal imaging inspections, and reliable electrical maintenance for homes and small businesses in the area."
            localNote="Wynn Vale's mostly residential streets mean a lot of our work here is straightforward home electrical — powerpoints, lighting, switchboard upgrades, and the RCD testing that's easy to put off until it's overdue. Being local, we can usually fit routine jobs in without a long wait."
            nearbyAreas={['Golden Grove', 'Modbury', 'Tea Tree Gully', 'Salisbury Heights', 'Surrey Downs', 'Yatala Vale']}
        />
    );
}
