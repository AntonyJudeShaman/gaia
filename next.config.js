/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  swcMinify: true,
  experimental: {
    appDir:true,
    serverActions:true,
  },
};

module.exports = nextConfig;
