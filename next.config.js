/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["storage.googleapis.com", "cdn.nathanleroy.io"]
  },
}

module.exports = nextConfig
