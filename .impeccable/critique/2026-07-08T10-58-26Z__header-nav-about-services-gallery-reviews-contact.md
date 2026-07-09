---
target: whole site (home, header/nav, about, services, gallery, reviews, contact)
total_score: 29
p0_count: 2
p1_count: 2
timestamp: 2026-07-08T10-58-26Z
slug: header-nav-about-services-gallery-reviews-contact
---
Method: dual-agent (two independent sub-agents — A: design review, B: detector + live-browser evidence)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2/4 | Contact form submit button gives no loading/disabled state during send — risk of double-submit on a slow connection. ServiceAreaChecker does this correctly elsewhere in the same codebase. |
| 2 | Match System / Real World | 4/4 | Genuine trade language, real Adelaide suburbs, real licence number — no issues. |
| 3 | User Control and Freedom | 3/4 | Modals/lightbox close via X, click-outside, and Escape correctly. Mobile sticky CTA bar has no full dismiss (desktop version does). |
| 4 | Consistency and Standards | 2/4 | Two independently-built floating gold "bubble" controls (scroll-to-top and the desktop quote/call widget) occupy the same screen coordinates — confirmed by both assessments via live bounding-box measurement. |
| 5 | Error Prevention | 3/4 | Solid overall; docked for the same floating-button collision inviting mis-taps. |
| 6 | Recognition Rather Than Recall | 4/4 | Persistent nav, breadcrumbs, licence/insurance badges repeated — no issues. |
| 7 | Flexibility and Efficiency | 4/4 | Anchor-jump service categories, gallery filters, one-tap `tel:` links throughout. |
| 8 | Aesthetic and Minimalist Design | 3/4 | Clean overall; docked for a repeated icon-circle template recipe reused across three unrelated sections. |
| 9 | Error Recovery | 1/4 | Contact form failure falls back to a raw browser `alert()` — jarring, inconsistent with the custom-styled success modal used on the happy path. |
| 10 | Help and Documentation | 3/4 | FAQ covers real objections well (and is a genuine working accordion, confirmed by reading `components/FAQ.tsx` directly) — but its toggle button has no `aria-expanded`/`aria-controls`, so screen-reader users can't tell it's interactive. |
| **Total** | | **29/40** | **Good — solid foundation, some real issues to close out before it reads as premium.** |

## Anti-Patterns Verdict

**LLM assessment:** Not AI slop — real owner photography, real named Google/Facebook reviews with idiosyncratic phrasing, a genuinely bespoke Service Area Checker (Google Places autocomplete + distance calc), a real licence number surfaced repeatedly. The template tell that *is* present: an identical navy-circle-icon-above-heading block reused nearly verbatim across three unrelated sections (home page "Why Choose JPD", About page "Mission & Values", and the "How We Work" process steps), which makes conceptually different sections visually interchangeable.

