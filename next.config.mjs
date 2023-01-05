/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const ContentSecurityPolicy = `
  object-src 'none';
  script-src * data: blob: 'unsafe-inline' 'unsafe-eval';
  frame-ancestors 'none';
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
];

const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }],
  },

  images: {
    remotePatterns: [{ hostname: 'cdn.sanity.io' }, { hostname: 'source.unsplash.com' }],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  productionBrowserSourceMaps: true,

  redirects: async () => [
    {
      source: '/learn',
      destination: '/courses',
      permanent: true,
    },
  ],

  headers: async () => [
    {
      // Apply these headers to all routes in your application.
      source: '/:path*',
      headers: securityHeaders,
    },
  ],
};

export default bundleAnalyzer(nextConfig);
