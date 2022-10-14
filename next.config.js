/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  images: {
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
      { hostname: 'source.unsplash.com' },
      { hostname: 'images.pexels.com' },
    ],
  },
};
