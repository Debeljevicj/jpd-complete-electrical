/**
 * Serialises structured data for a <script type="application/ld+json"> block.
 *
 * JSON.stringify leaves `<` alone, so a `</script>` (or `<!--`) anywhere in the
 * data would end the script element early and the rest would be parsed as HTML.
 * Escaping every `<` as `<` keeps the JSON identical once parsed while making
 * it impossible to break out of the tag.
 */
export function jsonLd(data: unknown): string {
    return JSON.stringify(data).replace(/</g, '\\u003c');
}
