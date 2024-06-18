import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '',  // Remove the 'horizon-ui-chakra' or set it to an empty string
};

export default nextConfig;