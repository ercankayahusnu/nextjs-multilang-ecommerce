/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    formats: ["image/avif", "image/webp"], // modern formatlar
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
