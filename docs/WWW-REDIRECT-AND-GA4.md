# www redirect and GA4 setup

Two dashboard jobs for Justin. Neither can be done from the repo. Written 19 Oct 2026.

## 1. Redirect www to the bare domain (Cloudflare)

`www.jpdcompleteelectrical.com.au` serves every page with a 200. Each page
canonicals to the bare domain, but Google isn't honouring that: Search Console
has www URLs indexed with their own clicks and positions, so the site is split
across two hostnames. (`http://www` already 301s, but only to `https://www`.)
Cloudflare Pages `_redirects` can't redirect by hostname, so this has to be a
Redirect Rule on the zone.

1. dash.cloudflare.com, pick the account, then click **jpdcompleteelectrical.com.au**.
2. **DNS > Records**: check the `www` record shows **Proxied** (orange cloud). The
   rule only sees proxied traffic. If it's grey, edit it and switch the proxy on.
3. **Rules > Overview > Create rule > Redirect Rule** (older layout: **Rules >
   Redirect Rules > Create rule**). If it offers the "Redirect from WWW to root"
   template you can use it, but make the fields match the ones below.
4. Rule name: `www to apex`.
5. **If incoming requests match**: Custom filter expression.
   Field `Hostname`, operator `equals`, value `www.jpdcompleteelectrical.com.au`.
6. **Then**: URL redirect. Type **Dynamic**, expression:

   ```
   concat("https://jpdcompleteelectrical.com.au", http.request.uri.path)
   ```

   Status code **301**. Tick **Preserve query string**.
7. **Deploy**.

Leave the www DNS record and the www custom domain on the Pages project where
they are. The hostname has to keep resolving through Cloudflare for the rule to
run.

**Check it** (live within a minute or so):

```bash
curl -sI "https://www.jpdcompleteelectrical.com.au/contact/?x=1"
```

Expect `301` and `location: https://jpdcompleteelectrical.com.au/contact/?x=1`.
Then load `https://jpdcompleteelectrical.com.au/` in a browser to make sure the
bare domain still serves normally.

Nothing to submit in Search Console. Don't use its Change of Address tool, that's
for moving to a different domain. The www URLs should drop out over the next few
weeks as Google recrawls them.

## 2. GA4: see AI-assistant traffic, and count the leads

Property `G-W76JZ5EJKL`. Everything below is under **Admin** (gear icon, bottom left).

What GA can't see: most people who find JPD through ChatGPT ring the number or
type the address in, and clicks from Google's AI Overviews and AI Mode arrive as
plain `google / organic`. The "How did you find us?" answer on the contact form
is the better measure. GA only catches the ones who click through.

### 2a. An "AI assistants" channel

1. **Data display > Channel groups > Create new channel group**. Name it
   `Default + AI assistants`. It starts as a copy of the default channels.
2. **Add new channel**, name `AI assistants`.
3. Condition: **Source**, **matches regex**:

   ```
   .*(chatgpt|openai|perplexity|gemini\.google|bard\.google|copilot\.microsoft|copilot\.cloud\.microsoft|edgeservices\.bing|claude\.ai|mistral\.ai|deepseek|meta\.ai|grok\.com|you\.com|phind\.com|poe\.com).*
   ```

   The `.*` at each end makes it work whether GA treats the pattern as a full or
   a partial match.
4. Save the channel, then **Reorder** and drag **AI assistants** above
   **Referral**. GA files a session under the first channel that matches, so
   below Referral it would never catch anything. Save the group.
5. To use it: **Reports > Acquisition > Traffic acquisition**, click the
   dimension drop-down at the top of the table's first column and pick
   `Default + AI assistants`. Channel groups apply to past data too, so history
   shows straight away.

Why Source and not Medium: ChatGPT adds `utm_source=chatgpt.com` to its links
with no medium, so the default grouping files those visits under Unassigned.
Matching on source catches the tagged links and the plain referrals alike.

### 2b. Key events

The site sends these two (`components/Analytics.tsx` and `app/contact/ContactContent.tsx`):

- `quote_request_submitted`: the contact form went through
- `phone_call_click`: a tap on the phone number, anywhere on the site

1. **Data display > Events**. Find each one and switch on **Mark as key event**.
2. An event only appears in that list once it has fired recently. If one's
   missing, use **Data display > Key events > New key event** and type the name
   exactly as above.
3. For `phone_call_click`, open its menu (three dots) on the Key events page and
   set the counting method to **Once per session**. People often tap the number
   twice, and one call is one lead.

Key events count from the day they're marked, not backwards.

### 2c. Register the form's answers

GA receives these with every form submission but won't show them in reports
until they're registered. **Data display > Custom definitions > Create custom
dimension**, once for each:

| Dimension name   | Scope | Event parameter |
|------------------|-------|-----------------|
| Found us via     | Event | `found_via`     |
| Enquiry service  | Event | `service`       |
| Enquiry urgency  | Event | `urgency`       |

Not retroactive: values show from the day each is created. `found_via` only
starts arriving once the form change is live. Its values are `google-search`,
`google-maps`, `chatgpt`, `gemini`, `other-ai`, `social`, `referral`,
`directory`, `other`, or `not specified` when it's left blank. The same answer,
in words, is in the enquiry email as "Found us via".

### 2d. Tag the Business Profile website link

1. Search "JPD Complete Electrical" on Google while signed in to the account that
   manages the profile (or go to business.google.com), then **Edit profile >
   Contact > Website**.
2. Set it to (bare domain, not www):

   ```
   https://jpdcompleteelectrical.com.au/?utm_source=google&utm_medium=organic&utm_campaign=gbp
   ```

3. Save. Google can take a while to approve the edit.

Those visits stay in Organic Search but can be picked out: in Traffic acquisition,
switch the dimension to **Session campaign** and look for `gbp`. The home page's
canonical tag stops the tagged URL counting as a separate page.
