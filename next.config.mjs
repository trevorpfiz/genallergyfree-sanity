/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }],
  },

  images: {
    remotePatterns: [{ hostname: 'cdn.sanity.io' }, { hostname: 'source.unsplash.com' }],
  },

  redirects: async () => [
    {
      source: '/learn',
      destination: '/courses',
      permanent: true,
    },
  ],
};

export default nextConfig;
