'use client';

import { useEffect } from 'react';
import SuburbMap, { MapCredit, SUBURB_PICK_KEY } from '@/components/SuburbMap';

/**
 * The map in a suburb page's hero: this suburb in gold, every other one a link
 * to its own page. Opening a suburb page counts as picking that suburb, so the
 * areas page opens on it next time.
 */
export default function SuburbHeroMap({ name, hrefs }: { name: string; hrefs: Record<string, string> }) {
    useEffect(() => {
        try {
            window.localStorage.setItem(SUBURB_PICK_KEY, name);
        } catch {
            // Storage blocked: nothing to remember.
        }
    }, [name]);

    const others = Object.fromEntries(Object.entries(hrefs).filter(([suburb]) => suburb !== name));

    return (
        <div>
            <SuburbMap title={`Map of Adelaide's north-eastern suburbs with ${name} highlighted`} selected={name} hrefs={others} />
            <MapCredit className="mt-2 text-white/35" />
        </div>
    );
}
