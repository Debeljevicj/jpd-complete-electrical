# JPD Complete Electrical — SEO Strategy

Last revised 13 August 2026. Supersedes the earlier strategy document.

## 1. The strategic change

The old strategy targeted "Adelaide" as the geography. That is the wrong fight. "Electrician Adelaide" is contested by businesses with a decade of domain age, hundreds of reviews and paid search budgets. We are not going to win it, and ranking eleventh for a big term is worth nothing.

The winnable position is **Adelaide's north-east**, specifically the City of Tea Tree Gully. Fifteen suburbs, roughly 85,000 people, fourteen of them in a single council area, and JPD is physically based in the middle of it. That is a defensible patch where "local" is true rather than claimed.

Amped Up Electrical, which is the closest comparable operator, ranks the way it does because it built twenty suburb pages of roughly 2,000 words each plus a service page per service. Nothing clever, just coverage and depth. That playbook is directly copyable and we have a tighter geography to apply it to.

## 2. Target suburbs, in priority order

Priority follows ABS 2021 Census population. Everything (sitemap priority, internal link weighting, blog coverage) follows this order.

| # | Suburb | Population | Postcode | Council |
|---|---|---|---|---|
| 1 | Golden Grove | 10,299 | 5125 | Tea Tree Gully |
| 2 | Greenwith | 10,103 | 5125 | Tea Tree Gully |
| 3 | Hope Valley | 8,184 | 5090 | Tea Tree Gully |
| 4 | Wynn Vale | 7,865 | 5127 | Tea Tree Gully |
| 5 | Highbury | 6,956 | 5089 | Tea Tree Gully |
| 6 | Modbury | 5,593 | 5092 | Tea Tree Gully |
| 7 | Redwood Park | 5,367 | 5097 | Tea Tree Gully |
| 8 | Ridgehaven | 4,304 | 5097 | Tea Tree Gully |
| 9 | St Agnes | 4,233 | 5097 | Tea Tree Gully |
| 10 | Fairview Park | 3,792 | 5126 | Tea Tree Gully |
| 11 | Holden Hill | 3,716 | 5088 | Tea Tree Gully |
| 12 | Gulfview Heights | 3,674 | 5096 | Salisbury / Tea Tree Gully |
| 13 | Tea Tree Gully | 3,499 | 5091 | Tea Tree Gully |
| 14 | Banksia Park | 3,346 | 5091 | Tea Tree Gully |
| 15 | Vista | 1,035 | 5091 | Tea Tree Gully |

Secondary suburbs mentioned in copy but without their own pages yet: Surrey Downs, Salisbury Heights, Modbury North, Modbury Heights, Yatala Vale, Para Vista, Valley View, Dernancourt, Athelstone.

## 3. Why the suburb pages are not doorway pages

Google penalises near-duplicate location pages where only the suburb name changes. Ours differ on the thing that actually differs: **housing stock era**, which is what decides the electrical work a street needs.

- 1960s–70s (Hope Valley, Modbury, Holden Hill, St Agnes, Banksia Park): ceramic rewireable fuses, no RCDs, unearthed lighting circuits, ageing rubber-insulated cable, asbestos-backed panels. Work is board replacement and rental compliance.
- 1980s–90s (Wynn Vale, Gulfview Heights, early Golden Grove): original boards now 35–40 years old, one shared RCD at best, no spare ways. Work is board upgrades, halogen-to-LED, EV chargers.
- 1990s–2000s (Greenwith, later Golden Grove): boards technically fine but full. Work is capacity, EV charging, feature lighting, kitchen renovations.
- Mixed and heritage (Tea Tree Gully village, Highbury, Vista): solid stone walls with no cavity, surface conduit, shed and pump submains on large blocks.

Each page also carries its own FAQ set written against that housing stock, its own landmarks, and its own nearby-suburb interlinks. This is the difference between fifteen real pages and one page printed fifteen times.

## 4. Keyword targets

### Commercial intent, highest value
These now each have a dedicated page. This was the biggest gap in the old strategy, which tried to serve all of them from a single `/services` page.

| Keyword cluster | Page |
|---|---|
| emergency electrician | `/emergency-electrician-adelaide` |
| switchboard upgrade | `/switchboard-upgrade-adelaide` |
| EV charger installation | `/ev-charger-installation-adelaide` |
| downlights, LED downlights | `/downlight-installation-adelaide` |
| feature lighting, LED strip | `/feature-lighting-led-strip-adelaide` |
| oven, cooktop, induction install | `/oven-cooktop-installation-adelaide` |
| renovation electrician | `/renovation-electrician-adelaide` |
| electrician for builders, subcontractor | `/electrician-for-builders-adelaide` |
| safety switch, RCD testing | `/rcd-testing-safety-switches-adelaide` |
| smoke alarm installation | `/smoke-alarm-installation-adelaide` |
| ceiling fan installation | `/ceiling-fan-installation-adelaide` |
| powerpoint installation, extra circuits | `/powerpoint-installation-adelaide` |
| thermal imaging inspection | `/thermal-imaging-adelaide` |
| test and tag | `/test-and-tag-adelaide` |

### "Electrician near me"
This is not a page keyword, it is a **Google Business Profile** outcome. Google resolves it to the map pack based on proximity, GBP completeness and reviews. `/service-areas` exists to catch the organic remainder and to funnel internal links, but the GBP work in section 8 is what actually moves it.

### Long-tail informational
Served by the blog. These convert less directly but they build topical authority and they are where the cost and troubleshooting queries live.

