/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.nathanleroy.io',
        pathname: '/images/*',
      },
      {
        protocol: 'https',
        hostname: 'cdn.nathanleroy.io',
        pathname: '/images/**',
      },
      {
        protocol: 'http',
        hostname: 'cdn.nathanleroy.io',
        pathname: '/images/**',
      },
    ],
  },
}

module.exports = nextConfig
