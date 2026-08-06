/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'iot.ilifesmart.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn-cookieyes.com',
        pathname: '/**',
      }
    ],
    unoptimized: true,
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/sublime_tob',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/sublime',
        destination: '/sublime_tob',
      },
      {
        source: '/sublime-tob',
        destination: '/sublime_tob',
      },
    ];
  },
}

module.exports = nextConfig
