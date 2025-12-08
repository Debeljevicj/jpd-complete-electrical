/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Static HTML export for Cloudflare Pages
    images: {
        unoptimized: true, // Required for static export
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 60,
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    trailingSlash: true, // Better compatibility with static hosting
}

module.exports = nextConfig
