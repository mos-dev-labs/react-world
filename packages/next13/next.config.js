/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.realworld.io',
        port: ''
      }
    ]
  }
}

// eslint-disable-next-line no-undef
module.exports = nextConfig
