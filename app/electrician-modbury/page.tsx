import SuburbLandingPage from '@/components/SuburbLandingPage';

export const metadata = {
    title: 'Electrician Modbury | Switchboards, RCD Testing | JPD',
    description: 'Local electrician servicing Modbury for switchboard upgrades, RCD testing, thermal imaging inspections and general electrical maintenance. Licensed & insured — free quotes.',
    alternates: {
        canonical: '/electrician-modbury',
    },
};

export default function Page() {
    return (
        <SuburbLandingPage
            suburb="Modbury"
            intro="JPD Complete Electrical services Modbury and the surrounding north-eastern suburbs for switchboard upgrades, RCD testing, thermal imaging, and general electrical maintenance — with Justin based just up the road."
            localNote="From the older homes around Modbury through to newer developments further out, we've worked on a wide range of switchboards and wiring setups in this pocket of Adelaide. Being based nearby means less travel time for you and a tradie who already knows the area."
            nearbyAreas={['Tea Tree Gully', 'Wynn Vale', 'Golden Grove', 'Modbury Heights', 'Ridgehaven', 'Para Hills']}
        />
    );
}
