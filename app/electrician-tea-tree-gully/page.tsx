import SuburbLandingPage from '@/components/SuburbLandingPage';

export const metadata = {
    title: 'Electrician Tea Tree Gully | Switchboards, RCD Testing | JPD',
    description: 'Local electrician servicing Tea Tree Gully for switchboard upgrades, RCD testing, thermal imaging inspections and general electrical maintenance. Licensed & insured — free quotes.',
};

export default function Page() {
    return (
        <SuburbLandingPage
            suburb="Tea Tree Gully"
            intro="Justin from JPD Complete Electrical is based right in Adelaide's north-eastern suburbs, servicing Tea Tree Gully and the surrounding area for switchboard upgrades, RCD testing, thermal imaging inspections, and everyday electrical work."
            localNote="Tea Tree Gully and the neighbouring foothills suburbs are home to a real mix of established homes and newer builds, which means switchboards here range from decades-old fuse boards through to modern setups that just need a routine RCD test. Being local, we can usually get out quickly, and we know the area well enough to give you a straight answer over the phone before we even arrive."
            nearbyAreas={['Modbury', 'Wynn Vale', 'Golden Grove', 'Banksia Park', 'Fairview Park', 'Para Hills']}
        />
    );
}
