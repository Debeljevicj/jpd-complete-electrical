// Builds data/suburb-shapes.json: the outline of each suburb the site draws on
// its maps, as an SVG path in one shared coordinate space.
//
// Boundaries come from OpenStreetMap through Nominatim (one request a second,
// which is its usage limit). Run by hand when a suburb is added:
//
//   node scripts/build-suburb-map.mjs
//
// The site credits "Suburb boundaries (c) OpenStreetMap contributors" wherever
// the map is shown. Keep that line: it is the licence condition.

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'data', 'suburb-shapes.json');

// The fifteen suburbs with their own page, then the neighbours that only give
// the map its context or hold a written-up job.
const SUBURBS = [
    'Wynn Vale', 'Golden Grove', 'Greenwith', 'Hope Valley', 'Highbury', 'Modbury',
    'Redwood Park', 'Ridgehaven', 'St Agnes', 'Fairview Park', 'Holden Hill',
    'Gulfview Heights', 'Tea Tree Gully', 'Banksia Park', 'Vista',
    'Modbury Heights', 'Modbury North', 'Surrey Downs', 'Windsor Gardens',
    'Dernancourt', 'Valley View', 'Para Vista', 'Gilles Plains', 'Yatala Vale',
    'Salisbury East', 'Para Hills', 'Ingle Farm', 'Hillbank', 'Salisbury Heights',
    'Athelstone', 'Paradise', 'Northfield', 'Walkley Heights', 'Pooraka', 'Mawson Lakes',
    'Hillcrest', 'Oakden', 'Northgate', 'Klemzig', 'Campbelltown', 'Salisbury Park',
];

const HOME = { lat: -34.795, lon: 138.69 }; // Wynn Vale, roughly its middle
const SCALE = 6000; // SVG units per degree of latitude
const KX = Math.cos((HOME.lat * Math.PI) / 180);

const project = ([lon, lat]) => [(lon - HOME.lon) * KX * SCALE, -(lat - HOME.lat) * SCALE];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchShape(name) {
    const url =
        'https://nominatim.openstreetmap.org/search?format=jsonv2&polygon_geojson=1&polygon_threshold=0.0002&limit=5&countrycodes=au&q=' +
        encodeURIComponent(`${name}, South Australia`);
    const res = await fetch(url, { headers: { 'User-Agent': 'suburb-map-build/1.0' } });
    if (!res.ok) throw new Error(`${name}: HTTP ${res.status}`);
    const hits = await res.json();
    const polys = hits.filter((h) => h.geojson && /Polygon/.test(h.geojson.type));
    // "Tea Tree Gully" is a council as well as a suburb, and the council comes first.
    const hit = polys.find((h) => h.addresstype === 'suburb') ?? polys[0];
    if (!hit) throw new Error(`${name}: no boundary polygon`);
    return hit.geojson.type === 'Polygon' ? [hit.geojson.coordinates] : hit.geojson.coordinates;
}

const area = (ring) => {
    let a = 0;
    for (let i = 0; i < ring.length - 1; i++) a += ring[i][0] * ring[i + 1][1] - ring[i + 1][0] * ring[i][1];
    return a / 2;
};

function centroid(ring) {
    const a = area(ring);
    let x = 0;
    let y = 0;
    for (let i = 0; i < ring.length - 1; i++) {
        const f = ring[i][0] * ring[i + 1][1] - ring[i + 1][0] * ring[i][1];
        x += (ring[i][0] + ring[i + 1][0]) * f;
        y += (ring[i][1] + ring[i + 1][1]) * f;
    }
    return [x / (6 * a), y / (6 * a)];
}

const r1 = (n) => Math.round(n * 10) / 10;

const shapes = [];
for (const name of SUBURBS) {
    const polys = (await fetchShape(name)).map((poly) => poly.map((ring) => ring.map(project)));
    // Outer ring of the biggest piece carries the label.
    const main = polys.map((p) => p[0]).sort((a, b) => Math.abs(area(b)) - Math.abs(area(a)))[0];
    const [cx, cy] = centroid(main);
    const pts = polys.flat(2);
    const xs = pts.map((p) => p[0]);
    const ys = pts.map((p) => p[1]);
    const d = polys
        .map((poly) => poly.map((ring) => 'M' + ring.map((p) => `${r1(p[0])} ${r1(p[1])}`).join('L') + 'Z').join(''))
        .join('');
    // Straight-line distance from Wynn Vale, in km. One unit is 1/SCALE of a degree of latitude (~111 km).
    const km = Math.round((Math.hypot(cx, cy) / SCALE) * 111 * 10) / 10;
    shapes.push({
        name,
        d,
        cx: r1(cx),
        cy: r1(cy),
        box: [r1(Math.min(...xs)), r1(Math.min(...ys)), r1(Math.max(...xs)), r1(Math.max(...ys))],
        km,
    });
    console.log(name, d.length, 'chars', km, 'km');
    await sleep(1100);
}

writeFileSync(OUT, JSON.stringify(shapes) + '\n');
console.log('wrote', OUT);
