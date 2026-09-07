# Google reviews: how they update

Reviews live in `data/reviews.json`. A GitHub Action pulls new ones from Google
every Monday morning, commits them, and Cloudflare rebuilds the site from that
commit. The site stays fully static, so nothing changes for SEO.

## The parts

| File | What it does |
|---|---|
| `data/reviews.json` | The reviews. Machine-writable, hand-editable. |
| `lib/reviews.ts` | Types, newest-first sort, and the "3 weeks ago" formatter. |
| `components/ReviewDate.tsx` | Renders a review's age. |
| `scripts/refresh-reviews.mjs` | Fetches from Google, appends new reviews. |
| `.github/workflows/refresh-reviews.yml` | Runs it weekly. |
| `test/reviews.test.mjs` | Pins the date formatting and the duplicate matching. |

## Why not just read the public reviews page

Scraping `share.google` / Google Maps was the obvious idea and it is the wrong
one:

- It breaches Google's terms of service.
- The page is JavaScript-rendered, so a plain fetch gets an empty shell. It
  needs a headless browser.
- Google serves CAPTCHAs to datacentre IPs, which is exactly what a GitHub
  Actions runner is.
- Worst of all it would fail *silently* — work for a fortnight, then a markup
  change stops it and nobody notices the reviews have frozen.

The Places API is the supported route, returns real timestamps, and is free at
four calls a month.

## Setup (one-off)

**1. Enable the API.** In [Google Cloud Console](https://console.cloud.google.com),
create a project (or reuse one), then enable **Places API (New)**.

**2. Create an API key.** APIs & Services → Credentials → Create credentials →
API key. Restrict it:

- *API restrictions* → restrict to **Places API (New)** only.
- Leave *Application restrictions* as None. IP restriction is not workable here
  because GitHub Actions runners have rotating IPs. The API restriction is what
  limits the damage if the key ever leaks.

**3. Find the Place ID.** From the repo, with the key in your shell:

```bash
GOOGLE_PLACES_API_KEY=your_key_here npm run refresh-reviews -- --dry-run
```

With no `GOOGLE_PLACE_ID` set it searches for the business, prints the matches
and the ID to pin. Check it picked the right listing.

**4. Add them to GitHub.** In the repo → Settings → Secrets and variables →
Actions:

- **Secret** `GOOGLE_PLACES_API_KEY` — the key.
- **Variable** `GOOGLE_PLACE_ID` — the ID from step 3. Not a secret; a Place ID
  is public information.

**5. Test it.** Actions → *Refresh Google reviews* → Run workflow, with
**dry run** ticked. It will report what it found without committing. If that
looks right, run it again unticked.

## How it behaves

**It only ever adds.** The Places API returns a maximum of **five** reviews and
you cannot choose which five. There are 23 on the site, including the long
detailed ones that do the actual selling, so the script appends new reviews and
never deletes. The back catalogue is safe.

**Dates are computed, not stored as text.** The old data hardcoded strings like
`"1 hour ago"`, which froze on the day they were pasted — one review was still
claiming "1 hour ago" two months later. Now each review carries a real date and
the label is worked out at build time, then corrected in the browser on load so
it cannot go stale between deploys.

**Date accuracy is flagged per review** in the `precision` field:

- `exact` — a real timestamp from the Places API.
- `derived` — back-calculated from the old relative string offset against the
  git commit that added it. Good to within a few days. These upgrade themselves
  to `exact` if that review ever comes back from the API.
- `unknown` — no date. The Facebook recommendation has none, and shows
  "Recommended" instead of a date rather than an invented one.

**Nothing rebuilds if nothing changed.** A quiet week means no commit and no
deploy. That is why `ReviewDate` recalculates client-side.

## Adding a review by hand

Edit `data/reviews.json`. Use a unique `id`, an ISO date, and set
`"precision": "exact"` if you know the real date. Then `npm test`.

## A note on structured data

There is deliberately **no** `AggregateRating` or `Review` schema markup on the
site. Google's structured data policy does not allow marking up reviews you
collected from Google itself in order to chase star ratings in search results.
Displaying them on the page is fine. Putting them in schema is not. Do not add
it without checking the current policy.