## 5. Site architecture

```
/                          home
/services                  services hub, links to all 14 service pages
/service-areas             suburb hub, targets "electrician near me"
/{service}-adelaide        14 service pages, ~1,200–1,800 words each
/electrician-{suburb}      15 suburb pages, ~1,400–1,800 words each
/blog                      blog index
/blog/{slug}               10 posts
/about /contact /gallery /reviews /card
```

Internal linking is deliberate and reciprocal:
- Every suburb page links to all 14 service pages (as "Switchboard Upgrades in Golden Grove")
- Every service page links to all 15 suburb pages
- Suburb pages link to their neighbouring suburbs
- Footer carries the top 6 services and top 7 suburbs sitewide
- Blog posts link to the matching service page in their CTA

That gives every page multiple internal inbound links, which is what stops new pages sitting unindexed.

## 6. Technical SEO

Implemented:
- **Generated sitemap** (`app/sitemap.ts`). New suburb, service and blog pages self-register. Suburb priority is calculated from population. The old hand-maintained `public/sitemap.xml` is now dead and should be deleted (see section 10).
- **Structured data per page.** Suburb pages emit `Electrician` + `FAQPage` + `BreadcrumbList`. Service pages emit `Service` + `FAQPage` + `BreadcrumbList`. All with `@id` anchors so they resolve as one graph rather than competing blobs.
- **Canonicals and OpenGraph** on every new page.
- **Static export** to Cloudflare, so page speed is already strong. Core Web Vitals is not the bottleneck here.

Known remaining issues:
- `keywords` in `app/layout.tsx` metadata does nothing. Google has ignored the meta keywords tag since 2009. Harmless, but it is not a strategy.
- No `lastModified` on most sitemap entries because we do not track content edit dates. Low impact.
- Images are unoptimised (`unoptimized: true`, required by static export). Worth compressing the source JPEGs at some point.

## 7. Content plan

### Blog: two formats, both proven

**Format A, informational guides.** Rank for research queries, build authority, feed the service pages. Six now live:
- What Should an Electrician Cost in Adelaide?
- How to Choose an Electrician in Adelaide
- Why Does My Power Keep Tripping?
- Thinking About a Home EV Charger? Read This First
- Your Halogen Downlights Are Costing More Than You Think
- Planning the Electrical for a Renovation

**Format B, job reports.** This is Amped Up's volume play and it is the one JPD is best placed to copy, because Justin is on real jobs daily with a camera. Titles follow `{Service} in {Suburb}`, for example "Switchboard Upgrade in Redwood Park". Each is 400–700 words: what the property was, what was found, what was done, what it means for anyone with a similar house.

These cannot be written speculatively. They need real jobs, real photos and real detail, otherwise they are fabricated case studies and both Google and customers can tell. The structure is ready in `data/blog-posts.ts`; the input is one job write-up at a time.

Target cadence: two job reports a month, one guide a month. Twenty-four job reports a year, each carrying a service-plus-suburb keyword, is a serious moat within eighteen months.

### Style rules
- Australian English, Adelaide context.
- No em dashes.
- Every post opens with an `<h3>Why This Matters to You</h3>` section.
- State assumptions. Do not invent compliance detail. Where a South Australian regulation is involved and the specifics could change, describe the principle and point to CBS or SA MFS rather than quoting a date that may be wrong.

## 8. Google Business Profile (highest priority, off-site)

For a local trade, GBP outranks everything on this list for actual phone calls. It is where "electrician near me" is decided.

1. **Service areas**: set to the 15 suburbs above, not "Adelaide". Google weights the listed service areas.
2. **Services list**: mirror the 14 service pages exactly, using the same wording. Link each to its page.
3. **Photos**: post weekly. Real job photos, geotagged where possible. This is the most under-used ranking factor in the trades.
4. **Reviews**: the single biggest lever. Ask every customer, and where it is natural, encourage them to mention the suburb and the job type. "Justin replaced our switchboard in Modbury" is worth several times more than "great service".
5. **Posts**: a short GBP post whenever a blog post goes up.
6. **Q&A**: seed it with the same questions as the site FAQ. You can ask and answer your own questions on GBP and it is a legitimate use of the feature.

## 9. Measurement

Set up if not already done:
- **Google Search Console**, with the sitemap submitted. This is the only source of truth for what is actually ranking. Without it we are guessing.
- Track positions for the fifteen `electrician {suburb}` terms and the fourteen service terms monthly.
- Track GBP calls and direction requests separately from website form submissions, because they behave differently.

Realistic timeline: suburb and service pages typically take 2–4 months to settle into position, longer for the competitive service terms. GBP changes move faster, often within weeks.

## 10. Outstanding actions

**Needs Justin's go-ahead (not done):**
- Delete `public/sitemap.xml`. It is superseded by the generated one and is now stale and misleading. The generated sitemap already wins the build, so this is tidy-up rather than urgent.
- Deploy. Nothing here has been pushed or deployed.

**Worth doing, needs Justin's input:**
- **Add real price ranges to the service pages.** Every service page has a "What Drives the Price" section rather than numbers, because inventing prices would be dishonest. Cost queries are high intent and Amped Up ranks well on them. Real ranges from the price book, framed as "from" or "typically", would materially strengthen these pages.
- **Job report photos.** Format B blog posts need real jobs. Even a rough note plus five photos per job is enough to write from.
- **Review count.** Whatever the current number, more is the highest-leverage thing available.
