/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.avpasion.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "cdn.avpasion.com",
        port: "",
        pathname: "/ctv-statics/**",
      },
    ],
  },
};

module.exports = nextConfig;
