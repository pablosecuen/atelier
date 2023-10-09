/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ugc.production.linktr.ee", "demo.vercel.store", "schema.org", "res.cloudinary.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
