import type { Review } from '@/lib/reviews';

/**
 * The opening of a review, cut at a sentence end where one falls inside the
 * limit and at a word otherwise. Anything cut short ends in an ellipsis, so a
 * shortened quote never reads as the whole review.
 */
export function leadLine(content: string, max = 160): string {
    const text = content.replace(/\s+/g, ' ').trim();
    if (text.length <= max) return text;
    const head = text.slice(0, max);
    const sentenceEnd = Math.max(head.lastIndexOf('. '), head.lastIndexOf('! '));
    if (sentenceEnd > max * 0.45) return head.slice(0, sentenceEnd + 1);
    return head.slice(0, head.lastIndexOf(' ')).replace(/[,;:.]$/, '') + '...';
}

/**
 * The sentence in a review that contains a match, for folds that quote
 * reviewers on one point. Cut to `max` with an ellipsis either side as needed.
 */
export function sentenceMatching(content: string, pattern: RegExp, max = 220): string | null {
    const text = content.replace(/\s+/g, ' ').trim();
    const sentences = text.match(/[^.!?]+[.!?]*/g) ?? [text];
    const i = sentences.findIndex((s) => pattern.test(s));
    if (i < 0) return null;
    let quote = sentences[i].trim();
    const cut = quote.length > max;
    if (cut) quote = quote.slice(0, quote.slice(0, max).lastIndexOf(' ')).replace(/[,;:.]$/, '');
    return `${i > 0 ? '...' : ''}${quote}${cut ? '...' : ''}`;
}

/** Reviews that mention a theme, newest first, each with the sentence that mentions it. */
export function reviewsMentioning(reviews: Review[], pattern: RegExp, count = 3, max = 220) {
    return reviews
        .map((review) => ({ review, quote: sentenceMatching(review.content, pattern, max) }))
        .filter((r): r is { review: Review; quote: string } => Boolean(r.quote))
        .slice(0, count);
}
