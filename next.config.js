/** @type {import('next').NextConfig} */
const nextConfig = {
  // No output:'export' needed — Vercel handles Next.js SSG natively.
  // Pages with generateStaticParams are still statically built at deploy time.
  trailingSlash: true,
};

module.exports = nextConfig;
