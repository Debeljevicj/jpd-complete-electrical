import Image from 'next/image';
import type { CSSProperties } from 'react';
import { photoSize } from '@/lib/photo-size';

/**
 * One photo, any shape of box, without a hand crop.
 *
 * The rule (Justin's call, 15 Nov 2026, after a portrait photo hard-cropped
 * into a wide strip looked wrong on a phone):
 *
 * 1. The whole photo goes up. Its shape is read from the file at build time.
 * 2. If it has to be cropped, the crop centres on `focus` (a CSS
 *    object-position, e.g. "45% 43%" for between a face and the hands).
 * 3. On phones a banner changes shape to suit the photo: 4:5 for an upright
 *    photo, 4:3 for a wide one.
 * 4. When the photo and the box differ in shape by more than MISMATCH (an
 *    upright photo in a wide desktop banner), it isn't cropped at all. It sits
 *    whole in the middle with a blurred, darkened copy of itself behind it.
 *
 * Cards don't use this. They always fill edge to edge on the focal point.
 *
 * No JavaScript: the mode for each width is worked out here at build time and
 * applied by the .photo-slot rules in globals.css.
 */

const MISMATCH = 1.8;
/** The blog banner's desktop shape, 896 x 400 at full width. */
const BANNER = 896 / 400;

export type PhotoSlotVariant = 'banner' | 'hero';

function mode(slot: number, photo: number) {
    return Math.max(slot / photo, photo / slot) > MISMATCH ? 'framed' : 'cover';
}

export default function PhotoSlot({
    src,
    alt,
    focus = '50% 50%',
    variant = 'banner',
    sizes,
    priority = false,
    className = '',
}: {
    src: string;
    alt: string;
    focus?: string;
    variant?: PhotoSlotVariant;
    sizes: string;
    priority?: boolean;
    className?: string;
}) {
    const { width, height } = photoSize(src);
    const ratio = width / height;

    // Phone shape first, then from 640px up.
    const slotSm = variant === 'banner' ? (ratio < 1 ? 4 / 5 : 4 / 3) : 4 / 3;
    const slotLg = variant === 'banner' ? BANNER : 4 / 3;

    const style = {
        '--ar-sm': slotSm,
        '--ar-lg': slotLg,
        // A framed photo shows no narrower than 3:4, so a very tall one isn't a sliver.
        '--ir': Math.max(ratio, 3 / 4),
    } as CSSProperties;

    return (
        <div
            className={`photo-slot ${className}`}
            data-sm={mode(slotSm, ratio)}
            data-lg={mode(slotLg, ratio)}
            style={style}
        >
            <Image src={src} alt="" aria-hidden fill sizes={sizes} className="photo-slot-bg" />
            <div className="photo-slot-inner">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes={sizes}
                    priority={priority}
                    className="object-cover"
                    style={{ objectPosition: focus }}
                />
            </div>
        </div>
    );
}
