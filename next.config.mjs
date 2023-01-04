/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// const ContentSecurityPolicy = `
//   default-src 'self';
//   child-src 'self';
//   font-src 'self' data:;
//   img-src 'self' data:;
//   object-src 'none';
//   script-src 'self';
//   style-src 'self';
//   base-uri 'none';
//   require-trusted-types-for 'script';
//   frame-ancestors 'none';
// `;

const ContentSecurityPolicy = `
  frame-ancestors 'none';
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
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
