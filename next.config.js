/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // SSG — no server needed
  trailingSlash: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
