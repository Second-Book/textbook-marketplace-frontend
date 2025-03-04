import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/textbooks",
        permanent: true
      },
    ]
  },
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/media/__sized__/**',
        search: '',
      },
    ],
  },
}

export default nextConfig;
