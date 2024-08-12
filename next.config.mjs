// next.config.mjs
import { withBundleAnalyzer } from '@next/bundle-analyzer';

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  experimental: {
    appDir: true,
  },
  webpack(config) {
    return config;
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);