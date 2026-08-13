import type { Service } from './types';
import { coreServices } from './core';
import { lightingServices } from './lighting';
import { projectServices } from './projects';

export type { Service, ServiceFaq, ServiceSection } from './types';

const bySlug = Object.fromEntries(
    [...coreServices, ...lightingServices, ...projectServices].map((s) => [s.slug, s])
);

/**
 * Display order for the services index, suburb page grids and the sitemap.
 * Highest commercial intent first, since these are the terms people search when
 * they already intend to book someone.
 */
const displayOrder = [
    'emergency-electrician-adelaide',
    'switchboard-upgrade-adelaide',
    'ev-charger-installation-adelaide',
    'downlight-installation-adelaide',
    'feature-lighting-led-strip-adelaide',
    'oven-cooktop-installation-adelaide',
    'renovation-electrician-adelaide',
    'electrician-for-builders-adelaide',
    'rcd-testing-safety-switches-adelaide',
    'smoke-alarm-installation-adelaide',
    'ceiling-fan-installation-adelaide',
    'powerpoint-installation-adelaide',
    'thermal-imaging-adelaide',
    'test-and-tag-adelaide',
];

export const services: Service[] = displayOrder.map((slug) => {
    const service = bySlug[slug];
    if (!service) throw new Error(`Unknown service slug in displayOrder: ${slug}`);
    return service;
});

export const serviceBySlug = bySlug;

/** Lightweight shape for grids and link lists, so callers do not pull in full page copy. */
export const serviceIndex = services.map(({ slug, name, icon, blurb }) => ({ slug, name, icon, blurb }));
