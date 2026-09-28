# JPD Complete Electrical website: notes for Claude

Next.js static export, deployed on Cloudflare Pages from `main`. A push to `main` is a live deploy, so don't push without Justin's go-ahead.

## Blog posts

Posts live in `data/blog-posts.ts`, `data/blog-guides-*.ts` (guides) and `data/job-reports.ts` (job write-ups). They all render at `/blog/<slug>/`. Every post, guide or job report, follows these rules:

- **No em dashes or en dashes** anywhere in the copy. Use commas, full stops, colons or brackets.
- **Open with a "Why This Matters to You" section**, second person, including a plain statement of the real consequence of skipping the thing the post is about. Technical explanation comes after it.
- **End with an FAQ section.** Every post has a `faqs` array, written as part of the post, not added later. The field is required, so a post without one fails the build, and `test/blog-faqs.test.mjs` checks the rest. Guides get five questions, job reports four.

### Writing the FAQs

- Each question adds something the article doesn't already answer. Don't restate a heading as a question.
- Don't repeat a question already on `/faq` (`data/faqs.ts`), on the matching service page (`data/services/`) or on another post. Two pages with the same question compete for it.
- Phrase questions the way a homeowner types them into Google, in Australian terms (safety switch, switchboard, powerpoint).
- Answer in 40 to 100 words, plain text. The first sentence answers the question outright, because that's the sentence search engines and AI assistants lift.
- Every claim must be true for Australia, and for South Australia where the rules differ, in which case say "in South Australia". Check regulatory claims against a primary source (SA Office of the Technical Regulator, SA Power Networks, SafeWork SA, CBS, energy.gov.au, manufacturer manuals), not another electrician's blog.
- Don't invent JPD facts. No prices, timeframes, warranties or policies unless the post or `data/faqs.ts` already states them. For a cost question with no figure to hand, explain what drives the cost.
- Job report FAQs relate to that job and its kind of work, without inventing anything about the customer or the property.
- Australian spelling, contractions, direct and plain. No sales lines.
