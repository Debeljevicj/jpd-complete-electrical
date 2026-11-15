import { openSync, readSync, closeSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Width and height of a photo under public/, read from the file header at build
 * time. PhotoSlot needs the photo's shape to decide whether to crop it or frame
 * it, and hand-typed sizes go stale the first time a photo is swapped.
 *
 * Reads WebP (VP8, VP8L, VP8X), JPEG and PNG. Server-only: it touches the disk.
 */
export interface PhotoSize {
    width: number;
    height: number;
}

const cache = new Map<string, PhotoSize>();

export function photoSize(src: string): PhotoSize {
    const hit = cache.get(src);
    if (hit) return hit;

    const file = join(process.cwd(), 'public', src.split(/[?#]/)[0]);
    const fd = openSync(file, 'r');
    // 64 KB covers any JPEG whose SOF sits behind EXIF; WebP and PNG need 30 bytes.
    const buf = Buffer.alloc(65536);
    const read = readSync(fd, buf, 0, buf.length, 0);
    closeSync(fd);

    const size = parse(buf.subarray(0, read));
    if (!size) throw new Error(`photoSize: can't read the dimensions of ${src}`);
    cache.set(src, size);
    return size;
}

function parse(b: Buffer): PhotoSize | null {
    // WebP: RIFF....WEBP then a VP8 / VP8L / VP8X chunk.
    if (b.toString('ascii', 0, 4) === 'RIFF' && b.toString('ascii', 8, 12) === 'WEBP') {
        const chunk = b.toString('ascii', 12, 16);
        if (chunk === 'VP8X') {
            return { width: 1 + b.readUIntLE(24, 3), height: 1 + b.readUIntLE(27, 3) };
        }
        if (chunk === 'VP8L') {
            const bits = b.readUInt32LE(21);
            return { width: 1 + (bits & 0x3fff), height: 1 + ((bits >> 14) & 0x3fff) };
        }
        if (chunk === 'VP8 ') {
            return { width: b.readUInt16LE(26) & 0x3fff, height: b.readUInt16LE(28) & 0x3fff };
        }
        return null;
    }

    // PNG: IHDR is always the first chunk.
    if (b.readUInt32BE(0) === 0x89504e47) {
        return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
    }

    // JPEG: walk the markers to the first start-of-frame.
    if (b[0] === 0xff && b[1] === 0xd8) {
        let i = 2;
        while (i + 9 < b.length) {
            if (b[i] !== 0xff) return null;
            const marker = b[i + 1];
            const len = b.readUInt16BE(i + 2);
            const isSof = marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
            if (isSof) return { height: b.readUInt16BE(i + 5), width: b.readUInt16BE(i + 7) };
            i += 2 + len;
        }
    }
    return null;
}
