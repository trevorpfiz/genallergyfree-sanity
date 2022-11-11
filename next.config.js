/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }],
    serverComponentsExternalPackages: ['next-sanity'],
  },
  images: {
    remotePatterns: [{ hostname: 'cdn.sanity.io' }],
  },
};

module.exports = nextConfig;