**Deterministic scan:** CLI scan of `app/` + `components/` found 2 confirmed hits: a side-stripe border (`app/blog/[slug]/page.tsx:90`, `border-l-4`) and a border-accent-on-rounded-card (`app/contact/ContactContent.tsx:245`, `border-t-4`) — both are the "colored stripe as accent" absolute-ban pattern. Live in-browser detection across all 6 routes additionally flagged: repeated icon-tile blocks (6× home, 17× services — mostly a false positive, since a services *listing* repeating icon+title+description per service is the correct pattern, not a slop tell; the real issue is the 3 *non-listing* sections converging on the same recipe, as above), low-contrast colored numbered step badges (3.3–3.7:1, borderline depending on text size), an all-caps hero badge running long at ~40 characters (worth noting: this got a few characters longer in today's "Licensed" copy edit), and a flagged "oversized H1" (72px/62 chars) that, on independent DOM measurement, does **not** actually overflow at any breakpoint — a false positive.

**Cross-validation catch:** the detector flagged "single font detected" on nearly every page. Assessment B initially treated this as a likely tooling limitation — but Assessment A independently and directly confirmed via `getComputedStyle` that headings render in the OS default system font, not the brand's Outfit/Inter fonts, because `app/layout.tsx`'s `font-sans` class on `<body>` silently overrides the custom font rule, and `tailwind.config.ts` points headings at a Montserrat CSS variable that is never actually loaded (only Inter and Outfit are loaded, per `BRAND_GUIDE.md` neither is what's configured). The detector was right; the false-positive call was wrong. This is the single most consequential finding in the whole audit.

**Visual overlays:** not currently viewable — the detector ran via a background sub-agent's own browser session (a live-server on port 8400, since torn down) rather than a persistent tab visible to you. No lingering overlay to look at; the findings above are the full record of what it caught.

## Overall Impression

The bones are genuinely good — real photography, real reviews, a bespoke service-area tool, sound information architecture and page flow. But the site is quietly running with its custom fonts disabled site-wide and its hero entrance animation dead on every page, which is the gap between "solid template" and "premium" the gold-color change was reaching for. The single biggest opportunity: fix the font-loading bug first — it's a two-line change that touches how every headline and paragraph reads across all 6 pages.

## What's Working

- **Real, specific reviews** (`components/ClientReviews.tsx`, `ReviewsCarousel.tsx`) — platform-attributed, unpolished phrasing that reads as genuinely customer-written, not paraphrased filler.
- **Service Area Checker** (`components/ServiceAreaChecker.tsx`) — Google Places autocomplete + distance calculation from Adelaide CBD with a graceful "a little further than usual, call us" fallback. This is a real differentiator, not a template component.
- **Hero photography** — a real photo of the actual tradesperson in branded hi-vis, masked into the navy background, immediately answers "who am I trusting."

## Priority Issues

**[P0] Custom brand fonts never render anywhere on the site**
Why it matters: `app/layout.tsx`'s `<body className="font-sans ...">` overrides the `font-body` rule in `globals.css` (Tailwind utilities always win over base-layer rules), and `tailwind.config.ts` points headings at `var(--font-montserrat)`, which is never loaded — only Inter and Outfit are. Confirmed live: computed heading font-family is the OS default (`ui-sans-serif, system-ui...`), not Outfit or Inter, on every page tested. Typography is doing more of the "premium" work than color ever will — this quietly undercuts today's gold-color change.
Fix: remove `font-sans` from the `<body>` className in `app/layout.tsx` (or swap to `font-body`), and point `tailwind.config.ts`'s `heading` family at `var(--font-outfit)` to match what's actually loaded and what `BRAND_GUIDE.md` specifies.
Suggested command: `/impeccable polish`

**[P0] The two floating gold "bubble" buttons collide on desktop**
Why it matters: this is exactly the "bubbles clashing" concern flagged going in. The circular scroll-to-top button and the floating "Request a Quote"/call widget both use `fixed`, `right-8`, `z-50`, and land at literally overlapping pixel coordinates once a user scrolls past ~300px — confirmed independently by both assessments via live bounding-box measurement (`elementFromPoint` shows the scroll-to-top arrow painting directly over the quote button and its dismiss-X). On mobile there's no collision (confirmed clean ~36px gap), so this is desktop-only.
Fix: reposition scroll-to-top to `left-8`, or lift it clear of the CTA widget's footprint (e.g. `bottom-40`), or fold "scroll to top" into the CTA widget's own dismiss/handle interaction instead of running two independent floating controls.
Suggested command: `/impeccable layout`

**[P1] Active nav link text fails color contrast badly**
Why it matters: the current-page indicator in the header (gold text + gold underline on white) measures 2.26–2.43:1 against the WCAG AA minimum of 4.5:1 — verified with the actual relative-luminance formula on two separate pages (Home and Services), not a guess. A visitor with low vision, or just bright ambient light on a phone screen, may not be able to tell which nav item is active at all.
Fix: darken the active-link color (a navy or navy-tinted gold rather than the raw `#CDA84D`) or add a background chip instead of relying on text color alone.
Suggested command: `/impeccable adapt`

**[P1] The site's hero entrance animation is completely dead**
Why it matters: every animated hero element (badge, headline, paragraph, buttons, stat badges) is wired to a staggered `animate-fade-in-up` class with 0.1s–0.5s delays — real choreography effort — but that class is never defined anywhere in `globals.css` or Tailwind config. Confirmed live: computed `animationName` is `"none"`. The same dead class is reused in the success modal, the gallery lightbox, and the service-area-checker result reveal — a site-wide dead pattern, not a typo. Visitors currently get an instant, flat hero instead of the intended "arrival."
Fix: add the missing `@keyframes fade-in-up` and `.animate-fade-in-up` rule to `globals.css` (mirroring the existing `slide-up` keyframe already there).
Suggested command: `/impeccable animate`

**[P2] Several touch targets are too small on mobile and in the floating CTA widget**
Why it matters: the mobile secondary nav row (About/Services/Contact/More) measures 20px tall — under even the WCAG 24px minimum, well under the 44px comfortable-tap guideline. The desktop CTA widget's dismiss (X) button measures 25.6×25.6px. On a job site, one-handed, in a rush, these are easy to miss or mis-tap.
Fix: add vertical padding to the mobile secondary nav links; bump the CTA dismiss button toward at least 32–36px with a larger hit-area via padding.
Suggested command: `/impeccable adapt`

## Persona Red Flags

**Jordan (first-time caller, never hired an electrician before):** Served reasonably well overall — licence/insurance badges are visible in the header, FAQ answers real beginner questions. Red flag: on mobile, the hero shows only headline + one paragraph in the first screen (buttons and trust badges are below the fold, `min-h-[90vh]` hero), so a first-timer's very first screen has no visible action to take.

**Casey (distracted, calling from a job site, in a rush):** Mobile "Call Now" sticky bar works well — appears within 100px of scroll, large thumb-friendly target. Red flag: the desktop floating-button collision (P0 above) is exactly the kind of thing that trips up a rushed user reaching for "Request a Quote" and hitting scroll-to-top instead. Also: the word "Emergency" only appears on the Contact page and buried in one FAQ answer — not on the home page, which is most likely to be Casey's landing page.

**Riley (edge-case tester):** Would immediately hit the raw browser `alert()` on any contact-form failure — jarring and inconsistent with the custom success modal used on the happy path. Would also find that `Header.tsx`'s mobile hamburger-menu code (`isMobileMenuOpen` state and its render branch) is unreachable dead code — its trigger button carries `hidden lg:hidden`, which never matches any real viewport, since `StickyNav.tsx` handles mobile nav instead. Not user-visible, but a trap for whoever edits `Header.tsx` next expecting that menu to work.

## Minor Observations

- Contact form submit button doesn't disable or show a loading state during send — risk of duplicate submissions on a slow connection.
- FAQ accordion (`components/FAQ.tsx`) works correctly but its toggle `<button>` has no `aria-expanded`/`aria-controls` — invisible to screen-reader users as an interactive disclosure.
- `Button.tsx`'s `outline` variant hardcodes its own Tailwind classes instead of reusing the `.btn-outline` class already defined in `globals.css` — same look today, two sources of truth that could drift.
- Two more side-stripe/border-accent hits from the deterministic scan: `app/contact/ContactContent.tsx:245` (also independently flagged by the design review — high-confidence real issue) and `app/blog/[slug]/page.tsx:90` (not covered by the design review pass, blog wasn't in its scope).
- The colored numbered step badges in "How We Work" measure 3.3–3.7:1 contrast (green/orange/teal backgrounds) — borderline against the 3:1 large-text minimum, worth a quick check depending on the exact badge text size.
- Mobile hero pushes both CTA buttons and trust stat badges below the first screen (`min-h-[90vh]`) — partially mitigated by the sticky CTA bar appearing after 100px of scroll, but the very first glance has no action.
- The `/reviews` page shows all reviews as a static grid (by design — `ClientReviews.tsx`, no carousel needed since everything's visible at once); the home page's "What Our Clients Say" teaser is the one with the actual scrolling carousel and arrow controls (`ReviewsCarousel.tsx`). Not a bug, just worth knowing they're intentionally different components.
- No broken images and no console errors found on any of the 6 routes tested, despite a history of broken-image issues in this repo's git log — that specific class of bug looks resolved.

## What to add — grounded suggestions

1. **Emergency/urgent-callout messaging on the home page itself**, not just buried on the Contact page — directly serves the "calling in a rush" visitor type, and this is a trade where "can you come now" is a real purchase driver.
2. **A before/after or close-up "quality of finish" pair on the home page** (e.g. an old vs. upgraded switchboard) — proves compliance/workmanship more directly than the current wide project shots.
3. **Surface licence/insurance credibility earlier on mobile.** The `TrustBadges` component is desktop-only (`hidden lg:flex`) and isn't included in the actual mobile nav (`StickyNav.tsx`) at all — a property manager vetting electricians on their phone won't see "Licensed PGE296191 / Fully Insured" until they scroll deep into About or the Footer.
4. **A short "who we serve" trust row for builders/property managers/aged-care facility managers** directly on the home page — this audience is currently only addressed on the Services page, despite being a named target segment.
5. **A brief "how we quote" or payment-transparency line on the home page** — the FAQ already promises "no hidden surprises" once, in a collapsed accordion; surfacing it once on the home page would reduce a real anxiety point before someone commits to the contact form.
